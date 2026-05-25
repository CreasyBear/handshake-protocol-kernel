import type { ActionContract } from "../../action-contract";
import { type ProofGap } from "../../proof-gap";
import type { ProtocolRecorder } from "../../../events/records";
import { type RecoveryRecommendation } from "../types";
export type RecordRecoveryTerminalConflictInput = {
    recommendation: RecoveryRecommendation;
    sourceContract: ActionContract;
    attemptedObjectRef: string;
    changedByRef: string;
};
export declare function recordRecoveryTerminalConflictProofGap(recorder: ProtocolRecorder, input: RecordRecoveryTerminalConflictInput): Promise<ProofGap>;
