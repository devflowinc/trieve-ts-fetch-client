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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicApi = void 0;
var runtime = require("../runtime");
var index_1 = require("../models/index");
/**
 *
 */
var TopicApi = /** @class */ (function (_super) {
    __extends(TopicApi, _super);
    function TopicApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create Topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * Create Topic
     */
    TopicApi.prototype.createTopicRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tRDataset'] == null) {
                            throw new runtime.RequiredError('tRDataset', 'Required parameter "tRDataset" was null or undefined when calling createTopic().');
                        }
                        if (requestParameters['createTopicData'] == null) {
                            throw new runtime.RequiredError('createTopicData', 'Required parameter "createTopicData" was null or undefined when calling createTopic().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters['tRDataset'] != null) {
                            headerParameters['TR-Dataset'] = String(requestParameters['tRDataset']);
                        }
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/topic",
                            method: 'POST',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, index_1.CreateTopicDataToJSON)(requestParameters['createTopicData']),
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.TopicFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Create Topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * Create Topic
     */
    TopicApi.prototype.createTopic = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createTopicRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete Topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * Delete Topic
     */
    TopicApi.prototype.deleteTopicRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tRDataset'] == null) {
                            throw new runtime.RequiredError('tRDataset', 'Required parameter "tRDataset" was null or undefined when calling deleteTopic().');
                        }
                        if (requestParameters['topicId'] == null) {
                            throw new runtime.RequiredError('topicId', 'Required parameter "topicId" was null or undefined when calling deleteTopic().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (requestParameters['tRDataset'] != null) {
                            headerParameters['TR-Dataset'] = String(requestParameters['tRDataset']);
                        }
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/topic/{topic_id}".replace("{".concat("topic_id", "}"), encodeURIComponent(String(requestParameters['topicId']))),
                            method: 'DELETE',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Delete Topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * Delete Topic
     */
    TopicApi.prototype.deleteTopic = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteTopicRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get All Topics for User  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * Get All Topics for User
     */
    TopicApi.prototype.getAllTopicsForUserRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['userId'] == null) {
                            throw new runtime.RequiredError('userId', 'Required parameter "userId" was null or undefined when calling getAllTopicsForUser().');
                        }
                        if (requestParameters['tRDataset'] == null) {
                            throw new runtime.RequiredError('tRDataset', 'Required parameter "tRDataset" was null or undefined when calling getAllTopicsForUser().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (requestParameters['tRDataset'] != null) {
                            headerParameters['TR-Dataset'] = String(requestParameters['tRDataset']);
                        }
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/topic/user/{user_id}".replace("{".concat("user_id", "}"), encodeURIComponent(String(requestParameters['userId']))),
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(index_1.TopicFromJSON); })];
                }
            });
        });
    };
    /**
     * Get All Topics for User  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * Get All Topics for User
     */
    TopicApi.prototype.getAllTopicsForUser = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllTopicsForUserRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update Topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * Update Topic
     */
    TopicApi.prototype.updateTopicRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tRDataset'] == null) {
                            throw new runtime.RequiredError('tRDataset', 'Required parameter "tRDataset" was null or undefined when calling updateTopic().');
                        }
                        if (requestParameters['updateTopicData'] == null) {
                            throw new runtime.RequiredError('updateTopicData', 'Required parameter "updateTopicData" was null or undefined when calling updateTopic().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters['tRDataset'] != null) {
                            headerParameters['TR-Dataset'] = String(requestParameters['tRDataset']);
                        }
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/topic",
                            method: 'PUT',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, index_1.UpdateTopicDataToJSON)(requestParameters['updateTopicData']),
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Update Topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * Update Topic
     */
    TopicApi.prototype.updateTopic = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateTopicRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TopicApi;
}(runtime.BaseAPI));
exports.TopicApi = TopicApi;
