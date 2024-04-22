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
exports.OrganizationToJSON = exports.OrganizationFromJSONTyped = exports.OrganizationFromJSON = exports.instanceOfOrganization = void 0;
/**
 * Check if a given object implements the Organization interface.
 */
function instanceOfOrganization(value) {
    if (!('createdAt' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('name' in value))
        return false;
    if (!('updatedAt' in value))
        return false;
    return true;
}
exports.instanceOfOrganization = instanceOfOrganization;
function OrganizationFromJSON(json) {
    return OrganizationFromJSONTyped(json, false);
}
exports.OrganizationFromJSON = OrganizationFromJSON;
function OrganizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'registerable': json['registerable'] == null ? undefined : json['registerable'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}
exports.OrganizationFromJSONTyped = OrganizationFromJSONTyped;
function OrganizationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'created_at': ((value['createdAt']).toISOString()),
        'id': value['id'],
        'name': value['name'],
        'registerable': value['registerable'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}
exports.OrganizationToJSON = OrganizationToJSON;
