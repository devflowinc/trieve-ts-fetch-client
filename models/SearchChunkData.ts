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
import type { ChunkFilter } from './ChunkFilter';
import {
    ChunkFilterFromJSON,
    ChunkFilterFromJSONTyped,
    ChunkFilterToJSON,
} from './ChunkFilter';

/**
 * 
 * @export
 * @interface SearchChunkData
 */
export interface SearchChunkData {
    /**
     * Set date_bias to true to bias search results towards more recent chunks. This will work best in hybrid search mode.
     * @type {boolean}
     * @memberof SearchChunkData
     */
    dateBias?: boolean;
    /**
     * 
     * @type {ChunkFilter}
     * @memberof SearchChunkData
     */
    filters?: ChunkFilter;
    /**
     * Set get_collisions to true to get the collisions for each chunk. This will only apply if environment variable COLLISIONS_ENABLED is set to true.
     * @type {boolean}
     * @memberof SearchChunkData
     */
    getCollisions?: boolean;
    /**
     * Set highlight_delimiters to a list of strings to use as delimiters for highlighting. If not specified, this defaults to ["?", ",", ".", "!"].
     * @type {Array<string>}
     * @memberof SearchChunkData
     */
    highlightDelimiters?: Array<string>;
    /**
     * Set highlight_results to true to highlight the results. If not specified, this defaults to true.
     * @type {boolean}
     * @memberof SearchChunkData
     */
    highlightResults?: boolean;
    /**
     * Page of chunks to fetch. Page is 1-indexed.
     * @type {number}
     * @memberof SearchChunkData
     */
    page?: number;
    /**
     * Page size is the number of chunks to fetch. This can be used to fetch more than 10 chunks at a time.
     * @type {number}
     * @memberof SearchChunkData
     */
    pageSize?: number;
    /**
     * Query is the search query. This can be any string. The query will be used to create an embedding vector and/or SPLADE vector which will be used to find the result set.
     * @type {string}
     * @memberof SearchChunkData
     */
    query: string;
    /**
     * Set score_threshold to a float to filter out chunks with a score below the threshold.
     * @type {number}
     * @memberof SearchChunkData
     */
    scoreThreshold?: number;
    /**
     * Can be either "semantic", "fulltext", or "hybrid". "hybrid" will pull in one page (10 chunks) of both semantic and full-text results then re-rank them using BAAI/bge-reranker-large. "semantic" will pull in one page (10 chunks) of the nearest cosine distant vectors. "fulltext" will pull in one page (10 chunks) of full-text results based on SPLADE.
     * @type {string}
     * @memberof SearchChunkData
     */
    searchType: string;
    /**
     * Set slim_chunks to true to avoid returning the content and chunk_html of the chunks. This is useful for when you want to reduce amount of data over the wire for latency improvement. Default is false.
     * @type {boolean}
     * @memberof SearchChunkData
     */
    slimChunks?: boolean;
    /**
     * Set use_weights to true to use the weights of the chunks in the result set in order to sort them. If not specified, this defaults to true.
     * @type {boolean}
     * @memberof SearchChunkData
     */
    useWeights?: boolean;
}

/**
 * Check if a given object implements the SearchChunkData interface.
 */
export function instanceOfSearchChunkData(value: object): boolean {
    if (!('query' in value)) return false;
    if (!('searchType' in value)) return false;
    return true;
}

export function SearchChunkDataFromJSON(json: any): SearchChunkData {
    return SearchChunkDataFromJSONTyped(json, false);
}

export function SearchChunkDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchChunkData {
    if (json == null) {
        return json;
    }
    return {
        
        'dateBias': json['date_bias'] == null ? undefined : json['date_bias'],
        'filters': json['filters'] == null ? undefined : ChunkFilterFromJSON(json['filters']),
        'getCollisions': json['get_collisions'] == null ? undefined : json['get_collisions'],
        'highlightDelimiters': json['highlight_delimiters'] == null ? undefined : json['highlight_delimiters'],
        'highlightResults': json['highlight_results'] == null ? undefined : json['highlight_results'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['page_size'] == null ? undefined : json['page_size'],
        'query': json['query'],
        'scoreThreshold': json['score_threshold'] == null ? undefined : json['score_threshold'],
        'searchType': json['search_type'],
        'slimChunks': json['slim_chunks'] == null ? undefined : json['slim_chunks'],
        'useWeights': json['use_weights'] == null ? undefined : json['use_weights'],
    };
}

export function SearchChunkDataToJSON(value?: SearchChunkData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date_bias': value['dateBias'],
        'filters': ChunkFilterToJSON(value['filters']),
        'get_collisions': value['getCollisions'],
        'highlight_delimiters': value['highlightDelimiters'],
        'highlight_results': value['highlightResults'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'query': value['query'],
        'score_threshold': value['scoreThreshold'],
        'search_type': value['searchType'],
        'slim_chunks': value['slimChunks'],
        'use_weights': value['useWeights'],
    };
}

