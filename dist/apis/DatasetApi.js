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
exports.DatasetApi = void 0;
var runtime = require("../runtime");
var index_1 = require("../models/index");
/**
 *
 */
var DatasetApi = /** @class */ (function (_super) {
    __extends(DatasetApi, _super);
    function DatasetApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * Create dataset
     */
    DatasetApi.prototype.createDatasetRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tROrganization'] == null) {
                            throw new runtime.RequiredError('tROrganization', 'Required parameter "tROrganization" was null or undefined when calling createDataset().');
                        }
                        if (requestParameters['createDatasetRequest'] == null) {
                            throw new runtime.RequiredError('createDatasetRequest', 'Required parameter "createDatasetRequest" was null or undefined when calling createDataset().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters['tROrganization'] != null) {
                            headerParameters['TR-Organization'] = String(requestParameters['tROrganization']);
                        }
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/dataset",
                            method: 'POST',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, index_1.CreateDatasetRequestToJSON)(requestParameters['createDatasetRequest']),
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.DatasetFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Create dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * Create dataset
     */
    DatasetApi.prototype.createDataset = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createDatasetRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete Dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * Delete Dataset
     */
    DatasetApi.prototype.deleteDatasetRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tRDataset'] == null) {
                            throw new runtime.RequiredError('tRDataset', 'Required parameter "tRDataset" was null or undefined when calling deleteDataset().');
                        }
                        if (requestParameters['datasetId'] == null) {
                            throw new runtime.RequiredError('datasetId', 'Required parameter "datasetId" was null or undefined when calling deleteDataset().');
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
                            path: "/api/dataset/{dataset_id}".replace("{".concat("dataset_id", "}"), encodeURIComponent(String(requestParameters['datasetId']))),
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
     * Delete Dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * Delete Dataset
     */
    DatasetApi.prototype.deleteDataset = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteDatasetRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get Client Configuration  Get the client configuration for a dataset. Will use the TR-D
     * Get Client Configuration
     */
    DatasetApi.prototype.getClientDatasetConfigRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tRDataset'] == null) {
                            throw new runtime.RequiredError('tRDataset', 'Required parameter "tRDataset" was null or undefined when calling getClientDatasetConfig().');
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
                            path: "/api/dataset/envs",
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.ClientDatasetConfigurationFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get Client Configuration  Get the client configuration for a dataset. Will use the TR-D
     * Get Client Configuration
     */
    DatasetApi.prototype.getClientDatasetConfig = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getClientDatasetConfigRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get Dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * Get Dataset
     */
    DatasetApi.prototype.getDatasetRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tROrganization'] == null) {
                            throw new runtime.RequiredError('tROrganization', 'Required parameter "tROrganization" was null or undefined when calling getDataset().');
                        }
                        if (requestParameters['tRDataset'] == null) {
                            throw new runtime.RequiredError('tRDataset', 'Required parameter "tRDataset" was null or undefined when calling getDataset().');
                        }
                        if (requestParameters['datasetId'] == null) {
                            throw new runtime.RequiredError('datasetId', 'Required parameter "datasetId" was null or undefined when calling getDataset().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (requestParameters['tROrganization'] != null) {
                            headerParameters['TR-Organization'] = String(requestParameters['tROrganization']);
                        }
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
                            path: "/api/dataset/{dataset_id}".replace("{".concat("dataset_id", "}"), encodeURIComponent(String(requestParameters['datasetId']))),
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.DatasetFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get Dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * Get Dataset
     */
    DatasetApi.prototype.getDataset = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatasetRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get Datasets from Organization  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * Get Datasets from Organization
     */
    DatasetApi.prototype.getDatasetsFromOrganizationRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tROrganization'] == null) {
                            throw new runtime.RequiredError('tROrganization', 'Required parameter "tROrganization" was null or undefined when calling getDatasetsFromOrganization().');
                        }
                        if (requestParameters['organizationId'] == null) {
                            throw new runtime.RequiredError('organizationId', 'Required parameter "organizationId" was null or undefined when calling getDatasetsFromOrganization().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (requestParameters['tROrganization'] != null) {
                            headerParameters['TR-Organization'] = String(requestParameters['tROrganization']);
                        }
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/dataset/organization/{organization_id}".replace("{".concat("organization_id", "}"), encodeURIComponent(String(requestParameters['organizationId']))),
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(index_1.DatasetAndUsageFromJSON); })];
                }
            });
        });
    };
    /**
     * Get Datasets from Organization  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * Get Datasets from Organization
     */
    DatasetApi.prototype.getDatasetsFromOrganization = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDatasetsFromOrganizationRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update Dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * Update Dataset
     */
    DatasetApi.prototype.updateDatasetRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['tROrganization'] == null) {
                            throw new runtime.RequiredError('tROrganization', 'Required parameter "tROrganization" was null or undefined when calling updateDataset().');
                        }
                        if (requestParameters['updateDatasetRequest'] == null) {
                            throw new runtime.RequiredError('updateDatasetRequest', 'Required parameter "updateDatasetRequest" was null or undefined when calling updateDataset().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters['tROrganization'] != null) {
                            headerParameters['TR-Organization'] = String(requestParameters['tROrganization']);
                        }
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "Authorization";
                        return [4 /*yield*/, this.configuration.apiKey("Authorization")];
                    case 1:
                        _a[_b] = _c.sent(); // ApiKey authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/api/dataset",
                            method: 'PUT',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, index_1.UpdateDatasetRequestToJSON)(requestParameters['updateDatasetRequest']),
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.DatasetFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Update Dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * Update Dataset
     */
    DatasetApi.prototype.updateDataset = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateDatasetRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DatasetApi;
}(runtime.BaseAPI));
exports.DatasetApi = DatasetApi;
