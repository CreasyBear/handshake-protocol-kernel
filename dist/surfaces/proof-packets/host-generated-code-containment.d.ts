import { type ProofGap } from "./shared";
export type HostGeneratedCodeContainmentStatus = "host_specific_containment_observed" | "blocked";
export type HostGeneratedCodeContainmentTranscriptBuildStatus = "packet_built" | "blocked";
export type HostGeneratedCodeContainmentReadbackInput = {
    readonly generatedAt: string;
    readonly commandRefs: readonly string[];
    readonly binding: HostGeneratedCodeContainmentBinding | null;
    readonly transcriptProof: HostGeneratedCodeContainmentTranscriptProof | null;
    readonly transcriptBuildReadback: HostGeneratedCodeContainmentTranscriptBuildReadback | null;
    readonly transcriptInput?: HostGeneratedCodeContainmentTranscriptInput;
    readonly profileTranscriptInput?: HostGeneratedCodeContainmentProfileTranscriptInput;
    readonly host: {
        readonly hostFamily: string;
        readonly runtimeAdapterId: string;
        readonly activationArtifactDigest: `sha256:${string}`;
        readonly transcriptRef: string | null;
        readonly transcriptDigest: `sha256:${string}` | null;
        readonly liveHostTranscriptPresent: boolean;
        readonly hostWideContainmentClaimed: boolean;
    };
    readonly dispatchInterception: {
        readonly proven: boolean;
        readonly evidenceRef: string | null;
        readonly protectedActionIds: readonly string[];
        readonly protectedActionContractIds: readonly string[];
    };
    readonly bypassCases: {
        readonly rawSiblingMutation: HostGeneratedCodeBypassCaseGroup;
        readonly dynamicToolConstruction: HostGeneratedCodeBypassCaseGroup;
        readonly truncatedGraph: HostGeneratedCodeBypassCaseGroup;
    };
    readonly evidenceRefs: readonly string[];
};
export type HostGeneratedCodeContainmentTranscriptInput = {
    readonly status: "not_provided" | "valid" | "invalid";
    readonly evidenceRef: string | null;
    readonly error: string | null;
};
export type HostGeneratedCodeContainmentProfileTranscriptInput = {
    readonly status: "not_provided" | "valid" | "invalid";
    readonly evidenceRef: string | null;
    readonly error: string | null;
    readonly selectedHostFamily: string | null;
    readonly selectionPosture: string | null;
    readonly rawSiblingAttemptResults: readonly {
        readonly routeId: string;
        readonly resultKind: string;
    }[];
    readonly proofGapReasonCodes: readonly string[];
};
export type HostGeneratedCodeContainmentTranscriptBuildInput = {
    readonly generatedAt: string;
    readonly commandRefs: readonly string[];
    readonly observation: HostGeneratedCodeContainmentTranscriptObservation;
    readonly transcriptSource: HostGeneratedCodeContainmentTranscriptSource | null;
    readonly evidenceRefs: readonly string[];
};
export type HostGeneratedCodeContainmentTranscriptSource = {
    readonly transcriptRef: string;
    readonly transcriptDigest: `sha256:${string}`;
    readonly evidenceRef: string;
    readonly digestVerified: boolean;
    readonly eventsVerified: boolean;
    readonly redactionVerified: boolean;
};
export type HostGeneratedCodeContainmentTranscriptCapturePosture = "live_host_adapter" | "source_fixture" | "profile_projection" | "unknown";
export type HostGeneratedCodeContainmentTranscriptObservation = {
    readonly host: {
        readonly hostFamily: string;
        readonly runtimeAdapterId: string;
        readonly activationArtifactDigest: `sha256:${string}`;
        readonly transcriptRef: string;
        readonly transcriptDigest: `sha256:${string}`;
        readonly hostWideContainmentClaimed: boolean;
    };
    readonly capture: {
        readonly capturePosture: HostGeneratedCodeContainmentTranscriptCapturePosture;
        readonly producerRef: string | null;
        readonly capturedAt: string | null;
        readonly evidenceRef: string | null;
    };
    readonly action: {
        readonly actionTypeId: string;
        readonly actionContractId: string;
        readonly actionContractDigest: `sha256:${string}`;
    };
    readonly dispatchInterception: {
        readonly proven: boolean;
        readonly evidenceRef: string;
        readonly protectedActionIds: readonly string[];
        readonly protectedActionContractIds: readonly string[];
    };
    readonly bypassCases: {
        readonly rawSiblingMutation: readonly HostGeneratedCodeTranscriptObservationCase[];
        readonly dynamicToolConstruction: readonly HostGeneratedCodeTranscriptObservationCase[];
        readonly truncatedGraph: readonly HostGeneratedCodeTranscriptObservationCase[];
    };
};
export type HostGeneratedCodeTranscriptObservationCase = {
    readonly caseId: string;
    readonly evidenceRef: string;
    readonly outcome: string;
};
export type HostGeneratedCodeContainmentBinding = {
    readonly actionTypeId: "x402_payment.exact";
    readonly actionContractId: string;
    readonly actionContractDigest: `sha256:${string}`;
    readonly transcriptRef: string;
    readonly transcriptDigest: `sha256:${string}`;
    readonly dispatchInterceptionEvidenceRef: string;
    readonly requiredBypassCaseIds: {
        readonly rawSiblingMutation: readonly string[];
        readonly dynamicToolConstruction: readonly string[];
        readonly truncatedGraph: readonly string[];
    };
};
export type HostGeneratedCodeBypassCaseGroup = {
    readonly refused: boolean;
    readonly caseIds: readonly string[];
    readonly evidenceRefs: readonly string[];
};
export type HostGeneratedCodeContainmentTranscriptProof = {
    readonly packetKind: "host_generated_code_containment_transcript";
    readonly packetVersion: "v0";
    readonly host: {
        readonly hostFamily: string;
        readonly runtimeAdapterId: string;
        readonly activationArtifactDigest: `sha256:${string}`;
        readonly transcriptRef: string;
        readonly transcriptDigest: `sha256:${string}`;
        readonly hostWideContainmentClaimed: false;
    };
    readonly capture: {
        readonly capturePosture: "live_host_adapter";
        readonly producerRef: string;
        readonly capturedAt: string;
        readonly evidenceRef: string;
    };
    readonly action: {
        readonly actionTypeId: "x402_payment.exact";
        readonly actionContractId: string;
        readonly actionContractDigest: `sha256:${string}`;
    };
    readonly dispatchInterception: {
        readonly proven: true;
        readonly evidenceRef: string;
        readonly protectedActionIds: readonly string[];
        readonly protectedActionContractIds: readonly string[];
    };
    readonly bypassCases: {
        readonly rawSiblingMutation: readonly HostGeneratedCodeTranscriptCase[];
        readonly dynamicToolConstruction: readonly HostGeneratedCodeTranscriptCase[];
        readonly truncatedGraph: readonly HostGeneratedCodeTranscriptCase[];
    };
};
export type HostGeneratedCodeTranscriptCase = {
    readonly caseId: string;
    readonly evidenceRef: string;
    readonly outcome: "refused";
};
export type HostGeneratedCodeContainmentReadback = ReturnType<typeof projectHostGeneratedCodeContainmentReadback>;
export type HostGeneratedCodeContainmentTranscriptBuildReadback = ReturnType<typeof projectHostGeneratedCodeContainmentTranscriptProof>;
export declare function projectHostGeneratedCodeContainmentTranscriptProof(input: HostGeneratedCodeContainmentTranscriptBuildInput): {
    proofKind: "host_generated_code_containment_transcript_build_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: HostGeneratedCodeContainmentTranscriptBuildStatus;
    transcriptSource: HostGeneratedCodeContainmentTranscriptSource | null;
    transcriptProof: HostGeneratedCodeContainmentTranscriptProof | null;
    commandRefs: readonly string[];
    evidenceRefs: string[];
    authorityBoundary: {
        configuresHost: false;
        performsGatewayCheck: false;
        provesHostSpecificDispatchInterception: boolean;
        provesHostWideContainment: false;
        certifiesNativeHost: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsMutation: false;
    };
    proofGaps: ProofGap[];
    nextMechanism: string;
};
export declare function projectHostGeneratedCodeContainmentReadback(input: HostGeneratedCodeContainmentReadbackInput): {
    proofKind: "host_generated_code_containment_readback";
    proofVersion: "proof-packets.v0.1";
    generatedAt: string;
    status: HostGeneratedCodeContainmentStatus;
    scope: string;
    binding: HostGeneratedCodeContainmentBinding | null;
    transcriptInput: HostGeneratedCodeContainmentTranscriptInput;
    profileTranscriptInput: HostGeneratedCodeContainmentProfileTranscriptInput;
    transcriptProof: HostGeneratedCodeContainmentTranscriptProof | null;
    transcriptBuildReadback: {
        proofKind: "host_generated_code_containment_transcript_build_readback";
        proofVersion: "proof-packets.v0.1";
        generatedAt: string;
        status: HostGeneratedCodeContainmentTranscriptBuildStatus;
        transcriptSource: HostGeneratedCodeContainmentTranscriptSource | null;
        transcriptProof: HostGeneratedCodeContainmentTranscriptProof | null;
        commandRefs: readonly string[];
        evidenceRefs: string[];
        authorityBoundary: {
            configuresHost: false;
            performsGatewayCheck: false;
            provesHostSpecificDispatchInterception: boolean;
            provesHostWideContainment: false;
            certifiesNativeHost: false;
            createsAuthority: false;
            createsPolicyDecision: false;
            createsGreenlight: false;
            performsMutation: false;
        };
        proofGaps: ProofGap[];
        nextMechanism: string;
    } | null;
    host: {
        readonly hostFamily: string;
        readonly runtimeAdapterId: string;
        readonly activationArtifactDigest: `sha256:${string}`;
        readonly transcriptRef: string | null;
        readonly transcriptDigest: `sha256:${string}` | null;
        readonly liveHostTranscriptPresent: boolean;
        readonly hostWideContainmentClaimed: boolean;
    };
    dispatchInterception: {
        readonly proven: boolean;
        readonly evidenceRef: string | null;
        readonly protectedActionIds: readonly string[];
        readonly protectedActionContractIds: readonly string[];
    };
    bypassCases: {
        readonly rawSiblingMutation: HostGeneratedCodeBypassCaseGroup;
        readonly dynamicToolConstruction: HostGeneratedCodeBypassCaseGroup;
        readonly truncatedGraph: HostGeneratedCodeBypassCaseGroup;
    };
    commandRefs: readonly string[];
    evidenceRefs: string[];
    authorityBoundary: {
        configuresHost: false;
        performsGatewayCheck: false;
        provesHostSpecificDispatchInterception: boolean;
        provesHostWideContainment: false;
        certifiesNativeHost: false;
        createsAuthority: false;
        createsPolicyDecision: false;
        createsGreenlight: false;
        performsMutation: false;
    };
    proofGaps: ProofGap[];
    nextMechanism: string;
};
