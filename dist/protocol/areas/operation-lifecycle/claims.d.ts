import type { ActionContract } from "../action-contract";
import type { MutationAttempt } from "../gateway-gate";
import type { Greenlight } from "../policy-greenlight";
import { type ProtectedSurfaceOperationClaim, type ProtectedSurfaceOperationClaimState } from "./types";
export type ProtectedSurfaceOperationClaimKey = {
    tenantId: string;
    organizationId: string;
    gatewayId: string;
    protectedSurfaceKind: string;
    actionClass: string;
    resourceRef: string;
};
export declare function protectedSurfaceOperationClaimKey(contract: ActionContract): ProtectedSurfaceOperationClaimKey;
export declare function protectedSurfaceOperationClaimKeyDigest(key: ProtectedSurfaceOperationClaimKey): Promise<`sha256:${string}`>;
export declare function buildActiveProtectedSurfaceOperationClaim(input: {
    contract: ActionContract;
    greenlight: Greenlight;
    gateAttemptId: string;
    mutationAttempt: MutationAttempt;
    now: string;
}): Promise<ProtectedSurfaceOperationClaim>;
export declare function buildTerminalProtectedSurfaceOperationClaim(activeClaim: ProtectedSurfaceOperationClaim, input: {
    claimState: ProtectedSurfaceOperationClaimState;
    terminalAt: string;
    terminalReasonCode: string;
    releasedByRef: string;
}): Promise<ProtectedSurfaceOperationClaim>;
