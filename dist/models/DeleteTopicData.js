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
exports.DeleteTopicDataToJSON = exports.DeleteTopicDataFromJSONTyped = exports.DeleteTopicDataFromJSON = exports.instanceOfDeleteTopicData = void 0;
/**
 * Check if a given object implements the DeleteTopicData interface.
 */
function instanceOfDeleteTopicData(value) {
    if (!('topicId' in value))
        return false;
    return true;
}
exports.instanceOfDeleteTopicData = instanceOfDeleteTopicData;
function DeleteTopicDataFromJSON(json) {
    return DeleteTopicDataFromJSONTyped(json, false);
}
exports.DeleteTopicDataFromJSON = DeleteTopicDataFromJSON;
function DeleteTopicDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'topicId': json['topic_id'],
    };
}
exports.DeleteTopicDataFromJSONTyped = DeleteTopicDataFromJSONTyped;
function DeleteTopicDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'topic_id': value['topicId'],
    };
}
exports.DeleteTopicDataToJSON = DeleteTopicDataToJSON;
