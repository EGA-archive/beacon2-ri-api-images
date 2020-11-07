import logging
import uuid
import base64
from urllib.parse import urlencode

from aiohttp.web import HTTPFound, HTTPBadRequest, HTTPUnauthorized
from aiohttp import ClientSession, BasicAuth, FormData
from aiohttp_session import get_session

from ... import conf

LOG = logging.getLogger(__name__)


async def get_user_info_and_redirect(access_token, next_url, request_session):
    '''
    We use the access_token to get the user info.
    Upon success, we save the info in request_session and redirect the next_url.
    On failure (ie an invalid token), we remove the info from the request_session,
    try to get an explanation, and do _not_ redirect anywhere.
    '''
    # LOG.debug('Token: %s', access_token)

    async with ClientSession() as session:
        headers = { 'Accept': 'application/json', 'Authorization': 'Bearer ' + access_token }
        LOG.debug('Contacting %s', conf.idp_user_info)
        async with session.get(conf.idp_user_info, headers=headers) as resp:
            # LOG.debug('Response %s', resp)
            if resp.status == 200:
                user = await resp.json()
                # Save and exit
                LOG.info('user: %s', user)
                request_session['user'] = user
                raise HTTPFound(next_url)
            else:
                content = await resp.text()
                LOG.error('Content: %s', content)

    # Invalid access token
    LOG.error('Invalid token')
    del request_session['access_token']
    if 'user' in request_session:
        del request_session['user'] 
    # Get the explanation
    async with ClientSession() as session:
        async with session.post(conf.idp_introspection,
                                auth=BasicAuth(conf.idp_client_id, password=conf.idp_client_secret),
                                data=FormData({ 'token': access_token, 'token_type_hint': 'access_token' }, charset='UTF-8')
        ) as resp:
            LOG.debug('Response %s', resp)
            content = await resp.text()
            LOG.debug('Content: %s', content)
    LOG.debug('Invalid token, try to get a new one')


async def do_login(request, request_session, next_url):

    code = request.query.get('code')
    if code is None:
        LOG.debug('We must have a code')
        state = str(uuid.uuid4())
        params = urlencode({ 'response_type': 'code',
                             'client_id': conf.idp_client_id,
                             'scope': conf.idp_scope,
                             'state': state,
                             'redirect_uri': conf.idp_redirect_uri })
        url = conf.idp_authorize if conf.idp_authorize.endswith('?') else (conf.idp_authorize + '?')
        url += params
        request_session['oidc_state'] = state
        LOG.debug('No code: Redirecting to URL: %s', url)
        raise HTTPFound(url)

    stored_state = request_session.get('oidc_state')
    state = request.query.get('state')
    if not state or stored_state != state:
        LOG.error('invalid state | %s =/= %s', stored_state, state)
        raise HTTPBadRequest(reason="Invalid state")

    # We have a code and a state
    LOG.debug('Code: %s', code)

    params = { 
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': conf.idp_redirect_uri
    }
    LOG.debug( 'Post Request %r', params)
    data = {}
    async with ClientSession() as session:
        LOG.debug('Contacting %s', conf.idp_access_token)
        async with session.post(conf.idp_access_token,
                                headers={ 'Accept': 'application/json' },
                                auth=BasicAuth(conf.idp_client_id,password=conf.idp_client_secret),
                                data=FormData(params, charset='UTF-8')
        ) as resp:
            if resp.status > 200:
                LOG.error( 'Error when getting the access token: %r', resp)
                raise HTTPBadRequest(reason='Invalid response for access token.')
            data = await resp.json()

    # extract access token
    access_token = data.get('access_token')
    if not access_token: 
        LOG.error( 'Error when getting the access token')
        raise HTTPBadRequest(reason='Failed to obtain OAuth access token.')

    LOG.debug('All good, we got an access token')
    # LOG.debug('Token: %s', access_token)
    request_session['access_token'] = access_token

    # Finally, save userinfo and redirect
    await get_user_info_and_redirect(access_token, next_url, request_session)

async def login(request):

    next_url = request.query.get('next', '/')
    LOG.debug('next URL: %s', next_url)

    request_session = await get_session(request)
    access_token = request_session.get('access_token')
    if access_token:
        # Redirect only if the token is valid
        await get_user_info_and_redirect(access_token, next_url, request_session)

    # Otherwise, we don't have a token (yet)
    # A redirect response will be raised
    await do_login(request, request_session, next_url)

    # If we reach here, we have an invalid token, even after creating it
    raise HTTPUnauthorized(reason='Failed to obtain access token.')

async def logout(request):

    next_url = request.query.get('next', '/')
    LOG.debug('next URL: %s', next_url)

    # Cleaning the session
    request_session = await get_session(request)
    token = request_session.get('access_token')
    request_session.invalidate()

    if not token:
        raise HTTPFound(next_url)

    redirect_uri = conf.welcome_url + next_url
    raise HTTPFound(conf.idp_logout + '?'+ urlencode({ 'redirect_uri': redirect_uri }))

