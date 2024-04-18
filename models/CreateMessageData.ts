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
 * @interface CreateMessageData
 */
export interface CreateMessageData {
    /**
     * Whether or not to highlight the citations in the response. If this is set to true or not included, the citations will be highlighted. If this is set to false, the citations will not be highlighted. Default is true.
     * @type {boolean}
     * @memberof CreateMessageData
     */
    highlightCitations?: boolean;
    /**
     * The delimiters to use for highlighting the citations. If this is not included, the default delimiters will be used. Default is `[".", "!", "?", "\n", "\t", ","]`.
     * @type {Array<string>}
     * @memberof CreateMessageData
     */
    highlightDelimiters?: Array<string>;
    /**
     * The model to use for the assistant's messages. This can be any model from the openrouter model list. If no model is provided, gpt-3.5-turbo will be used.
     * @type {string}
     * @memberof CreateMessageData
     */
    model?: string;
    /**
     * The content of the user message to attach to the topic and then generate an assistant message in response to.
     * @type {string}
     * @memberof CreateMessageData
     */
    newMessageContent: string;
    /**
     * Whether or not to stream the response. If this is set to true or not included, the response will be a stream. If this is set to false, the response will be a normal JSON response. Default is true.
     * @type {boolean}
     * @memberof CreateMessageData
     */
    streamResponse?: boolean;
    /**
     * The ID of the topic to attach the message to.
     * @type {string}
     * @memberof CreateMessageData
     */
    topicId: string;
}

/**
 * Check if a given object implements the CreateMessageData interface.
 */
export function instanceOfCreateMessageData(value: object): boolean {
    if (!('newMessageContent' in value)) return false;
    if (!('topicId' in value)) return false;
    return true;
}

export function CreateMessageDataFromJSON(json: any): CreateMessageData {
    return CreateMessageDataFromJSONTyped(json, false);
}

export function CreateMessageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMessageData {
    if (json == null) {
        return json;
    }
    return {
        
        'highlightCitations': json['highlight_citations'] == null ? undefined : json['highlight_citations'],
        'highlightDelimiters': json['highlight_delimiters'] == null ? undefined : json['highlight_delimiters'],
        'model': json['model'] == null ? undefined : json['model'],
        'newMessageContent': json['new_message_content'],
        'streamResponse': json['stream_response'] == null ? undefined : json['stream_response'],
        'topicId': json['topic_id'],
    };
}

export function CreateMessageDataToJSON(value?: CreateMessageData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'highlight_citations': value['highlightCitations'],
        'highlight_delimiters': value['highlightDelimiters'],
        'model': value['model'],
        'new_message_content': value['newMessageContent'],
        'stream_response': value['streamResponse'],
        'topic_id': value['topicId'],
    };
}

