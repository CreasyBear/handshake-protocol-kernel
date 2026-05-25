import { type ProofGap } from "../../proof-gap";
import { type ResolveRecoveryTerminalConflictInput } from "../types";
import type { ProtocolRecorder } from "../../../events/records";
import { type RecoveryRecommendation, type RecoveryRecommendationStatusTransition } from "../types";
export type RecoveryTerminalConflictResolution = {
    proofGap: ProofGap;
    statusTransition: RecoveryRecommendationStatusTransition;
    recoveryRecommendation: RecoveryRecommendation;
};
export declare function resolveRecoveryTerminalConflictProofGap(recorder: ProtocolRecorder, inputValue: ResolveRecoveryTerminalConflictInput): Promise<RecoveryTerminalConflictResolution>;
