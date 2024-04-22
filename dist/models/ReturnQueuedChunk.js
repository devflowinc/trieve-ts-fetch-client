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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnQueuedChunkToJSON = exports.ReturnQueuedChunkFromJSONTyped = exports.ReturnQueuedChunkFromJSON = void 0;
var BatchQueuedChunkResponse_1 = require("./BatchQueuedChunkResponse");
var SingleQueuedChunkResponse_1 = require("./SingleQueuedChunkResponse");
function ReturnQueuedChunkFromJSON(json) {
    return ReturnQueuedChunkFromJSONTyped(json, false);
}
exports.ReturnQueuedChunkFromJSON = ReturnQueuedChunkFromJSON;
function ReturnQueuedChunkFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return __assign(__assign({}, (0, BatchQueuedChunkResponse_1.BatchQueuedChunkResponseFromJSONTyped)(json, true)), (0, SingleQueuedChunkResponse_1.SingleQueuedChunkResponseFromJSONTyped)(json, true));
}
exports.ReturnQueuedChunkFromJSONTyped = ReturnQueuedChunkFromJSONTyped;
function ReturnQueuedChunkToJSON(value) {
    if (value == null) {
        return value;
    }
    if ((0, BatchQueuedChunkResponse_1.instanceOfBatchQueuedChunkResponse)(value)) {
        return (0, BatchQueuedChunkResponse_1.BatchQueuedChunkResponseToJSON)(value);
    }
    if ((0, SingleQueuedChunkResponse_1.instanceOfSingleQueuedChunkResponse)(value)) {
        return (0, SingleQueuedChunkResponse_1.SingleQueuedChunkResponseToJSON)(value);
    }
    return {};
}
exports.ReturnQueuedChunkToJSON = ReturnQueuedChunkToJSON;
