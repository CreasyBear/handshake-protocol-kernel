import { z } from "zod";
import type { ClientEvmSigner } from "@x402/evm";
import { type GatewayCheckInput, type GatewayCheckResult, type VerifiedGatewayCheck } from "../../protocol/areas/gateway-gate";
import type { CredentialResolutionEvidence, RecordCredentialResolutionEvidenceInput } from "../../protocol/areas/credential-custody";
import type { ReconcileSurfaceOperationInput, SurfaceOperationReconciliation, SurfaceOperationReconciliationResult } from "../../protocol/areas/operation-lifecycle";
export declare const X402PaymentParametersSchema: z.ZodObject<{
    endpointUrl: z.ZodString;
    endpointDomain: z.ZodString;
    intendedHttpMethod: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    intendedRequestUrl: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    intendedRequestBodyPosture: z.ZodDefault<z.ZodEnum<{
        unsupported: "unsupported";
        no_body: "no_body";
        digest_bound: "digest_bound";
        omitted: "omitted";
    }>>;
    intendedRequestBodyDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    selectedHeadersDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    providerEnvironmentPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        local_reference_sandbox: "local_reference_sandbox";
        external_sandbox: "external_sandbox";
        live: "live";
    }>>;
    providerEnvironmentRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    x402Version: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    x402Scheme: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payee: z.ZodString;
    payTo: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    network: z.ZodString;
    token: z.ZodString;
    asset: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    atomicAmount: z.ZodString;
    x402EvidenceProfile: z.ZodDefault<z.ZodEnum<{
        official_payment_required: "official_payment_required";
        local_digest_profile: "local_digest_profile";
    }>>;
    paymentRequirementsDigest: z.ZodString;
    selectedPaymentRequirementIndex: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selectedPaymentRequirementDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    maxTimeoutSeconds: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    paymentIdentifierPosture: z.ZodDefault<z.ZodEnum<{
        bound: "bound";
        not_advertised: "not_advertised";
        advertised_absent: "advertised_absent";
    }>>;
    paymentIdentifierRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paymentIdentifierDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sdkPackageVersions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    extensionKeys: z.ZodDefault<z.ZodArray<z.ZodString>>;
    gatewayCredentialRefId: z.ZodString;
    gatewayCredentialRefDigest: z.ZodString;
    gatewayReadinessRef: z.ZodString;
    gatewayReadinessDigest: z.ZodString;
    policyVersionRef: z.ZodString;
    policyVersionDigest: z.ZodString;
}, z.core.$strict>;
export type X402PaymentParameters = z.infer<typeof X402PaymentParametersSchema>;
export type X402PaymentSignatureCommand = {
    verifiedGate: VerifiedGatewayCheck;
    parameters: X402PaymentParameters;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    credentialUseRef: string;
    providerRequestRef: string;
    providerOperationRef: string;
};
export type X402LocalReferenceSandboxEvidenceBoundary = {
    boundaryKind: "x402_local_reference_sandbox";
    evidenceProfile: "local_reference_downstream_fixture";
    providerEnvironmentPosture: "local_reference_sandbox";
    fixtureScope: "local_reference_only";
    signedRetryPosture: "not_observed" | "post_gateway_check_observation_only";
    authorityCreated: false;
    paymentFinalityClaimed: false;
    settlementFinalityClaimed: false;
    facilitatorOperationClaimed: false;
    sellerMiddlewareClaimed: false;
    providerCustodyClaimed: false;
    liveProviderOperationClaimed: false;
};
export type X402PaymentSignatureEvidence = {
    evidenceRef: string;
    surfaceOperationRef: string;
    paymentSignatureHeaderName: "PAYMENT-SIGNATURE";
    paymentSignatureHeaderRef: string;
    paymentSignatureDigest: `sha256:${string}`;
    paymentPayloadShape: "official_x402_payment_payload_v2" | "local_fixture_payment_signature";
    paymentPayloadRef?: string;
    paymentPayloadDigest?: `sha256:${string}`;
    paymentIdentifierRef?: string;
    paymentIdentifierDigest?: `sha256:${string}`;
    credentialMaterialPosture: "gateway_held_redacted" | "local_fixture";
    downstreamPaymentStatus: "succeeded" | "unknown";
    paymentResponseEvidenceRef: string | null;
    providerRequestRef: string | null;
    providerOperationRef: string | null;
    additionalEvidenceRefs?: string[];
    localReferenceSandboxBoundary?: X402LocalReferenceSandboxEvidenceBoundary;
};
export interface X402WalletSigningSurface {
    signPayment(command: X402PaymentSignatureCommand): Promise<X402PaymentSignatureEvidence>;
}
/**
 * D-64 Mechanism A — gateway-held credential custody (structural, not label-only).
 *
 * The x402 signer must never mint a payment signature unless the command carries a
 * genuine {@link VerifiedGatewayCheck} AND gateway-resolved, redacted credential
 * resolution evidence bound to that same gate attempt. This makes
 * `credentialMaterialPosture: "gateway_held_redacted"` an enforced invariant rather
 * than a label: a caller-only path holding a raw `gatewayCredentialRefId` cannot
 * reach `signPayment` because it cannot produce gate-bound `used_by_gateway`
 * resolution evidence. Throws on any custody violation.
 */
export declare function assertGatewayHeldSigningCommand(command: X402PaymentSignatureCommand): void;
export type CreateOfficialExactX402SigningSurfaceInput = {
    signer: ClientEvmSigner;
    paymentRequired: unknown;
    selectedPaymentRequirementIndex: number;
    selectedPaymentRequirementDigest: `sha256:${string}`;
    paymentIdentifier?: string | null;
    downstreamPaymentStatus?: "succeeded" | "unknown";
    paymentResponseEvidenceRef?: string | null;
    providerRequestRef?: string | null;
    providerOperationRef?: string | null;
};
export type X402WalletGatewayProtocol = {
    gatewayCheck(input: GatewayCheckInput): Promise<GatewayCheckResult>;
    recordCredentialResolutionEvidence(input: RecordCredentialResolutionEvidenceInput): Promise<CredentialResolutionEvidence>;
    reconcileSurfaceOperation(input: ReconcileSurfaceOperationInput): Promise<SurfaceOperationReconciliationResult>;
};
export type X402WalletGatewayInput = {
    protocol: X402WalletGatewayProtocol;
    surface: X402WalletSigningSurface;
    actionContractId: string;
    greenlightId: string;
    observedParameters: X402PaymentParameters;
    surfaceOperationRef?: string;
};
export type X402WalletGatewayResult = {
    outcome: "gateway_check_refused";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: null;
    reconciliation: null;
    signatureEvidence: null;
} | {
    outcome: "gateway_check_not_authoritative";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: null;
    reconciliation: null;
    signatureEvidence: null;
} | {
    outcome: "payment_signature_reconciled";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: X402PaymentSignatureEvidence;
} | {
    outcome: "payment_signature_proof_gap";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: X402PaymentSignatureEvidence;
} | {
    outcome: "payment_signature_failed";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence | null;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: null;
};
export declare function runX402WalletGateway(input: X402WalletGatewayInput): Promise<X402WalletGatewayResult>;
export declare function createOfficialExactX402SigningSurface(input: CreateOfficialExactX402SigningSurfaceInput): X402WalletSigningSurface;
