import os.path
import urllib.request
from typing import List, Dict, Optional
import re
from urllib.error import HTTPError

import requests
import owlready2
from pymongo.mongo_client import MongoClient
import progressbar
from bson.objectid import ObjectId
from owlready2 import OwlReadyOntologyParsingError
from tqdm import tqdm
import obonet
from bson.json_util import dumps
import json
import networkx
import os
import scipy
import numpy as np
from utils import get_filtering_documents


ONTOLOGY_REGEX = re.compile(r"([_A-Za-z0-9]+):([_A-Za-z0-9^\-]+)")

client = MongoClient(
    #"mongodb://127.0.0.1:27017/"
    "mongodb://root:example@mongo:27019/beacon?authSource=admin"

)

class MyProgressBar:
    def __init__(self):
        self.pbar = None

    def __call__(self, block_num: int, block_size: int, total_size: int):
        if not self.pbar:
            self.pbar = progressbar.ProgressBar(maxval=total_size)
            self.pbar.start()

        downloaded = block_num * block_size
        if downloaded < total_size:
            self.pbar.update(downloaded)
        else:
            self.pbar.finish()


def get_filtering_terms(collection:str):
    query = {
    }
    results = client.beacon.get_collection(collection).find(query)
    results = list(results)
    results = dumps(results)
    results = json.loads(results)

    return results

def get_filtering_object(list_terms: list, c_name: str):
    terms=[]
    #alphanumeric_fields=['AgeOfOnset', 'DateOfBirth.DayOfBirth', 'DateOfBirth.MonthOfBirth', 'DateOfBirth.YearOfBirth', 'Sex', 'TumourIdentificationCode', 'GeographicResidence', 'IncidenceDate.IncidenceDay', 'IncidenceDate.IncidenceMonth', 'IncidenceDate.IncidenceYear', 'BasisOfDiagnosis', 'TumourMorphology', 'TumourBehaviour', 'TumourGrade', 'TumourLaterality', 'PrimaryTreatment.Surgery', 'PrimaryTreatment.Radiotherapy', 'PrimaryTreatment.Chemotherapy', 'PrimaryTreatment.TargetedTherapy', 'PrimaryTreatment.Immunotherapy', 'PrimaryTreatment.HormoneTherapy', 'PrimaryTreatment.Other', 'PrimaryTreatment.StemCellTransplantation', 'DateOfRecurrence.DayOfRecurrence', 'DateOfRecurrence.MonthOfRecurrence', 'DateOfRecurrence.YearOfRecurrence', 'VitalStatus', 'VitalStatusDate.DayVitalStatus', 'VitalStatusDate.MonthVitalStatus', 'VitalStatusDate.YearVitalStatus', 'SurvivalDuration', 'CauseOfDeath_ICDedition']
    id=None
    label = None
    for term in list_terms:
        try:
            for k, v in term.items():
                if k == 'concept_id':
                    id=v
                    field = k
                elif k == 'anatomic_site_concept_id':
                    id=v
                    field = k

                if k == 'concept_name':
                    label = v
                elif k == 'anatomic_site_concept_name':
                    label = v
                if id is not None and label is not None and id != "" and label != "":
                    ontologyterm={
                                                        'type': 'ontology',
                                                        'id': id,
                                                        'label': label,
                                                        'scope': c_name                    
                                                    }
                    alphanumericterm={
                                                                    'type': 'alphanumeric',
                                                                    'id': label,
                                                                    'scope': c_name                    
                                                                }
                    customterm={
                                                        'type': 'custom',
                                                        'id': '{}:{}'.format(field,label),
                                                        'scope': c_name                    
                                                    }
                    if ontologyterm not in terms:
                        terms.append(ontologyterm)
                    if alphanumericterm not in terms:
                        terms.append(alphanumericterm)
                    if customterm not in terms:
                        terms.append(customterm)
        except Exception as e:
            print(e)


    return terms

def insert_all_ontology_terms_used():
    collections = client.beacon.list_collection_names()
    if 'filtering_terms' in collections:
        collections.remove('filtering_terms')
    print("Collections:", collections)
    for c_name in collections:
        dict_terms = get_filtering_terms(c_name)
        terms = get_filtering_object(dict_terms, c_name)
        if len(terms) > 0:
            client.beacon.filtering_terms.insert_many(terms)


insert_all_ontology_terms_used()
