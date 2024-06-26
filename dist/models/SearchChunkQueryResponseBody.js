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
exports.SearchChunkQueryResponseBodyToJSON = exports.SearchChunkQueryResponseBodyFromJSONTyped = exports.SearchChunkQueryResponseBodyFromJSON = exports.instanceOfSearchChunkQueryResponseBody = void 0;
var ScoreChunkDTO_1 = require("./ScoreChunkDTO");
/**
 * Check if a given object implements the SearchChunkQueryResponseBody interface.
 */
function instanceOfSearchChunkQueryResponseBody(value) {
    if (!('scoreChunks' in value))
        return false;
    if (!('totalChunkPages' in value))
        return false;
    return true;
}
exports.instanceOfSearchChunkQueryResponseBody = instanceOfSearchChunkQueryResponseBody;
function SearchChunkQueryResponseBodyFromJSON(json) {
    return SearchChunkQueryResponseBodyFromJSONTyped(json, false);
}
exports.SearchChunkQueryResponseBodyFromJSON = SearchChunkQueryResponseBodyFromJSON;
function SearchChunkQueryResponseBodyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'scoreChunks': (json['score_chunks'].map(ScoreChunkDTO_1.ScoreChunkDTOFromJSON)),
        'totalChunkPages': json['total_chunk_pages'],
    };
}
exports.SearchChunkQueryResponseBodyFromJSONTyped = SearchChunkQueryResponseBodyFromJSONTyped;
function SearchChunkQueryResponseBodyToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'score_chunks': (value['scoreChunks'].map(ScoreChunkDTO_1.ScoreChunkDTOToJSON)),
        'total_chunk_pages': value['totalChunkPages'],
    };
}
exports.SearchChunkQueryResponseBodyToJSON = SearchChunkQueryResponseBodyToJSON;
