export declare function hostDoctorCommand(input: {
    cwd: string;
}): Promise<import("..").CliOutputEnvelope<{
    evidenceKind: "cli_diagnostic";
    liveHostVerificationStatus: "not_performed";
    configMutationPerformedByDoctor: boolean;
    attestationEvidence: {
        bindingDigestRefs: {
            configRef: string;
            workspaceRef: string;
            trustBundleRef: string | null;
        };
        policyVersionDigest: string | null;
        gatewayReadinessDigest: string | null;
    };
    attestationEvidenceRef: string;
    attestationDigest: `sha256:${string}`;
    bindingDigestInputs: {
        configRef: string;
        workspaceRef: string;
        trustBundleRef: string | null;
    };
    status: "ready" | "not_ready";
    reasonCodes: import("../local-project").DoctorReasonCode[];
    projectId: string | null;
    configRef: string;
    workspaceRef: string;
    stateRootRef: string | null;
    roleCredentialPosture: import("../local-project").RoleCredentialPosture[];
    trustBundleRef: string | null;
    x402InstallRef: string | null;
    x402ProbeReportRef: string | null;
    x402GatewayReadinessRef: string | null;
    checkedRoles: readonly import("../local-project").CliRoleName[];
}>>;
