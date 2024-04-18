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
 * @interface DeleteUserApiKeyRequest
 */
export interface DeleteUserApiKeyRequest {
    /**
     * The id of the api key to delete.
     * @type {string}
     * @memberof DeleteUserApiKeyRequest
     */
    apiKeyId: string;
}

/**
 * Check if a given object implements the DeleteUserApiKeyRequest interface.
 */
export function instanceOfDeleteUserApiKeyRequest(value: object): boolean {
    if (!('apiKeyId' in value)) return false;
    return true;
}

export function DeleteUserApiKeyRequestFromJSON(json: any): DeleteUserApiKeyRequest {
    return DeleteUserApiKeyRequestFromJSONTyped(json, false);
}

export function DeleteUserApiKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteUserApiKeyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'apiKeyId': json['api_key_id'],
    };
}

export function DeleteUserApiKeyRequestToJSON(value?: DeleteUserApiKeyRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'api_key_id': value['apiKeyId'],
    };
}

