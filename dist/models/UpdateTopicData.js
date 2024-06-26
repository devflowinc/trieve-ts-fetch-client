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
exports.UpdateTopicDataToJSON = exports.UpdateTopicDataFromJSONTyped = exports.UpdateTopicDataFromJSON = exports.instanceOfUpdateTopicData = void 0;
/**
 * Check if a given object implements the UpdateTopicData interface.
 */
function instanceOfUpdateTopicData(value) {
    if (!('name' in value))
        return false;
    if (!('topicId' in value))
        return false;
    return true;
}
exports.instanceOfUpdateTopicData = instanceOfUpdateTopicData;
function UpdateTopicDataFromJSON(json) {
    return UpdateTopicDataFromJSONTyped(json, false);
}
exports.UpdateTopicDataFromJSON = UpdateTopicDataFromJSON;
function UpdateTopicDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'topicId': json['topic_id'],
    };
}
exports.UpdateTopicDataFromJSONTyped = UpdateTopicDataFromJSONTyped;
function UpdateTopicDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'topic_id': value['topicId'],
    };
}
exports.UpdateTopicDataToJSON = UpdateTopicDataToJSON;
