import { z } from "zod";
export declare const TypedActionCommitmentProfileSchema: z.ZodEnum<{
    handshake_jcs_typed: "handshake_jcs_typed";
    eip712: "eip712";
}>;
export type TypedActionCommitmentProfile = z.infer<typeof TypedActionCommitmentProfileSchema>;
export declare const TypedActionCommitmentPurposeSchema: z.ZodEnum<{
    external_commitment_evidence: "external_commitment_evidence";
    policy_required_evidence: "policy_required_evidence";
    service_workflow_readback: "service_workflow_readback";
    post_gateway_payment_evidence: "post_gateway_payment_evidence";
    display_binding_evidence: "display_binding_evidence";
}>;
export type TypedActionCommitmentPurpose = z.infer<typeof TypedActionCommitmentPurposeSchema>;
export declare const TypedActionCommitmentProjectionClassSchema: z.ZodEnum<{
    public_redacted: "public_redacted";
    operator_redacted: "operator_redacted";
    auditor_export: "auditor_export";
}>;
export type TypedActionCommitmentProjectionClass = z.infer<typeof TypedActionCommitmentProjectionClassSchema>;
export declare const TypedActionCommitmentVerificationStatusSchema: z.ZodEnum<{
    unverified: "unverified";
    proof_gap: "proof_gap";
    verified: "verified";
    refused: "refused";
    unsupported: "unsupported";
}>;
export type TypedActionCommitmentVerificationStatus = z.infer<typeof TypedActionCommitmentVerificationStatusSchema>;
export declare const TypedActionCommitmentReplayStatusSchema: z.ZodEnum<{
    stale: "stale";
    fresh: "fresh";
    replayed: "replayed";
    missing: "missing";
    not_applicable: "not_applicable";
}>;
export type TypedActionCommitmentReplayStatus = z.infer<typeof TypedActionCommitmentReplayStatusSchema>;
export declare const TypedActionCommitmentSafetyPostureSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    refused: "refused";
    display_bound: "display_bound";
    digest_bound: "digest_bound";
    verifier_bound: "verifier_bound";
    provider_observed: "provider_observed";
}>;
export type TypedActionCommitmentSafetyPosture = z.infer<typeof TypedActionCommitmentSafetyPostureSchema>;
export declare const TypedActionCommitmentSubjectSchema: z.ZodObject<{
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
export type TypedActionCommitmentSubject = z.infer<typeof TypedActionCommitmentSubjectSchema>;
export declare const TypedActionCommitmentDomainSchema: z.ZodObject<{
    domainRef: z.ZodString;
    domainDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    tenantId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    organizationId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actionClass: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    providerEnvironmentRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type TypedActionCommitmentDomain = z.infer<typeof TypedActionCommitmentDomainSchema>;
export declare const TypedActionCommitmentTypedPayloadSchema: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
export type TypedActionCommitmentTypedPayload = z.infer<typeof TypedActionCommitmentTypedPayloadSchema>;
export declare const TypedActionCommitmentReplayPostureSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type TypedActionCommitmentReplayPosture = z.infer<typeof TypedActionCommitmentReplayPostureSchema>;
export declare const TypedActionCommitmentSignerOrVerifierSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type TypedActionCommitmentSignerOrVerifier = z.infer<typeof TypedActionCommitmentSignerOrVerifierSchema>;
export declare const TypedActionCommitmentAuthorityBoundarySchema: z.ZodObject<{
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
export type TypedActionCommitmentAuthorityBoundary = z.infer<typeof TypedActionCommitmentAuthorityBoundarySchema>;
export declare const typedActionCommitmentAuthorityBoundary: {
    readonly createsPolicyDecision: false;
    readonly createsGreenlight: false;
    readonly performsGatewayCheck: false;
    readonly authorizesMutation: false;
    readonly createsReceipt: false;
    readonly mintsCertificate: false;
    readonly provesPrincipalConsent: false;
    readonly provesSignerCustody: false;
    readonly provesPaymentCustody: false;
    readonly createsEndpointLease: false;
    readonly provesDownstreamSuccess: false;
};
export declare const TypedActionCommitmentSummarySchema: z.ZodObject<{
    typedActionCommitmentId: z.ZodString;
    commitmentDigest: z.ZodString;
    subjectDigest: z.ZodString;
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
    verificationStatus: z.ZodEnum<{
        unverified: "unverified";
        proof_gap: "proof_gap";
        verified: "verified";
        refused: "refused";
        unsupported: "unsupported";
    }>;
    replayStatus: z.ZodEnum<{
        stale: "stale";
        fresh: "fresh";
        replayed: "replayed";
        missing: "missing";
        not_applicable: "not_applicable";
    }>;
    verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    safetyPosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        display_bound: "display_bound";
        digest_bound: "digest_bound";
        verifier_bound: "verifier_bound";
        provider_observed: "provider_observed";
    }>;
}, z.core.$strict>;
export type TypedActionCommitmentSummary = z.infer<typeof TypedActionCommitmentSummarySchema>;
export declare const TypedActionCommitmentRecordSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    typedActionCommitmentId: z.ZodString;
    commitmentDigest: z.ZodString;
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
    domain: z.ZodObject<{
        domainRef: z.ZodString;
        domainDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        tenantId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        organizationId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        gatewayId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        actionClass: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        providerEnvironmentRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
    typedPayload: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
    replayPosture: z.ZodObject<{
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
    }, z.core.$strict>;
    signerOrVerifier: z.ZodObject<{
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
    }, z.core.$strict>;
    safetyPosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        display_bound: "display_bound";
        digest_bound: "digest_bound";
        verifier_bound: "verifier_bound";
        provider_observed: "provider_observed";
    }>;
    projectionClass: z.ZodDefault<z.ZodEnum<{
        public_redacted: "public_redacted";
        operator_redacted: "operator_redacted";
        auditor_export: "auditor_export";
    }>>;
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
    recordedAt: z.ZodString;
}, z.core.$strict>;
export type TypedActionCommitmentRecord = z.infer<typeof TypedActionCommitmentRecordSchema>;
