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
import type { Event } from './Event';
import {
    EventFromJSON,
    EventFromJSONTyped,
    EventToJSON,
} from './Event';

/**
 * 
 * @export
 * @interface EventReturn
 */
export interface EventReturn {
    /**
     * 
     * @type {Array<Event>}
     * @memberof EventReturn
     */
    events: Array<Event>;
    /**
     * 
     * @type {number}
     * @memberof EventReturn
     */
    pageCount: number;
}

/**
 * Check if a given object implements the EventReturn interface.
 */
export function instanceOfEventReturn(value: object): boolean {
    if (!('events' in value)) return false;
    if (!('pageCount' in value)) return false;
    return true;
}

export function EventReturnFromJSON(json: any): EventReturn {
    return EventReturnFromJSONTyped(json, false);
}

export function EventReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventReturn {
    if (json == null) {
        return json;
    }
    return {
        
        'events': ((json['events'] as Array<any>).map(EventFromJSON)),
        'pageCount': json['page_count'],
    };
}

export function EventReturnToJSON(value?: EventReturn | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'events': ((value['events'] as Array<any>).map(EventToJSON)),
        'page_count': value['pageCount'],
    };
}
