import { type AgenticEndpointAccessCloudConfigResponse, type AgenticEndpointAccessConfigPullRequest } from "./contracts";
export type AgenticEndpointAccessConfigClient = {
    pullConfig(request: AgenticEndpointAccessConfigPullRequest): Promise<AgenticEndpointAccessCloudConfigResponse>;
};
export declare function pullAgenticEndpointAccessCloudConfig(client: AgenticEndpointAccessConfigClient, requestValue: AgenticEndpointAccessConfigPullRequest): Promise<AgenticEndpointAccessCloudConfigResponse>;
