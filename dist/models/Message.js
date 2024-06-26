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
exports.MessageToJSON = exports.MessageFromJSONTyped = exports.MessageFromJSON = exports.instanceOfMessage = void 0;
/**
 * Check if a given object implements the Message interface.
 */
function instanceOfMessage(value) {
    if (!('content' in value))
        return false;
    if (!('createdAt' in value))
        return false;
    if (!('datasetId' in value))
        return false;
    if (!('deleted' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('role' in value))
        return false;
    if (!('sortOrder' in value))
        return false;
    if (!('topicId' in value))
        return false;
    if (!('updatedAt' in value))
        return false;
    return true;
}
exports.instanceOfMessage = instanceOfMessage;
function MessageFromJSON(json) {
    return MessageFromJSONTyped(json, false);
}
exports.MessageFromJSON = MessageFromJSON;
function MessageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'completionTokens': json['completion_tokens'] == null ? undefined : json['completion_tokens'],
        'content': json['content'],
        'createdAt': (new Date(json['created_at'])),
        'datasetId': json['dataset_id'],
        'deleted': json['deleted'],
        'id': json['id'],
        'promptTokens': json['prompt_tokens'] == null ? undefined : json['prompt_tokens'],
        'role': json['role'],
        'sortOrder': json['sort_order'],
        'topicId': json['topic_id'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}
exports.MessageFromJSONTyped = MessageFromJSONTyped;
function MessageToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'completion_tokens': value['completionTokens'],
        'content': value['content'],
        'created_at': ((value['createdAt']).toISOString()),
        'dataset_id': value['datasetId'],
        'deleted': value['deleted'],
        'id': value['id'],
        'prompt_tokens': value['promptTokens'],
        'role': value['role'],
        'sort_order': value['sortOrder'],
        'topic_id': value['topicId'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}
exports.MessageToJSON = MessageToJSON;
