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
 * @interface UpdateChunkGroupData
 */
export interface UpdateChunkGroupData {
    /**
     * Description to assign to the chunk_group. Convenience field for you to avoid having to remember what the group is for. If not provided, the description will not be updated.
     * @type {string}
     * @memberof UpdateChunkGroupData
     */
    description?: string;
    /**
     * Id of the chunk_group to update.
     * @type {string}
     * @memberof UpdateChunkGroupData
     */
    groupId?: string;
    /**
     * Optional metadata to assign to the chunk_group. This is a JSON object that can store any additional information you want to associate with the chunks inside of the chunk_group.
     * @type {any}
     * @memberof UpdateChunkGroupData
     */
    metadata?: any;
    /**
     * Name to assign to the chunk_group. Does not need to be unique. If not provided, the name will not be updated.
     * @type {string}
     * @memberof UpdateChunkGroupData
     */
    name?: string;
    /**
     * Optional tags to assign to the chunk_group. This is a list of strings that can be used to categorize the chunks inside the chunk_group.
     * @type {Array<string>}
     * @memberof UpdateChunkGroupData
     */
    tagSet?: Array<string>;
    /**
     * Tracking Id of the chunk_group to update.
     * @type {string}
     * @memberof UpdateChunkGroupData
     */
    trackingId?: string;
}
/**
 * Check if a given object implements the UpdateChunkGroupData interface.
 */
export declare function instanceOfUpdateChunkGroupData(value: object): boolean;
export declare function UpdateChunkGroupDataFromJSON(json: any): UpdateChunkGroupData;
export declare function UpdateChunkGroupDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateChunkGroupData;
export declare function UpdateChunkGroupDataToJSON(value?: UpdateChunkGroupData | null): any;
