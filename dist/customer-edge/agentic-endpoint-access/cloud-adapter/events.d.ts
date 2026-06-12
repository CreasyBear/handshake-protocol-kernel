import { type AgenticEndpointAccessCloudEventEnvelope, type AgenticEndpointAccessCloudEventIngest, type AgenticEndpointAccessCloudIngestResult } from "./contracts";
import { type AgenticEndpointAccessForwardedEvent } from "../contracts";
import type { AgenticEndpointAccessLocalStore } from "../local-store";
export declare function buildAgenticEndpointAccessCloudEventEnvelope(eventValue: AgenticEndpointAccessForwardedEvent): Promise<AgenticEndpointAccessCloudEventEnvelope>;
export declare function forwardAgenticEndpointAccessCloudEvent(input: {
    readonly store: AgenticEndpointAccessLocalStore;
    readonly adapter: AgenticEndpointAccessCloudEventIngest;
    readonly event: AgenticEndpointAccessForwardedEvent;
}): Promise<AgenticEndpointAccessCloudIngestResult>;
