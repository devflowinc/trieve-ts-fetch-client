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
import type { ChunkFilter } from './ChunkFilter';
/**
 *
 * @export
 * @interface RecommendChunksRequest
 */
export interface RecommendChunksRequest {
    /**
     *
     * @type {ChunkFilter}
     * @memberof RecommendChunksRequest
     */
    filters?: ChunkFilter;
    /**
     * The number of chunks to return. This is the number of chunks which will be returned in the response. The default is 10.
     * @type {number}
     * @memberof RecommendChunksRequest
     */
    limit?: number;
    /**
     * The ids of the chunks to be used as negative examples for the recommendation. The chunks in this array will be used to filter out similar chunks.
     * @type {Array<string>}
     * @memberof RecommendChunksRequest
     */
    negativeChunkIds?: Array<string>;
    /**
     * The tracking_ids of the chunks to be used as negative examples for the recommendation. The chunks in this array will be used to filter out similar chunks.
     * @type {Array<string>}
     * @memberof RecommendChunksRequest
     */
    negativeTrackingIds?: Array<string>;
    /**
     * The ids of the chunks to be used as positive examples for the recommendation. The chunks in this array will be used to find similar chunks.
     * @type {Array<string>}
     * @memberof RecommendChunksRequest
     */
    positiveChunkIds?: Array<string>;
    /**
     * The tracking_ids of the chunks to be used as positive examples for the recommendation. The chunks in this array will be used to find similar chunks.
     * @type {Array<string>}
     * @memberof RecommendChunksRequest
     */
    positiveTrackingIds?: Array<string>;
    /**
     * The type of recommendation to make. This lets you choose whether to recommend based off of `semantic` or `fulltext` similarity. The default is `semantic`.
     * @type {string}
     * @memberof RecommendChunksRequest
     */
    recommendType?: string;
    /**
     * Set slim_chunks to true to avoid returning the content and chunk_html of the chunks. This is useful for when you want to reduce amount of data over the wire for latency improvement. Default is false.
     * @type {boolean}
     * @memberof RecommendChunksRequest
     */
    slimChunks?: boolean;
    /**
     * Strategy to use for recommendations, either "average_vector" or "best_score". The default is "average_vector". The "average_vector" strategy will construct a single average vector from the positive and negative samples then use it to perform a pseudo-search. The "best_score" strategy is more advanced and navigates the HNSW with a heuristic of picking edges where the point is closer to the positive samples than it is the negatives.
     * @type {string}
     * @memberof RecommendChunksRequest
     */
    strategy?: string;
}
/**
 * Check if a given object implements the RecommendChunksRequest interface.
 */
export declare function instanceOfRecommendChunksRequest(value: object): boolean;
export declare function RecommendChunksRequestFromJSON(json: any): RecommendChunksRequest;
export declare function RecommendChunksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommendChunksRequest;
export declare function RecommendChunksRequestToJSON(value?: RecommendChunksRequest | null): any;
