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
exports.FieldConditionToJSON = exports.FieldConditionFromJSONTyped = exports.FieldConditionFromJSON = exports.instanceOfFieldCondition = void 0;
var MatchCondition_1 = require("./MatchCondition");
var Range_1 = require("./Range");
/**
 * Check if a given object implements the FieldCondition interface.
 */
function instanceOfFieldCondition(value) {
    if (!('field' in value))
        return false;
    return true;
}
exports.instanceOfFieldCondition = instanceOfFieldCondition;
function FieldConditionFromJSON(json) {
    return FieldConditionFromJSONTyped(json, false);
}
exports.FieldConditionFromJSON = FieldConditionFromJSON;
function FieldConditionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'field': json['field'],
        'match': json['match'] == null ? undefined : (json['match'].map(MatchCondition_1.MatchConditionFromJSON)),
        'range': json['range'] == null ? undefined : (0, Range_1.RangeFromJSON)(json['range']),
    };
}
exports.FieldConditionFromJSONTyped = FieldConditionFromJSONTyped;
function FieldConditionToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'field': value['field'],
        'match': value['match'] == null ? undefined : (value['match'].map(MatchCondition_1.MatchConditionToJSON)),
        'range': (0, Range_1.RangeToJSON)(value['range']),
    };
}
exports.FieldConditionToJSON = FieldConditionToJSON;
