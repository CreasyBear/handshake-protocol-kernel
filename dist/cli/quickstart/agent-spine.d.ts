import { type QuickstartStepEnvelope } from "./x402";
export type AgentSpineStepEnvelope = QuickstartStepEnvelope;
export declare function runAgentSpineQuickstart(input: {
    cwd: string;
}): Promise<import("..").CliOutputEnvelope<{
    recommendedConvenience: boolean;
    canonicalDiscreteCommands: string[];
    steps: QuickstartStepEnvelope[];
}>>;
