import { type ProofGap } from "./shared";
export type LiveX402RequirementReadbackInput = {
    readonly generatedAt: string;
    readonly commandRefs: readonly string[];
    readonly request: {
        readonly method: string;
        readonly url: string;
        readonly responseStatus: number;
        readonly providerEnvironmentPosture: "live";
        readonly headersEvidenceRef: string;
    };
    readonly paymentRequiredHeader: string;
    readonly selectedPaymentRequirementIndex: number;
    readonly customerGatewayCustody: {
        readonly present: boolean;
        readonly proofRef: string | null;
        readonly digest: `sha256:${string}` | null;
    };
};
export type LiveX402RequirementReadback = ReturnType<typeof projectLiveX402RequirementReadback>;
export declare function projectLiveX402RequirementReadback(input: LiveX402RequirementReadbackInput): {
    proofKind: "live_x402_requirement_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: "blocked" | "ready_for_gateway_signed_retry";
    scope: string;
    request: {
        readonly method: string;
        readonly url: string;
        readonly responseStatus: number;
        readonly providerEnvironmentPosture: "live";
        readonly headersEvidenceRef: string;
    };
    paymentRequired: {
        x402Version: 2;
        resource: {
            url: string;
            description?: string | undefined;
            mimeType?: string | undefined;
            serviceName?: string | undefined;
            tags?: string[] | undefined;
            iconUrl?: string | undefined;
        };
        acceptsCount: number;
        selectedPaymentRequirementIndex: number;
        selectedPaymentRequirement: {
            payTo: string;
            amount: string;
            asset: string;
            network: string;
            scheme: string;
            maxTimeoutSeconds: number;
            extra?: Record<string, unknown> | null | undefined;
        };
        selectedPaymentRequirementDigest: `sha256:${string}`;
    };
    customerGatewayCustody: {
        readonly present: boolean;
        readonly proofRef: string | null;
        readonly digest: `sha256:${string}` | null;
    };
    commandRefs: readonly string[];
    evidenceRefs: string[];
    authorityBoundary: {
        resolvesCredential: false;
        invokesSigner: false;
        createsPaymentPayload: false;
        provesCustomerGatewayCustody: boolean;
        provesLivePaidExecution: false;
        provesSettlementFinality: false;
        provesProviderCustody: false;
        certifiesMarketplace: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsGatewayCheck: false;
        performsMutation: false;
    };
    proofGaps: ProofGap[];
    nextMechanism: string;
};
