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
exports.OrganizationUsageCountToJSON = exports.OrganizationUsageCountFromJSONTyped = exports.OrganizationUsageCountFromJSON = exports.instanceOfOrganizationUsageCount = void 0;
/**
 * Check if a given object implements the OrganizationUsageCount interface.
 */
function instanceOfOrganizationUsageCount(value) {
    if (!('datasetCount' in value))
        return false;
    if (!('fileStorage' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('messageCount' in value))
        return false;
    if (!('orgId' in value))
        return false;
    if (!('userCount' in value))
        return false;
    return true;
}
exports.instanceOfOrganizationUsageCount = instanceOfOrganizationUsageCount;
function OrganizationUsageCountFromJSON(json) {
    return OrganizationUsageCountFromJSONTyped(json, false);
}
exports.OrganizationUsageCountFromJSON = OrganizationUsageCountFromJSON;
function OrganizationUsageCountFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'datasetCount': json['dataset_count'],
        'fileStorage': json['file_storage'],
        'id': json['id'],
        'messageCount': json['message_count'],
        'orgId': json['org_id'],
        'userCount': json['user_count'],
    };
}
exports.OrganizationUsageCountFromJSONTyped = OrganizationUsageCountFromJSONTyped;
function OrganizationUsageCountToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'dataset_count': value['datasetCount'],
        'file_storage': value['fileStorage'],
        'id': value['id'],
        'message_count': value['messageCount'],
        'org_id': value['orgId'],
        'user_count': value['userCount'],
    };
}
exports.OrganizationUsageCountToJSON = OrganizationUsageCountToJSON;
