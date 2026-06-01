import { type AgenticEndpointAccessAttempt, type AgenticEndpointAccessCapabilities, type AgenticEndpointAccessClearanceBinding, type AgenticEndpointAccessLease, type AgenticEndpointAccessPolicy, type AgenticEndpointAccessReadback, type AgenticEndpointAccessUsageEvent, type EndpointAccessSurfaceBinding } from "./types";
export type ProjectAgenticEndpointAccessReadbackInput = {
    readonly attempt: AgenticEndpointAccessAttempt;
    readonly policy: AgenticEndpointAccessPolicy;
    readonly surfaceBinding: EndpointAccessSurfaceBinding;
    readonly clearanceBinding: AgenticEndpointAccessClearanceBinding;
    readonly lease?: AgenticEndpointAccessLease | null;
    readonly usageEvents?: readonly AgenticEndpointAccessUsageEvent[];
    readonly capabilityReport?: AgenticEndpointAccessCapabilities | null;
    readonly capabilityReportRef?: string | null;
    readonly healthReportRef: string;
    readonly linkedActionRefs?: readonly string[];
    readonly linkedReceiptRefs?: readonly string[];
    readonly linkedProofGapRefs?: readonly string[];
    readonly publicVerifyUrl: string;
    readonly readbackId?: string;
    readonly createdAt?: string;
};
export type EvaluateAgenticEndpointAccessCapabilitiesInput = {
    readonly capabilityReport?: AgenticEndpointAccessCapabilities | null;
    readonly expectedSchemaVersion?: string;
    readonly expectedCloudConfigRevision?: string;
    readonly minimumKernelVersion?: string;
    readonly minimumMiddlewareVersion?: string;
    readonly requiredDelegationEvidenceKinds?: readonly string[];
    readonly requiredPolicyFeatures?: readonly string[];
    readonly requiredReadbackKinds?: readonly string[];
};
export type AgenticEndpointAccessCapabilityEvaluation = {
    readonly ok: boolean;
    readonly status: "supported" | "refused" | "proof_gap";
    readonly reasonCodes: readonly string[];
    readonly capabilityReportRef: string | null;
};
export declare function projectAgenticEndpointAccessReadback(inputValue: ProjectAgenticEndpointAccessReadbackInput): Promise<AgenticEndpointAccessReadback>;
export declare function evaluateAgenticEndpointAccessCapabilities(input: EvaluateAgenticEndpointAccessCapabilitiesInput): AgenticEndpointAccessCapabilityEvaluation;
