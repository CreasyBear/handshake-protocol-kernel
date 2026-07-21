import type { ContractStreamEvent, EndpointAccessLeaseCommit, EndpointAccessLeaseCommitResult, EndpointAccessRecordScope, EndpointAccessUsageCommit, EndpointAccessUsageCommitResult, EndpointAccessUsageCounterKey, GreenlightConsumption, IdempotencyLedgerEntry, IsolationScopeRef, IsolationState, ProtocolCommit, ProtocolCommitResult, ProtocolStore, RawRecordReadAuditReader, ProtocolObjectType, ProtectedPathPosture, ProtectedSurfaceOperationClaim, Receipt, RawRecordReadAuditQuery, RawRecordReadAuditRecordScope, StreamEventRange, GatewayCheckCommit, GatewayCheckCommitResult, StoredProtocolRecord, StreamTail } from "../../protocol/store/port";
import { MemoryAuthoritySourceStore } from "./authority-source";
export declare class InMemoryProtocolStore extends MemoryAuthoritySourceStore implements ProtocolStore, RawRecordReadAuditReader {
    #private;
    putRecord(record: StoredProtocolRecord): Promise<void>;
    putRecordIfAbsentOrSame(record: StoredProtocolRecord): Promise<"exact" | "conflict">;
    getRecord<T>(objectType: ProtocolObjectType, objectId: string): Promise<StoredProtocolRecord<T> | null>;
    listRecordsByType<T>(objectType: ProtocolObjectType, scope?: {
        tenantId?: string;
        organizationId?: string;
    }): Promise<StoredProtocolRecord<T>[]>;
    listRecordsByActionContract<T>(objectType: ProtocolObjectType, actionContractId: string, scope?: {
        tenantId?: string;
        organizationId?: string;
    }): Promise<StoredProtocolRecord<T>[]>;
    listRawRecordReadAudits<T>(scope: RawRecordReadAuditRecordScope, query: RawRecordReadAuditQuery): Promise<StoredProtocolRecord<T>[]>;
    getStreamTail(streamId: string, partitionKey: string): Promise<StreamTail>;
    getStreamEvent(streamId: string, partitionKey: string, offset: number): Promise<ContractStreamEvent | null>;
    listStreamEvents(streamId: string, partitionKey: string, range?: StreamEventRange): Promise<ContractStreamEvent[]>;
    getCurrentProtectedPathPosture(postureScopeKey: string): Promise<StoredProtocolRecord<ProtectedPathPosture> | null>;
    getCurrentIdempotencyLedgerEntry(ledgerKeyDigest: string): Promise<StoredProtocolRecord<IdempotencyLedgerEntry> | null>;
    getCurrentProtectedSurfaceOperationClaim(claimKeyDigest: string): Promise<StoredProtocolRecord<ProtectedSurfaceOperationClaim> | null>;
    getReceiptByMutationAttemptId(mutationAttemptId: string): Promise<StoredProtocolRecord<Receipt> | null>;
    appendEvent(event: ContractStreamEvent): Promise<void>;
    listIsolationStates(scopeRefs: IsolationScopeRef[]): Promise<IsolationState[]>;
    consumeGreenlight(consumption: GreenlightConsumption): Promise<"consumed" | "already_consumed">;
    commitProtocolRecords(commit: ProtocolCommit): Promise<ProtocolCommitResult>;
    commitGatewayCheck(commit: GatewayCheckCommit): Promise<GatewayCheckCommitResult>;
    commitEndpointAccessLease(commit: EndpointAccessLeaseCommit): Promise<EndpointAccessLeaseCommitResult>;
    getEndpointAccessLeaseByGreenlightId<T>(greenlightId: string, scope: EndpointAccessRecordScope): Promise<StoredProtocolRecord<T> | null>;
    getEndpointAccessClearanceBindingByAttemptId<T>(attemptId: string, scope: EndpointAccessRecordScope): Promise<StoredProtocolRecord<T> | null>;
    listEndpointAccessUsageEventsByLeaseId<T>(leaseId: string, scope: EndpointAccessRecordScope): Promise<StoredProtocolRecord<T>[]>;
    getEndpointAccessUsageCounter(key: EndpointAccessUsageCounterKey): Promise<number>;
    commitEndpointAccessUsage(commit: EndpointAccessUsageCommit): Promise<EndpointAccessUsageCommitResult>;
    countRecordsOfType(objectType: ProtocolObjectType): number;
    listEventsForPartition(streamId: string, partitionKey: string): ContractStreamEvent[];
    private hasStreamOffset;
    private hasStreamConflict;
    private hasRecordDigestConflict;
    private stageRecordsAndEvents;
}
