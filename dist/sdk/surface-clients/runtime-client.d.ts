import type { ActionContract, IntentCompilationRecord, RuntimeExecutionRecord, ToolCallDraft } from "../../protocol/public/schemas";
import type { CompileIntentInput, CreateRuntimeExecutionInput, CreateToolCallDraftInput, ProposeActionContractInput, TransitionToolCallDraftInput } from "../../protocol/public/inputs";
import type { RuntimeIngressProposalInput, RuntimeIngressResult } from "../../runtime";
import type { HandshakeFetch } from "../client";
import { type RoleScopedClientOptions } from "./transport";
export type RuntimeClientOptions = RoleScopedClientOptions;
export declare class RuntimeClient {
    private readonly transport;
    constructor(baseUrl: string, options: RuntimeClientOptions, fetchImpl?: HandshakeFetch);
    createRuntimeExecution(input: CreateRuntimeExecutionInput): Promise<RuntimeExecutionRecord>;
    proposeRuntimeIngressActionContracts(input: RuntimeIngressProposalInput): Promise<RuntimeIngressResult>;
    createToolCallDraft(input: CreateToolCallDraftInput): Promise<ToolCallDraft>;
    transitionToolCallDraft(input: TransitionToolCallDraftInput): Promise<ToolCallDraft>;
    compileIntent(input: CompileIntentInput): Promise<IntentCompilationRecord>;
    proposeActionContract(input: ProposeActionContractInput): Promise<ActionContract>;
}
