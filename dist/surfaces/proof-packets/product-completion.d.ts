import type { CodexHostActivationReadback } from "./codex-host-activation";
import type { DistributionProvenanceReadback } from "./distribution-provenance";
import type { LiveX402RequirementReadback } from "./live-x402-requirement";
import { type ProductCompletionGateId } from "./product-completion-contract";
export type { ProductCompletionGateId };
export type ProductCompletionGateStatus = "completed" | "hard_blocked" | "incomplete";
export type CustomerEdgeCloudRepoBoundary = "not_captured" | "same_repo_fixture" | "separate_cloud_repo";
export type CustomerEdgeCloudControlPlaneSourceProofStatus = "blocked" | "source_control_plane_verified";
export type CustomerEdgeCloudTransportParityProofStatus = "blocked" | "source_parity_verified" | "remote_middleware_e2e_verified";
export type HostedProviderCallerIdentityProofStatus = "blocked" | "provider_deployment_verified";
export type HostedProviderCallerIdentityDeploymentBoundary = "not_captured" | "local_fixture" | "deployed_provider";
export type HostedProviderCallerIdentityVerifierStrategy = "not_configured" | "local_test_verifier" | "clerk_session" | "oauth_oidc_jwks" | "cloudflare_access_jwt" | "pinned_jwks" | "custom_server_verifier";
export type HostedProviderCallerIdentityVerificationPosture = "not_observed" | "provider_sdk_verified" | "provider_jwks_verified" | "provider_webhook_verified" | "service_credential_verified" | "fixture_verified" | "custom_verified";
export type HostedProviderCallerIdentityProofGateInput = {
    readonly status: HostedProviderCallerIdentityProofStatus;
    readonly deploymentBoundary: HostedProviderCallerIdentityDeploymentBoundary;
    readonly verifierStrategy: HostedProviderCallerIdentityVerifierStrategy;
    readonly providerVerificationPosture: HostedProviderCallerIdentityVerificationPosture;
    readonly productionEligibleAdapterMode: boolean;
    readonly normalizedCallerIdentityEvidencePresent: boolean;
    readonly rawIdentityMaterialPersisted: boolean;
    readonly authorityCreated: boolean;
    readonly proofGapReasonCodes: readonly string[];
    readonly evidenceRefs: readonly string[];
};
export type CustomerEdgeCloudControlPlaneSourceProofGateInput = {
    readonly status: CustomerEdgeCloudControlPlaneSourceProofStatus;
    readonly cloudRepoBoundary: CustomerEdgeCloudRepoBoundary;
    readonly middlewareContractDocPresent: boolean;
    readonly sharedSchemaPackagePresent: boolean;
    readonly configPullRoutePresent: boolean;
    readonly eventIngestRoutePresent: boolean;
    readonly registerRoutePresent: boolean;
    readonly callbackPushSourcePresent: boolean;
    readonly publicReadbackSourcePresent: boolean;
    readonly aeRefsReadbackSourcePresent: boolean;
    readonly deploymentEvidenceRunbookPresent: boolean;
    readonly cloudNeverIssuesAuthorityBoundaryPresent: boolean;
    readonly cloudAuthorityCreated: boolean;
    readonly aeAuthorityCreated: boolean;
    readonly downstreamMutationAuthorityCreated: boolean;
    readonly proofGapReasonCodes: readonly string[];
    readonly evidenceRefs: readonly string[];
};
export type CustomerEdgeCloudTransportParityProofGateInput = {
    readonly status: CustomerEdgeCloudTransportParityProofStatus;
    readonly cloudRepoBoundary: CustomerEdgeCloudRepoBoundary;
    readonly kernelRouteBoundHmacPresent: boolean;
    readonly cloudSharedRouteBoundHmacPresent: boolean;
    readonly remoteDeploymentEvidencePresent: boolean;
    readonly middlewareE2EEvidencePresent: boolean;
    readonly remoteConfigPullObserved: boolean;
    readonly remoteEventIngestObserved: boolean;
    readonly remoteCallbackPushObserved: boolean;
    readonly remoteReadbackObserved: boolean;
    readonly handlerWithheldBeforeLeaseObserved: boolean;
    readonly cloudAuthorityCreated: boolean;
    readonly aeAuthorityCreated: boolean;
    readonly downstreamMutationAuthorityCreated: boolean;
    readonly proofGapReasonCodes: readonly string[];
    readonly evidenceRefs: readonly string[];
};
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
        readonly customerEdgeCloudControlPlaneSourceProof: CustomerEdgeCloudControlPlaneSourceProofGateInput;
        readonly customerEdgeCloudTransportParityProof: CustomerEdgeCloudTransportParityProofGateInput;
        readonly hostedProviderCallerIdentityProof: HostedProviderCallerIdentityProofGateInput;
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
export type ProductCompletionSourceEvidence = {
    readonly codexLocalHostActivation?: Partial<ProductCompletionReadbackInput["gates"]["codexLocalHostActivation"]>;
    readonly publicDistributionAndRegistry?: Partial<ProductCompletionReadbackInput["gates"]["publicDistributionAndRegistry"]>;
    readonly customerGatewayLiveX402PaidProof?: Partial<ProductCompletionReadbackInput["gates"]["customerGatewayLiveX402PaidProof"]>;
    readonly authMdX402AdmissionPacket?: Partial<ProductCompletionReadbackInput["gates"]["authMdX402AdmissionPacket"]>;
    readonly customerEdgeCloudControlPlaneSourceProof?: Partial<ProductCompletionReadbackInput["gates"]["customerEdgeCloudControlPlaneSourceProof"]>;
    readonly customerEdgeCloudTransportParityProof?: Partial<ProductCompletionReadbackInput["gates"]["customerEdgeCloudTransportParityProof"]>;
    readonly hostedProviderCallerIdentityProof?: Partial<ProductCompletionReadbackInput["gates"]["hostedProviderCallerIdentityProof"]>;
    readonly dualEnforcementPosture?: ProductCompletionReadbackInput["gates"]["dualEnforcementPosture"];
    readonly perCustomerBypassScaffold?: ProductCompletionReadbackInput["gates"]["perCustomerBypassScaffold"];
};
export type ProductCompletionSourceEvidenceInput = {
    readonly generatedAt: string;
    readonly commandRefs?: readonly string[];
    readonly localPackage: {
        readonly name: string;
        readonly version: string;
        readonly mcpName: string;
    };
    readonly qualityGate?: {
        readonly passed: boolean;
        readonly evidenceRef: string;
    };
    readonly sourceEvidence?: ProductCompletionSourceEvidence;
};
export type ProductCompletionReadback = ReturnType<typeof projectProductCompletionReadback>;
export declare function productCompletionReadbackInputFromSourceEvidence(input: ProductCompletionSourceEvidenceInput): ProductCompletionReadbackInput;
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
