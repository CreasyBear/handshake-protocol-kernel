import { z } from "zod";
export declare const PackageReleaseStateSchema: z.ZodEnum<{
    registry_discoverable: "registry_discoverable";
    blocked_by_proof_gap: "blocked_by_proof_gap";
    ready_to_publish: "ready_to_publish";
    actually_published: "actually_published";
}>;
export type PackageReleaseState = z.infer<typeof PackageReleaseStateSchema>;
export declare const PackageReleaseAuthorityBoundarySchema: z.ZodObject<{
    createsAuthority: z.ZodLiteral<false>;
    createsPolicyDecision: z.ZodLiteral<false>;
    createsGreenlight: z.ZodLiteral<false>;
    performsGatewayCheck: z.ZodLiteral<false>;
    performsMutation: z.ZodLiteral<false>;
    holdsCustody: z.ZodLiteral<false>;
    hostsOperation: z.ZodLiteral<false>;
    certifiesMarketplace: z.ZodLiteral<false>;
    managesSettlement: z.ZodLiteral<false>;
    managesPayment: z.ZodLiteral<false>;
    establishesTrust: z.ZodLiteral<false>;
    enforcesHostWidePolicy: z.ZodLiteral<false>;
}, z.core.$strict>;
export type PackageReleaseAuthorityBoundary = z.infer<typeof PackageReleaseAuthorityBoundarySchema>;
export declare const packageReleaseAuthorityBoundary: {
    createsAuthority: false;
    createsPolicyDecision: false;
    createsGreenlight: false;
    performsGatewayCheck: false;
    performsMutation: false;
    holdsCustody: false;
    hostsOperation: false;
    certifiesMarketplace: false;
    managesSettlement: false;
    managesPayment: false;
    establishesTrust: false;
    enforcesHostWidePolicy: false;
};
export declare const PackageReleaseProofGapSchema: z.ZodObject<{
    reasonCode: z.ZodString;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type PackageReleaseProofGap = z.infer<typeof PackageReleaseProofGapSchema>;
export declare const PackageShapeProofSchema: z.ZodObject<{
    packDryRunChecked: z.ZodBoolean;
    requiredFilesPresent: z.ZodBoolean;
    forbiddenPathsAbsent: z.ZodBoolean;
    packageSurfaceAllowlisted: z.ZodBoolean;
    sourceTreeExcluded: z.ZodBoolean;
    repoInternalDocsExcluded: z.ZodBoolean;
    licenseFilesPresent: z.ZodBoolean;
    exportsReviewed: z.ZodBoolean;
    binShebangsChecked: z.ZodBoolean;
    cliSmokePassed: z.ZodBoolean;
    mcpStdioSmokePassed: z.ZodBoolean;
    metadataSynchronized: z.ZodBoolean;
    authorityBoundaryChecked: z.ZodBoolean;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type PackageShapeProof = z.infer<typeof PackageShapeProofSchema>;
export declare const AccountNamespaceProofSchema: z.ZodObject<{
    npmPackageName: z.ZodString;
    packageVersion: z.ZodString;
    npmNamespaceOwnership: z.ZodEnum<{
        proof_gap: "proof_gap";
        verified: "verified";
        not_verified: "not_verified";
    }>;
    mcpNamespaceOwnership: z.ZodEnum<{
        proof_gap: "proof_gap";
        verified: "verified";
        not_verified: "not_verified";
    }>;
    twoFactorPosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        verified: "verified";
        not_verified: "not_verified";
    }>;
    publishTokenPosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        trusted_publishing_preferred: "trusted_publishing_preferred";
        long_lived_token_risk: "long_lived_token_risk";
    }>;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AccountNamespaceProof = z.infer<typeof AccountNamespaceProofSchema>;
export declare const PublishOperationProofSchema: z.ZodObject<{
    npmPublished: z.ZodBoolean;
    packageName: z.ZodString;
    packageVersion: z.ZodString;
    publishedAt: z.ZodNullable<z.ZodString>;
    publishEvidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type PublishOperationProof = z.infer<typeof PublishOperationProofSchema>;
export declare const ProvenanceProofSchema: z.ZodObject<{
    posture: z.ZodEnum<{
        proof_gap: "proof_gap";
        not_requested: "not_requested";
        trusted_publishing_configured: "trusted_publishing_configured";
        long_lived_token_risk_accepted: "long_lived_token_risk_accepted";
    }>;
    provenanceAttestationPublished: z.ZodBoolean;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ProvenanceProof = z.infer<typeof ProvenanceProofSchema>;
export declare const RegistryDiscoverabilityProofSchema: z.ZodObject<{
    mcpRegistryAccepted: z.ZodBoolean;
    discoverabilityChecked: z.ZodBoolean;
    registryEvidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type RegistryDiscoverabilityProof = z.infer<typeof RegistryDiscoverabilityProofSchema>;
export declare const RuntimeSmokeProofSchema: z.ZodObject<{
    localPackSmokePassed: z.ZodBoolean;
    cleanInstallSmokePassed: z.ZodBoolean;
    installedBinsSmokePassed: z.ZodBoolean;
    installedExportsSmokePassed: z.ZodBoolean;
    proposalEvidenceReadOnlySmokePassed: z.ZodBoolean;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type RuntimeSmokeProof = z.infer<typeof RuntimeSmokeProofSchema>;
export declare const PackageReleaseProofInputSchema: z.ZodObject<{
    packageName: z.ZodString;
    packageVersion: z.ZodString;
    mcpName: z.ZodString;
    packageShapeProof: z.ZodObject<{
        packDryRunChecked: z.ZodBoolean;
        requiredFilesPresent: z.ZodBoolean;
        forbiddenPathsAbsent: z.ZodBoolean;
        packageSurfaceAllowlisted: z.ZodBoolean;
        sourceTreeExcluded: z.ZodBoolean;
        repoInternalDocsExcluded: z.ZodBoolean;
        licenseFilesPresent: z.ZodBoolean;
        exportsReviewed: z.ZodBoolean;
        binShebangsChecked: z.ZodBoolean;
        cliSmokePassed: z.ZodBoolean;
        mcpStdioSmokePassed: z.ZodBoolean;
        metadataSynchronized: z.ZodBoolean;
        authorityBoundaryChecked: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    accountNamespaceProof: z.ZodObject<{
        npmPackageName: z.ZodString;
        packageVersion: z.ZodString;
        npmNamespaceOwnership: z.ZodEnum<{
            proof_gap: "proof_gap";
            verified: "verified";
            not_verified: "not_verified";
        }>;
        mcpNamespaceOwnership: z.ZodEnum<{
            proof_gap: "proof_gap";
            verified: "verified";
            not_verified: "not_verified";
        }>;
        twoFactorPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            verified: "verified";
            not_verified: "not_verified";
        }>;
        publishTokenPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            trusted_publishing_preferred: "trusted_publishing_preferred";
            long_lived_token_risk: "long_lived_token_risk";
        }>;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    publishOperationProof: z.ZodObject<{
        npmPublished: z.ZodBoolean;
        packageName: z.ZodString;
        packageVersion: z.ZodString;
        publishedAt: z.ZodNullable<z.ZodString>;
        publishEvidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    provenanceProof: z.ZodObject<{
        posture: z.ZodEnum<{
            proof_gap: "proof_gap";
            not_requested: "not_requested";
            trusted_publishing_configured: "trusted_publishing_configured";
            long_lived_token_risk_accepted: "long_lived_token_risk_accepted";
        }>;
        provenanceAttestationPublished: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    registryDiscoverabilityProof: z.ZodObject<{
        mcpRegistryAccepted: z.ZodBoolean;
        discoverabilityChecked: z.ZodBoolean;
        registryEvidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    runtimeSmokeProof: z.ZodObject<{
        localPackSmokePassed: z.ZodBoolean;
        cleanInstallSmokePassed: z.ZodBoolean;
        installedBinsSmokePassed: z.ZodBoolean;
        installedExportsSmokePassed: z.ZodBoolean;
        proposalEvidenceReadOnlySmokePassed: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    proofGaps: z.ZodArray<z.ZodObject<{
        reasonCode: z.ZodString;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type PackageReleaseProofInput = z.infer<typeof PackageReleaseProofInputSchema>;
export declare const PackageReleaseProofSchema: z.ZodObject<{
    packageName: z.ZodString;
    packageVersion: z.ZodString;
    mcpName: z.ZodString;
    packageShapeProof: z.ZodObject<{
        packDryRunChecked: z.ZodBoolean;
        requiredFilesPresent: z.ZodBoolean;
        forbiddenPathsAbsent: z.ZodBoolean;
        packageSurfaceAllowlisted: z.ZodBoolean;
        sourceTreeExcluded: z.ZodBoolean;
        repoInternalDocsExcluded: z.ZodBoolean;
        licenseFilesPresent: z.ZodBoolean;
        exportsReviewed: z.ZodBoolean;
        binShebangsChecked: z.ZodBoolean;
        cliSmokePassed: z.ZodBoolean;
        mcpStdioSmokePassed: z.ZodBoolean;
        metadataSynchronized: z.ZodBoolean;
        authorityBoundaryChecked: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    accountNamespaceProof: z.ZodObject<{
        npmPackageName: z.ZodString;
        packageVersion: z.ZodString;
        npmNamespaceOwnership: z.ZodEnum<{
            proof_gap: "proof_gap";
            verified: "verified";
            not_verified: "not_verified";
        }>;
        mcpNamespaceOwnership: z.ZodEnum<{
            proof_gap: "proof_gap";
            verified: "verified";
            not_verified: "not_verified";
        }>;
        twoFactorPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            verified: "verified";
            not_verified: "not_verified";
        }>;
        publishTokenPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            trusted_publishing_preferred: "trusted_publishing_preferred";
            long_lived_token_risk: "long_lived_token_risk";
        }>;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    publishOperationProof: z.ZodObject<{
        npmPublished: z.ZodBoolean;
        packageName: z.ZodString;
        packageVersion: z.ZodString;
        publishedAt: z.ZodNullable<z.ZodString>;
        publishEvidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    provenanceProof: z.ZodObject<{
        posture: z.ZodEnum<{
            proof_gap: "proof_gap";
            not_requested: "not_requested";
            trusted_publishing_configured: "trusted_publishing_configured";
            long_lived_token_risk_accepted: "long_lived_token_risk_accepted";
        }>;
        provenanceAttestationPublished: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    registryDiscoverabilityProof: z.ZodObject<{
        mcpRegistryAccepted: z.ZodBoolean;
        discoverabilityChecked: z.ZodBoolean;
        registryEvidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    runtimeSmokeProof: z.ZodObject<{
        localPackSmokePassed: z.ZodBoolean;
        cleanInstallSmokePassed: z.ZodBoolean;
        installedBinsSmokePassed: z.ZodBoolean;
        installedExportsSmokePassed: z.ZodBoolean;
        proposalEvidenceReadOnlySmokePassed: z.ZodBoolean;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    proofGaps: z.ZodArray<z.ZodObject<{
        reasonCode: z.ZodString;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    proofKind: z.ZodLiteral<"package_release_proof">;
    releaseState: z.ZodEnum<{
        registry_discoverable: "registry_discoverable";
        blocked_by_proof_gap: "blocked_by_proof_gap";
        ready_to_publish: "ready_to_publish";
        actually_published: "actually_published";
    }>;
    readyToPublish: z.ZodBoolean;
    actuallyPublished: z.ZodBoolean;
    registryDiscoverable: z.ZodBoolean;
    authorityBoundary: z.ZodObject<{
        createsAuthority: z.ZodLiteral<false>;
        createsPolicyDecision: z.ZodLiteral<false>;
        createsGreenlight: z.ZodLiteral<false>;
        performsGatewayCheck: z.ZodLiteral<false>;
        performsMutation: z.ZodLiteral<false>;
        holdsCustody: z.ZodLiteral<false>;
        hostsOperation: z.ZodLiteral<false>;
        certifiesMarketplace: z.ZodLiteral<false>;
        managesSettlement: z.ZodLiteral<false>;
        managesPayment: z.ZodLiteral<false>;
        establishesTrust: z.ZodLiteral<false>;
        enforcesHostWidePolicy: z.ZodLiteral<false>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type PackageReleaseProof = z.infer<typeof PackageReleaseProofSchema>;
export declare function projectPackageReleaseProof(inputValue: PackageReleaseProofInput): PackageReleaseProof;
