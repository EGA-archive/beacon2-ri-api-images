from aiohttp import web

from beacon.db import analyses, biosamples, cohorts, datasets, g_variants, individuals, runs
from beacon.request.handlers import collection_handler, result_set_handler
from beacon.response import framework, filtering_terms, info, index, service_info

routes = [

    ########################################
    # CONFIG
    ########################################

    web.get('/', index.handler),
    web.get('/api/', info.handler),
    web.get('/api/info/', info.handler, name="info"),    # Name added to redirect / -> /info
    web.get('/api/service-info/', service_info.handler),
    web.get('/api/filtering_terms/', filtering_terms.handler),

    web.get('/api/configuration/', framework.configuration),
    web.get('/api/entry_types/', framework.entry_types),
    web.get('/api/map/', framework.beacon_map),

    ########################################
    # GET
    ########################################

    web.get('/api/analyses/', result_set_handler(db_fn=analyses.get_analyses)),
    web.get('/api/analyses/{id}/', result_set_handler(db_fn=analyses.get_analysis_with_id)),
    web.get('/api/analyses/{id}/g_variants/', result_set_handler(db_fn=analyses.get_variants_of_analysis)),

    web.get('/api/biosamples/', result_set_handler(db_fn=biosamples.get_biosamples)),
    web.get('/api/biosamples/{id}/', result_set_handler(db_fn=biosamples.get_biosample_with_id)),
    web.get('/api/biosamples/{id}/g_variants/', result_set_handler(db_fn=biosamples.get_variants_of_biosample)),
    web.get('/api/biosamples/{id}/analyses/', result_set_handler(db_fn=biosamples.get_analyses_of_biosample)),
    web.get('/api/biosamples/{id}/runs/', result_set_handler(db_fn=biosamples.get_runs_of_biosample)),

    web.get('/api/cohorts/', collection_handler(db_fn=cohorts.get_cohorts)),
    web.get('/api/cohorts/{id}/', collection_handler(db_fn=cohorts.get_cohort_with_id)),
    web.get('/api/cohorts/{id}/individuals/', result_set_handler(db_fn=cohorts.get_individuals_of_cohort)),
    web.get('/api/cohorts/{id}/filtering_terms/', result_set_handler(db_fn=cohorts.get_filtering_terms_of_cohort)),
    web.get('/api/cohorts/{id}/g_variants/', result_set_handler(db_fn=cohorts.get_variants_of_cohort)),
    web.get('/api/cohorts/{id}/biosamples/', result_set_handler(db_fn=cohorts.get_biosamples_of_cohort)),
    web.get('/api/cohorts/{id}/runs/', result_set_handler(db_fn=cohorts.get_runs_of_cohort)),
    web.get('/api/cohorts/{id}/analyses/', result_set_handler(db_fn=cohorts.get_analyses_of_cohort)),

    web.get('/api/datasets/', collection_handler(db_fn=datasets.get_datasets)),
    web.get('/api/datasets/{id}/', collection_handler(db_fn=datasets.get_dataset_with_id)),
    web.get('/api/datasets/{id}/g_variants/', result_set_handler(db_fn=datasets.get_variants_of_dataset)),
    web.get('/api/datasets/{id}/biosamples/', result_set_handler(db_fn=datasets.get_biosamples_of_dataset)),
    web.get('/api/datasets/{id}/individuals/', result_set_handler(db_fn=datasets.get_individuals_of_dataset)),
    web.get('/api/datasets/{id}/filtering_terms/', result_set_handler(db_fn=datasets.get_filtering_terms_of_dataset)),
    web.get('/api/datasets/{id}/runs/', result_set_handler(db_fn=datasets.get_runs_of_dataset)),
    web.get('/api/datasets/{id}/analyses/', result_set_handler(db_fn=datasets.get_analyses_of_dataset)),

    web.get('/api/g_variants/', result_set_handler(db_fn=g_variants.get_variants)),
    web.get('/api/g_variants/{id}/', result_set_handler(db_fn=g_variants.get_variant_with_id)),
    web.get('/api/g_variants/{id}/biosamples/', result_set_handler(db_fn=g_variants.get_biosamples_of_variant)),
    web.get('/api/g_variants/{id}/individuals/', result_set_handler(db_fn=g_variants.get_individuals_of_variant)),
    web.get('/api/g_variants/{id}/runs/', result_set_handler(db_fn=g_variants.get_runs_of_variant)),
    web.get('/api/g_variants/{id}/analyses/', result_set_handler(db_fn=g_variants.get_analyses_of_variant)),

    web.get('/api/individuals/', result_set_handler(db_fn=individuals.get_individuals)),
    web.get('/api/individuals/{id}/', result_set_handler(db_fn=individuals.get_individual_with_id)),
    web.get('/api/individuals/{id}/g_variants/', result_set_handler(db_fn=individuals.get_variants_of_individual)),
    web.get('/api/individuals/{id}/biosamples/', result_set_handler(db_fn=individuals.get_biosamples_of_individual)),
    web.get('/api/individuals/{id}/filtering_terms/', result_set_handler(db_fn=individuals.get_filtering_terms_of_individual)),
    web.get('/api/individuals/{id}/runs/', result_set_handler(db_fn=individuals.get_runs_of_individual)),
    web.get('/api/individuals/{id}/analyses/', result_set_handler(db_fn=individuals.get_analyses_of_individual)),

    web.get('/api/runs/', result_set_handler(db_fn=runs.get_runs)),
    web.get('/api/runs/{id}/', result_set_handler(db_fn=runs.get_run_with_id)),
    web.get('/api/runs/{id}/g_variants/', result_set_handler(db_fn=runs.get_variants_of_run)),
    web.get('/api/runs/{id}/analyses/', result_set_handler(db_fn=runs.get_analyses_of_run)),

    ########################################
    # POST
    ########################################

    web.post('/api/analyses/', result_set_handler(db_fn=analyses.get_analyses)),
    web.post('/api/analyses/{id}/', result_set_handler(db_fn=analyses.get_analysis_with_id)),
    web.post('/api/analyses/{id}/g_variants/', result_set_handler(db_fn=analyses.get_variants_of_analysis)),

    web.post('/api/biosamples/', result_set_handler(db_fn=biosamples.get_biosamples)),
    web.post('/api/biosamples/{id}/', result_set_handler(db_fn=biosamples.get_biosample_with_id)),
    web.post('/api/biosamples/{id}/g_variants/', result_set_handler(db_fn=biosamples.get_variants_of_biosample)),
    web.post('/api/biosamples/{id}/analyses/', result_set_handler(db_fn=biosamples.get_analyses_of_biosample)),
    web.post('/api/biosamples/{id}/runs/', result_set_handler(db_fn=biosamples.get_runs_of_biosample)),

    web.post('/api/cohorts/', collection_handler(db_fn=cohorts.get_cohorts)),
    web.post('/api/cohorts/{id}/', collection_handler(db_fn=cohorts.get_cohort_with_id)),
    web.post('/api/cohorts/{id}/individuals/', result_set_handler(db_fn=cohorts.get_individuals_of_cohort)),
    web.post('/api/cohorts/{id}/filtering_terms/', result_set_handler(db_fn=cohorts.get_filtering_terms_of_cohort)),
    web.post('/api/cohorts/{id}/g_variants/', result_set_handler(db_fn=cohorts.get_variants_of_cohort)),
    web.post('/api/cohorts/{id}/biosamples/', result_set_handler(db_fn=cohorts.get_biosamples_of_cohort)),
    web.post('/api/cohorts/{id}/runs/', result_set_handler(db_fn=cohorts.get_runs_of_cohort)),
    web.post('/api/cohorts/{id}/analyses/', result_set_handler(db_fn=cohorts.get_analyses_of_cohort)),

    web.post('/api/datasets/', collection_handler(db_fn=datasets.get_datasets)),
    web.post('/api/datasets/{id}/', collection_handler(db_fn=datasets.get_dataset_with_id)),
    web.post('/api/datasets/{id}/g_variants/', result_set_handler(db_fn=datasets.get_variants_of_dataset)),
    web.post('/api/datasets/{id}/biosamples/', result_set_handler(db_fn=datasets.get_biosamples_of_dataset)),
    web.post('/api/datasets/{id}/individuals/', result_set_handler(db_fn=datasets.get_individuals_of_dataset)),
    web.post('/api/datasets/{id}/filtering_terms/', result_set_handler(db_fn=datasets.get_filtering_terms_of_dataset)),
    web.post('/api/datasets/{id}/runs/', result_set_handler(db_fn=datasets.get_runs_of_dataset)),
    web.post('/api/datasets/{id}/analyses/', result_set_handler(db_fn=datasets.get_analyses_of_dataset)),

    web.post('/api/g_variants/', result_set_handler(db_fn=g_variants.get_variants)),
    web.post('/api/g_variants/{id}/', result_set_handler(db_fn=g_variants.get_variant_with_id)),
    web.post('/api/g_variants/{id}/biosamples/', result_set_handler(db_fn=g_variants.get_biosamples_of_variant)),
    web.post('/api/g_variants/{id}/individuals/', result_set_handler(db_fn=g_variants.get_individuals_of_variant)),
    web.post('/api/g_variants/{id}/runs/', result_set_handler(db_fn=g_variants.get_runs_of_variant)),
    web.post('/api/g_variants/{id}/analyses/', result_set_handler(db_fn=g_variants.get_analyses_of_variant)),

    web.post('/api/individuals/', result_set_handler(db_fn=individuals.get_individuals)),
    web.post('/api/individuals/{id}/', result_set_handler(db_fn=individuals.get_individual_with_id)),
    web.post('/api/individuals/{id}/g_variants/', result_set_handler(db_fn=individuals.get_variants_of_individual)),
    web.post('/api/individuals/{id}/biosamples/', result_set_handler(db_fn=individuals.get_biosamples_of_individual)),
    web.post('/api/individuals/{id}/filtering_terms/', result_set_handler(db_fn=individuals.get_filtering_terms_of_individual)),
    web.post('/api/individuals/{id}/runs/', result_set_handler(db_fn=individuals.get_runs_of_individual)),
    web.post('/api/individuals/{id}/analyses/', result_set_handler(db_fn=individuals.get_analyses_of_individual)),

    web.post('/api/runs/', result_set_handler(db_fn=runs.get_runs)),
    web.post('/api/runs/{id}/', result_set_handler(db_fn=runs.get_run_with_id)),
    web.post('/api/runs/{id}/g_variants/', result_set_handler(db_fn=runs.get_variants_of_run)),
    web.post('/api/runs/{id}/analyses/', result_set_handler(db_fn=runs.get_analyses_of_run)),
]
