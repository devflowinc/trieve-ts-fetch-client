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
export function instanceOfUploadFileResult(value: object): boolean {
    if (!('fileMetadata' in value)) return false;
    return true;
}

export function UploadFileResultFromJSON(json: any): UploadFileResult {
    return UploadFileResultFromJSONTyped(json, false);
}

export function UploadFileResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFileResult {
    if (json == null) {
        return json;
    }
    return {
        
        'fileMetadata': json['file_metadata'],
    };
}

export function UploadFileResultToJSON(value?: UploadFileResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'file_metadata': value['fileMetadata'],
    };
}
