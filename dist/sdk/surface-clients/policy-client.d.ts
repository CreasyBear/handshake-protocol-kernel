import type { EvaluatePolicyInput } from "../../protocol/public/inputs";
import type { Greenlight, PolicyDecision } from "../../protocol/public/schemas";
import type { HandshakeFetch } from "../client";
import { type RoleScopedClientOptions } from "./transport";
export type PolicyClientOptions = RoleScopedClientOptions;
export type PolicyClientEvaluationResult = {
    decision: PolicyDecision;
    greenlight: Greenlight | null;
    authorityCreated: boolean;
    gatewayCheckPerformed: false;
    mutationAttempted: false;
    policyDecisionRef: string;
    greenlightRef: string | null;
    refusalRef: string | null;
    refusalReasonCode: string | null;
    reviewRequired: boolean;
    nextAction: "use_greenlight_at_gateway" | "read_evidence" | "request_review";
    retryability: "not_retryable";
    evidenceRefs: string[];
};
export declare class PolicyClient {
    private readonly transport;
    constructor(baseUrl: string, options: PolicyClientOptions, fetchImpl?: HandshakeFetch);
    evaluatePolicy(input: EvaluatePolicyInput): Promise<PolicyClientEvaluationResult>;
}
