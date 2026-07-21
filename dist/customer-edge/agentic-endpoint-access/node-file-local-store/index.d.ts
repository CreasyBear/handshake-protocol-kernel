import { z } from "zod";
import { type AgenticEndpointAccessConfigSnapshot, type AgenticEndpointAccessConfigSyncProof, type AgenticEndpointAccessForwardedEvent, type AgenticEndpointAccessProtectionOutcome } from "../contracts";
import type { AgenticEndpointAccessCallbackRecord, AgenticEndpointAccessForwardedEventRecord, AgenticEndpointAccessLocalCommitStatus, AgenticEndpointAccessLocalStore, AgenticEndpointAccessReadinessState, AgenticEndpointAccessUsageRecord, PutConfigSnapshotResult, PutSyncProofResult } from "../local-store";
export declare const nodeFileAgenticEndpointAccessLocalStorePostureSchemaVersion: "handshake.agentic-endpoint-access.node-file-store-posture.v0.3.0";
export declare const NodeFileAgenticEndpointAccessLocalStorePostureSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.node-file-store-posture.v0.3.0">;
    storeKind: z.ZodLiteral<"node_file_reference">;
    deploymentPosture: z.ZodLiteral<"single_process_reference">;
    restartDurable: z.ZodLiteral<true>;
    localReplayBlockingAfterRestart: z.ZodLiteral<true>;
    multiProcessSafe: z.ZodLiteral<false>;
    crossProcessLocking: z.ZodLiteral<false>;
    compareAndSwapWrites: z.ZodLiteral<false>;
    transactionalAcrossProcesses: z.ZodLiteral<false>;
    productionMultiProcessEligible: z.ZodLiteral<false>;
    requiredProductionCapabilities: z.ZodArray<z.ZodEnum<{
        transactional_write_boundary: "transactional_write_boundary";
        cross_process_mutual_exclusion_or_cas: "cross_process_mutual_exclusion_or_cas";
        atomic_outcome_and_outbox_commit: "atomic_outcome_and_outbox_commit";
        conflict_detection_for_usage_outcome_outbox_callback: "conflict_detection_for_usage_outcome_outbox_callback";
        durable_readiness_and_config_sync: "durable_readiness_and_config_sync";
        bounded_replay_idempotency: "bounded_replay_idempotency";
    }>>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type NodeFileAgenticEndpointAccessLocalStorePosture = z.infer<typeof NodeFileAgenticEndpointAccessLocalStorePostureSchema>;
export declare const nodeFileAgenticEndpointAccessLocalStorePosture: {
    schemaVersion: "handshake.agentic-endpoint-access.node-file-store-posture.v0.3.0";
    storeKind: "node_file_reference";
    deploymentPosture: "single_process_reference";
    restartDurable: true;
    localReplayBlockingAfterRestart: true;
    multiProcessSafe: false;
    crossProcessLocking: false;
    compareAndSwapWrites: false;
    transactionalAcrossProcesses: false;
    productionMultiProcessEligible: false;
    requiredProductionCapabilities: ("transactional_write_boundary" | "cross_process_mutual_exclusion_or_cas" | "atomic_outcome_and_outbox_commit" | "conflict_detection_for_usage_outcome_outbox_callback" | "durable_readiness_and_config_sync" | "bounded_replay_idempotency")[];
    nonClaims: string[];
};
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
