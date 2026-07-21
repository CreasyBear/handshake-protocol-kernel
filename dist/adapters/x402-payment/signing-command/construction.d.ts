import { type Eip712TypedCommitmentInput, type NormalizedEip712TypedCommitment, type RecordTypedActionCommitmentInput } from "../../../protocol/areas/typed-action-commitment";
import type { CredentialResolutionEvidence, CredentialResolutionEvidenceSchema } from "../../../protocol/areas/credential-custody";
import type { GatewayCheckResult, VerifiedGatewayCheck } from "../../../protocol/areas/gateway-gate";
import type { X402PaymentParameters, X402PaymentSignatureCommand, X402PaymentSignatureEvidence, X402WalletTypedPayloadEvidence } from "./types";
export declare function buildX402PaymentSignatureCommand(input: Readonly<{
    verifiedGate: VerifiedGatewayCheck;
    gateDigests: Readonly<{
        contractDigestSeen: `sha256:${string}`;
        paramsDigestSeen: `sha256:${string}`;
    }>;
    parameters: X402PaymentParameters;
    credentialResolutionEvidence: ReturnType<typeof CredentialResolutionEvidenceSchema.parse>;
}>): Promise<X402PaymentSignatureCommand>;
export declare function credentialResolutionRequestDigest(verifiedGate: VerifiedGatewayCheck, parameters: X402PaymentParameters): Promise<`sha256:${string}`>;
export declare function buildX402Eip712TypedCommitmentInput(input: {
    gatewayCheck: Pick<GatewayCheckResult, "gateAttempt">;
    verifiedGate: VerifiedGatewayCheck;
    parameters: X402PaymentParameters;
    credentialResolutionEvidence: CredentialResolutionEvidence;
    typedPayloadEvidence?: X402WalletTypedPayloadEvidence;
    signatureEvidence: X402PaymentSignatureEvidence | null;
}): Promise<Eip712TypedCommitmentInput>;
export declare function assertPreSignTypedActionCommitment(commitment: NormalizedEip712TypedCommitment): void;
export declare function isBlockingTypedActionCommitment(commitment: NormalizedEip712TypedCommitment): boolean;
export declare function recordTypedActionCommitmentInputFromNormalized(input: {
    tenantId: string;
    organizationId: string;
    actionContractId: string;
    normalized: NormalizedEip712TypedCommitment;
}): RecordTypedActionCommitmentInput;
export declare function providerRefsForGate(verifiedGate: VerifiedGatewayCheck): {
    providerRequestRef: string;
    providerOperationRef: string;
};
