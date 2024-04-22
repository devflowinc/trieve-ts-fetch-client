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
import type { StripePlan } from '../models/index';
export interface CancelSubscriptionRequest {
    tROrganization: string;
    subscriptionId: string;
}
export interface DirectToPaymentLinkRequest {
    planId: string;
    organizationId: string;
}
export interface UpdateSubscriptionPlanRequest {
    tROrganization: string;
    subscriptionId: string;
    planId: string;
}
/**
 *
 */
export declare class StripeApi extends runtime.BaseAPI {
    /**
     * Cancel Subscription  Cancel a subscription by its id
     * Cancel Subscription
     */
    cancelSubscriptionRaw(requestParameters: CancelSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Cancel Subscription  Cancel a subscription by its id
     * Cancel Subscription
     */
    cancelSubscription(requestParameters: CancelSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Checkout  Get a direct link to the stripe checkout page for the plan and organization
     * Checkout
     */
    directToPaymentLinkRaw(requestParameters: DirectToPaymentLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Checkout  Get a direct link to the stripe checkout page for the plan and organization
     * Checkout
     */
    directToPaymentLink(requestParameters: DirectToPaymentLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get All Plans  Get a list of all plans
     * Get All Plans
     */
    getAllPlansRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StripePlan>>>;
    /**
     * Get All Plans  Get a list of all plans
     * Get All Plans
     */
    getAllPlans(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StripePlan>>;
    /**
     * Update Subscription Plan  Update a subscription to a new plan
     * Update Subscription Plan
     */
    updateSubscriptionPlanRaw(requestParameters: UpdateSubscriptionPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update Subscription Plan  Update a subscription to a new plan
     * Update Subscription Plan
     */
    updateSubscriptionPlan(requestParameters: UpdateSubscriptionPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
