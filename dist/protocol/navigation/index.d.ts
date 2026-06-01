import type { ContractStreamEvent } from "../events/schemas";
import type { ProtocolObjectType } from "../areas/object-registry/schemas";
export type KernelTransitionMethod = "putCatalogObject" | "registerInstallProposalCompiledRecords" | "compileIntent" | "commitIngressRefusal" | "createRuntimeExecution" | "createGeneratedExecutionGraph" | "registerGatewayCredentialRef" | "registerDelegatedAuthorityRef" | "transitionDelegatedAuthorityStatus" | "recordGatewayCustodyProofPacket" | "recordCredentialResolutionEvidence" | "createBypassProbe" | "createToolCallDraft" | "transitionToolCallDraft" | "createProtectedPathPosture" | "proposeActionContract" | "recordNegotiationSession" | "recordNegotiationOffer" | "recordNegotiationDecision" | "recordLinkedAgreement" | "recordAgreementObligationBinding" | "transitionAgreementStatus" | "createAuthorityCertificate" | "evaluatePolicy" | "createReviewArtifact" | "createReviewDecision" | "gatewayCheck" | "issueAgenticEndpointAccessLease" | "recordAgenticEndpointAccessUsageEvent" | "reconcileSurfaceOperation" | "createIsolationState" | "createBreakerDecision" | "createReceiptExport" | "createRecoveryRecommendation" | "transitionRecoveryRecommendationStatus" | "resolveRecoveryTerminalConflictProofGap";
export type ProtocolTransitionId = "registerToolCapability" | "registerActionType" | "registerGatewayRegistryEntry" | "registerOperatingEnvelope" | "registerInstallProposalCompiledRecords" | "compileIntent" | "commitIngressRefusal" | "createRuntimeExecution" | "createGeneratedExecutionGraph" | "registerGatewayCredentialRef" | "registerDelegatedAuthorityRef" | "transitionDelegatedAuthorityStatus" | "recordGatewayCustodyProofPacket" | "recordCredentialResolutionEvidence" | "createBypassProbe" | "createToolCallDraft" | "transitionToolCallDraft" | "createProtectedPathPosture" | "proposeActionContract" | "recordNegotiationSession" | "recordNegotiationOffer" | "recordNegotiationDecision" | "recordLinkedAgreement" | "recordAgreementObligationBinding" | "transitionAgreementStatus" | "createAuthorityCertificate" | "evaluatePolicy" | "createReviewArtifact" | "createReviewDecision" | "gatewayCheck" | "issueAgenticEndpointAccessLease" | "recordAgenticEndpointAccessUsageEvent" | "reconcileSurfaceOperation" | "createIsolationState" | "createBreakerDecision" | "createReceiptExport" | "createRecoveryRecommendation" | "transitionRecoveryRecommendationStatus" | "resolveRecoveryTerminalConflictProofGap";
export type ProtocolTransitionPhase = "catalog" | "install_setup" | "intent_compilation" | "runtime_evidence" | "generated_execution_graph" | "credential_custody" | "delegated_authority" | "protected_path_posture" | "action_contract" | "negotiation" | "authority_certificate" | "policy" | "review" | "gateway" | "agentic_endpoint_access" | "operation_lifecycle" | "isolation" | "receipt_export" | "recovery";
export type TransitionOutcomeClass = "recorded" | "idempotent" | "greenlight" | "refusal" | "review_required" | "proof_gap" | "replay_refusal" | "conflict" | "recovery" | "exhausted" | "exported";
export type ProtocolNavigationEntry = {
    transitionId: ProtocolTransitionId;
    kernelMethod: KernelTransitionMethod;
    phase: ProtocolTransitionPhase;
    outcomeClasses: readonly TransitionOutcomeClass[];
    recordsWritten: readonly ProtocolObjectType[];
    eventsEmitted: readonly ContractStreamEvent["eventType"][];
    authorityBoundary: string;
    evidenceObligation: string;
    integratorParity?: boolean;
};
export declare const integratorParityTransitionIds: readonly ["registerToolCapability", "registerActionType", "registerGatewayRegistryEntry", "registerOperatingEnvelope", "registerInstallProposalCompiledRecords", "registerDelegatedAuthorityRef", "compileIntent", "proposeActionContract", "evaluatePolicy", "gatewayCheck", "reconcileSurfaceOperation"];
export declare const protocolNavigation: readonly [ProtocolNavigationEntry, ProtocolNavigationEntry, ProtocolNavigationEntry, ProtocolNavigationEntry, {
    readonly integratorParity: true;
    readonly transitionId: "registerInstallProposalCompiledRecords";
    readonly kernelMethod: "registerInstallProposalCompiledRecords";
    readonly phase: "install_setup";
    readonly outcomeClasses: readonly ["recorded", "refusal", "conflict"];
    readonly recordsWritten: readonly ["tool_capability", "action_type", "gateway_registry_entry", "operating_envelope", "refusal", "contract_stream_event"];
    readonly eventsEmitted: readonly ["install_setup_recorded", "install_setup_refused"];
    readonly authorityBoundary: "install setup evidence only";
    readonly evidenceObligation: "atomically register compiled setup records or refusal without issuing policy, greenlight, gate, credential, mutation, receipt, or certificate authority";
}, {
    readonly integratorParity: true;
    readonly transitionId: "compileIntent";
    readonly kernelMethod: "compileIntent";
    readonly phase: "intent_compilation";
    readonly outcomeClasses: readonly ["recorded", "refusal"];
    readonly recordsWritten: readonly ["intent_compilation", "contract_stream_event"];
    readonly eventsEmitted: readonly ["intent_compiled"];
    readonly authorityBoundary: "candidate evidence only";
    readonly evidenceObligation: "record uncertainty or compiler refusal before any ActionContract exists";
}, {
    readonly transitionId: "commitIngressRefusal";
    readonly kernelMethod: "commitIngressRefusal";
    readonly phase: "intent_compilation";
    readonly outcomeClasses: readonly ["refusal"];
    readonly recordsWritten: readonly ["refusal", "contract_stream_event"];
    readonly eventsEmitted: readonly ["action_refused"];
    readonly authorityBoundary: "ingress wire refusal evidence only";
    readonly evidenceObligation: "record structured runtime ingress wire refusal without policy, greenlight, gate, mutation, receipt, or certificate authority";
}, {
    readonly transitionId: "createGeneratedExecutionGraph";
    readonly kernelMethod: "createGeneratedExecutionGraph";
    readonly phase: "generated_execution_graph";
    readonly outcomeClasses: readonly ["recorded", "refusal"];
    readonly recordsWritten: readonly ["generated_execution_graph", "contract_stream_event"];
    readonly eventsEmitted: readonly ["generated_execution_graph_recorded"];
    readonly authorityBoundary: "generated graph evidence only";
    readonly evidenceObligation: "record block coverage, redaction posture, terminal reasons, and graph issuer custody";
}, {
    readonly transitionId: "createRuntimeExecution";
    readonly kernelMethod: "createRuntimeExecution";
    readonly phase: "runtime_evidence";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["runtime_execution", "contract_stream_event"];
    readonly eventsEmitted: readonly ["runtime_execution_recorded"];
    readonly authorityBoundary: "runtime evidence only";
    readonly evidenceObligation: "record execution-block shape without issuing policy, greenlight, gate, or mutation authority";
}, {
    readonly transitionId: "registerGatewayCredentialRef";
    readonly kernelMethod: "registerGatewayCredentialRef";
    readonly phase: "credential_custody";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["gateway_credential_ref", "contract_stream_event"];
    readonly eventsEmitted: readonly ["gateway_credential_ref_registered"];
    readonly authorityBoundary: "gateway credential custody evidence only";
    readonly evidenceObligation: "record opaque gateway credential ref without exposing secret material or minting authority";
}, {
    readonly integratorParity: true;
    readonly transitionId: "registerDelegatedAuthorityRef";
    readonly kernelMethod: "registerDelegatedAuthorityRef";
    readonly phase: "delegated_authority";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["delegated_authority_ref", "contract_stream_event"];
    readonly eventsEmitted: readonly ["delegated_authority_ref_registered"];
    readonly authorityBoundary: "delegated authority evidence only";
    readonly evidenceObligation: "record principal-scoped attempt authority bounds without issuing policy, greenlight, gate, or mutation authority";
}, {
    readonly transitionId: "transitionDelegatedAuthorityStatus";
    readonly kernelMethod: "transitionDelegatedAuthorityStatus";
    readonly phase: "delegated_authority";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["delegated_authority_status_transition", "isolation_state", "contract_stream_event"];
    readonly eventsEmitted: readonly ["delegated_authority_status_changed", "isolation_changed"];
    readonly authorityBoundary: "future authority reduction only";
    readonly evidenceObligation: "record terminal delegated authority status and authority-ref isolation without minting mutation authority";
}, {
    readonly transitionId: "recordGatewayCustodyProofPacket";
    readonly kernelMethod: "recordGatewayCustodyProofPacket";
    readonly phase: "credential_custody";
    readonly outcomeClasses: readonly ["recorded", "refusal", "proof_gap"];
    readonly recordsWritten: readonly ["gateway_custody_proof_packet", "contract_stream_event"];
    readonly eventsEmitted: readonly ["gateway_custody_proof_packet_recorded"];
    readonly authorityBoundary: "redacted gateway custody proof evidence only";
    readonly evidenceObligation: "bind credential ref, protected-path posture, bypass probes, drift, and redaction posture without issuing policy, greenlight, gate, or mutation authority";
}, {
    readonly transitionId: "recordCredentialResolutionEvidence";
    readonly kernelMethod: "recordCredentialResolutionEvidence";
    readonly phase: "credential_custody";
    readonly outcomeClasses: readonly ["recorded", "refusal", "proof_gap"];
    readonly recordsWritten: readonly ["credential_resolution_evidence", "contract_stream_event"];
    readonly eventsEmitted: readonly ["credential_resolution_recorded"];
    readonly authorityBoundary: "post-gate credential resolution evidence only";
    readonly evidenceObligation: "bind credential resolution/use evidence to exact contract, greenlight, and passed gateway check without exposing secret material";
}, {
    readonly transitionId: "createBypassProbe";
    readonly kernelMethod: "createBypassProbe";
    readonly phase: "protected_path_posture";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["bypass_probe", "contract_stream_event"];
    readonly eventsEmitted: readonly ["bypass_probe_recorded"];
    readonly authorityBoundary: "bypass probe evidence only";
    readonly evidenceObligation: "record protected-path probe outcome without issuing posture, policy, greenlight, or mutation authority";
}, {
    readonly transitionId: "createToolCallDraft";
    readonly kernelMethod: "createToolCallDraft";
    readonly phase: "intent_compilation";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["tool_call_draft", "contract_stream_event"];
    readonly eventsEmitted: readonly ["tool_call_draft_recorded"];
    readonly authorityBoundary: "tool call draft evidence only";
    readonly evidenceObligation: "open generated tool-call input state without issuing candidate or execution authority";
}, {
    readonly transitionId: "transitionToolCallDraft";
    readonly kernelMethod: "transitionToolCallDraft";
    readonly phase: "intent_compilation";
    readonly outcomeClasses: readonly ["recorded", "refusal"];
    readonly recordsWritten: readonly ["tool_call_draft", "contract_stream_event"];
    readonly eventsEmitted: readonly ["tool_call_draft_recorded"];
    readonly authorityBoundary: "tool call draft evidence only";
    readonly evidenceObligation: "transition generated tool-call input state monotonically without issuing candidate or execution authority";
}, {
    readonly transitionId: "createProtectedPathPosture";
    readonly kernelMethod: "createProtectedPathPosture";
    readonly phase: "protected_path_posture";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["protected_path_posture", "contract_stream_event"];
    readonly eventsEmitted: readonly ["protected_path_posture_recorded"];
    readonly authorityBoundary: "protected path posture evidence only";
    readonly evidenceObligation: "record current posture consulted later by policy and gateway checks";
}, {
    readonly integratorParity: true;
    readonly transitionId: "proposeActionContract";
    readonly kernelMethod: "proposeActionContract";
    readonly phase: "action_contract";
    readonly outcomeClasses: readonly ["recorded", "refusal", "conflict"];
    readonly recordsWritten: readonly ["action_contract", "recovery_recommendation_status_transition", "proof_gap", "contract_stream_event"];
    readonly eventsEmitted: readonly ["action_proposed", "recovery_status_changed", "proof_gap_recorded"];
    readonly authorityBoundary: "proposed exact action only";
    readonly evidenceObligation: "bind a contractable candidate or record refusal/proof-gap evidence";
}, {
    readonly transitionId: "recordNegotiationSession";
    readonly kernelMethod: "recordNegotiationSession";
    readonly phase: "negotiation";
    readonly outcomeClasses: readonly ["recorded", "conflict"];
    readonly recordsWritten: readonly ["negotiation_session", "contract_stream_event"];
    readonly eventsEmitted: readonly ["negotiation_session_recorded"];
    readonly authorityBoundary: "negotiation context evidence only";
    readonly evidenceObligation: "record parties, runtime posture, assumptions, uncertainty, and imported protocol evidence without issuing policy, greenlight, gate, mutation, receipt, or certificate authority";
}, {
    readonly transitionId: "recordNegotiationOffer";
    readonly kernelMethod: "recordNegotiationOffer";
    readonly phase: "negotiation";
    readonly outcomeClasses: readonly ["recorded", "conflict"];
    readonly recordsWritten: readonly ["negotiation_offer", "contract_stream_event"];
    readonly eventsEmitted: readonly ["negotiation_offer_recorded"];
    readonly authorityBoundary: "offer evidence only";
    readonly evidenceObligation: "record a specific offer version and reconstruction refs without turning accepted terms into protected-action authority";
}, {
    readonly transitionId: "recordNegotiationDecision";
    readonly kernelMethod: "recordNegotiationDecision";
    readonly phase: "negotiation";
    readonly outcomeClasses: readonly ["recorded", "conflict"];
    readonly recordsWritten: readonly ["negotiation_decision", "contract_stream_event"];
    readonly eventsEmitted: readonly ["negotiation_decision_recorded"];
    readonly authorityBoundary: "decision evidence only";
    readonly evidenceObligation: "record accept, reject, counter, withdraw, or expire against one current offer version without issuing an action contract or greenlight";
}, {
    readonly transitionId: "recordLinkedAgreement";
    readonly kernelMethod: "recordLinkedAgreement";
    readonly phase: "negotiation";
    readonly outcomeClasses: readonly ["recorded", "conflict"];
    readonly recordsWritten: readonly ["linked_agreement", "contract_stream_event"];
    readonly eventsEmitted: readonly ["linked_agreement_recorded"];
    readonly authorityBoundary: "accepted agreement evidence only";
    readonly evidenceObligation: "bind the accepted decision, offer digest, accepting party, and counterparty ref without authorizing any mutation";
}, {
    readonly transitionId: "recordAgreementObligationBinding";
    readonly kernelMethod: "recordAgreementObligationBinding";
    readonly phase: "negotiation";
    readonly outcomeClasses: readonly ["recorded", "conflict"];
    readonly recordsWritten: readonly ["agreement_obligation_binding", "contract_stream_event"];
    readonly eventsEmitted: readonly ["agreement_obligation_binding_recorded"];
    readonly authorityBoundary: "obligation-to-contract evidence only";
    readonly evidenceObligation: "bind one active agreement obligation to one exact action contract digest, params digest, action type, resource, and counterparty before policy may consider it";
}, {
    readonly transitionId: "transitionAgreementStatus";
    readonly kernelMethod: "transitionAgreementStatus";
    readonly phase: "negotiation";
    readonly outcomeClasses: readonly ["recorded", "conflict"];
    readonly recordsWritten: readonly ["agreement_status_transition", "contract_stream_event"];
    readonly eventsEmitted: readonly ["agreement_status_transition_recorded"];
    readonly authorityBoundary: "agreement lifecycle evidence only";
    readonly evidenceObligation: "record withdrawal, dispute, expiry, supersession, or resolution so future policy can refuse stale agreement-backed contracts";
}, {
    readonly transitionId: "createAuthorityCertificate";
    readonly kernelMethod: "createAuthorityCertificate";
    readonly phase: "authority_certificate";
    readonly outcomeClasses: readonly ["exported"];
    readonly recordsWritten: readonly ["authority_certificate", "contract_stream_event"];
    readonly eventsEmitted: readonly ["authority_certificate_emitted"];
    readonly authorityBoundary: "terminal signed evidence only";
    readonly evidenceObligation: "sign canonical terminal evidence after receipt, durable refusal, proof-gap, or replay-refusal terminalization";
}, {
    readonly integratorParity: true;
    readonly transitionId: "evaluatePolicy";
    readonly kernelMethod: "evaluatePolicy";
    readonly phase: "policy";
    readonly outcomeClasses: readonly ["greenlight", "refusal", "review_required", "proof_gap", "conflict"];
    readonly recordsWritten: readonly ["policy_decision", "greenlight", "refusal", "proof_gap", "idempotency_ledger_entry", "contract_stream_event"];
    readonly eventsEmitted: readonly ["policy_decision_recorded", "action_greenlit", "action_refused", "review_required", "proof_gap_recorded", "idempotency_ledger_recorded"];
    readonly authorityBoundary: "policy decision and optional one-use greenlight";
    readonly evidenceObligation: "bind exact contract, envelope, isolation, sequence, protected-path, credential, readiness, policy-version, and idempotency evidence";
}, {
    readonly transitionId: "createReviewArtifact";
    readonly kernelMethod: "createReviewArtifact";
    readonly phase: "review";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["review_artifact", "contract_stream_event"];
    readonly eventsEmitted: readonly ["review_artifact_recorded"];
    readonly authorityBoundary: "review rendering evidence only";
    readonly evidenceObligation: "bind rendered artifact to exact contract and policy input digests";
}, {
    readonly transitionId: "createReviewDecision";
    readonly kernelMethod: "createReviewDecision";
    readonly phase: "review";
    readonly outcomeClasses: readonly ["recorded", "refusal"];
    readonly recordsWritten: readonly ["review_decision", "contract_stream_event"];
    readonly eventsEmitted: readonly ["review_decision_recorded"];
    readonly authorityBoundary: "review decision evidence only";
    readonly evidenceObligation: "bind decision to the exact review artifact and policy input";
}, {
    readonly integratorParity: true;
    readonly transitionId: "gatewayCheck";
    readonly kernelMethod: "gatewayCheck";
    readonly phase: "gateway";
    readonly outcomeClasses: readonly ["recorded", "proof_gap", "replay_refusal", "conflict"];
    readonly recordsWritten: readonly ["gateway_check_attempt", "mutation_attempt", "protected_surface_operation_claim", "receipt", "proof_gap", "contract_stream_event"];
    readonly eventsEmitted: readonly ["gateway_checked", "gateway_refused", "mutation_attempted", "protected_surface_operation_claimed", "receipt_emitted", "proof_gap_recorded"];
    readonly authorityBoundary: "one exact gateway-checked mutation attempt";
    readonly evidenceObligation: "reload contract, greenlight, posture, isolation, sequence, and gateway policy before mutation";
}, {
    readonly transitionId: "issueAgenticEndpointAccessLease";
    readonly kernelMethod: "issueAgenticEndpointAccessLease";
    readonly phase: "agentic_endpoint_access";
    readonly outcomeClasses: readonly ["recorded", "refusal", "proof_gap"];
    readonly recordsWritten: readonly ["agentic_endpoint_access_clearance_binding", "agentic_endpoint_access_lease", "refusal", "proof_gap"];
    readonly eventsEmitted: readonly [];
    readonly authorityBoundary: "bounded endpoint entry; no downstream mutation authority";
    readonly evidenceObligation: "verify an existing exact contract, greenlit policy decision, one-use greenlight, passed gateway check, endpoint surface binding, bypass posture, and isolation state before recording a bounded endpoint-access lease without downstream mutation authority";
}, {
    readonly transitionId: "recordAgenticEndpointAccessUsageEvent";
    readonly kernelMethod: "recordAgenticEndpointAccessUsageEvent";
    readonly phase: "agentic_endpoint_access";
    readonly outcomeClasses: readonly ["recorded", "refusal", "exhausted"];
    readonly recordsWritten: readonly ["agentic_endpoint_access_usage_event", "refusal"];
    readonly eventsEmitted: readonly [];
    readonly authorityBoundary: "endpoint access usage evidence only";
    readonly evidenceObligation: "append replayable endpoint usage counters or refusal evidence without issuing downstream mutation authority";
}, {
    readonly integratorParity: true;
    readonly transitionId: "reconcileSurfaceOperation";
    readonly kernelMethod: "reconcileSurfaceOperation";
    readonly phase: "operation_lifecycle";
    readonly outcomeClasses: readonly ["recorded", "proof_gap", "recovery"];
    readonly recordsWritten: readonly ["surface_operation_reconciliation", "proof_gap", "contract_stream_event"];
    readonly eventsEmitted: readonly ["surface_operation_reconciled", "protected_surface_operation_released", "proof_gap_recorded", "proof_gap_resolved"];
    readonly authorityBoundary: "downstream observation only";
    readonly evidenceObligation: "observe finality or record proof gap without authorizing retry mutation";
}, {
    readonly transitionId: "createIsolationState";
    readonly kernelMethod: "createIsolationState";
    readonly phase: "isolation";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["isolation_state", "contract_stream_event"];
    readonly eventsEmitted: readonly ["isolation_changed"];
    readonly authorityBoundary: "future authority reduction only";
    readonly evidenceObligation: "record isolation state that later policy and gateway checks must consult";
}, {
    readonly transitionId: "createBreakerDecision";
    readonly kernelMethod: "createBreakerDecision";
    readonly phase: "isolation";
    readonly outcomeClasses: readonly ["recorded"];
    readonly recordsWritten: readonly ["breaker_decision", "isolation_state", "contract_stream_event"];
    readonly eventsEmitted: readonly ["breaker_decision_recorded", "isolation_changed"];
    readonly authorityBoundary: "watermark-bound halt/quarantine decision";
    readonly evidenceObligation: "record observed stream watermark and resulting isolation state atomically";
}, {
    readonly transitionId: "createReceiptExport";
    readonly kernelMethod: "createReceiptExport";
    readonly phase: "receipt_export";
    readonly outcomeClasses: readonly ["exported", "refusal"];
    readonly recordsWritten: readonly ["receipt_export", "contract_stream_event"];
    readonly eventsEmitted: readonly ["receipt_exported"];
    readonly authorityBoundary: "existing receipt packaging only";
    readonly evidenceObligation: "bind stored receipt digest without creating execution proof";
}, {
    readonly transitionId: "createRecoveryRecommendation";
    readonly kernelMethod: "createRecoveryRecommendation";
    readonly phase: "recovery";
    readonly outcomeClasses: readonly ["recovery", "refusal"];
    readonly recordsWritten: readonly ["recovery_recommendation", "contract_stream_event"];
    readonly eventsEmitted: readonly ["recovery_recommended"];
    readonly authorityBoundary: "recovery recommendation only";
    readonly evidenceObligation: "derive narrower future path from refusal or proof-gap evidence without inheriting greenlight";
}, {
    readonly transitionId: "transitionRecoveryRecommendationStatus";
    readonly kernelMethod: "transitionRecoveryRecommendationStatus";
    readonly phase: "recovery";
    readonly outcomeClasses: readonly ["recorded", "conflict"];
    readonly recordsWritten: readonly ["recovery_recommendation_status_transition", "proof_gap", "contract_stream_event"];
    readonly eventsEmitted: readonly ["recovery_status_changed", "proof_gap_recorded"];
    readonly authorityBoundary: "recovery status evidence only";
    readonly evidenceObligation: "record terminal status races as proof gaps instead of silently choosing a winner";
}, {
    readonly transitionId: "resolveRecoveryTerminalConflictProofGap";
    readonly kernelMethod: "resolveRecoveryTerminalConflictProofGap";
    readonly phase: "recovery";
    readonly outcomeClasses: readonly ["recovery"];
    readonly recordsWritten: readonly ["proof_gap", "recovery_recommendation_status_transition", "recovery_recommendation", "contract_stream_event"];
    readonly eventsEmitted: readonly ["proof_gap_resolved"];
    readonly authorityBoundary: "proof-gap resolution only";
    readonly evidenceObligation: "bind terminal-conflict proof gap to observed winning terminal evidence";
}];
export declare const protocolNavigationByTransitionId: Record<ProtocolTransitionId, ProtocolNavigationEntry>;
export declare function protocolKernelMethods(): KernelTransitionMethod[];
