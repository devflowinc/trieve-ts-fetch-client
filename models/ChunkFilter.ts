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
import type { FieldCondition } from './FieldCondition';
import {
    FieldConditionFromJSON,
    FieldConditionFromJSONTyped,
    FieldConditionToJSON,
} from './FieldCondition';

/**
 * 
 * @export
 * @interface ChunkFilter
 */
export interface ChunkFilter {
    /**
     * All of these field conditions have to match for the chunk to be included in the result set.
     * @type {Array<FieldCondition>}
     * @memberof ChunkFilter
     */
    must?: Array<FieldCondition>;
    /**
     * None of these field conditions can match for the chunk to be included in the result set.
     * @type {Array<FieldCondition>}
     * @memberof ChunkFilter
     */
    mustNot?: Array<FieldCondition>;
    /**
     * Only one of these field conditions has to match for the chunk to be included in the result set.
     * @type {Array<FieldCondition>}
     * @memberof ChunkFilter
     */
    should?: Array<FieldCondition>;
}

/**
 * Check if a given object implements the ChunkFilter interface.
 */
export function instanceOfChunkFilter(value: object): boolean {
    return true;
}

export function ChunkFilterFromJSON(json: any): ChunkFilter {
    return ChunkFilterFromJSONTyped(json, false);
}

export function ChunkFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChunkFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'must': json['must'] == null ? undefined : ((json['must'] as Array<any>).map(FieldConditionFromJSON)),
        'mustNot': json['must_not'] == null ? undefined : ((json['must_not'] as Array<any>).map(FieldConditionFromJSON)),
        'should': json['should'] == null ? undefined : ((json['should'] as Array<any>).map(FieldConditionFromJSON)),
    };
}

export function ChunkFilterToJSON(value?: ChunkFilter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'must': value['must'] == null ? undefined : ((value['must'] as Array<any>).map(FieldConditionToJSON)),
        'must_not': value['mustNot'] == null ? undefined : ((value['mustNot'] as Array<any>).map(FieldConditionToJSON)),
        'should': value['should'] == null ? undefined : ((value['should'] as Array<any>).map(FieldConditionToJSON)),
    };
}

