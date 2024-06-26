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
exports.SearchOverGroupsDataToJSON = exports.SearchOverGroupsDataFromJSONTyped = exports.SearchOverGroupsDataFromJSON = exports.instanceOfSearchOverGroupsData = void 0;
var ChunkFilter_1 = require("./ChunkFilter");
/**
 * Check if a given object implements the SearchOverGroupsData interface.
 */
function instanceOfSearchOverGroupsData(value) {
    if (!('query' in value))
        return false;
    if (!('searchType' in value))
        return false;
    return true;
}
exports.instanceOfSearchOverGroupsData = instanceOfSearchOverGroupsData;
function SearchOverGroupsDataFromJSON(json) {
    return SearchOverGroupsDataFromJSONTyped(json, false);
}
exports.SearchOverGroupsDataFromJSON = SearchOverGroupsDataFromJSON;
function SearchOverGroupsDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'filters': json['filters'] == null ? undefined : (0, ChunkFilter_1.ChunkFilterFromJSON)(json['filters']),
        'getCollisions': json['get_collisions'] == null ? undefined : json['get_collisions'],
        'groupSize': json['group_size'] == null ? undefined : json['group_size'],
        'highlightDelimiters': json['highlight_delimiters'] == null ? undefined : json['highlight_delimiters'],
        'highlightResults': json['highlight_results'] == null ? undefined : json['highlight_results'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['page_size'] == null ? undefined : json['page_size'],
        'query': json['query'],
        'scoreThreshold': json['score_threshold'] == null ? undefined : json['score_threshold'],
        'searchType': json['search_type'],
        'slimChunks': json['slim_chunks'] == null ? undefined : json['slim_chunks'],
    };
}
exports.SearchOverGroupsDataFromJSONTyped = SearchOverGroupsDataFromJSONTyped;
function SearchOverGroupsDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'filters': (0, ChunkFilter_1.ChunkFilterToJSON)(value['filters']),
        'get_collisions': value['getCollisions'],
        'group_size': value['groupSize'],
        'highlight_delimiters': value['highlightDelimiters'],
        'highlight_results': value['highlightResults'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'query': value['query'],
        'score_threshold': value['scoreThreshold'],
        'search_type': value['searchType'],
        'slim_chunks': value['slimChunks'],
    };
}
exports.SearchOverGroupsDataToJSON = SearchOverGroupsDataToJSON;
