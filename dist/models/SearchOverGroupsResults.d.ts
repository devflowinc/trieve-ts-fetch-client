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
import type { GroupScoreChunk } from './GroupScoreChunk';
/**
 *
 * @export
 * @interface SearchOverGroupsResults
 */
export interface SearchOverGroupsResults {
    /**
     *
     * @type {Array<GroupScoreChunk>}
     * @memberof SearchOverGroupsResults
     */
    groupChunks: Array<GroupScoreChunk>;
    /**
     *
     * @type {number}
     * @memberof SearchOverGroupsResults
     */
    totalChunkPages: number;
}
/**
 * Check if a given object implements the SearchOverGroupsResults interface.
 */
export declare function instanceOfSearchOverGroupsResults(value: object): boolean;
export declare function SearchOverGroupsResultsFromJSON(json: any): SearchOverGroupsResults;
export declare function SearchOverGroupsResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchOverGroupsResults;
export declare function SearchOverGroupsResultsToJSON(value?: SearchOverGroupsResults | null): any;
