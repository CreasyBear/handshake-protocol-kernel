import { z } from "zod";
import { type GatewayCheckInput, type GatewayCheckResult, type VerifiedGatewayCheck } from "../../protocol/areas/gateway-gate";
import type { ReconcileSurfaceOperationInput, SurfaceOperationReconciliation, SurfaceOperationReconciliationResult } from "../../protocol/areas/operation-lifecycle";
export declare const X402PaymentParametersSchema: z.ZodObject<{
    endpointUrl: z.ZodString;
    endpointDomain: z.ZodString;
    payee: z.ZodString;
    network: z.ZodString;
    token: z.ZodString;
    atomicAmount: z.ZodString;
    paymentRequirementsDigest: z.ZodString;
    facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type X402PaymentParameters = z.infer<typeof X402PaymentParametersSchema>;
export type X402PaymentSignatureCommand = {
    verifiedGate: VerifiedGatewayCheck;
    parameters: X402PaymentParameters;
};
export type X402PaymentSignatureEvidence = {
    evidenceRef: string;
    surfaceOperationRef: string;
    paymentSignature: string;
    paymentSignatureDigest: `sha256:${string}`;
    downstreamPaymentStatus: "succeeded" | "unknown";
    paymentResponseEvidenceRef: string | null;
    providerRequestRef: string | null;
    providerOperationRef: string | null;
};
export interface X402WalletSigningSurface {
    signPayment(command: X402PaymentSignatureCommand): Promise<X402PaymentSignatureEvidence>;
}
export type X402WalletGatewayProtocol = {
    gatewayCheck(input: GatewayCheckInput): Promise<GatewayCheckResult>;
    reconcileSurfaceOperation(input: ReconcileSurfaceOperationInput): Promise<SurfaceOperationReconciliationResult>;
};
export type X402WalletGatewayInput = {
    protocol: X402WalletGatewayProtocol;
    surface: X402WalletSigningSurface;
    actionContractId: string;
    greenlightId: string;
    observedParameters: X402PaymentParameters;
    surfaceOperationRef?: string;
};
export type X402WalletGatewayResult = {
    outcome: "gateway_check_refused";
    gatewayCheck: GatewayCheckResult;
    reconciliation: null;
    signatureEvidence: null;
} | {
    outcome: "gateway_check_not_authoritative";
    gatewayCheck: GatewayCheckResult;
    reconciliation: null;
    signatureEvidence: null;
} | {
    outcome: "payment_signature_reconciled";
    gatewayCheck: GatewayCheckResult;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: X402PaymentSignatureEvidence;
} | {
    outcome: "payment_signature_proof_gap";
    gatewayCheck: GatewayCheckResult;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: X402PaymentSignatureEvidence;
} | {
    outcome: "payment_signature_failed";
    gatewayCheck: GatewayCheckResult;
    reconciliation: SurfaceOperationReconciliation;
    signatureEvidence: null;
};
export declare function runX402WalletGateway(input: X402WalletGatewayInput): Promise<X402WalletGatewayResult>;
