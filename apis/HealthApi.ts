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


import * as runtime from '../runtime';
import type {
  ErrorResponseBody,
} from '../models/index';
import {
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
} from '../models/index';

/**
 * 
 */
export class HealthApi extends runtime.BaseAPI {

    /**
     * Health Check  Confirmation that the service is healthy and can make embedding vectors
     * Health Check
     */
    async healthCheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Health Check  Confirmation that the service is healthy and can make embedding vectors
     * Health Check
     */
    async healthCheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.healthCheckRaw(initOverrides);
    }

}
