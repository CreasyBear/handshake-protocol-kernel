import { z } from "zod";
export declare const RecordTypedActionCommitmentInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    typedActionCommitmentId: z.ZodOptional<z.ZodString>;
    actionContractId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
    domain: z.ZodDefault<z.ZodObject<{
        domainRef: z.ZodString;
        domainDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        tenantId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        organizationId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        gatewayId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        actionClass: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        providerEnvironmentRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>;
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
    typedPayload: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
    replayPosture: z.ZodDefault<z.ZodObject<{
        replayStatus: z.ZodEnum<{
            stale: "stale";
            fresh: "fresh";
            replayed: "replayed";
            missing: "missing";
            not_applicable: "not_applicable";
        }>;
        idempotencyKey: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        nonceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        nonceDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        issuedAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        replayWindowSeconds: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strict>>;
    signerOrVerifier: z.ZodDefault<z.ZodObject<{
        verifierRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        keyId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        signatureRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        signatureDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        providerNativeDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        verificationStatus: z.ZodEnum<{
            unverified: "unverified";
            proof_gap: "proof_gap";
            verified: "verified";
            refused: "refused";
            unsupported: "unsupported";
        }>;
        verificationReasonCode: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>;
    safetyPosture: z.ZodDefault<z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        display_bound: "display_bound";
        digest_bound: "digest_bound";
        verifier_bound: "verifier_bound";
        provider_observed: "provider_observed";
    }>>;
    projectionClass: z.ZodDefault<z.ZodEnum<{
        public_redacted: "public_redacted";
        operator_redacted: "operator_redacted";
        auditor_export: "auditor_export";
    }>>;
    authorityBoundary: z.ZodDefault<z.ZodObject<{
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
    }, z.core.$strict>>;
    refusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    recordedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type RecordTypedActionCommitmentInput = z.input<typeof RecordTypedActionCommitmentInputSchema>;
