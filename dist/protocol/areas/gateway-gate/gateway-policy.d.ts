import type { ActionContract } from "../action-contract";
import type { GatewayRegistryEntry } from "../catalog-envelope";
import type { IsolationState } from "../isolation-breaker";
import type { Greenlight } from "../policy-greenlight";
import type { GateDecision } from "./types";
export { reconciliationFinalityFor, reconciliationStatusFor } from "../operation-lifecycle";
export type DownstreamMode = "pending";
export type GatewayPolicyDriftCheck = {
    status: "same_version" | "compatible_stricter" | "incompatible" | "unknown";
    currentGatewayPolicyVersion: string | null;
    reasonCode: string | null;
};
export declare function gateRefusalReason(contract: ActionContract, greenlight: Greenlight, observedParamsDigest: string, idempotencyLedgerKeyDigest: string, isolationStates: IsolationState[], now: string, gatewayPolicyDriftReasonCode: string | null, delegatedAuthorityBindingReasonCode: string | null, gatewayCredentialBindingReasonCode: string | null, protectedPathReasonCode: string | null, sequenceDependencyReasonCode: string | null, typedCommitmentReasonCode?: string | null): string | null;
export declare function checkGatewayPolicyDrift(contract: ActionContract, greenlight: Greenlight, currentGateway: GatewayRegistryEntry | null): GatewayPolicyDriftCheck;
export declare function mutationOutcomeFor(): string;
export declare function surfaceOperationRefFor(providedRef: string | undefined): string | null;
export declare function downstreamStatusFor(gateDecision: GateDecision): "pending" | "not_started";
export declare function receiptFinalityFor(gateDecision: GateDecision, hasProofGap: boolean): "unknown" | "pending" | "suspect";
