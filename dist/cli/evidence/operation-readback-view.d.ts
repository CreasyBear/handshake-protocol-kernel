import type { OperationReadbackProjection } from "../../protocol/evidence-projections/schemas";
/** D-57: compilation stages are readback-only — never authority-bearing labels. */
export declare const OPERATION_READBACK_STAGE_ORDER: readonly ["intent_compilation", "candidate_action", "action_contract", "policy_decision", "greenlight", "gateway_check", "mutation_attempt", "receipt", "recovery", "isolation"];
export declare function evidenceOperationReadbackCliView(projection: OperationReadbackProjection): {
    schemaVersion: "handshake.cli.operation-readback-view.v1";
    viewBoundary: "redacted_cli_projection_view";
    title: string;
    status: "policy_refused" | "policy_proof_gap" | "review_required" | "gateway_admitted" | "gateway_proof_gap" | "replay_refused" | "isolated" | "downstream_refused" | "gateway_refused" | "halted" | "quarantined" | "greenlight_available" | "downstream_pending" | "downstream_succeeded" | "downstream_failed" | "downstream_unknown" | "recovery_required";
    stage: "isolation" | "recovery" | "receipt" | "greenlight" | "intent_compilation" | "candidate_action" | "action_contract" | "policy_decision" | "gateway_check" | "mutation_attempt";
    nextMechanism: "read_evidence" | "use_greenlight_at_gateway" | "request_review" | "recraft_request" | "create_new_contract" | "recover_terminal_unknown" | "stop" | "wait_for_downstream";
    stageOrder: readonly ["intent_compilation", "candidate_action", "action_contract", "policy_decision", "greenlight", "gateway_check", "mutation_attempt", "receipt", "recovery", "isolation"];
    correlationSummary: {
        policyDecisionRef: string;
        greenlightRef: string | null;
        gateAttemptRef: string | null;
        receiptRef: string | null;
    };
    nonClaims: string[];
};
