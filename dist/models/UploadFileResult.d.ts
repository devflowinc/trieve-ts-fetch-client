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
 * @interface UploadFileResult
 */
export interface UploadFileResult {
    /**
     *
     * @type {any}
     * @memberof UploadFileResult
     */
    fileMetadata: any;
}
/**
 * Check if a given object implements the UploadFileResult interface.
 */
export declare function instanceOfUploadFileResult(value: object): boolean;
export declare function UploadFileResultFromJSON(json: any): UploadFileResult;
export declare function UploadFileResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFileResult;
export declare function UploadFileResultToJSON(value?: UploadFileResult | null): any;
