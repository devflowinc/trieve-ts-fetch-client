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
exports.EventReturnToJSON = exports.EventReturnFromJSONTyped = exports.EventReturnFromJSON = exports.instanceOfEventReturn = void 0;
var Event_1 = require("./Event");
/**
 * Check if a given object implements the EventReturn interface.
 */
function instanceOfEventReturn(value) {
    if (!('events' in value))
        return false;
    if (!('pageCount' in value))
        return false;
    return true;
}
exports.instanceOfEventReturn = instanceOfEventReturn;
function EventReturnFromJSON(json) {
    return EventReturnFromJSONTyped(json, false);
}
exports.EventReturnFromJSON = EventReturnFromJSON;
function EventReturnFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'events': (json['events'].map(Event_1.EventFromJSON)),
        'pageCount': json['page_count'],
    };
}
exports.EventReturnFromJSONTyped = EventReturnFromJSONTyped;
function EventReturnToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'events': (value['events'].map(Event_1.EventToJSON)),
        'page_count': value['pageCount'],
    };
}
exports.EventReturnToJSON = EventReturnToJSON;