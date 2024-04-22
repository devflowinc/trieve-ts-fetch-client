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
export declare function instanceOfDatasetUsageCount(value: object): boolean;
export declare function DatasetUsageCountFromJSON(json: any): DatasetUsageCount;
export declare function DatasetUsageCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetUsageCount;
export declare function DatasetUsageCountToJSON(value?: DatasetUsageCount | null): any;
