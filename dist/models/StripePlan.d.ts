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
 * @interface StripePlan
 */
export interface StripePlan {
    /**
     *
     * @type {number}
     * @memberof StripePlan
     */
    amount: number;
    /**
     *
     * @type {number}
     * @memberof StripePlan
     */
    chunkCount: number;
    /**
     *
     * @type {Date}
     * @memberof StripePlan
     */
    createdAt: Date;
    /**
     *
     * @type {number}
     * @memberof StripePlan
     */
    datasetCount: number;
    /**
     *
     * @type {number}
     * @memberof StripePlan
     */
    fileStorage: number;
    /**
     *
     * @type {string}
     * @memberof StripePlan
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof StripePlan
     */
    messageCount: number;
    /**
     *
     * @type {string}
     * @memberof StripePlan
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof StripePlan
     */
    stripeId: string;
    /**
     *
     * @type {Date}
     * @memberof StripePlan
     */
    updatedAt: Date;
    /**
     *
     * @type {number}
     * @memberof StripePlan
     */
    userCount: number;
}
/**
 * Check if a given object implements the StripePlan interface.
 */
export declare function instanceOfStripePlan(value: object): boolean;
export declare function StripePlanFromJSON(json: any): StripePlan;
export declare function StripePlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripePlan;
export declare function StripePlanToJSON(value?: StripePlan | null): any;