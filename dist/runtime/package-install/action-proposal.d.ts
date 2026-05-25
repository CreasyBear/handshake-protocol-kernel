import { z } from "zod";
import type { ActionContract, ProposeActionContractInput } from "../../protocol/areas/action-contract";
import type { CompileIntentInput, IntentCompilationRecord } from "../../protocol/areas/intent-compilation";
export declare const PackageInstallToolCallSchema: z.ZodObject<{
    principalIntentRef: z.ZodString;
    generatedCodeOrSpecRef: z.ZodString;
    runtimeExecutionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionGraphId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionNodeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    toolCallDraftId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    package: z.ZodString;
    versionRange: z.ZodString;
    packageManager: z.ZodDefault<z.ZodString>;
    registryRef: z.ZodDefault<z.ZodString>;
    workspaceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    manifestRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    lockfileRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    installFlags: z.ZodDefault<z.ZodArray<z.ZodString>>;
    lifecycleScriptPolicy: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        blocked: "blocked";
        allowed: "allowed";
    }>>;
    resolvedMaterialDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    resolvedMaterialEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    sequenceNumber: z.ZodDefault<z.ZodNumber>;
    requiredPriorActionContractIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type PackageInstallToolCall = z.input<typeof PackageInstallToolCallSchema>;
export declare const PackageInstallRuntimeConfigSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    principalId: z.ZodString;
    agentId: z.ZodString;
    runId: z.ZodString;
    runtimeAdapterId: z.ZodString;
    operatingEnvelopeId: z.ZodString;
    toolCatalogRef: z.ZodString;
    actionCatalogRef: z.ZodString;
    gatewayRegistryRef: z.ZodString;
    toolCapabilityId: z.ZodString;
    actionTypeId: z.ZodString;
    gatewayRegistryEntryId: z.ZodString;
    gatewayId: z.ZodString;
    contractExpiresAt: z.ZodString;
    signingSecret: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type PackageInstallRuntimeConfig = z.input<typeof PackageInstallRuntimeConfigSchema>;
export type PackageInstallRuntimeProtocol = {
    compileIntent(input: CompileIntentInput): Promise<IntentCompilationRecord>;
    proposeActionContract(input: ProposeActionContractInput): Promise<ActionContract>;
};
export type PackageInstallRuntimeResult = {
    outcome: "action_contract_proposed";
    intentCompilation: IntentCompilationRecord;
    actionContract: ActionContract;
} | {
    outcome: "intent_compilation_refused";
    intentCompilation: IntentCompilationRecord;
    actionContract: null;
    refusalReasonCodes: string[];
};
export declare function proposePackageInstallActionContract(protocol: PackageInstallRuntimeProtocol, config: PackageInstallRuntimeConfig, toolCallValue: PackageInstallToolCall): Promise<PackageInstallRuntimeResult>;
export declare function compilePackageInstallIntent(protocol: Pick<PackageInstallRuntimeProtocol, "compileIntent">, config: PackageInstallRuntimeConfig, toolCallValue: PackageInstallToolCall): Promise<IntentCompilationRecord>;
export declare function buildPackageInstallCompileIntentInput(config: PackageInstallRuntimeConfig, toolCallValue: PackageInstallToolCall): CompileIntentInput;
export declare function refusalReasonCodesForCompilation(intentCompilation: IntentCompilationRecord): string[];
