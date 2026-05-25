import type { ActionContract } from "../action-contract";
import { type EventDescriptor } from "../../events/chains";
import type { ProtocolRecord } from "../object-registry";
import { type TransitionRecoveryRecommendationStatusInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type RecoveryRecommendation, type RecoveryRecommendationStatusTransition, type RecoveryRecommendationTerminalStatus } from "./types";
import type { RecoveryTerminalClaim } from "../../store/port";
export type RecoveryRecommendationStatusChange = {
    recoveryRecommendation: RecoveryRecommendation;
    statusTransition: RecoveryRecommendationStatusTransition;
    terminalClaim: RecoveryTerminalClaim;
};
export type BuildRecoveryRecommendationStatusChangeInput = {
    recommendation: RecoveryRecommendation;
    sourceContract: ActionContract;
    nextStatus: RecoveryRecommendationTerminalStatus;
    reasonCode: string;
    reasonSummary: string;
    changedByRef: string;
    supersededByActionContractId: string | null;
    now: string;
};
export declare function transitionRecoveryRecommendationStatus(recorder: ProtocolRecorder, inputValue: TransitionRecoveryRecommendationStatusInput): Promise<RecoveryRecommendationStatusChange>;
export declare function buildRecoveryRecommendationStatusChange(input: BuildRecoveryRecommendationStatusChangeInput): Promise<RecoveryRecommendationStatusChange>;
export declare function statusChangeRecords(statusChange: RecoveryRecommendationStatusChange): ProtocolRecord[];
export declare function statusChangeEvents(statusChange: RecoveryRecommendationStatusChange, sourceContract: ActionContract): EventDescriptor[];
