from enum import Enum


class DefaultSchemas(Enum):
    DEVICES = {"entityType": "device", "schema": "beacon-device-v2.0.0"}
    FEATURES = {"entityType": "feature", "schema": "beacon-feature-v2.0.0"}
    CONDITIONS = {"entityType": "condition", "schema": "beacon-feature-v2.0.0"}
    COHORTS = {"entityType": "cohort", "schema": "beacon-cohort-v2.0.0"}
    DATASETS = {"entityType": "dataset", "schema": "beacon-dataset-v2.0.0"}
    FILTERINGTERMS = {"entityType": "filteringterms", "schema": "beacon-dataset-v2.0.0"}
    MEASUREMENTS = {"entityType": "measurement", "schema": "beacon-feature-v2.0.0"}
    OCCURRENCES = {"entityType": "occurrence", "schema": "beacon-occurrence-v2.0.0"}
    INDIVIDUALS = {"entityType": "individual", "schema": "beacon-cancer-individual-v2.0.0"}