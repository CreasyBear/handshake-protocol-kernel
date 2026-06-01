import type { OperationReadbackProjection } from "../../protocol/evidence-projections/schemas";
/** D-57: compilation stages are readback-only — never authority-bearing labels. */
export declare const OPERATION_READBACK_STAGE_ORDER: readonly ["intent_compilation", "candidate_action", "action_contract", "policy_decision", "greenlight", "gateway_check", "mutation_attempt", "receipt", "recovery", "isolation"];
export declare function evidenceOperationReadbackCliView(projection: OperationReadbackProjection): {
    schemaVersion: "handshake.cli.operation-readback-view.v1";
    viewBoundary: "redacted_cli_projection_view";
    title: string;
    status: "policy_refused" | "policy_proof_gap" | "review_required" | "gateway_admitted" | "gateway_proof_gap" | "replay_refused" | "isolated" | "quarantined" | "downstream_refused" | "gateway_refused" | "halted" | "greenlight_available" | "downstream_pending" | "downstream_succeeded" | "downstream_failed" | "downstream_unknown" | "recovery_required";
    stage: "isolation" | "recovery" | "receipt" | "greenlight" | "intent_compilation" | "action_contract" | "policy_decision" | "mutation_attempt" | "candidate_action" | "gateway_check";
    nextMechanism: "use_greenlight_at_gateway" | "read_evidence" | "request_review" | "recraft_request" | "create_new_contract" | "recover_terminal_unknown" | "stop" | "wait_for_downstream";
    stageOrder: readonly ["intent_compilation", "candidate_action", "action_contract", "policy_decision", "greenlight", "gateway_check", "mutation_attempt", "receipt", "recovery", "isolation"];
    correlationSummary: {
        policyDecisionRef: string;
        greenlightRef: string | null;
        gateAttemptRef: string | null;
        receiptRef: string | null;
    };
    nonClaims: string[];
};
