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
 * @interface SlimGroup
 */
export interface SlimGroup {
    /**
     *
     * @type {string}
     * @memberof SlimGroup
     */
    datasetId: string;
    /**
     *
     * @type {string}
     * @memberof SlimGroup
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SlimGroup
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof SlimGroup
     */
    ofCurrentDataset: boolean;
}
/**
 * Check if a given object implements the SlimGroup interface.
 */
export declare function instanceOfSlimGroup(value: object): boolean;
export declare function SlimGroupFromJSON(json: any): SlimGroup;
export declare function SlimGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): SlimGroup;
export declare function SlimGroupToJSON(value?: SlimGroup | null): any;
