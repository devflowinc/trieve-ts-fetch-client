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
exports.UserApi = void 0;
var runtime = require("../runtime");
var index_1 = require("../models/index");
/**
 *
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Delete User Api Key  Delete an api key for the auth\'ed user.
     * Delete User Api Key
     */
    UserApi.prototype.deleteUserApiKeyRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['apiKeyId'] == null) {
                            throw new runtime.RequiredError('apiKeyId', 'Required parameter "apiKeyId" was null or undefined when calling deleteUserApiKey().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/user/api_key/{api_key_id}".replace("{".concat("api_key_id", "}"), encodeURIComponent(String(requestParameters['apiKeyId']))),
                            method: 'DELETE',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(index_1.ApiKeyDTOFromJSON); })];
                }
            });
        });
    };
    /**
     * Delete User Api Key  Delete an api key for the auth\'ed user.
     * Delete User Api Key
     */
    UserApi.prototype.deleteUserApiKey = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteUserApiKeyRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Set User Api Key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key. If a write role is assigned the api key will have permission level of the auth\'ed user who calls this endpoint.
     * Set User Api Key
     */
    UserApi.prototype.setUserApiKeyRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['setUserApiKeyRequest'] == null) {
                            throw new runtime.RequiredError('setUserApiKeyRequest', 'Required parameter "setUserApiKeyRequest" was null or undefined when calling setUserApiKey().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/user/api_key",
                            method: 'POST',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, index_1.SetUserApiKeyRequestToJSON)(requestParameters['setUserApiKeyRequest']),
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.SetUserApiKeyResponseFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Set User Api Key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key. If a write role is assigned the api key will have permission level of the auth\'ed user who calls this endpoint.
     * Set User Api Key
     */
    UserApi.prototype.setUserApiKey = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setUserApiKeyRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update User  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.
     * Update User
     */
    UserApi.prototype.updateUserRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['updateUserData'] == null) {
                            throw new runtime.RequiredError('updateUserData', 'Required parameter "updateUserData" was null or undefined when calling updateUser().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/user",
                            method: 'PUT',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, index_1.UpdateUserDataToJSON)(requestParameters['updateUserData']),
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.SlimUserFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Update User  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.
     * Update User
     */
    UserApi.prototype.updateUser = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateUserRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UserApi;
}(runtime.BaseAPI));
exports.UserApi = UserApi;
