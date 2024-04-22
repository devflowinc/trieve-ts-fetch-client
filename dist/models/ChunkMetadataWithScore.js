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
exports.ChunkMetadataWithScoreToJSON = exports.ChunkMetadataWithScoreFromJSONTyped = exports.ChunkMetadataWithScoreFromJSON = exports.instanceOfChunkMetadataWithScore = void 0;
/**
 * Check if a given object implements the ChunkMetadataWithScore interface.
 */
function instanceOfChunkMetadataWithScore(value) {
    if (!('content' in value))
        return false;
    if (!('createdAt' in value))
        return false;
    if (!('datasetId' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('score' in value))
        return false;
    if (!('updatedAt' in value))
        return false;
    if (!('weight' in value))
        return false;
    return true;
}
exports.instanceOfChunkMetadataWithScore = instanceOfChunkMetadataWithScore;
function ChunkMetadataWithScoreFromJSON(json) {
    return ChunkMetadataWithScoreFromJSONTyped(json, false);
}
exports.ChunkMetadataWithScoreFromJSON = ChunkMetadataWithScoreFromJSON;
function ChunkMetadataWithScoreFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chunkHtml': json['chunk_html'] == null ? undefined : json['chunk_html'],
        'content': json['content'],
        'createdAt': (new Date(json['created_at'])),
        'datasetId': json['dataset_id'],
        'id': json['id'],
        'link': json['link'] == null ? undefined : json['link'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'qdrantPointId': json['qdrant_point_id'] == null ? undefined : json['qdrant_point_id'],
        'score': json['score'],
        'tagSet': json['tag_set'] == null ? undefined : json['tag_set'],
        'timeStamp': json['time_stamp'] == null ? undefined : (new Date(json['time_stamp'])),
        'trackingId': json['tracking_id'] == null ? undefined : json['tracking_id'],
        'updatedAt': (new Date(json['updated_at'])),
        'weight': json['weight'],
    };
}
exports.ChunkMetadataWithScoreFromJSONTyped = ChunkMetadataWithScoreFromJSONTyped;
function ChunkMetadataWithScoreToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chunk_html': value['chunkHtml'],
        'content': value['content'],
        'created_at': ((value['createdAt']).toISOString()),
        'dataset_id': value['datasetId'],
        'id': value['id'],
        'link': value['link'],
        'metadata': value['metadata'],
        'qdrant_point_id': value['qdrantPointId'],
        'score': value['score'],
        'tag_set': value['tagSet'],
        'time_stamp': value['timeStamp'] == null ? undefined : (value['timeStamp'].toISOString()),
        'tracking_id': value['trackingId'],
        'updated_at': ((value['updatedAt']).toISOString()),
        'weight': value['weight'],
    };
}
exports.ChunkMetadataWithScoreToJSON = ChunkMetadataWithScoreToJSON;
