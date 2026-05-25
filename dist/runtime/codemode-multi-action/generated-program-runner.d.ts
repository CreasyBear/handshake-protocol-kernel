import { z } from "zod";
import { type PackageInstallRuntimeConfig, type PackageInstallRuntimeProtocol } from "../package-install/action-proposal";
import { type RepoWriteRuntimeConfig, type RepoWriteRuntimeProtocol } from "../repo-write/action-proposal";
import { type PreviewDeployRuntimeConfig, type PreviewDeployRuntimeProtocol } from "../preview-deploy/action-proposal";
import type { ActionContract } from "../../protocol/areas/action-contract";
import type { CreateGeneratedExecutionGraphInput, GeneratedExecutionGraph, GraphEvidenceIssuerContext } from "../../protocol/areas/generated-execution-graph";
import type { IntentCompilationRecord } from "../../protocol/areas/intent-compilation";
import type { CreateRuntimeExecutionInput, RuntimeExecutionRecord } from "../../protocol/areas/runtime-evidence";
import type { CreateToolCallDraftInput, ToolCallDraft, TransitionToolCallDraftInput } from "../../protocol/areas/tool-call-draft";
export declare const CodemodeMultiActionProgramSchema: z.ZodObject<{
    principalIntentRef: z.ZodString;
    generatedCodeOrSpecRef: z.ZodString;
    actions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        actionClass: z.ZodLiteral<"package.install">;
        package: z.ZodString;
        versionRange: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        actionClass: z.ZodLiteral<"repo.write">;
        repositoryRef: z.ZodString;
        filePath: z.ZodString;
        content: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        actionClass: z.ZodLiteral<"preview_deploy.create">;
        provider: z.ZodString;
        projectRef: z.ZodString;
        branchRef: z.ZodString;
        commitRef: z.ZodString;
        previewUrlHint: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>], "actionClass">>;
}, z.core.$strict>;
export type CodemodeMultiActionProgram = z.input<typeof CodemodeMultiActionProgramSchema>;
type CodemodeActionClass = "package.install" | "repo.write" | "preview_deploy.create";
export type CodemodeMultiActionRuntimeConfig = {
    packageInstall: PackageInstallRuntimeConfig;
    repoWrite: RepoWriteRuntimeConfig;
    previewDeploy: PreviewDeployRuntimeConfig;
};
export type CodemodeMultiActionProtocol = PackageInstallRuntimeProtocol & RepoWriteRuntimeProtocol & PreviewDeployRuntimeProtocol & {
    createRuntimeExecution(input: CreateRuntimeExecutionInput): Promise<RuntimeExecutionRecord>;
    createGeneratedExecutionGraph(input: CreateGeneratedExecutionGraphInput, issuerContext: GraphEvidenceIssuerContext): Promise<GeneratedExecutionGraph>;
    createToolCallDraft(input: CreateToolCallDraftInput): Promise<ToolCallDraft>;
    transitionToolCallDraft(input: TransitionToolCallDraftInput): Promise<ToolCallDraft>;
};
export type CodemodeActionContractProposal = {
    outcome: "action_contract_proposed";
    actionClass: CodemodeActionClass;
    sequenceNumber: number;
    intentCompilation: IntentCompilationRecord;
    actionContract: ActionContract;
    refusalReasonCodes: [];
} | {
    outcome: "intent_compilation_refused";
    actionClass: CodemodeActionClass;
    sequenceNumber: number;
    intentCompilation: IntentCompilationRecord;
    actionContract: null;
    refusalReasonCodes: string[];
} | {
    outcome: "generated_execution_block_refused";
    actionClass: CodemodeActionClass;
    sequenceNumber: number;
    intentCompilation: IntentCompilationRecord;
    actionContract: null;
    refusalReasonCodes: ["generated_execution_block_sibling_refused"];
};
export type CodemodeMultiActionResult = {
    outcome: "action_contracts_proposed" | "one_or_more_candidates_refused" | "generated_execution_block_refused";
    proposals: CodemodeActionContractProposal[];
};
export declare function proposeCodemodeActionContracts(protocol: CodemodeMultiActionProtocol, config: CodemodeMultiActionRuntimeConfig, programValue: CodemodeMultiActionProgram): Promise<CodemodeMultiActionResult>;
export type ParsedCodemodeMultiActionProgram = z.infer<typeof CodemodeMultiActionProgramSchema>;
export type CodemodeAction = ParsedCodemodeMultiActionProgram["actions"][number];
export {};
