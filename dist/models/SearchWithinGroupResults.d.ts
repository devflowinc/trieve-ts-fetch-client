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
import type { ChunkGroup } from './ChunkGroup';
import type { ScoreChunkDTO } from './ScoreChunkDTO';
/**
 *
 * @export
 * @interface SearchWithinGroupResults
 */
export interface SearchWithinGroupResults {
    /**
     *
     * @type {Array<ScoreChunkDTO>}
     * @memberof SearchWithinGroupResults
     */
    bookmarks: Array<ScoreChunkDTO>;
    /**
     *
     * @type {ChunkGroup}
     * @memberof SearchWithinGroupResults
     */
    group: ChunkGroup;
    /**
     *
     * @type {number}
     * @memberof SearchWithinGroupResults
     */
    totalPages: number;
}
/**
 * Check if a given object implements the SearchWithinGroupResults interface.
 */
export declare function instanceOfSearchWithinGroupResults(value: object): boolean;
export declare function SearchWithinGroupResultsFromJSON(json: any): SearchWithinGroupResults;
export declare function SearchWithinGroupResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchWithinGroupResults;
export declare function SearchWithinGroupResultsToJSON(value?: SearchWithinGroupResults | null): any;
