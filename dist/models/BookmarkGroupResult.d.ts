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
import type { SlimGroup } from './SlimGroup';
/**
 *
 * @export
 * @interface BookmarkGroupResult
 */
export interface BookmarkGroupResult {
    /**
     *
     * @type {string}
     * @memberof BookmarkGroupResult
     */
    chunkUuid: string;
    /**
     *
     * @type {Array<SlimGroup>}
     * @memberof BookmarkGroupResult
     */
    slimGroups: Array<SlimGroup>;
}
/**
 * Check if a given object implements the BookmarkGroupResult interface.
 */
export declare function instanceOfBookmarkGroupResult(value: object): boolean;
export declare function BookmarkGroupResultFromJSON(json: any): BookmarkGroupResult;
export declare function BookmarkGroupResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarkGroupResult;
export declare function BookmarkGroupResultToJSON(value?: BookmarkGroupResult | null): any;