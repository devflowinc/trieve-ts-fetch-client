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
exports.CreateDatasetRequestToJSON = exports.CreateDatasetRequestFromJSONTyped = exports.CreateDatasetRequestFromJSON = exports.instanceOfCreateDatasetRequest = void 0;
/**
 * Check if a given object implements the CreateDatasetRequest interface.
 */
function instanceOfCreateDatasetRequest(value) {
    if (!('clientConfiguration' in value))
        return false;
    if (!('datasetName' in value))
        return false;
    if (!('organizationId' in value))
        return false;
    if (!('serverConfiguration' in value))
        return false;
    return true;
}
exports.instanceOfCreateDatasetRequest = instanceOfCreateDatasetRequest;
function CreateDatasetRequestFromJSON(json) {
    return CreateDatasetRequestFromJSONTyped(json, false);
}
exports.CreateDatasetRequestFromJSON = CreateDatasetRequestFromJSON;
function CreateDatasetRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'clientConfiguration': json['client_configuration'],
        'datasetName': json['dataset_name'],
        'organizationId': json['organization_id'],
        'serverConfiguration': json['server_configuration'],
        'trackingId': json['tracking_id'] == null ? undefined : json['tracking_id'],
    };
}
exports.CreateDatasetRequestFromJSONTyped = CreateDatasetRequestFromJSONTyped;
function CreateDatasetRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'client_configuration': value['clientConfiguration'],
        'dataset_name': value['datasetName'],
        'organization_id': value['organizationId'],
        'server_configuration': value['serverConfiguration'],
        'tracking_id': value['trackingId'],
    };
}
exports.CreateDatasetRequestToJSON = CreateDatasetRequestToJSON;