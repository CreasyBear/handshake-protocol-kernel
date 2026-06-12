import { z } from "zod";
import { type X402OfficialSourceBasis, type X402PaymentRequiredEvidence } from "./upstream-evidence";
import { createOfficialExactX402SigningSurface, type X402LocalReferenceSandboxEvidenceBoundary, type X402PaymentParameters, type X402PaymentSignatureEvidence, type X402WalletSigningSurface } from "./wallet-gateway";
declare const LocalSandboxIntendedRequestSchema: z.ZodObject<{
    method: z.ZodString;
    url: z.ZodString;
    requestBodyPosture: z.ZodDefault<z.ZodEnum<{
        unsupported: "unsupported";
        digest_bound: "digest_bound";
        no_body: "no_body";
        omitted: "omitted";
    }>>;
    bodyDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    selectedHeadersDigest: z.ZodString;
    providerEnvironmentPosture: z.ZodDefault<z.ZodLiteral<"local_reference_sandbox">>;
    providerEnvironmentRef: z.ZodDefault<z.ZodString>;
}, z.core.$strict>;
export type CreateLocalX402PaidHttpSandboxInput = {
    source: X402OfficialSourceBasis;
    paymentRequired: unknown;
    intendedRequest: z.input<typeof LocalSandboxIntendedRequestSchema>;
    selectedPaymentRequirementIndex: number;
    paymentRequiredEvidenceRef?: string;
    paymentResponseEvidenceRef?: string;
    providerRequestRef?: string;
    providerOperationRef?: string;
};
export type LocalX402PaidHttpSandboxChallenge = {
    outcome: "payment_required";
    status: 402;
    paymentRequiredHeader: string;
    paymentRequiredEvidenceRef: string;
    providerRequestRef: string;
    providerOperationRef: string;
    requestDigest: `sha256:${string}`;
    evidence: X402PaymentRequiredEvidence;
    evidenceBoundary: X402LocalReferenceSandboxEvidenceBoundary;
    authorityCreated: false;
};
export type LocalX402PaidHttpSandboxRetryResult = {
    outcome: "signed_retry_recorded";
    downstreamPaymentStatus: "succeeded";
    paymentResponseEvidenceRef: string;
    providerRequestRef: string;
    providerOperationRef: string;
    signedRetryEvidenceRef: string;
    evidenceBoundary: X402LocalReferenceSandboxEvidenceBoundary;
    retryCount: number;
    authorityCreated: false;
} | {
    outcome: "signed_retry_refused";
    downstreamPaymentStatus: "not_started";
    reasonCode: "x402_local_sandbox_missing_signature_evidence" | "x402_local_sandbox_invalid_signature_header" | "x402_local_sandbox_non_reference_environment" | "x402_local_sandbox_ambiguous_body_posture";
    evidenceBoundary: X402LocalReferenceSandboxEvidenceBoundary;
    retryCount: number;
    authorityCreated: false;
};
export type LocalX402PaidHttpSandbox = {
    requestPaymentRequired(): Promise<LocalX402PaidHttpSandboxChallenge>;
    recordSignedRetry(input: {
        parameters: X402PaymentParameters;
        signatureEvidence: X402PaymentSignatureEvidence | null;
    }): Promise<LocalX402PaidHttpSandboxRetryResult>;
    snapshot(): {
        challengeCount: number;
        signedRetryCount: number;
        lastRetry: LocalX402PaidHttpSandboxRetryResult | null;
    };
};
export type CreateLocalX402SandboxSigningSurfaceInput = {
    sandbox: LocalX402PaidHttpSandbox;
    signer: Parameters<typeof createOfficialExactX402SigningSurface>[0]["signer"];
    paymentRequired: unknown;
    selectedPaymentRequirementIndex: number;
    selectedPaymentRequirementDigest: `sha256:${string}`;
    paymentIdentifier?: string | null;
};
export declare function createLocalX402PaidHttpSandbox(input: CreateLocalX402PaidHttpSandboxInput): LocalX402PaidHttpSandbox;
export declare function createLocalX402SandboxSigningSurface(input: CreateLocalX402SandboxSigningSurfaceInput): X402WalletSigningSurface;
export {};
