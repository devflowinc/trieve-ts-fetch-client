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
 * @interface AuthQuery
 */
export interface AuthQuery {
    /**
     * Code sent via email as a result of successful call to send_invitation
     * @type {string}
     * @memberof AuthQuery
     */
    invCode?: string;
    /**
     * ID of organization to authenticate into
     * @type {string}
     * @memberof AuthQuery
     */
    organizationId?: string;
    /**
     * URL to redirect to after successful login
     * @type {string}
     * @memberof AuthQuery
     */
    redirectUri?: string;
}

/**
 * Check if a given object implements the AuthQuery interface.
 */
export function instanceOfAuthQuery(value: object): boolean {
    return true;
}

export function AuthQueryFromJSON(json: any): AuthQuery {
    return AuthQueryFromJSONTyped(json, false);
}

export function AuthQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthQuery {
    if (json == null) {
        return json;
    }
    return {
        
        'invCode': json['inv_code'] == null ? undefined : json['inv_code'],
        'organizationId': json['organization_id'] == null ? undefined : json['organization_id'],
        'redirectUri': json['redirect_uri'] == null ? undefined : json['redirect_uri'],
    };
}

export function AuthQueryToJSON(value?: AuthQuery | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'inv_code': value['invCode'],
        'organization_id': value['organizationId'],
        'redirect_uri': value['redirectUri'],
    };
}

