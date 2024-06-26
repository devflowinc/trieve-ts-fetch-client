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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateUserData
 */
export interface UpdateUserData {
    /**
     * In the sense of a legal name, not a username. The new name to assign to the user, if not provided, the current name will be used.
     * @type {string}
     * @memberof UpdateUserData
     */
    name?: string;
    /**
     * The id of the organization to update the user for.
     * @type {string}
     * @memberof UpdateUserData
     */
    organizationId: string;
    /**
     * Either 0 (user), 1 (admin), or 2 (owner). If not provided, the current role will be used. The auth'ed user must have a role greater than or equal to the role being assigned.
     * @type {number}
     * @memberof UpdateUserData
     */
    role?: number;
    /**
     * The id of the user to update, if not provided, the auth'ed user will be updated. If provided, the auth'ed user must be an admin (1) or owner (2) of the organization.
     * @type {string}
     * @memberof UpdateUserData
     */
    userId?: string;
}

/**
 * Check if a given object implements the UpdateUserData interface.
 */
export function instanceOfUpdateUserData(value: object): boolean {
    if (!('organizationId' in value)) return false;
    return true;
}

export function UpdateUserDataFromJSON(json: any): UpdateUserData {
    return UpdateUserDataFromJSONTyped(json, false);
}

export function UpdateUserDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserData {
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

export function UpdateUserDataToJSON(value?: UpdateUserData | null): any {
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

