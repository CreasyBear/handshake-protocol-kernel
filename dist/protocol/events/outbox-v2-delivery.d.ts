import { type AuthorityCommitIdentity, type AuthorityDigest, type AuthorityPointerIdentity, type AuthorityProjectionIntent, type AuthorityProjectionOutboxStore, type AuthorityRecordWitness, type AuthoritySourceRecord, type AuthoritySourceScope } from "../store/authority-source";
import type { ProtocolStore } from "../store/port";
import { type ExactProtocolRecordProjectionDescriptorV2, type ExactProtocolRecordProjectionRouteV2 } from "./outbox-v2-intent";
export declare const EXACT_PROTOCOL_RECORD_PROJECTION_STATE_VERSION_V2: "authority-projection-outbox-protocol-record-state-2";
declare const EXACT_PROTOCOL_RECORD_PROJECTION_TERMINAL_CONFLICT_VERSION_V2: "authority-projection-outbox-protocol-record-terminal-conflict-2";
export type ExactProtocolRecordProjectionReferenceV2 = Readonly<{
    scope: AuthoritySourceScope;
    sourceCommit: AuthorityCommitIdentity;
    projection: AuthorityProjectionIntent["projection"];
}>;
export type ExactProtocolRecordProjectionStateV2 = Readonly<{
    stateVersion: typeof EXACT_PROTOCOL_RECORD_PROJECTION_STATE_VERSION_V2;
    projection: AuthorityProjectionIntent["projection"];
    sourceCommit: AuthorityCommitIdentity;
    sourceRequestDigest: AuthorityDigest;
    sourceManifestDigest: AuthorityDigest;
    source: AuthorityProjectionIntent["source"];
    descriptorDigest: AuthorityDigest;
    route: ExactProtocolRecordProjectionRouteV2;
    status: "materialization_claimed" | "acknowledged";
    destination: ExactProtocolRecordProjectionDescriptorV2["destination"];
    materializedEnvelopeDigest: AuthorityDigest;
    destinationObservation: null | Readonly<{
        kind: "exact_read_before_acknowledgement";
        envelopeDigest: AuthorityDigest;
    }>;
}>;
export type ExactProtocolRecordProjectionHandleV2 = Readonly<{
    stateRecord: AuthoritySourceRecord;
    state: ExactProtocolRecordProjectionStateV2;
}>;
export type ExactProtocolRecordProjectionTerminalConflictStateV2 = Readonly<{
    conflictVersion: typeof EXACT_PROTOCOL_RECORD_PROJECTION_TERMINAL_CONFLICT_VERSION_V2;
    projection: AuthorityProjectionIntent["projection"];
    sourceCommit: AuthorityCommitIdentity;
    sourceRequestDigest: AuthorityDigest;
    sourceManifestDigest: AuthorityDigest;
    source: AuthorityProjectionIntent["source"];
    descriptorDigest: AuthorityDigest;
    route: ExactProtocolRecordProjectionRouteV2;
    destination: ExactProtocolRecordProjectionDescriptorV2["destination"];
    desiredEnvelopeDigest: AuthorityDigest;
    delivery: Readonly<{
        status: "materialization_claimed" | "acknowledged";
        witness: AuthorityRecordWitness;
    }>;
    phase: "before_acknowledgement" | "after_acknowledgement";
    reason: "destination_envelope_conflict" | "destination_absent_after_acknowledgement";
    observation: Readonly<{
        kind: "occupied_by_different_envelope";
        envelopeDigest: AuthorityDigest;
    }> | Readonly<{
        kind: "absent_after_acknowledgement";
        envelopeDigest: null;
    }>;
}>;
export type ExactProtocolRecordProjectionTerminalConflictHandleV2 = Readonly<{
    stateRecord: AuthoritySourceRecord;
    state: ExactProtocolRecordProjectionTerminalConflictStateV2;
}>;
declare const exactProtocolRecordProjectionRuntimeV2Brand: unique symbol;
export type ExactProtocolRecordProjectionRuntimeV2 = Readonly<{
    readonly [exactProtocolRecordProjectionRuntimeV2Brand]: "ExactProtocolRecordProjectionRuntimeV2";
}>;
export type ExactProtocolRecordProjectionDeliveryResultV2 = Readonly<{
    status: "acknowledged";
    handle: ExactProtocolRecordProjectionHandleV2;
}> | Readonly<{
    status: "terminal_conflict";
    handle: ExactProtocolRecordProjectionTerminalConflictHandleV2;
}> | Readonly<{
    status: "unavailable";
    reason: string;
}>;
type ExactProjectionAuthorityStoreV2 = Pick<AuthorityProjectionOutboxStore, "readAuthorityProjectionOutboxItem" | "readAuthorityCurrentRecords" | "commitAuthorityMutation">;
type ExactProjectionRecordStoreV2 = Pick<ProtocolStore, "getRecord" | "putRecordIfAbsentOrSame">;
export declare function createTrustedExactProtocolRecordProjectionRuntimeV2(input: {
    route: ExactProtocolRecordProjectionRouteV2;
    authorityStore: ExactProjectionAuthorityStoreV2;
    recordStore: ExactProjectionRecordStoreV2;
}): ExactProtocolRecordProjectionRuntimeV2;
export declare function deliverExactProtocolRecordProjectionV2(input: {
    runtime: ExactProtocolRecordProjectionRuntimeV2;
    reference: ExactProtocolRecordProjectionReferenceV2;
}): Promise<ExactProtocolRecordProjectionDeliveryResultV2>;
export declare function exactProtocolRecordProjectionDeliveryPointerIdentityV2(projection: AuthorityProjectionIntent["projection"]): AuthorityPointerIdentity;
export declare function exactProtocolRecordProjectionTerminalPointerIdentityV2(projection: AuthorityProjectionIntent["projection"]): AuthorityPointerIdentity;
export {};
