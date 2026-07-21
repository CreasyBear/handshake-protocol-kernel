import { type ProofGap } from "../shared";
export type LiveX402PaidRetryTerminalKind = "receipt" | "refusal" | "proof_gap";
export type LiveX402PaidRetryStatus = "terminal_readback_recorded" | "blocked";
export type LiveX402PaidRetryReadbackInput = {
    readonly generatedAt: string;
    readonly commandRefs: readonly string[];
    readonly terminalEvidenceInput?: {
        readonly status: "valid" | "invalid" | "not_provided";
        readonly evidenceRef: string | null;
        readonly error: string | null;
    };
    readonly actionContract: {
        readonly actionContractId: string;
        readonly actionContractDigest: `sha256:${string}`;
        readonly selectedPaymentRequirementDigest: `sha256:${string}`;
        readonly actionClass: "x402_payment.exact";
    };
    readonly policy: {
        readonly policyDecisionId: string;
        readonly greenlightId: string | null;
        readonly greenlightMaxUses: 1 | null;
        readonly greenlightConsumed: boolean;
    };
    readonly gatewayCheck: {
        readonly verifiedGatewayCheckRef: string | null;
        readonly gatewayCheckDigest: `sha256:${string}` | null;
        readonly gateDecision: "passed" | "refused" | "unknown";
        readonly observedParamsDigest: `sha256:${string}` | null;
        readonly credentialRefDigest: `sha256:${string}` | null;
    };
    readonly customerGatewayCustody: {
        readonly present: boolean;
        readonly proofRef: string | null;
        readonly digest: `sha256:${string}` | null;
    };
    readonly signerInvocation: {
        readonly posture: "post_gateway_check_only" | "not_observed" | "unsafe_or_unknown";
        readonly invocationCount: number;
        readonly evidenceRef: string | null;
    };
    readonly paymentMaterial: {
        readonly payloadDigest: `sha256:${string}` | null;
        readonly signatureDigest: `sha256:${string}` | null;
        readonly rawMaterialIncluded: boolean;
    };
    readonly liveRetry: {
        readonly method: string;
        readonly url: string;
        readonly providerEnvironmentPosture: "live";
        readonly responseStatus: number | null;
        readonly responseDigest: `sha256:${string}` | null;
        readonly responseEvidenceRef: string | null;
        readonly headersEvidenceRef: string | null;
    };
    readonly terminalReadback: {
        readonly terminalKind: LiveX402PaidRetryTerminalKind | null;
        readonly terminalRef: string | null;
        readonly terminalDigest: `sha256:${string}` | null;
    };
    readonly binding: LiveX402PaidRetryBinding | null;
    readonly evidenceRefs: readonly string[];
};
export type LiveX402PaidRetryBinding = {
    readonly actionContractId: string;
    readonly actionContractDigest: `sha256:${string}`;
    readonly selectedPaymentRequirementDigest: `sha256:${string}`;
    readonly policyDecisionId: string;
    readonly greenlightId: string;
    readonly verifiedGatewayCheckRef: string;
    readonly gatewayCheckDigest: `sha256:${string}`;
    readonly observedParamsDigest: `sha256:${string}`;
    readonly credentialRefDigest: `sha256:${string}`;
    readonly customerGatewayCustodyProofRef: string;
    readonly customerGatewayCustodyDigest: `sha256:${string}`;
    readonly signerEvidenceRef: string;
    readonly paymentPayloadDigest: `sha256:${string}`;
    readonly paymentSignatureDigest: `sha256:${string}`;
    readonly liveRetryMethod: string;
    readonly liveRetryUrl: string;
    readonly liveRetryResponseDigest: `sha256:${string}`;
    readonly liveRetryResponseEvidenceRef: string;
    readonly terminalRef: string;
    readonly terminalDigest: `sha256:${string}`;
};
export type LiveX402PaidRetryReadback = ReturnType<typeof projectLiveX402PaidRetryReadback>;
export declare function projectLiveX402PaidRetryReadback(input: LiveX402PaidRetryReadbackInput): {
    proofKind: "live_x402_paid_retry_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: LiveX402PaidRetryStatus;
    scope: string;
    actionContract: {
        readonly actionContractId: string;
        readonly actionContractDigest: `sha256:${string}`;
        readonly selectedPaymentRequirementDigest: `sha256:${string}`;
        readonly actionClass: "x402_payment.exact";
    };
    policy: {
        readonly policyDecisionId: string;
        readonly greenlightId: string | null;
        readonly greenlightMaxUses: 1 | null;
        readonly greenlightConsumed: boolean;
    };
    gatewayCheck: {
        readonly verifiedGatewayCheckRef: string | null;
        readonly gatewayCheckDigest: `sha256:${string}` | null;
        readonly gateDecision: "passed" | "refused" | "unknown";
        readonly observedParamsDigest: `sha256:${string}` | null;
        readonly credentialRefDigest: `sha256:${string}` | null;
    };
    customerGatewayCustody: {
        readonly present: boolean;
        readonly proofRef: string | null;
        readonly digest: `sha256:${string}` | null;
    };
    signerInvocation: {
        readonly posture: "post_gateway_check_only" | "not_observed" | "unsafe_or_unknown";
        readonly invocationCount: number;
        readonly evidenceRef: string | null;
    };
    paymentMaterial: {
        payloadDigest: `sha256:${string}` | null;
        signatureDigest: `sha256:${string}` | null;
        rawMaterialIncluded: boolean;
    };
    liveRetry: {
        readonly method: string;
        readonly url: string;
        readonly providerEnvironmentPosture: "live";
        readonly responseStatus: number | null;
        readonly responseDigest: `sha256:${string}` | null;
        readonly responseEvidenceRef: string | null;
        readonly headersEvidenceRef: string | null;
    };
    terminalReadback: {
        readonly terminalKind: LiveX402PaidRetryTerminalKind | null;
        readonly terminalRef: string | null;
        readonly terminalDigest: `sha256:${string}` | null;
    };
    terminalEvidenceInput: {
        readonly status: "valid" | "invalid" | "not_provided";
        readonly evidenceRef: string | null;
        readonly error: string | null;
    };
    binding: LiveX402PaidRetryBinding | null;
    commandRefs: readonly string[];
    evidenceRefs: string[];
    authorityBoundary: {
        reportsExistingPolicyDecision: true;
        reportsExistingGreenlight: true;
        reportsExistingGatewayCheck: true;
        resolvesCredential: false;
        invokesSigner: false;
        createsPaymentPayload: false;
        createsPaymentSignature: false;
        provesPostGatewaySignerInvocation: boolean;
        provesLivePaidRetry: boolean;
        provesSettlementFinality: false;
        provesProviderCustody: false;
        createsRetryAuthority: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsGatewayCheck: false;
        performsMutation: false;
    };
    proofGaps: ProofGap[];
    nextMechanism: string;
};
