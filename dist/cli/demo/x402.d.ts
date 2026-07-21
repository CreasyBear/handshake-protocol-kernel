export declare function demoX402Command(input: {
    outDir: string;
}): Promise<import("..").CliOutputEnvelope<{
    schemaVersion: string;
    generatedAt: string;
    proofBoundary: string;
    actionClass: string;
    protectedSurfaceKind: string;
    invariant: string;
    authorityCreated: boolean;
    greenlightCreatedByCli: boolean;
    gatewayCheckPerformedByCli: boolean;
    mutationAttemptedByCli: boolean;
    credentialMaterialIncluded: boolean;
    paymentMaterialIncluded: boolean;
    hostedOperationClaimed: boolean;
    providerCustodyClaimed: boolean;
    phases: ({
        phase: string;
        expectedArtifact: string;
        boundary: string;
        authorityCreated: boolean;
    } | {
        phase: string;
        expectedArtifact: string;
        boundary: string;
        authorityCreated?: never;
    })[];
    paymentMaterialBoundary: {
        createdBeforeVerifiedGatewayCheck: boolean;
        includedInDossier: boolean;
        signerInvocationBoundary: string;
    };
    hostedCustodyBoundary: {
        liveProviderPostureRequiresExternalCustodyProof: boolean;
        localFixtureCannotClaimCustomerCustody: boolean;
        unsupportedLivePostureOutcome: string;
    };
    files: {
        json: string;
        markdown: string;
        installInput: string;
        probePosture: string;
        gatewayReadiness: string;
    };
    nonClaims: string[];
}>>;
