export declare function supportBundleCommand(value: unknown): import("./output").CliOutputEnvelope<{
    operatorNotes: string[];
    rawMaterialOmitted: readonly ["payment_payload_material", "payment_payloads", "payment_signature_header", "payment_signatures", "signer_refs", "key_material", "private_keys", "account_secret_material", "role_token_values", "transition_token_values", "reusable_authority_tokens", "internal_record_dumps", "gateway_check_inputs", "request_body_dumps", "raw_request_bodies", "gateway_credential_material", "mutation_commands", "receipt_exports"];
    receiptExportCreated: boolean;
    rawInternalRecordIncluded: boolean;
    credentialMaterialIncluded: boolean;
    recoveryGuidance?: {
        guidanceId: string;
        guidanceRef: string;
        sourceKind: "protocol_recovery_projection" | "pre_contract_surface_guidance";
        protectedSurfaceKind: string;
        outcome: "read_evidence" | "stop" | "draft_available" | "reload_required" | "recraft_required" | "abandon_required";
        abandonQuality: "good_abandon" | "avoidable_abandon" | "ambiguous_abandon" | "stale_abandon" | "operator_abandon" | null;
        unsafeSalvageAttemptPrevented: boolean;
        sourceRefs: string[];
        terminalEvidenceRefs: string[];
        reasonCodes: string[];
        topFindings: {
            category: "idempotency_or_replay_conflict" | "proof_gap_only_evidence" | "raw_sibling_bypass_detected" | "raw_sibling_posture_named_not_controlled" | "x402_credential_custody_unsafe" | "x402_gateway_posture_unknown" | "x402_provider_environment_untrusted" | "x402_metadata_stale" | "x402_policy_or_readiness_stale" | "x402_install_not_ready" | "x402_gateway_offline" | "x402_amount_over_bound" | "x402_request_body_unsupported" | "x402_custody_proof_unverified" | "x402_selected_requirement_mismatch" | "runtime_dynamic_tool_construction" | "runtime_late_bound_parameters" | "runtime_graph_coverage_gap" | "isolation_or_quarantine_active" | "draft_stale_or_intent_changed" | "draft_superseded_by_stricter_draft" | "draft_guidance_stale" | "surface_next_action_projection" | "protocol_recovery_recommendation_present";
            guidanceOutcome: "read_evidence" | "stop" | "draft_available" | "reload_required" | "recraft_required" | "abandon_required";
            draftEligible: boolean;
            reasonCodes: string[];
            affectedFields: string[];
        }[];
        agentHandoff: {
            outcome: "read_evidence" | "stop" | "draft_available" | "reload_required" | "recraft_required" | "abandon_required";
            allowedNextMechanism: "read_evidence" | "recraft_request" | "submit_fresh_proposal" | "reload_evidence" | "abandon_current_material" | "stop_and_escalate";
            requiredRefs: string[];
            missingInputs: string[];
            stopReasons: string[];
            nonClaims: string[];
        };
        candidateDraft: {
            draftId: string;
            draftDigest: string;
            digestInputsToPreserve: string[];
            missingInputs: string[];
            requiredFreshProposalPath: string;
            supersedesDraftRefs: string[];
            recoveryRecommendationId: string | null;
            redactionProfile: string;
        } | null;
        redactionProfileRef: string;
        rawMaterialOmitted: readonly ["payment_payload_material", "payment_signature_header", "signer_refs", "key_material", "private_keys", "role_token_values", "transition_token_values", "gateway_check_inputs", "raw_request_bodies", "gateway_credential_material", "mutation_commands", "receipt_exports"];
        authorityCreated: boolean;
        greenlightCreated: boolean;
        gatewayCheckPerformed: boolean;
        mutationAttempted: boolean;
        credentialMaterialIncluded: boolean;
        mutationCommandIncluded: boolean;
        rawInternalRecordIncluded: boolean;
        receiptExportCreated: boolean;
        authorityCertificateMinted: boolean;
    };
    schemaVersion: "handshake.cli.support-bundle.v1";
    supportCaseRef: string | null;
    bundleKind: string;
    sourceAuthority: string;
    actionContractRefs: string[];
    includedItems: {
        recoveryGuidance?: {
            present: boolean;
            sourceAuthority: string;
        };
        contractView: {
            present: boolean;
            redactionProfileRef: string;
            expectedRedactionProfileRef: string;
            omittedFields: readonly string[];
        } | {
            present: boolean;
            redactionProfileRef: null;
            expectedRedactionProfileRef: string;
            omittedFields: never[];
        };
        agentTransactionEnvelope: {
            present: boolean;
            redactionProfileRef: string;
            expectedRedactionProfileRef: string;
            omittedFields: readonly string[];
        } | {
            present: boolean;
            redactionProfileRef: null;
            expectedRedactionProfileRef: string;
            omittedFields: never[];
        };
        receiptTimeline: {
            present: boolean;
            redactionProfileRef: string;
            expectedRedactionProfileRef: string;
            omittedFields: readonly string[];
        } | {
            present: boolean;
            redactionProfileRef: null;
            expectedRedactionProfileRef: string;
            omittedFields: never[];
        };
        installHealth: {
            present: boolean;
            redactionProfileRef: string;
            expectedRedactionProfileRef: string;
            omittedFields: readonly string[];
        } | {
            present: boolean;
            redactionProfileRef: null;
            expectedRedactionProfileRef: string;
            omittedFields: never[];
        };
        localX402Install: {
            present: boolean;
            sourceAuthority: string;
        };
        localX402ProbeReport: {
            present: boolean;
            sourceAuthority: string;
        };
    };
    terminalPosture: {
        policyDecisionStatus: "review_required" | "proof_gap" | "refuse" | "quarantine" | "greenlight" | "halt";
        gatewayCheckStatus: "proof_gap" | "refused" | "passed" | null;
        gatewayAdmissionStatus: "proof_gap" | "refused" | "replayed" | "not_requested" | "admitted";
        mutationAttemptStatus: "unknown" | "failed" | "not_attempted" | "submitted" | "succeeded" | "downstream_refused";
        downstreamOutcomeStatus: "unknown" | "refused" | "failed" | "succeeded" | "pending" | "not_started";
        finalityStatus: "unknown" | "pending" | "final" | "suspect";
        proofGapRefs: string[];
    } | null;
    readbackStages: {
        generatedExecutionRefs: string[];
        contractRef: string | null;
        policyDecisionRef: string | null;
        greenlightRef: string | null;
        gatewayCheckRef: string | null;
        credentialResolutionEvidenceRefs: string[];
        signerInvocationEvidenceRefs: string[];
        downstreamEvidenceRefs: string[];
        replayRefusalRefs: string[];
        refusalRefs: string[];
        isolationRefs: string[];
        proofGapRefs: string[];
    };
    localReadiness: {
        installReadinessAuthority: "local_compilation" | null;
        trustedInstallReadiness: false | null;
        probeReadinessAuthority: "local_classification" | null;
        trustedProbeReadiness: false | null;
        nextReadinessAction: "register_control_plane_install" | null;
    };
    reasonCodes: string[];
    reasonCodeRunbook: {
        reasonCode: string;
        nextMechanism: SupportRunbookAction;
    }[];
}>;
type SupportRunbookAction = "reload" | "recraft" | "wait" | "stop" | "isolate" | "read_evidence" | "create_new_contract";
export {};
