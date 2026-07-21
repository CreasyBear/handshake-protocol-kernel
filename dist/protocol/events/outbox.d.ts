import type { JsonValue } from "../foundation/schema-core";
import { type EventDescriptor } from "./chains";
import { type ContractStreamEvent } from "./schemas";
import { type AuthorityCommitIdentity, type AuthorityDigest, type AuthorityProjectionIdentity, type AuthorityProjectionIntent, type AuthorityProjectionKind, type AuthorityProjectionOutboxItem, type AuthorityProjectionOutboxStore, type AuthorityPointerIdentity, type AuthorityRecordWitness, type AuthoritySourceRecord, type AuthoritySourceScope, type AuthoritySourceStore } from "../store/authority-source";
import type { ProtocolStore, StoredProtocolRecord } from "../store/port";
export declare const PROJECTION_OUTBOX_DESCRIPTOR_VERSION: "authority-projection-outbox-descriptor-1";
export declare const PROJECTION_OUTBOX_STATE_VERSION: "authority-projection-outbox-state-1";
export declare const PROTOCOL_RECORD_PROJECTION_DESCRIPTOR_VERSION: "authority-projection-outbox-protocol-record-descriptor-1";
export declare const PROTOCOL_RECORD_PROJECTION_STATE_VERSION: "authority-projection-outbox-protocol-record-state-1";
export declare const PROTOCOL_RECORD_PROJECTION_DELIVERY_POLICY_VERSION: "authority-projection-outbox-protocol-record-delivery-policy-1";
export declare const PROTOCOL_RECORD_PROJECTION_ROUTE_VERSION: "authority-projection-outbox-protocol-record-route-1";
export declare const PROTOCOL_RECORD_PROJECTION_CLOCK_VERSION: "authority-projection-outbox-protocol-record-clock-1";
export declare const PROTOCOL_RECORD_PROJECTION_CLOCK_ADVANCE_RECEIPT_VERSION: "authority-projection-outbox-protocol-record-clock-advance-receipt-1";
export declare const PROTOCOL_RECORD_PROJECTION_CLAIM_RECEIPT_VERSION: "authority-projection-outbox-protocol-record-claim-receipt-1";
export declare const PROTOCOL_RECORD_PROJECTION_CLAIM_COMMAND_VERSION: "authority-projection-outbox-protocol-record-claim-command-1";
export declare const PROTOCOL_RECORD_PROJECTION_CONFLICT_EVIDENCE_VERSION: "authority-projection-outbox-protocol-record-conflict-evidence-1";
export declare const PROTOCOL_RECORD_PROJECTION_FAULT_EVIDENCE_VERSION: "authority-projection-outbox-protocol-record-fault-evidence-1";
export type ProjectionOutboxSourceCommit = Readonly<{
    identity: AuthorityCommitIdentity;
    requestDigest: AuthorityDigest;
}>;
export type ProjectionOutboxReference = Readonly<{
    scope: AuthoritySourceScope;
    sourceCommit: AuthorityCommitIdentity;
    projection: AuthorityProjectionIdentity;
}>;
export type ProjectionOutboxLease = Readonly<{
    leaseId: string;
    workerId: string;
    acquiredAtMs: number;
    expiresAtMs: number;
}>;
export type ProtocolRecordProjectionDeliveryPolicy = Readonly<{
    policyVersion: typeof PROTOCOL_RECORD_PROJECTION_DELIVERY_POLICY_VERSION;
    maxAttempts: number;
    maxLeaseTicks: number;
}>;
export type ProtocolRecordProjectionRoute = Readonly<{
    routeVersion: typeof PROTOCOL_RECORD_PROJECTION_ROUTE_VERSION;
    authoritySourceNamespace: string;
    destinationNamespace: string;
    configurationDigest: AuthorityDigest;
}>;
export type ProjectionOutboxStatus = "claimed" | "materialized" | "projection_conflict" | "acknowledged" | "poisoned" | "exhausted";
export type ProjectionOutboxState = Readonly<{
    stateVersion: typeof PROJECTION_OUTBOX_STATE_VERSION;
    projection: AuthorityProjectionIdentity;
    sourceCommit: AuthorityCommitIdentity;
    sourceRequestDigest: AuthorityDigest;
    sourceManifestDigest: AuthorityDigest;
    source: AuthorityProjectionIntent["source"];
    descriptorDigest: AuthorityDigest;
    attempt: number;
    status: ProjectionOutboxStatus;
    lease: ProjectionOutboxLease | null;
    materializedEvent: ContractStreamEvent | null;
    materializedEnvelopeDigest: AuthorityDigest | null;
    failureCode: string | null;
}>;
export type ProjectionOutboxHandle = Readonly<{
    item: AuthorityProjectionOutboxItem;
    stateRecord: AuthoritySourceRecord;
    state: ProjectionOutboxState;
}>;
export type ProtocolRecordProjectionDestinationObservation = Readonly<{
    kind: "exact_read_before_acknowledgement";
    envelopeDigest: AuthorityDigest;
}>;
export type ProtocolRecordProjectionClockState = Readonly<{
    clockVersion: typeof PROTOCOL_RECORD_PROJECTION_CLOCK_VERSION;
    route: ProtocolRecordProjectionRoute;
    tick: number;
}>;
export type ProtocolRecordProjectionClockWitness = Readonly<{
    record: AuthorityRecordWitness;
    tick: number;
}>;
export type ProtocolRecordProjectionLease = Readonly<{
    leaseId: string;
    workerId: string;
    fence: number;
    acquiredTick: number;
    expiresAtTickExclusive: number;
    clockWitness: ProtocolRecordProjectionClockWitness;
}>;
export type ProtocolRecordProjectionClaimReceipt = Readonly<{
    receiptVersion: string;
    commandVersion: string;
    projection: AuthorityProjectionIdentity;
    sourceCommit: AuthorityCommitIdentity;
    sourceRequestDigest: AuthorityDigest;
    sourceManifestDigest: AuthorityDigest;
    source: AuthorityProjectionIntent["source"];
    descriptorDigest: AuthorityDigest;
    route: ProtocolRecordProjectionRoute;
    commandId: string;
    workerId: string;
    lease: ProtocolRecordProjectionLease;
    claimedState: AuthorityRecordWitness;
}>;
export type ProtocolRecordProjectionClaimCommand = Readonly<{
    commandVersion: string;
    commandId: string;
}>;
export type ProtocolRecordProjectionConflictObservation = Readonly<{
    kind: "occupied";
    observedRecord: ProtocolRecordProjectionConflictObservedEnvelope;
    observedEnvelopeDigest: AuthorityDigest;
}> | Readonly<{
    kind: "invalid_envelope";
    observedRecord: null;
    observedEnvelopeDigest: null;
}> | Readonly<{
    kind: "absent_after_acknowledgement";
    observedRecord: null;
    observedEnvelopeDigest: null;
}>;
type ProtocolRecordProjectionConflictObservedEnvelope = Omit<StoredProtocolRecord<JsonValue>, "objectType"> & Readonly<{
    objectType: string;
}>;
type ProtocolRecordProjectionConflictRouteBinding = Omit<ProtocolRecordProjectionRoute, "routeVersion"> & Readonly<{
    routeVersion: string;
}>;
export type ProtocolRecordProjectionConflictEvidence = Readonly<{
    evidenceVersion: typeof PROTOCOL_RECORD_PROJECTION_CONFLICT_EVIDENCE_VERSION;
    projection: AuthorityProjectionIdentity;
    sourceCommit: AuthorityCommitIdentity;
    sourceRequestDigest: AuthorityDigest;
    sourceManifestDigest: AuthorityDigest;
    source: AuthorityProjectionIntent["source"];
    descriptorDigest: AuthorityDigest;
    route: ProtocolRecordProjectionConflictRouteBinding;
    destination: Readonly<{
        objectType: string;
        objectId: string;
    }>;
    desiredEnvelopeDigest: AuthorityDigest;
    observationClockPointer: AuthorityPointerIdentity;
    observationClock: ProtocolRecordProjectionClockWitness;
    observation: ProtocolRecordProjectionConflictObservation;
    reason: string;
}>;
export type ProtocolRecordProjectionConflictLatch = Readonly<{
    evidenceRecord: AuthoritySourceRecord;
    evidence: ProtocolRecordProjectionConflictEvidence;
}>;
export type ProtocolRecordProjectionFaultEvidence = Readonly<{
    evidenceVersion: typeof PROTOCOL_RECORD_PROJECTION_FAULT_EVIDENCE_VERSION;
    projection: AuthorityProjectionIdentity;
    sourceCommit: AuthorityCommitIdentity;
    sourceRequestDigest: AuthorityDigest;
    sourceManifestDigest: AuthorityDigest;
    source: AuthorityProjectionIntent["source"];
    descriptorDigest: AuthorityDigest;
    faultKind: "descriptor_invalid";
    reason: string;
}>;
export type ProtocolRecordProjectionFaultLatch = Readonly<{
    evidenceRecord: AuthoritySourceRecord;
    evidence: ProtocolRecordProjectionFaultEvidence;
}>;
export type ProtocolRecordProjectionOutboxState = Readonly<{
    stateVersion: typeof PROTOCOL_RECORD_PROJECTION_STATE_VERSION;
    projection: AuthorityProjectionIdentity;
    sourceCommit: AuthorityCommitIdentity;
    sourceRequestDigest: AuthorityDigest;
    sourceManifestDigest: AuthorityDigest;
    source: AuthorityProjectionIntent["source"];
    descriptorDigest: AuthorityDigest;
    deliveryPolicy: ProtocolRecordProjectionDeliveryPolicy;
    route: ProtocolRecordProjectionRoute;
    attempt: number;
    status: ProjectionOutboxStatus;
    lease: ProtocolRecordProjectionLease | null;
    materializedRecord: StoredProtocolRecord<JsonValue> | null;
    materializedEnvelopeDigest: AuthorityDigest | null;
    destinationObservation: ProtocolRecordProjectionDestinationObservation | null;
    failureCode: string | null;
}>;
export type ProtocolRecordProjectionOutboxHandle = Readonly<{
    item: AuthorityProjectionOutboxItem;
    stateRecord: AuthoritySourceRecord;
    state: ProtocolRecordProjectionOutboxState;
}>;
export type ProjectionEventStore = Pick<ProtocolStore, "getStreamTail" | "getStreamEvent" | "getRecord" | "commitProtocolRecords">;
export type ProtocolRecordProjectionStore = Pick<ProtocolStore, "getRecord" | "commitProtocolRecords">;
declare const protocolRecordProjectionRuntimeBrand: unique symbol;
export type ProtocolRecordProjectionRuntime = Readonly<{
    readonly [protocolRecordProjectionRuntimeBrand]: "ProtocolRecordProjectionRuntime";
}>;
/**
 * Trusted host-composition mint. This module is not a package export, and neither
 * this mint nor the stores it captures may enter generated or model-controlled code.
 *
 * `currentClaimCommand` is a durable, versioned host token, not a random lease
 * allocator. The host persists one fresh `{commandVersion, commandId}` before
 * the logical claim call, returns that same token across response loss,
 * process restart, and rolling replacement, and rotates it only after durably
 * recording a definitive claim response. Reusing an old command cannot reclaim
 * an expired lease; rotating before response certainty forfeits exact replay
 * recovery.
 *
 * `workerId` is the durable logical lease-holder namespace for that command,
 * not an ephemeral process UUID. Exact replay identity is the tuple
 * `(workerId, currentClaimCommand)`. A failover that cannot recover the same
 * tuple cannot attach to the old claim; it must wait for lease expiry and
 * reclaim under a fresh tuple.
 */
export declare function createTrustedProtocolRecordProjectionRuntime(input: {
    route: ProtocolRecordProjectionRoute;
    authorityStore: AuthorityProjectionOutboxStore;
    recordStore: ProtocolRecordProjectionStore;
    workerId: string;
    leaseTicks: number;
    currentClaimCommand: () => ProtocolRecordProjectionClaimCommand;
}): ProtocolRecordProjectionRuntime;
export type ClaimProjectionOutboxResult = Readonly<{
    status: "claimed";
    handle: ProjectionOutboxHandle;
}> | Readonly<{
    status: "busy" | "contended";
    current: AuthorityRecordWitness | null;
}> | Readonly<{
    status: "terminal";
    handle: ProjectionOutboxHandle;
}> | Readonly<{
    status: "absent";
}> | Readonly<{
    status: "unavailable";
    reason: string;
}>;
export type MaterializeProjectionOutboxResult = Readonly<{
    status: "materialized";
    handle: ProjectionOutboxHandle;
}> | Readonly<{
    status: "poisoned";
    handle: ProjectionOutboxHandle;
}> | Readonly<{
    status: "stale" | "lease_expired" | "unavailable";
    reason: string;
}>;
export type AppendProjectionOutboxResult = Readonly<{
    status: "appended" | "exact_duplicate";
    handle: ProjectionOutboxHandle;
}> | Readonly<{
    status: "projection_conflict";
    handle: ProjectionOutboxHandle;
}> | Readonly<{
    status: "stale" | "lease_expired" | "ambiguous" | "unavailable";
    reason: string;
}>;
export type AcknowledgeProjectionOutboxResult = Readonly<{
    status: "acknowledged" | "already_acknowledged";
    handle: ProjectionOutboxHandle;
}> | Readonly<{
    status: "stale" | "lease_expired" | "event_unconfirmed" | "unavailable";
    reason: string;
}>;
export type ClaimProtocolRecordProjectionOutboxResult = Readonly<{
    status: "claimed";
    handle: ProtocolRecordProjectionOutboxHandle;
}> | Readonly<{
    status: "busy" | "contended";
    current: AuthorityRecordWitness | null;
}> | Readonly<{
    status: "terminal";
    handle: ProtocolRecordProjectionOutboxHandle;
}> | Readonly<{
    status: "terminal_fault";
    fault: ProtocolRecordProjectionFaultLatch;
}> | Readonly<{
    status: "terminal_conflict";
    conflict: ProtocolRecordProjectionConflictLatch;
    handle: ProtocolRecordProjectionOutboxHandle | null;
}> | Readonly<{
    status: "absent";
}> | Readonly<{
    status: "unavailable";
    reason: string;
}>;
export type MaterializeProtocolRecordProjectionOutboxResult = Readonly<{
    status: "materialized";
    handle: ProtocolRecordProjectionOutboxHandle;
}> | Readonly<{
    status: "poisoned";
    handle: ProtocolRecordProjectionOutboxHandle;
}> | Readonly<{
    status: "terminal_conflict";
    conflict: ProtocolRecordProjectionConflictLatch;
    handle: ProtocolRecordProjectionOutboxHandle | null;
}> | Readonly<{
    status: "terminal_fault";
    fault: ProtocolRecordProjectionFaultLatch;
}> | Readonly<{
    status: "stale" | "lease_expired" | "unavailable";
    reason: string;
}>;
export type InsertProtocolRecordProjectionOutboxResult = Readonly<{
    status: "exact_observed_before_commit" | "exact_observed_after_acknowledged_commit" | "exact_observed_after_unconfirmed_commit";
    handle: ProtocolRecordProjectionOutboxHandle;
}> | Readonly<{
    status: "projection_conflict";
    conflict: ProtocolRecordProjectionConflictLatch;
    handle: ProtocolRecordProjectionOutboxHandle | null;
}> | Readonly<{
    status: "terminal_fault";
    fault: ProtocolRecordProjectionFaultLatch;
}> | Readonly<{
    status: "stale" | "lease_expired" | "ambiguous" | "unavailable";
    reason: string;
}>;
export type AcknowledgeProtocolRecordProjectionOutboxResult = Readonly<{
    status: "acknowledged" | "already_acknowledged";
    handle: ProtocolRecordProjectionOutboxHandle;
}> | Readonly<{
    status: "terminal_conflict";
    conflict: ProtocolRecordProjectionConflictLatch;
    handle: ProtocolRecordProjectionOutboxHandle | null;
}> | Readonly<{
    status: "terminal_fault";
    fault: ProtocolRecordProjectionFaultLatch;
}> | Readonly<{
    status: "stale" | "lease_expired" | "record_unconfirmed" | "unavailable";
    reason: string;
}>;
export declare function buildProjectionOutboxIdentity(input: {
    scope: AuthoritySourceScope;
    sourceCommit: ProjectionOutboxSourceCommit;
    source: AuthorityProjectionIntent["source"];
    projectionKind: AuthorityProjectionKind;
    descriptorBinding: JsonValue;
}): Promise<AuthorityProjectionIdentity>;
export declare function buildContractStreamProjectionIntents(input: {
    scope: AuthoritySourceScope;
    sourceCommit: ProjectionOutboxSourceCommit;
    source: AuthorityProjectionIntent["source"];
    descriptor: EventDescriptor;
}): Promise<AuthorityProjectionIntent[]>;
export declare function buildProtocolRecordProjectionIntent(input: {
    scope: AuthoritySourceScope;
    sourceCommit: ProjectionOutboxSourceCommit;
    source: AuthorityProjectionIntent["source"];
    deliveryPolicy: ProtocolRecordProjectionDeliveryPolicy;
    route: ProtocolRecordProjectionRoute;
    record: StoredProtocolRecord;
}): Promise<AuthorityProjectionIntent>;
export declare function projectionOutboxPointerIdentity(projection: AuthorityProjectionIdentity): Readonly<{
    pointerKind: import("../store/authority-record-read").AuthorityPointerKind;
    localId: string;
}>;
export declare function protocolRecordProjectionTerminalPointerIdentity(projection: AuthorityProjectionIdentity): AuthorityPointerIdentity;
export declare function protocolRecordProjectionClockPointerIdentity(route: ProtocolRecordProjectionRoute): Promise<AuthorityPointerIdentity>;
export type ProtocolRecordProjectionClockMutationResult = Readonly<{
    status: "initialized" | "advanced" | "already_initialized";
    clockStateRecord: AuthoritySourceRecord;
    state: ProtocolRecordProjectionClockState;
}> | Readonly<{
    status: "already_advanced";
    advanceReceiptRecord: AuthoritySourceRecord;
    clockWitness: ProtocolRecordProjectionClockWitness;
    state: ProtocolRecordProjectionClockState;
}> | Readonly<{
    status: "contended";
    current: AuthorityRecordWitness | null;
}> | Readonly<{
    status: "unavailable";
    reason: string;
}>;
export declare function readProtocolRecordProjectionClockState(input: {
    store: AuthoritySourceStore;
    scope: AuthoritySourceScope;
    route: ProtocolRecordProjectionRoute;
}): Promise<ProtocolRecordProjectionClockReadResult>;
/**
 * Trusted route provisioning. A logical clock always starts at tick zero; no
 * caller-provided wall-clock epoch can be laundered into lease authority.
 */
export declare function initializeProtocolRecordProjectionClock(input: {
    store: AuthoritySourceStore;
    scope: AuthoritySourceScope;
    route: ProtocolRecordProjectionRoute;
}): Promise<ProtocolRecordProjectionClockMutationResult>;
/**
 * Trusted scheduler tick. One call advances exactly one durable logical tick.
 * Wall time is deliberately absent from this mutation.
 */
export declare function advanceProtocolRecordProjectionClock(input: {
    store: AuthoritySourceStore;
    scope: AuthoritySourceScope;
    route: ProtocolRecordProjectionRoute;
    advanceId: string;
}): Promise<ProtocolRecordProjectionClockMutationResult>;
export declare function readProjectionOutboxItem(store: AuthorityProjectionOutboxStore, inputReference: ProjectionOutboxReference): Promise<Readonly<{
    status: "available";
    item: AuthorityProjectionOutboxItem;
}> | Readonly<{
    status: "absent";
}> | Readonly<{
    status: "unavailable";
    reason: string;
}>>;
export declare function claimProjectionOutboxItem(input: {
    store: AuthorityProjectionOutboxStore;
    reference: ProjectionOutboxReference;
    lease: ProjectionOutboxLease;
    maxAttempts: number;
}): Promise<ClaimProjectionOutboxResult>;
type ClaimProtocolRecordProjectionOutboxCommon = Readonly<{
    runtime: ProtocolRecordProjectionRuntime;
    reference: ProjectionOutboxReference;
}>;
export declare function claimProtocolRecordProjectionOutboxItem(input: ClaimProtocolRecordProjectionOutboxCommon): Promise<ClaimProtocolRecordProjectionOutboxResult>;
export declare function materializeProtocolRecordProjectionOutboxItem(input: {
    runtime: ProtocolRecordProjectionRuntime;
    handle: ProtocolRecordProjectionOutboxHandle;
}): Promise<MaterializeProtocolRecordProjectionOutboxResult>;
export declare function materializeProjectionOutboxItem(input: {
    authorityStore: AuthorityProjectionOutboxStore;
    eventStore: ProjectionEventStore;
    handle: ProjectionOutboxHandle;
    observedAtMs: number;
}): Promise<MaterializeProjectionOutboxResult>;
export declare function appendProjectionOutboxItem(input: {
    authorityStore: AuthorityProjectionOutboxStore;
    eventStore: ProjectionEventStore;
    handle: ProjectionOutboxHandle;
    observedAtMs: number;
}): Promise<AppendProjectionOutboxResult>;
export declare function acknowledgeProjectionOutboxItem(input: {
    authorityStore: AuthorityProjectionOutboxStore;
    eventStore: ProjectionEventStore;
    handle: ProjectionOutboxHandle;
    observedAtMs: number;
}): Promise<AcknowledgeProjectionOutboxResult>;
export declare function insertProtocolRecordProjectionOutboxItem(input: {
    runtime: ProtocolRecordProjectionRuntime;
    handle: ProtocolRecordProjectionOutboxHandle;
}): Promise<InsertProtocolRecordProjectionOutboxResult>;
export declare function acknowledgeProtocolRecordProjectionOutboxItem(input: {
    runtime: ProtocolRecordProjectionRuntime;
    handle: ProtocolRecordProjectionOutboxHandle;
}): Promise<AcknowledgeProtocolRecordProjectionOutboxResult>;
export type ProtocolRecordProjectionClockRead = Readonly<{
    stateRecord: AuthoritySourceRecord;
    state: ProtocolRecordProjectionClockState;
}>;
export type ProtocolRecordProjectionClockReadResult = Readonly<{
    status: "absent";
}> | Readonly<{
    status: "current";
    stateRecord: AuthoritySourceRecord;
    state: ProtocolRecordProjectionClockState;
}> | Readonly<{
    status: "unavailable";
    reason: string;
}>;
export {};
