import { z } from "zod";
import { type GatewayCheckInput, type GatewayCheckResult, type VerifiedGatewayCheck } from "../../protocol/areas/gateway-gate";
import type { CredentialResolutionEvidence, RecordCredentialResolutionEvidenceInput } from "../../protocol/areas/credential-custody";
import type { ReconcileSurfaceOperationInput, SurfaceOperationReconciliation, SurfaceOperationReconciliationResult } from "../../protocol/areas/operation-lifecycle";
import { type AuthMdProtectedApiCallParameters } from "./action-proposal";
export declare const AuthMdProtectedApiCallDownstreamStatusSchema: z.ZodEnum<{
    unknown: "unknown";
    refused: "refused";
    succeeded: "succeeded";
}>;
export type AuthMdProtectedApiCallDownstreamStatus = z.infer<typeof AuthMdProtectedApiCallDownstreamStatusSchema>;
export declare const AuthMdProtectedApiCallEvidenceSchema: z.ZodObject<{
    evidenceRef: z.ZodString;
    surfaceOperationRef: z.ZodString;
    targetHttpMethod: z.ZodString;
    endpointUrl: z.ZodString;
    requestBodyDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    selectedHeadersDigest: z.ZodString;
    responseDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    downstreamStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        succeeded: "succeeded";
    }>;
    providerRequestRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    providerOperationRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type AuthMdProtectedApiCallEvidence = z.infer<typeof AuthMdProtectedApiCallEvidenceSchema>;
export declare const AuthMdProfileConformanceReason: {
    readonly missingVerifiedGate: "auth_md_profile_missing_verified_gate";
    readonly paramsDigestDrift: "auth_md_profile_params_digest_drift";
    readonly leakedCredentialMaterial: "auth_md_profile_leaked_credential_material";
};
export type AuthMdProfileConformanceInput = {
    verifiedGate?: VerifiedGatewayCheck;
    parameters?: AuthMdProtectedApiCallParameters;
    expectedActionContractId?: string;
};
export declare function assertAuthMdProfileConformance(input: AuthMdProfileConformanceInput): void;
export type AuthMdProtectedApiCallCommand = {
    verifiedGate: VerifiedGatewayCheck;
    parameters: AuthMdProtectedApiCallParameters;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    credentialUseRef: string;
    providerRequestRef: string;
    providerOperationRef: string;
};
export interface AuthMdProtectedApiCallSurface {
    executeProtectedApiCall(command: AuthMdProtectedApiCallCommand): Promise<AuthMdProtectedApiCallEvidence>;
}
export type AuthMdProtectedApiCallGatewayProtocol = {
    gatewayCheck(input: GatewayCheckInput): Promise<GatewayCheckResult>;
    recordCredentialResolutionEvidence(input: RecordCredentialResolutionEvidenceInput): Promise<CredentialResolutionEvidence>;
    reconcileSurfaceOperation(input: ReconcileSurfaceOperationInput): Promise<SurfaceOperationReconciliationResult>;
};
export type AuthMdProtectedApiCallGatewayInput = {
    protocol: AuthMdProtectedApiCallGatewayProtocol;
    surface: AuthMdProtectedApiCallSurface;
    actionContractId: string;
    greenlightId: string;
    observedParameters: AuthMdProtectedApiCallParameters;
    surfaceOperationRef?: string;
};
export type AuthMdProtectedApiCallGatewayResult = {
    outcome: "gateway_check_refused";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: null;
    reconciliation: null;
    apiCallEvidence: null;
} | {
    outcome: "gateway_check_not_authoritative";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: null;
    reconciliation: null;
    apiCallEvidence: null;
} | {
    outcome: "protected_api_call_reconciled";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    reconciliation: SurfaceOperationReconciliation;
    apiCallEvidence: AuthMdProtectedApiCallEvidence;
} | {
    outcome: "protected_api_call_refused";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    reconciliation: SurfaceOperationReconciliation;
    apiCallEvidence: AuthMdProtectedApiCallEvidence;
} | {
    outcome: "protected_api_call_proof_gap";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    reconciliation: SurfaceOperationReconciliation;
    apiCallEvidence: AuthMdProtectedApiCallEvidence;
} | {
    outcome: "protected_api_call_failed" | "protected_api_call_outcome_unknown";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence | null;
    reconciliation: SurfaceOperationReconciliation;
    apiCallEvidence: null;
};
export declare function runAuthMdProtectedApiCallGateway(input: AuthMdProtectedApiCallGatewayInput): Promise<AuthMdProtectedApiCallGatewayResult>;
