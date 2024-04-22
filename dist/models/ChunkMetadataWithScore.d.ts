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
/**
 *
 * @export
 * @interface ChunkMetadataWithScore
 */
export interface ChunkMetadataWithScore {
    /**
     *
     * @type {string}
     * @memberof ChunkMetadataWithScore
     */
    chunkHtml?: string;
    /**
     *
     * @type {string}
     * @memberof ChunkMetadataWithScore
     */
    content: string;
    /**
     *
     * @type {Date}
     * @memberof ChunkMetadataWithScore
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof ChunkMetadataWithScore
     */
    datasetId: string;
    /**
     *
     * @type {string}
     * @memberof ChunkMetadataWithScore
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ChunkMetadataWithScore
     */
    link?: string;
    /**
     *
     * @type {any}
     * @memberof ChunkMetadataWithScore
     */
    metadata?: any;
    /**
     *
     * @type {string}
     * @memberof ChunkMetadataWithScore
     */
    qdrantPointId?: string;
    /**
     *
     * @type {number}
     * @memberof ChunkMetadataWithScore
     */
    score: number;
    /**
     *
     * @type {string}
     * @memberof ChunkMetadataWithScore
     */
    tagSet?: string;
    /**
     *
     * @type {Date}
     * @memberof ChunkMetadataWithScore
     */
    timeStamp?: Date;
    /**
     *
     * @type {string}
     * @memberof ChunkMetadataWithScore
     */
    trackingId?: string;
    /**
     *
     * @type {Date}
     * @memberof ChunkMetadataWithScore
     */
    updatedAt: Date;
    /**
     *
     * @type {number}
     * @memberof ChunkMetadataWithScore
     */
    weight: number;
}
/**
 * Check if a given object implements the ChunkMetadataWithScore interface.
 */
export declare function instanceOfChunkMetadataWithScore(value: object): boolean;
export declare function ChunkMetadataWithScoreFromJSON(json: any): ChunkMetadataWithScore;
export declare function ChunkMetadataWithScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChunkMetadataWithScore;
export declare function ChunkMetadataWithScoreToJSON(value?: ChunkMetadataWithScore | null): any;
