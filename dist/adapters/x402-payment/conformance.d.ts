import { z } from "zod";
import { requiredGatewayCheckedBypassProbeKinds } from "../../protocol/areas/bypass-probe";
import type { AuthorityCertificateVerificationResponse } from "../../protocol/areas/authority-certificate";
export declare const x402FirstWedgeUnsupportedSurfaces: readonly ["upto", "batch-settlement", "lifecycle-hooks", "mcp-auto-pay", "signed-offers", "signed-receipts", "seller-middleware", "facilitator-operation", "settlement-finality"];
export declare const X402FirstWedgeUnsupportedSurfaceSchema: z.ZodEnum<{
    upto: "upto";
    "batch-settlement": "batch-settlement";
    "lifecycle-hooks": "lifecycle-hooks";
    "mcp-auto-pay": "mcp-auto-pay";
    "signed-offers": "signed-offers";
    "signed-receipts": "signed-receipts";
    "seller-middleware": "seller-middleware";
    "facilitator-operation": "facilitator-operation";
    "settlement-finality": "settlement-finality";
}>;
export type X402FirstWedgeUnsupportedSurface = z.infer<typeof X402FirstWedgeUnsupportedSurfaceSchema>;
export declare const X402FirstWedgeSurfaceSchema: z.ZodUnion<readonly [z.ZodLiteral<"exact">, z.ZodEnum<{
    upto: "upto";
    "batch-settlement": "batch-settlement";
    "lifecycle-hooks": "lifecycle-hooks";
    "mcp-auto-pay": "mcp-auto-pay";
    "signed-offers": "signed-offers";
    "signed-receipts": "signed-receipts";
    "seller-middleware": "seller-middleware";
    "facilitator-operation": "facilitator-operation";
    "settlement-finality": "settlement-finality";
}>]>;
export type X402FirstWedgeSurface = z.infer<typeof X402FirstWedgeSurfaceSchema>;
declare const x402FirstWedgeUnsupportedSurfaceReasonCodes: {
    readonly "batch-settlement": "x402_cut_unsupported_batch_settlement";
    readonly "facilitator-operation": "x402_cut_unsupported_facilitator_operation";
    readonly "lifecycle-hooks": "x402_cut_unsupported_lifecycle_hooks";
    readonly "mcp-auto-pay": "x402_cut_unsupported_mcp_auto_pay";
    readonly "seller-middleware": "x402_cut_unsupported_seller_middleware";
    readonly "settlement-finality": "x402_cut_unsupported_settlement_finality";
    readonly "signed-offers": "x402_cut_unsupported_signed_offers";
    readonly "signed-receipts": "x402_cut_unsupported_signed_receipts";
    readonly upto: "x402_cut_unsupported_upto";
};
export type X402FirstWedgeUnsupportedSurfaceReasonCode = (typeof x402FirstWedgeUnsupportedSurfaceReasonCodes)[X402FirstWedgeUnsupportedSurface];
export type X402FirstWedgeSurfaceClassification = {
    actionClass: "x402_payment.exact";
    cutLine: null;
    reasonCode: null;
    supported: true;
    surface: "exact";
} | {
    actionClass: null;
    cutLine: "unsupported_first_wedge";
    reasonCode: X402FirstWedgeUnsupportedSurfaceReasonCode;
    supported: false;
    surface: X402FirstWedgeUnsupportedSurface;
};
export declare const X402FirstWedgeEvidenceLabelSchema: z.ZodEnum<{
    local_reference_downstream_fixture: "local_reference_downstream_fixture";
    gateway_credential_resolution: "gateway_credential_resolution";
    local_gateway_check: "local_gateway_check";
    gateway_signer_invocation: "gateway_signer_invocation";
    payment_payload_created: "payment_payload_created";
    downstream_reconciliation_recorded: "downstream_reconciliation_recorded";
    payment_response_received: "payment_response_received";
    payment_response_missing: "payment_response_missing";
    facilitator_verify_attempted: "facilitator_verify_attempted";
    facilitator_verify_succeeded: "facilitator_verify_succeeded";
    facilitator_verify_failed: "facilitator_verify_failed";
    facilitator_settle_attempted: "facilitator_settle_attempted";
    settlement_succeeded: "settlement_succeeded";
    settlement_failed: "settlement_failed";
    settlement_unknown: "settlement_unknown";
}>;
export type X402FirstWedgeEvidenceLabel = z.infer<typeof X402FirstWedgeEvidenceLabelSchema>;
export type X402FirstWedgeEvidenceLabelClassification = {
    authorityCreated: false;
    evidenceRole: "gateway_check" | "gateway_credential_resolution" | "gateway_signer_invocation" | "gateway_held_payment_credential" | "downstream_reconciliation" | "payment_response" | "local_reference_fixture" | "facilitator_verify" | "facilitator_settlement";
    firstWedgeOperation: "supported_evidence_only" | "unsupported_facilitator_operation";
    label: X402FirstWedgeEvidenceLabel;
    settlementFinality: "not_settlement_finality" | "settlement_succeeded" | "settlement_failed" | "settlement_unknown";
};
export declare const X402AuthorityCertificateEvidenceProfileSchema: z.ZodObject<{
    profileKind: z.ZodLiteral<"authority_certificate_x402_exact_evidence_profile">;
    authorityCreated: z.ZodLiteral<false>;
    verificationOutcome: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        verified: "verified";
    }>;
    evidenceProfile: z.ZodEnum<{
        proof_gap: "proof_gap";
        x402_exact_per_call: "x402_exact_per_call";
        unsupported_action_class: "unsupported_action_class";
        unverified_certificate: "unverified_certificate";
    }>;
    actionClass: z.ZodNullable<z.ZodString>;
    actionContractRef: z.ZodNullable<z.ZodString>;
    gatewayAdmissionStatus: z.ZodNullable<z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        not_requested: "not_requested";
        admitted: "admitted";
        replayed: "replayed";
    }>>;
    downstreamOutcomeStatus: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        refused: "refused";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>>;
    exactPerCallProtectedAction: z.ZodBoolean;
    gatewayCheckEvidenceRef: z.ZodNullable<z.ZodString>;
    receiptRef: z.ZodNullable<z.ZodString>;
    proofGapRefs: z.ZodArray<z.ZodString>;
    refusalRefs: z.ZodArray<z.ZodString>;
    evidenceRefs: z.ZodArray<z.ZodString>;
    provesPaymentSuccess: z.ZodLiteral<false>;
    provesSettlementFinality: z.ZodLiteral<false>;
    provesFacilitatorOperation: z.ZodLiteral<false>;
    provesProviderCustody: z.ZodLiteral<false>;
    managesPayment: z.ZodLiteral<false>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type X402AuthorityCertificateEvidenceProfile = z.infer<typeof X402AuthorityCertificateEvidenceProfileSchema>;
export declare function classifyX402FirstWedgeSurface(surfaceValue: unknown): X402FirstWedgeSurfaceClassification;
export declare function classifyX402FirstWedgeEvidenceLabel(labelValue: unknown): X402FirstWedgeEvidenceLabelClassification;
export declare function projectX402AuthorityCertificateEvidenceProfile(verification: AuthorityCertificateVerificationResponse): X402AuthorityCertificateEvidenceProfile;
export declare const X402PaymentConformancePostureSchema: z.ZodObject<{
    signerCustodyStatus: z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        agent_exposed: "agent_exposed";
    }>;
    rawPrivateKeyEnvStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        present: "present";
    }>;
    directCoreClientSigningStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    directX402ClientStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>>;
    paidFetchClientStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    paidAxiosClientStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    packageScriptPaymentStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>>;
    browserSidePaymentStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>>;
    rawNetworkPaymentStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>>;
    rawPaymentSignatureHeaderStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    rawPaymentSignatureInjectionStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>>;
    siblingX402WrapperStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    mcpDirectPaymentStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    unmanagedMcpServerStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>>;
    unmanagedToolPacketStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>>;
    tokenPassthroughStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    wrapperDriftStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        present: "present";
    }>;
    failureClosedStatus: z.ZodEnum<{
        unknown: "unknown";
        passed: "passed";
        failed: "failed";
    }>;
}, z.core.$strict>;
export type X402PaymentConformancePosture = z.input<typeof X402PaymentConformancePostureSchema>;
export type X402PaymentConformanceResult = {
    adapterPackId: "adapter_pack_x402_payment_exact";
    passed: boolean;
    requiredProbeKinds: typeof requiredGatewayCheckedBypassProbeKinds;
    reasonCodes: string[];
};
export declare function checkX402PaymentInstallConformance(postureValue: X402PaymentConformancePosture): X402PaymentConformanceResult;
export declare function assertX402PaymentInstallConformance(posture: X402PaymentConformancePosture): X402PaymentConformanceResult;
export {};
