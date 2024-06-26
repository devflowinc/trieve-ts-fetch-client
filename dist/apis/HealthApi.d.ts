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
import * as runtime from '../runtime';
/**
 *
 */
export declare class HealthApi extends runtime.BaseAPI {
    /**
     * Health Check  Confirmation that the service is healthy and can make embedding vectors
     * Health Check
     */
    healthCheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Health Check  Confirmation that the service is healthy and can make embedding vectors
     * Health Check
     */
    healthCheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
