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
 * @interface RecommendGroupChunksRequest
 */
export interface RecommendGroupChunksRequest {
    /**
     *
     * @type {ChunkFilter}
     * @memberof RecommendGroupChunksRequest
     */
    filters?: ChunkFilter;
    /**
     * The number of chunks to fetch for each group. This is the number of chunks which will be returned in the response for each group. The default is 3. If this is set to a large number, we recommend setting slim_chunks to true to avoid returning the content and chunk_html of the chunks so as to reduce latency due to content download and serialization.
     * @type {number}
     * @memberof RecommendGroupChunksRequest
     */
    groupSize?: number;
    /**
     * The number of groups to return. This is the number of groups which will be returned in the response. The default is 10.
     * @type {number}
     * @memberof RecommendGroupChunksRequest
     */
    limit?: number;
    /**
     * The ids of the groups to be used as negative examples for the recommendation. The groups in this array will be used to filter out similar groups.
     * @type {Array<string>}
     * @memberof RecommendGroupChunksRequest
     */
    negativeGroupIds?: Array<string>;
    /**
     * The ids of the groups to be used as negative examples for the recommendation. The groups in this array will be used to filter out similar groups.
     * @type {Array<string>}
     * @memberof RecommendGroupChunksRequest
     */
    negativeGroupTrackingIds?: Array<string>;
    /**
     * The ids of the groups to be used as positive examples for the recommendation. The groups in this array will be used to find similar groups.
     * @type {Array<string>}
     * @memberof RecommendGroupChunksRequest
     */
    positiveGroupIds?: Array<string>;
    /**
     * The ids of the groups to be used as positive examples for the recommendation. The groups in this array will be used to find similar groups.
     * @type {Array<string>}
     * @memberof RecommendGroupChunksRequest
     */
    positiveGroupTrackingIds?: Array<string>;
    /**
     * The type of recommendation to make. This lets you choose whether to recommend based off of `semantic` or `fulltext` similarity. The default is `semantic`.
     * @type {string}
     * @memberof RecommendGroupChunksRequest
     */
    recommendType?: string;
    /**
     * Set slim_chunks to true to avoid returning the content and chunk_html of the chunks. This is useful for when you want to reduce amount of data over the wire for latency improvement. Default is false.
     * @type {boolean}
     * @memberof RecommendGroupChunksRequest
     */
    slimChunks?: boolean;
    /**
     * Strategy to use for recommendations, either "average_vector" or "best_score". The default is "average_vector". The "average_vector" strategy will construct a single average vector from the positive and negative samples then use it to perform a pseudo-search. The "best_score" strategy is more advanced and navigates the HNSW with a heuristic of picking edges where the point is closer to the positive samples than it is the negatives.
     * @type {string}
     * @memberof RecommendGroupChunksRequest
     */
    strategy?: string;
}
/**
 * Check if a given object implements the RecommendGroupChunksRequest interface.
 */
export declare function instanceOfRecommendGroupChunksRequest(value: object): boolean;
export declare function RecommendGroupChunksRequestFromJSON(json: any): RecommendGroupChunksRequest;
export declare function RecommendGroupChunksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommendGroupChunksRequest;
export declare function RecommendGroupChunksRequestToJSON(value?: RecommendGroupChunksRequest | null): any;
