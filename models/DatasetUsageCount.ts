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
 * @interface DatasetUsageCount
 */
export interface DatasetUsageCount {
    /**
     * 
     * @type {number}
     * @memberof DatasetUsageCount
     */
    chunkCount: number;
    /**
     * 
     * @type {string}
     * @memberof DatasetUsageCount
     */
    datasetId: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetUsageCount
     */
    id: string;
}

/**
 * Check if a given object implements the DatasetUsageCount interface.
 */
export function instanceOfDatasetUsageCount(value: object): boolean {
    if (!('chunkCount' in value)) return false;
    if (!('datasetId' in value)) return false;
    if (!('id' in value)) return false;
    return true;
}

export function DatasetUsageCountFromJSON(json: any): DatasetUsageCount {
    return DatasetUsageCountFromJSONTyped(json, false);
}

export function DatasetUsageCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetUsageCount {
    if (json == null) {
        return json;
    }
    return {
        
        'chunkCount': json['chunk_count'],
        'datasetId': json['dataset_id'],
        'id': json['id'],
    };
}

export function DatasetUsageCountToJSON(value?: DatasetUsageCount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'chunk_count': value['chunkCount'],
        'dataset_id': value['datasetId'],
        'id': value['id'],
    };
}

