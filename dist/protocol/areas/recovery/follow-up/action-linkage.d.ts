import type { ActionContract } from "../../action-contract";
import type { ProtocolRecorder } from "../../../events/records";
import type { RecoveryRecommendation } from "../types";
type RecoveryFollowupCandidate = {
    tenantId: string;
    organizationId: string;
    principalId: string;
    agentId: string;
    runId: string;
    sequenceNumber: number;
    actionClass: string;
    gatewayId: string;
    resourceRef: string;
    evidenceRefs: string[];
};
export type RecoveryActionLinkage = {
    recommendation: RecoveryRecommendation;
    sourceContract: ActionContract;
};
export declare function loadRecoveryActionLinkage(recorder: ProtocolRecorder, recoveryRecommendationId: string | null): Promise<RecoveryActionLinkage | null>;
export declare function assertRecoveryActionLinkage(input: RecoveryFollowupCandidate, linkage: RecoveryActionLinkage | null, now: string): void;
export {};
