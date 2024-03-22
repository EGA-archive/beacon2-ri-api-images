from aiohttp import web

from beacon.db import occurrences, features, cohorts, datasets, g_variants, individuals, devices, filtering_terms, measurements, conditions
from beacon.request.handlers import collection_handler, generic_handler, filtering_terms_handler
from beacon.response import framework, info, service_info

routes = [

    ########################################
    # CONFIG
    ########################################

    web.get('/api', info.handler),
    web.get('/api/info', info.handler, name="info"),    # Name added to redirect / -> /info
    web.get('/api/service-info', service_info.handler),
    web.get('/api/filtering_terms', filtering_terms_handler(db_fn=filtering_terms.get_filtering_terms)),

    web.get('/api/configuration', framework.configuration),
    web.get('/api/entry_types', framework.entry_types),
    web.get('/api/map', framework.beacon_map),

    ########################################
    # GET
    ########################################

    web.get('/api/occurrences', generic_handler(db_fn=occurrences.get_occurrences)),
    web.get('/api/occurrences/filtering_terms', filtering_terms_handler(db_fn=occurrences.get_filtering_terms_of_occurrence)),
    web.get('/api/occurrences/{id}', generic_handler(db_fn=occurrences.get_occurrence_with_id)),
    web.get('/api/occurrences/{id}/g_variants', generic_handler(db_fn=occurrences.get_variants_of_occurrence)),

    web.get('/api/measurements', generic_handler(db_fn=measurements.get_measurements)),
    web.get('/api/measurements/filtering_terms', filtering_terms_handler(db_fn=measurements.get_filtering_terms_of_occurrence)),
    web.get('/api/measurements/{id}', generic_handler(db_fn=measurements.get_occurrence_with_id)),
    web.get('/api/measurements/{id}/g_variants', generic_handler(db_fn=measurements.get_variants_of_occurrence)),

    web.get('/api/conditions', generic_handler(db_fn=conditions.get_conditions)),
    web.get('/api/conditions/filtering_terms', filtering_terms_handler(db_fn=conditions.get_filtering_terms_of_occurrence)),
    web.get('/api/conditions/{id}', generic_handler(db_fn=conditions.get_occurrence_with_id)),
    web.get('/api/conditions/{id}/g_variants', generic_handler(db_fn=conditions.get_variants_of_occurrence)),

    web.get('/api/features', generic_handler(db_fn=features.get_features)),
    web.get('/api/features/filtering_terms', filtering_terms_handler(db_fn=features.get_filtering_terms_of_feature)),
    web.get('/api/features/{id}', generic_handler(db_fn=features.get_feature_with_id)),
    web.get('/api/features/{id}/g_variants', generic_handler(db_fn=features.get_variants_of_feature)),
    web.get('/api/feaatures/{id}/analyses', generic_handler(db_fn=features.get_analyses_of_feature)),
    web.get('/api/features/{id}/runs', generic_handler(db_fn=features.get_runs_of_biosample)),

    web.get('/api/cohorts', collection_handler(db_fn=cohorts.get_cohorts)),
    web.get('/api/cohorts/filtering_terms', filtering_terms_handler(db_fn=cohorts.get_filtering_terms_of_cohort)),
    web.get('/api/cohorts/{id}', collection_handler(db_fn=cohorts.get_cohort_with_id)),
    web.get('/api/cohorts/{id}/individuals', generic_handler(db_fn=cohorts.get_individuals_of_cohort)),

    web.get('/api/datasets', collection_handler(db_fn=datasets.get_datasets)),
    web.get('/api/datasets/filtering_terms', filtering_terms_handler(db_fn=datasets.get_filtering_terms_of_dataset)),
    web.get('/api/datasets/{id}', collection_handler(db_fn=datasets.get_dataset_with_id)),
    web.get('/api/datasets/{id}/g_variants', generic_handler(db_fn=datasets.get_variants_of_dataset)),
    web.get('/api/datasets/{id}/biosamples', generic_handler(db_fn=datasets.get_biosamples_of_dataset)),
    web.get('/api/datasets/{id}/individuals', generic_handler(db_fn=datasets.get_individuals_of_dataset)),
    web.get('/api/datasets/{id}/runs', generic_handler(db_fn=datasets.get_runs_of_dataset)),
    web.get('/api/datasets/{id}/analyses', generic_handler(db_fn=datasets.get_analyses_of_dataset)),

    web.get('/api/g_variants', generic_handler(db_fn=g_variants.get_variants)),
    web.get('/api/g_variants/filtering_terms', filtering_terms_handler(db_fn=g_variants.get_filtering_terms_of_genomicvariation)),
    web.get('/api/g_variants/{id}', generic_handler(db_fn=g_variants.get_variant_with_id)),
    web.get('/api/g_variants/{id}/biosamples', generic_handler(db_fn=g_variants.get_biosamples_of_variant)),
    web.get('/api/g_variants/{id}/individuals', generic_handler(db_fn=g_variants.get_individuals_of_variant)),
    web.get('/api/g_variants/{id}/runs', generic_handler(db_fn=g_variants.get_runs_of_variant)),
    web.get('/api/g_variants/{id}/analyses', generic_handler(db_fn=g_variants.get_analyses_of_variant)),


    web.get('/api/individuals', generic_handler(db_fn=individuals.get_individuals)),
    web.get('/api/individuals/filtering_terms', filtering_terms_handler(db_fn=individuals.get_filtering_terms_of_individual)),
    web.get('/api/individuals/{id}', generic_handler(db_fn=individuals.get_individual_with_id)),
    web.get('/api/individuals/{id}/g_variants', generic_handler(db_fn=individuals.get_variants_of_individual)),
    web.get('/api/individuals/{id}/biosamples', generic_handler(db_fn=individuals.get_biosamples_of_individual)),
    web.get('/api/individuals/{id}/runs', generic_handler(db_fn=individuals.get_runs_of_individual)),
    web.get('/api/individuals/{id}/analyses', generic_handler(db_fn=individuals.get_analyses_of_individual)),

    web.get('/api/devices', generic_handler(db_fn=devices.get_devices)),
    web.get('/api/devices/filtering_terms', filtering_terms_handler(db_fn=devices.get_filtering_terms_of_device)),
    web.get('/api/devices/{id}', generic_handler(db_fn=devices.get_device_with_id)),
    web.get('/api/devices/{id}/g_variants', generic_handler(db_fn=devices.get_variants_of_run)),
    web.get('/api/runs/{id}/analyses', generic_handler(db_fn=devices.get_analyses_of_run)),



    ########################################
    # POST
    ########################################
    web.post('/api', info.handler),
    web.post('/api/occurrences', generic_handler(db_fn=occurrences.get_occurrences)),
    web.post('/api/occurrences/filtering_terms', filtering_terms_handler(db_fn=occurrences.get_filtering_terms_of_occurrence)),
    web.post('/api/occurrences/{id}', generic_handler(db_fn=occurrences.get_occurrence_with_id)),
    web.post('/api/occurrences/{id}/g_variants', generic_handler(db_fn=occurrences.get_variants_of_occurrence)),

    web.post('/api/measurements', generic_handler(db_fn=measurements.get_measurements)),
    web.post('/api/measurements/filtering_terms', filtering_terms_handler(db_fn=measurements.get_filtering_terms_of_occurrence)),
    web.post('/api/measurements/{id}', generic_handler(db_fn=measurements.get_occurrence_with_id)),
    web.post('/api/measurements/{id}/g_variants', generic_handler(db_fn=measurements.get_variants_of_occurrence)),

    web.post('/api/conditions', generic_handler(db_fn=conditions.get_conditions)),
    web.post('/api/conditions/filtering_terms', filtering_terms_handler(db_fn=conditions.get_filtering_terms_of_occurrence)),
    web.post('/api/conditions/{id}', generic_handler(db_fn=conditions.get_occurrence_with_id)),
    web.post('/api/conditions/{id}/g_variants', generic_handler(db_fn=conditions.get_variants_of_occurrence)),

    web.post('/api/features', generic_handler(db_fn=features.get_features)),
    web.post('/api/features/filtering_terms', filtering_terms_handler(db_fn=features.get_filtering_terms_of_feature)),
    web.post('/api/features/{id}', generic_handler(db_fn=features.get_feature_with_id)),
    web.post('/api/features/{id}/g_variants', generic_handler(db_fn=features.get_variants_of_feature)),
    web.post('/api/features/{id}/analyses', generic_handler(db_fn=features.get_analyses_of_feature)),
    web.post('/api/biosamples/{id}/runs', generic_handler(db_fn=features.get_runs_of_biosample)),

    web.post('/api/cohorts', collection_handler(db_fn=cohorts.get_cohorts)),
    web.post('/api/cohorts/filtering_terms', filtering_terms_handler(db_fn=cohorts.get_filtering_terms_of_cohort)),
    web.post('/api/cohorts/{id}', collection_handler(db_fn=cohorts.get_cohort_with_id)),
    web.post('/api/cohorts/{id}/individuals', generic_handler(db_fn=cohorts.get_individuals_of_cohort)),
    web.post('/api/cohorts/{id}/filtering_terms', generic_handler(db_fn=cohorts.get_filtering_terms_of_cohort)),

    web.post('/api/datasets', collection_handler(db_fn=datasets.get_datasets)),
    web.post('/api/datasets/filtering_terms', filtering_terms_handler(db_fn=datasets.get_filtering_terms_of_dataset)),
    web.post('/api/datasets/{id}', collection_handler(db_fn=datasets.get_dataset_with_id)),
    web.post('/api/datasets/{id}/g_variants', generic_handler(db_fn=datasets.get_variants_of_dataset)),
    web.post('/api/datasets/{id}/biosamples', generic_handler(db_fn=datasets.get_biosamples_of_dataset)),
    web.post('/api/datasets/{id}/individuals', generic_handler(db_fn=datasets.get_individuals_of_dataset)),
    web.post('/api/datasets/{id}/filtering_terms', filtering_terms_handler(db_fn=datasets.get_filtering_terms_of_dataset)),
    web.post('/api/datasets/{id}/runs', generic_handler(db_fn=datasets.get_runs_of_dataset)),
    web.post('/api/datasets/{id}/analyses', generic_handler(db_fn=datasets.get_analyses_of_dataset)),

    web.post('/api/g_variants', generic_handler(db_fn=g_variants.get_variants)),
    web.post('/api/g_variants/filtering_terms', filtering_terms_handler(db_fn=g_variants.get_filtering_terms_of_genomicvariation)),
    web.post('/api/g_variants/{id}', generic_handler(db_fn=g_variants.get_variant_with_id)),
    web.post('/api/g_variants/{id}/biosamples', generic_handler(db_fn=g_variants.get_biosamples_of_variant)),
    web.post('/api/g_variants/{id}/individuals', generic_handler(db_fn=g_variants.get_individuals_of_variant)),
    web.post('/api/g_variants/{id}/runs', generic_handler(db_fn=g_variants.get_runs_of_variant)),
    web.post('/api/g_variants/{id}/analyses', generic_handler(db_fn=g_variants.get_analyses_of_variant)),

    web.post('/api/individuals', generic_handler(db_fn=individuals.get_individuals)),
    web.post('/api/individuals/filtering_terms', filtering_terms_handler(db_fn=individuals.get_filtering_terms_of_individual)),
    web.post('/api/individuals/{id}', generic_handler(db_fn=individuals.get_individual_with_id)),
    web.post('/api/individuals/{id}/g_variants', generic_handler(db_fn=individuals.get_variants_of_individual)),
    web.post('/api/individuals/{id}/biosamples', generic_handler(db_fn=individuals.get_biosamples_of_individual)),
    web.post('/api/individuals/{id}/runs', generic_handler(db_fn=individuals.get_runs_of_individual)),
    web.post('/api/individuals/{id}/analyses', generic_handler(db_fn=individuals.get_analyses_of_individual)),

    web.post('/api/devices', generic_handler(db_fn=devices.get_devices)),
    web.post('/api/devices/filtering_terms', filtering_terms_handler(db_fn=devices.get_filtering_terms_of_device)),
    web.post('/api/devices/{id}', generic_handler(db_fn=devices.get_device_with_id)),
    web.post('/api/runs/{id}/g_variants', generic_handler(db_fn=devices.get_variants_of_run)),
    web.post('/api/runs/{id}/analyses', generic_handler(db_fn=devices.get_analyses_of_run)),
]
