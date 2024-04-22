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
 * @interface ChunkGroupAndFile
 */
export interface ChunkGroupAndFile {
    /**
     *
     * @type {Date}
     * @memberof ChunkGroupAndFile
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof ChunkGroupAndFile
     */
    datasetId: string;
    /**
     *
     * @type {string}
     * @memberof ChunkGroupAndFile
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ChunkGroupAndFile
     */
    fileId?: string;
    /**
     *
     * @type {string}
     * @memberof ChunkGroupAndFile
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ChunkGroupAndFile
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ChunkGroupAndFile
     */
    trackingId?: string;
    /**
     *
     * @type {Date}
     * @memberof ChunkGroupAndFile
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the ChunkGroupAndFile interface.
 */
export declare function instanceOfChunkGroupAndFile(value: object): boolean;
export declare function ChunkGroupAndFileFromJSON(json: any): ChunkGroupAndFile;
export declare function ChunkGroupAndFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChunkGroupAndFile;
export declare function ChunkGroupAndFileToJSON(value?: ChunkGroupAndFile | null): any;