from collections import defaultdict
from typing import List, Union
import re
import dataclasses
from copy import deepcopy

from beacon.request import ontologies
from beacon.request.model import AlphanumericFilter, CustomFilter, OntologyFilter, Operator, Similarity
from beacon.db.utils import get_documents
from beacon.db import client

import obonet

import logging

LOG = logging.getLogger(__name__)

CURIE_REGEX = r'^([a-zA-Z0-9]*):\/?[a-zA-Z0-9]*$'

def has_numbers(inputString):
    return any(char.isdigit() for char in inputString)

def apply_filters(query: dict, filters: List[dict], collection: str) -> dict:
    LOG.debug("Filters len = {}".format(len(filters)))
    if len(filters) >= 1:
        query["$and"] = []
        for filter in filters:
            partial_query = {}
            if ":" not in filter["id"]:
                LOG.debug('holaaaa')
                filter = OntologyFilter(**filter)
                LOG.debug("Ontology filter: %s", filter.id)
                #partial_query = {"$text": defaultdict(str) }
                #partial_query =  { "$text": { "$search": "" } } 
                LOG.debug(partial_query)
                partial_query = apply_ontology_filter(partial_query, filter, collection)
            elif ":" in filter["id"]:
                filter = CustomFilter(**filter)
                LOG.debug("Custom filter: %s", filter.id)
                partial_query = apply_custom_filter(partial_query, filter, collection)

            query["$and"].append(partial_query)
            if query["$and"] == [{'$or': []}]:
                query = {}


    return query


def apply_ontology_filter(query: dict, filter: OntologyFilter, collection: str) -> dict:
    

    final_term_list=[]
        
    final_term_list.append(filter.id)
    query_filtering={}
    query_filtering['$and']=[]
    dict_scope={}
    if collection == 'g_variants':
        dict_scope['scope']='genomicVariations'
    else:
        dict_scope['scope']=collection
    query_filtering['$and'].append(dict_scope)
    dict_id={}
    dict_id['id']=filter.id
    query_filtering['$and'].append(dict_id)
    docs = get_documents(
        client.beacon.filtering_terms,
        query_filtering,
        0,
        1
    )
        
    for doc_term in docs:
        label = doc_term['label']
    query_filtering={}
    query_filtering['$and']=[]
    query_filtering['$and'].append(dict_scope)
    dict_regex={}
    try:
        dict_regex['$regex']=label
    except Exception:
        dict_regex['$regex']=''
    dict_id={}
    dict_id['id']=dict_regex
    query_filtering['$and'].append(dict_id)
    dict_type={}
    dict_type['type']='custom'
    query_filtering['$and'].append(dict_id)
    query_filtering['$and'].append(dict_type)
    docs_2 = get_documents(
        client.beacon.filtering_terms,
        query_filtering,
        0,
        1
    )
    for doc2 in docs_2:
        query_terms = doc2['id']
    query_terms = query_terms.split(':')
    query_term = query_terms[0]
    LOG.debug(query_term)
    query_id={}
    query['$or']=[]
    for simil in final_term_list:
        query_id={}
        query_id[query_term]=simil
        query['$or'].append(query_id)
    LOG.debug("QUERY: %s", query)
    return query

def format_value(value: Union[str, List[int]]) -> Union[List[int], str, int, float]:
    if isinstance(value, list):
        return value
    
    elif value.isnumeric():
        if float(value).is_integer():
            return int(value)
        else:
            return float(value)
    
    else:
        return value

def format_operator(operator: Operator) -> str:
    if operator == Operator.EQUAL:
        return "$eq"
    elif operator == Operator.NOT:
        return "$ne"
    elif operator == Operator.GREATER:
        return "$gt"
    elif operator == Operator.GREATER_EQUAL:
        return "$gte"
    elif operator == Operator.LESS:
        return "$lt"
    else:
        # operator == Operator.LESS_EQUAL
        return "$lte"

def apply_alphanumeric_filter(query: dict, filter: AlphanumericFilter, collection: str) -> dict:
    LOG.debug(filter.value)
    #alphanumeric_fields=['PatientID', 'TumourTopography']
    #if filter.id in alphanumeric_fields:
        #formatted_value = str(filter.value)
    #else:
        #formatted_value = format_value(filter.value)
    formatted_value = str(filter.value)
    formatted_operator = format_operator(filter.operator)
    if isinstance(formatted_value,str):
        if formatted_operator == "$eq":
            if '%' in filter.value:
                try: 
                    if query['$or']:
                        pass
                    else:
                        query['$or']=[]
                except Exception:
                    query['$or']=[]
                value_splitted=filter.value.split('%')
                regex_dict={}
                regex_dict['$regex']=value_splitted[1]
                query_term = filter.id
                query_id={}
                query_id[query_term]=regex_dict
                query['$or'].append(query_id)

            else:
                try: 
                    if query['$or']:
                        pass
                    else:
                        query['$or']=[]
                except Exception:
                    query['$or']=[]
                query_term = "imaging_feature_domain_id.value_as_number"

                query_id={}
                query_id[query_term]=filter.value
                query['$or'].append(query_id) 
                    
        elif formatted_operator == "$ne":
            if '%' in filter.value:
                try: 
                    if query['$nor']:
                        pass
                    else:
                        query['$nor']=[]
                except Exception:
                    query['$nor']=[]
                value_splitted=filter.value.split('%')
                regex_dict={}
                regex_dict['$regex']=value_splitted[1]
                query_term = filter.id
                query_id={}
                query_id[query_term]=regex_dict
                query['$nor'].append(query_id)
            else:
                try: 
                    if query['$nor']:
                        pass
                    else:
                        query['$nor']=[]
                except Exception:
                    query['$nor']=[]

                try: 
                    if query['$or']:
                        pass
                    else:
                        query['$or']=[]
                except Exception:
                    query['$or']=[]
                query_term = "imaging_feature_domain_id.value_as_number"

                query_id={}
                query_id[query_term]=filter.value
                query['$nor'].append(query_id) 


        else:
            query = { formatted_operator: float(formatted_value) }
            LOG.debug(query)
            dict_measures={}
            dict_measures['imaging_feature_domain_id.value_as_number']=query
            query = dict_measures
    else:
        query = { formatted_operator: float(formatted_value) }
        LOG.debug(query)
        dict_measures={}
        dict_measures['imaging_feature_domain_id.value_as_number']=query
        query = dict_measures
        

    LOG.debug("QUERY: %s", query)
    return query



def apply_custom_filter(query: dict, filter: CustomFilter, collection:str) -> dict:
    LOG.debug(query)

    value_splitted = filter.id.split(':')
    query_term = value_splitted[0].replace("concept_id", "concept_name")
    if 'imaging_occurrence_id' in value_splitted[0]:
        query_term = value_splitted[0].replace("imaging_occurrence_id", "procedure_occurrence_id.procedure_occurrence_id")

    try:
        query[query_term]=value_splitted[1]
    except Exception:
        pass


    LOG.debug("QUERY: %s", query)
    return query
