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
exports.TopicToJSON = exports.TopicFromJSONTyped = exports.TopicFromJSON = exports.instanceOfTopic = void 0;
/**
 * Check if a given object implements the Topic interface.
 */
function instanceOfTopic(value) {
    if (!('createdAt' in value))
        return false;
    if (!('datasetId' in value))
        return false;
    if (!('deleted' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('name' in value))
        return false;
    if (!('updatedAt' in value))
        return false;
    if (!('userId' in value))
        return false;
    return true;
}
exports.instanceOfTopic = instanceOfTopic;
function TopicFromJSON(json) {
    return TopicFromJSONTyped(json, false);
}
exports.TopicFromJSON = TopicFromJSON;
function TopicFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': (new Date(json['created_at'])),
        'datasetId': json['dataset_id'],
        'deleted': json['deleted'],
        'id': json['id'],
        'name': json['name'],
        'updatedAt': (new Date(json['updated_at'])),
        'userId': json['user_id'],
    };
}
exports.TopicFromJSONTyped = TopicFromJSONTyped;
function TopicToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'created_at': ((value['createdAt']).toISOString()),
        'dataset_id': value['datasetId'],
        'deleted': value['deleted'],
        'id': value['id'],
        'name': value['name'],
        'updated_at': ((value['updatedAt']).toISOString()),
        'user_id': value['userId'],
    };
}
exports.TopicToJSON = TopicToJSON;
