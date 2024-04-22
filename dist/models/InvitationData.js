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
exports.InvitationDataToJSON = exports.InvitationDataFromJSONTyped = exports.InvitationDataFromJSON = exports.instanceOfInvitationData = void 0;
/**
 * Check if a given object implements the InvitationData interface.
 */
function instanceOfInvitationData(value) {
    if (!('appUrl' in value))
        return false;
    if (!('email' in value))
        return false;
    if (!('organizationId' in value))
        return false;
    if (!('redirectUri' in value))
        return false;
    if (!('userRole' in value))
        return false;
    return true;
}
exports.instanceOfInvitationData = instanceOfInvitationData;
function InvitationDataFromJSON(json) {
    return InvitationDataFromJSONTyped(json, false);
}
exports.InvitationDataFromJSON = InvitationDataFromJSON;
function InvitationDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'appUrl': json['app_url'],
        'email': json['email'],
        'organizationId': json['organization_id'],
        'redirectUri': json['redirect_uri'],
        'userRole': json['user_role'],
    };
}
exports.InvitationDataFromJSONTyped = InvitationDataFromJSONTyped;
function InvitationDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'app_url': value['appUrl'],
        'email': value['email'],
        'organization_id': value['organizationId'],
        'redirect_uri': value['redirectUri'],
        'user_role': value['userRole'],
    };
}
exports.InvitationDataToJSON = InvitationDataToJSON;
