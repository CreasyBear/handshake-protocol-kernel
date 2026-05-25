export type { TransitionGuardResult } from "../foundation/transition-guards";
export { guardActionProposal } from "../areas/action-contract";
export { guardCatalogRegistration } from "../areas/catalog-envelope";
export { guardGatewayCheckAuthority } from "../areas/gateway-gate";
export { guardSurfaceOperationReconciliation } from "../areas/operation-lifecycle";
export { guardGreenlightIssuance, guardPolicyEvaluation } from "../areas/policy-greenlight";
export { guardReviewDecision } from "../areas/review-binding";
export declare const PROTOCOL_TRANSITIONS: {
    readonly registerProtocolConfiguration: {
        readonly from: "external_configuration";
        readonly to: "durable_catalog_or_envelope";
        readonly guard: "Only tool capabilities, action types, gateway registry entries, and operating envelopes may be inserted directly.";
    };
    readonly compileIntent: {
        readonly from: "principal_intent_plus_catalog_refs";
        readonly to: "intent_compilation_recorded";
        readonly guard: "Compilation records uncertainty instead of minting authority.";
    };
    readonly createRuntimeExecution: {
        readonly from: "generated_runtime_execution_block";
        readonly to: "runtime_execution_recorded";
        readonly guard: "Runtime evidence records orchestration shape only; it cannot mint policy, greenlight, gate, or mutation authority.";
    };
    readonly createBypassProbe: {
        readonly from: "protected_path_probe";
        readonly to: "bypass_probe_recorded";
        readonly guard: "Bypass probes record probe outcomes only; they cannot satisfy posture unless a later posture binds them.";
    };
    readonly createToolCallDraft: {
        readonly from: "generated_tool_input";
        readonly to: "tool_call_draft_recorded";
        readonly guard: "Tool-call drafts record generated input state only; finalized binding is checked later by compilation.";
    };
    readonly createProtectedPathPosture: {
        readonly from: "runtime_gateway_surface_probe";
        readonly to: "protected_path_posture_recorded";
        readonly guard: "Protected path posture must be append-only and atomically update the current posture pointer.";
    };
    readonly proposeActionContract: {
        readonly from: "clean_intent_compilation";
        readonly to: "action_proposed";
        readonly guard: "Compilation, envelope, gateway, principal, agent, run, tenant, and organization bindings must match.";
    };
    readonly evaluatePolicy: {
        readonly from: "action_proposed";
        readonly to: "policy_decision_recorded";
        readonly guard: "Policy may evaluate only the envelope pinned by the exact action contract.";
    };
    readonly issueGreenlight: {
        readonly from: "policy_decision_recorded";
        readonly to: "action_greenlit";
        readonly guard: "Only one greenlight may ever be issued for one action contract.";
    };
    readonly createReviewDecision: {
        readonly from: "review_required";
        readonly to: "review_decision_recorded";
        readonly guard: "Review may bind only through a review artifact whose digests match the exact contract, policy input, gateway policy, and uncertainty rendering.";
    };
    readonly createReviewArtifact: {
        readonly from: "review_required";
        readonly to: "review_artifact_recorded";
        readonly guard: "Rendered review artifacts must bind to the exact contract digest and policy input digest.";
    };
    readonly createBreakerDecision: {
        readonly from: "observed_contract_stream_window";
        readonly to: "breaker_decision_recorded_and_isolation_changed";
        readonly guard: "Breaker decisions must atomically record observed stream watermarks and the resulting isolation state.";
    };
    readonly gatewayCheck: {
        readonly from: "action_greenlit";
        readonly to: "gateway_checked";
        readonly guard: "A gateway check may proceed only from a greenlight policy decision; binding mismatches become gateway refusals before mutation.";
    };
    readonly reconcileSurfaceOperation: {
        readonly from: "mutation_attempted_pending_or_unknown";
        readonly to: "surface_operation_reconciled";
        readonly guard: "Reconciliation may inspect only the same mutation attempt and idempotency key; it cannot create another mutation attempt.";
    };
    readonly exportReceipt: {
        readonly from: "receipt_emitted";
        readonly to: "receipt_exported";
        readonly guard: "Receipt export may package existing evidence only; it cannot create execution proof or mutate gateway state.";
    };
    readonly recommendRecovery: {
        readonly from: "receipt_refusal_or_proof_gap";
        readonly to: "recovery_recommended";
        readonly guard: "Recovery may recommend a narrower future contract or review path only; it cannot reuse a greenlight or mutate gateway state.";
    };
    readonly linkRecoveryToActionContract: {
        readonly from: "recovery_recommended";
        readonly to: "action_proposed";
        readonly guard: "A recovery-linked action contract must validate recommendation scope, freshness, action class, new evidence, and later sequence number; it inherits no greenlight.";
    };
    readonly transitionRecoveryRecommendationStatus: {
        readonly from: "recovery_recommended_open";
        readonly to: "recovery_status_changed";
        readonly guard: "Recovery recommendation status may move from open to expired or superseded only with a durable status transition record.";
    };
};
