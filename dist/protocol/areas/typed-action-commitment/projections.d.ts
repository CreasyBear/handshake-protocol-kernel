import { z } from "zod";
import { type TypedActionCommitmentProjectionClass, type TypedActionCommitmentRecord } from "./types";
export declare const TypedActionCommitmentProjectionRedactionPostureSchema: z.ZodEnum<{
    public_redacted: "public_redacted";
    operator_redacted: "operator_redacted";
    auditor_signature_digest_only: "auditor_signature_digest_only";
}>;
export type TypedActionCommitmentProjectionRedactionPosture = z.infer<typeof TypedActionCommitmentProjectionRedactionPostureSchema>;
export declare const TypedActionCommitmentSignatureEvidenceProjectionSchema: z.ZodObject<{
    signatureRef: z.ZodNullable<z.ZodString>;
    signatureDigest: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type TypedActionCommitmentSignatureEvidenceProjection = z.infer<typeof TypedActionCommitmentSignatureEvidenceProjectionSchema>;
export declare const TypedActionCommitmentRawReadAuditLinkSchema: z.ZodObject<{
    rawRecordReadAuditRef: z.ZodString;
    rawRecordReadAuditDigest: z.ZodString;
    redactionPosture: z.ZodLiteral<"auditor_signature_digest_only">;
}, z.core.$strict>;
export type TypedActionCommitmentRawReadAuditLink = z.infer<typeof TypedActionCommitmentRawReadAuditLinkSchema>;
export declare const TypedActionCommitmentProjectionSchema: z.ZodObject<{
    typedActionCommitmentRef: z.ZodString;
    actionContractRef: z.ZodNullable<z.ZodString>;
    projectionClass: z.ZodEnum<{
        public_redacted: "public_redacted";
        operator_redacted: "operator_redacted";
        auditor_export: "auditor_export";
    }>;
    commitmentDigest: z.ZodString;
    subject: z.ZodObject<{
        kind: z.ZodEnum<{
            action_contract: "action_contract";
            service_workflow: "service_workflow";
            x402_payment: "x402_payment";
            agentic_endpoint_access: "agentic_endpoint_access";
            protected_surface: "protected_surface";
            external_evidence: "external_evidence";
        }>;
        ref: z.ZodString;
        digest: z.ZodString;
    }, z.core.$strict>;
    purpose: z.ZodEnum<{
        external_commitment_evidence: "external_commitment_evidence";
        policy_required_evidence: "policy_required_evidence";
        service_workflow_readback: "service_workflow_readback";
        post_gateway_payment_evidence: "post_gateway_payment_evidence";
        display_binding_evidence: "display_binding_evidence";
    }>;
    profile: z.ZodEnum<{
        handshake_jcs_typed: "handshake_jcs_typed";
        eip712: "eip712";
    }>;
    domain: z.ZodObject<{
        domainRef: z.ZodString;
        domainDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        tenantId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        organizationId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        gatewayId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        actionClass: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        providerEnvironmentRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>;
    verificationStatus: z.ZodEnum<{
        unverified: "unverified";
        proof_gap: "proof_gap";
        verified: "verified";
        refused: "refused";
        unsupported: "unsupported";
    }>;
    verificationReasonCode: z.ZodNullable<z.ZodString>;
    replayStatus: z.ZodEnum<{
        stale: "stale";
        fresh: "fresh";
        replayed: "replayed";
        missing: "missing";
        not_applicable: "not_applicable";
    }>;
    idempotencyKey: z.ZodNullable<z.ZodString>;
    nonceRef: z.ZodNullable<z.ZodString>;
    nonceDigest: z.ZodNullable<z.ZodString>;
    replayWindowSeconds: z.ZodNullable<z.ZodNumber>;
    verifierRef: z.ZodNullable<z.ZodString>;
    verifierContextDigest: z.ZodNullable<z.ZodString>;
    keyId: z.ZodNullable<z.ZodString>;
    providerNativeDigest: z.ZodNullable<z.ZodString>;
    safetyPosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        display_bound: "display_bound";
        digest_bound: "digest_bound";
        verifier_bound: "verifier_bound";
        provider_observed: "provider_observed";
    }>;
    displayBindingStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        display_bound: "display_bound";
        digest_bound: "digest_bound";
        verifier_bound: "verifier_bound";
        provider_observed: "provider_observed";
    }>;
    authorityBoundary: z.ZodObject<{
        createsPolicyDecision: z.ZodLiteral<false>;
        createsGreenlight: z.ZodLiteral<false>;
        performsGatewayCheck: z.ZodLiteral<false>;
        authorizesMutation: z.ZodLiteral<false>;
        createsReceipt: z.ZodLiteral<false>;
        mintsCertificate: z.ZodLiteral<false>;
        provesPrincipalConsent: z.ZodLiteral<false>;
        provesSignerCustody: z.ZodLiteral<false>;
        provesPaymentCustody: z.ZodLiteral<false>;
        createsEndpointLease: z.ZodLiteral<false>;
        provesDownstreamSuccess: z.ZodLiteral<false>;
    }, z.core.$strict>;
    refusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    signatureEvidence: z.ZodNullable<z.ZodObject<{
        signatureRef: z.ZodNullable<z.ZodString>;
        signatureDigest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>>;
    rawReadAudit: z.ZodNullable<z.ZodObject<{
        rawRecordReadAuditRef: z.ZodString;
        rawRecordReadAuditDigest: z.ZodString;
        redactionPosture: z.ZodLiteral<"auditor_signature_digest_only">;
    }, z.core.$strict>>;
    rawTypedPayloadIncluded: z.ZodLiteral<false>;
    rawSignatureIncluded: z.ZodLiteral<false>;
    rawCredentialMaterialIncluded: z.ZodLiteral<false>;
    rawPaymentMaterialIncluded: z.ZodLiteral<false>;
    rawRequestBodyIncluded: z.ZodLiteral<false>;
    commandMaterialIncluded: z.ZodLiteral<false>;
    redactionProfileRef: z.ZodEnum<{
        public_redacted: "public_redacted";
        operator_redacted: "operator_redacted";
        auditor_signature_digest_only: "auditor_signature_digest_only";
    }>;
    omittedFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type TypedActionCommitmentProjection = z.infer<typeof TypedActionCommitmentProjectionSchema>;
export type ProjectTypedActionCommitmentOptions = {
    projectionClass: Exclude<TypedActionCommitmentProjectionClass, "auditor_export">;
} | {
    projectionClass: "auditor_export";
    rawRecordReadAuditRef: string;
    rawRecordReadAuditDigest: `sha256:${string}`;
    redactionPosture: "auditor_signature_digest_only";
};
export declare function projectTypedActionCommitment(commitment: TypedActionCommitmentRecord, options: ProjectTypedActionCommitmentOptions): TypedActionCommitmentProjection;
