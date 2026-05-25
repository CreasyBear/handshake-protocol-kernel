export declare const PROOF_PACKET_VERSION: "proof-packets.v0.1";
export type ProofGap = {
    readonly reasonCode: string;
    readonly nonClaim: string;
};
export type NonAuthorityBoundary = {
    readonly createsAuthority: false;
    readonly createsPolicyDecision: false;
    readonly createsGreenlight: false;
    readonly performsGatewayCheck: false;
    readonly performsMutation: false;
};
export declare const nonAuthorityBoundary: NonAuthorityBoundary;
export type CleanInstalledActivationProofInput = {
    readonly generatedAt: string;
    readonly package: {
        readonly name: string;
        readonly version: string;
        readonly packedFile: string;
        readonly localArtifactPath: string | null;
        readonly tarballSha256: string;
        readonly tarballSizeBytes: number;
        readonly npmIntegrity: string | null;
        readonly npmShasum: string | null;
        readonly fileCount: number | null;
    };
    readonly requiredInstalledSurfaces: {
        readonly bins: readonly string[];
        readonly exports: readonly string[];
        readonly protectedToolExports: readonly string[];
    };
    readonly activationEvidence: {
        readonly facadeImportSource: string;
        readonly runtimeDispatchPrepared: boolean;
        readonly gatewayAdmissionStatus: string;
        readonly downstreamOutcomeStatus: string;
        readonly policyDecision: string;
        readonly gateDecision: string;
        readonly changedParameterDecision: string;
        readonly replayDecision: string;
        readonly signerInvocationsAfterGatewayAdmission: number;
        readonly signerInvocationsAfterReplay: number;
        readonly hostileGeneratedExecutionCaseIds: readonly string[];
        readonly rawCredentialMaterialVisible: boolean;
        readonly outputRefs: readonly string[];
    };
    readonly commandRefs: readonly string[];
};
export type CleanInstalledActivationProof = ReturnType<typeof projectCleanInstalledActivationProof>;
export declare function projectCleanInstalledActivationProof(input: CleanInstalledActivationProofInput): {
    proofKind: "clean_installed_activation_proof";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: "local_activation_passed";
    scope: string;
    package: {
        readonly name: string;
        readonly version: string;
        readonly packedFile: string;
        readonly localArtifactPath: string | null;
        readonly tarballSha256: string;
        readonly tarballSizeBytes: number;
        readonly npmIntegrity: string | null;
        readonly npmShasum: string | null;
        readonly fileCount: number | null;
    };
    requiredInstalledSurfaces: {
        readonly bins: readonly string[];
        readonly exports: readonly string[];
        readonly protectedToolExports: readonly string[];
    };
    activationEvidence: {
        readonly facadeImportSource: string;
        readonly runtimeDispatchPrepared: boolean;
        readonly gatewayAdmissionStatus: string;
        readonly downstreamOutcomeStatus: string;
        readonly policyDecision: string;
        readonly gateDecision: string;
        readonly changedParameterDecision: string;
        readonly replayDecision: string;
        readonly signerInvocationsAfterGatewayAdmission: number;
        readonly signerInvocationsAfterReplay: number;
        readonly hostileGeneratedExecutionCaseIds: readonly string[];
        readonly rawCredentialMaterialVisible: boolean;
        readonly outputRefs: readonly string[];
    };
    commandRefs: readonly string[];
    evidenceRefs: string[];
    authorityBoundary: {
        resolvesCredential: false;
        invokesSigner: false;
        createsPaymentPayload: false;
        configuresLiveHost: false;
        provesMcpRegistryDiscoverability: false;
        provesPublicNpmCurrentSurface: false;
        provesCustomerGatewayCustody: false;
        provesLivePaidExecution: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsGatewayCheck: false;
        performsMutation: false;
    };
    proofGaps: ProofGap[];
    nextMechanism: string;
};
export type CodexHostActivationReadbackInput = {
    readonly generatedAt: string;
    readonly commandRefs: readonly string[];
    readonly configPath: string;
    readonly configExists: boolean;
    readonly configSha256: string | null;
    readonly configText?: string;
    readonly observedMcpServers?: readonly string[];
    readonly expectedServer?: CodexHostExpectedServer;
    readonly hostToolInvocation?: CodexHostToolInvocationReadback;
    readonly expectedArtifact: {
        readonly path: string;
        readonly exists: boolean;
        readonly sha256: string | null;
        readonly sizeBytes: number | null;
    } | null;
};
export type CodexHostExpectedServer = {
    readonly name: string;
    readonly command: string;
    readonly args: readonly string[];
    readonly executablePath: string;
    readonly artifactSha256: string;
};
export type CodexMcpServerRecord = {
    readonly name: string;
    readonly command: string | null;
    readonly args: readonly string[] | null;
    readonly startupTimeoutSec: number | null;
    readonly envKeys: readonly string[];
};
export type CodexHostToolInvocationReadback = {
    readonly proofRef: string;
    readonly toolVisible: boolean;
    readonly toolCallAttempted: boolean;
    readonly outcome: string;
    readonly nonAuthorityClaims: readonly string[];
};
export type CodexHostActivationReadback = ReturnType<typeof projectCodexHostActivationReadback>;
export declare function projectCodexHostActivationReadback(input: CodexHostActivationReadbackInput): {
    proofKind: "codex_host_activation_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: "blocked" | "host_tool_invocation_observed" | "configured_unverified";
    scope: string;
    config: {
        path: string;
        exists: boolean;
        sha256: string | null;
        observedMcpServers: string[];
        targetServerName: string;
        targetPresent: boolean;
        targetServer: CodexMcpServerRecord | null;
        expectedServer: CodexHostExpectedServer | null;
        expectedServerMatches: boolean;
        hostToolInvocation: CodexHostToolInvocationReadback | null;
        hostToolInvocationObserved: boolean;
    };
    expectedArtifact: {
        readonly path: string;
        readonly exists: boolean;
        readonly sha256: string | null;
        readonly sizeBytes: number | null;
    } | null;
    commandRefs: readonly string[];
    evidenceRefs: string[];
    authorityBoundary: {
        resolvesCredential: false;
        invokesSigner: false;
        createsPaymentPayload: false;
        configuresLiveHost: false;
        observesHostToolInvocation: boolean;
        provesHostWideContainment: false;
        provesMcpRegistryDiscoverability: false;
        provesCustomerGatewayCustody: false;
        provesLivePaidExecution: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsGatewayCheck: false;
        performsMutation: false;
    };
    proofGaps: ProofGap[];
    nextMechanism: string;
};
export declare function parseCodexMcpServerNames(configText: string): string[];
export declare function parseCodexMcpServerRecords(configText: string): CodexMcpServerRecord[];
export declare function buildCodexMcpServerTomlBlock(input: {
    readonly name: string;
    readonly command: string;
    readonly args: readonly string[];
    readonly startupTimeoutSec?: number;
}): string;
export declare function upsertCodexMcpServerToml(input: {
    readonly existingToml: string;
    readonly serverName: string;
    readonly serverBlockToml: string;
}): {
    changed: boolean;
    toml: string;
};
export type DistributionProvenanceReadbackInput = {
    readonly generatedAt: string;
    readonly localPackage: {
        readonly name: string;
        readonly version: string;
        readonly mcpName: string;
        readonly serverJsonName: string;
        readonly serverJsonVersion: string;
        readonly exports: readonly string[];
    };
    readonly npmLatest: {
        readonly url: string;
        readonly status: number | null;
        readonly version: string | null;
        readonly tarball: string | null;
        readonly integrity: string | null;
        readonly shasum: string | null;
        readonly signatureCount: number;
        readonly fileCount: number | null;
        readonly exports: readonly string[];
    };
    readonly mcpRegistry: {
        readonly lookupUrl: string;
        readonly lookupStatus: number | null;
        readonly lookupProblemTitle: string | null;
        readonly searchUrl: string;
        readonly searchStatus: number | null;
        readonly searchCount: number | null;
    };
    readonly publishAttempt?: DistributionPublishAttemptReadback;
    readonly evidenceRefs: readonly string[];
    readonly commandRefs: readonly string[];
};
export type DistributionProvenanceReadback = ReturnType<typeof projectDistributionProvenanceReadback>;
export type DistributionPublishAttemptReadback = {
    readonly attempted: boolean;
    readonly commandRef: string;
    readonly status: "not_attempted" | "failed" | "succeeded";
    readonly provenanceRequested: boolean;
    readonly provenanceSupported: boolean | null;
    readonly errorCode: string | null;
    readonly errorMessage: string | null;
    readonly evidenceRef: string | null;
};
export declare function projectDistributionProvenanceReadback(input: DistributionProvenanceReadbackInput): {
    proofKind: "distribution_provenance_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: string;
    scope: string;
    localPackage: {
        exports: string[];
        name: string;
        version: string;
        mcpName: string;
        serverJsonName: string;
        serverJsonVersion: string;
    };
    npmLatest: {
        exports: string[];
        missingLocalExports: string[];
        extraPublishedExports: string[];
        currentSurfacePublished: boolean;
        url: string;
        status: number | null;
        version: string | null;
        tarball: string | null;
        integrity: string | null;
        shasum: string | null;
        signatureCount: number;
        fileCount: number | null;
    };
    mcpRegistry: {
        accepted: boolean;
        discoverable: boolean;
        lookupUrl: string;
        lookupStatus: number | null;
        lookupProblemTitle: string | null;
        searchUrl: string;
        searchStatus: number | null;
        searchCount: number | null;
    };
    publishAttempt: DistributionPublishAttemptReadback | null;
    commandRefs: readonly string[];
    evidenceRefs: readonly string[];
    authorityBoundary: {
        holdsCustody: false;
        hostsOperation: false;
        certifiesMarketplace: false;
        managesSettlement: false;
        managesPayment: false;
        establishesTrust: false;
        enforcesHostWidePolicy: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsGatewayCheck: false;
        performsMutation: false;
    };
    proofGaps: ProofGap[];
    nextMechanism: string;
};
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
export type ProductCompletionGateId = "codex_local_host_activation" | "public_distribution_and_registry" | "customer_gateway_live_x402_paid_proof" | "auth_md_x402_admission_packet";
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
    };
};
export type ProductCompletionReadback = ReturnType<typeof projectProductCompletionReadback>;
export declare function projectProductCompletionReadback(input: ProductCompletionReadbackInput): {
    proofKind: "product_completion_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: "completed" | "incomplete" | "closed_with_hard_blocks";
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
