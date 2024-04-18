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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UploadFileData
 */
export interface UploadFileData {
    /**
     * Base64 encoded file. Convert + to -, / to _, and remove the ending = if present. This is the standard base64url encoding.
     * @type {string}
     * @memberof UploadFileData
     */
    base64File: string;
    /**
     * Create chunks is a boolean which determines whether or not to create chunks from the file. If false, you can manually chunk the file and send the chunks to the create_chunk endpoint with the file_id to associate chunks with the file. Meant mostly for advanced users.
     * @type {boolean}
     * @memberof UploadFileData
     */
    createChunks?: boolean;
    /**
     * Description is an optional convience field so you do not have to remember what the file contains or is about. It will be included on the group resulting from the file which will hold its chunk.
     * @type {string}
     * @memberof UploadFileData
     */
    description?: string;
    /**
     * Name of the file being uploaded, including the extension.
     * @type {string}
     * @memberof UploadFileData
     */
    fileName: string;
    /**
     * Group tracking id is an optional field which allows you to specify the tracking id of the group that is created from the file. Chunks created will be created with the tracking id of `group_tracking_id|<index of chunk>`
     * @type {string}
     * @memberof UploadFileData
     */
    groupTrackingId?: string;
    /**
     * Link to the file. This can also be any string. This can be used to filter when searching for the file's resulting chunks. The link value will not affect embedding creation.
     * @type {string}
     * @memberof UploadFileData
     */
    link?: string;
    /**
     * Metadata is a JSON object which can be used to filter chunks. This is useful for when you want to filter chunks by arbitrary metadata. Unlike with tag filtering, there is a performance hit for filtering on metadata. Will be passed down to the file's chunks.
     * @type {any}
     * @memberof UploadFileData
     */
    metadata?: any;
    /**
     * Tag set is a comma separated list of tags which will be passed down to the chunks made from the file. Tags are used to filter chunks when searching. HNSW indices are created for each tag such that there is no performance loss when filtering on them.
     * @type {Array<string>}
     * @memberof UploadFileData
     */
    tagSet?: Array<string>;
    /**
     * Time stamp should be an ISO 8601 combined date and time without timezone. Time_stamp is used for time window filtering and recency-biasing search results. Will be passed down to the file's chunks.
     * @type {string}
     * @memberof UploadFileData
     */
    timeStamp?: string;
}

/**
 * Check if a given object implements the UploadFileData interface.
 */
export function instanceOfUploadFileData(value: object): boolean {
    if (!('base64File' in value)) return false;
    if (!('fileName' in value)) return false;
    return true;
}

export function UploadFileDataFromJSON(json: any): UploadFileData {
    return UploadFileDataFromJSONTyped(json, false);
}

export function UploadFileDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFileData {
    if (json == null) {
        return json;
    }
    return {
        
        'base64File': json['base64_file'],
        'createChunks': json['create_chunks'] == null ? undefined : json['create_chunks'],
        'description': json['description'] == null ? undefined : json['description'],
        'fileName': json['file_name'],
        'groupTrackingId': json['group_tracking_id'] == null ? undefined : json['group_tracking_id'],
        'link': json['link'] == null ? undefined : json['link'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'tagSet': json['tag_set'] == null ? undefined : json['tag_set'],
        'timeStamp': json['time_stamp'] == null ? undefined : json['time_stamp'],
    };
}

export function UploadFileDataToJSON(value?: UploadFileData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'base64_file': value['base64File'],
        'create_chunks': value['createChunks'],
        'description': value['description'],
        'file_name': value['fileName'],
        'group_tracking_id': value['groupTrackingId'],
        'link': value['link'],
        'metadata': value['metadata'],
        'tag_set': value['tagSet'],
        'time_stamp': value['timeStamp'],
    };
}

