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
exports.ChunkGroupAndFileToJSON = exports.ChunkGroupAndFileFromJSONTyped = exports.ChunkGroupAndFileFromJSON = exports.instanceOfChunkGroupAndFile = void 0;
/**
 * Check if a given object implements the ChunkGroupAndFile interface.
 */
function instanceOfChunkGroupAndFile(value) {
    if (!('createdAt' in value))
        return false;
    if (!('datasetId' in value))
        return false;
    if (!('description' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('name' in value))
        return false;
    if (!('updatedAt' in value))
        return false;
    return true;
}
exports.instanceOfChunkGroupAndFile = instanceOfChunkGroupAndFile;
function ChunkGroupAndFileFromJSON(json) {
    return ChunkGroupAndFileFromJSONTyped(json, false);
}
exports.ChunkGroupAndFileFromJSON = ChunkGroupAndFileFromJSON;
function ChunkGroupAndFileFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': (new Date(json['created_at'])),
        'datasetId': json['dataset_id'],
        'description': json['description'],
        'fileId': json['file_id'] == null ? undefined : json['file_id'],
        'id': json['id'],
        'name': json['name'],
        'trackingId': json['tracking_id'] == null ? undefined : json['tracking_id'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}
exports.ChunkGroupAndFileFromJSONTyped = ChunkGroupAndFileFromJSONTyped;
function ChunkGroupAndFileToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'created_at': ((value['createdAt']).toISOString()),
        'dataset_id': value['datasetId'],
        'description': value['description'],
        'file_id': value['fileId'],
        'id': value['id'],
        'name': value['name'],
        'tracking_id': value['trackingId'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}
exports.ChunkGroupAndFileToJSON = ChunkGroupAndFileToJSON;
