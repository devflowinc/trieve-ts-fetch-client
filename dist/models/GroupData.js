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
exports.GroupDataToJSON = exports.GroupDataFromJSONTyped = exports.GroupDataFromJSON = exports.instanceOfGroupData = void 0;
var ChunkGroupAndFile_1 = require("./ChunkGroupAndFile");
/**
 * Check if a given object implements the GroupData interface.
 */
function instanceOfGroupData(value) {
    if (!('groups' in value))
        return false;
    if (!('totalPages' in value))
        return false;
    return true;
}
exports.instanceOfGroupData = instanceOfGroupData;
function GroupDataFromJSON(json) {
    return GroupDataFromJSONTyped(json, false);
}
exports.GroupDataFromJSON = GroupDataFromJSON;
function GroupDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'groups': (json['groups'].map(ChunkGroupAndFile_1.ChunkGroupAndFileFromJSON)),
        'totalPages': json['total_pages'],
    };
}
exports.GroupDataFromJSONTyped = GroupDataFromJSONTyped;
function GroupDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'groups': (value['groups'].map(ChunkGroupAndFile_1.ChunkGroupAndFileToJSON)),
        'total_pages': value['totalPages'],
    };
}
exports.GroupDataToJSON = GroupDataToJSON;
