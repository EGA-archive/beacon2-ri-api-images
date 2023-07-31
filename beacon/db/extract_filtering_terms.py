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
    "mongodb://root:example@mongo:27017/beacon?authSource=admin"

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
    results = client.beacon.get_collection(collection).find(query).limit(1)
    results = list(results)
    results = dumps(results)
    results = json.loads(results)
    field = ''
    final_dict={}
    for result in results:
        for k, v in result.items():
            field=k
            label=v
            final_dict[field]=label
    return final_dict

def get_filtering_object(dict_terms: dict, c_name: str):
    terms=[]
    #alphanumeric_fields=['AgeOfOnset', 'DateOfBirth.DayOfBirth', 'DateOfBirth.MonthOfBirth', 'DateOfBirth.YearOfBirth', 'Sex', 'TumourIdentificationCode', 'GeographicResidence', 'IncidenceDate.IncidenceDay', 'IncidenceDate.IncidenceMonth', 'IncidenceDate.IncidenceYear', 'BasisOfDiagnosis', 'TumourMorphology', 'TumourBehaviour', 'TumourGrade', 'TumourLaterality', 'PrimaryTreatment.Surgery', 'PrimaryTreatment.Radiotherapy', 'PrimaryTreatment.Chemotherapy', 'PrimaryTreatment.TargetedTherapy', 'PrimaryTreatment.Immunotherapy', 'PrimaryTreatment.HormoneTherapy', 'PrimaryTreatment.Other', 'PrimaryTreatment.StemCellTransplantation', 'DateOfRecurrence.DayOfRecurrence', 'DateOfRecurrence.MonthOfRecurrence', 'DateOfRecurrence.YearOfRecurrence', 'VitalStatus', 'VitalStatusDate.DayVitalStatus', 'VitalStatusDate.MonthVitalStatus', 'VitalStatusDate.YearVitalStatus', 'SurvivalDuration', 'CauseOfDeath_ICDedition']
    type=''
    try:
        
        for k, v in dict_terms.items():
            if isinstance(v, dict):
                for k2, v2 in v.items():
                    if isinstance(v2, dict):
                        for k3,v3 in v2.items():
                            field = k + '.' + k2 + '.' + k3
                            label = v3
                            if field is not None:
                                if label is not None:
                                    if '_id' not in field:
                                        type='alphanumeric'
                                        terms.append({
                                                            'type': type,
                                                            'id': field,
                                                            'scope': c_name                    
                                                        })

                    else:
                        field = k + '.' + k2
                        label = v2
                        if field is not None:
                            if label is not None:
                                if '_id' not in field:
                                    type='alphanumeric'
                                    terms.append({
                                                            'type': type,
                                                            'id': field,
                                                            'scope': c_name                    
                                                        })
            elif isinstance(v, list):
                for item in v:
                    field = k
                    label = item
                    if field is not None:
                        if label is not None:
                            if '_id' not in field:
                                type='alphanumeric'
                                terms.append({
                                                            'type': type,
                                                            'id': field,
                                                            'scope': c_name                    
                                                        })
            else:
                field = k
                label = v

                if field is not None:
                    if label is not None:
                            if '_id' not in field:
                                type='alphanumeric'
                                terms.append({
                                                            'type': type,
                                                            'id': field,
                                                            'scope': c_name                    
                                                        })

            print(terms)
    except Exception:
        pass

    return terms

def insert_all_ontology_terms_used():
    collections = client.beacon.list_collection_names()
    if 'filtering_terms' in collections:
        collections.remove('filtering_terms')
    print("Collections:", collections)
    for c_name in collections:
        if c_name == 'individuals':
            dict_terms = get_filtering_terms(c_name)
            terms = get_filtering_object(dict_terms, c_name)
            if len(terms) > 0:
                client.beacon.filtering_terms.insert_many(terms)


insert_all_ontology_terms_used()
