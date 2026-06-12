import { type AgenticEndpointAccessUsageEvent } from "../contracts";
import type { AgenticEndpointAccessKernelClient } from "../kernel-client";
import type { AgenticEndpointAccessLocalStore } from "../local-store";
export type AgenticEndpointAccessMiddlewareUsageResult = {
    readonly status: "recorded";
    readonly usageEvent: AgenticEndpointAccessUsageEvent;
    readonly reasonCode: null;
} | {
    readonly status: "refused" | "exhausted" | "proof_gap" | "store_conflict";
    readonly usageEvent: null;
    readonly reasonCode: string;
    readonly refusalRef: string | null;
    readonly proofGapRef: string | null;
};
export declare function recordAgenticEndpointAccessMiddlewareUsage(input: {
    readonly store: AgenticEndpointAccessLocalStore;
    readonly kernelClient: AgenticEndpointAccessKernelClient;
    readonly leaseRef: string;
    readonly idempotencyKey: string;
    readonly usageKind: "request" | "token" | "tool_call" | "cost_unit";
    readonly amount: number;
    readonly occurredAt?: string | undefined;
}): Promise<AgenticEndpointAccessMiddlewareUsageResult>;
