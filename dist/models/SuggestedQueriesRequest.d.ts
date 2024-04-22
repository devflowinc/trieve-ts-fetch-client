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
 * @interface SuggestedQueriesRequest
 */
export interface SuggestedQueriesRequest {
    /**
     * The query to base the generated suggested queries off of.
     * @type {string}
     * @memberof SuggestedQueriesRequest
     */
    query: string;
}
/**
 * Check if a given object implements the SuggestedQueriesRequest interface.
 */
export declare function instanceOfSuggestedQueriesRequest(value: object): boolean;
export declare function SuggestedQueriesRequestFromJSON(json: any): SuggestedQueriesRequest;
export declare function SuggestedQueriesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestedQueriesRequest;
export declare function SuggestedQueriesRequestToJSON(value?: SuggestedQueriesRequest | null): any;
