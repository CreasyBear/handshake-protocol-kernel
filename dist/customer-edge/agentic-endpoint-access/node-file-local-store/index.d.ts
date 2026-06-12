import { type AgenticEndpointAccessConfigSnapshot, type AgenticEndpointAccessConfigSyncProof, type AgenticEndpointAccessForwardedEvent, type AgenticEndpointAccessProtectionOutcome } from "../contracts";
import type { AgenticEndpointAccessCallbackRecord, AgenticEndpointAccessForwardedEventRecord, AgenticEndpointAccessLocalCommitStatus, AgenticEndpointAccessLocalStore, AgenticEndpointAccessReadinessState, AgenticEndpointAccessUsageRecord, PutConfigSnapshotResult, PutSyncProofResult } from "../local-store";
export declare class NodeFileAgenticEndpointAccessLocalStore implements AgenticEndpointAccessLocalStore {
    private readonly filePath;
    constructor(input: {
        readonly filePath: string;
    });
    putConfigSnapshot(snapshot: AgenticEndpointAccessConfigSnapshot): Promise<PutConfigSnapshotResult>;
    getConfigSnapshot(configRevision: string): Promise<AgenticEndpointAccessConfigSnapshot | null>;
    getCurrentConfigSnapshot(): Promise<AgenticEndpointAccessConfigSnapshot | null>;
    putConfigSyncProof(syncProof: AgenticEndpointAccessConfigSyncProof): Promise<PutSyncProofResult>;
    getConfigSyncProof(configRevision: string): Promise<AgenticEndpointAccessConfigSyncProof | null>;
    setReadinessState(readiness: AgenticEndpointAccessReadinessState): Promise<void>;
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
    private readState;
    private writeState;
}
