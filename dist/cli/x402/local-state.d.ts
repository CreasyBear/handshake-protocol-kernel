import { z } from "zod";
export declare const CLI_X402_INSTALL_RECORD_SCHEMA_VERSION: "handshake.cli.x402-install.v1";
export declare const CLI_X402_PROBE_REPORT_SCHEMA_VERSION: "handshake.cli.x402-probe-report.v1";
export declare const CLI_X402_GATEWAY_READINESS_SCHEMA_VERSION: "handshake.cli.x402-gateway-readiness.v1";
export declare const CLI_X402_READINESS_REPORT_SCHEMA_VERSION: "handshake.cli.x402-readiness.v1";
export declare const LocalX402InstallRecordSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.cli.x402-install.v1">;
    projectId: z.ZodString;
    recordedAt: z.ZodString;
    installProposalRef: z.ZodString;
    installDigest: z.ZodString;
    installStatus: z.ZodEnum<{
        refused: "refused";
        ready_to_install: "ready_to_install";
    }>;
    adapterPackId: z.ZodLiteral<"adapter_pack_x402_payment_exact">;
    actionClass: z.ZodLiteral<"x402_payment.exact">;
    protectedSurfaceKind: z.ZodLiteral<"x402_payment">;
    resourceRef: z.ZodString;
    endpointDomain: z.ZodString;
    paymentRequirementsDigest: z.ZodString;
    selectedPaymentRequirementIndex: z.ZodNullable<z.ZodNumber>;
    selectedPaymentRequirementDigest: z.ZodNullable<z.ZodString>;
    perCallAmountBound: z.ZodString;
    spendWindowEnforcementStatus: z.ZodLiteral<"not_enforced_local_metadata">;
    gatewayAuthorityRefDigest: z.ZodString;
    paymentCredentialRefDigest: z.ZodString;
    credentialCustodyStatus: z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        agent_exposed: "agent_exposed";
    }>;
    rawCredentialRefsIncluded: z.ZodLiteral<false>;
    unsupportedX402Surfaces: z.ZodArray<z.ZodString>;
    refusalReasonCodes: z.ZodArray<z.ZodString>;
    compiledRecordsIncluded: z.ZodLiteral<false>;
    compiledRecordRefs: z.ZodNullable<z.ZodObject<{
        toolCapabilityRef: z.ZodString;
        actionTypeRef: z.ZodString;
        gatewayRegistryEntryRef: z.ZodString;
        operatingEnvelopeRef: z.ZodString;
    }, z.core.$strict>>;
    readinessAuthority: z.ZodLiteral<"local_compilation">;
    trustedInstallReadiness: z.ZodLiteral<false>;
    nextReadinessAction: z.ZodLiteral<"register_control_plane_install">;
    controlPlaneRegistrationRequired: z.ZodLiteral<true>;
    controlPlaneRegistrationPerformed: z.ZodLiteral<false>;
    authorityCreated: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    mutationAttempted: z.ZodLiteral<false>;
}, z.core.$strict>;
export type LocalX402InstallRecord = z.infer<typeof LocalX402InstallRecordSchema>;
export declare const LocalX402ProbeCoverageSchema: z.ZodObject<{
    probeKind: z.ZodEnum<{
        credential_custody: "credential_custody";
        raw_sibling_blocking: "raw_sibling_blocking";
        mcp_direct_call_blocking: "mcp_direct_call_blocking";
        token_passthrough_blocking: "token_passthrough_blocking";
        wrapper_drift: "wrapper_drift";
        failure_closed: "failure_closed";
    }>;
    probeOutcome: z.ZodEnum<{
        passed: "passed";
        failed: "failed";
        inconclusive: "inconclusive";
    }>;
    sourceAuthority: z.ZodLiteral<"local_classification">;
    reasonCodes: z.ZodArray<z.ZodString>;
    evidenceRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type LocalX402ProbeCoverage = z.infer<typeof LocalX402ProbeCoverageSchema>;
export declare const LocalX402ProbeReportSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.cli.x402-probe-report.v1">;
    projectId: z.ZodString;
    observedAt: z.ZodString;
    expiresAt: z.ZodString;
    adapterPackId: z.ZodLiteral<"adapter_pack_x402_payment_exact">;
    actionClass: z.ZodLiteral<"x402_payment.exact">;
    protectedSurfaceKind: z.ZodLiteral<"x402_payment">;
    readinessAuthority: z.ZodLiteral<"local_classification">;
    trustedReadiness: z.ZodLiteral<false>;
    passed: z.ZodBoolean;
    reasonCodes: z.ZodArray<z.ZodString>;
    probeCoverage: z.ZodArray<z.ZodObject<{
        probeKind: z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>;
        probeOutcome: z.ZodEnum<{
            passed: "passed";
            failed: "failed";
            inconclusive: "inconclusive";
        }>;
        sourceAuthority: z.ZodLiteral<"local_classification">;
        reasonCodes: z.ZodArray<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    postureDigest: z.ZodString;
    authorityCreated: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    mutationAttempted: z.ZodLiteral<false>;
}, z.core.$strict>;
export type LocalX402ProbeReport = z.infer<typeof LocalX402ProbeReportSchema>;
export declare const LocalX402GatewayReadinessRecordSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.cli.x402-gateway-readiness.v1">;
    projectId: z.ZodString;
    recordedAt: z.ZodString;
    expiresAt: z.ZodString;
    readinessScope: z.ZodLiteral<"pre_contract">;
    adapterPackId: z.ZodLiteral<"adapter_pack_x402_payment_exact">;
    actionClass: z.ZodLiteral<"x402_payment.exact">;
    protectedSurfaceKind: z.ZodLiteral<"x402_payment">;
    readinessAuthority: z.ZodLiteral<"control_plane_registration">;
    trustedReadiness: z.ZodLiteral<true>;
    installProposalRef: z.ZodString;
    installDigest: z.ZodString;
    probeReportRef: z.ZodString;
    probePostureDigest: z.ZodString;
    paymentRequirementsDigest: z.ZodString;
    selectedPaymentRequirementDigest: z.ZodString;
    protectedToolReadiness: z.ZodObject<{
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
    gatewayId: z.ZodString;
    gatewayRegistrationRef: z.ZodString;
    gatewayCredentialRefDigest: z.ZodString;
    gatewayCredentialCustodyStatus: z.ZodEnum<{
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
    }>;
    gatewayCustodyProofPacketRef: z.ZodString;
    gatewayCustodyProofPacketDigest: z.ZodString;
    gatewayCustodyClaimLevel: z.ZodEnum<{
        local_fixture: "local_fixture";
        customer_gateway_evidence: "customer_gateway_evidence";
        provider_gateway_evidence: "provider_gateway_evidence";
    }>;
    gatewayCustodyExternalVerificationStatus: z.ZodEnum<{
        not_required: "not_required";
        required_before_live_claim: "required_before_live_claim";
        verified_by_official_source: "verified_by_official_source";
    }>;
    gatewayCustodyProofExpiresAt: z.ZodString;
    gatewayPosture: z.ZodLiteral<"online">;
    policyVersionRef: z.ZodString;
    policyVersionDigest: z.ZodString;
    gatewayRegistryEntryRef: z.ZodString;
    operatingEnvelopeRef: z.ZodString;
    evidenceRefs: z.ZodArray<z.ZodString>;
    rawCredentialRefsIncluded: z.ZodLiteral<false>;
    controlPlaneRegistrationPerformed: z.ZodLiteral<true>;
    authorityCreated: z.ZodLiteral<false>;
    greenlightCreated: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    mutationAttempted: z.ZodLiteral<false>;
}, z.core.$strict>;
export type LocalX402GatewayReadinessRecord = z.infer<typeof LocalX402GatewayReadinessRecordSchema>;
export declare const LocalX402ReadinessReportSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.cli.x402-readiness.v1">;
    readinessScope: z.ZodLiteral<"pre_contract">;
    actionClass: z.ZodLiteral<"x402_payment.exact">;
    protectedSurfaceKind: z.ZodLiteral<"x402_payment">;
    readinessAuthority: z.ZodLiteral<"local_cli">;
    readinessStatus: z.ZodEnum<{
        not_ready: "not_ready";
        local_posture_evidence_present: "local_posture_evidence_present";
        trusted_gateway_ready: "trusted_gateway_ready";
    }>;
    proofLevel: z.ZodEnum<{
        none: "none";
        local_compilation: "local_compilation";
        local_classification: "local_classification";
        control_plane_registration: "control_plane_registration";
    }>;
    trustedReadiness: z.ZodBoolean;
    requiredNextMechanism: z.ZodEnum<{
        initialize_project: "initialize_project";
        compile_install: "compile_install";
        record_probe_report: "record_probe_report";
        register_control_plane_install: "register_control_plane_install";
        ready_for_runtime_facade: "ready_for_runtime_facade";
    }>;
    gatewayReadinessRef: z.ZodNullable<z.ZodString>;
    gatewayId: z.ZodNullable<z.ZodString>;
    gatewayCustodyProofPacketRef: z.ZodNullable<z.ZodString>;
    policyVersionRef: z.ZodNullable<z.ZodString>;
    protectedToolReadiness: z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strict>>;
    checks: z.ZodObject<{
        projectConfig: z.ZodEnum<{
            present: "present";
            missing: "missing";
        }>;
        installCompilation: z.ZodEnum<{
            refused: "refused";
            missing: "missing";
            ready_to_install: "ready_to_install";
        }>;
        controlPlaneRegistration: z.ZodEnum<{
            missing: "missing";
            registered: "registered";
            required_not_performed: "required_not_performed";
        }>;
        signerCustody: z.ZodEnum<{
            unknown: "unknown";
            gateway_held: "gateway_held";
            fixture_gateway_held: "fixture_gateway_held";
            missing: "missing";
            agent_exposed: "agent_exposed";
        }>;
        custodyProof: z.ZodEnum<{
            unverified: "unverified";
            stale: "stale";
            missing: "missing";
            registered: "registered";
        }>;
        gatewayPosture: z.ZodEnum<{
            unknown: "unknown";
            stale: "stale";
            registered_online: "registered_online";
            local_classification_passed: "local_classification_passed";
            local_classification_failed: "local_classification_failed";
        }>;
        policyVersion: z.ZodEnum<{
            unknown: "unknown";
            registered: "registered";
            local_metadata_only: "local_metadata_only";
        }>;
        probeFreshness: z.ZodEnum<{
            stale: "stale";
            missing: "missing";
            fresh: "fresh";
        }>;
    }, z.core.$strict>;
    proofGapPostures: z.ZodArray<z.ZodEnum<{
        project_config_missing: "project_config_missing";
        install_missing: "install_missing";
        install_refused: "install_refused";
        probe_missing: "probe_missing";
        probe_failed: "probe_failed";
        probe_stale: "probe_stale";
        control_plane_registration_missing: "control_plane_registration_missing";
        trusted_gateway_posture_invalid: "trusted_gateway_posture_invalid";
        trusted_gateway_posture_missing: "trusted_gateway_posture_missing";
        trusted_gateway_posture_stale: "trusted_gateway_posture_stale";
        custody_proof_missing: "custody_proof_missing";
        custody_proof_unverified: "custody_proof_unverified";
        custody_proof_stale: "custody_proof_stale";
    }>>;
    proofGapReasonCodes: z.ZodArray<z.ZodString>;
    nonClaims: z.ZodArray<z.ZodString>;
    authorityCreated: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    mutationAttempted: z.ZodLiteral<false>;
}, z.core.$strict>;
export type LocalX402ReadinessReport = z.infer<typeof LocalX402ReadinessReportSchema>;
