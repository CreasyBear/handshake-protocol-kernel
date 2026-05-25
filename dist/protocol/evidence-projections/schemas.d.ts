import { z } from "zod";
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
        idempotency_ledger_recorded: "idempotency_ledger_recorded";
        bypass_probe_recorded: "bypass_probe_recorded";
        tool_call_draft_recorded: "tool_call_draft_recorded";
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
        greenlight: "greenlight";
        refuse: "refuse";
        halt: "halt";
        quarantine: "quarantine";
    }>;
    gatewayCheckStatus: z.ZodNullable<z.ZodEnum<{
        proof_gap: "proof_gap";
        passed: "passed";
        refused: "refused";
    }>>;
    gatewayAdmissionStatus: z.ZodEnum<{
        proof_gap: "proof_gap";
        refused: "refused";
        not_requested: "not_requested";
        admitted: "admitted";
        replayed: "replayed";
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
        failed: "failed";
        refused: "refused";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    downstreamOutcomeStatus: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        refused: "refused";
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
            idempotency_ledger_recorded: "idempotency_ledger_recorded";
            bypass_probe_recorded: "bypass_probe_recorded";
            tool_call_draft_recorded: "tool_call_draft_recorded";
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
        greenlight: "greenlight";
        refuse: "refuse";
        halt: "halt";
        quarantine: "quarantine";
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
        not_requested: "not_requested";
        admitted: "admitted";
        replayed: "replayed";
    }>;
    greenlightConsumptionStatus: z.ZodNullable<z.ZodEnum<{
        replayed: "replayed";
        not_applicable: "not_applicable";
        not_consumed: "not_consumed";
        consumed: "consumed";
    }>>;
    downstreamOutcomeStatus: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        refused: "refused";
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
            passed: "passed";
            failed: "failed";
            inconclusive: "inconclusive";
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
export {};
