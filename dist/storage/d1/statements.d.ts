import type { ContractStreamEvent, EndpointAccessLeaseClaim, EndpointAccessUsageCounterReservation, GreenlightConsumption, IdempotencyLedgerIndexEntry, ProtocolCommit, ProtectedSurfaceOperationClaimIndexEntry, ReceiptMutationAttemptIndexEntry, StoredProtocolRecord } from "../../protocol/store/port";
type ProtocolCommitStatementOptions = Pick<ProtocolCommit, "recordConflictMode" | "greenlightIssuanceClaims" | "idempotencyLedgerReservationEntries" | "idempotencyLedgerIndexEntries" | "recoveryTerminalClaims" | "isolationStateIndexEntries" | "protectedPathPostureIndexEntries" | "protectedSurfaceOperationClaimIndexEntries" | "protectedSurfaceOperationClaimIndexReleases" | "receiptMutationAttemptIndexEntries">;
export declare class D1ProtocolStatements {
    private readonly db;
    constructor(db: D1Database);
    protocolCommitStatements(records: StoredProtocolRecord[], events: ContractStreamEvent[], options?: ProtocolCommitStatementOptions): D1PreparedStatement[];
    recordReplacementStatements(record: StoredProtocolRecord, conflictMode?: "replace" | "absent_or_same"): D1PreparedStatement[];
    recordAbsentStatements(record: StoredProtocolRecord): D1PreparedStatement[];
    greenlightConsumptionStatement(consumption: GreenlightConsumption): D1PreparedStatement;
    protectedSurfaceOperationClaimIndexStatement(entry: ProtectedSurfaceOperationClaimIndexEntry, mode: "insert" | "replace"): D1PreparedStatement;
    idempotencyLedgerIndexStatement(entry: IdempotencyLedgerIndexEntry, mode: "insert" | "replace"): D1PreparedStatement;
    receiptMutationAttemptIndexStatement(entry: ReceiptMutationAttemptIndexEntry): D1PreparedStatement;
    endpointAccessLeaseClaimStatement(claim: EndpointAccessLeaseClaim): D1PreparedStatement;
    endpointAccessUsageCounterCasStatement(reservation: EndpointAccessUsageCounterReservation): D1PreparedStatement;
    recordStatement(record: StoredProtocolRecord, conflictMode?: "replace" | "absent_or_same"): D1PreparedStatement;
    recordAbsentOrSameStatement(record: StoredProtocolRecord): D1PreparedStatement;
    recordIfAbsentStatement(record: StoredProtocolRecord): D1PreparedStatement;
    private recordActionContractRefDeleteStatement;
    private recordActionContractRefStatements;
    private streamEventStatement;
    private greenlightIssuanceClaimStatement;
    private recoveryTerminalClaimStatement;
    private isolationStateIndexStatement;
    private protectedPathPostureIndexStatement;
    private protectedSurfaceOperationClaimReleaseStatement;
}
export {};
