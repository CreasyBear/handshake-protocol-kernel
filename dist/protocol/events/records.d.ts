import type { ContractStreamEvent } from "./schemas";
import { type EventDescriptor } from "./chains";
import type { ProtocolObjectType, ProtocolRecord } from "../areas/object-registry/schemas";
import { type TransitionRequestContextDraft } from "../context/request-contexts";
import type { GreenlightIssuanceClaim, IdempotencyLedgerIndexEntry, IsolationStateIndexEntry, ProtectedSurfaceOperationClaimIndexEntry, ProtectedPathPostureIndexEntry, ProtocolStore, ReceiptMutationAttemptIndexEntry, RecoveryTerminalClaim, StoredProtocolRecord } from "../store/port";
export type CommitRecordsOptions = {
    recordConflictMode?: "replace" | "absent_or_same";
    greenlightIssuanceClaims?: GreenlightIssuanceClaim[];
    idempotencyLedgerReservationEntries?: IdempotencyLedgerIndexEntry[];
    idempotencyLedgerIndexEntries?: IdempotencyLedgerIndexEntry[];
    recoveryTerminalClaims?: RecoveryTerminalClaim[];
    protectedPathPostureIndexEntries?: ProtectedPathPostureIndexEntry[];
    isolationStateIndexEntries?: IsolationStateIndexEntry[];
    protectedSurfaceOperationClaimIndexEntries?: ProtectedSurfaceOperationClaimIndexEntry[];
    protectedSurfaceOperationClaimIndexReleases?: string[];
    receiptMutationAttemptIndexEntries?: ReceiptMutationAttemptIndexEntry[];
};
export declare function buildStoredProtocolRecord(record: ProtocolRecord): Promise<StoredProtocolRecord>;
export declare function bindTransitionRequestContextToEventDescriptors(eventDescriptors: readonly EventDescriptor[], contextRecord: ProtocolRecord | null): EventDescriptor[];
export declare class ProtocolRecorder {
    private readonly store;
    private readonly transitionRequestContext?;
    constructor(store: ProtocolStore, transitionRequestContext?: TransitionRequestContextDraft | undefined);
    requiredRecord<T>(objectType: ProtocolObjectType, objectId: string, code: string): Promise<StoredProtocolRecord<T>>;
    optionalRecord<T>(objectType: ProtocolObjectType, objectId: string): Promise<StoredProtocolRecord<T> | null>;
    persistRecord(record: ProtocolRecord): Promise<void>;
    persistRecordIfAbsentOrSame(record: ProtocolRecord): Promise<"exact" | "conflict">;
    buildRecord(record: ProtocolRecord): Promise<StoredProtocolRecord>;
    commitRecordsWithEvents(protocolRecords: ProtocolRecord[], eventDescriptors: EventDescriptor[], options?: CommitRecordsOptions): Promise<ContractStreamEvent[]>;
    tryCommitRecordsWithEvents(protocolRecords: ProtocolRecord[], eventDescriptors: EventDescriptor[], options?: CommitRecordsOptions): Promise<{
        status: "committed";
        events: ContractStreamEvent[];
    } | {
        status: "idempotency_ledger_conflict";
    } | {
        status: "record_digest_conflict";
    }>;
    private persistTransitionRequestContextIfNeeded;
    transitionRequestContextRecordFor(scope: {
        tenantId: string;
        organizationId: string;
    }): Promise<ProtocolRecord | null>;
    withTransitionRequestContextEventDescriptors(eventDescriptors: EventDescriptor[], contextRecord: ProtocolRecord | null): EventDescriptor[];
    private withTransitionRequestContext;
}
