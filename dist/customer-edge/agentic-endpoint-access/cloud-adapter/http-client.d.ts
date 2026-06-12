import { type AgenticEndpointAccessCloudEventIngest } from "./contracts";
import type { AgenticEndpointAccessConfigClient } from "./config-client";
export declare const agenticEndpointAccessCloudHttpHeaders: {
    readonly signature: "x-handshake-agentic-endpoint-access-signature";
    readonly timestamp: "x-handshake-agentic-endpoint-access-timestamp";
    readonly keyId: "x-handshake-agentic-endpoint-access-key-id";
    readonly endpointId: "x-handshake-agentic-endpoint-access-endpoint-id";
    readonly tenantId: "x-handshake-agentic-endpoint-access-tenant-id";
    readonly organizationId: "x-handshake-agentic-endpoint-access-organization-id";
};
export declare const agenticEndpointAccessCloudHttpRoutes: {
    readonly configPull: "/agentic-endpoint-access/config/pull";
    readonly eventIngest: "/agentic-endpoint-access/events/ingest";
};
export type AgenticEndpointAccessCloudHttpRoutes = {
    readonly configPull?: string;
    readonly eventIngest?: string;
};
export type AgenticEndpointAccessCloudFetch = (input: string, init: RequestInit) => Promise<Response>;
export type AgenticEndpointAccessCloudHttpClientOptions = {
    readonly baseUrl: string;
    readonly endpointHmacSecret: string;
    readonly endpointId: string;
    readonly tenantId: string;
    readonly organizationId: string;
    readonly keyId?: string;
    readonly routes?: AgenticEndpointAccessCloudHttpRoutes;
    readonly fetch?: AgenticEndpointAccessCloudFetch;
    readonly now?: () => Date;
};
export type AgenticEndpointAccessCloudHttpClient = AgenticEndpointAccessConfigClient & AgenticEndpointAccessCloudEventIngest;
export declare function createAgenticEndpointAccessCloudHttpClient(options: AgenticEndpointAccessCloudHttpClientOptions): AgenticEndpointAccessCloudHttpClient;
