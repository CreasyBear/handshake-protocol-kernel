import { type AgenticEndpointAccessCapabilityEvaluation } from "../../protocol/areas/agentic-endpoint-access";
import type { ProtocolStore } from "../../protocol/store/port";
import { type AgenticEndpointAccessCapabilities, type AgenticEndpointAccessConfigSnapshot, type AgenticEndpointAccessConfigSyncProof } from "./contracts";
import type { AgenticEndpointAccessLocalStore } from "./local-store";
export type AgenticEndpointAccessConfigSyncInput = {
    readonly store: AgenticEndpointAccessLocalStore;
    readonly snapshot: AgenticEndpointAccessConfigSnapshot;
    readonly protocolStore?: ProtocolStore;
    readonly kernelVersion: string;
    readonly middlewareVersion: string;
    readonly nowIso?: string;
};
export type AgenticEndpointAccessConfigSyncResult = {
    readonly status: "ready";
    readonly syncProof: AgenticEndpointAccessConfigSyncProof;
    readonly reasonCodes: readonly string[];
} | {
    readonly status: "proof_gap" | "stale" | "unsupported" | "store_conflict";
    readonly syncProof: null;
    readonly reasonCodes: readonly string[];
};
export type AgenticEndpointAccessReadinessResult = {
    readonly status: "ready" | "proof_gap" | "stale" | "unsupported" | "fail_closed";
    readonly reasonCodes: readonly string[];
    readonly capabilityEvaluation: AgenticEndpointAccessCapabilityEvaluation | null;
    readonly syncProofRef: string | null;
};
export declare function syncAgenticEndpointAccessConfig(input: AgenticEndpointAccessConfigSyncInput): Promise<AgenticEndpointAccessConfigSyncResult>;
export declare function evaluateAgenticEndpointAccessMiddlewareReadiness(input: {
    readonly store: AgenticEndpointAccessLocalStore;
    readonly configRevision?: string;
    readonly kernelVersion?: string;
    readonly middlewareVersion?: string;
    readonly nowIso?: string;
    readonly requiredDelegationEvidenceKinds?: readonly string[];
    readonly requiredPolicyFeatures?: readonly string[];
    readonly requiredReadbackKinds?: readonly string[];
}): Promise<AgenticEndpointAccessReadinessResult>;
export declare function buildAgenticEndpointAccessCapabilitiesFromSnapshot(snapshotValue: AgenticEndpointAccessConfigSnapshot, input: {
    readonly kernelVersion: string;
    readonly middlewareVersion: string;
    readonly nowIso?: string;
}): AgenticEndpointAccessCapabilities;
