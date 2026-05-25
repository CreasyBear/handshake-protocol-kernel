import type { ActionType, GatewayRegistryEntry, OperatingEnvelope, ToolCapability } from "../catalog-envelope";
import type { GeneratedExecutionGraph, GeneratedExecutionNode } from "../generated-execution-graph";
import type { RuntimeExecutionRecord } from "../runtime-evidence";
import type { ToolCallDraft } from "../tool-call-draft";
import type { CandidateActionStatus, CompileIntentInputSchema } from "./types";
type ParsedCompileIntentInput = ReturnType<typeof CompileIntentInputSchema.parse>;
export type IntentCompilationDecisionContext = {
    input: ParsedCompileIntentInput;
    createdAt: string;
    paramsDigest: `sha256:${string}`;
    tool: ToolCapability | null;
    actionType: ActionType | null;
    gateway: GatewayRegistryEntry | null;
    envelope: OperatingEnvelope | null;
    runtimeExecution: RuntimeExecutionRecord | null;
    generatedExecutionGraph: GeneratedExecutionGraph | null;
    toolCallDraft: ToolCallDraft | null;
};
export type CandidateDecision = {
    uncertaintyMarkers: string[];
    overreachReasonCodes: string[];
    refusalReasonCodes: string[];
    candidateStatus: CandidateActionStatus;
    generatedExecutionNode: GeneratedExecutionNode | null;
};
export declare function deriveCandidateDecision(context: IntentCompilationDecisionContext): CandidateDecision;
export {};
