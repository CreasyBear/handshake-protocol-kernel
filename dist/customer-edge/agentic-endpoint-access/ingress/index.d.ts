import { type AgenticEndpointAccessConfigSnapshot, type AgenticEndpointAccessHeaderRedactionPolicy, type AgenticEndpointAccessIngressContext } from "../contracts";
export declare const agenticEndpointAccessHeaderRedactionPolicyId: "agentic-endpoint-access-header-redaction.v1";
type AgenticEndpointAccessBypassPosture = "blocked" | "unblocked" | "unknown" | "stale" | "inconclusive";
export type AgenticEndpointAccessHeaders = Headers | Record<string, string | readonly string[] | undefined>;
export type AgenticEndpointAccessIngressInput = {
    readonly requestId: string;
    readonly idempotencyKey?: string;
    readonly candidateActionId: string;
    readonly method: string;
    readonly url: string;
    readonly headers?: AgenticEndpointAccessHeaders;
    readonly body?: unknown;
    readonly bodyDigest?: string;
    readonly principalRef: string;
    readonly agentRef: string;
    readonly objectiveRef: string;
    readonly delegationEvidenceRefs?: readonly string[];
    readonly agentRegistrationRefs?: readonly string[];
    readonly runtimePostureRefs?: readonly string[];
    readonly generatedCodeOrSpecRef: string;
    readonly rawBypassPosture?: AgenticEndpointAccessBypassPosture;
    readonly siblingBypassPosture?: AgenticEndpointAccessBypassPosture;
    readonly attemptedAt?: string;
};
export type AgenticEndpointAccessIngressNormalizationResult = {
    readonly status: "normalized";
    readonly context: AgenticEndpointAccessIngressContext;
    readonly redactedHeaders: Record<string, string>;
} | {
    readonly status: "refused" | "proof_gap" | "unsupported";
    readonly requestId: string | null;
    readonly idempotencyKey: string | null;
    readonly reasonCodes: readonly string[];
};
export declare function normalizeAgenticEndpointAccessIngress(input: {
    readonly ingress: AgenticEndpointAccessIngressInput;
    readonly snapshot: AgenticEndpointAccessConfigSnapshot;
    readonly headerRedactionPolicy?: AgenticEndpointAccessHeaderRedactionPolicy;
    readonly maxBodyBytes?: number;
    readonly nowIso?: string;
}): Promise<AgenticEndpointAccessIngressNormalizationResult>;
export declare function redactAgenticEndpointAccessHeaders(headers: AgenticEndpointAccessHeaders, policyValue?: AgenticEndpointAccessHeaderRedactionPolicy): Record<string, string>;
export {};
