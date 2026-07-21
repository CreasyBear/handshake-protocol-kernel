import { z } from "zod";
import { type GatewayCheckInput, type GatewayCheckResult, type VerifiedGatewayCheck } from "../../protocol/areas/gateway-gate";
import type { ReconcileSurfaceOperationInput, SurfaceOperationReconciliation, SurfaceOperationReconciliationResult } from "../../protocol/areas/operation-lifecycle";
export declare const RepoWriteParametersSchema: z.ZodObject<{
    repositoryRef: z.ZodString;
    filePath: z.ZodString;
    contentDigest: z.ZodString;
    contentByteLength: z.ZodNumber;
}, z.core.$strict>;
export type RepoWriteParameters = z.infer<typeof RepoWriteParametersSchema>;
export type RepoWriteMutationCommand = {
    verifiedGate: VerifiedGatewayCheck;
    repositoryRef: string;
    filePath: string;
    content: string;
    contentDigest: `sha256:${string}`;
    contentByteLength: number;
};
export type RepoWriteMutationEvidence = {
    evidenceRef: string;
    surfaceOperationRef: string;
    repositoryRef: string;
    filePath: string;
    contentDigest: `sha256:${string}`;
    contentByteLength: number;
};
export interface RepoWriteMutationSurface {
    applyRepoWrite(command: RepoWriteMutationCommand): Promise<RepoWriteMutationEvidence>;
}
export type RepoWriteProtocol = {
    gatewayCheck(input: GatewayCheckInput): Promise<GatewayCheckResult>;
    reconcileSurfaceOperation(input: ReconcileSurfaceOperationInput): Promise<SurfaceOperationReconciliationResult>;
};
export type RepoWriteGatewayInput = {
    protocol: RepoWriteProtocol;
    surface: RepoWriteMutationSurface;
    actionContractId: string;
    greenlightId: string;
    repositoryRef: string;
    filePath: string;
    content: string;
    surfaceOperationRef?: string;
};
export type RepoWriteGatewayResult = {
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
    mutationEvidence: RepoWriteMutationEvidence;
} | {
    outcome: "mutation_failed" | "mutation_outcome_unknown";
    gatewayCheck: GatewayCheckResult;
    reconciliation: SurfaceOperationReconciliation;
    mutationEvidence: null;
};
export declare function runRepoWriteGateway(input: RepoWriteGatewayInput): Promise<RepoWriteGatewayResult>;
