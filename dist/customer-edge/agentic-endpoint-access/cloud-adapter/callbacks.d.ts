import { type AgenticEndpointAccessCallbackDispatchResult } from "./contracts";
import { type AgenticEndpointAccessHmacBinding } from "./hmac";
import type { AgenticEndpointAccessLocalStore } from "../local-store";
export declare function dispatchAgenticEndpointAccessCallback(input: {
    readonly store: AgenticEndpointAccessLocalStore;
    readonly payload?: unknown;
    readonly rawBody: string | Uint8Array;
    readonly signature: string;
    readonly timestamp: string;
    readonly callbackSecret: string;
    readonly binding: AgenticEndpointAccessHmacBinding;
    readonly nowMs?: number;
}): Promise<AgenticEndpointAccessCallbackDispatchResult>;
