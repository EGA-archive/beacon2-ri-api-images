"""
Info Endpoint.

Querying the info endpoint reveals information about this beacon and its existing datasets 
and their associated metadata.

* ``/`` Beacon-v1
* ``/info`` Beacon-v1
* ``/info?model=GA4GH-ServiceInfo-v0.1`` GA4GH
* ``/service-info`` GA4GH

"""

import logging

from ...utils import resolve_token
from ...validation.request import RequestParameters, print_qparams
from ...validation.fields import ChoiceField, RegexField, SchemaField
from ...utils.db import fetch_datasets_metadata
from ...utils.stream import json_stream
from .response.info_response_schema import build_beacon_response, build_service_info_response
from .schemas import alternative


LOG = logging.getLogger(__name__)

# ----------------------------------------------------------------------------------------------------------------------
#                                         QUERY VALIDATION
# ----------------------------------------------------------------------------------------------------------------------

class InfoParameters(RequestParameters):
    model = ChoiceField('ga4gh-service-info-v1.0', default=None)
    requestedSchema = SchemaField('ga4gh-service-info-v1.0',
                                  'beacon-info-v2.0.0-draft.3',
                                  default='beacon-info-v2.0.0-draft.3')
    apiVersion = RegexField(r'^v[0-9]+(\.[0-9]+)*$')


# ----------------------------------------------------------------------------------------------------------------------
#                                         HANDLER FUNCTIONS
# ----------------------------------------------------------------------------------------------------------------------

proxy_info = InfoParameters()


async def handler(request):
    LOG.info('Running a GET info request')
    _, qparams_db = await proxy_info.fetch(request)

    if LOG.isEnabledFor(logging.DEBUG):
        print_qparams(qparams_db, proxy_info, LOG)

    LOG.debug('model %s', qparams_db.model)
    if qparams_db.model is not None:
        return await handler_ga4gh_service_info(request)

    # Fetch datasets info
    beacon_datasets = [r async for r in fetch_datasets_metadata()]

    all_datasets = [r['stable_id'] for r in beacon_datasets]

    access_token = request.headers.get('Authorization')
    if access_token:
        access_token = access_token[7:] # cut out 7 characters: len('Bearer ')

    authorized_datasets, authenticated = await resolve_token(access_token, all_datasets)
    if authenticated:
        LOG.debug('all datasets:  %s', all_datasets)
        LOG.info('resolved datasets:  %s', authorized_datasets)

    response_converted = build_beacon_response(beacon_datasets,
                                               qparams_db,
                                               build_service_info_response,
                                               authorized_datasets if authenticated else [])
    return await json_stream(request, response_converted)


async def handler_ga4gh_service_info(request):
    LOG.info('Running a GET service-info request')

    return await json_stream(request, alternative.ga4gh_service_info_v10(None))
