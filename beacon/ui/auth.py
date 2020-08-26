import logging
import uuid
import base64
from urllib.parse import urlencode
import os

from aiohttp.web import HTTPFound, HTTPBadRequest
from aiohttp import ClientSession
from aiohttp_session import get_session

from .. import conf

LOG = logging.getLogger(__name__)

async def login(request):

    next_url = request.rel_url.query.get('next', '/')
    LOG.debug('next URL: %s', next_url)

    request_session = await get_session(request)
    access_token = request_session.get('access_token')
    if access_token:
        LOG.debug('Token: %s', access_token)
        raise HTTPFound(next_url)

    redirect_uri = conf.idp_redirect_uri
    # redirect_uri += '?next=' if '?' not in redirect_uri else '&next='
    # redirect_uri += next_url
            
    code = request.rel_url.query.get('code')
    if code is None:
        LOG.debug('We must have a code')
        params = urlencode({ 'response_type': 'code',
                             'client_id': conf.idp_client_id,
                             'scope': conf.idp_scope,
                             'state': uuid.uuid4(),
                             'redirect_uri': redirect_uri })
        url = conf.idp_authorize + params
        LOG.debug('No code: Redirecting to URL: %s', url)
        raise HTTPFound(url)

    state = request.rel_url.query.get('state')
    if not state:
        LOG.debug('We must have a state')
        raise HTTPBadRequest(reason="Should have a state")

    headers = { 'Accept': 'application/json',
                #'Content-type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }
    
    # We have a code and a state
    LOG.debug('Code: %s', code)

    #basic = base64.b64encode('{}:{}'.format(conf.idp_client_id,conf.idp_client_secret).encode())
    #headers['Authorization'] = str(b'Basic '+basic)
    
    params = { 
        'client_id': conf.idp_client_id,
        'client_secret': conf.idp_client_secret,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': redirect_uri
    }
    LOG.debug( 'Post Request %r', params)
    data = {}
    async with ClientSession() as session:
        async with session.post(conf.idp_access_token,
                                headers=headers,
                                data=urlencode(params)) as resp:
            if resp.status > 200:
                LOG.error( 'Error when getting the access token: %r', resp)
                raise HTTPBadRequest(reason='Invalid response for access token.')

            data = await resp.json()

    access_token = data.get('access_token')
    if not access_token: 
        LOG.error( 'Error when getting the access token: %r', res)
        raise HTTPBadRequest(reason='Failed to obtain OAuth access token.')

    LOG.debug('All good, we got an access token: %s...', access_token[:30])
    request_session['access_token'] = access_token
    id_token = data.get('id_token')
    if id_token:
        LOG.debug('And an ID token? %s...', id_token[:30])
        request_session['id_token'] = id_token

    user = None
    async with ClientSession() as session:
        headers['Authorization'] = 'Bearer '+access_token
        async with session.post(
                conf.idp_user_info,
                headers=headers,
        ) as resp:
            
            if resp.status == 200:
                user = await resp.json()

    LOG.info('The user is: %r', user)
    request_session['user'] = user
    raise HTTPFound(next_url)

async def logout(request):

    request_session = await get_session(request)

    try:
        # Calling the logout endpoint on the IdP
        access_token = request_session['access_token']
        LOG.debug('Access token: %s', access_token)
        if access_token:
            async with ClientSession() as session:
                headers = { #'Accept': 'application/json',
                            'Authorization': 'Bearer ' + access_token,
                            #'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                }
                LOG.debug('Contacting %s', conf.idp_logout)
                async with session.get(conf.idp_logout,
                                       headers=headers,
                                       data=urlencode({ 'redirect_uri': 'http://localhost:5050'})
                ) as resp:
                    if resp.status == 200:
                        LOG.info('User successfully logged out')
                    else:
                        LOG.error('Logout error: %s', resp)
                    LOG.debug(await resp.text())
    except Exception as e:
        LOG.error('Error calling the IdP logout endpoint: %s', e)

    # Cleaning the session
    request_session.invalidate()
    next_url = request.rel_url.query.get('next', '/')
    LOG.debug('next URL: %s', next_url)
    raise HTTPFound(next_url)
        


def do_logout(request):
    LOG.info('Logging out: %s', request.session.get('user'))


    # None or del ?
    logout(request) # kills the session cookie

    #messages.info(request, f'Succesfully logged out')

    # Note: Not logging out from the IdP
