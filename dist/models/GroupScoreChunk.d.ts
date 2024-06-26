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
import type { ScoreChunkDTO } from './ScoreChunkDTO';
/**
 *
 * @export
 * @interface GroupScoreChunk
 */
export interface GroupScoreChunk {
    /**
     *
     * @type {string}
     * @memberof GroupScoreChunk
     */
    groupId: string;
    /**
     *
     * @type {string}
     * @memberof GroupScoreChunk
     */
    groupName?: string;
    /**
     *
     * @type {string}
     * @memberof GroupScoreChunk
     */
    groupTrackingId?: string;
    /**
     *
     * @type {Array<ScoreChunkDTO>}
     * @memberof GroupScoreChunk
     */
    metadata: Array<ScoreChunkDTO>;
}
/**
 * Check if a given object implements the GroupScoreChunk interface.
 */
export declare function instanceOfGroupScoreChunk(value: object): boolean;
export declare function GroupScoreChunkFromJSON(json: any): GroupScoreChunk;
export declare function GroupScoreChunkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupScoreChunk;
export declare function GroupScoreChunkToJSON(value?: GroupScoreChunk | null): any;
