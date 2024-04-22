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
import type { InvitationData } from '../models/index';
export interface PostInvitationRequest {
    tROrganization: string;
    invitationData: InvitationData;
}
/**
 *
 */
export declare class InvitationApi extends runtime.BaseAPI {
    /**
     * Send Invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * Send Invitation
     */
    postInvitationRaw(requestParameters: PostInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Send Invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * Send Invitation
     */
    postInvitation(requestParameters: PostInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
