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
import type { ScoreSlimChunks } from './ScoreSlimChunks';
/**
 *
 * @export
 * @interface SearchSlimChunkQueryResponseBody
 */
export interface SearchSlimChunkQueryResponseBody {
    /**
     *
     * @type {Array<ScoreSlimChunks>}
     * @memberof SearchSlimChunkQueryResponseBody
     */
    scoreChunks: Array<ScoreSlimChunks>;
    /**
     *
     * @type {number}
     * @memberof SearchSlimChunkQueryResponseBody
     */
    totalChunkPages: number;
}
/**
 * Check if a given object implements the SearchSlimChunkQueryResponseBody interface.
 */
export declare function instanceOfSearchSlimChunkQueryResponseBody(value: object): boolean;
export declare function SearchSlimChunkQueryResponseBodyFromJSON(json: any): SearchSlimChunkQueryResponseBody;
export declare function SearchSlimChunkQueryResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchSlimChunkQueryResponseBody;
export declare function SearchSlimChunkQueryResponseBodyToJSON(value?: SearchSlimChunkQueryResponseBody | null): any;