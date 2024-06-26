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
exports.RegenerateMessageDataToJSON = exports.RegenerateMessageDataFromJSONTyped = exports.RegenerateMessageDataFromJSON = exports.instanceOfRegenerateMessageData = void 0;
/**
 * Check if a given object implements the RegenerateMessageData interface.
 */
function instanceOfRegenerateMessageData(value) {
    if (!('topicId' in value))
        return false;
    return true;
}
exports.instanceOfRegenerateMessageData = instanceOfRegenerateMessageData;
function RegenerateMessageDataFromJSON(json) {
    return RegenerateMessageDataFromJSONTyped(json, false);
}
exports.RegenerateMessageDataFromJSON = RegenerateMessageDataFromJSON;
function RegenerateMessageDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'highlightCitations': json['highlight_citations'] == null ? undefined : json['highlight_citations'],
        'highlightDelimiters': json['highlight_delimiters'] == null ? undefined : json['highlight_delimiters'],
        'model': json['model'] == null ? undefined : json['model'],
        'streamResponse': json['stream_response'] == null ? undefined : json['stream_response'],
        'topicId': json['topic_id'],
    };
}
exports.RegenerateMessageDataFromJSONTyped = RegenerateMessageDataFromJSONTyped;
function RegenerateMessageDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'highlight_citations': value['highlightCitations'],
        'highlight_delimiters': value['highlightDelimiters'],
        'model': value['model'],
        'stream_response': value['streamResponse'],
        'topic_id': value['topicId'],
    };
}
exports.RegenerateMessageDataToJSON = RegenerateMessageDataToJSON;
