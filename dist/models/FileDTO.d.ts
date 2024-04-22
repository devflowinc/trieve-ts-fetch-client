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
 * @interface FileDTO
 */
export interface FileDTO {
    /**
     *
     * @type {Date}
     * @memberof FileDTO
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof FileDTO
     */
    fileName: string;
    /**
     *
     * @type {string}
     * @memberof FileDTO
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof FileDTO
     */
    link?: string;
    /**
     *
     * @type {any}
     * @memberof FileDTO
     */
    metadata?: any;
    /**
     *
     * @type {string}
     * @memberof FileDTO
     */
    s3Url: string;
    /**
     *
     * @type {number}
     * @memberof FileDTO
     */
    size: number;
    /**
     *
     * @type {Date}
     * @memberof FileDTO
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the FileDTO interface.
 */
export declare function instanceOfFileDTO(value: object): boolean;
export declare function FileDTOFromJSON(json: any): FileDTO;
export declare function FileDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileDTO;
export declare function FileDTOToJSON(value?: FileDTO | null): any;