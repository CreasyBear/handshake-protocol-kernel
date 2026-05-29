import type { CodexHostActivationReadback } from "./codex-host-activation";
import type { DistributionProvenanceReadback } from "./distribution-provenance";
import type { LiveX402RequirementReadback } from "./live-x402-requirement";
import { type ProductCompletionGateId } from "./product-completion-contract";
export type { ProductCompletionGateId };
export type ProductCompletionGateStatus = "completed" | "hard_blocked" | "incomplete";
export type ProductCompletionReadbackInput = {
    readonly generatedAt: string;
    readonly commandRefs: readonly string[];
    readonly qualityGate: {
        readonly command: string;
        readonly passed: boolean;
        readonly evidenceRef: string;
    };
    readonly gates: {
        readonly codexLocalHostActivation: {
            readonly status: CodexHostActivationReadback["status"];
            readonly artifactVersion: string;
            readonly artifactSha256: string | null;
            readonly observesHostToolInvocation: boolean;
            readonly authorityCreated: boolean;
            readonly evidenceRefs: readonly string[];
        };
        readonly publicDistributionAndRegistry: {
            readonly status: DistributionProvenanceReadback["status"];
            readonly localVersion: string;
            readonly npmLatestVersion: string | null;
            readonly currentSurfacePublished: boolean;
            readonly mcpRegistryAccepted: boolean;
            readonly mcpRegistryDiscoverable: boolean;
            readonly provenanceAttempted: boolean;
            readonly provenanceSupported: boolean | null;
            readonly proofGapReasonCodes: readonly string[];
            readonly evidenceRefs: readonly string[];
        };
        readonly customerGatewayLiveX402PaidProof: {
            readonly status: LiveX402RequirementReadback["status"];
            readonly customerGatewayCustodyPresent: boolean;
            readonly livePaidRetryPerformed: boolean;
            readonly terminalReadbackPresent: boolean;
            readonly signerInvocationPosture: "post_gateway_check_only" | "not_observed" | "unsafe_or_unknown";
            readonly proofGapReasonCodes: readonly string[];
            readonly evidenceRefs: readonly string[];
        };
        readonly authMdX402AdmissionPacket: {
            readonly packetVersion: "v0";
            readonly packetProjectorPresent: boolean;
            readonly refusalFirstTestsPassed: boolean;
            readonly redactedReadbackTestsPassed: boolean;
            readonly createsAuthority: boolean;
            readonly evidenceRefs: readonly string[];
        };
        readonly dualEnforcementPosture?: {
            readonly dualEnforcementPostureTestPassed: boolean;
            readonly mutationManifestGatingTestPassed: boolean;
            readonly evidenceRefs: readonly string[];
        };
        readonly perCustomerBypassScaffold?: {
            readonly customerOnboardingRef: string | null;
            readonly firstPartyDogfoodCustomerId: string | null;
            readonly evidenceRefs: readonly string[];
        };
    };
};
export type ProductCompletionReadback = ReturnType<typeof projectProductCompletionReadback>;
export declare function projectProductCompletionReadback(input: ProductCompletionReadbackInput): {
    proofKind: "product_completion_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: "completed" | "closed_with_hard_blocks" | "incomplete";
    scope: string;
    qualityGate: {
        readonly command: string;
        readonly passed: boolean;
        readonly evidenceRef: string;
    };
    gates: {
        gateId: ProductCompletionGateId;
        title: string;
        status: ProductCompletionGateStatus;
        blockers: string[];
        evidenceRefs: string[];
    }[];
    incompleteGateIds: ProductCompletionGateId[];
    hardBlockedGateIds: ProductCompletionGateId[];
    overclaimViolations: string[];
    commandRefs: readonly string[];
    evidenceRefs: string[];
    authorityBoundary: {
        createsRelease: false;
        publishesPackage: false;
        registersMcpServer: false;
        configuresHost: false;
        resolvesCredential: false;
        invokesSigner: false;
        createsPaymentPayload: false;
        createsPaymentSignature: false;
        exportsReceipt: false;
        hostsOperation: false;
        certifiesMarketplace: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsGatewayCheck: false;
        performsMutation: false;
    };
    nextMechanism: string;
};
