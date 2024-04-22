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
import type { ChunkMetadata } from './ChunkMetadata';
/**
 *
 * @export
 * @interface BatchQueuedChunkResponse
 */
export interface BatchQueuedChunkResponse {
    /**
     *
     * @type {Array<ChunkMetadata>}
     * @memberof BatchQueuedChunkResponse
     */
    chunkMetadata: Array<ChunkMetadata>;
    /**
     * The current position the last access item is in the queue
     * @type {number}
     * @memberof BatchQueuedChunkResponse
     */
    posInQueue: number;
}
/**
 * Check if a given object implements the BatchQueuedChunkResponse interface.
 */
export declare function instanceOfBatchQueuedChunkResponse(value: object): boolean;
export declare function BatchQueuedChunkResponseFromJSON(json: any): BatchQueuedChunkResponse;
export declare function BatchQueuedChunkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchQueuedChunkResponse;
export declare function BatchQueuedChunkResponseToJSON(value?: BatchQueuedChunkResponse | null): any;
