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
import type { ChunkGroupAndFile } from './ChunkGroupAndFile';
/**
 *
 * @export
 * @interface GroupData
 */
export interface GroupData {
    /**
     *
     * @type {Array<ChunkGroupAndFile>}
     * @memberof GroupData
     */
    groups: Array<ChunkGroupAndFile>;
    /**
     *
     * @type {number}
     * @memberof GroupData
     */
    totalPages: number;
}
/**
 * Check if a given object implements the GroupData interface.
 */
export declare function instanceOfGroupData(value: object): boolean;
export declare function GroupDataFromJSON(json: any): GroupData;
export declare function GroupDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupData;
export declare function GroupDataToJSON(value?: GroupData | null): any;