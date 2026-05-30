import { z } from "zod";
export { MCP_DELEGATION_VERIFY_TOOL } from "./tools/delegation-verify.js";
export declare const MCP_X402_PAYMENT_PROPOSE_TOOL: "handshake.actions.x402_payment.propose";
export declare const mcpServiceWorkflowBoundary: {
    readonly acceptsWorkflowHandleContext: true;
    readonly workflowHandleCreatesAuthority: false;
    readonly freshActionContractRequired: true;
    readonly admissionCreatesPolicyDecision: false;
    readonly admissionCreatesGreenlight: false;
    readonly admissionPerformsGatewayCheck: false;
    readonly handlePermitsMutation: false;
    readonly handleExportsReceipt: false;
};
export declare const mcpResourceTemplates: readonly [{
    readonly uriTemplate: "handshake://metadata/actions/{actionClass}";
    readonly purpose: "discover_proposal_shape";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "source_catalog";
}, {
    readonly uriTemplate: "handshake://challenges/{challengeId}";
    readonly purpose: "explain_refusal_or_recraft_boundary";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "challenge_ref";
}, {
    readonly uriTemplate: "handshake://evidence/contracts/{actionContractId}";
    readonly purpose: "read_redacted_contract_evidence";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "evidence_client";
}, {
    readonly uriTemplate: "handshake://evidence/envelopes/{actionContractId}";
    readonly purpose: "read_redacted_agent_transaction_envelope";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "evidence_client";
}, {
    readonly uriTemplate: "handshake://evidence/receipts/{receiptId}/timeline";
    readonly purpose: "read_gateway_and_downstream_timeline";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "evidence_client";
}, {
    readonly uriTemplate: "handshake://evidence/idempotency/{actionContractId}";
    readonly purpose: "read_idempotency_and_replay_evidence";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "evidence_client";
}, {
    readonly uriTemplate: "handshake://health/install/{actionContractId}";
    readonly purpose: "read_protected_path_install_health";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "evidence_client";
}, {
    readonly uriTemplate: "handshake://health/install/pre-contract/{requestId}";
    readonly purpose: "read_pre_contract_install_health";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "source_catalog";
}, {
    readonly uriTemplate: "handshake://certificates/{authorityCertificateId}";
    readonly purpose: "read_terminal_certificate_reference";
    readonly readOnly: true;
    readonly authorityCreated: false;
    readonly projectionStatus: "reference_only";
}];
export declare const mcpReadOnlyTools: readonly [{
    readonly name: "handshake.evidence.delegation.verify";
    readonly description: "Cryptographically verify an A1 delegation signed chain offline. Evidence-only: does not authorize, greenlight, or execute any protected action.";
    readonly inputSchema: z.core.ZodStandardJSONSchemaPayload<z.ZodObject<{
        signedChain: z.ZodUnknown;
        executorPk: z.ZodString;
        intentHash: z.ZodString;
        merkleProof: z.ZodObject<{
            siblings: z.ZodArray<z.ZodObject<{
                hash: z.ZodString;
                isLeft: z.ZodBoolean;
            }, z.core.$strict>>;
        }, z.core.$strict>;
        nowUnix: z.ZodOptional<z.ZodNumber>;
        driftToleranceSecs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    readonly outputSchema: z.core.ZodStandardJSONSchemaPayload<z.ZodDiscriminatedUnion<[z.ZodObject<{
        schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
        authorityCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        greenlightRef: z.ZodNull;
        gatewayCheckRef: z.ZodNull;
        mutationAttemptRef: z.ZodNull;
        proofRef: z.ZodNullable<z.ZodString>;
        refusalRef: z.ZodNullable<z.ZodString>;
        reasonCodes: z.ZodArray<z.ZodString>;
        nextAction: z.ZodEnum<{
            read_evidence: "read_evidence";
            request_review: "request_review";
            recraft_request: "recraft_request";
            stop: "stop";
            reload_metadata: "reload_metadata";
            fix_install: "fix_install";
            wait_for_gateway: "wait_for_gateway";
        }>;
        retryability: z.ZodEnum<{
            not_retryable: "not_retryable";
            retryable_after_recraft: "retryable_after_recraft";
            retryable_after_reload: "retryable_after_reload";
        }>;
        commitState: z.ZodEnum<{
            ambiguous: "ambiguous";
            not_started: "not_started";
            protocol_recorded: "protocol_recorded";
        }>;
        metadataRef: z.ZodNullable<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString>;
        challengeRef: z.ZodNullable<z.ZodString>;
        correlationRef: z.ZodNullable<z.ZodString>;
        idempotencyKey: z.ZodNullable<z.ZodString>;
        outcome: z.ZodLiteral<"action_contract_proposed">;
        phase: z.ZodLiteral<"proposal">;
        actionContractId: z.ZodString;
        contractDigest: z.ZodString;
        paramsDigest: z.ZodNullable<z.ZodString>;
        runtimeExecutionId: z.ZodString;
        toolCallDraftId: z.ZodString;
        intentCompilationId: z.ZodString;
        generatedExecutionGraphId: z.ZodNull;
        generatedExecutionGraphPosture: z.ZodLiteral<"not_exposed_by_role_scoped_runtime_surface">;
    }, z.core.$strict>, z.ZodObject<{
        schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
        phase: z.ZodEnum<{
            metadata: "metadata";
            freshness: "freshness";
            bypass: "bypass";
            replay: "replay";
            readiness: "readiness";
            evidence: "evidence";
            proposal: "proposal";
            tool_execution: "tool_execution";
        }>;
        authorityCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        greenlightRef: z.ZodNull;
        gatewayCheckRef: z.ZodNull;
        mutationAttemptRef: z.ZodNull;
        proofRef: z.ZodNullable<z.ZodString>;
        refusalRef: z.ZodNullable<z.ZodString>;
        reasonCodes: z.ZodArray<z.ZodString>;
        nextAction: z.ZodEnum<{
            read_evidence: "read_evidence";
            request_review: "request_review";
            recraft_request: "recraft_request";
            stop: "stop";
            reload_metadata: "reload_metadata";
            fix_install: "fix_install";
            wait_for_gateway: "wait_for_gateway";
        }>;
        retryability: z.ZodEnum<{
            not_retryable: "not_retryable";
            retryable_after_recraft: "retryable_after_recraft";
            retryable_after_reload: "retryable_after_reload";
        }>;
        commitState: z.ZodEnum<{
            ambiguous: "ambiguous";
            not_started: "not_started";
            protocol_recorded: "protocol_recorded";
        }>;
        metadataRef: z.ZodNullable<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString>;
        challengeRef: z.ZodNullable<z.ZodString>;
        correlationRef: z.ZodNullable<z.ZodString>;
        idempotencyKey: z.ZodNullable<z.ZodString>;
        outcome: z.ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            replay_refused: "replay_refused";
            refused: "refused";
            install_not_ready: "install_not_ready";
            gateway_offline: "gateway_offline";
            metadata_stale: "metadata_stale";
            tool_execution_error: "tool_execution_error";
            tools_list_changed: "tools_list_changed";
            raw_sibling_bypass_detected: "raw_sibling_bypass_detected";
        }>;
    }, z.core.$strict>], "outcome">>;
    readonly annotations: {
        readonly destructiveHint: false;
        readonly idempotentHint: true;
        readonly openWorldHint: false;
        readonly readOnlyHint: true;
    };
}];
export declare const mcpProposalTools: readonly [{
    readonly name: "handshake.actions.x402_payment.propose";
    readonly description: "Propose one exact x402 protected action. This does not authorize or execute the action.";
    readonly inputSchema: z.core.ZodStandardJSONSchemaPayload<z.ZodObject<{
        requestId: z.ZodString;
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        principalId: z.ZodString;
        agentId: z.ZodString;
        principalIntentRef: z.ZodString;
        generatedCodeOrSpecRef: z.ZodString;
        runtimeAdapterRef: z.ZodString;
        runId: z.ZodString;
        dispatchBoundaryRef: z.ZodString;
        dispatchRef: z.ZodString;
        metadataRef: z.ZodString;
        metadataDigest: z.ZodString;
        toolCatalogRef: z.ZodString;
        toolCatalogDigest: z.ZodString;
        actionCatalogRef: z.ZodString;
        gatewayRegistryRef: z.ZodString;
        gatewayRegistryDigest: z.ZodString;
        operatingEnvelopeId: z.ZodString;
        toolCapabilityId: z.ZodString;
        actionTypeId: z.ZodString;
        gatewayRegistryEntryId: z.ZodString;
        gatewayId: z.ZodString;
        delegatedAuthorityBinding: z.ZodObject<{
            authorityUseName: z.ZodString;
            delegatedAuthorityRefId: z.ZodString;
            delegatedAuthorityRefDigest: z.ZodString;
            requiredGrantStatus: z.ZodDefault<z.ZodLiteral<"active">>;
            authorityKind: z.ZodLiteral<"spend">;
            policyPackRef: z.ZodString;
            policyPackVersion: z.ZodString;
            evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strict>;
        contractExpiresAt: z.ZodString;
        idempotencyKey: z.ZodString;
        endpointUrl: z.ZodString;
        intendedHttpMethod: z.ZodString;
        intendedRequestUrl: z.ZodString;
        intendedRequestBodyPosture: z.ZodEnum<{
            unsupported: "unsupported";
            no_body: "no_body";
            digest_bound: "digest_bound";
            omitted: "omitted";
        }>;
        intendedRequestBodyDigest: z.ZodNullable<z.ZodString>;
        selectedHeadersDigest: z.ZodString;
        providerEnvironmentPosture: z.ZodEnum<{
            unknown: "unknown";
            local_reference_sandbox: "local_reference_sandbox";
            external_sandbox: "external_sandbox";
            live: "live";
        }>;
        providerEnvironmentRef: z.ZodNullable<z.ZodString>;
        payee: z.ZodString;
        payTo: z.ZodString;
        network: z.ZodString;
        token: z.ZodString;
        asset: z.ZodString;
        atomicAmount: z.ZodString;
        x402EvidenceProfile: z.ZodLiteral<"official_payment_required">;
        x402Version: z.ZodNumber;
        x402Scheme: z.ZodLiteral<"exact">;
        maxTimeoutSeconds: z.ZodNumber;
        paymentRequirementsDigest: z.ZodString;
        paymentRequiredEvidenceRef: z.ZodString;
        selectedPaymentRequirementIndex: z.ZodNumber;
        selectedPaymentRequirementDigest: z.ZodString;
        sdkPackageVersions: z.ZodRecord<z.ZodString, z.ZodString>;
        extensionKeys: z.ZodDefault<z.ZodArray<z.ZodString>>;
        facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        requiredPriorActionContractIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        sequenceNumber: z.ZodDefault<z.ZodNumber>;
        loopDetected: z.ZodDefault<z.ZodBoolean>;
        retryDetected: z.ZodDefault<z.ZodBoolean>;
        branchDetected: z.ZodDefault<z.ZodBoolean>;
        correlationRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        serviceWorkflowContextRefs: z.ZodOptional<z.ZodObject<{
            passportPackageDigest: z.ZodString;
            passportPresentationId: z.ZodString;
            admissionId: z.ZodString;
            serviceWorkflowHandleId: z.ZodString;
            serviceWorkflowHandleDigest: z.ZodString;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    readonly outputSchema: z.core.ZodStandardJSONSchemaPayload<z.ZodDiscriminatedUnion<[z.ZodObject<{
        schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
        authorityCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        greenlightRef: z.ZodNull;
        gatewayCheckRef: z.ZodNull;
        mutationAttemptRef: z.ZodNull;
        proofRef: z.ZodNullable<z.ZodString>;
        refusalRef: z.ZodNullable<z.ZodString>;
        reasonCodes: z.ZodArray<z.ZodString>;
        nextAction: z.ZodEnum<{
            read_evidence: "read_evidence";
            request_review: "request_review";
            recraft_request: "recraft_request";
            stop: "stop";
            reload_metadata: "reload_metadata";
            fix_install: "fix_install";
            wait_for_gateway: "wait_for_gateway";
        }>;
        retryability: z.ZodEnum<{
            not_retryable: "not_retryable";
            retryable_after_recraft: "retryable_after_recraft";
            retryable_after_reload: "retryable_after_reload";
        }>;
        commitState: z.ZodEnum<{
            ambiguous: "ambiguous";
            not_started: "not_started";
            protocol_recorded: "protocol_recorded";
        }>;
        metadataRef: z.ZodNullable<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString>;
        challengeRef: z.ZodNullable<z.ZodString>;
        correlationRef: z.ZodNullable<z.ZodString>;
        idempotencyKey: z.ZodNullable<z.ZodString>;
        outcome: z.ZodLiteral<"action_contract_proposed">;
        phase: z.ZodLiteral<"proposal">;
        actionContractId: z.ZodString;
        contractDigest: z.ZodString;
        paramsDigest: z.ZodNullable<z.ZodString>;
        runtimeExecutionId: z.ZodString;
        toolCallDraftId: z.ZodString;
        intentCompilationId: z.ZodString;
        generatedExecutionGraphId: z.ZodNull;
        generatedExecutionGraphPosture: z.ZodLiteral<"not_exposed_by_role_scoped_runtime_surface">;
    }, z.core.$strict>, z.ZodObject<{
        schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
        phase: z.ZodEnum<{
            metadata: "metadata";
            freshness: "freshness";
            bypass: "bypass";
            replay: "replay";
            readiness: "readiness";
            evidence: "evidence";
            proposal: "proposal";
            tool_execution: "tool_execution";
        }>;
        authorityCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        greenlightRef: z.ZodNull;
        gatewayCheckRef: z.ZodNull;
        mutationAttemptRef: z.ZodNull;
        proofRef: z.ZodNullable<z.ZodString>;
        refusalRef: z.ZodNullable<z.ZodString>;
        reasonCodes: z.ZodArray<z.ZodString>;
        nextAction: z.ZodEnum<{
            read_evidence: "read_evidence";
            request_review: "request_review";
            recraft_request: "recraft_request";
            stop: "stop";
            reload_metadata: "reload_metadata";
            fix_install: "fix_install";
            wait_for_gateway: "wait_for_gateway";
        }>;
        retryability: z.ZodEnum<{
            not_retryable: "not_retryable";
            retryable_after_recraft: "retryable_after_recraft";
            retryable_after_reload: "retryable_after_reload";
        }>;
        commitState: z.ZodEnum<{
            ambiguous: "ambiguous";
            not_started: "not_started";
            protocol_recorded: "protocol_recorded";
        }>;
        metadataRef: z.ZodNullable<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString>;
        challengeRef: z.ZodNullable<z.ZodString>;
        correlationRef: z.ZodNullable<z.ZodString>;
        idempotencyKey: z.ZodNullable<z.ZodString>;
        outcome: z.ZodEnum<{
            review_required: "review_required";
            proof_gap: "proof_gap";
            replay_refused: "replay_refused";
            refused: "refused";
            install_not_ready: "install_not_ready";
            gateway_offline: "gateway_offline";
            metadata_stale: "metadata_stale";
            tool_execution_error: "tool_execution_error";
            tools_list_changed: "tools_list_changed";
            raw_sibling_bypass_detected: "raw_sibling_bypass_detected";
        }>;
    }, z.core.$strict>], "outcome">>;
    readonly annotations: {
        readonly destructiveHint: false;
        readonly idempotentHint: false;
        readonly openWorldHint: false;
        readonly readOnlyHint: false;
    };
}];
export declare function mcpCatalogSnapshot(): {
    schemaVersion: "handshake.surface-outcome.v0.1";
    resources: readonly [{
        readonly uriTemplate: "handshake://metadata/actions/{actionClass}";
        readonly purpose: "discover_proposal_shape";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "source_catalog";
    }, {
        readonly uriTemplate: "handshake://challenges/{challengeId}";
        readonly purpose: "explain_refusal_or_recraft_boundary";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "challenge_ref";
    }, {
        readonly uriTemplate: "handshake://evidence/contracts/{actionContractId}";
        readonly purpose: "read_redacted_contract_evidence";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "evidence_client";
    }, {
        readonly uriTemplate: "handshake://evidence/envelopes/{actionContractId}";
        readonly purpose: "read_redacted_agent_transaction_envelope";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "evidence_client";
    }, {
        readonly uriTemplate: "handshake://evidence/receipts/{receiptId}/timeline";
        readonly purpose: "read_gateway_and_downstream_timeline";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "evidence_client";
    }, {
        readonly uriTemplate: "handshake://evidence/idempotency/{actionContractId}";
        readonly purpose: "read_idempotency_and_replay_evidence";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "evidence_client";
    }, {
        readonly uriTemplate: "handshake://health/install/{actionContractId}";
        readonly purpose: "read_protected_path_install_health";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "evidence_client";
    }, {
        readonly uriTemplate: "handshake://health/install/pre-contract/{requestId}";
        readonly purpose: "read_pre_contract_install_health";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "source_catalog";
    }, {
        readonly uriTemplate: "handshake://certificates/{authorityCertificateId}";
        readonly purpose: "read_terminal_certificate_reference";
        readonly readOnly: true;
        readonly authorityCreated: false;
        readonly projectionStatus: "reference_only";
    }];
    tools: ({
        readonly name: "handshake.evidence.delegation.verify";
        readonly description: "Cryptographically verify an A1 delegation signed chain offline. Evidence-only: does not authorize, greenlight, or execute any protected action.";
        readonly inputSchema: z.core.ZodStandardJSONSchemaPayload<z.ZodObject<{
            signedChain: z.ZodUnknown;
            executorPk: z.ZodString;
            intentHash: z.ZodString;
            merkleProof: z.ZodObject<{
                siblings: z.ZodArray<z.ZodObject<{
                    hash: z.ZodString;
                    isLeft: z.ZodBoolean;
                }, z.core.$strict>>;
            }, z.core.$strict>;
            nowUnix: z.ZodOptional<z.ZodNumber>;
            driftToleranceSecs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
        readonly outputSchema: z.core.ZodStandardJSONSchemaPayload<z.ZodDiscriminatedUnion<[z.ZodObject<{
            schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
            authorityCreated: z.ZodLiteral<false>;
            authorityCertificateMinted: z.ZodLiteral<false>;
            credentialMaterialIncluded: z.ZodLiteral<false>;
            gatewayCheckPerformed: z.ZodLiteral<false>;
            greenlightCreated: z.ZodLiteral<false>;
            mutationAttempted: z.ZodLiteral<false>;
            mutationCommandIncluded: z.ZodLiteral<false>;
            rawInternalRecordIncluded: z.ZodLiteral<false>;
            receiptExportCreated: z.ZodLiteral<false>;
            greenlightRef: z.ZodNull;
            gatewayCheckRef: z.ZodNull;
            mutationAttemptRef: z.ZodNull;
            proofRef: z.ZodNullable<z.ZodString>;
            refusalRef: z.ZodNullable<z.ZodString>;
            reasonCodes: z.ZodArray<z.ZodString>;
            nextAction: z.ZodEnum<{
                read_evidence: "read_evidence";
                request_review: "request_review";
                recraft_request: "recraft_request";
                stop: "stop";
                reload_metadata: "reload_metadata";
                fix_install: "fix_install";
                wait_for_gateway: "wait_for_gateway";
            }>;
            retryability: z.ZodEnum<{
                not_retryable: "not_retryable";
                retryable_after_recraft: "retryable_after_recraft";
                retryable_after_reload: "retryable_after_reload";
            }>;
            commitState: z.ZodEnum<{
                ambiguous: "ambiguous";
                not_started: "not_started";
                protocol_recorded: "protocol_recorded";
            }>;
            metadataRef: z.ZodNullable<z.ZodString>;
            evidenceRefs: z.ZodArray<z.ZodString>;
            challengeRef: z.ZodNullable<z.ZodString>;
            correlationRef: z.ZodNullable<z.ZodString>;
            idempotencyKey: z.ZodNullable<z.ZodString>;
            outcome: z.ZodLiteral<"action_contract_proposed">;
            phase: z.ZodLiteral<"proposal">;
            actionContractId: z.ZodString;
            contractDigest: z.ZodString;
            paramsDigest: z.ZodNullable<z.ZodString>;
            runtimeExecutionId: z.ZodString;
            toolCallDraftId: z.ZodString;
            intentCompilationId: z.ZodString;
            generatedExecutionGraphId: z.ZodNull;
            generatedExecutionGraphPosture: z.ZodLiteral<"not_exposed_by_role_scoped_runtime_surface">;
        }, z.core.$strict>, z.ZodObject<{
            schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
            phase: z.ZodEnum<{
                metadata: "metadata";
                freshness: "freshness";
                bypass: "bypass";
                replay: "replay";
                readiness: "readiness";
                evidence: "evidence";
                proposal: "proposal";
                tool_execution: "tool_execution";
            }>;
            authorityCreated: z.ZodLiteral<false>;
            authorityCertificateMinted: z.ZodLiteral<false>;
            credentialMaterialIncluded: z.ZodLiteral<false>;
            gatewayCheckPerformed: z.ZodLiteral<false>;
            greenlightCreated: z.ZodLiteral<false>;
            mutationAttempted: z.ZodLiteral<false>;
            mutationCommandIncluded: z.ZodLiteral<false>;
            rawInternalRecordIncluded: z.ZodLiteral<false>;
            receiptExportCreated: z.ZodLiteral<false>;
            greenlightRef: z.ZodNull;
            gatewayCheckRef: z.ZodNull;
            mutationAttemptRef: z.ZodNull;
            proofRef: z.ZodNullable<z.ZodString>;
            refusalRef: z.ZodNullable<z.ZodString>;
            reasonCodes: z.ZodArray<z.ZodString>;
            nextAction: z.ZodEnum<{
                read_evidence: "read_evidence";
                request_review: "request_review";
                recraft_request: "recraft_request";
                stop: "stop";
                reload_metadata: "reload_metadata";
                fix_install: "fix_install";
                wait_for_gateway: "wait_for_gateway";
            }>;
            retryability: z.ZodEnum<{
                not_retryable: "not_retryable";
                retryable_after_recraft: "retryable_after_recraft";
                retryable_after_reload: "retryable_after_reload";
            }>;
            commitState: z.ZodEnum<{
                ambiguous: "ambiguous";
                not_started: "not_started";
                protocol_recorded: "protocol_recorded";
            }>;
            metadataRef: z.ZodNullable<z.ZodString>;
            evidenceRefs: z.ZodArray<z.ZodString>;
            challengeRef: z.ZodNullable<z.ZodString>;
            correlationRef: z.ZodNullable<z.ZodString>;
            idempotencyKey: z.ZodNullable<z.ZodString>;
            outcome: z.ZodEnum<{
                review_required: "review_required";
                proof_gap: "proof_gap";
                replay_refused: "replay_refused";
                refused: "refused";
                install_not_ready: "install_not_ready";
                gateway_offline: "gateway_offline";
                metadata_stale: "metadata_stale";
                tool_execution_error: "tool_execution_error";
                tools_list_changed: "tools_list_changed";
                raw_sibling_bypass_detected: "raw_sibling_bypass_detected";
            }>;
        }, z.core.$strict>], "outcome">>;
        readonly annotations: {
            readonly destructiveHint: false;
            readonly idempotentHint: true;
            readonly openWorldHint: false;
            readonly readOnlyHint: true;
        };
    } | {
        readonly name: "handshake.actions.x402_payment.propose";
        readonly description: "Propose one exact x402 protected action. This does not authorize or execute the action.";
        readonly inputSchema: z.core.ZodStandardJSONSchemaPayload<z.ZodObject<{
            requestId: z.ZodString;
            tenantId: z.ZodString;
            organizationId: z.ZodString;
            principalId: z.ZodString;
            agentId: z.ZodString;
            principalIntentRef: z.ZodString;
            generatedCodeOrSpecRef: z.ZodString;
            runtimeAdapterRef: z.ZodString;
            runId: z.ZodString;
            dispatchBoundaryRef: z.ZodString;
            dispatchRef: z.ZodString;
            metadataRef: z.ZodString;
            metadataDigest: z.ZodString;
            toolCatalogRef: z.ZodString;
            toolCatalogDigest: z.ZodString;
            actionCatalogRef: z.ZodString;
            gatewayRegistryRef: z.ZodString;
            gatewayRegistryDigest: z.ZodString;
            operatingEnvelopeId: z.ZodString;
            toolCapabilityId: z.ZodString;
            actionTypeId: z.ZodString;
            gatewayRegistryEntryId: z.ZodString;
            gatewayId: z.ZodString;
            delegatedAuthorityBinding: z.ZodObject<{
                authorityUseName: z.ZodString;
                delegatedAuthorityRefId: z.ZodString;
                delegatedAuthorityRefDigest: z.ZodString;
                requiredGrantStatus: z.ZodDefault<z.ZodLiteral<"active">>;
                authorityKind: z.ZodLiteral<"spend">;
                policyPackRef: z.ZodString;
                policyPackVersion: z.ZodString;
                evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
            }, z.core.$strict>;
            contractExpiresAt: z.ZodString;
            idempotencyKey: z.ZodString;
            endpointUrl: z.ZodString;
            intendedHttpMethod: z.ZodString;
            intendedRequestUrl: z.ZodString;
            intendedRequestBodyPosture: z.ZodEnum<{
                unsupported: "unsupported";
                no_body: "no_body";
                digest_bound: "digest_bound";
                omitted: "omitted";
            }>;
            intendedRequestBodyDigest: z.ZodNullable<z.ZodString>;
            selectedHeadersDigest: z.ZodString;
            providerEnvironmentPosture: z.ZodEnum<{
                unknown: "unknown";
                local_reference_sandbox: "local_reference_sandbox";
                external_sandbox: "external_sandbox";
                live: "live";
            }>;
            providerEnvironmentRef: z.ZodNullable<z.ZodString>;
            payee: z.ZodString;
            payTo: z.ZodString;
            network: z.ZodString;
            token: z.ZodString;
            asset: z.ZodString;
            atomicAmount: z.ZodString;
            x402EvidenceProfile: z.ZodLiteral<"official_payment_required">;
            x402Version: z.ZodNumber;
            x402Scheme: z.ZodLiteral<"exact">;
            maxTimeoutSeconds: z.ZodNumber;
            paymentRequirementsDigest: z.ZodString;
            paymentRequiredEvidenceRef: z.ZodString;
            selectedPaymentRequirementIndex: z.ZodNumber;
            selectedPaymentRequirementDigest: z.ZodString;
            sdkPackageVersions: z.ZodRecord<z.ZodString, z.ZodString>;
            extensionKeys: z.ZodDefault<z.ZodArray<z.ZodString>>;
            facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            requiredPriorActionContractIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
            sequenceNumber: z.ZodDefault<z.ZodNumber>;
            loopDetected: z.ZodDefault<z.ZodBoolean>;
            retryDetected: z.ZodDefault<z.ZodBoolean>;
            branchDetected: z.ZodDefault<z.ZodBoolean>;
            correlationRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            serviceWorkflowContextRefs: z.ZodOptional<z.ZodObject<{
                passportPackageDigest: z.ZodString;
                passportPresentationId: z.ZodString;
                admissionId: z.ZodString;
                serviceWorkflowHandleId: z.ZodString;
                serviceWorkflowHandleDigest: z.ZodString;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        readonly outputSchema: z.core.ZodStandardJSONSchemaPayload<z.ZodDiscriminatedUnion<[z.ZodObject<{
            schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
            authorityCreated: z.ZodLiteral<false>;
            authorityCertificateMinted: z.ZodLiteral<false>;
            credentialMaterialIncluded: z.ZodLiteral<false>;
            gatewayCheckPerformed: z.ZodLiteral<false>;
            greenlightCreated: z.ZodLiteral<false>;
            mutationAttempted: z.ZodLiteral<false>;
            mutationCommandIncluded: z.ZodLiteral<false>;
            rawInternalRecordIncluded: z.ZodLiteral<false>;
            receiptExportCreated: z.ZodLiteral<false>;
            greenlightRef: z.ZodNull;
            gatewayCheckRef: z.ZodNull;
            mutationAttemptRef: z.ZodNull;
            proofRef: z.ZodNullable<z.ZodString>;
            refusalRef: z.ZodNullable<z.ZodString>;
            reasonCodes: z.ZodArray<z.ZodString>;
            nextAction: z.ZodEnum<{
                read_evidence: "read_evidence";
                request_review: "request_review";
                recraft_request: "recraft_request";
                stop: "stop";
                reload_metadata: "reload_metadata";
                fix_install: "fix_install";
                wait_for_gateway: "wait_for_gateway";
            }>;
            retryability: z.ZodEnum<{
                not_retryable: "not_retryable";
                retryable_after_recraft: "retryable_after_recraft";
                retryable_after_reload: "retryable_after_reload";
            }>;
            commitState: z.ZodEnum<{
                ambiguous: "ambiguous";
                not_started: "not_started";
                protocol_recorded: "protocol_recorded";
            }>;
            metadataRef: z.ZodNullable<z.ZodString>;
            evidenceRefs: z.ZodArray<z.ZodString>;
            challengeRef: z.ZodNullable<z.ZodString>;
            correlationRef: z.ZodNullable<z.ZodString>;
            idempotencyKey: z.ZodNullable<z.ZodString>;
            outcome: z.ZodLiteral<"action_contract_proposed">;
            phase: z.ZodLiteral<"proposal">;
            actionContractId: z.ZodString;
            contractDigest: z.ZodString;
            paramsDigest: z.ZodNullable<z.ZodString>;
            runtimeExecutionId: z.ZodString;
            toolCallDraftId: z.ZodString;
            intentCompilationId: z.ZodString;
            generatedExecutionGraphId: z.ZodNull;
            generatedExecutionGraphPosture: z.ZodLiteral<"not_exposed_by_role_scoped_runtime_surface">;
        }, z.core.$strict>, z.ZodObject<{
            schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
            phase: z.ZodEnum<{
                metadata: "metadata";
                freshness: "freshness";
                bypass: "bypass";
                replay: "replay";
                readiness: "readiness";
                evidence: "evidence";
                proposal: "proposal";
                tool_execution: "tool_execution";
            }>;
            authorityCreated: z.ZodLiteral<false>;
            authorityCertificateMinted: z.ZodLiteral<false>;
            credentialMaterialIncluded: z.ZodLiteral<false>;
            gatewayCheckPerformed: z.ZodLiteral<false>;
            greenlightCreated: z.ZodLiteral<false>;
            mutationAttempted: z.ZodLiteral<false>;
            mutationCommandIncluded: z.ZodLiteral<false>;
            rawInternalRecordIncluded: z.ZodLiteral<false>;
            receiptExportCreated: z.ZodLiteral<false>;
            greenlightRef: z.ZodNull;
            gatewayCheckRef: z.ZodNull;
            mutationAttemptRef: z.ZodNull;
            proofRef: z.ZodNullable<z.ZodString>;
            refusalRef: z.ZodNullable<z.ZodString>;
            reasonCodes: z.ZodArray<z.ZodString>;
            nextAction: z.ZodEnum<{
                read_evidence: "read_evidence";
                request_review: "request_review";
                recraft_request: "recraft_request";
                stop: "stop";
                reload_metadata: "reload_metadata";
                fix_install: "fix_install";
                wait_for_gateway: "wait_for_gateway";
            }>;
            retryability: z.ZodEnum<{
                not_retryable: "not_retryable";
                retryable_after_recraft: "retryable_after_recraft";
                retryable_after_reload: "retryable_after_reload";
            }>;
            commitState: z.ZodEnum<{
                ambiguous: "ambiguous";
                not_started: "not_started";
                protocol_recorded: "protocol_recorded";
            }>;
            metadataRef: z.ZodNullable<z.ZodString>;
            evidenceRefs: z.ZodArray<z.ZodString>;
            challengeRef: z.ZodNullable<z.ZodString>;
            correlationRef: z.ZodNullable<z.ZodString>;
            idempotencyKey: z.ZodNullable<z.ZodString>;
            outcome: z.ZodEnum<{
                review_required: "review_required";
                proof_gap: "proof_gap";
                replay_refused: "replay_refused";
                refused: "refused";
                install_not_ready: "install_not_ready";
                gateway_offline: "gateway_offline";
                metadata_stale: "metadata_stale";
                tool_execution_error: "tool_execution_error";
                tools_list_changed: "tools_list_changed";
                raw_sibling_bypass_detected: "raw_sibling_bypass_detected";
            }>;
        }, z.core.$strict>], "outcome">>;
        readonly annotations: {
            readonly destructiveHint: false;
            readonly idempotentHint: false;
            readonly openWorldHint: false;
            readonly readOnlyHint: false;
        };
    })[];
    serviceWorkflowBoundary: {
        readonly acceptsWorkflowHandleContext: true;
        readonly workflowHandleCreatesAuthority: false;
        readonly freshActionContractRequired: true;
        readonly admissionCreatesPolicyDecision: false;
        readonly admissionCreatesGreenlight: false;
        readonly admissionPerformsGatewayCheck: false;
        readonly handlePermitsMutation: false;
        readonly handleExportsReceipt: false;
    };
    supportsParallelToolCalls: boolean;
    authorityCreated: boolean;
    gatewayCheckPerformed: boolean;
    greenlightCreated: boolean;
    mutationAttempted: boolean;
    credentialMaterialIncluded: boolean;
    mutationCommandIncluded: boolean;
    rawInternalRecordIncluded: boolean;
    receiptExportCreated: boolean;
    authorityCertificateMinted: boolean;
};
