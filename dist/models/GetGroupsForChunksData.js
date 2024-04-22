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
exports.GetGroupsForChunksDataToJSON = exports.GetGroupsForChunksDataFromJSONTyped = exports.GetGroupsForChunksDataFromJSON = exports.instanceOfGetGroupsForChunksData = void 0;
/**
 * Check if a given object implements the GetGroupsForChunksData interface.
 */
function instanceOfGetGroupsForChunksData(value) {
    if (!('chunkIds' in value))
        return false;
    return true;
}
exports.instanceOfGetGroupsForChunksData = instanceOfGetGroupsForChunksData;
function GetGroupsForChunksDataFromJSON(json) {
    return GetGroupsForChunksDataFromJSONTyped(json, false);
}
exports.GetGroupsForChunksDataFromJSON = GetGroupsForChunksDataFromJSON;
function GetGroupsForChunksDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chunkIds': json['chunk_ids'],
    };
}
exports.GetGroupsForChunksDataFromJSONTyped = GetGroupsForChunksDataFromJSONTyped;
function GetGroupsForChunksDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chunk_ids': value['chunkIds'],
    };
}
exports.GetGroupsForChunksDataToJSON = GetGroupsForChunksDataToJSON;