import { z } from "zod";
import { type ActionContract, type GatewayCheckAttempt, type Receipt, type SurfaceOperationReconciliation } from "../../protocol/public/schemas";
import { type PackageInstallParameters } from "./gateway";
export declare const packageInstallMaterialAdapterPack: {
    adapterPackId: string;
    adapterPackVersion: string;
    actionFamily: string;
    protectedSurfaceKind: string;
    parameterSchemaRef: string;
    endpointEvidenceSchemaRef: string;
    installCompilerRef: string;
    policyRulePackRef: string;
    gatewayObservedParameterValidatorRef: string;
    receiptEvidenceMapperRef: string;
    bypassProbeKinds: ("credential_custody" | "raw_sibling_blocking" | "mcp_direct_call_blocking" | "token_passthrough_blocking" | "wrapper_drift" | "failure_closed")[];
    hostileFixtureRefs: string[];
};
export declare const PackageInstallMaterialEvidenceStatusSchema: z.ZodEnum<{
    unverified: "unverified";
    proof_gap: "proof_gap";
    unavailable: "unavailable";
    verified: "verified";
    not_requested: "not_requested";
}>;
export type PackageInstallMaterialEvidenceStatus = z.infer<typeof PackageInstallMaterialEvidenceStatusSchema>;
export declare const PackageInstallMaterialEvidenceSchema: z.ZodObject<{
    evidenceKind: z.ZodLiteral<"package_install_material_evidence">;
    adapterPackId: z.ZodLiteral<"adapter_pack_package_install_material">;
    packageName: z.ZodString;
    versionRange: z.ZodString;
    packageManager: z.ZodString;
    registryRef: z.ZodString;
    workspaceRef: z.ZodNullable<z.ZodString>;
    manifestRef: z.ZodNullable<z.ZodString>;
    lockfileRef: z.ZodNullable<z.ZodString>;
    manifestActivationBoundary: z.ZodLiteral<true>;
    lifecycleScriptPolicy: z.ZodEnum<{
        unknown: "unknown";
        blocked: "blocked";
        allowed: "allowed";
    }>;
    lifecycleScriptExecutionPosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        blocked_by_default: "blocked_by_default";
        separate_contract_required: "separate_contract_required";
    }>;
    npmProvenanceStatus: z.ZodEnum<{
        unverified: "unverified";
        proof_gap: "proof_gap";
        unavailable: "unavailable";
        verified: "verified";
        not_requested: "not_requested";
    }>;
    npmSignatureStatus: z.ZodEnum<{
        unverified: "unverified";
        proof_gap: "proof_gap";
        unavailable: "unavailable";
        verified: "verified";
        not_requested: "not_requested";
    }>;
    registryIntegrityStatus: z.ZodEnum<{
        unverified: "unverified";
        proof_gap: "proof_gap";
        unavailable: "unavailable";
        verified: "verified";
        not_requested: "not_requested";
    }>;
    tarballIntegrityDigest: z.ZodNullable<z.ZodString>;
    bunLockfileEvidenceRole: z.ZodLiteral<"local_reconstruction_only">;
    resolvedMaterialDigest: z.ZodNullable<z.ZodString>;
    resolvedMaterialEvidenceRefs: z.ZodArray<z.ZodString>;
    evidenceRefs: z.ZodArray<z.ZodString>;
    proofGapReasonCodes: z.ZodArray<z.ZodString>;
    packageSafetyProven: z.ZodLiteral<false>;
    provenanceProvesBenignCode: z.ZodLiteral<false>;
    bunProvenanceVerified: z.ZodLiteral<false>;
}, z.core.$strict>;
export type PackageInstallMaterialEvidence = z.infer<typeof PackageInstallMaterialEvidenceSchema>;
export declare const PackageInstallAdapterEvidenceReportSchema: z.ZodObject<{
    reportKind: z.ZodLiteral<"package_install_adapter_evidence_report">;
    adapterPackId: z.ZodLiteral<"adapter_pack_package_install_material">;
    adapterPackVersion: z.ZodLiteral<"v1">;
    action: z.ZodObject<{
        actionContractId: z.ZodString;
        actionClass: z.ZodLiteral<"package.install">;
        resourceRef: z.ZodString;
        packageName: z.ZodString;
        versionRange: z.ZodString;
    }, z.core.$strict>;
    authority: z.ZodObject<{
        greenlightId: z.ZodString;
        gatewayId: z.ZodString;
        gateAttemptId: z.ZodString;
        gatewayDecision: z.ZodString;
        verifiedGatewayCheckRequired: z.ZodLiteral<true>;
        runtimeIngressAuthority: z.ZodLiteral<false>;
        cliAuthority: z.ZodLiteral<false>;
        mcpAuthority: z.ZodLiteral<false>;
        reportAuthority: z.ZodLiteral<false>;
    }, z.core.$strict>;
    exactContract: z.ZodObject<{
        contractDigest: z.ZodString;
        paramsDigest: z.ZodString;
        idempotencyKey: z.ZodString;
    }, z.core.$strict>;
    evidence: z.ZodObject<{
        evidenceKind: z.ZodLiteral<"package_install_material_evidence">;
        adapterPackId: z.ZodLiteral<"adapter_pack_package_install_material">;
        packageName: z.ZodString;
        versionRange: z.ZodString;
        packageManager: z.ZodString;
        registryRef: z.ZodString;
        workspaceRef: z.ZodNullable<z.ZodString>;
        manifestRef: z.ZodNullable<z.ZodString>;
        lockfileRef: z.ZodNullable<z.ZodString>;
        manifestActivationBoundary: z.ZodLiteral<true>;
        lifecycleScriptPolicy: z.ZodEnum<{
            unknown: "unknown";
            blocked: "blocked";
            allowed: "allowed";
        }>;
        lifecycleScriptExecutionPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            blocked_by_default: "blocked_by_default";
            separate_contract_required: "separate_contract_required";
        }>;
        npmProvenanceStatus: z.ZodEnum<{
            unverified: "unverified";
            proof_gap: "proof_gap";
            unavailable: "unavailable";
            verified: "verified";
            not_requested: "not_requested";
        }>;
        npmSignatureStatus: z.ZodEnum<{
            unverified: "unverified";
            proof_gap: "proof_gap";
            unavailable: "unavailable";
            verified: "verified";
            not_requested: "not_requested";
        }>;
        registryIntegrityStatus: z.ZodEnum<{
            unverified: "unverified";
            proof_gap: "proof_gap";
            unavailable: "unavailable";
            verified: "verified";
            not_requested: "not_requested";
        }>;
        tarballIntegrityDigest: z.ZodNullable<z.ZodString>;
        bunLockfileEvidenceRole: z.ZodLiteral<"local_reconstruction_only">;
        resolvedMaterialDigest: z.ZodNullable<z.ZodString>;
        resolvedMaterialEvidenceRefs: z.ZodArray<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString>;
        proofGapReasonCodes: z.ZodArray<z.ZodString>;
        packageSafetyProven: z.ZodLiteral<false>;
        provenanceProvesBenignCode: z.ZodLiteral<false>;
        bunProvenanceVerified: z.ZodLiteral<false>;
    }, z.core.$strict>;
    outcome: z.ZodObject<{
        receiptId: z.ZodString;
        receiptDigest: z.ZodString;
        finalityStatus: z.ZodEnum<{
            unknown: "unknown";
            pending: "pending";
            final: "final";
            suspect: "suspect";
        }>;
        downstreamExecutionStatus: z.ZodString;
        reconciliationStatus: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    proofGaps: z.ZodArray<z.ZodString>;
    bypassPosture: z.ZodObject<{
        requiredProbeKinds: z.ZodArray<z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>>;
        hostileFixtureRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    reconstruction: z.ZodObject<{
        auditChainDigest: z.ZodString;
        streamEventIds: z.ZodArray<z.ZodString>;
        materialEvidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type PackageInstallAdapterEvidenceReport = z.infer<typeof PackageInstallAdapterEvidenceReportSchema>;
export declare function projectPackageInstallMaterialEvidence(inputValue: PackageInstallParameters, overrides?: Partial<Pick<PackageInstallMaterialEvidence, "npmProvenanceStatus" | "npmSignatureStatus" | "registryIntegrityStatus" | "tarballIntegrityDigest">>): PackageInstallMaterialEvidence;
export declare function projectPackageInstallAdapterEvidenceReport(input: {
    contract: ActionContract;
    gateAttempt: GatewayCheckAttempt;
    receipt: Receipt;
    reconciliation: SurfaceOperationReconciliation | null;
    materialEvidence: PackageInstallMaterialEvidence;
}): PackageInstallAdapterEvidenceReport;
