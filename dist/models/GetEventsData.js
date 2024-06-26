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
exports.GetEventsDataToJSON = exports.GetEventsDataFromJSONTyped = exports.GetEventsDataFromJSON = exports.instanceOfGetEventsData = void 0;
/**
 * Check if a given object implements the GetEventsData interface.
 */
function instanceOfGetEventsData(value) {
    return true;
}
exports.instanceOfGetEventsData = instanceOfGetEventsData;
function GetEventsDataFromJSON(json) {
    return GetEventsDataFromJSONTyped(json, false);
}
exports.GetEventsDataFromJSON = GetEventsDataFromJSON;
function GetEventsDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'eventTypes': json['event_types'] == null ? undefined : json['event_types'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['page_size'] == null ? undefined : json['page_size'],
    };
}
exports.GetEventsDataFromJSONTyped = GetEventsDataFromJSONTyped;
function GetEventsDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'event_types': value['eventTypes'],
        'page': value['page'],
        'page_size': value['pageSize'],
    };
}
exports.GetEventsDataToJSON = GetEventsDataToJSON;
