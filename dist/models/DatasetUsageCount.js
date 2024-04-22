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
exports.DatasetUsageCountToJSON = exports.DatasetUsageCountFromJSONTyped = exports.DatasetUsageCountFromJSON = exports.instanceOfDatasetUsageCount = void 0;
/**
 * Check if a given object implements the DatasetUsageCount interface.
 */
function instanceOfDatasetUsageCount(value) {
    if (!('chunkCount' in value))
        return false;
    if (!('datasetId' in value))
        return false;
    if (!('id' in value))
        return false;
    return true;
}
exports.instanceOfDatasetUsageCount = instanceOfDatasetUsageCount;
function DatasetUsageCountFromJSON(json) {
    return DatasetUsageCountFromJSONTyped(json, false);
}
exports.DatasetUsageCountFromJSON = DatasetUsageCountFromJSON;
function DatasetUsageCountFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chunkCount': json['chunk_count'],
        'datasetId': json['dataset_id'],
        'id': json['id'],
    };
}
exports.DatasetUsageCountFromJSONTyped = DatasetUsageCountFromJSONTyped;
function DatasetUsageCountToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chunk_count': value['chunkCount'],
        'dataset_id': value['datasetId'],
        'id': value['id'],
    };
}
exports.DatasetUsageCountToJSON = DatasetUsageCountToJSON;
