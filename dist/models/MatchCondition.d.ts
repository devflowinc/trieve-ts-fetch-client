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
 * @type MatchCondition
 *
 * @export
 */
export type MatchCondition = number | string;
export declare function MatchConditionFromJSON(json: any): MatchCondition;
export declare function MatchConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchCondition;
export declare function MatchConditionToJSON(value?: MatchCondition | null): any;
