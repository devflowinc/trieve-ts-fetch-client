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
import type { ClientDatasetConfiguration, CreateDatasetRequest, Dataset, DatasetAndUsage, UpdateDatasetRequest } from '../models/index';
export interface CreateDatasetOperationRequest {
    tROrganization: string;
    createDatasetRequest: CreateDatasetRequest;
}
export interface DeleteDatasetRequest {
    tRDataset: string;
    datasetId: string;
}
export interface GetClientDatasetConfigRequest {
    tRDataset: string;
}
export interface GetDatasetRequest {
    tROrganization: string;
    tRDataset: string;
    datasetId: string;
}
export interface GetDatasetsFromOrganizationRequest {
    tROrganization: string;
    organizationId: string;
}
export interface UpdateDatasetOperationRequest {
    tROrganization: string;
    updateDatasetRequest: UpdateDatasetRequest;
}
/**
 *
 */
export declare class DatasetApi extends runtime.BaseAPI {
    /**
     * Create dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * Create dataset
     */
    createDatasetRaw(requestParameters: CreateDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Dataset>>;
    /**
     * Create dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * Create dataset
     */
    createDataset(requestParameters: CreateDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Dataset>;
    /**
     * Delete Dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * Delete Dataset
     */
    deleteDatasetRaw(requestParameters: DeleteDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete Dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * Delete Dataset
     */
    deleteDataset(requestParameters: DeleteDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get Client Configuration  Get the client configuration for a dataset. Will use the TR-D
     * Get Client Configuration
     */
    getClientDatasetConfigRaw(requestParameters: GetClientDatasetConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClientDatasetConfiguration>>;
    /**
     * Get Client Configuration  Get the client configuration for a dataset. Will use the TR-D
     * Get Client Configuration
     */
    getClientDatasetConfig(requestParameters: GetClientDatasetConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientDatasetConfiguration>;
    /**
     * Get Dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * Get Dataset
     */
    getDatasetRaw(requestParameters: GetDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Dataset>>;
    /**
     * Get Dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * Get Dataset
     */
    getDataset(requestParameters: GetDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Dataset>;
    /**
     * Get Datasets from Organization  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * Get Datasets from Organization
     */
    getDatasetsFromOrganizationRaw(requestParameters: GetDatasetsFromOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DatasetAndUsage>>>;
    /**
     * Get Datasets from Organization  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * Get Datasets from Organization
     */
    getDatasetsFromOrganization(requestParameters: GetDatasetsFromOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DatasetAndUsage>>;
    /**
     * Update Dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * Update Dataset
     */
    updateDatasetRaw(requestParameters: UpdateDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Dataset>>;
    /**
     * Update Dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * Update Dataset
     */
    updateDataset(requestParameters: UpdateDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Dataset>;
}