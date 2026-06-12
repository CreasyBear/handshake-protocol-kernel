import type { AgenticEndpointAccessConfigSnapshot, AgenticEndpointAccessConfigSyncProof, AgenticEndpointAccessForwardedEvent, AgenticEndpointAccessProtectionOutcome } from "./contracts";
export type AgenticEndpointAccessLocalCommitStatus = "committed" | "duplicate" | "conflict" | "proof_gap_required";
export type AgenticEndpointAccessCallbackRecord = {
    readonly deliveryId: string;
    readonly eventType: string;
    readonly receivedAt: string;
    readonly controlAction: "none" | "invalidate_config" | "suspend_agent" | "unsuspend_agent" | "local_follow_up_required";
    readonly authorityCreated: false;
};
export type AgenticEndpointAccessUsageRecord = {
    readonly usageEventId: string;
    readonly idempotencyKey: string;
    readonly leaseRef: string;
    readonly usageKind: "request" | "token" | "tool_call" | "cost_unit";
    readonly amount: number;
    readonly recordedAt: string;
};
export type AgenticEndpointAccessForwardedEventRecord = {
    readonly event: AgenticEndpointAccessForwardedEvent;
    readonly status: "pending" | "sent" | "failed";
};
export type PutConfigSnapshotResult = {
    readonly status: AgenticEndpointAccessLocalCommitStatus;
    readonly snapshot: AgenticEndpointAccessConfigSnapshot | null;
};
export type PutSyncProofResult = {
    readonly status: AgenticEndpointAccessLocalCommitStatus;
    readonly syncProof: AgenticEndpointAccessConfigSyncProof | null;
};
export interface AgenticEndpointAccessLocalStore {
    putConfigSnapshot(snapshot: AgenticEndpointAccessConfigSnapshot): Promise<PutConfigSnapshotResult>;
    getConfigSnapshot(configRevision: string): Promise<AgenticEndpointAccessConfigSnapshot | null>;
    getCurrentConfigSnapshot(): Promise<AgenticEndpointAccessConfigSnapshot | null>;
    putConfigSyncProof(syncProof: AgenticEndpointAccessConfigSyncProof): Promise<PutSyncProofResult>;
    getConfigSyncProof(configRevision: string): Promise<AgenticEndpointAccessConfigSyncProof | null>;
    setReadinessState(state: AgenticEndpointAccessReadinessState): Promise<void>;
    getReadinessState(): Promise<AgenticEndpointAccessReadinessState>;
    putProtectionOutcome(outcome: AgenticEndpointAccessProtectionOutcome): Promise<AgenticEndpointAccessLocalCommitStatus>;
    putProtectionOutcomeWithForwardedEvent(outcome: AgenticEndpointAccessProtectionOutcome, event: AgenticEndpointAccessForwardedEvent): Promise<AgenticEndpointAccessLocalCommitStatus>;
    getProtectionOutcome(idempotencyKey: string): Promise<AgenticEndpointAccessProtectionOutcome | null>;
    recordUsage(record: AgenticEndpointAccessUsageRecord): Promise<AgenticEndpointAccessLocalCommitStatus>;
    listUsageRecords(): Promise<AgenticEndpointAccessUsageRecord[]>;
    enqueueForwardedEvent(event: AgenticEndpointAccessForwardedEvent): Promise<AgenticEndpointAccessLocalCommitStatus>;
    markForwardedEvent(eventId: string, status: "pending" | "sent" | "failed"): Promise<void>;
    listForwardedEvents(): Promise<AgenticEndpointAccessForwardedEvent[]>;
    listForwardedEventRecords(): Promise<AgenticEndpointAccessForwardedEventRecord[]>;
    recordCallback(record: AgenticEndpointAccessCallbackRecord): Promise<AgenticEndpointAccessLocalCommitStatus>;
    getCallback(deliveryId: string): Promise<AgenticEndpointAccessCallbackRecord | null>;
}
export type AgenticEndpointAccessReadinessState = {
    readonly status: "unregistered" | "registered" | "config_pulled" | "kernel_synced" | "ready" | "fail_closed" | "quarantined" | "revoked";
    readonly configRevision: string | null;
    readonly syncProofRef: string | null;
    readonly reasonCodes: readonly string[];
    readonly updatedAt: string;
};
export declare class InMemoryAgenticEndpointAccessLocalStore implements AgenticEndpointAccessLocalStore {
    private snapshots;
    private syncProofs;
    private outcomes;
    private usage;
    private outbox;
    private callbacks;
    private currentConfigRevision;
    private readiness;
    putConfigSnapshot(snapshot: AgenticEndpointAccessConfigSnapshot): Promise<PutConfigSnapshotResult>;
    getConfigSnapshot(configRevision: string): Promise<AgenticEndpointAccessConfigSnapshot | null>;
    getCurrentConfigSnapshot(): Promise<AgenticEndpointAccessConfigSnapshot | null>;
    putConfigSyncProof(syncProof: AgenticEndpointAccessConfigSyncProof): Promise<PutSyncProofResult>;
    getConfigSyncProof(configRevision: string): Promise<AgenticEndpointAccessConfigSyncProof | null>;
    setReadinessState(state: AgenticEndpointAccessReadinessState): Promise<void>;
    getReadinessState(): Promise<AgenticEndpointAccessReadinessState>;
    putProtectionOutcome(outcome: AgenticEndpointAccessProtectionOutcome): Promise<AgenticEndpointAccessLocalCommitStatus>;
    putProtectionOutcomeWithForwardedEvent(outcome: AgenticEndpointAccessProtectionOutcome, event: AgenticEndpointAccessForwardedEvent): Promise<AgenticEndpointAccessLocalCommitStatus>;
    getProtectionOutcome(idempotencyKey: string): Promise<AgenticEndpointAccessProtectionOutcome | null>;
    recordUsage(record: AgenticEndpointAccessUsageRecord): Promise<AgenticEndpointAccessLocalCommitStatus>;
    listUsageRecords(): Promise<AgenticEndpointAccessUsageRecord[]>;
    enqueueForwardedEvent(event: AgenticEndpointAccessForwardedEvent): Promise<AgenticEndpointAccessLocalCommitStatus>;
    markForwardedEvent(eventId: string, status: "pending" | "sent" | "failed"): Promise<void>;
    listForwardedEvents(): Promise<AgenticEndpointAccessForwardedEvent[]>;
    listForwardedEventRecords(): Promise<AgenticEndpointAccessForwardedEventRecord[]>;
    recordCallback(record: AgenticEndpointAccessCallbackRecord): Promise<AgenticEndpointAccessLocalCommitStatus>;
    getCallback(deliveryId: string): Promise<AgenticEndpointAccessCallbackRecord | null>;
}
