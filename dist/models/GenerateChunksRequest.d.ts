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
import type { ChatMessageProxy } from './ChatMessageProxy';
/**
 *
 * @export
 * @interface GenerateChunksRequest
 */
export interface GenerateChunksRequest {
    /**
     * The ids of the chunks to be retrieved and injected into the context window for RAG.
     * @type {Array<string>}
     * @memberof GenerateChunksRequest
     */
    chunkIds: Array<string>;
    /**
     * The model to use for the chat. This can be any model from the openrouter model list. If no model is provided, gpt-3.5-turbo will be used.
     * @type {string}
     * @memberof GenerateChunksRequest
     */
    model?: string;
    /**
     * The previous messages to be placed into the chat history. The last message in this array will be the prompt for the model to inference on. The length of this array must be at least 1.
     * @type {Array<ChatMessageProxy>}
     * @memberof GenerateChunksRequest
     */
    prevMessages: Array<ChatMessageProxy>;
    /**
     * Prompt for the last message in the prev_messages array. This will be used to generate the next message in the chat. The default is 'Respond to the instruction and include the doc numbers that you used in square brackets at the end of the sentences that you used the docs for:'. You can also specify an empty string to leave the final message alone such that your user's final message can be used as the prompt. See docs.trieve.ai or contact us for more information.
     * @type {string}
     * @memberof GenerateChunksRequest
     */
    prompt?: string;
    /**
     * Whether or not to stream the response. If this is set to true or not included, the response will be a stream. If this is set to false, the response will be a normal JSON response. Default is true.
     * @type {boolean}
     * @memberof GenerateChunksRequest
     */
    streamResponse?: boolean;
}
/**
 * Check if a given object implements the GenerateChunksRequest interface.
 */
export declare function instanceOfGenerateChunksRequest(value: object): boolean;
export declare function GenerateChunksRequestFromJSON(json: any): GenerateChunksRequest;
export declare function GenerateChunksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateChunksRequest;
export declare function GenerateChunksRequestToJSON(value?: GenerateChunksRequest | null): any;
