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
  InvitationData,
} from '../models/index';
import {
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    InvitationDataFromJSON,
    InvitationDataToJSON,
} from '../models/index';

export interface PostInvitationRequest {
    tROrganization: string;
    invitationData: InvitationData;
}

/**
 * 
 */
export class InvitationApi extends runtime.BaseAPI {

    /**
     * Send Invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * Send Invitation
     */
    async postInvitationRaw(requestParameters: PostInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['tROrganization'] == null) {
            throw new runtime.RequiredError(
                'tROrganization',
                'Required parameter "tROrganization" was null or undefined when calling postInvitation().'
            );
        }

        if (requestParameters['invitationData'] == null) {
            throw new runtime.RequiredError(
                'invitationData',
                'Required parameter "invitationData" was null or undefined when calling postInvitation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['tROrganization'] != null) {
            headerParameters['TR-Organization'] = String(requestParameters['tROrganization']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/invitation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvitationDataToJSON(requestParameters['invitationData']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Send Invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * Send Invitation
     */
    async postInvitation(requestParameters: PostInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postInvitationRaw(requestParameters, initOverrides);
    }

}
