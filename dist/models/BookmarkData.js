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
exports.BookmarkDataToJSON = exports.BookmarkDataFromJSONTyped = exports.BookmarkDataFromJSON = exports.instanceOfBookmarkData = void 0;
var ChunkGroup_1 = require("./ChunkGroup");
var ChunkMetadata_1 = require("./ChunkMetadata");
/**
 * Check if a given object implements the BookmarkData interface.
 */
function instanceOfBookmarkData(value) {
    if (!('chunks' in value))
        return false;
    if (!('group' in value))
        return false;
    if (!('totalPages' in value))
        return false;
    return true;
}
exports.instanceOfBookmarkData = instanceOfBookmarkData;
function BookmarkDataFromJSON(json) {
    return BookmarkDataFromJSONTyped(json, false);
}
exports.BookmarkDataFromJSON = BookmarkDataFromJSON;
function BookmarkDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chunks': (json['chunks'].map(ChunkMetadata_1.ChunkMetadataFromJSON)),
        'group': (0, ChunkGroup_1.ChunkGroupFromJSON)(json['group']),
        'totalPages': json['total_pages'],
    };
}
exports.BookmarkDataFromJSONTyped = BookmarkDataFromJSONTyped;
function BookmarkDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chunks': (value['chunks'].map(ChunkMetadata_1.ChunkMetadataToJSON)),
        'group': (0, ChunkGroup_1.ChunkGroupToJSON)(value['group']),
        'total_pages': value['totalPages'],
    };
}
exports.BookmarkDataToJSON = BookmarkDataToJSON;
