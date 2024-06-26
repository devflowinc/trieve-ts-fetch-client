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
exports.SuggestedQueriesRequestToJSON = exports.SuggestedQueriesRequestFromJSONTyped = exports.SuggestedQueriesRequestFromJSON = exports.instanceOfSuggestedQueriesRequest = void 0;
/**
 * Check if a given object implements the SuggestedQueriesRequest interface.
 */
function instanceOfSuggestedQueriesRequest(value) {
    if (!('query' in value))
        return false;
    return true;
}
exports.instanceOfSuggestedQueriesRequest = instanceOfSuggestedQueriesRequest;
function SuggestedQueriesRequestFromJSON(json) {
    return SuggestedQueriesRequestFromJSONTyped(json, false);
}
exports.SuggestedQueriesRequestFromJSON = SuggestedQueriesRequestFromJSON;
function SuggestedQueriesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'query': json['query'],
    };
}
exports.SuggestedQueriesRequestFromJSONTyped = SuggestedQueriesRequestFromJSONTyped;
function SuggestedQueriesRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'query': value['query'],
    };
}
exports.SuggestedQueriesRequestToJSON = SuggestedQueriesRequestToJSON;
