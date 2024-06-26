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
import type { ChunkMetadata } from './ChunkMetadata';
import {
    ChunkMetadataFromJSON,
    ChunkMetadataFromJSONTyped,
    ChunkMetadataToJSON,
} from './ChunkMetadata';

/**
 * 
 * @export
 * @interface BookmarkData
 */
export interface BookmarkData {
    /**
     * 
     * @type {Array<ChunkMetadata>}
     * @memberof BookmarkData
     */
    chunks: Array<ChunkMetadata>;
    /**
     * 
     * @type {ChunkGroup}
     * @memberof BookmarkData
     */
    group: ChunkGroup;
    /**
     * 
     * @type {number}
     * @memberof BookmarkData
     */
    totalPages: number;
}

/**
 * Check if a given object implements the BookmarkData interface.
 */
export function instanceOfBookmarkData(value: object): boolean {
    if (!('chunks' in value)) return false;
    if (!('group' in value)) return false;
    if (!('totalPages' in value)) return false;
    return true;
}

export function BookmarkDataFromJSON(json: any): BookmarkData {
    return BookmarkDataFromJSONTyped(json, false);
}

export function BookmarkDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarkData {
    if (json == null) {
        return json;
    }
    return {
        
        'chunks': ((json['chunks'] as Array<any>).map(ChunkMetadataFromJSON)),
        'group': ChunkGroupFromJSON(json['group']),
        'totalPages': json['total_pages'],
    };
}

export function BookmarkDataToJSON(value?: BookmarkData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'chunks': ((value['chunks'] as Array<any>).map(ChunkMetadataToJSON)),
        'group': ChunkGroupToJSON(value['group']),
        'total_pages': value['totalPages'],
    };
}

