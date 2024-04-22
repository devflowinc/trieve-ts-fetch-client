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
import type { FieldCondition } from './FieldCondition';
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
export declare function instanceOfChunkFilter(value: object): boolean;
export declare function ChunkFilterFromJSON(json: any): ChunkFilter;
export declare function ChunkFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChunkFilter;
export declare function ChunkFilterToJSON(value?: ChunkFilter | null): any;