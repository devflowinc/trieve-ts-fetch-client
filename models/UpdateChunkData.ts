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
/**
 * 
 * @export
 * @interface UpdateChunkData
 */
export interface UpdateChunkData {
    /**
     * HTML content of the chunk you want to update. This can also be plaintext. The innerText of the HTML will be used to create the embedding vector. The point of using HTML is for convienience, as some users have applications where users submit HTML content. If no chunk_html is provided, the existing chunk_html will be used.
     * @type {string}
     * @memberof UpdateChunkData
     */
    chunkHtml?: string;
    /**
     * Id of the chunk you want to update. You can provide either the chunk_id or the tracking_id. If both are provided, the chunk_id will be used.
     * @type {string}
     * @memberof UpdateChunkData
     */
    chunkId?: string;
    /**
     * Convert HTML to raw text before processing to avoid adding noise to the vector embeddings. By default this is true. If you are using HTML content that you want to be included in the vector embeddings, set this to false.
     * @type {boolean}
     * @memberof UpdateChunkData
     */
    convertHtmlToText?: boolean;
    /**
     * Group ids are the ids of the groups that the chunk should be placed into. This is useful for when you want to update a chunk and add it to a group or multiple groups in one request.
     * @type {Array<string>}
     * @memberof UpdateChunkData
     */
    groupIds?: Array<string>;
    /**
     * Group tracking_ids are the tracking_ids of the groups that the chunk should be placed into. This is useful for when you want to update a chunk and add it to a group or multiple groups in one request.
     * @type {Array<string>}
     * @memberof UpdateChunkData
     */
    groupTrackingIds?: Array<string>;
    /**
     * Link of the chunk you want to update. This can also be any string. Frequently, this is a link to the source of the chunk. The link value will not affect the embedding creation. If no link is provided, the existing link will be used.
     * @type {string}
     * @memberof UpdateChunkData
     */
    link?: string;
    /**
     * The metadata is a JSON object which can be used to filter chunks. This is useful for when you want to filter chunks by arbitrary metadata. Unlike with tag filtering, there is a performance hit for filtering on metadata. If no metadata is provided, the existing metadata will be used.
     * @type {any}
     * @memberof UpdateChunkData
     */
    metadata?: any;
    /**
     * Tag set is a list of tags. This can be used to filter chunks by tag. Unlike with metadata filtering, HNSW indices will exist for each tag such that there is not a performance hit for filtering on them. If no tag_set is provided, the existing tag_set will be used.
     * @type {Array<string>}
     * @memberof UpdateChunkData
     */
    tagSet?: Array<string>;
    /**
     * Time_stamp should be an ISO 8601 combined date and time without timezone. It is used for time window filtering and recency-biasing search results. If no time_stamp is provided, the existing time_stamp will be used.
     * @type {string}
     * @memberof UpdateChunkData
     */
    timeStamp?: string;
    /**
     * Tracking_id of the chunk you want to update. This is required to match an existing chunk.
     * @type {string}
     * @memberof UpdateChunkData
     */
    trackingId?: string;
    /**
     * Weight is a float which can be used to bias search results. This is useful for when you want to bias search results for a chunk. The magnitude only matters relative to other chunks in the chunk's dataset dataset. If no weight is provided, the existing weight will be used.
     * @type {number}
     * @memberof UpdateChunkData
     */
    weight?: number;
}

/**
 * Check if a given object implements the UpdateChunkData interface.
 */
export function instanceOfUpdateChunkData(value: object): boolean {
    return true;
}

export function UpdateChunkDataFromJSON(json: any): UpdateChunkData {
    return UpdateChunkDataFromJSONTyped(json, false);
}

export function UpdateChunkDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateChunkData {
    if (json == null) {
        return json;
    }
    return {
        
        'chunkHtml': json['chunk_html'] == null ? undefined : json['chunk_html'],
        'chunkId': json['chunk_id'] == null ? undefined : json['chunk_id'],
        'convertHtmlToText': json['convert_html_to_text'] == null ? undefined : json['convert_html_to_text'],
        'groupIds': json['group_ids'] == null ? undefined : json['group_ids'],
        'groupTrackingIds': json['group_tracking_ids'] == null ? undefined : json['group_tracking_ids'],
        'link': json['link'] == null ? undefined : json['link'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'tagSet': json['tag_set'] == null ? undefined : json['tag_set'],
        'timeStamp': json['time_stamp'] == null ? undefined : json['time_stamp'],
        'trackingId': json['tracking_id'] == null ? undefined : json['tracking_id'],
        'weight': json['weight'] == null ? undefined : json['weight'],
    };
}

export function UpdateChunkDataToJSON(value?: UpdateChunkData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'chunk_html': value['chunkHtml'],
        'chunk_id': value['chunkId'],
        'convert_html_to_text': value['convertHtmlToText'],
        'group_ids': value['groupIds'],
        'group_tracking_ids': value['groupTrackingIds'],
        'link': value['link'],
        'metadata': value['metadata'],
        'tag_set': value['tagSet'],
        'time_stamp': value['timeStamp'],
        'tracking_id': value['trackingId'],
        'weight': value['weight'],
    };
}

