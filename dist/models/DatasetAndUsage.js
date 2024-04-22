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
exports.DatasetAndUsageToJSON = exports.DatasetAndUsageFromJSONTyped = exports.DatasetAndUsageFromJSON = exports.instanceOfDatasetAndUsage = void 0;
var DatasetDTO_1 = require("./DatasetDTO");
var DatasetUsageCount_1 = require("./DatasetUsageCount");
/**
 * Check if a given object implements the DatasetAndUsage interface.
 */
function instanceOfDatasetAndUsage(value) {
    if (!('dataset' in value))
        return false;
    if (!('datasetUsage' in value))
        return false;
    return true;
}
exports.instanceOfDatasetAndUsage = instanceOfDatasetAndUsage;
function DatasetAndUsageFromJSON(json) {
    return DatasetAndUsageFromJSONTyped(json, false);
}
exports.DatasetAndUsageFromJSON = DatasetAndUsageFromJSON;
function DatasetAndUsageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataset': (0, DatasetDTO_1.DatasetDTOFromJSON)(json['dataset']),
        'datasetUsage': (0, DatasetUsageCount_1.DatasetUsageCountFromJSON)(json['dataset_usage']),
    };
}
exports.DatasetAndUsageFromJSONTyped = DatasetAndUsageFromJSONTyped;
function DatasetAndUsageToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'dataset': (0, DatasetDTO_1.DatasetDTOToJSON)(value['dataset']),
        'dataset_usage': (0, DatasetUsageCount_1.DatasetUsageCountToJSON)(value['datasetUsage']),
    };
}
exports.DatasetAndUsageToJSON = DatasetAndUsageToJSON;