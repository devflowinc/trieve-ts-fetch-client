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
import type { ChunkGroup } from './ChunkGroup';
import {
    ChunkGroupFromJSON,
    ChunkGroupFromJSONTyped,
    ChunkGroupToJSON,
} from './ChunkGroup';
import type { ScoreChunkDTO } from './ScoreChunkDTO';
import {
    ScoreChunkDTOFromJSON,
    ScoreChunkDTOFromJSONTyped,
    ScoreChunkDTOToJSON,
} from './ScoreChunkDTO';

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
export function instanceOfSearchWithinGroupResults(value: object): boolean {
    if (!('bookmarks' in value)) return false;
    if (!('group' in value)) return false;
    if (!('totalPages' in value)) return false;
    return true;
}

export function SearchWithinGroupResultsFromJSON(json: any): SearchWithinGroupResults {
    return SearchWithinGroupResultsFromJSONTyped(json, false);
}

export function SearchWithinGroupResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchWithinGroupResults {
    if (json == null) {
        return json;
    }
    return {
        
        'bookmarks': ((json['bookmarks'] as Array<any>).map(ScoreChunkDTOFromJSON)),
        'group': ChunkGroupFromJSON(json['group']),
        'totalPages': json['total_pages'],
    };
}

export function SearchWithinGroupResultsToJSON(value?: SearchWithinGroupResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bookmarks': ((value['bookmarks'] as Array<any>).map(ScoreChunkDTOToJSON)),
        'group': ChunkGroupToJSON(value['group']),
        'total_pages': value['totalPages'],
    };
}

