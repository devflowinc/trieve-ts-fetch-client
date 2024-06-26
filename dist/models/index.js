"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./AddChunkToGroupData"), exports);
__exportStar(require("./ApiKeyDTO"), exports);
__exportStar(require("./AuthQuery"), exports);
__exportStar(require("./BatchQueuedChunkResponse"), exports);
__exportStar(require("./BookmarkData"), exports);
__exportStar(require("./BookmarkGroupResult"), exports);
__exportStar(require("./ChatMessageProxy"), exports);
__exportStar(require("./ChunkData"), exports);
__exportStar(require("./ChunkFilter"), exports);
__exportStar(require("./ChunkGroup"), exports);
__exportStar(require("./ChunkGroupAndFile"), exports);
__exportStar(require("./ChunkMetadata"), exports);
__exportStar(require("./ChunkMetadataWithScore"), exports);
__exportStar(require("./ClientDatasetConfiguration"), exports);
__exportStar(require("./CreateChunkData"), exports);
__exportStar(require("./CreateChunkGroupData"), exports);
__exportStar(require("./CreateDatasetRequest"), exports);
__exportStar(require("./CreateMessageData"), exports);
__exportStar(require("./CreateOrganizationData"), exports);
__exportStar(require("./CreateTopicData"), exports);
__exportStar(require("./Dataset"), exports);
__exportStar(require("./DatasetAndUsage"), exports);
__exportStar(require("./DatasetDTO"), exports);
__exportStar(require("./DatasetUsageCount"), exports);
__exportStar(require("./DeleteTopicData"), exports);
__exportStar(require("./DeleteUserApiKeyRequest"), exports);
__exportStar(require("./EditMessageData"), exports);
__exportStar(require("./ErrorResponseBody"), exports);
__exportStar(require("./Event"), exports);
__exportStar(require("./EventReturn"), exports);
__exportStar(require("./FieldCondition"), exports);
__exportStar(require("./FileDTO"), exports);
__exportStar(require("./GenerateChunksRequest"), exports);
__exportStar(require("./GetEventsData"), exports);
__exportStar(require("./GetGroupsForChunksData"), exports);
__exportStar(require("./GroupData"), exports);
__exportStar(require("./GroupScoreChunk"), exports);
__exportStar(require("./GroupScoreSlimChunks"), exports);
__exportStar(require("./InvitationData"), exports);
__exportStar(require("./MatchCondition"), exports);
__exportStar(require("./Message"), exports);
__exportStar(require("./ModelFile"), exports);
__exportStar(require("./Organization"), exports);
__exportStar(require("./OrganizationUsageCount"), exports);
__exportStar(require("./Range"), exports);
__exportStar(require("./RangeCondition"), exports);
__exportStar(require("./RecommendChunksRequest"), exports);
__exportStar(require("./RecommendGroupChunksRequest"), exports);
__exportStar(require("./RegenerateMessageData"), exports);
__exportStar(require("./ReturnQueuedChunk"), exports);
__exportStar(require("./ScoreChunkDTO"), exports);
__exportStar(require("./ScoreSlimChunks"), exports);
__exportStar(require("./SearchChunkData"), exports);
__exportStar(require("./SearchChunkQueryResponseBody"), exports);
__exportStar(require("./SearchOverGroupsData"), exports);
__exportStar(require("./SearchOverGroupsResults"), exports);
__exportStar(require("./SearchOverGroupsSlimResults"), exports);
__exportStar(require("./SearchSlimChunkQueryResponseBody"), exports);
__exportStar(require("./SearchWithinGroupData"), exports);
__exportStar(require("./SearchWithinGroupResults"), exports);
__exportStar(require("./SearchWithinGroupSlimResults"), exports);
__exportStar(require("./SetUserApiKeyRequest"), exports);
__exportStar(require("./SetUserApiKeyResponse"), exports);
__exportStar(require("./SingleQueuedChunkResponse"), exports);
__exportStar(require("./SlimChunkMetadata"), exports);
__exportStar(require("./SlimChunkMetadataWithScore"), exports);
__exportStar(require("./SlimGroup"), exports);
__exportStar(require("./SlimUser"), exports);
__exportStar(require("./StripePlan"), exports);
__exportStar(require("./SuggestedQueriesRequest"), exports);
__exportStar(require("./SuggestedQueriesResponse"), exports);
__exportStar(require("./Topic"), exports);
__exportStar(require("./UpdateChunkByTrackingIdData"), exports);
__exportStar(require("./UpdateChunkData"), exports);
__exportStar(require("./UpdateChunkGroupData"), exports);
__exportStar(require("./UpdateDatasetRequest"), exports);
__exportStar(require("./UpdateGroupByTrackingIDData"), exports);
__exportStar(require("./UpdateOrganizationData"), exports);
__exportStar(require("./UpdateTopicData"), exports);
__exportStar(require("./UpdateUserData"), exports);
__exportStar(require("./UploadFileData"), exports);
__exportStar(require("./UploadFileResult"), exports);
__exportStar(require("./UserOrganization"), exports);
