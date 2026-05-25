import { z } from "zod";
export declare const X402_PROTECTED_TOOL_READINESS_VERSION: "handshake.adapter.x402-protected-tool-readiness.v1";
export declare const X402ProtectedToolReadinessRawSiblingPostureSchema: z.ZodEnum<{
    unknown: "unknown";
    named_not_controlled: "named_not_controlled";
}>;
export type X402ProtectedToolReadinessRawSiblingPosture = z.infer<typeof X402ProtectedToolReadinessRawSiblingPostureSchema>;
export declare const X402ProtectedToolReadinessAuthorityBoundarySchema: z.ZodObject<{
    readinessScope: z.ZodLiteral<"pre_contract">;
    createsAuthority: z.ZodLiteral<false>;
    createsPolicyDecision: z.ZodLiteral<false>;
    createsGreenlight: z.ZodLiteral<false>;
    performsGatewayCheck: z.ZodLiteral<false>;
    performsMutation: z.ZodLiteral<false>;
    resolvesCredential: z.ZodLiteral<false>;
    invokesSigner: z.ZodLiteral<false>;
    createsPaymentMaterial: z.ZodLiteral<false>;
    createsPaymentSignature: z.ZodLiteral<false>;
    exportsReceipt: z.ZodLiteral<false>;
    mintsTerminalCertificate: z.ZodLiteral<false>;
    claimsHostedOperation: z.ZodLiteral<false>;
    claimsProviderCustody: z.ZodLiteral<false>;
    claimsSettlement: z.ZodLiteral<false>;
    claimsHostWideContainment: z.ZodLiteral<false>;
    certifiesMarketplace: z.ZodLiteral<false>;
}, z.core.$strict>;
export type X402ProtectedToolReadinessAuthorityBoundary = z.infer<typeof X402ProtectedToolReadinessAuthorityBoundarySchema>;
export declare const x402ProtectedToolReadinessAuthorityBoundary: {
    readinessScope: "pre_contract";
    createsAuthority: false;
    createsPolicyDecision: false;
    createsGreenlight: false;
    performsGatewayCheck: false;
    performsMutation: false;
    resolvesCredential: false;
    invokesSigner: false;
    createsPaymentMaterial: false;
    createsPaymentSignature: false;
    exportsReceipt: false;
    mintsTerminalCertificate: false;
    claimsHostedOperation: false;
    claimsProviderCustody: false;
    claimsSettlement: false;
    claimsHostWideContainment: false;
    certifiesMarketplace: false;
};
export declare const X402ProtectedToolReadinessSnapshotSchema: z.ZodObject<{
    schemaVersion: z.ZodDefault<z.ZodLiteral<"handshake.adapter.x402-protected-tool-readiness.v1">>;
    readinessStatus: z.ZodEnum<{
        not_ready: "not_ready";
        local_posture_evidence_present: "local_posture_evidence_present";
        trusted_gateway_ready: "trusted_gateway_ready";
    }>;
    readinessScope: z.ZodDefault<z.ZodLiteral<"pre_contract">>;
    readinessProofLevel: z.ZodDefault<z.ZodEnum<{
        none: "none";
        local_compilation: "local_compilation";
        local_classification: "local_classification";
        control_plane_registration: "control_plane_registration";
    }>>;
    trustedReadiness: z.ZodBoolean;
    requiredNextMechanism: z.ZodEnum<{
        initialize_project: "initialize_project";
        compile_install: "compile_install";
        record_probe_report: "record_probe_report";
        register_control_plane_install: "register_control_plane_install";
        ready_for_runtime_facade: "ready_for_runtime_facade";
    }>;
    gatewayReadinessRef: z.ZodNullable<z.ZodString>;
    gatewayReadinessDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    readinessExpiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    installDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    probePostureDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paymentRequirementsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    selectedPaymentRequirementDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayId: z.ZodNullable<z.ZodString>;
    gatewayRegistrationRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayCredentialRefDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayCredentialCustodyStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        missing: "missing";
        agent_exposed: "agent_exposed";
    }>>;
    gatewayCustodyProofPacketRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayCustodyProofPacketDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayCustodyClaimLevel: z.ZodDefault<z.ZodEnum<{
        proof_gap: "proof_gap";
        local_fixture: "local_fixture";
        customer_gateway_evidence: "customer_gateway_evidence";
        provider_gateway_evidence: "provider_gateway_evidence";
    }>>;
    gatewayCustodyExternalVerificationStatus: z.ZodDefault<z.ZodEnum<{
        not_required: "not_required";
        required_before_live_claim: "required_before_live_claim";
        verified_by_official_source: "verified_by_official_source";
    }>>;
    gatewayCustodyProofExpiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        online: "online";
        offline: "offline";
    }>>;
    policyVersionRef: z.ZodNullable<z.ZodString>;
    policyVersionDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayRegistryEntryRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    operatingEnvelopeRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    rawCredentialRefsIncluded: z.ZodDefault<z.ZodLiteral<false>>;
    rawSiblingPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        named_not_controlled: "named_not_controlled";
    }>>;
    rawSiblingProofRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorityBoundary: z.ZodDefault<z.ZodObject<{
        readinessScope: z.ZodLiteral<"pre_contract">;
        createsAuthority: z.ZodLiteral<false>;
        createsPolicyDecision: z.ZodLiteral<false>;
        createsGreenlight: z.ZodLiteral<false>;
        performsGatewayCheck: z.ZodLiteral<false>;
        performsMutation: z.ZodLiteral<false>;
        resolvesCredential: z.ZodLiteral<false>;
        invokesSigner: z.ZodLiteral<false>;
        createsPaymentMaterial: z.ZodLiteral<false>;
        createsPaymentSignature: z.ZodLiteral<false>;
        exportsReceipt: z.ZodLiteral<false>;
        mintsTerminalCertificate: z.ZodLiteral<false>;
        claimsHostedOperation: z.ZodLiteral<false>;
        claimsProviderCustody: z.ZodLiteral<false>;
        claimsSettlement: z.ZodLiteral<false>;
        claimsHostWideContainment: z.ZodLiteral<false>;
        certifiesMarketplace: z.ZodLiteral<false>;
    }, z.core.$strict>>;
    proofGapReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type X402ProtectedToolReadinessSnapshot = z.infer<typeof X402ProtectedToolReadinessSnapshotSchema>;
