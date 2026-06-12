import { z } from "zod";
export declare const AuthorityCertificateVersionSchema: z.ZodLiteral<"1.0.0">;
export type AuthorityCertificateVersion = z.infer<typeof AuthorityCertificateVersionSchema>;
export declare const AuthorityCertificateTerminalKindSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    receipt: "receipt";
    durable_refusal: "durable_refusal";
    replay_refusal: "replay_refusal";
}>;
export type AuthorityCertificateTerminalKind = z.infer<typeof AuthorityCertificateTerminalKindSchema>;
export declare const AuthorityCertificateArtifactKindSchema: z.ZodEnum<{
    refusal: "refusal";
    proof_gap: "proof_gap";
    receipt: "receipt";
    action_contract: "action_contract";
    greenlight: "greenlight";
    credential_resolution_evidence: "credential_resolution_evidence";
    typed_action_commitment: "typed_action_commitment";
    idempotency_ledger_entry: "idempotency_ledger_entry";
    policy_decision: "policy_decision";
    isolation_state: "isolation_state";
    gateway_check_attempt: "gateway_check_attempt";
    mutation_attempt: "mutation_attempt";
    surface_operation_reconciliation: "surface_operation_reconciliation";
    receipt_export: "receipt_export";
    recovery_recommendation: "recovery_recommendation";
    recovery_recommendation_status_transition: "recovery_recommendation_status_transition";
}>;
export type AuthorityCertificateArtifactKind = z.infer<typeof AuthorityCertificateArtifactKindSchema>;
export declare const AuthorityCertificateArtifactSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        refusal: "refusal";
        proof_gap: "proof_gap";
        receipt: "receipt";
        action_contract: "action_contract";
        greenlight: "greenlight";
        credential_resolution_evidence: "credential_resolution_evidence";
        typed_action_commitment: "typed_action_commitment";
        idempotency_ledger_entry: "idempotency_ledger_entry";
        policy_decision: "policy_decision";
        isolation_state: "isolation_state";
        gateway_check_attempt: "gateway_check_attempt";
        mutation_attempt: "mutation_attempt";
        surface_operation_reconciliation: "surface_operation_reconciliation";
        receipt_export: "receipt_export";
        recovery_recommendation: "recovery_recommendation";
        recovery_recommendation_status_transition: "recovery_recommendation_status_transition";
    }>;
    objectRef: z.ZodString;
    digest: z.ZodString;
}, z.core.$strict>;
export type AuthorityCertificateArtifact = z.infer<typeof AuthorityCertificateArtifactSchema>;
export declare const AuthorityCertificateSignerRoleSchema: z.ZodEnum<{
    gateway: "gateway";
    operator_policy: "operator_policy";
}>;
export type AuthorityCertificateSignerRole = z.infer<typeof AuthorityCertificateSignerRoleSchema>;
export declare const AuthorityCertificateSignatureAlgorithmSchema: z.ZodEnum<{
    ed25519: "ed25519";
    "hmac-sha256": "hmac-sha256";
}>;
export type AuthorityCertificateSignatureAlgorithm = z.infer<typeof AuthorityCertificateSignatureAlgorithmSchema>;
export declare const AuthorityCertificateSignatureEntrySchema: z.ZodObject<{
    signerRole: z.ZodEnum<{
        gateway: "gateway";
        operator_policy: "operator_policy";
    }>;
    keyIdentityRef: z.ZodString;
    algorithm: z.ZodEnum<{
        ed25519: "ed25519";
        "hmac-sha256": "hmac-sha256";
    }>;
    signedOver: z.ZodString;
    signature: z.ZodUnion<readonly [z.ZodString, z.ZodString]>;
}, z.core.$strict>;
export type AuthorityCertificateSignatureEntry = z.infer<typeof AuthorityCertificateSignatureEntrySchema>;
export declare const AuthorityCertificateVerificationPolicySchema: z.ZodObject<{
    verificationPolicyId: z.ZodString;
    terminalKind: z.ZodEnum<{
        proof_gap: "proof_gap";
        receipt: "receipt";
        durable_refusal: "durable_refusal";
        replay_refusal: "replay_refusal";
    }>;
    actionClass: z.ZodString;
    gatewayAdmissionRequired: z.ZodBoolean;
    requiredSignerRoles: z.ZodArray<z.ZodEnum<{
        gateway: "gateway";
        operator_policy: "operator_policy";
    }>>;
    requiredArtifactKinds: z.ZodDefault<z.ZodArray<z.ZodEnum<{
        refusal: "refusal";
        proof_gap: "proof_gap";
        receipt: "receipt";
        action_contract: "action_contract";
        greenlight: "greenlight";
        credential_resolution_evidence: "credential_resolution_evidence";
        typed_action_commitment: "typed_action_commitment";
        idempotency_ledger_entry: "idempotency_ledger_entry";
        policy_decision: "policy_decision";
        isolation_state: "isolation_state";
        gateway_check_attempt: "gateway_check_attempt";
        mutation_attempt: "mutation_attempt";
        surface_operation_reconciliation: "surface_operation_reconciliation";
        receipt_export: "receipt_export";
        recovery_recommendation: "recovery_recommendation";
        recovery_recommendation_status_transition: "recovery_recommendation_status_transition";
    }>>>;
}, z.core.$strict>;
export type AuthorityCertificateVerificationPolicy = z.infer<typeof AuthorityCertificateVerificationPolicySchema>;
export declare const AuthorityCertificateTerminalSchema: z.ZodObject<{
    terminalKind: z.ZodEnum<{
        proof_gap: "proof_gap";
        receipt: "receipt";
        durable_refusal: "durable_refusal";
        replay_refusal: "replay_refusal";
    }>;
    terminalObjectRef: z.ZodString;
    actionContractId: z.ZodString;
    policyDecisionId: z.ZodNullable<z.ZodString>;
    greenlightId: z.ZodNullable<z.ZodString>;
    gatewayId: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type AuthorityCertificateTerminal = z.infer<typeof AuthorityCertificateTerminalSchema>;
export declare const AuthorityCertificateConsumerBindingSchema: z.ZodObject<{
    bindingKind: z.ZodString;
    bindingRef: z.ZodString;
    digest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type AuthorityCertificateConsumerBinding = z.infer<typeof AuthorityCertificateConsumerBindingSchema>;
export declare const AuthorityCertificateSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    authorityCertificateId: z.ZodString;
    authorityCertificateVersion: z.ZodLiteral<"1.0.0">;
    canonicalizerVersion: z.ZodString;
    terminalizedAt: z.ZodString;
    terminal: z.ZodObject<{
        terminalKind: z.ZodEnum<{
            proof_gap: "proof_gap";
            receipt: "receipt";
            durable_refusal: "durable_refusal";
            replay_refusal: "replay_refusal";
        }>;
        terminalObjectRef: z.ZodString;
        actionContractId: z.ZodString;
        policyDecisionId: z.ZodNullable<z.ZodString>;
        greenlightId: z.ZodNullable<z.ZodString>;
        gatewayId: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    envelope: z.ZodObject<{
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
        nonSecretParamsSummary: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
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
    envelopeDigest: z.ZodString;
    artifacts: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            receipt: "receipt";
            action_contract: "action_contract";
            greenlight: "greenlight";
            credential_resolution_evidence: "credential_resolution_evidence";
            typed_action_commitment: "typed_action_commitment";
            idempotency_ledger_entry: "idempotency_ledger_entry";
            policy_decision: "policy_decision";
            isolation_state: "isolation_state";
            gateway_check_attempt: "gateway_check_attempt";
            mutation_attempt: "mutation_attempt";
            surface_operation_reconciliation: "surface_operation_reconciliation";
            receipt_export: "receipt_export";
            recovery_recommendation: "recovery_recommendation";
            recovery_recommendation_status_transition: "recovery_recommendation_status_transition";
        }>;
        objectRef: z.ZodString;
        digest: z.ZodString;
    }, z.core.$strict>>;
    verificationPolicy: z.ZodObject<{
        verificationPolicyId: z.ZodString;
        terminalKind: z.ZodEnum<{
            proof_gap: "proof_gap";
            receipt: "receipt";
            durable_refusal: "durable_refusal";
            replay_refusal: "replay_refusal";
        }>;
        actionClass: z.ZodString;
        gatewayAdmissionRequired: z.ZodBoolean;
        requiredSignerRoles: z.ZodArray<z.ZodEnum<{
            gateway: "gateway";
            operator_policy: "operator_policy";
        }>>;
        requiredArtifactKinds: z.ZodDefault<z.ZodArray<z.ZodEnum<{
            refusal: "refusal";
            proof_gap: "proof_gap";
            receipt: "receipt";
            action_contract: "action_contract";
            greenlight: "greenlight";
            credential_resolution_evidence: "credential_resolution_evidence";
            typed_action_commitment: "typed_action_commitment";
            idempotency_ledger_entry: "idempotency_ledger_entry";
            policy_decision: "policy_decision";
            isolation_state: "isolation_state";
            gateway_check_attempt: "gateway_check_attempt";
            mutation_attempt: "mutation_attempt";
            surface_operation_reconciliation: "surface_operation_reconciliation";
            receipt_export: "receipt_export";
            recovery_recommendation: "recovery_recommendation";
            recovery_recommendation_status_transition: "recovery_recommendation_status_transition";
        }>>>;
    }, z.core.$strict>;
    signatures: z.ZodArray<z.ZodObject<{
        signerRole: z.ZodEnum<{
            gateway: "gateway";
            operator_policy: "operator_policy";
        }>;
        keyIdentityRef: z.ZodString;
        algorithm: z.ZodEnum<{
            ed25519: "ed25519";
            "hmac-sha256": "hmac-sha256";
        }>;
        signedOver: z.ZodString;
        signature: z.ZodUnion<readonly [z.ZodString, z.ZodString]>;
    }, z.core.$strict>>;
    consumerBindings: z.ZodDefault<z.ZodArray<z.ZodObject<{
        bindingKind: z.ZodString;
        bindingRef: z.ZodString;
        digest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>>;
    extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>>;
    emittedAt: z.ZodString;
    signingInputDigest: z.ZodString;
}, z.core.$strict>;
export type AuthorityCertificate = z.infer<typeof AuthorityCertificateSchema>;
export declare const AuthorityCertificateTrustKeySchema: z.ZodObject<{
    keyIdentityRef: z.ZodString;
    issuerRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    keyVersion: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    signerRole: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
        gateway: "gateway";
        operator_policy: "operator_policy";
    }>>>;
    algorithm: z.ZodEnum<{
        ed25519: "ed25519";
        "hmac-sha256": "hmac-sha256";
    }>;
    publicKeyEd25519: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    hmacSecret: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        stale: "stale";
        active: "active";
        revoked: "revoked";
        retired: "retired";
        status_unavailable: "status_unavailable";
    }>;
    validFrom: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    validUntil: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type AuthorityCertificateTrustKey = z.infer<typeof AuthorityCertificateTrustKeySchema>;
export declare const AuthorityCertificateIssuerStatusSchema: z.ZodEnum<{
    stale: "stale";
    active: "active";
    revoked: "revoked";
    retired: "retired";
    status_unavailable: "status_unavailable";
}>;
export type AuthorityCertificateIssuerStatus = z.infer<typeof AuthorityCertificateIssuerStatusSchema>;
export declare const AuthorityCertificateIssuerSchema: z.ZodObject<{
    issuerRef: z.ZodString;
    issuerDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        stale: "stale";
        active: "active";
        revoked: "revoked";
        retired: "retired";
        status_unavailable: "status_unavailable";
    }>;
    validFrom: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    validUntil: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    metadataRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type AuthorityCertificateIssuer = z.infer<typeof AuthorityCertificateIssuerSchema>;
export declare const AuthorityCertificateStatusSubjectKindSchema: z.ZodEnum<{
    key: "key";
    issuer: "issuer";
    certificate: "certificate";
}>;
export type AuthorityCertificateStatusSubjectKind = z.infer<typeof AuthorityCertificateStatusSubjectKindSchema>;
export declare const AuthorityCertificateStatusRecordSchema: z.ZodObject<{
    statusRecordId: z.ZodString;
    subjectKind: z.ZodEnum<{
        key: "key";
        issuer: "issuer";
        certificate: "certificate";
    }>;
    subjectRef: z.ZodString;
    status: z.ZodEnum<{
        stale: "stale";
        active: "active";
        revoked: "revoked";
        retired: "retired";
        status_unavailable: "status_unavailable";
    }>;
    reasonCode: z.ZodString;
    observedAt: z.ZodString;
    expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    authorityCreated: z.ZodDefault<z.ZodLiteral<false>>;
}, z.core.$strict>;
export type AuthorityCertificateStatusRecord = z.infer<typeof AuthorityCertificateStatusRecordSchema>;
export declare const AuthorityCertificateTrustMaterialSchema: z.ZodObject<{
    keys: z.ZodDefault<z.ZodArray<z.ZodObject<{
        keyIdentityRef: z.ZodString;
        issuerRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        keyVersion: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        signerRole: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
            gateway: "gateway";
            operator_policy: "operator_policy";
        }>>>;
        algorithm: z.ZodEnum<{
            ed25519: "ed25519";
            "hmac-sha256": "hmac-sha256";
        }>;
        publicKeyEd25519: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        hmacSecret: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        status: z.ZodEnum<{
            stale: "stale";
            active: "active";
            revoked: "revoked";
            retired: "retired";
            status_unavailable: "status_unavailable";
        }>;
        validFrom: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        validUntil: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>>;
    issuers: z.ZodDefault<z.ZodArray<z.ZodObject<{
        issuerRef: z.ZodString;
        issuerDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        status: z.ZodEnum<{
            stale: "stale";
            active: "active";
            revoked: "revoked";
            retired: "retired";
            status_unavailable: "status_unavailable";
        }>;
        validFrom: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        validUntil: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        metadataRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
    statusRecords: z.ZodDefault<z.ZodArray<z.ZodObject<{
        statusRecordId: z.ZodString;
        subjectKind: z.ZodEnum<{
            key: "key";
            issuer: "issuer";
            certificate: "certificate";
        }>;
        subjectRef: z.ZodString;
        status: z.ZodEnum<{
            stale: "stale";
            active: "active";
            revoked: "revoked";
            retired: "retired";
            status_unavailable: "status_unavailable";
        }>;
        reasonCode: z.ZodString;
        observedAt: z.ZodString;
        expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        authorityCreated: z.ZodDefault<z.ZodLiteral<false>>;
    }, z.core.$strict>>>;
    verificationTime: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    allowDevHmac: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strict>;
export type AuthorityCertificateTrustMaterialInput = {
    keys?: z.input<typeof AuthorityCertificateTrustKeySchema>[];
    issuers?: z.input<typeof AuthorityCertificateIssuerSchema>[];
    statusRecords?: z.input<typeof AuthorityCertificateStatusRecordSchema>[];
    verificationTime?: string | null;
    allowDevHmac?: boolean;
};
export type AuthorityCertificateTrustMaterial = z.infer<typeof AuthorityCertificateTrustMaterialSchema>;
export declare const AuthorityCertificateVerificationOutcomeSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    verified: "verified";
    refused: "refused";
}>;
export type AuthorityCertificateVerificationOutcome = z.infer<typeof AuthorityCertificateVerificationOutcomeSchema>;
export declare const AuthorityCertificateVerificationCheckStatusSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    passed: "passed";
    failed: "failed";
}>;
export type AuthorityCertificateVerificationCheckStatus = z.infer<typeof AuthorityCertificateVerificationCheckStatusSchema>;
export declare const AuthorityCertificateVerificationFailureCodeSchema: z.ZodEnum<{
    schema_invalid: "schema_invalid";
    envelope_digest_mismatch: "envelope_digest_mismatch";
    signing_input_digest_mismatch: "signing_input_digest_mismatch";
    signature_signed_over_mismatch: "signature_signed_over_mismatch";
    signature_algorithm_mismatch: "signature_algorithm_mismatch";
    hmac_not_allowed: "hmac_not_allowed";
    trust_key_missing: "trust_key_missing";
    trust_key_inactive: "trust_key_inactive";
    trust_issuer_unknown: "trust_issuer_unknown";
    trust_key_role_mismatch: "trust_key_role_mismatch";
    trust_key_retired: "trust_key_retired";
    trust_key_revoked: "trust_key_revoked";
    trust_key_stale: "trust_key_stale";
    trust_status_unavailable: "trust_status_unavailable";
    trust_key_window_invalid: "trust_key_window_invalid";
    trust_certificate_status_revoked: "trust_certificate_status_revoked";
    trust_certificate_status_stale: "trust_certificate_status_stale";
    signature_invalid: "signature_invalid";
    required_signer_missing: "required_signer_missing";
    required_artifact_missing: "required_artifact_missing";
    gateway_admission_binding_missing: "gateway_admission_binding_missing";
    terminal_binding_mismatch: "terminal_binding_mismatch";
}>;
export type AuthorityCertificateVerificationFailureCode = z.infer<typeof AuthorityCertificateVerificationFailureCodeSchema>;
export declare const AuthorityCertificateVerificationFailureSchema: z.ZodObject<{
    code: z.ZodEnum<{
        schema_invalid: "schema_invalid";
        envelope_digest_mismatch: "envelope_digest_mismatch";
        signing_input_digest_mismatch: "signing_input_digest_mismatch";
        signature_signed_over_mismatch: "signature_signed_over_mismatch";
        signature_algorithm_mismatch: "signature_algorithm_mismatch";
        hmac_not_allowed: "hmac_not_allowed";
        trust_key_missing: "trust_key_missing";
        trust_key_inactive: "trust_key_inactive";
        trust_issuer_unknown: "trust_issuer_unknown";
        trust_key_role_mismatch: "trust_key_role_mismatch";
        trust_key_retired: "trust_key_retired";
        trust_key_revoked: "trust_key_revoked";
        trust_key_stale: "trust_key_stale";
        trust_status_unavailable: "trust_status_unavailable";
        trust_key_window_invalid: "trust_key_window_invalid";
        trust_certificate_status_revoked: "trust_certificate_status_revoked";
        trust_certificate_status_stale: "trust_certificate_status_stale";
        signature_invalid: "signature_invalid";
        required_signer_missing: "required_signer_missing";
        required_artifact_missing: "required_artifact_missing";
        gateway_admission_binding_missing: "gateway_admission_binding_missing";
        terminal_binding_mismatch: "terminal_binding_mismatch";
    }>;
    message: z.ZodString;
    ref: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type AuthorityCertificateVerificationFailure = z.infer<typeof AuthorityCertificateVerificationFailureSchema>;
export declare const AuthorityCertificateVerificationResponseSchema: z.ZodObject<{
    verificationResponseId: z.ZodString;
    outcome: z.ZodEnum<{
        proof_gap: "proof_gap";
        verified: "verified";
        refused: "refused";
    }>;
    verificationPlane: z.ZodLiteral<"local_pinned_trust_material">;
    authorityCreated: z.ZodLiteral<false>;
    redactionProfileRef: z.ZodLiteral<"authority-certificate-verification:v1-redacted">;
    checks: z.ZodObject<{
        schema: z.ZodEnum<{
            proof_gap: "proof_gap";
            passed: "passed";
            failed: "failed";
        }>;
        cryptographicSignature: z.ZodEnum<{
            proof_gap: "proof_gap";
            passed: "passed";
            failed: "failed";
        }>;
        signingInputDigest: z.ZodEnum<{
            proof_gap: "proof_gap";
            passed: "passed";
            failed: "failed";
        }>;
        artifactBinding: z.ZodEnum<{
            proof_gap: "proof_gap";
            passed: "passed";
            failed: "failed";
        }>;
        terminalBinding: z.ZodEnum<{
            proof_gap: "proof_gap";
            passed: "passed";
            failed: "failed";
        }>;
        gatewayAdmissionBinding: z.ZodEnum<{
            proof_gap: "proof_gap";
            passed: "passed";
            failed: "failed";
        }>;
        trustMaterial: z.ZodEnum<{
            proof_gap: "proof_gap";
            passed: "passed";
            failed: "failed";
        }>;
        status: z.ZodEnum<{
            proof_gap: "proof_gap";
            passed: "passed";
            failed: "failed";
        }>;
    }, z.core.$strict>;
    failures: z.ZodArray<z.ZodObject<{
        code: z.ZodEnum<{
            schema_invalid: "schema_invalid";
            envelope_digest_mismatch: "envelope_digest_mismatch";
            signing_input_digest_mismatch: "signing_input_digest_mismatch";
            signature_signed_over_mismatch: "signature_signed_over_mismatch";
            signature_algorithm_mismatch: "signature_algorithm_mismatch";
            hmac_not_allowed: "hmac_not_allowed";
            trust_key_missing: "trust_key_missing";
            trust_key_inactive: "trust_key_inactive";
            trust_issuer_unknown: "trust_issuer_unknown";
            trust_key_role_mismatch: "trust_key_role_mismatch";
            trust_key_retired: "trust_key_retired";
            trust_key_revoked: "trust_key_revoked";
            trust_key_stale: "trust_key_stale";
            trust_status_unavailable: "trust_status_unavailable";
            trust_key_window_invalid: "trust_key_window_invalid";
            trust_certificate_status_revoked: "trust_certificate_status_revoked";
            trust_certificate_status_stale: "trust_certificate_status_stale";
            signature_invalid: "signature_invalid";
            required_signer_missing: "required_signer_missing";
            required_artifact_missing: "required_artifact_missing";
            gateway_admission_binding_missing: "gateway_admission_binding_missing";
            terminal_binding_mismatch: "terminal_binding_mismatch";
        }>;
        message: z.ZodString;
        ref: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>;
    envelope: z.ZodNullable<z.ZodObject<{
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
        nonSecretParamsSummary: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
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
    }, z.core.$strict>>;
    signingInputDigest: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type AuthorityCertificateVerificationResponse = z.infer<typeof AuthorityCertificateVerificationResponseSchema>;
export declare const AuthorityCertificateVerificationRequestSchema: z.ZodObject<{
    certificate: z.ZodUnknown;
    trustMaterial: z.ZodObject<{
        keys: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keyIdentityRef: z.ZodString;
            issuerRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            keyVersion: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            signerRole: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
                gateway: "gateway";
                operator_policy: "operator_policy";
            }>>>;
            algorithm: z.ZodEnum<{
                ed25519: "ed25519";
                "hmac-sha256": "hmac-sha256";
            }>;
            publicKeyEd25519: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            hmacSecret: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            status: z.ZodEnum<{
                stale: "stale";
                active: "active";
                revoked: "revoked";
                retired: "retired";
                status_unavailable: "status_unavailable";
            }>;
            validFrom: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            validUntil: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        }, z.core.$strict>>>;
        issuers: z.ZodDefault<z.ZodArray<z.ZodObject<{
            issuerRef: z.ZodString;
            issuerDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            status: z.ZodEnum<{
                stale: "stale";
                active: "active";
                revoked: "revoked";
                retired: "retired";
                status_unavailable: "status_unavailable";
            }>;
            validFrom: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            validUntil: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            metadataRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strict>>>;
        statusRecords: z.ZodDefault<z.ZodArray<z.ZodObject<{
            statusRecordId: z.ZodString;
            subjectKind: z.ZodEnum<{
                key: "key";
                issuer: "issuer";
                certificate: "certificate";
            }>;
            subjectRef: z.ZodString;
            status: z.ZodEnum<{
                stale: "stale";
                active: "active";
                revoked: "revoked";
                retired: "retired";
                status_unavailable: "status_unavailable";
            }>;
            reasonCode: z.ZodString;
            observedAt: z.ZodString;
            expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
            authorityCreated: z.ZodDefault<z.ZodLiteral<false>>;
        }, z.core.$strict>>>;
        verificationTime: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        allowDevHmac: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AuthorityCertificateVerificationRequest = z.input<typeof AuthorityCertificateVerificationRequestSchema>;
export declare const AuthorityCertificateVerifierKeyProjectionSchema: z.ZodObject<{
    keyIdentityRef: z.ZodString;
    issuerRef: z.ZodNullable<z.ZodString>;
    keyVersion: z.ZodNullable<z.ZodString>;
    signerRole: z.ZodNullable<z.ZodEnum<{
        gateway: "gateway";
        operator_policy: "operator_policy";
    }>>;
    algorithm: z.ZodEnum<{
        ed25519: "ed25519";
        "hmac-sha256": "hmac-sha256";
    }>;
    publicKeyEd25519: z.ZodString;
    status: z.ZodEnum<{
        stale: "stale";
        active: "active";
        revoked: "revoked";
        retired: "retired";
        status_unavailable: "status_unavailable";
    }>;
    validFrom: z.ZodNullable<z.ZodString>;
    validUntil: z.ZodNullable<z.ZodString>;
    privateMaterialIncluded: z.ZodLiteral<false>;
    authorityCreated: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AuthorityCertificateVerifierKeyProjection = z.infer<typeof AuthorityCertificateVerifierKeyProjectionSchema>;
export declare const AuthorityCertificateVerifierKeySetProjectionSchema: z.ZodObject<{
    projectionKind: z.ZodLiteral<"authority_certificate_verifier_key_set">;
    trustDecision: z.ZodLiteral<"caller_pinned_trust_material_only">;
    authorityCreated: z.ZodLiteral<false>;
    redactionProfileRef: z.ZodLiteral<"authority-certificate-verifier-key-set:v1-redacted">;
    issuers: z.ZodArray<z.ZodObject<{
        issuerRef: z.ZodString;
        issuerDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        status: z.ZodEnum<{
            stale: "stale";
            active: "active";
            revoked: "revoked";
            retired: "retired";
            status_unavailable: "status_unavailable";
        }>;
        validFrom: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        validUntil: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        metadataRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
    keys: z.ZodArray<z.ZodObject<{
        keyIdentityRef: z.ZodString;
        issuerRef: z.ZodNullable<z.ZodString>;
        keyVersion: z.ZodNullable<z.ZodString>;
        signerRole: z.ZodNullable<z.ZodEnum<{
            gateway: "gateway";
            operator_policy: "operator_policy";
        }>>;
        algorithm: z.ZodEnum<{
            ed25519: "ed25519";
            "hmac-sha256": "hmac-sha256";
        }>;
        publicKeyEd25519: z.ZodString;
        status: z.ZodEnum<{
            stale: "stale";
            active: "active";
            revoked: "revoked";
            retired: "retired";
            status_unavailable: "status_unavailable";
        }>;
        validFrom: z.ZodNullable<z.ZodString>;
        validUntil: z.ZodNullable<z.ZodString>;
        privateMaterialIncluded: z.ZodLiteral<false>;
        authorityCreated: z.ZodLiteral<false>;
    }, z.core.$strict>>;
    omittedPrivateKeyCount: z.ZodNumber;
}, z.core.$strict>;
export type AuthorityCertificateVerifierKeySetProjection = z.infer<typeof AuthorityCertificateVerifierKeySetProjectionSchema>;
export declare const AuthorityCertificateJwkProjectionSchema: z.ZodObject<{
    kty: z.ZodLiteral<"OKP">;
    crv: z.ZodLiteral<"Ed25519">;
    kid: z.ZodString;
    alg: z.ZodLiteral<"EdDSA">;
    use: z.ZodLiteral<"sig">;
    key_ops: z.ZodArray<z.ZodLiteral<"verify">>;
    x: z.ZodString;
}, z.core.$strict>;
export type AuthorityCertificateJwkProjection = z.infer<typeof AuthorityCertificateJwkProjectionSchema>;
export declare const AuthorityCertificateJwksProjectionSchema: z.ZodObject<{
    projectionKind: z.ZodLiteral<"authority_certificate_jwks_projection">;
    trustDecision: z.ZodLiteral<"jwks_projection_only">;
    authorityCreated: z.ZodLiteral<false>;
    redactionProfileRef: z.ZodLiteral<"authority-certificate-jwks:v1-public">;
    jwks: z.ZodObject<{
        keys: z.ZodArray<z.ZodObject<{
            kty: z.ZodLiteral<"OKP">;
            crv: z.ZodLiteral<"Ed25519">;
            kid: z.ZodString;
            alg: z.ZodLiteral<"EdDSA">;
            use: z.ZodLiteral<"sig">;
            key_ops: z.ZodArray<z.ZodLiteral<"verify">>;
            x: z.ZodString;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    omittedPrivateKeyCount: z.ZodNumber;
}, z.core.$strict>;
export type AuthorityCertificateJwksProjection = z.infer<typeof AuthorityCertificateJwksProjectionSchema>;
