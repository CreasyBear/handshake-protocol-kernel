import { type CreateGeneratedExecutionGraphInputSchema, type GeneratedExecutionCoverageStatus, type GeneratedExecutionNode } from "./types";
type ParsedGeneratedExecutionGraphInput = ReturnType<typeof CreateGeneratedExecutionGraphInputSchema.parse>;
export type GraphCoverageEvaluation = {
    nodes: GeneratedExecutionNode[];
    terminalReasonCodes: string[];
    coverageStatus: GeneratedExecutionCoverageStatus;
    graphByteSize: number;
};
export declare function deriveGraphCoverage(input: ParsedGeneratedExecutionGraphInput): Promise<GraphCoverageEvaluation>;
export {};
