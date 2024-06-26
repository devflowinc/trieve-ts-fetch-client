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
 * @interface ChunkMetadata
 */
export interface ChunkMetadata {
    /**
     * 
     * @type {string}
     * @memberof ChunkMetadata
     */
    chunkHtml?: string;
    /**
     * 
     * @type {string}
     * @memberof ChunkMetadata
     */
    content: string;
    /**
     * 
     * @type {Date}
     * @memberof ChunkMetadata
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ChunkMetadata
     */
    datasetId: string;
    /**
     * 
     * @type {string}
     * @memberof ChunkMetadata
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ChunkMetadata
     */
    link?: string;
    /**
     * 
     * @type {any}
     * @memberof ChunkMetadata
     */
    metadata?: any;
    /**
     * 
     * @type {string}
     * @memberof ChunkMetadata
     */
    qdrantPointId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChunkMetadata
     */
    tagSet?: string;
    /**
     * 
     * @type {Date}
     * @memberof ChunkMetadata
     */
    timeStamp?: Date;
    /**
     * 
     * @type {string}
     * @memberof ChunkMetadata
     */
    trackingId?: string;
    /**
     * 
     * @type {Date}
     * @memberof ChunkMetadata
     */
    updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof ChunkMetadata
     */
    weight: number;
}

/**
 * Check if a given object implements the ChunkMetadata interface.
 */
export function instanceOfChunkMetadata(value: object): boolean {
    if (!('content' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('datasetId' in value)) return false;
    if (!('id' in value)) return false;
    if (!('updatedAt' in value)) return false;
    if (!('weight' in value)) return false;
    return true;
}

export function ChunkMetadataFromJSON(json: any): ChunkMetadata {
    return ChunkMetadataFromJSONTyped(json, false);
}

export function ChunkMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChunkMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'chunkHtml': json['chunk_html'] == null ? undefined : json['chunk_html'],
        'content': json['content'],
        'createdAt': (new Date(json['created_at'])),
        'datasetId': json['dataset_id'],
        'id': json['id'],
        'link': json['link'] == null ? undefined : json['link'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'qdrantPointId': json['qdrant_point_id'] == null ? undefined : json['qdrant_point_id'],
        'tagSet': json['tag_set'] == null ? undefined : json['tag_set'],
        'timeStamp': json['time_stamp'] == null ? undefined : (new Date(json['time_stamp'])),
        'trackingId': json['tracking_id'] == null ? undefined : json['tracking_id'],
        'updatedAt': (new Date(json['updated_at'])),
        'weight': json['weight'],
    };
}

export function ChunkMetadataToJSON(value?: ChunkMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'chunk_html': value['chunkHtml'],
        'content': value['content'],
        'created_at': ((value['createdAt']).toISOString()),
        'dataset_id': value['datasetId'],
        'id': value['id'],
        'link': value['link'],
        'metadata': value['metadata'],
        'qdrant_point_id': value['qdrantPointId'],
        'tag_set': value['tagSet'],
        'time_stamp': value['timeStamp'] == null ? undefined : ((value['timeStamp'] as any).toISOString()),
        'tracking_id': value['trackingId'],
        'updated_at': ((value['updatedAt']).toISOString()),
        'weight': value['weight'],
    };
}

