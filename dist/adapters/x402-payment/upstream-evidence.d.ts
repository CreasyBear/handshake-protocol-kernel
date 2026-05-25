import { type PaymentRequiredV2 } from "@x402/core/schemas";
export type X402OfficialSourceBasis = {
    repository: string;
    docs: Record<string, string>;
    packages: Record<string, string>;
    firstSlice: {
        role: "buyer";
        scheme: "exact";
        network: string;
        sdkSurface: readonly string[];
        unsupportedFirstSliceSurfaces: readonly string[];
    };
};
export type X402IntendedRequestEvidence = {
    method: string;
    url: string;
    requestBodyPosture?: "no_body" | "digest_bound" | "omitted" | "unsupported";
    bodyDigest: `sha256:${string}` | null;
    selectedHeadersDigest: `sha256:${string}`;
    providerEnvironmentPosture?: "local_reference_sandbox" | "external_sandbox" | "live" | "unknown";
    providerEnvironmentRef?: string | null;
};
export type X402PaymentRequiredEvidence = {
    evidenceKind: "x402_payment_required";
    authorityCreated: false;
    source: X402OfficialSourceBasis;
    intendedRequest: X402IntendedRequestEvidence;
    paymentRequired: PaymentRequiredV2;
    selectedPaymentRequirementIndex: number;
    selectedPaymentRequirement: PaymentRequiredV2["accepts"][number];
    selectedPaymentRequirementDigest: `sha256:${string}`;
    plannedCredentialEvidence: {
        paymentPayloadShape: "gateway_held_payment_payload";
        paymentSignatureHeader: "gateway_held_payment_signature";
        paymentResponseShape: "downstream_settlement_response_or_proof_gap";
    };
};
export type DecodeX402PaymentRequiredEvidenceInput = {
    source: X402OfficialSourceBasis;
    paymentRequiredHeader: string;
    intendedRequest: X402IntendedRequestEvidence;
    selectedPaymentRequirementIndex: number;
};
export declare function decodeX402PaymentRequiredEvidence(input: DecodeX402PaymentRequiredEvidenceInput): Promise<X402PaymentRequiredEvidence>;
export declare function digestX402SelectedPaymentRequirement(input: {
    paymentRequired: PaymentRequiredV2;
    selectedPaymentRequirementIndex: number;
    selectedPaymentRequirement: PaymentRequiredV2["accepts"][number];
}): Promise<`sha256:${string}`>;
export declare function isX402PaymentRequiredEvidenceAuthorityBearing(evidence: X402PaymentRequiredEvidence): boolean;
