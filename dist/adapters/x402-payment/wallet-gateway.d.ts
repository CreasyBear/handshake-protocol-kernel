import type { ClientEvmSigner } from "@x402/evm";
import { type GatewayCheckInput, type GatewayCheckResult } from "../../protocol/areas/gateway-gate";
import type { CredentialResolutionEvidence, RecordCredentialResolutionEvidenceInput } from "../../protocol/areas/credential-custody";
import type { ReconcileSurfaceOperationInput, SurfaceOperationReconciliation, SurfaceOperationReconciliationResult } from "../../protocol/areas/operation-lifecycle";
import { type RecordTypedActionCommitmentInput, type TypedActionCommitmentRecord } from "../../protocol/areas/typed-action-commitment";
export { X402PaymentParametersSchema, type X402LocalReferenceSandboxEvidenceBoundary, type X402PaymentParameters, type X402PaymentSignatureCommand, type X402PaymentSignatureEvidence, type X402WalletSigningSurface, type X402WalletTypedPayloadEvidence, } from "./signing-command/types";
import { type X402PaymentParameters, type X402PaymentSignatureCommand, type X402PaymentSignatureEvidence, type X402WalletSigningSurface, type X402WalletTypedPayloadEvidence } from "./signing-command/types";
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
    recordTypedActionCommitment?(input: RecordTypedActionCommitmentInput): Promise<TypedActionCommitmentRecord>;
    reconcileSurfaceOperation(input: ReconcileSurfaceOperationInput): Promise<SurfaceOperationReconciliationResult>;
};
export type X402WalletGatewayInput = {
    protocol: X402WalletGatewayProtocol;
    surface: X402WalletSigningSurface;
    actionContractId: string;
    greenlightId: string;
    observedParameters: X402PaymentParameters;
    typedPayloadEvidence?: X402WalletTypedPayloadEvidence;
    surfaceOperationRef?: string;
};
export type X402WalletGatewayResult = {
    outcome: "gateway_check_refused";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: null;
    typedActionCommitment: null;
    reconciliation: null;
    signatureEvidence: null;
} | {
    outcome: "gateway_check_not_authoritative";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: null;
    typedActionCommitment: null;
    reconciliation: null;
    signatureEvidence: null;
} | {
    outcome: "payment_signature_reconciled";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    typedActionCommitment: TypedActionCommitmentRecord | null;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: X402PaymentSignatureEvidence;
} | {
    outcome: "payment_signature_proof_gap";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    typedActionCommitment: TypedActionCommitmentRecord | null;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: X402PaymentSignatureEvidence;
} | {
    outcome: "payment_signature_failed" | "payment_signature_outcome_unknown";
    gatewayCheck: GatewayCheckResult;
    credentialResolutionEvidence: CredentialResolutionEvidence | null;
    typedActionCommitment: TypedActionCommitmentRecord | null;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: null;
};
export declare function runX402WalletGateway(input: X402WalletGatewayInput): Promise<X402WalletGatewayResult>;
export declare function createOfficialExactX402SigningSurface(input: CreateOfficialExactX402SigningSurfaceInput): X402WalletSigningSurface;
