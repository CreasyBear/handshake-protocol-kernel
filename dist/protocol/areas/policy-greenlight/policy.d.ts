import type { ActionContract } from "../action-contract";
import type { OperatingEnvelope } from "../catalog-envelope";
import type { IsolationState } from "../isolation-breaker";
import type { ReviewDecision } from "../review-binding";
export type PolicyEvaluationResult = {
    decision: "greenlight" | "refuse" | "review_required" | "halt" | "quarantine" | "proof_gap";
    reasonCode: string;
    reason: string;
    matchedRuleIds: string[];
};
export declare function evaluateDeterministicPolicy(contract: ActionContract, envelope: OperatingEnvelope, isolationStates: IsolationState[], now: string): PolicyEvaluationResult;
export declare function reviewDecisionAllowsGreenlight(reviewDecision: ReviewDecision, contract: ActionContract, policyInputDigest: string, now: string): boolean;
export declare function isolationSnapshotRef(states: IsolationState[]): string;
