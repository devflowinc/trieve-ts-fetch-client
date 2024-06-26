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
 * @interface SuggestedQueriesResponse
 */
export interface SuggestedQueriesResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof SuggestedQueriesResponse
     */
    queries: Array<string>;
}

/**
 * Check if a given object implements the SuggestedQueriesResponse interface.
 */
export function instanceOfSuggestedQueriesResponse(value: object): boolean {
    if (!('queries' in value)) return false;
    return true;
}

export function SuggestedQueriesResponseFromJSON(json: any): SuggestedQueriesResponse {
    return SuggestedQueriesResponseFromJSONTyped(json, false);
}

export function SuggestedQueriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestedQueriesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'queries': json['queries'],
    };
}

export function SuggestedQueriesResponseToJSON(value?: SuggestedQueriesResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'queries': value['queries'],
    };
}

