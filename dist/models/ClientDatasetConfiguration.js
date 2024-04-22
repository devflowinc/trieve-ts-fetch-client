"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Trieve API
 * Trieve OpenAPI Specification. This document describes all of the operations available through the Trieve API.
 *
 * The version of the OpenAPI document: 0.6.9
 * Contact: developers@trieve.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientDatasetConfigurationToJSON = exports.ClientDatasetConfigurationFromJSONTyped = exports.ClientDatasetConfigurationFromJSON = exports.instanceOfClientDatasetConfiguration = void 0;
/**
 * Check if a given object implements the ClientDatasetConfiguration interface.
 */
function instanceOfClientDatasetConfiguration(value) {
    if (!('fILENAMEKEY' in value))
        return false;
    return true;
}
exports.instanceOfClientDatasetConfiguration = instanceOfClientDatasetConfiguration;
function ClientDatasetConfigurationFromJSON(json) {
    return ClientDatasetConfigurationFromJSONTyped(json, false);
}
exports.ClientDatasetConfigurationFromJSON = ClientDatasetConfigurationFromJSON;
function ClientDatasetConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cREATECHUNKFEATURE': json['CREATE_CHUNK_FEATURE'] == null ? undefined : json['CREATE_CHUNK_FEATURE'],
        'dATERANGEVALUE': json['DATE_RANGE_VALUE'] == null ? undefined : json['DATE_RANGE_VALUE'],
        'dOCUMENTUPLOADFEATURE': json['DOCUMENT_UPLOAD_FEATURE'] == null ? undefined : json['DOCUMENT_UPLOAD_FEATURE'],
        'fILENAMEKEY': json['FILE_NAME_KEY'],
        'fILTERITEMS': json['FILTER_ITEMS'] == null ? undefined : json['FILTER_ITEMS'],
        'fRONTMATTERVALS': json['FRONTMATTER_VALS'] == null ? undefined : json['FRONTMATTER_VALS'],
        'iMAGERANGEENDKEY': json['IMAGE_RANGE_END_KEY'] == null ? undefined : json['IMAGE_RANGE_END_KEY'],
        'iMAGERANGESTARTKEY': json['IMAGE_RANGE_START_KEY'] == null ? undefined : json['IMAGE_RANGE_START_KEY'],
        'lINESBEFORESHOWMORE': json['LINES_BEFORE_SHOW_MORE'] == null ? undefined : json['LINES_BEFORE_SHOW_MORE'],
        'sEARCHQUERIES': json['SEARCH_QUERIES'] == null ? undefined : json['SEARCH_QUERIES'],
        'sUGGESTEDQUERIES': json['SUGGESTED_QUERIES'] == null ? undefined : json['SUGGESTED_QUERIES'],
    };
}
exports.ClientDatasetConfigurationFromJSONTyped = ClientDatasetConfigurationFromJSONTyped;
function ClientDatasetConfigurationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'CREATE_CHUNK_FEATURE': value['cREATECHUNKFEATURE'],
        'DATE_RANGE_VALUE': value['dATERANGEVALUE'],
        'DOCUMENT_UPLOAD_FEATURE': value['dOCUMENTUPLOADFEATURE'],
        'FILE_NAME_KEY': value['fILENAMEKEY'],
        'FILTER_ITEMS': value['fILTERITEMS'],
        'FRONTMATTER_VALS': value['fRONTMATTERVALS'],
        'IMAGE_RANGE_END_KEY': value['iMAGERANGEENDKEY'],
        'IMAGE_RANGE_START_KEY': value['iMAGERANGESTARTKEY'],
        'LINES_BEFORE_SHOW_MORE': value['lINESBEFORESHOWMORE'],
        'SEARCH_QUERIES': value['sEARCHQUERIES'],
        'SUGGESTED_QUERIES': value['sUGGESTEDQUERIES'],
    };
}
exports.ClientDatasetConfigurationToJSON = ClientDatasetConfigurationToJSON;