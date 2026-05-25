import { z } from "zod";
import { type GatewayCheckInput, type GatewayCheckResult, type VerifiedGatewayCheck } from "../../protocol/areas/gateway-gate";
import type { ReconcileSurfaceOperationInput, SurfaceOperationReconciliation, SurfaceOperationReconciliationResult } from "../../protocol/areas/operation-lifecycle";
export declare const PreviewDeployParametersSchema: z.ZodObject<{
    provider: z.ZodString;
    projectRef: z.ZodString;
    branchRef: z.ZodString;
    commitRef: z.ZodString;
    previewUrlHint: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type PreviewDeployParameters = z.infer<typeof PreviewDeployParametersSchema>;
export type PreviewDeployCommand = {
    verifiedGate: VerifiedGatewayCheck;
    provider: string;
    projectRef: string;
    branchRef: string;
    commitRef: string;
    previewUrlHint: string | null;
};
export type PreviewDeployEvidence = {
    evidenceRef: string;
    surfaceOperationRef: string;
    previewUrl: string;
    provider: string;
    projectRef: string;
    branchRef: string;
    commitRef: string;
};
export interface PreviewDeploySurface {
    createPreviewDeploy(command: PreviewDeployCommand): Promise<PreviewDeployEvidence>;
}
export type PreviewDeployProtocol = {
    gatewayCheck(input: GatewayCheckInput): Promise<GatewayCheckResult>;
    reconcileSurfaceOperation(input: ReconcileSurfaceOperationInput): Promise<SurfaceOperationReconciliationResult>;
};
export type PreviewDeployGatewayInput = {
    protocol: PreviewDeployProtocol;
    surface: PreviewDeploySurface;
    actionContractId: string;
    greenlightId: string;
    observedParameters: PreviewDeployParameters;
    surfaceOperationRef?: string;
};
export type PreviewDeployGatewayResult = {
    outcome: "gateway_check_refused";
    gatewayCheck: GatewayCheckResult;
    reconciliation: null;
    previewEvidence: null;
} | {
    outcome: "gateway_check_not_authoritative";
    gatewayCheck: GatewayCheckResult;
    reconciliation: null;
    previewEvidence: null;
} | {
    outcome: "preview_created";
    gatewayCheck: GatewayCheckResult;
    reconciliation: SurfaceOperationReconciliation;
    previewEvidence: PreviewDeployEvidence;
} | {
    outcome: "preview_failed";
    gatewayCheck: GatewayCheckResult;
    reconciliation: SurfaceOperationReconciliation;
    previewEvidence: null;
};
export declare function runPreviewDeployGateway(input: PreviewDeployGatewayInput): Promise<PreviewDeployGatewayResult>;
