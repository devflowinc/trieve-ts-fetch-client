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
exports.BatchQueuedChunkResponseToJSON = exports.BatchQueuedChunkResponseFromJSONTyped = exports.BatchQueuedChunkResponseFromJSON = exports.instanceOfBatchQueuedChunkResponse = void 0;
var ChunkMetadata_1 = require("./ChunkMetadata");
/**
 * Check if a given object implements the BatchQueuedChunkResponse interface.
 */
function instanceOfBatchQueuedChunkResponse(value) {
    if (!('chunkMetadata' in value))
        return false;
    if (!('posInQueue' in value))
        return false;
    return true;
}
exports.instanceOfBatchQueuedChunkResponse = instanceOfBatchQueuedChunkResponse;
function BatchQueuedChunkResponseFromJSON(json) {
    return BatchQueuedChunkResponseFromJSONTyped(json, false);
}
exports.BatchQueuedChunkResponseFromJSON = BatchQueuedChunkResponseFromJSON;
function BatchQueuedChunkResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chunkMetadata': (json['chunk_metadata'].map(ChunkMetadata_1.ChunkMetadataFromJSON)),
        'posInQueue': json['pos_in_queue'],
    };
}
exports.BatchQueuedChunkResponseFromJSONTyped = BatchQueuedChunkResponseFromJSONTyped;
function BatchQueuedChunkResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chunk_metadata': (value['chunkMetadata'].map(ChunkMetadata_1.ChunkMetadataToJSON)),
        'pos_in_queue': value['posInQueue'],
    };
}
exports.BatchQueuedChunkResponseToJSON = BatchQueuedChunkResponseToJSON;
