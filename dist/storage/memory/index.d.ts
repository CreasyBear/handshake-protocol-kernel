import type { ContractStreamEvent, EndpointAccessLeaseCommit, EndpointAccessLeaseCommitResult, EndpointAccessUsageCommit, EndpointAccessUsageCommitResult, EndpointAccessUsageCounterKey, GreenlightConsumption, IdempotencyLedgerEntry, IsolationScopeRef, IsolationState, ProtocolCommit, ProtocolCommitResult, ProtocolStore, ProtocolObjectType, ProtectedPathPosture, ProtectedSurfaceOperationClaim, Receipt, StreamEventRange, GatewayCheckCommit, GatewayCheckCommitResult, StoredProtocolRecord, StreamTail } from "../../protocol/store/port";
export declare class InMemoryProtocolStore implements ProtocolStore {
    private records;
    private events;
    private consumptions;
    private greenlightIssuanceClaims;
    private currentIdempotencyLedgerEntries;
    private recoveryTerminalClaims;
    private currentIsolationStates;
    private currentProtectedPathPostures;
    private currentProtectedSurfaceOperationClaims;
    private receiptsByMutationAttempt;
    private endpointAccessLeaseClaims;
    private endpointAccessUsageCounters;
    putRecord(record: StoredProtocolRecord): Promise<void>;
    putRecordIfAbsentOrSame(record: StoredProtocolRecord): Promise<"inserted" | "unchanged" | "conflict">;
    getRecord<T>(objectType: ProtocolObjectType, objectId: string): Promise<StoredProtocolRecord<T> | null>;
    listRecordsByType<T>(objectType: ProtocolObjectType, scope?: {
        tenantId?: string;
        organizationId?: string;
    }): Promise<StoredProtocolRecord<T>[]>;
    listRecordsByActionContract<T>(objectType: ProtocolObjectType, actionContractId: string, scope?: {
        tenantId?: string;
        organizationId?: string;
    }): Promise<StoredProtocolRecord<T>[]>;
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
    getEndpointAccessUsageCounter(key: EndpointAccessUsageCounterKey): Promise<number>;
    commitEndpointAccessUsage(commit: EndpointAccessUsageCommit): Promise<EndpointAccessUsageCommitResult>;
    countRecordsOfType(objectType: ProtocolObjectType): number;
    listEventsForPartition(streamId: string, partitionKey: string): ContractStreamEvent[];
    private hasStreamOffset;
    private hasRecordDigestConflict;
    private stageRecordsAndEvents;
}
