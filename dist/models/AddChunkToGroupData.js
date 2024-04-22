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
exports.AddChunkToGroupDataToJSON = exports.AddChunkToGroupDataFromJSONTyped = exports.AddChunkToGroupDataFromJSON = exports.instanceOfAddChunkToGroupData = void 0;
/**
 * Check if a given object implements the AddChunkToGroupData interface.
 */
function instanceOfAddChunkToGroupData(value) {
    return true;
}
exports.instanceOfAddChunkToGroupData = instanceOfAddChunkToGroupData;
function AddChunkToGroupDataFromJSON(json) {
    return AddChunkToGroupDataFromJSONTyped(json, false);
}
exports.AddChunkToGroupDataFromJSON = AddChunkToGroupDataFromJSON;
function AddChunkToGroupDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chunkId': json['chunk_id'] == null ? undefined : json['chunk_id'],
        'trackingId': json['tracking_id'] == null ? undefined : json['tracking_id'],
    };
}
exports.AddChunkToGroupDataFromJSONTyped = AddChunkToGroupDataFromJSONTyped;
function AddChunkToGroupDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chunk_id': value['chunkId'],
        'tracking_id': value['trackingId'],
    };
}
exports.AddChunkToGroupDataToJSON = AddChunkToGroupDataToJSON;