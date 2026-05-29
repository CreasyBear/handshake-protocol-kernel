import { type ProofGap } from "./shared";
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
        targetServer: import("./codex-toml").CodexMcpServerRecord | null;
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
