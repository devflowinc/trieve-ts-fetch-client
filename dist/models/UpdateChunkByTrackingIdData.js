"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChunkByTrackingIdDataToJSON = exports.UpdateChunkByTrackingIdDataFromJSONTyped = exports.UpdateChunkByTrackingIdDataFromJSON = exports.instanceOfUpdateChunkByTrackingIdData = void 0;
/**
 * Check if a given object implements the UpdateChunkByTrackingIdData interface.
 */
function instanceOfUpdateChunkByTrackingIdData(value) {
    if (!('trackingId' in value))
        return false;
    return true;
}
exports.instanceOfUpdateChunkByTrackingIdData = instanceOfUpdateChunkByTrackingIdData;
function UpdateChunkByTrackingIdDataFromJSON(json) {
    return UpdateChunkByTrackingIdDataFromJSONTyped(json, false);
}
exports.UpdateChunkByTrackingIdDataFromJSON = UpdateChunkByTrackingIdDataFromJSON;
function UpdateChunkByTrackingIdDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chunkHtml': json['chunk_html'] == null ? undefined : json['chunk_html'],
        'convertHtmlToText': json['convert_html_to_text'] == null ? undefined : json['convert_html_to_text'],
        'groupIds': json['group_ids'] == null ? undefined : json['group_ids'],
        'groupTrackingIds': json['group_tracking_ids'] == null ? undefined : json['group_tracking_ids'],
        'link': json['link'] == null ? undefined : json['link'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'timeStamp': json['time_stamp'] == null ? undefined : json['time_stamp'],
        'trackingId': json['tracking_id'],
        'weight': json['weight'] == null ? undefined : json['weight'],
    };
}
exports.UpdateChunkByTrackingIdDataFromJSONTyped = UpdateChunkByTrackingIdDataFromJSONTyped;
function UpdateChunkByTrackingIdDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chunk_html': value['chunkHtml'],
        'convert_html_to_text': value['convertHtmlToText'],
        'group_ids': value['groupIds'],
        'group_tracking_ids': value['groupTrackingIds'],
        'link': value['link'],
        'metadata': value['metadata'],
        'time_stamp': value['timeStamp'],
        'tracking_id': value['trackingId'],
        'weight': value['weight'],
    };
}
exports.UpdateChunkByTrackingIdDataToJSON = UpdateChunkByTrackingIdDataToJSON;