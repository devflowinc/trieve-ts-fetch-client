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
 * @interface AuthQuery
 */
export interface AuthQuery {
    /**
     * Code sent via email as a result of successful call to send_invitation
     * @type {string}
     * @memberof AuthQuery
     */
    invCode?: string;
    /**
     * ID of organization to authenticate into
     * @type {string}
     * @memberof AuthQuery
     */
    organizationId?: string;
    /**
     * URL to redirect to after successful login
     * @type {string}
     * @memberof AuthQuery
     */
    redirectUri?: string;
}
/**
 * Check if a given object implements the AuthQuery interface.
 */
export declare function instanceOfAuthQuery(value: object): boolean;
export declare function AuthQueryFromJSON(json: any): AuthQuery;
export declare function AuthQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthQuery;
export declare function AuthQueryToJSON(value?: AuthQuery | null): any;
