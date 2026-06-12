import type { ZodType } from "zod";
import type { TransitionCallerRole } from "../admission/caller-auth";
export type EvidenceReadRouteId = "getGeneratedGraphEvidenceProjection" | "getContractEvidenceProjection" | "getAgentTransactionEnvelopeProjection" | "getOperationReadbackProjection" | "getOperationCorrelationIndex" | "getIdempotencyRecoveryProjection" | "getReceiptTimelineProjection" | "getProtectedPathInstallHealthProjection";
export type EvidenceReadRouteDefinition = {
    routeId: EvidenceReadRouteId;
    honoPath: `/v0.2/${string}`;
    openApiPath: `/v0.2/${string}`;
    roles: readonly TransitionCallerRole[];
    summary: string;
    responseDescription: string;
    responseSchema: ZodType;
    pathParameters: readonly EvidenceReadPathParameter[];
};
export type EvidenceReadPathParameter = {
    name: string;
    description: string;
};
export declare const evidenceReadRouteDefinitions: readonly [{
    readonly routeId: "getGeneratedGraphEvidenceProjection";
    readonly honoPath: "/v0.2/evidence/generated-execution-graphs/:generatedExecutionGraphId";
    readonly openApiPath: "/v0.2/evidence/generated-execution-graphs/{generatedExecutionGraphId}";
    readonly roles: readonly ["review_custody", "runtime_evidence"];
    readonly summary: "Read redacted generated execution graph evidence for diagnostics only";
    readonly responseDescription: "Generated execution graph evidence projection. Inspection evidence only; not authority and not execution proof.";
    readonly responseSchema: import("zod").ZodObject<{
        graphRef: import("zod").ZodString;
        runtimeExecutionRef: import("zod").ZodString;
        executionBlockDigest: import("zod").ZodString;
        coverageStatus: import("zod").ZodEnum<{
            unknown: "unknown";
            fully_covered_no_unsupported_nodes: "fully_covered_no_unsupported_nodes";
            nonconsequential_only: "nonconsequential_only";
            contains_refusal: "contains_refusal";
            contains_coverage_gap: "contains_coverage_gap";
            contains_bypass_risk: "contains_bypass_risk";
            unsupported_or_ambiguous: "unsupported_or_ambiguous";
        }>;
        terminalReasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        contractableNodeRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            nodeId: import("zod").ZodString;
            nodeDigest: import("zod").ZodString;
            classification: import("zod").ZodEnum<{
                read_only: "read_only";
                ambiguous: "ambiguous";
                unsupported: "unsupported";
                hidden_trigger: "hidden_trigger";
                candidate_action_eligible: "candidate_action_eligible";
                nonconsequential: "nonconsequential";
                bypass_risk: "bypass_risk";
                observer_only: "observer_only";
            }>;
            actionTypeId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            gatewayRegistryEntryId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            nodeGatewayBindingDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            unsupportedReasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strict>>>;
        refusedNodeRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            nodeId: import("zod").ZodString;
            nodeDigest: import("zod").ZodString;
            classification: import("zod").ZodEnum<{
                read_only: "read_only";
                ambiguous: "ambiguous";
                unsupported: "unsupported";
                hidden_trigger: "hidden_trigger";
                candidate_action_eligible: "candidate_action_eligible";
                nonconsequential: "nonconsequential";
                bypass_risk: "bypass_risk";
                observer_only: "observer_only";
            }>;
            actionTypeId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            gatewayRegistryEntryId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            nodeGatewayBindingDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            unsupportedReasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strict>>>;
        catalogDigest: import("zod").ZodString;
        gatewayRegistryDigest: import("zod").ZodString;
        redactionPosture: import("zod").ZodEnum<{
            unknown: "unknown";
            redacted: "redacted";
            digest_only: "digest_only";
            secret_refs_only: "secret_refs_only";
            raw_material_present: "raw_material_present";
        }>;
        graphDigest: import("zod").ZodString;
    }, import("zod/v4/core").$strict>;
    readonly pathParameters: readonly [{
        readonly name: "generatedExecutionGraphId";
        readonly description: "Generated execution graph identifier.";
    }];
}, {
    readonly routeId: "getContractEvidenceProjection";
    readonly honoPath: "/v0.2/evidence/contracts/:actionContractId";
    readonly openApiPath: "/v0.2/evidence/contracts/{actionContractId}";
    readonly roles: readonly ["review_custody", "runtime_evidence"];
    readonly summary: "Read a redacted action contract view for diagnostics only";
    readonly responseDescription: "Redacted action contract projection. Inspection evidence only; not authority and not execution proof.";
    readonly responseSchema: import("zod").ZodObject<{
        actionContractRef: import("zod").ZodString;
        contractDigest: import("zod").ZodString;
        intentCompilationRef: import("zod").ZodString;
        candidateActionRef: import("zod").ZodString;
        candidateDigest: import("zod").ZodString;
        envelopeRef: import("zod").ZodString;
        principalRef: import("zod").ZodString;
        agentRef: import("zod").ZodString;
        participantIdentityBindings: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            participantRole: import("zod").ZodEnum<{
                principal: "principal";
                agent: "agent";
            }>;
            participantRef: import("zod").ZodString;
            identityProviderRef: import("zod").ZodString;
            subjectRef: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            subjectDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            claimsDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            verificationEvidenceRef: import("zod").ZodString;
            bindingEvidenceRef: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            issuedAt: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            expiresAt: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            authorityPosture: import("zod").ZodDefault<import("zod").ZodLiteral<"evidence_only">>;
        }, import("zod/v4/core").$strict>>>;
        runId: import("zod").ZodString;
        runtimeAdapterRef: import("zod").ZodString;
        actionClass: import("zod").ZodString;
        protectedSurfaceKind: import("zod").ZodString;
        resourceRef: import("zod").ZodString;
        gatewayId: import("zod").ZodString;
        gatewayPolicyVersion: import("zod").ZodString;
        requiredProtectedPathState: import("zod").ZodEnum<{
            not_required: "not_required";
            gateway_checked: "gateway_checked";
        }>;
        idempotencyKey: import("zod").ZodString;
        paramsDigest: import("zod").ZodString;
        nonSecretParamsSummary: import("zod").ZodRecord<import("zod").ZodString, ZodType<import("../..").JsonValue, unknown, import("zod/v4/core").$ZodTypeInternals<import("../..").JsonValue, unknown>>>;
        gatewayCredentialRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            credentialUseName: import("zod").ZodString;
            gatewayCredentialRefId: import("zod").ZodString;
            gatewayCredentialRefDigest: import("zod").ZodString;
            providerRegistryRef: import("zod").ZodString;
            providerRegistryDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            requiredCredentialCustodyStatus: import("zod").ZodEnum<{
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
            evidenceExpectationRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strict>>>;
        delegatedAuthorityRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            authorityUseName: import("zod").ZodString;
            delegatedAuthorityRefId: import("zod").ZodString;
            delegatedAuthorityRefDigest: import("zod").ZodString;
            requiredGrantStatus: import("zod").ZodDefault<import("zod").ZodLiteral<"active">>;
            authorityKind: import("zod").ZodEnum<{
                mutation: "mutation";
                spend: "spend";
                api_call: "api_call";
            }>;
            policyPackRef: import("zod").ZodString;
            policyPackVersion: import("zod").ZodString;
            evidenceExpectationRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strict>>>;
        evidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        clearingEvidenceRefs: import("zod").ZodDefault<import("zod").ZodObject<{
            correlationRef: import("zod").ZodOptional<import("zod").ZodString>;
            obligationRef: import("zod").ZodOptional<import("zod").ZodString>;
            counterpartyRef: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>>;
        signaturePosture: import("zod").ZodEnum<{
            unsigned: "unsigned";
            local_hmac: "local_hmac";
            external_signature: "external_signature";
            unverified: "unverified";
        }>;
        keyIdentityRef: import("zod").ZodNullable<import("zod").ZodString>;
        verificationPolicyRef: import("zod").ZodNullable<import("zod").ZodString>;
        generatedExecutionGraphRef: import("zod").ZodNullable<import("zod").ZodString>;
        generatedExecutionNodeRef: import("zod").ZodNullable<import("zod").ZodString>;
        redactionProfileRef: import("zod").ZodLiteral<"contract-view:v0.2-redacted">;
        omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
    }, import("zod/v4/core").$strict>;
    readonly pathParameters: readonly [{
        readonly name: "actionContractId";
        readonly description: "Action contract identifier.";
    }];
}, {
    readonly routeId: "getAgentTransactionEnvelopeProjection";
    readonly honoPath: "/v0.2/evidence/agent-transactions/:actionContractId";
    readonly openApiPath: "/v0.2/evidence/agent-transactions/{actionContractId}";
    readonly roles: readonly ["review_custody", "runtime_evidence"];
    readonly summary: "Read a redacted agent transaction envelope for diagnostics only";
    readonly responseDescription: "Redacted agent transaction envelope projection. Inspection evidence only; not authority, not receipt export, and not downstream business proof.";
    readonly responseSchema: import("zod").ZodObject<{
        actionContractRef: import("zod").ZodString;
        contractDigest: import("zod").ZodString;
        policyDecisionRef: import("zod").ZodString;
        policyDecisionStatus: import("zod").ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            refuse: "refuse";
            quarantine: "quarantine";
            greenlight: "greenlight";
            halt: "halt";
        }>;
        greenlightRef: import("zod").ZodNullable<import("zod").ZodString>;
        gateAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        mutationAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        receiptRef: import("zod").ZodNullable<import("zod").ZodString>;
        principalRef: import("zod").ZodString;
        agentRef: import("zod").ZodString;
        participantIdentityBindings: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            participantRole: import("zod").ZodEnum<{
                principal: "principal";
                agent: "agent";
            }>;
            participantRef: import("zod").ZodString;
            identityProviderRef: import("zod").ZodString;
            subjectRef: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            subjectDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            claimsDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            verificationEvidenceRef: import("zod").ZodString;
            bindingEvidenceRef: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            issuedAt: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            expiresAt: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            authorityPosture: import("zod").ZodDefault<import("zod").ZodLiteral<"evidence_only">>;
        }, import("zod/v4/core").$strict>>>;
        runId: import("zod").ZodString;
        runtimeAdapterRef: import("zod").ZodString;
        actionClass: import("zod").ZodString;
        protectedSurfaceKind: import("zod").ZodString;
        resourceRef: import("zod").ZodString;
        gatewayId: import("zod").ZodString;
        gatewayPolicyVersion: import("zod").ZodString;
        idempotencyKey: import("zod").ZodString;
        paramsDigest: import("zod").ZodString;
        nonSecretParamsSummary: import("zod").ZodRecord<import("zod").ZodString, ZodType<import("../..").JsonValue, unknown, import("zod/v4/core").$ZodTypeInternals<import("../..").JsonValue, unknown>>>;
        clearingEvidenceRefs: import("zod").ZodDefault<import("zod").ZodObject<{
            correlationRef: import("zod").ZodOptional<import("zod").ZodString>;
            obligationRef: import("zod").ZodOptional<import("zod").ZodString>;
            counterpartyRef: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>>;
        surfaceOperationRef: import("zod").ZodNullable<import("zod").ZodString>;
        surfaceOperationReconciliationRef: import("zod").ZodNullable<import("zod").ZodString>;
        surfaceOperationEvidenceLabels: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        surfaceOperationEvidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        gatewayCredentialEvidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        delegatedAuthorityEvidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        credentialResolutionEvidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        typedCommitmentRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        typedCommitmentSetDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        typedCommitmentProjectionClass: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodEnum<{
            public_redacted: "public_redacted";
            operator_redacted: "operator_redacted";
            auditor_export: "auditor_export";
        }>>>;
        typedCommitmentSummaries: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            typedActionCommitmentId: import("zod").ZodString;
            commitmentDigest: import("zod").ZodString;
            subjectDigest: import("zod").ZodString;
            purpose: import("zod").ZodEnum<{
                external_commitment_evidence: "external_commitment_evidence";
                policy_required_evidence: "policy_required_evidence";
                service_workflow_readback: "service_workflow_readback";
                post_gateway_payment_evidence: "post_gateway_payment_evidence";
                display_binding_evidence: "display_binding_evidence";
            }>;
            profile: import("zod").ZodEnum<{
                handshake_jcs_typed: "handshake_jcs_typed";
                eip712: "eip712";
            }>;
            verificationStatus: import("zod").ZodEnum<{
                unverified: "unverified";
                proof_gap: "proof_gap";
                verified: "verified";
                refused: "refused";
                unsupported: "unsupported";
            }>;
            replayStatus: import("zod").ZodEnum<{
                stale: "stale";
                fresh: "fresh";
                replayed: "replayed";
                missing: "missing";
                not_applicable: "not_applicable";
            }>;
            verifierContextDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            safetyPosture: import("zod").ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                display_bound: "display_bound";
                digest_bound: "digest_bound";
                verifier_bound: "verifier_bound";
                provider_observed: "provider_observed";
            }>;
        }, import("zod/v4/core").$strict>>>;
        typedCommitmentProjections: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            typedActionCommitmentRef: import("zod").ZodString;
            actionContractRef: import("zod").ZodNullable<import("zod").ZodString>;
            projectionClass: import("zod").ZodEnum<{
                public_redacted: "public_redacted";
                operator_redacted: "operator_redacted";
                auditor_export: "auditor_export";
            }>;
            commitmentDigest: import("zod").ZodString;
            subject: import("zod").ZodObject<{
                kind: import("zod").ZodEnum<{
                    action_contract: "action_contract";
                    service_workflow: "service_workflow";
                    x402_payment: "x402_payment";
                    agentic_endpoint_access: "agentic_endpoint_access";
                    protected_surface: "protected_surface";
                    external_evidence: "external_evidence";
                }>;
                ref: import("zod").ZodString;
                digest: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            purpose: import("zod").ZodEnum<{
                external_commitment_evidence: "external_commitment_evidence";
                policy_required_evidence: "policy_required_evidence";
                service_workflow_readback: "service_workflow_readback";
                post_gateway_payment_evidence: "post_gateway_payment_evidence";
                display_binding_evidence: "display_binding_evidence";
            }>;
            profile: import("zod").ZodEnum<{
                handshake_jcs_typed: "handshake_jcs_typed";
                eip712: "eip712";
            }>;
            domain: import("zod").ZodObject<{
                domainRef: import("zod").ZodString;
                domainDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                tenantId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                organizationId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                gatewayId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                actionClass: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                providerEnvironmentRef: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strict>;
            verificationStatus: import("zod").ZodEnum<{
                unverified: "unverified";
                proof_gap: "proof_gap";
                verified: "verified";
                refused: "refused";
                unsupported: "unsupported";
            }>;
            verificationReasonCode: import("zod").ZodNullable<import("zod").ZodString>;
            replayStatus: import("zod").ZodEnum<{
                stale: "stale";
                fresh: "fresh";
                replayed: "replayed";
                missing: "missing";
                not_applicable: "not_applicable";
            }>;
            idempotencyKey: import("zod").ZodNullable<import("zod").ZodString>;
            nonceRef: import("zod").ZodNullable<import("zod").ZodString>;
            nonceDigest: import("zod").ZodNullable<import("zod").ZodString>;
            replayWindowSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
            verifierRef: import("zod").ZodNullable<import("zod").ZodString>;
            verifierContextDigest: import("zod").ZodNullable<import("zod").ZodString>;
            keyId: import("zod").ZodNullable<import("zod").ZodString>;
            providerNativeDigest: import("zod").ZodNullable<import("zod").ZodString>;
            safetyPosture: import("zod").ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                display_bound: "display_bound";
                digest_bound: "digest_bound";
                verifier_bound: "verifier_bound";
                provider_observed: "provider_observed";
            }>;
            displayBindingStatus: import("zod").ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                display_bound: "display_bound";
                digest_bound: "digest_bound";
                verifier_bound: "verifier_bound";
                provider_observed: "provider_observed";
            }>;
            authorityBoundary: import("zod").ZodObject<{
                createsPolicyDecision: import("zod").ZodLiteral<false>;
                createsGreenlight: import("zod").ZodLiteral<false>;
                performsGatewayCheck: import("zod").ZodLiteral<false>;
                authorizesMutation: import("zod").ZodLiteral<false>;
                createsReceipt: import("zod").ZodLiteral<false>;
                mintsCertificate: import("zod").ZodLiteral<false>;
                provesPrincipalConsent: import("zod").ZodLiteral<false>;
                provesSignerCustody: import("zod").ZodLiteral<false>;
                provesPaymentCustody: import("zod").ZodLiteral<false>;
                createsEndpointLease: import("zod").ZodLiteral<false>;
                provesDownstreamSuccess: import("zod").ZodLiteral<false>;
            }, import("zod/v4/core").$strict>;
            refusalRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            proofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            evidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            signatureEvidence: import("zod").ZodNullable<import("zod").ZodObject<{
                signatureRef: import("zod").ZodNullable<import("zod").ZodString>;
                signatureDigest: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>>;
            rawReadAudit: import("zod").ZodNullable<import("zod").ZodObject<{
                rawRecordReadAuditRef: import("zod").ZodString;
                rawRecordReadAuditDigest: import("zod").ZodString;
                redactionPosture: import("zod").ZodLiteral<"auditor_signature_digest_only">;
            }, import("zod/v4/core").$strict>>;
            rawTypedPayloadIncluded: import("zod").ZodLiteral<false>;
            rawSignatureIncluded: import("zod").ZodLiteral<false>;
            rawCredentialMaterialIncluded: import("zod").ZodLiteral<false>;
            rawPaymentMaterialIncluded: import("zod").ZodLiteral<false>;
            rawRequestBodyIncluded: import("zod").ZodLiteral<false>;
            commandMaterialIncluded: import("zod").ZodLiteral<false>;
            redactionProfileRef: import("zod").ZodEnum<{
                public_redacted: "public_redacted";
                operator_redacted: "operator_redacted";
                auditor_signature_digest_only: "auditor_signature_digest_only";
            }>;
            omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strict>>>;
        typedCommitmentRefusalRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        typedCommitmentProofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        signerInvocationEvidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        downstreamEvidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        authMdEvidenceRefs: import("zod").ZodObject<{
            discoveryRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            authorizationServerRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            identityAssertionRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            registrationRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            claimRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            revocationRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            credentialCustodyRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            credentialResolutionRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            protectedApiCallRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            downstreamEvidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strict>;
        authMdEvidenceLabels: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        providerRequestRef: import("zod").ZodNullable<import("zod").ZodString>;
        providerOperationRef: import("zod").ZodNullable<import("zod").ZodString>;
        downstreamRetryability: import("zod").ZodNullable<import("zod").ZodEnum<{
            unknown: "unknown";
            retryable: "retryable";
            non_retryable: "non_retryable";
        }>>;
        reconciliationFinalityStatus: import("zod").ZodNullable<import("zod").ZodEnum<{
            unknown: "unknown";
            pending: "pending";
            final: "final";
            suspect: "suspect";
        }>>;
        gatewayAdmissionStatus: import("zod").ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            replayed: "replayed";
            not_requested: "not_requested";
            admitted: "admitted";
        }>;
        greenlightConsumptionStatus: import("zod").ZodNullable<import("zod").ZodEnum<{
            replayed: "replayed";
            not_applicable: "not_applicable";
            not_consumed: "not_consumed";
            consumed: "consumed";
        }>>;
        downstreamOutcomeStatus: import("zod").ZodEnum<{
            unknown: "unknown";
            refused: "refused";
            failed: "failed";
            succeeded: "succeeded";
            pending: "pending";
            not_started: "not_started";
        }>;
        proofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        proofGapReasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        refusalRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        refusalReasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        idempotencyLedgerRef: import("zod").ZodNullable<import("zod").ZodString>;
        idempotencyLedgerState: import("zod").ZodNullable<import("zod").ZodEnum<{
            terminal_unknown: "terminal_unknown";
            authority_reserved: "authority_reserved";
            mutation_started: "mutation_started";
            terminal_succeeded: "terminal_succeeded";
            terminal_failed: "terminal_failed";
            terminal_refused: "terminal_refused";
        }>>;
        idempotencyRecoveryDisposition: import("zod").ZodNullable<import("zod").ZodEnum<{
            missing: "missing";
            same_params_result_available: "same_params_result_available";
            same_params_duplicate_refused: "same_params_duplicate_refused";
            different_params_refused: "different_params_refused";
            terminal_unknown_requires_recovery: "terminal_unknown_requires_recovery";
        }>>;
        idempotencyReasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        recoveryRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        isolationRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        authorityCertificateRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        evidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        streamOffsets: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            streamScope: import("zod").ZodEnum<{
                tenant: "tenant";
                organization: "organization";
                run: "run";
                protected_surface_resource: "protected_surface_resource";
            }>;
            partitionKey: import("zod").ZodString;
            offsetStart: import("zod").ZodNumber;
            offsetEnd: import("zod").ZodNumber;
            terminalEventDigest: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>>;
        receiptDigest: import("zod").ZodNullable<import("zod").ZodString>;
        auditChainDigest: import("zod").ZodNullable<import("zod").ZodString>;
        receiptExportRef: import("zod").ZodNullable<import("zod").ZodString>;
        redactionProfileRef: import("zod").ZodLiteral<"agent-transaction-envelope:v0.2-redacted">;
        omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        envelopeDigest: import("zod").ZodString;
    }, import("zod/v4/core").$strict>;
    readonly pathParameters: readonly [{
        readonly name: "actionContractId";
        readonly description: "Action contract identifier used to assemble the redacted transaction envelope.";
    }];
}, {
    readonly routeId: "getOperationReadbackProjection";
    readonly honoPath: "/v0.2/evidence/operations/:actionContractId/readback";
    readonly openApiPath: "/v0.2/evidence/operations/{actionContractId}/readback";
    readonly roles: readonly ["review_custody", "runtime_evidence"];
    readonly summary: "Read redacted operation readback for diagnostics only";
    readonly responseDescription: "Operation readback projection with compilation provenance stages. Inspection evidence only; does not create authority or greenlights.";
    readonly responseSchema: import("zod").ZodObject<{
        schemaVersion: import("zod").ZodLiteral<"handshake.operation-readback.v0.1">;
        actionContractRef: import("zod").ZodString;
        contractDigest: import("zod").ZodString;
        principalRef: import("zod").ZodString;
        agentRef: import("zod").ZodString;
        runId: import("zod").ZodString;
        runtimeAdapterRef: import("zod").ZodString;
        actionClass: import("zod").ZodString;
        protectedSurfaceKind: import("zod").ZodString;
        resourceRef: import("zod").ZodString;
        gatewayId: import("zod").ZodString;
        gatewayPolicyVersion: import("zod").ZodString;
        sourceAuthority: import("zod").ZodLiteral<"protocol_store_projection">;
        operationStatus: import("zod").ZodEnum<{
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
        latestAuthoritativeStage: import("zod").ZodEnum<{
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
        policyDecisionRef: import("zod").ZodString;
        policyDecisionStatus: import("zod").ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            refuse: "refuse";
            quarantine: "quarantine";
            greenlight: "greenlight";
            halt: "halt";
        }>;
        agreementObligationPolicy: import("zod").ZodObject<{
            sourceAuthority: import("zod").ZodLiteral<"policy_decision_snapshot">;
            evaluationStatus: import("zod").ZodEnum<{
                proof_gap: "proof_gap";
                refuse: "refuse";
                greenlight: "greenlight";
            }>;
            ok: import("zod").ZodBoolean;
            reasonCode: import("zod").ZodNullable<import("zod").ZodString>;
            reason: import("zod").ZodNullable<import("zod").ZodString>;
            policyInput: import("zod").ZodObject<{
                posture: import("zod").ZodEnum<{
                    proof_gap: "proof_gap";
                    refused: "refused";
                    not_applicable: "not_applicable";
                    bound: "bound";
                }>;
                obligationRef: import("zod").ZodNullable<import("zod").ZodString>;
                linkedAgreementId: import("zod").ZodNullable<import("zod").ZodString>;
                acceptedNegotiationResolutionId: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>;
        }, import("zod/v4/core").$strict>;
        greenlightRef: import("zod").ZodNullable<import("zod").ZodString>;
        gateAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        mutationAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        receiptRef: import("zod").ZodNullable<import("zod").ZodString>;
        gatewayAdmissionStatus: import("zod").ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            replayed: "replayed";
            not_requested: "not_requested";
            admitted: "admitted";
        }>;
        downstreamOutcomeStatus: import("zod").ZodEnum<{
            unknown: "unknown";
            refused: "refused";
            failed: "failed";
            succeeded: "succeeded";
            pending: "pending";
            not_started: "not_started";
        }>;
        finalityStatus: import("zod").ZodNullable<import("zod").ZodEnum<{
            unknown: "unknown";
            pending: "pending";
            final: "final";
            suspect: "suspect";
        }>>;
        greenlightUsePosture: import("zod").ZodEnum<{
            unknown: "unknown";
            none: "none";
            consumed: "consumed";
            available_for_one_gateway_check: "available_for_one_gateway_check";
            replayed_or_unusable: "replayed_or_unusable";
        }>;
        reasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        nextMechanism: import("zod").ZodEnum<{
            use_greenlight_at_gateway: "use_greenlight_at_gateway";
            read_evidence: "read_evidence";
            request_review: "request_review";
            recraft_request: "recraft_request";
            create_new_contract: "create_new_contract";
            recover_terminal_unknown: "recover_terminal_unknown";
            stop: "stop";
            wait_for_downstream: "wait_for_downstream";
        }>;
        safeToRetryReadback: import("zod").ZodLiteral<true>;
        safeToReuseGreenlight: import("zod").ZodBoolean;
        requiresNewContract: import("zod").ZodBoolean;
        authorityCreatedByReadback: import("zod").ZodLiteral<false>;
        greenlightCreatedByReadback: import("zod").ZodLiteral<false>;
        gatewayCheckPerformedByReadback: import("zod").ZodLiteral<false>;
        mutationAttemptedByReadback: import("zod").ZodLiteral<false>;
        receiptExportCreatedByReadback: import("zod").ZodLiteral<false>;
        rawInternalRecordIncluded: import("zod").ZodLiteral<false>;
        credentialMaterialIncluded: import("zod").ZodLiteral<false>;
        paymentMaterialIncluded: import("zod").ZodLiteral<false>;
        typedCommitmentRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        typedCommitmentSetDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        typedCommitmentProjectionClass: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodEnum<{
            public_redacted: "public_redacted";
            operator_redacted: "operator_redacted";
            auditor_export: "auditor_export";
        }>>>;
        typedCommitmentSummaries: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            typedActionCommitmentId: import("zod").ZodString;
            commitmentDigest: import("zod").ZodString;
            subjectDigest: import("zod").ZodString;
            purpose: import("zod").ZodEnum<{
                external_commitment_evidence: "external_commitment_evidence";
                policy_required_evidence: "policy_required_evidence";
                service_workflow_readback: "service_workflow_readback";
                post_gateway_payment_evidence: "post_gateway_payment_evidence";
                display_binding_evidence: "display_binding_evidence";
            }>;
            profile: import("zod").ZodEnum<{
                handshake_jcs_typed: "handshake_jcs_typed";
                eip712: "eip712";
            }>;
            verificationStatus: import("zod").ZodEnum<{
                unverified: "unverified";
                proof_gap: "proof_gap";
                verified: "verified";
                refused: "refused";
                unsupported: "unsupported";
            }>;
            replayStatus: import("zod").ZodEnum<{
                stale: "stale";
                fresh: "fresh";
                replayed: "replayed";
                missing: "missing";
                not_applicable: "not_applicable";
            }>;
            verifierContextDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            safetyPosture: import("zod").ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                display_bound: "display_bound";
                digest_bound: "digest_bound";
                verifier_bound: "verifier_bound";
                provider_observed: "provider_observed";
            }>;
        }, import("zod/v4/core").$strict>>>;
        typedCommitmentProjections: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            typedActionCommitmentRef: import("zod").ZodString;
            actionContractRef: import("zod").ZodNullable<import("zod").ZodString>;
            projectionClass: import("zod").ZodEnum<{
                public_redacted: "public_redacted";
                operator_redacted: "operator_redacted";
                auditor_export: "auditor_export";
            }>;
            commitmentDigest: import("zod").ZodString;
            subject: import("zod").ZodObject<{
                kind: import("zod").ZodEnum<{
                    action_contract: "action_contract";
                    service_workflow: "service_workflow";
                    x402_payment: "x402_payment";
                    agentic_endpoint_access: "agentic_endpoint_access";
                    protected_surface: "protected_surface";
                    external_evidence: "external_evidence";
                }>;
                ref: import("zod").ZodString;
                digest: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            purpose: import("zod").ZodEnum<{
                external_commitment_evidence: "external_commitment_evidence";
                policy_required_evidence: "policy_required_evidence";
                service_workflow_readback: "service_workflow_readback";
                post_gateway_payment_evidence: "post_gateway_payment_evidence";
                display_binding_evidence: "display_binding_evidence";
            }>;
            profile: import("zod").ZodEnum<{
                handshake_jcs_typed: "handshake_jcs_typed";
                eip712: "eip712";
            }>;
            domain: import("zod").ZodObject<{
                domainRef: import("zod").ZodString;
                domainDigest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                tenantId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                organizationId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                gatewayId: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                actionClass: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
                providerEnvironmentRef: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strict>;
            verificationStatus: import("zod").ZodEnum<{
                unverified: "unverified";
                proof_gap: "proof_gap";
                verified: "verified";
                refused: "refused";
                unsupported: "unsupported";
            }>;
            verificationReasonCode: import("zod").ZodNullable<import("zod").ZodString>;
            replayStatus: import("zod").ZodEnum<{
                stale: "stale";
                fresh: "fresh";
                replayed: "replayed";
                missing: "missing";
                not_applicable: "not_applicable";
            }>;
            idempotencyKey: import("zod").ZodNullable<import("zod").ZodString>;
            nonceRef: import("zod").ZodNullable<import("zod").ZodString>;
            nonceDigest: import("zod").ZodNullable<import("zod").ZodString>;
            replayWindowSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
            verifierRef: import("zod").ZodNullable<import("zod").ZodString>;
            verifierContextDigest: import("zod").ZodNullable<import("zod").ZodString>;
            keyId: import("zod").ZodNullable<import("zod").ZodString>;
            providerNativeDigest: import("zod").ZodNullable<import("zod").ZodString>;
            safetyPosture: import("zod").ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                display_bound: "display_bound";
                digest_bound: "digest_bound";
                verifier_bound: "verifier_bound";
                provider_observed: "provider_observed";
            }>;
            displayBindingStatus: import("zod").ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                display_bound: "display_bound";
                digest_bound: "digest_bound";
                verifier_bound: "verifier_bound";
                provider_observed: "provider_observed";
            }>;
            authorityBoundary: import("zod").ZodObject<{
                createsPolicyDecision: import("zod").ZodLiteral<false>;
                createsGreenlight: import("zod").ZodLiteral<false>;
                performsGatewayCheck: import("zod").ZodLiteral<false>;
                authorizesMutation: import("zod").ZodLiteral<false>;
                createsReceipt: import("zod").ZodLiteral<false>;
                mintsCertificate: import("zod").ZodLiteral<false>;
                provesPrincipalConsent: import("zod").ZodLiteral<false>;
                provesSignerCustody: import("zod").ZodLiteral<false>;
                provesPaymentCustody: import("zod").ZodLiteral<false>;
                createsEndpointLease: import("zod").ZodLiteral<false>;
                provesDownstreamSuccess: import("zod").ZodLiteral<false>;
            }, import("zod/v4/core").$strict>;
            refusalRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            proofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            evidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            signatureEvidence: import("zod").ZodNullable<import("zod").ZodObject<{
                signatureRef: import("zod").ZodNullable<import("zod").ZodString>;
                signatureDigest: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>>;
            rawReadAudit: import("zod").ZodNullable<import("zod").ZodObject<{
                rawRecordReadAuditRef: import("zod").ZodString;
                rawRecordReadAuditDigest: import("zod").ZodString;
                redactionPosture: import("zod").ZodLiteral<"auditor_signature_digest_only">;
            }, import("zod/v4/core").$strict>>;
            rawTypedPayloadIncluded: import("zod").ZodLiteral<false>;
            rawSignatureIncluded: import("zod").ZodLiteral<false>;
            rawCredentialMaterialIncluded: import("zod").ZodLiteral<false>;
            rawPaymentMaterialIncluded: import("zod").ZodLiteral<false>;
            rawRequestBodyIncluded: import("zod").ZodLiteral<false>;
            commandMaterialIncluded: import("zod").ZodLiteral<false>;
            redactionProfileRef: import("zod").ZodEnum<{
                public_redacted: "public_redacted";
                operator_redacted: "operator_redacted";
                auditor_signature_digest_only: "auditor_signature_digest_only";
            }>;
            omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strict>>>;
        typedCommitmentRefusalRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        typedCommitmentProofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        evidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        proofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        refusalRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        recoveryRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        isolationRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        authorityCertificateRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        projectionFreshness: import("zod").ZodObject<{
            schemaVersion: import("zod").ZodLiteral<"handshake.operation-readback-freshness.v0.1">;
            sourceAuthority: import("zod").ZodLiteral<"protocol_store_projection">;
            readModelKind: import("zod").ZodLiteral<"direct_protocol_store_projection">;
            status: import("zod").ZodEnum<{
                current: "current";
                not_observed: "not_observed";
                stale_or_concurrent_update: "stale_or_concurrent_update";
                stream_tail_missing: "stream_tail_missing";
            }>;
            streamId: import("zod").ZodNullable<import("zod").ZodString>;
            partitionKey: import("zod").ZodNullable<import("zod").ZodString>;
            observedOffset: import("zod").ZodNullable<import("zod").ZodNumber>;
            observedEventDigest: import("zod").ZodNullable<import("zod").ZodString>;
            latestOffset: import("zod").ZodNullable<import("zod").ZodNumber>;
            latestEventDigest: import("zod").ZodNullable<import("zod").ZodString>;
            lagEvents: import("zod").ZodNullable<import("zod").ZodNumber>;
            rawStreamEventsIncluded: import("zod").ZodLiteral<false>;
            authorityCreatedByFreshness: import("zod").ZodLiteral<false>;
        }, import("zod/v4/core").$strict>;
        providerRequestRef: import("zod").ZodNullable<import("zod").ZodString>;
        providerOperationRef: import("zod").ZodNullable<import("zod").ZodString>;
        traceRef: import("zod").ZodNullable<import("zod").ZodString>;
        spanRef: import("zod").ZodNullable<import("zod").ZodString>;
        redactionProfileRef: import("zod").ZodLiteral<"operation-readback:v0.1-redacted">;
        omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        supportContext: import("zod").ZodObject<{
            schemaVersion: import("zod").ZodLiteral<"handshake.support-context.v0.1">;
            supportContextRef: import("zod").ZodString;
            sourceAuthority: import("zod").ZodLiteral<"protocol_store_projection">;
            surface: import("zod").ZodLiteral<"operation_readback">;
            actionContractRef: import("zod").ZodString;
            requestIdentity: import("zod").ZodNullable<import("zod").ZodString>;
            operationStatus: import("zod").ZodEnum<{
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
            reasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            nextMechanism: import("zod").ZodEnum<{
                use_greenlight_at_gateway: "use_greenlight_at_gateway";
                read_evidence: "read_evidence";
                request_review: "request_review";
                recraft_request: "recraft_request";
                create_new_contract: "create_new_contract";
                recover_terminal_unknown: "recover_terminal_unknown";
                stop: "stop";
                wait_for_downstream: "wait_for_downstream";
            }>;
            safeToRetryReadback: import("zod").ZodLiteral<true>;
            safeToReuseGreenlight: import("zod").ZodBoolean;
            requiresNewContract: import("zod").ZodBoolean;
            supportSeverity: import("zod").ZodEnum<{
                none: "none";
                info: "info";
                warning: "warning";
                urgent: "urgent";
            }>;
            docsUrl: import("zod").ZodNullable<import("zod").ZodString>;
            nextCommand: import("zod").ZodNullable<import("zod").ZodString>;
            evidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            proofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            refusalRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
            traceRef: import("zod").ZodNullable<import("zod").ZodString>;
            spanRef: import("zod").ZodNullable<import("zod").ZodString>;
            redactionProfileRef: import("zod").ZodLiteral<"operation-readback:v0.1-redacted">;
        }, import("zod/v4/core").$strict>;
    }, import("zod/v4/core").$strict>;
    readonly pathParameters: readonly [{
        readonly name: "actionContractId";
        readonly description: "Action contract identifier for operation readback assembly.";
    }];
}, {
    readonly routeId: "getOperationCorrelationIndex";
    readonly honoPath: "/v0.2/evidence/operations/:actionContractId/correlation";
    readonly openApiPath: "/v0.2/evidence/operations/{actionContractId}/correlation";
    readonly roles: readonly ["review_custody", "runtime_evidence"];
    readonly summary: "Read linked operation correlation refs for diagnostics only";
    readonly responseDescription: "Read-only correlation index over existing evidence refs. No mutation routes and no authority creation.";
    readonly responseSchema: import("zod").ZodObject<{
        schemaVersion: import("zod").ZodLiteral<"handshake.operation-correlation.v0.1">;
        actionContractRef: import("zod").ZodString;
        sourceAuthority: import("zod").ZodLiteral<"protocol_store_projection">;
        authorityCreatedByProjection: import("zod").ZodLiteral<false>;
        greenlightCreatedByReadback: import("zod").ZodLiteral<false>;
        gatewayCheckPerformedByReadback: import("zod").ZodLiteral<false>;
        mutationAttemptedByReadback: import("zod").ZodLiteral<false>;
        intentCompilationRef: import("zod").ZodNullable<import("zod").ZodString>;
        candidateActionRef: import("zod").ZodNullable<import("zod").ZodString>;
        policyDecisionRef: import("zod").ZodString;
        greenlightRef: import("zod").ZodNullable<import("zod").ZodString>;
        gateAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        mutationAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        receiptRef: import("zod").ZodNullable<import("zod").ZodString>;
        proofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        refusalRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        recoveryRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        isolationRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        authorityCertificateRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        redactionProfileRef: import("zod").ZodLiteral<"operation-correlation:v0.1-redacted">;
        omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
    }, import("zod/v4/core").$strict>;
    readonly pathParameters: readonly [{
        readonly name: "actionContractId";
        readonly description: "Action contract identifier for correlation index assembly.";
    }];
}, {
    readonly routeId: "getIdempotencyRecoveryProjection";
    readonly honoPath: "/v0.2/evidence/idempotency-recovery/:actionContractId";
    readonly openApiPath: "/v0.2/evidence/idempotency-recovery/{actionContractId}";
    readonly roles: readonly ["review_custody", "runtime_evidence"];
    readonly summary: "Read redacted idempotency reuse and recovery state for diagnostics only";
    readonly responseDescription: "Redacted idempotency recovery projection. Evidence only; same-key reads do not create fresh authority.";
    readonly responseSchema: import("zod").ZodObject<{
        actionContractRef: import("zod").ZodString;
        ledgerKeyDigest: import("zod").ZodString;
        idempotencyKey: import("zod").ZodString;
        paramsDigest: import("zod").ZodString;
        currentLedgerRef: import("zod").ZodNullable<import("zod").ZodString>;
        currentLedgerState: import("zod").ZodNullable<import("zod").ZodEnum<{
            terminal_unknown: "terminal_unknown";
            authority_reserved: "authority_reserved";
            mutation_started: "mutation_started";
            terminal_succeeded: "terminal_succeeded";
            terminal_failed: "terminal_failed";
            terminal_refused: "terminal_refused";
        }>>;
        paramsDigestMatch: import("zod").ZodNullable<import("zod").ZodBoolean>;
        priorActionContractRef: import("zod").ZodNullable<import("zod").ZodString>;
        policyDecisionRef: import("zod").ZodNullable<import("zod").ZodString>;
        greenlightRef: import("zod").ZodNullable<import("zod").ZodString>;
        gateAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        mutationAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        receiptRef: import("zod").ZodNullable<import("zod").ZodString>;
        priorResultRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        recoveryDisposition: import("zod").ZodEnum<{
            missing: "missing";
            same_params_result_available: "same_params_result_available";
            same_params_duplicate_refused: "same_params_duplicate_refused";
            different_params_refused: "different_params_refused";
            terminal_unknown_requires_recovery: "terminal_unknown_requires_recovery";
        }>;
        reasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        evidenceRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        redactionProfileRef: import("zod").ZodLiteral<"idempotency-recovery:v0.2-redacted">;
        omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
    }, import("zod/v4/core").$strict>;
    readonly pathParameters: readonly [{
        readonly name: "actionContractId";
        readonly description: "Action contract identifier used to derive the idempotency scope.";
    }];
}, {
    readonly routeId: "getReceiptTimelineProjection";
    readonly honoPath: "/v0.2/evidence/receipts/:receiptId/timeline";
    readonly openApiPath: "/v0.2/evidence/receipts/{receiptId}/timeline";
    readonly roles: readonly ["review_custody", "runtime_evidence"];
    readonly summary: "Read a redacted receipt event timeline for diagnostics only";
    readonly responseDescription: "Redacted receipt timeline projection. Inspection evidence only; not authority and not downstream business proof.";
    readonly responseSchema: import("zod").ZodObject<{
        receiptRef: import("zod").ZodString;
        actionContractRef: import("zod").ZodString;
        policyDecisionRef: import("zod").ZodString;
        greenlightRef: import("zod").ZodNullable<import("zod").ZodString>;
        gateAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        mutationAttemptRef: import("zod").ZodNullable<import("zod").ZodString>;
        gatewayId: import("zod").ZodString;
        policyDecisionStatus: import("zod").ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            refuse: "refuse";
            quarantine: "quarantine";
            greenlight: "greenlight";
            halt: "halt";
        }>;
        gatewayCheckStatus: import("zod").ZodNullable<import("zod").ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            passed: "passed";
        }>>;
        gatewayAdmissionStatus: import("zod").ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            replayed: "replayed";
            not_requested: "not_requested";
            admitted: "admitted";
        }>;
        greenlightConsumptionStatus: import("zod").ZodEnum<{
            replayed: "replayed";
            not_applicable: "not_applicable";
            not_consumed: "not_consumed";
            consumed: "consumed";
        }>;
        mutationAttemptStatus: import("zod").ZodEnum<{
            unknown: "unknown";
            failed: "failed";
            not_attempted: "not_attempted";
            submitted: "submitted";
            succeeded: "succeeded";
            downstream_refused: "downstream_refused";
        }>;
        downstreamExecutionStatus: import("zod").ZodEnum<{
            unknown: "unknown";
            refused: "refused";
            failed: "failed";
            succeeded: "succeeded";
            pending: "pending";
            not_started: "not_started";
        }>;
        downstreamOutcomeStatus: import("zod").ZodEnum<{
            unknown: "unknown";
            refused: "refused";
            failed: "failed";
            succeeded: "succeeded";
            pending: "pending";
            not_started: "not_started";
        }>;
        proofGapRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        finalityStatus: import("zod").ZodEnum<{
            unknown: "unknown";
            pending: "pending";
            final: "final";
            suspect: "suspect";
        }>;
        receiptDigest: import("zod").ZodNullable<import("zod").ZodString>;
        auditChainDigest: import("zod").ZodNullable<import("zod").ZodString>;
        streamOffsets: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            streamScope: import("zod").ZodEnum<{
                tenant: "tenant";
                organization: "organization";
                run: "run";
                protected_surface_resource: "protected_surface_resource";
            }>;
            partitionKey: import("zod").ZodString;
            offsetStart: import("zod").ZodNumber;
            offsetEnd: import("zod").ZodNumber;
            terminalEventDigest: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>>;
        events: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            streamId: import("zod").ZodString;
            streamScope: import("zod").ZodEnum<{
                tenant: "tenant";
                organization: "organization";
                run: "run";
                protected_surface_resource: "protected_surface_resource";
            }>;
            partitionKey: import("zod").ZodString;
            offset: import("zod").ZodNumber;
            eventType: import("zod").ZodEnum<{
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
            eventTime: import("zod").ZodString;
            eventDigest: import("zod").ZodString;
            objectRefs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strict>>>;
        missingEventCount: import("zod").ZodNumber;
        failureEvidence: import("zod").ZodNullable<import("zod").ZodObject<{
            downstreamRetryability: import("zod").ZodEnum<{
                unknown: "unknown";
                retryable: "retryable";
                non_retryable: "non_retryable";
            }>;
            providerRequestRef: import("zod").ZodNullable<import("zod").ZodString>;
            providerOperationRef: import("zod").ZodNullable<import("zod").ZodString>;
            redactedDiagnosticsDigest: import("zod").ZodNullable<import("zod").ZodString>;
            traceRef: import("zod").ZodNullable<import("zod").ZodString>;
            spanRef: import("zod").ZodNullable<import("zod").ZodString>;
            diagnosticsRedactionPosture: import("zod").ZodEnum<{
                unknown: "unknown";
                none: "none";
                redacted: "redacted";
                digest_only: "digest_only";
            }>;
        }, import("zod/v4/core").$strict>>;
        delegationProvenance: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodObject<{
            a1ChainFingerprint: import("zod").ZodString;
            chainDepth: import("zod").ZodNumber;
            principalPkFingerprint: import("zod").ZodString;
            terminalDelegatePkFingerprint: import("zod").ZodString;
            verifyOutcome: import("zod").ZodEnum<{
                valid: "valid";
                invalid: "invalid";
            }>;
            reasonCodes: import("zod").ZodArray<import("zod").ZodString>;
            evidenceBindingDigest: import("zod").ZodString;
            a1VerifierVersion: import("zod").ZodString;
            mutationAuthorityCreated: import("zod").ZodLiteral<false>;
            greenlightCreated: import("zod").ZodLiteral<false>;
        }, import("zod/v4/core").$strict>>>;
        redactionProfileRef: import("zod").ZodLiteral<"receipt-timeline:v0.2-redacted">;
        omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
    }, import("zod/v4/core").$strict>;
    readonly pathParameters: readonly [{
        readonly name: "receiptId";
        readonly description: "Receipt identifier.";
    }];
}, {
    readonly routeId: "getProtectedPathInstallHealthProjection";
    readonly honoPath: "/v0.2/evidence/protected-path-install-health/:actionContractId";
    readonly openApiPath: "/v0.2/evidence/protected-path-install-health/{actionContractId}";
    readonly roles: readonly ["review_custody", "runtime_evidence"];
    readonly summary: "Read redacted package-install protected-path health for diagnostics only";
    readonly responseDescription: "Redacted protected-path install health projection. Inspection evidence only; not gateway authority.";
    readonly responseSchema: import("zod").ZodObject<{
        actionContractRef: import("zod").ZodString;
        postureScopeKey: import("zod").ZodString;
        runtimeAdapterRef: import("zod").ZodString;
        gatewayId: import("zod").ZodString;
        actionClass: import("zod").ZodString;
        protectedSurfaceKind: import("zod").ZodString;
        resourceRef: import("zod").ZodString;
        requiredProtectedPathState: import("zod").ZodEnum<{
            not_required: "not_required";
            gateway_checked: "gateway_checked";
        }>;
        installHealthStatus: import("zod").ZodEnum<{
            unknown: "unknown";
            not_required: "not_required";
            stale: "stale";
            missing: "missing";
            satisfies_gateway_checked: "satisfies_gateway_checked";
            unsafe: "unsafe";
        }>;
        reasonCodes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
        currentPostureRef: import("zod").ZodNullable<import("zod").ZodString>;
        currentPostureDigest: import("zod").ZodNullable<import("zod").ZodString>;
        postureState: import("zod").ZodNullable<import("zod").ZodEnum<{
            gateway_checked: "gateway_checked";
            bypass_risk: "bypass_risk";
            advisory: "advisory";
            blind: "blind";
            fixture_only: "fixture_only";
        }>>;
        credentialCustodyStatus: import("zod").ZodNullable<import("zod").ZodEnum<{
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
        rawSiblingToolStatus: import("zod").ZodNullable<import("zod").ZodEnum<{
            unknown: "unknown";
            absent: "absent";
            blocked: "blocked";
            present: "present";
        }>>;
        sourceAuthority: import("zod").ZodNullable<import("zod").ZodEnum<{
            unknown: "unknown";
            conformance_fixture: "conformance_fixture";
            runtime_probe: "runtime_probe";
            gateway_probe: "gateway_probe";
            operator_attestation: "operator_attestation";
            hosted_monitor: "hosted_monitor";
        }>>;
        bypassProbeCoverage: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            bypassProbeId: import("zod").ZodString;
            probeKind: import("zod").ZodEnum<{
                credential_custody: "credential_custody";
                raw_sibling_blocking: "raw_sibling_blocking";
                mcp_direct_call_blocking: "mcp_direct_call_blocking";
                token_passthrough_blocking: "token_passthrough_blocking";
                wrapper_drift: "wrapper_drift";
                failure_closed: "failure_closed";
            }>;
            probeOutcome: import("zod").ZodEnum<{
                inconclusive: "inconclusive";
                passed: "passed";
                failed: "failed";
            }>;
            sourceAuthority: import("zod").ZodEnum<{
                unknown: "unknown";
                conformance_fixture: "conformance_fixture";
                runtime_probe: "runtime_probe";
                gateway_probe: "gateway_probe";
                operator_attestation: "operator_attestation";
                hosted_monitor: "hosted_monitor";
            }>;
            probeDigest: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>>;
        observedAt: import("zod").ZodNullable<import("zod").ZodString>;
        expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
        redactionProfileRef: import("zod").ZodLiteral<"protected-path-install-health:v0.2-redacted">;
        omittedFields: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString>>;
    }, import("zod/v4/core").$strict>;
    readonly pathParameters: readonly [{
        readonly name: "actionContractId";
        readonly description: "Action contract identifier used to derive the protected-path scope.";
    }];
}];
