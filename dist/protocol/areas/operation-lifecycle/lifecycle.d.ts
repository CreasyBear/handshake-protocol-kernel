import type { Receipt } from "../receipt-export";
import type { ProtectedSurfaceOperationClaimState, SurfaceOperationReconciliation } from "./types";
export type ObservedDownstreamStatus = SurfaceOperationReconciliation["observedDownstreamStatus"];
export type OperationLifecycleMapping = {
    observedDownstreamStatus: ObservedDownstreamStatus;
    reconciliationStatus: SurfaceOperationReconciliation["reconciliationStatus"];
    finalityStatus: SurfaceOperationReconciliation["finalityStatus"];
    claimState: ProtectedSurfaceOperationClaimState;
    receiptDownstreamExecutionStatus: Receipt["downstreamExecutionStatus"];
    receiptMutationAttemptStatus: Receipt["mutationAttemptStatus"];
    proofGapReasonCode: string | null;
    keepClaimBlocking: boolean;
    createIsolation: boolean;
};
export declare const OPERATION_LIFECYCLE_MATRIX: {
    readonly pending: {
        readonly observedDownstreamStatus: "pending";
        readonly reconciliationStatus: "pending";
        readonly finalityStatus: "pending";
        readonly claimState: "active";
        readonly receiptDownstreamExecutionStatus: "pending";
        readonly receiptMutationAttemptStatus: "submitted";
        readonly proofGapReasonCode: null;
        readonly keepClaimBlocking: true;
        readonly createIsolation: false;
    };
    readonly succeeded: {
        readonly observedDownstreamStatus: "succeeded";
        readonly reconciliationStatus: "resolved";
        readonly finalityStatus: "final";
        readonly claimState: "terminal_succeeded";
        readonly receiptDownstreamExecutionStatus: "succeeded";
        readonly receiptMutationAttemptStatus: "succeeded";
        readonly proofGapReasonCode: null;
        readonly keepClaimBlocking: false;
        readonly createIsolation: false;
    };
    readonly refused: {
        readonly observedDownstreamStatus: "refused";
        readonly reconciliationStatus: "resolved";
        readonly finalityStatus: "suspect";
        readonly claimState: "terminal_refused";
        readonly receiptDownstreamExecutionStatus: "refused";
        readonly receiptMutationAttemptStatus: "downstream_refused";
        readonly proofGapReasonCode: null;
        readonly keepClaimBlocking: false;
        readonly createIsolation: false;
    };
    readonly failed: {
        readonly observedDownstreamStatus: "failed";
        readonly reconciliationStatus: "failed";
        readonly finalityStatus: "suspect";
        readonly claimState: "terminal_failed";
        readonly receiptDownstreamExecutionStatus: "failed";
        readonly receiptMutationAttemptStatus: "failed";
        readonly proofGapReasonCode: null;
        readonly keepClaimBlocking: false;
        readonly createIsolation: false;
    };
    readonly unknown: {
        readonly observedDownstreamStatus: "unknown";
        readonly reconciliationStatus: "still_unknown";
        readonly finalityStatus: "unknown";
        readonly claimState: "terminal_unknown";
        readonly receiptDownstreamExecutionStatus: "unknown";
        readonly receiptMutationAttemptStatus: "unknown";
        readonly proofGapReasonCode: "orphan_mitigation_required";
        readonly keepClaimBlocking: true;
        readonly createIsolation: true;
    };
};
export declare function operationLifecycleFor(status: ObservedDownstreamStatus): OperationLifecycleMapping;
export declare function reconciliationStatusFor(status: ObservedDownstreamStatus): "failed" | "pending" | "resolved" | "still_unknown";
export declare function reconciliationFinalityFor(status: ObservedDownstreamStatus): "unknown" | "pending" | "final" | "suspect";
