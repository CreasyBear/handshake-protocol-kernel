import { z } from "zod";
import { type GatewayCheckInput, type GatewayCheckResult, type VerifiedGatewayCheck } from "../../protocol/areas/gateway-gate";
import type { ReconcileSurfaceOperationInput, SurfaceOperationReconciliation, SurfaceOperationReconciliationResult } from "../../protocol/areas/operation-lifecycle";
export declare const PackageInstallParametersSchema: z.ZodObject<{
    package: z.ZodString;
    versionRange: z.ZodString;
    packageManager: z.ZodString;
    registryRef: z.ZodString;
    workspaceRef: z.ZodNullable<z.ZodString>;
    manifestRef: z.ZodNullable<z.ZodString>;
    lockfileRef: z.ZodNullable<z.ZodString>;
    installFlags: z.ZodArray<z.ZodString>;
    lifecycleScriptPolicy: z.ZodEnum<{
        unknown: "unknown";
        blocked: "blocked";
        allowed: "allowed";
    }>;
    resolvedMaterialDigest: z.ZodNullable<z.ZodString>;
    resolvedMaterialEvidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type PackageInstallParameters = z.infer<typeof PackageInstallParametersSchema>;
export type PackageInstallMutationCommand = {
    verifiedGate: VerifiedGatewayCheck;
    parameters: PackageInstallParameters;
    packageName: string;
    versionRange: string;
    packageManager: string;
    registryRef: string;
    workspaceRef: string | null;
    manifestRef: string | null;
    lockfileRef: string | null;
    installFlags: string[];
    lifecycleScriptPolicy: "blocked" | "allowed" | "unknown";
    resolvedMaterialDigest: PackageInstallParameters["resolvedMaterialDigest"];
    resolvedMaterialEvidenceRefs: string[];
};
export type PackageInstallMutationEvidence = {
    evidenceRef: string;
    surfaceOperationRef: string;
    packageName: string;
    versionRange: string;
};
export interface PackageInstallMutationSurface {
    applyPackageInstall(command: PackageInstallMutationCommand): Promise<PackageInstallMutationEvidence>;
}
export type PackageInstallProtocol = {
    gatewayCheck(input: GatewayCheckInput): Promise<GatewayCheckResult>;
    reconcileSurfaceOperation(input: ReconcileSurfaceOperationInput): Promise<SurfaceOperationReconciliationResult>;
};
export type PackageInstallGatewayInput = {
    protocol: PackageInstallProtocol;
    surface: PackageInstallMutationSurface;
    actionContractId: string;
    greenlightId: string;
    observedParameters: PackageInstallParameters;
    surfaceOperationRef?: string;
};
export type PackageInstallGatewayResult = {
    outcome: "gateway_check_refused";
    gatewayCheck: GatewayCheckResult;
    reconciliation: null;
    mutationEvidence: null;
} | {
    outcome: "gateway_check_not_authoritative";
    gatewayCheck: GatewayCheckResult;
    reconciliation: null;
    mutationEvidence: null;
} | {
    outcome: "mutation_reconciled";
    gatewayCheck: GatewayCheckResult;
    reconciliation: SurfaceOperationReconciliation;
    mutationEvidence: PackageInstallMutationEvidence;
} | {
    outcome: "mutation_failed";
    gatewayCheck: GatewayCheckResult;
    reconciliation: SurfaceOperationReconciliation;
    mutationEvidence: null;
};
export declare function runPackageInstallGateway(input: PackageInstallGatewayInput): Promise<PackageInstallGatewayResult>;
