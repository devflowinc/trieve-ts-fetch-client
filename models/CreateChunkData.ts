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

import type { Array<ChunkData> } from './Array&lt;ChunkData&gt;';
import {
    instanceOfArray<ChunkData>,
    Array<ChunkData>FromJSON,
    Array<ChunkData>FromJSONTyped,
    Array<ChunkData>ToJSON,
} from './Array&lt;ChunkData&gt;';
import type { ChunkData } from './ChunkData';
import {
    instanceOfChunkData,
    ChunkDataFromJSON,
    ChunkDataFromJSONTyped,
    ChunkDataToJSON,
} from './ChunkData';

/**
 * @type CreateChunkData
 * 
 * @export
 */
export type CreateChunkData = Array<ChunkData> | ChunkData;

export function CreateChunkDataFromJSON(json: any): CreateChunkData {
    return CreateChunkDataFromJSONTyped(json, false);
}

export function CreateChunkDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateChunkData {
    if (json == null) {
        return json;
    }
    return Array<ChunkData>FromJSONTyped(json, true) || ChunkDataFromJSONTyped(json, true);
}

export function CreateChunkDataToJSON(value?: CreateChunkData | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfArray<ChunkData>(value)) {
        return Array<ChunkData>ToJSON(value as Array<ChunkData>);
    }
    if (instanceOfChunkData(value)) {
        return ChunkDataToJSON(value as ChunkData);
    }

    return {};
}
