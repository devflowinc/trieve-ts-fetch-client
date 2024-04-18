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
 * @interface ApiKeyDTO
 */
export interface ApiKeyDTO {
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyDTO
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyDTO
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ApiKeyDTO
     */
    role: number;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyDTO
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyDTO
     */
    userId: string;
}

/**
 * Check if a given object implements the ApiKeyDTO interface.
 */
export function instanceOfApiKeyDTO(value: object): boolean {
    if (!('createdAt' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('role' in value)) return false;
    if (!('updatedAt' in value)) return false;
    if (!('userId' in value)) return false;
    return true;
}

export function ApiKeyDTOFromJSON(json: any): ApiKeyDTO {
    return ApiKeyDTOFromJSONTyped(json, false);
}

export function ApiKeyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiKeyDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'role': json['role'],
        'updatedAt': (new Date(json['updated_at'])),
        'userId': json['user_id'],
    };
}

export function ApiKeyDTOToJSON(value?: ApiKeyDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['createdAt']).toISOString()),
        'id': value['id'],
        'name': value['name'],
        'role': value['role'],
        'updated_at': ((value['updatedAt']).toISOString()),
        'user_id': value['userId'],
    };
}

