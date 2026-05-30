import type { ActionContract } from "../action-contract";
import type { SurfaceOperationReconciliation } from "../operation-lifecycle";
import type { ProtocolRecorder } from "../../events/records";
import { type ProofGap } from "./types";
export declare function buildCompilationProofGap(input: {
    tenantId: string;
    organizationId: string;
    intentCompilationId: string;
    runtimeExecutionId: string | null;
    expectedEvidenceType: string;
    reasonCode: string;
}): ProofGap;
export declare function buildProofGap(contract: ActionContract, gapPhase: "compilation" | "policy" | "gate" | "mutation" | "receipt" | "stream" | "recovery", expectedEvidenceType: string, reasonCode: string, refs: {
    gateAttemptId: string | null;
    mutationAttemptId: string | null;
    receiptId: string | null;
}): ProofGap;
export declare function resolveProofGaps(recorder: ProtocolRecorder, proofGapIds: string[], reconciliation: SurfaceOperationReconciliation, now: string): Promise<ProofGap[]>;
