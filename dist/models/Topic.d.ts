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
 * @interface Topic
 */
export interface Topic {
    /**
     *
     * @type {Date}
     * @memberof Topic
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    datasetId: string;
    /**
     *
     * @type {boolean}
     * @memberof Topic
     */
    deleted: boolean;
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    name: string;
    /**
     *
     * @type {Date}
     * @memberof Topic
     */
    updatedAt: Date;
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    userId: string;
}
/**
 * Check if a given object implements the Topic interface.
 */
export declare function instanceOfTopic(value: object): boolean;
export declare function TopicFromJSON(json: any): Topic;
export declare function TopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): Topic;
export declare function TopicToJSON(value?: Topic | null): any;