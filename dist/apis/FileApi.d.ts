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
import type { FileDTO, UploadFileData, UploadFileResult } from '../models/index';
export interface DeleteFileHandlerRequest {
    tRDataset: string;
    fileId: string;
    deleteChunks: boolean;
}
export interface GetDatasetFilesHandlerRequest {
    tRDataset: string;
    datasetId: string;
    page: number;
}
export interface GetFileHandlerRequest {
    tRDataset: string;
    fileId: string;
}
export interface UploadFileHandlerRequest {
    tRDataset: string;
    uploadFileData: UploadFileData;
}
/**
 *
 */
export declare class FileApi extends runtime.BaseAPI {
    /**
     * Delete File  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but only delete them all together if you specify delete_chunks to be true. Auth\'ed user must be an admin or owner of the dataset\'s organization to delete a file.
     * Delete File
     */
    deleteFileHandlerRaw(requestParameters: DeleteFileHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete File  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but only delete them all together if you specify delete_chunks to be true. Auth\'ed user must be an admin or owner of the dataset\'s organization to delete a file.
     * Delete File
     */
    deleteFileHandler(requestParameters: DeleteFileHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get Files for Dataset  Get all files which belong to a given dataset specified by the dataset_id parameter. 10 files are returned per page.
     * Get Files for Dataset
     */
    getDatasetFilesHandlerRaw(requestParameters: GetDatasetFilesHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<any>>>;
    /**
     * Get Files for Dataset  Get all files which belong to a given dataset specified by the dataset_id parameter. 10 files are returned per page.
     * Get Files for Dataset
     */
    getDatasetFilesHandler(requestParameters: GetDatasetFilesHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<any>>;
    /**
     * Get File  Download a file based on its id.
     * Get File
     */
    getFileHandlerRaw(requestParameters: GetFileHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileDTO>>;
    /**
     * Get File  Download a file based on its id.
     * Get File
     */
    getFileHandler(requestParameters: GetFileHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileDTO>;
    /**
     * Upload File  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * Upload File
     */
    uploadFileHandlerRaw(requestParameters: UploadFileHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UploadFileResult>>;
    /**
     * Upload File  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * Upload File
     */
    uploadFileHandler(requestParameters: UploadFileHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UploadFileResult>;
}
