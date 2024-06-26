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
exports.RangeToJSON = exports.RangeFromJSONTyped = exports.RangeFromJSON = exports.instanceOfRange = void 0;
var RangeCondition_1 = require("./RangeCondition");
/**
 * Check if a given object implements the Range interface.
 */
function instanceOfRange(value) {
    return true;
}
exports.instanceOfRange = instanceOfRange;
function RangeFromJSON(json) {
    return RangeFromJSONTyped(json, false);
}
exports.RangeFromJSON = RangeFromJSON;
function RangeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'gt': json['gt'] == null ? undefined : (0, RangeCondition_1.RangeConditionFromJSON)(json['gt']),
        'gte': json['gte'] == null ? undefined : (0, RangeCondition_1.RangeConditionFromJSON)(json['gte']),
        'lt': json['lt'] == null ? undefined : (0, RangeCondition_1.RangeConditionFromJSON)(json['lt']),
        'lte': json['lte'] == null ? undefined : (0, RangeCondition_1.RangeConditionFromJSON)(json['lte']),
    };
}
exports.RangeFromJSONTyped = RangeFromJSONTyped;
function RangeToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'gt': (0, RangeCondition_1.RangeConditionToJSON)(value['gt']),
        'gte': (0, RangeCondition_1.RangeConditionToJSON)(value['gte']),
        'lt': (0, RangeCondition_1.RangeConditionToJSON)(value['lt']),
        'lte': (0, RangeCondition_1.RangeConditionToJSON)(value['lte']),
    };
}
exports.RangeToJSON = RangeToJSON;
