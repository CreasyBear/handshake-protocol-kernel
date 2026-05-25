import { type PackageInstallRuntimeConfig } from "../package-install/action-proposal";
import { type RepoWriteRuntimeConfig } from "../repo-write/action-proposal";
import { type PreviewDeployRuntimeConfig } from "../preview-deploy/action-proposal";
import type { CreateGeneratedExecutionGraphInput, GraphEvidenceIssuerContext } from "../../protocol/areas/generated-execution-graph";
import type { CreateRuntimeExecutionInput, RuntimeExecutionRecord } from "../../protocol/areas/runtime-evidence";
import type { ParsedCodemodeMultiActionProgram } from "./generated-program-runner";
export type CodemodeMultiActionRuntimeConfig = {
    packageInstall: PackageInstallRuntimeConfig;
    repoWrite: RepoWriteRuntimeConfig;
    previewDeploy: PreviewDeployRuntimeConfig;
};
export type GeneratedExecutionGraphRefs = {
    runtimeExecutionId: string;
    generatedExecutionGraphId: string;
};
export declare function actionGeneratedCodeOrSpecRef(generatedCodeOrSpecRef: string, sequenceNumber: number): string;
export declare function actionNodeId(sequenceNumber: number): string;
export declare function buildRuntimeExecutionInput(config: CodemodeMultiActionRuntimeConfig, program: ParsedCodemodeMultiActionProgram): Promise<CreateRuntimeExecutionInput>;
export declare function buildGeneratedExecutionGraphInput(config: CodemodeMultiActionRuntimeConfig, program: ParsedCodemodeMultiActionProgram, runtimeExecution: RuntimeExecutionRecord): Promise<CreateGeneratedExecutionGraphInput>;
export declare function graphIssuerContext(config: CodemodeMultiActionRuntimeConfig, program: ParsedCodemodeMultiActionProgram, runtimeExecution: RuntimeExecutionRecord): GraphEvidenceIssuerContext;
