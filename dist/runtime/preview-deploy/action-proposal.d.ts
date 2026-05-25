import { z } from "zod";
import type { ActionContract, ProposeActionContractInput } from "../../protocol/areas/action-contract";
import type { CompileIntentInput, IntentCompilationRecord } from "../../protocol/areas/intent-compilation";
export declare const PreviewDeployToolCallSchema: z.ZodObject<{
    principalIntentRef: z.ZodString;
    generatedCodeOrSpecRef: z.ZodString;
    runtimeExecutionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionGraphId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionNodeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    toolCallDraftId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    provider: z.ZodString;
    projectRef: z.ZodString;
    branchRef: z.ZodString;
    commitRef: z.ZodString;
    previewUrlHint: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sequenceNumber: z.ZodDefault<z.ZodNumber>;
    requiredPriorActionContractIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type PreviewDeployToolCall = z.input<typeof PreviewDeployToolCallSchema>;
export type PreviewDeployRuntimeConfig = {
    tenantId: string;
    organizationId: string;
    principalId: string;
    agentId: string;
    runId: string;
    runtimeAdapterId: string;
    operatingEnvelopeId: string;
    toolCatalogRef: string;
    actionCatalogRef: string;
    gatewayRegistryRef: string;
    toolCapabilityId: string;
    actionTypeId: string;
    gatewayRegistryEntryId: string;
    gatewayId: string;
    contractExpiresAt: string;
    signingSecret?: string;
};
export type PreviewDeployRuntimeProtocol = {
    compileIntent(input: CompileIntentInput): Promise<IntentCompilationRecord>;
    proposeActionContract(input: ProposeActionContractInput): Promise<ActionContract>;
};
export type PreviewDeployRuntimeResult = {
    outcome: "action_contract_proposed";
    intentCompilation: IntentCompilationRecord;
    actionContract: ActionContract;
} | {
    outcome: "intent_compilation_refused";
    intentCompilation: IntentCompilationRecord;
    actionContract: null;
    refusalReasonCodes: string[];
};
export declare function proposePreviewDeployActionContract(protocol: PreviewDeployRuntimeProtocol, config: PreviewDeployRuntimeConfig, toolCallValue: PreviewDeployToolCall): Promise<PreviewDeployRuntimeResult>;
export declare function compilePreviewDeployIntent(protocol: Pick<PreviewDeployRuntimeProtocol, "compileIntent">, config: PreviewDeployRuntimeConfig, toolCallValue: PreviewDeployToolCall): Promise<IntentCompilationRecord>;
export declare function buildPreviewDeployCompileIntentInput(config: PreviewDeployRuntimeConfig, toolCallValue: PreviewDeployToolCall): Promise<CompileIntentInput>;
export declare function refusalReasonCodesForCompilation(intentCompilation: IntentCompilationRecord): string[];
export declare function previewDeployResourceRef(provider: string, projectRef: string, branchRef: string): string;
