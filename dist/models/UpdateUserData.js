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
exports.UpdateUserDataToJSON = exports.UpdateUserDataFromJSONTyped = exports.UpdateUserDataFromJSON = exports.instanceOfUpdateUserData = void 0;
/**
 * Check if a given object implements the UpdateUserData interface.
 */
function instanceOfUpdateUserData(value) {
    if (!('organizationId' in value))
        return false;
    return true;
}
exports.instanceOfUpdateUserData = instanceOfUpdateUserData;
function UpdateUserDataFromJSON(json) {
    return UpdateUserDataFromJSONTyped(json, false);
}
exports.UpdateUserDataFromJSON = UpdateUserDataFromJSON;
function UpdateUserDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'organizationId': json['organization_id'],
        'role': json['role'] == null ? undefined : json['role'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
    };
}
exports.UpdateUserDataFromJSONTyped = UpdateUserDataFromJSONTyped;
function UpdateUserDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'organization_id': value['organizationId'],
        'role': value['role'],
        'user_id': value['userId'],
    };
}
exports.UpdateUserDataToJSON = UpdateUserDataToJSON;
