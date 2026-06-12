import { z } from "zod";
export { TypedActionCommitmentProjectionRedactionPostureSchema, TypedActionCommitmentProjectionSchema, TypedActionCommitmentRawReadAuditLinkSchema, TypedActionCommitmentSignatureEvidenceProjectionSchema, type TypedActionCommitmentProjection, type TypedActionCommitmentProjectionRedactionPosture, type TypedActionCommitmentRawReadAuditLink, type TypedActionCommitmentSignatureEvidenceProjection, } from "../areas/typed-action-commitment";
export declare const ContractEvidenceProjectionSchema: z.ZodObject<{
    actionContractRef: z.ZodString;
    contractDigest: z.ZodString;
    intentCompilationRef: z.ZodString;
    candidateActionRef: z.ZodString;
    candidateDigest: z.ZodString;
    envelopeRef: z.ZodString;
    principalRef: z.ZodString;
    agentRef: z.ZodString;
    participantIdentityBindings: z.ZodDefault<z.ZodArray<z.ZodObject<{
        participantRole: z.ZodEnum<{
            principal: "principal";
            agent: "agent";
        }>;
        participantRef: z.ZodString;
        identityProviderRef: z.ZodString;
        subjectRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        subjectDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        claimsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        verificationEvidenceRef: z.ZodString;
        bindingEvidenceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        issuedAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        authorityPosture: z.ZodDefault<z.ZodLiteral<"evidence_only">>;
    }, z.core.$strict>>>;
    runId: z.ZodString;
    runtimeAdapterRef: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    resourceRef: z.ZodString;
    gatewayId: z.ZodString;
    gatewayPolicyVersion: z.ZodString;
    requiredProtectedPathState: z.ZodEnum<{
        not_required: "not_required";
        gateway_checked: "gateway_checked";
    }>;
    idempotencyKey: z.ZodString;
    paramsDigest: z.ZodString;
    nonSecretParamsSummary: z.ZodRecord<z.ZodString, z.ZodType<import("../..").JsonValue, unknown, z.core.$ZodTypeInternals<import("../..").JsonValue, unknown>>>;
    gatewayCredentialRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        credentialUseName: z.ZodString;
        gatewayCredentialRefId: z.ZodString;
        gatewayCredentialRefDigest: z.ZodString;
        providerRegistryRef: z.ZodString;
        providerRegistryDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        requiredCredentialCustodyStatus: z.ZodEnum<{
            unknown: "unknown";
            gateway_held: "gateway_held";
            fixture_gateway_held: "fixture_gateway_held";
            gateway_resolved_from_vault: "gateway_resolved_from_vault";
            provider_gateway_held: "provider_gateway_held";
            unsafe_agent_visible: "unsafe_agent_visible";
            unsafe_runtime_visible: "unsafe_runtime_visible";
            agent_has_raw_credential: "agent_has_raw_credential";
            shared_or_unknown: "shared_or_unknown";
            no_mutation_credential: "no_mutation_credential";
        }>;
        evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    delegatedAuthorityRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        authorityUseName: z.ZodString;
        delegatedAuthorityRefId: z.ZodString;
        delegatedAuthorityRefDigest: z.ZodString;
        requiredGrantStatus: z.ZodDefault<z.ZodLiteral<"active">>;
        authorityKind: z.ZodEnum<{
            mutation: "mutation";
            spend: "spend";
            api_call: "api_call";
        }>;
        policyPackRef: z.ZodString;
        policyPackVersion: z.ZodString;
        evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    clearingEvidenceRefs: z.ZodDefault<z.ZodObject<{
        correlationRef: z.ZodOptional<z.ZodString>;
        obligationRef: z.ZodOptional<z.ZodString>;
        counterpartyRef: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    signaturePosture: z.ZodEnum<{
        unsigned: "unsigned";
        local_hmac: "local_hmac";
        external_signature: "external_signature";
        unverified: "unverified";
    }>;
    keyIdentityRef: z.ZodNullable<z.ZodString>;
    verificationPolicyRef: z.ZodNullable<z.ZodString>;
    generatedExecutionGraphRef: z.ZodNullable<z.ZodString>;
    generatedExecutionNodeRef: z.ZodNullable<z.ZodString>;
    redactionProfileRef: z.ZodLiteral<"contract-view:v0.2-redacted">;
    omittedFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type ContractEvidenceProjection = z.infer<typeof ContractEvidenceProjectionSchema>;
export declare const IdempotencyRecoveryDispositionSchema: z.ZodEnum<{
    missing: "missing";
    same_params_result_available: "same_params_result_available";
    same_params_duplicate_refused: "same_params_duplicate_refused";
    different_params_refused: "different_params_refused";
    terminal_unknown_requires_recovery: "terminal_unknown_requires_recovery";
}>;
export type IdempotencyRecoveryDisposition = z.infer<typeof IdempotencyRecoveryDispositionSchema>;
export declare const IdempotencyRecoveryProjectionSchema: z.ZodObject<{
    actionContractRef: z.ZodString;
    ledgerKeyDigest: z.ZodString;
    idempotencyKey: z.ZodString;
    paramsDigest: z.ZodString;
    currentLedgerRef: z.ZodNullable<z.ZodString>;
    currentLedgerState: z.ZodNullable<z.ZodEnum<{
        terminal_unknown: "terminal_unknown";
        authority_reserved: "authority_reserved";
        mutation_started: "mutation_started";
        terminal_succeeded: "terminal_succeeded";
        terminal_failed: "terminal_failed";
        terminal_refused: "terminal_refused";
    }>>;
    paramsDigestMatch: z.ZodNullable<z.ZodBoolean>;
    priorActionContractRef: z.ZodNullable<z.ZodString>;
    policyDecisionRef: z.ZodNullable<z.ZodString>;
    greenlightRef: z.ZodNullable<z.ZodString>;
    gateAttemptRef: z.ZodNullable<z.ZodString>;
    mutationAttemptRef: z.ZodNullable<z.ZodString>;
    receiptRef: z.ZodNullable<z.ZodString>;
    priorResultRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    recoveryDisposition: z.ZodEnum<{
        missing: "missing";
        same_params_result_available: "same_params_result_available";
        same_params_duplicate_refused: "same_params_duplicate_refused";
        different_params_refused: "different_params_refused";
        terminal_unknown_requires_recovery: "terminal_unknown_requires_recovery";
    }>;
    reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    redactionProfileRef: z.ZodLiteral<"idempotency-recovery:v0.2-redacted">;
    omittedFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type IdempotencyRecoveryProjection = z.infer<typeof IdempotencyRecoveryProjectionSchema>;
export declare const ReceiptTimelineEventProjectionSchema: z.ZodObject<{
    streamId: z.ZodString;
    streamScope: z.ZodEnum<{
        tenant: "tenant";
        organization: "organization";
        run: "run";
        protected_surface_resource: "protected_surface_resource";
    }>;
    partitionKey: z.ZodString;
    offset: z.ZodNumber;
    eventType: z.ZodEnum<{
        protected_path_posture_recorded: "protected_path_posture_recorded";
        review_required: "review_required";
        review_artifact_recorded: "review_artifact_recorded";
        review_decision_recorded: "review_decision_recorded";
        receipt_exported: "receipt_exported";
        recovery_recommended: "recovery_recommended";
        proof_gap_resolved: "proof_gap_resolved";
        gateway_checked: "gateway_checked";
        intent_compiled: "intent_compiled";
        runtime_execution_recorded: "runtime_execution_recorded";
        generated_execution_graph_recorded: "generated_execution_graph_recorded";
        install_setup_recorded: "install_setup_recorded";
        install_setup_refused: "install_setup_refused";
        gateway_credential_ref_registered: "gateway_credential_ref_registered";
        delegated_authority_ref_registered: "delegated_authority_ref_registered";
        delegated_authority_status_changed: "delegated_authority_status_changed";
        gateway_custody_proof_packet_recorded: "gateway_custody_proof_packet_recorded";
        credential_resolution_recorded: "credential_resolution_recorded";
        typed_action_commitment_recorded: "typed_action_commitment_recorded";
        idempotency_ledger_recorded: "idempotency_ledger_recorded";
        bypass_probe_recorded: "bypass_probe_recorded";
        tool_call_draft_recorded: "tool_call_draft_recorded";
        negotiation_session_recorded: "negotiation_session_recorded";
        negotiation_offer_recorded: "negotiation_offer_recorded";
        negotiation_decision_recorded: "negotiation_decision_recorded";
        linked_agreement_recorded: "linked_agreement_recorded";
        agreement_obligation_binding_recorded: "agreement_obligation_binding_recorded";
        agreement_status_transition_recorded: "agreement_status_transition_recorded";
        action_proposed: "action_proposed";
        policy_decision_recorded: "policy_decision_recorded";
        action_greenlit: "action_greenlit";
        action_refused: "action_refused";
        mutation_attempted: "mutation_attempted";
        protected_surface_operation_claimed: "protected_surface_operation_claimed";
        protected_surface_operation_released: "protected_surface_operation_released";
        surface_operation_reconciled: "surface_operation_reconciled";
        gateway_refused: "gateway_refused";
        breaker_decision_recorded: "breaker_decision_recorded";
        receipt_emitted: "receipt_emitted";
        authority_certificate_emitted: "authority_certificate_emitted";
        raw_evidence_read_audited: "raw_evidence_read_audited";
        recovery_status_changed: "recovery_status_changed";
        proof_gap_recorded: "proof_gap_recorded";
        isolation_changed: "isolation_changed";
    }>;
    eventTime: z.ZodString;
    eventDigest: z.ZodString;
    objectRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type ReceiptTimelineEventProjection = z.infer<typeof ReceiptTimelineEventProjectionSchema>;
export declare const ReceiptTimelineFailureEvidenceProjectionSchema: z.ZodObject<{
    downstreamRetryability: z.ZodEnum<{
        unknown: "unknown";
        retryable: "retryable";
        non_retryable: "non_retryable";
    }>;
    providerRequestRef: z.ZodNullable<z.ZodString>;
    providerOperationRef: z.ZodNullable<z.ZodString>;
    redactedDiagnosticsDigest: z.ZodNullable<z.ZodString>;
    traceRef: z.ZodNullable<z.ZodString>;
    spanRef: z.ZodNullable<z.ZodString>;
    diagnosticsRedactionPosture: z.ZodEnum<{
        unknown: "unknown";
        none: "none";
        redacted: "redacted";
        digest_only: "digest_only";
    }>;
}, z.core.$strict>;
export type ReceiptTimelineFailureEvidenceProjection = z.infer<typeof ReceiptTimelineFailureEvidenceProjectionSchema>;
export declare const ReceiptTimelineProjectionSchema: z.ZodObject<{
    receiptRef: z.ZodString;
    actionContractRef: z.ZodString;
    policyDecisionRef: z.ZodString;
    greenlightRef: z.ZodNullable<z.ZodString>;
    gateAttemptRef: z.ZodNullable<z.ZodString>;
    mutationAttemptRef: z.ZodNullable<z.ZodString>;
    gatewayId: z.ZodString;
    policyDecisionStatus: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    gatewayCheckStatus: z.ZodNullable<z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        passed: "passed";
    }>>;
    gatewayAdmissionStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        replayed: "replayed";
        not_requested: "not_requested";
        admitted: "admitted";
    }>;
    greenlightConsumptionStatus: z.ZodEnum<{
        replayed: "replayed";
        not_applicable: "not_applicable";
        not_consumed: "not_consumed";
        consumed: "consumed";
    }>;
    mutationAttemptStatus: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        not_attempted: "not_attempted";
        submitted: "submitted";
        succeeded: "succeeded";
        downstream_refused: "downstream_refused";
    }>;
    downstreamExecutionStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        failed: "failed";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    downstreamOutcomeStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        failed: "failed";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    finalityStatus: z.ZodEnum<{
        unknown: "unknown";
        pending: "pending";
        final: "final";
        suspect: "suspect";
    }>;
    receiptDigest: z.ZodNullable<z.ZodString>;
    auditChainDigest: z.ZodNullable<z.ZodString>;
    streamOffsets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        streamScope: z.ZodEnum<{
            tenant: "tenant";
            organization: "organization";
            run: "run";
            protected_surface_resource: "protected_surface_resource";
        }>;
        partitionKey: z.ZodString;
        offsetStart: z.ZodNumber;
        offsetEnd: z.ZodNumber;
        terminalEventDigest: z.ZodString;
    }, z.core.$strict>>>;
    events: z.ZodDefault<z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        streamScope: z.ZodEnum<{
            tenant: "tenant";
            organization: "organization";
            run: "run";
            protected_surface_resource: "protected_surface_resource";
        }>;
        partitionKey: z.ZodString;
        offset: z.ZodNumber;
        eventType: z.ZodEnum<{
            protected_path_posture_recorded: "protected_path_posture_recorded";
            review_required: "review_required";
            review_artifact_recorded: "review_artifact_recorded";
            review_decision_recorded: "review_decision_recorded";
            receipt_exported: "receipt_exported";
            recovery_recommended: "recovery_recommended";
            proof_gap_resolved: "proof_gap_resolved";
            gateway_checked: "gateway_checked";
            intent_compiled: "intent_compiled";
            runtime_execution_recorded: "runtime_execution_recorded";
            generated_execution_graph_recorded: "generated_execution_graph_recorded";
            install_setup_recorded: "install_setup_recorded";
            install_setup_refused: "install_setup_refused";
            gateway_credential_ref_registered: "gateway_credential_ref_registered";
            delegated_authority_ref_registered: "delegated_authority_ref_registered";
            delegated_authority_status_changed: "delegated_authority_status_changed";
            gateway_custody_proof_packet_recorded: "gateway_custody_proof_packet_recorded";
            credential_resolution_recorded: "credential_resolution_recorded";
            typed_action_commitment_recorded: "typed_action_commitment_recorded";
            idempotency_ledger_recorded: "idempotency_ledger_recorded";
            bypass_probe_recorded: "bypass_probe_recorded";
            tool_call_draft_recorded: "tool_call_draft_recorded";
            negotiation_session_recorded: "negotiation_session_recorded";
            negotiation_offer_recorded: "negotiation_offer_recorded";
            negotiation_decision_recorded: "negotiation_decision_recorded";
            linked_agreement_recorded: "linked_agreement_recorded";
            agreement_obligation_binding_recorded: "agreement_obligation_binding_recorded";
            agreement_status_transition_recorded: "agreement_status_transition_recorded";
            action_proposed: "action_proposed";
            policy_decision_recorded: "policy_decision_recorded";
            action_greenlit: "action_greenlit";
            action_refused: "action_refused";
            mutation_attempted: "mutation_attempted";
            protected_surface_operation_claimed: "protected_surface_operation_claimed";
            protected_surface_operation_released: "protected_surface_operation_released";
            surface_operation_reconciled: "surface_operation_reconciled";
            gateway_refused: "gateway_refused";
            breaker_decision_recorded: "breaker_decision_recorded";
            receipt_emitted: "receipt_emitted";
            authority_certificate_emitted: "authority_certificate_emitted";
            raw_evidence_read_audited: "raw_evidence_read_audited";
            recovery_status_changed: "recovery_status_changed";
            proof_gap_recorded: "proof_gap_recorded";
            isolation_changed: "isolation_changed";
        }>;
        eventTime: z.ZodString;
        eventDigest: z.ZodString;
        objectRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    missingEventCount: z.ZodNumber;
    failureEvidence: z.ZodNullable<z.ZodObject<{
        downstreamRetryability: z.ZodEnum<{
            unknown: "unknown";
            retryable: "retryable";
            non_retryable: "non_retryable";
        }>;
        providerRequestRef: z.ZodNullable<z.ZodString>;
        providerOperationRef: z.ZodNullable<z.ZodString>;
        redactedDiagnosticsDigest: z.ZodNullable<z.ZodString>;
        traceRef: z.ZodNullable<z.ZodString>;
        spanRef: z.ZodNullable<z.ZodString>;
        diagnosticsRedactionPosture: z.ZodEnum<{
            unknown: "unknown";
            none: "none";
            redacted: "redacted";
            digest_only: "digest_only";
        }>;
    }, z.core.$strict>>;
    delegationProvenance: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        a1ChainFingerprint: z.ZodString;
        chainDepth: z.ZodNumber;
        principalPkFingerprint: z.ZodString;
        terminalDelegatePkFingerprint: z.ZodString;
        verifyOutcome: z.ZodEnum<{
            valid: "valid";
            invalid: "invalid";
        }>;
        reasonCodes: z.ZodArray<z.ZodString>;
        evidenceBindingDigest: z.ZodString;
        a1VerifierVersion: z.ZodString;
        mutationAuthorityCreated: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
    }, z.core.$strict>>>;
    redactionProfileRef: z.ZodLiteral<"receipt-timeline:v0.2-redacted">;
    omittedFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type ReceiptTimelineProjection = z.infer<typeof ReceiptTimelineProjectionSchema>;
declare const AuthMdEvidenceRefsProjectionSchema: z.ZodObject<{
    discoveryRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorizationServerRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    identityAssertionRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    registrationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    claimRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    revocationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    credentialCustodyRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    credentialResolutionRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    protectedApiCallRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    downstreamEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type AuthMdEvidenceRefsProjection = z.infer<typeof AuthMdEvidenceRefsProjectionSchema>;
export declare const AgentTransactionEnvelopeProjectionSchema: z.ZodObject<{
    actionContractRef: z.ZodString;
    contractDigest: z.ZodString;
    policyDecisionRef: z.ZodString;
    policyDecisionStatus: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    greenlightRef: z.ZodNullable<z.ZodString>;
    gateAttemptRef: z.ZodNullable<z.ZodString>;
    mutationAttemptRef: z.ZodNullable<z.ZodString>;
    receiptRef: z.ZodNullable<z.ZodString>;
    principalRef: z.ZodString;
    agentRef: z.ZodString;
    participantIdentityBindings: z.ZodDefault<z.ZodArray<z.ZodObject<{
        participantRole: z.ZodEnum<{
            principal: "principal";
            agent: "agent";
        }>;
        participantRef: z.ZodString;
        identityProviderRef: z.ZodString;
        subjectRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        subjectDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        claimsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        verificationEvidenceRef: z.ZodString;
        bindingEvidenceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        issuedAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        authorityPosture: z.ZodDefault<z.ZodLiteral<"evidence_only">>;
    }, z.core.$strict>>>;
    runId: z.ZodString;
    runtimeAdapterRef: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    resourceRef: z.ZodString;
    gatewayId: z.ZodString;
    gatewayPolicyVersion: z.ZodString;
    idempotencyKey: z.ZodString;
    paramsDigest: z.ZodString;
    nonSecretParamsSummary: z.ZodRecord<z.ZodString, z.ZodType<import("../..").JsonValue, unknown, z.core.$ZodTypeInternals<import("../..").JsonValue, unknown>>>;
    clearingEvidenceRefs: z.ZodDefault<z.ZodObject<{
        correlationRef: z.ZodOptional<z.ZodString>;
        obligationRef: z.ZodOptional<z.ZodString>;
        counterpartyRef: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    surfaceOperationRef: z.ZodNullable<z.ZodString>;
    surfaceOperationReconciliationRef: z.ZodNullable<z.ZodString>;
    surfaceOperationEvidenceLabels: z.ZodDefault<z.ZodArray<z.ZodString>>;
    surfaceOperationEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    gatewayCredentialEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    delegatedAuthorityEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    credentialResolutionEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    typedCommitmentRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    typedCommitmentSetDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    typedCommitmentProjectionClass: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
        public_redacted: "public_redacted";
        operator_redacted: "operator_redacted";
        auditor_export: "auditor_export";
    }>>>;
    typedCommitmentSummaries: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>>;
    typedCommitmentProjections: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>>;
    typedCommitmentRefusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    typedCommitmentProofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    signerInvocationEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    downstreamEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authMdEvidenceRefs: z.ZodObject<{
        discoveryRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        authorizationServerRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        identityAssertionRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        registrationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        claimRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        revocationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        credentialCustodyRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        credentialResolutionRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        protectedApiCallRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        downstreamEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
    authMdEvidenceLabels: z.ZodDefault<z.ZodArray<z.ZodString>>;
    providerRequestRef: z.ZodNullable<z.ZodString>;
    providerOperationRef: z.ZodNullable<z.ZodString>;
    downstreamRetryability: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        retryable: "retryable";
        non_retryable: "non_retryable";
    }>>;
    reconciliationFinalityStatus: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        pending: "pending";
        final: "final";
        suspect: "suspect";
    }>>;
    gatewayAdmissionStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        replayed: "replayed";
        not_requested: "not_requested";
        admitted: "admitted";
    }>;
    greenlightConsumptionStatus: z.ZodNullable<z.ZodEnum<{
        replayed: "replayed";
        not_applicable: "not_applicable";
        not_consumed: "not_consumed";
        consumed: "consumed";
    }>>;
    downstreamOutcomeStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        failed: "failed";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    refusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    refusalReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    idempotencyLedgerRef: z.ZodNullable<z.ZodString>;
    idempotencyLedgerState: z.ZodNullable<z.ZodEnum<{
        terminal_unknown: "terminal_unknown";
        authority_reserved: "authority_reserved";
        mutation_started: "mutation_started";
        terminal_succeeded: "terminal_succeeded";
        terminal_failed: "terminal_failed";
        terminal_refused: "terminal_refused";
    }>>;
    idempotencyRecoveryDisposition: z.ZodNullable<z.ZodEnum<{
        missing: "missing";
        same_params_result_available: "same_params_result_available";
        same_params_duplicate_refused: "same_params_duplicate_refused";
        different_params_refused: "different_params_refused";
        terminal_unknown_requires_recovery: "terminal_unknown_requires_recovery";
    }>>;
    idempotencyReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    recoveryRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    isolationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorityCertificateRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    streamOffsets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        streamScope: z.ZodEnum<{
            tenant: "tenant";
            organization: "organization";
            run: "run";
            protected_surface_resource: "protected_surface_resource";
        }>;
        partitionKey: z.ZodString;
        offsetStart: z.ZodNumber;
        offsetEnd: z.ZodNumber;
        terminalEventDigest: z.ZodString;
    }, z.core.$strict>>>;
    receiptDigest: z.ZodNullable<z.ZodString>;
    auditChainDigest: z.ZodNullable<z.ZodString>;
    receiptExportRef: z.ZodNullable<z.ZodString>;
    redactionProfileRef: z.ZodLiteral<"agent-transaction-envelope:v0.2-redacted">;
    omittedFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
    envelopeDigest: z.ZodString;
}, z.core.$strict>;
export type AgentTransactionEnvelopeProjection = z.infer<typeof AgentTransactionEnvelopeProjectionSchema>;
export declare const OperationReadbackStatusSchema: z.ZodEnum<{
    policy_refused: "policy_refused";
    policy_proof_gap: "policy_proof_gap";
    review_required: "review_required";
    gateway_admitted: "gateway_admitted";
    gateway_proof_gap: "gateway_proof_gap";
    replay_refused: "replay_refused";
    isolated: "isolated";
    quarantined: "quarantined";
    downstream_refused: "downstream_refused";
    gateway_refused: "gateway_refused";
    halted: "halted";
    greenlight_available: "greenlight_available";
    downstream_pending: "downstream_pending";
    downstream_succeeded: "downstream_succeeded";
    downstream_failed: "downstream_failed";
    downstream_unknown: "downstream_unknown";
    recovery_required: "recovery_required";
}>;
export type OperationReadbackStatus = z.infer<typeof OperationReadbackStatusSchema>;
export declare const OperationReadbackStageSchema: z.ZodEnum<{
    isolation: "isolation";
    recovery: "recovery";
    receipt: "receipt";
    action_contract: "action_contract";
    greenlight: "greenlight";
    intent_compilation: "intent_compilation";
    policy_decision: "policy_decision";
    mutation_attempt: "mutation_attempt";
    candidate_action: "candidate_action";
    gateway_check: "gateway_check";
}>;
export type OperationReadbackStage = z.infer<typeof OperationReadbackStageSchema>;
export declare const OperationCorrelationIndexSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.operation-correlation.v0.1">;
    actionContractRef: z.ZodString;
    sourceAuthority: z.ZodLiteral<"protocol_store_projection">;
    authorityCreatedByProjection: z.ZodLiteral<false>;
    greenlightCreatedByReadback: z.ZodLiteral<false>;
    gatewayCheckPerformedByReadback: z.ZodLiteral<false>;
    mutationAttemptedByReadback: z.ZodLiteral<false>;
    intentCompilationRef: z.ZodNullable<z.ZodString>;
    candidateActionRef: z.ZodNullable<z.ZodString>;
    policyDecisionRef: z.ZodString;
    greenlightRef: z.ZodNullable<z.ZodString>;
    gateAttemptRef: z.ZodNullable<z.ZodString>;
    mutationAttemptRef: z.ZodNullable<z.ZodString>;
    receiptRef: z.ZodNullable<z.ZodString>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    refusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    recoveryRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    isolationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorityCertificateRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    redactionProfileRef: z.ZodLiteral<"operation-correlation:v0.1-redacted">;
    omittedFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type OperationCorrelationIndex = z.infer<typeof OperationCorrelationIndexSchema>;
export declare const OperationReadbackNextMechanismSchema: z.ZodEnum<{
    use_greenlight_at_gateway: "use_greenlight_at_gateway";
    read_evidence: "read_evidence";
    request_review: "request_review";
    recraft_request: "recraft_request";
    create_new_contract: "create_new_contract";
    recover_terminal_unknown: "recover_terminal_unknown";
    stop: "stop";
    wait_for_downstream: "wait_for_downstream";
}>;
export type OperationReadbackNextMechanism = z.infer<typeof OperationReadbackNextMechanismSchema>;
export declare const OperationReadbackSupportSeveritySchema: z.ZodEnum<{
    none: "none";
    info: "info";
    warning: "warning";
    urgent: "urgent";
}>;
export type OperationReadbackSupportSeverity = z.infer<typeof OperationReadbackSupportSeveritySchema>;
export declare const OperationReadbackGreenlightUsePostureSchema: z.ZodEnum<{
    unknown: "unknown";
    none: "none";
    consumed: "consumed";
    available_for_one_gateway_check: "available_for_one_gateway_check";
    replayed_or_unusable: "replayed_or_unusable";
}>;
export type OperationReadbackGreenlightUsePosture = z.infer<typeof OperationReadbackGreenlightUsePostureSchema>;
export declare const OperationReadbackProjectionFreshnessStatusSchema: z.ZodEnum<{
    current: "current";
    not_observed: "not_observed";
    stale_or_concurrent_update: "stale_or_concurrent_update";
    stream_tail_missing: "stream_tail_missing";
}>;
export type OperationReadbackProjectionFreshnessStatus = z.infer<typeof OperationReadbackProjectionFreshnessStatusSchema>;
export declare const OperationReadbackProjectionFreshnessSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.operation-readback-freshness.v0.1">;
    sourceAuthority: z.ZodLiteral<"protocol_store_projection">;
    readModelKind: z.ZodLiteral<"direct_protocol_store_projection">;
    status: z.ZodEnum<{
        current: "current";
        not_observed: "not_observed";
        stale_or_concurrent_update: "stale_or_concurrent_update";
        stream_tail_missing: "stream_tail_missing";
    }>;
    streamId: z.ZodNullable<z.ZodString>;
    partitionKey: z.ZodNullable<z.ZodString>;
    observedOffset: z.ZodNullable<z.ZodNumber>;
    observedEventDigest: z.ZodNullable<z.ZodString>;
    latestOffset: z.ZodNullable<z.ZodNumber>;
    latestEventDigest: z.ZodNullable<z.ZodString>;
    lagEvents: z.ZodNullable<z.ZodNumber>;
    rawStreamEventsIncluded: z.ZodLiteral<false>;
    authorityCreatedByFreshness: z.ZodLiteral<false>;
}, z.core.$strict>;
export type OperationReadbackProjectionFreshness = z.infer<typeof OperationReadbackProjectionFreshnessSchema>;
export declare const OperationSupportContextSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.support-context.v0.1">;
    supportContextRef: z.ZodString;
    sourceAuthority: z.ZodLiteral<"protocol_store_projection">;
    surface: z.ZodLiteral<"operation_readback">;
    actionContractRef: z.ZodString;
    requestIdentity: z.ZodNullable<z.ZodString>;
    operationStatus: z.ZodEnum<{
        policy_refused: "policy_refused";
        policy_proof_gap: "policy_proof_gap";
        review_required: "review_required";
        gateway_admitted: "gateway_admitted";
        gateway_proof_gap: "gateway_proof_gap";
        replay_refused: "replay_refused";
        isolated: "isolated";
        quarantined: "quarantined";
        downstream_refused: "downstream_refused";
        gateway_refused: "gateway_refused";
        halted: "halted";
        greenlight_available: "greenlight_available";
        downstream_pending: "downstream_pending";
        downstream_succeeded: "downstream_succeeded";
        downstream_failed: "downstream_failed";
        downstream_unknown: "downstream_unknown";
        recovery_required: "recovery_required";
    }>;
    reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    nextMechanism: z.ZodEnum<{
        use_greenlight_at_gateway: "use_greenlight_at_gateway";
        read_evidence: "read_evidence";
        request_review: "request_review";
        recraft_request: "recraft_request";
        create_new_contract: "create_new_contract";
        recover_terminal_unknown: "recover_terminal_unknown";
        stop: "stop";
        wait_for_downstream: "wait_for_downstream";
    }>;
    safeToRetryReadback: z.ZodLiteral<true>;
    safeToReuseGreenlight: z.ZodBoolean;
    requiresNewContract: z.ZodBoolean;
    supportSeverity: z.ZodEnum<{
        none: "none";
        info: "info";
        warning: "warning";
        urgent: "urgent";
    }>;
    docsUrl: z.ZodNullable<z.ZodString>;
    nextCommand: z.ZodNullable<z.ZodString>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    refusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    traceRef: z.ZodNullable<z.ZodString>;
    spanRef: z.ZodNullable<z.ZodString>;
    redactionProfileRef: z.ZodLiteral<"operation-readback:v0.1-redacted">;
}, z.core.$strict>;
export type OperationSupportContext = z.infer<typeof OperationSupportContextSchema>;
export declare const OperationReadbackProjectionSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.operation-readback.v0.1">;
    actionContractRef: z.ZodString;
    contractDigest: z.ZodString;
    principalRef: z.ZodString;
    agentRef: z.ZodString;
    runId: z.ZodString;
    runtimeAdapterRef: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    resourceRef: z.ZodString;
    gatewayId: z.ZodString;
    gatewayPolicyVersion: z.ZodString;
    sourceAuthority: z.ZodLiteral<"protocol_store_projection">;
    operationStatus: z.ZodEnum<{
        policy_refused: "policy_refused";
        policy_proof_gap: "policy_proof_gap";
        review_required: "review_required";
        gateway_admitted: "gateway_admitted";
        gateway_proof_gap: "gateway_proof_gap";
        replay_refused: "replay_refused";
        isolated: "isolated";
        quarantined: "quarantined";
        downstream_refused: "downstream_refused";
        gateway_refused: "gateway_refused";
        halted: "halted";
        greenlight_available: "greenlight_available";
        downstream_pending: "downstream_pending";
        downstream_succeeded: "downstream_succeeded";
        downstream_failed: "downstream_failed";
        downstream_unknown: "downstream_unknown";
        recovery_required: "recovery_required";
    }>;
    latestAuthoritativeStage: z.ZodEnum<{
        isolation: "isolation";
        recovery: "recovery";
        receipt: "receipt";
        action_contract: "action_contract";
        greenlight: "greenlight";
        intent_compilation: "intent_compilation";
        policy_decision: "policy_decision";
        mutation_attempt: "mutation_attempt";
        candidate_action: "candidate_action";
        gateway_check: "gateway_check";
    }>;
    policyDecisionRef: z.ZodString;
    policyDecisionStatus: z.ZodEnum<{
        review_required: "review_required";
        proof_gap: "proof_gap";
        refuse: "refuse";
        quarantine: "quarantine";
        greenlight: "greenlight";
        halt: "halt";
    }>;
    agreementObligationPolicy: z.ZodObject<{
        sourceAuthority: z.ZodLiteral<"policy_decision_snapshot">;
        evaluationStatus: z.ZodEnum<{
            proof_gap: "proof_gap";
            refuse: "refuse";
            greenlight: "greenlight";
        }>;
        ok: z.ZodBoolean;
        reasonCode: z.ZodNullable<z.ZodString>;
        reason: z.ZodNullable<z.ZodString>;
        policyInput: z.ZodObject<{
            posture: z.ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                not_applicable: "not_applicable";
                bound: "bound";
            }>;
            obligationRef: z.ZodNullable<z.ZodString>;
            linkedAgreementId: z.ZodNullable<z.ZodString>;
            acceptedNegotiationResolutionId: z.ZodNullable<z.ZodString>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    greenlightRef: z.ZodNullable<z.ZodString>;
    gateAttemptRef: z.ZodNullable<z.ZodString>;
    mutationAttemptRef: z.ZodNullable<z.ZodString>;
    receiptRef: z.ZodNullable<z.ZodString>;
    gatewayAdmissionStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        replayed: "replayed";
        not_requested: "not_requested";
        admitted: "admitted";
    }>;
    downstreamOutcomeStatus: z.ZodEnum<{
        unknown: "unknown";
        refused: "refused";
        failed: "failed";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    finalityStatus: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        pending: "pending";
        final: "final";
        suspect: "suspect";
    }>>;
    greenlightUsePosture: z.ZodEnum<{
        unknown: "unknown";
        none: "none";
        consumed: "consumed";
        available_for_one_gateway_check: "available_for_one_gateway_check";
        replayed_or_unusable: "replayed_or_unusable";
    }>;
    reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    nextMechanism: z.ZodEnum<{
        use_greenlight_at_gateway: "use_greenlight_at_gateway";
        read_evidence: "read_evidence";
        request_review: "request_review";
        recraft_request: "recraft_request";
        create_new_contract: "create_new_contract";
        recover_terminal_unknown: "recover_terminal_unknown";
        stop: "stop";
        wait_for_downstream: "wait_for_downstream";
    }>;
    safeToRetryReadback: z.ZodLiteral<true>;
    safeToReuseGreenlight: z.ZodBoolean;
    requiresNewContract: z.ZodBoolean;
    authorityCreatedByReadback: z.ZodLiteral<false>;
    greenlightCreatedByReadback: z.ZodLiteral<false>;
    gatewayCheckPerformedByReadback: z.ZodLiteral<false>;
    mutationAttemptedByReadback: z.ZodLiteral<false>;
    receiptExportCreatedByReadback: z.ZodLiteral<false>;
    rawInternalRecordIncluded: z.ZodLiteral<false>;
    credentialMaterialIncluded: z.ZodLiteral<false>;
    paymentMaterialIncluded: z.ZodLiteral<false>;
    typedCommitmentRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    typedCommitmentSetDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    typedCommitmentProjectionClass: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
        public_redacted: "public_redacted";
        operator_redacted: "operator_redacted";
        auditor_export: "auditor_export";
    }>>>;
    typedCommitmentSummaries: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>>;
    typedCommitmentProjections: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>>;
    typedCommitmentRefusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    typedCommitmentProofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    refusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    recoveryRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    isolationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorityCertificateRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    projectionFreshness: z.ZodObject<{
        schemaVersion: z.ZodLiteral<"handshake.operation-readback-freshness.v0.1">;
        sourceAuthority: z.ZodLiteral<"protocol_store_projection">;
        readModelKind: z.ZodLiteral<"direct_protocol_store_projection">;
        status: z.ZodEnum<{
            current: "current";
            not_observed: "not_observed";
            stale_or_concurrent_update: "stale_or_concurrent_update";
            stream_tail_missing: "stream_tail_missing";
        }>;
        streamId: z.ZodNullable<z.ZodString>;
        partitionKey: z.ZodNullable<z.ZodString>;
        observedOffset: z.ZodNullable<z.ZodNumber>;
        observedEventDigest: z.ZodNullable<z.ZodString>;
        latestOffset: z.ZodNullable<z.ZodNumber>;
        latestEventDigest: z.ZodNullable<z.ZodString>;
        lagEvents: z.ZodNullable<z.ZodNumber>;
        rawStreamEventsIncluded: z.ZodLiteral<false>;
        authorityCreatedByFreshness: z.ZodLiteral<false>;
    }, z.core.$strict>;
    providerRequestRef: z.ZodNullable<z.ZodString>;
    providerOperationRef: z.ZodNullable<z.ZodString>;
    traceRef: z.ZodNullable<z.ZodString>;
    spanRef: z.ZodNullable<z.ZodString>;
    redactionProfileRef: z.ZodLiteral<"operation-readback:v0.1-redacted">;
    omittedFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
    supportContext: z.ZodObject<{
        schemaVersion: z.ZodLiteral<"handshake.support-context.v0.1">;
        supportContextRef: z.ZodString;
        sourceAuthority: z.ZodLiteral<"protocol_store_projection">;
        surface: z.ZodLiteral<"operation_readback">;
        actionContractRef: z.ZodString;
        requestIdentity: z.ZodNullable<z.ZodString>;
        operationStatus: z.ZodEnum<{
            policy_refused: "policy_refused";
            policy_proof_gap: "policy_proof_gap";
            review_required: "review_required";
            gateway_admitted: "gateway_admitted";
            gateway_proof_gap: "gateway_proof_gap";
            replay_refused: "replay_refused";
            isolated: "isolated";
            quarantined: "quarantined";
            downstream_refused: "downstream_refused";
            gateway_refused: "gateway_refused";
            halted: "halted";
            greenlight_available: "greenlight_available";
            downstream_pending: "downstream_pending";
            downstream_succeeded: "downstream_succeeded";
            downstream_failed: "downstream_failed";
            downstream_unknown: "downstream_unknown";
            recovery_required: "recovery_required";
        }>;
        reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
        nextMechanism: z.ZodEnum<{
            use_greenlight_at_gateway: "use_greenlight_at_gateway";
            read_evidence: "read_evidence";
            request_review: "request_review";
            recraft_request: "recraft_request";
            create_new_contract: "create_new_contract";
            recover_terminal_unknown: "recover_terminal_unknown";
            stop: "stop";
            wait_for_downstream: "wait_for_downstream";
        }>;
        safeToRetryReadback: z.ZodLiteral<true>;
        safeToReuseGreenlight: z.ZodBoolean;
        requiresNewContract: z.ZodBoolean;
        supportSeverity: z.ZodEnum<{
            none: "none";
            info: "info";
            warning: "warning";
            urgent: "urgent";
        }>;
        docsUrl: z.ZodNullable<z.ZodString>;
        nextCommand: z.ZodNullable<z.ZodString>;
        evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        refusalRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        traceRef: z.ZodNullable<z.ZodString>;
        spanRef: z.ZodNullable<z.ZodString>;
        redactionProfileRef: z.ZodLiteral<"operation-readback:v0.1-redacted">;
    }, z.core.$strict>;
}, z.core.$strict>;
export type OperationReadbackProjection = z.infer<typeof OperationReadbackProjectionSchema>;
export declare const ProtectedPathInstallHealthStatusSchema: z.ZodEnum<{
    unknown: "unknown";
    not_required: "not_required";
    stale: "stale";
    missing: "missing";
    satisfies_gateway_checked: "satisfies_gateway_checked";
    unsafe: "unsafe";
}>;
export type ProtectedPathInstallHealthStatus = z.infer<typeof ProtectedPathInstallHealthStatusSchema>;
export declare const ProtectedPathInstallHealthProjectionSchema: z.ZodObject<{
    actionContractRef: z.ZodString;
    postureScopeKey: z.ZodString;
    runtimeAdapterRef: z.ZodString;
    gatewayId: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    resourceRef: z.ZodString;
    requiredProtectedPathState: z.ZodEnum<{
        not_required: "not_required";
        gateway_checked: "gateway_checked";
    }>;
    installHealthStatus: z.ZodEnum<{
        unknown: "unknown";
        not_required: "not_required";
        stale: "stale";
        missing: "missing";
        satisfies_gateway_checked: "satisfies_gateway_checked";
        unsafe: "unsafe";
    }>;
    reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    currentPostureRef: z.ZodNullable<z.ZodString>;
    currentPostureDigest: z.ZodNullable<z.ZodString>;
    postureState: z.ZodNullable<z.ZodEnum<{
        gateway_checked: "gateway_checked";
        bypass_risk: "bypass_risk";
        advisory: "advisory";
        blind: "blind";
        fixture_only: "fixture_only";
    }>>;
    credentialCustodyStatus: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        gateway_resolved_from_vault: "gateway_resolved_from_vault";
        provider_gateway_held: "provider_gateway_held";
        unsafe_agent_visible: "unsafe_agent_visible";
        unsafe_runtime_visible: "unsafe_runtime_visible";
        agent_has_raw_credential: "agent_has_raw_credential";
        shared_or_unknown: "shared_or_unknown";
        no_mutation_credential: "no_mutation_credential";
    }>>;
    rawSiblingToolStatus: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>>;
    sourceAuthority: z.ZodNullable<z.ZodEnum<{
        unknown: "unknown";
        conformance_fixture: "conformance_fixture";
        runtime_probe: "runtime_probe";
        gateway_probe: "gateway_probe";
        operator_attestation: "operator_attestation";
        hosted_monitor: "hosted_monitor";
    }>>;
    bypassProbeCoverage: z.ZodDefault<z.ZodArray<z.ZodObject<{
        bypassProbeId: z.ZodString;
        probeKind: z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>;
        probeOutcome: z.ZodEnum<{
            inconclusive: "inconclusive";
            passed: "passed";
            failed: "failed";
        }>;
        sourceAuthority: z.ZodEnum<{
            unknown: "unknown";
            conformance_fixture: "conformance_fixture";
            runtime_probe: "runtime_probe";
            gateway_probe: "gateway_probe";
            operator_attestation: "operator_attestation";
            hosted_monitor: "hosted_monitor";
        }>;
        probeDigest: z.ZodString;
    }, z.core.$strict>>>;
    observedAt: z.ZodNullable<z.ZodString>;
    expiresAt: z.ZodNullable<z.ZodString>;
    redactionProfileRef: z.ZodLiteral<"protected-path-install-health:v0.2-redacted">;
    omittedFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type ProtectedPathInstallHealthProjection = z.infer<typeof ProtectedPathInstallHealthProjectionSchema>;
