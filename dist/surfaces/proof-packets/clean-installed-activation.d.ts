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
    proofGaps: import("./shared").ProofGap[];
    nextMechanism: string;
};
