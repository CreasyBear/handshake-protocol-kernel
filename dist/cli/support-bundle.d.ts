export declare function supportBundleCommand(value: unknown): import("./output").CliOutputEnvelope<{
    schemaVersion: "handshake.cli.support-bundle.v1";
    supportCaseRef: string | null;
    bundleKind: string;
    sourceAuthority: string;
    actionContractRefs: string[];
    includedItems: {
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
        policyDecisionStatus: "review_required" | "proof_gap" | "greenlight" | "refuse" | "halt" | "quarantine";
        gatewayCheckStatus: "proof_gap" | "passed" | "refused" | null;
        gatewayAdmissionStatus: "proof_gap" | "refused" | "not_requested" | "admitted" | "replayed";
        mutationAttemptStatus: "unknown" | "failed" | "not_attempted" | "submitted" | "succeeded" | "downstream_refused";
        downstreamOutcomeStatus: "unknown" | "failed" | "refused" | "succeeded" | "pending" | "not_started";
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
    operatorNotes: string[];
    rawMaterialOmitted: readonly ["payment_payload_material", "payment_payloads", "payment_signature_header", "payment_signatures", "signer_refs", "key_material", "private_keys", "account_secret_material", "role_token_values", "transition_token_values", "reusable_authority_tokens", "internal_record_dumps", "gateway_check_inputs", "request_body_dumps", "raw_request_bodies", "gateway_credential_material", "mutation_commands", "receipt_exports"];
    receiptExportCreated: boolean;
    rawInternalRecordIncluded: boolean;
    credentialMaterialIncluded: boolean;
}>;
type SupportRunbookAction = "reload" | "recraft" | "wait" | "stop" | "isolate" | "read_evidence" | "create_new_contract";
export {};
