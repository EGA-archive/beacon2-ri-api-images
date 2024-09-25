# Beacon 4 Images

<!-- [![Testsuite](https://github.com/EGA-archive/beacon-2.x/workflows/Testsuite/badge.svg)](https://github.com/EGA-archive/beacon-2.x/actions) -->

This repository is an implementation of the beacon for images model:

* The (Python 3.9+) [source code for beacon](beacon),
* A MongoDB database with sample data to demo the capabilities of the Beacon API images.

### Deployment steps

Switch to deploy folder:

```bash
cd deploy
```

Build the containers:

```bash
docker-compose up -d --build
```

### Inject data

From deploy folder, switch to data folder:

```bash
cd data
```

Copy data to mongo container:

```bash
docker cp datasets.json deploy-db-images-1:tmp/datasets.json
docker cp measurements.json deploy-db-images-1:tmp/measurements.json
docker cp features.json deploy-db-images-1:tmp/features.json
docker cp conditions.json deploy-db-images-1:tmp/conditions.json
docker cp occurrences.json deploy-db-images-1:tmp/occurrences.json
```

Inject data to mongoDB:

```bash
docker exec deploy-db-images-1 mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27019/beacon?authSource=admin" --file /tmp/datasets.json --collection datasets
docker exec deploy-db-images-1 mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27019/beacon?authSource=admin" --file /tmp/measurements.json --collection measurements
docker exec deploy-db-images-1 mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27019/beacon?authSource=admin" --file /tmp/features.json --collection features
docker exec deploy-db-images-1 mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27019/beacon?authSource=admin" --file /tmp/conditions.json --collection conditions
docker exec deploy-db-images-1 mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27019/beacon?authSource=admin" --file /tmp/occurrences.json --collection occurrences
```

*Individuals can also be filled in.

Extract filtering terms:

```bash
docker exec beacon-images python beacon/db/extract_filtering_terms.py 
```

### Make queries:

```bash
curl \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
    "meta": {
        "apiVersion": "2.0"
    },
    "query": {
        "requestParameters": {        },
        "filters": [
{"id": "312437"}],
        "includeResultsetResponses": "HIT",
        "pagination": {
            "skip": 0,
            "limit": 100
        },
        "testMode": false,
        "requestedGranularity": "record"
    }
}' \
  http://localhost:5054/api/conditions
```


