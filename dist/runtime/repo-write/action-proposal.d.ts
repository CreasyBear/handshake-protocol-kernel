import { z } from "zod";
import type { ActionContract, ProposeActionContractInput } from "../../protocol/areas/action-contract";
import type { CompileIntentInput, IntentCompilationRecord } from "../../protocol/areas/intent-compilation";
export declare const RepoWriteToolCallSchema: z.ZodObject<{
    principalIntentRef: z.ZodString;
    generatedCodeOrSpecRef: z.ZodString;
    runtimeExecutionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionGraphId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionNodeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    toolCallDraftId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    repositoryRef: z.ZodString;
    filePath: z.ZodString;
    content: z.ZodString;
    sequenceNumber: z.ZodDefault<z.ZodNumber>;
    requiredPriorActionContractIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type RepoWriteToolCall = z.input<typeof RepoWriteToolCallSchema>;
export type RepoWriteRuntimeConfig = {
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
export type RepoWriteRuntimeProtocol = {
    compileIntent(input: CompileIntentInput): Promise<IntentCompilationRecord>;
    proposeActionContract(input: ProposeActionContractInput): Promise<ActionContract>;
};
export type RepoWriteRuntimeResult = {
    outcome: "action_contract_proposed";
    intentCompilation: IntentCompilationRecord;
    actionContract: ActionContract;
} | {
    outcome: "intent_compilation_refused";
    intentCompilation: IntentCompilationRecord;
    actionContract: null;
    refusalReasonCodes: string[];
};
export declare function proposeRepoWriteActionContract(protocol: RepoWriteRuntimeProtocol, config: RepoWriteRuntimeConfig, toolCallValue: RepoWriteToolCall): Promise<RepoWriteRuntimeResult>;
export declare function compileRepoWriteIntent(protocol: Pick<RepoWriteRuntimeProtocol, "compileIntent">, config: RepoWriteRuntimeConfig, toolCallValue: RepoWriteToolCall): Promise<IntentCompilationRecord>;
export declare function buildRepoWriteCompileIntentInput(config: RepoWriteRuntimeConfig, toolCallValue: RepoWriteToolCall): Promise<CompileIntentInput>;
export declare function refusalReasonCodesForCompilation(intentCompilation: IntentCompilationRecord): string[];
export declare function repoWriteResourceRef(repositoryRef: string, filePath: string): string;
