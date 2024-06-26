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
exports.SingleQueuedChunkResponseToJSON = exports.SingleQueuedChunkResponseFromJSONTyped = exports.SingleQueuedChunkResponseFromJSON = exports.instanceOfSingleQueuedChunkResponse = void 0;
var ChunkMetadata_1 = require("./ChunkMetadata");
/**
 * Check if a given object implements the SingleQueuedChunkResponse interface.
 */
function instanceOfSingleQueuedChunkResponse(value) {
    if (!('chunkMetadata' in value))
        return false;
    if (!('posInQueue' in value))
        return false;
    return true;
}
exports.instanceOfSingleQueuedChunkResponse = instanceOfSingleQueuedChunkResponse;
function SingleQueuedChunkResponseFromJSON(json) {
    return SingleQueuedChunkResponseFromJSONTyped(json, false);
}
exports.SingleQueuedChunkResponseFromJSON = SingleQueuedChunkResponseFromJSON;
function SingleQueuedChunkResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chunkMetadata': (0, ChunkMetadata_1.ChunkMetadataFromJSON)(json['chunk_metadata']),
        'posInQueue': json['pos_in_queue'],
    };
}
exports.SingleQueuedChunkResponseFromJSONTyped = SingleQueuedChunkResponseFromJSONTyped;
function SingleQueuedChunkResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chunk_metadata': (0, ChunkMetadata_1.ChunkMetadataToJSON)(value['chunkMetadata']),
        'pos_in_queue': value['posInQueue'],
    };
}
exports.SingleQueuedChunkResponseToJSON = SingleQueuedChunkResponseToJSON;
