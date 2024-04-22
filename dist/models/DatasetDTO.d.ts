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
 * @interface DatasetDTO
 */
export interface DatasetDTO {
    /**
     *
     * @type {any}
     * @memberof DatasetDTO
     */
    clientConfiguration: any | null;
    /**
     *
     * @type {Date}
     * @memberof DatasetDTO
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof DatasetDTO
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DatasetDTO
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DatasetDTO
     */
    organizationId: string;
    /**
     *
     * @type {string}
     * @memberof DatasetDTO
     */
    trackingId?: string;
    /**
     *
     * @type {Date}
     * @memberof DatasetDTO
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the DatasetDTO interface.
 */
export declare function instanceOfDatasetDTO(value: object): boolean;
export declare function DatasetDTOFromJSON(json: any): DatasetDTO;
export declare function DatasetDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetDTO;
export declare function DatasetDTOToJSON(value?: DatasetDTO | null): any;
