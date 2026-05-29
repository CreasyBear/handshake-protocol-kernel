/**
 * Phase-04 plan 04-11 / D-24 deferred maintainer lane (Phase 05 plan 05-01).
 * Frozen HTTP mutation inventory — separate from `boundary-manifest.ts` surface ownership (adjudication #7).
 * Inventories existing POST transition routes only; does not add new paths (D-50).
 */
import type { SurfaceRouteFamily } from "../surfaces/boundary-manifest";
import { type TransitionRouteDefinition } from "./routes/transition-route-registry";
export type MutationRouteDefinition = {
    readonly routeId: TransitionRouteDefinition["routeId"];
    readonly path: TransitionRouteDefinition["path"];
    readonly role: TransitionRouteDefinition["role"];
    readonly summary: TransitionRouteDefinition["summary"];
    readonly surfaceRouteFamily: SurfaceRouteFamily;
    readonly requiresAdapterGatewayCheck: true;
};
export declare const mutationRouteDefinitions: {
    routeId: "gatewayCheck" | "registerInstallProposalCompiledRecords" | "compileIntent" | "createRuntimeExecution" | "registerGatewayCredentialRef" | "registerDelegatedAuthorityRef" | "transitionDelegatedAuthorityStatus" | "recordGatewayCustodyProofPacket" | "recordCredentialResolutionEvidence" | "createBypassProbe" | "createToolCallDraft" | "transitionToolCallDraft" | "createProtectedPathPosture" | "proposeActionContract" | "evaluatePolicy" | "createReviewArtifact" | "createReviewDecision" | "reconcileSurfaceOperation" | "createIsolationState" | "createBreakerDecision" | "createReceiptExport" | "createRecoveryRecommendation" | "transitionRecoveryRecommendationStatus" | "resolveRecoveryTerminalConflictProofGap" | "registerToolCapability" | "registerActionType" | "registerGatewayRegistryEntry" | "registerOperatingEnvelope" | "proposeRuntimeIngressActionContracts";
    path: `/v0.2/${string}`;
    role: import("..").TransitionCallerRole;
    summary: string;
    surfaceRouteFamily: "action_contract_proposal_write" | "adapter_definition_write" | "bypass_probe_write" | "catalog_install_write" | "certificate_mint_write" | "certificate_verify_local" | "delegated_authority_write" | "evidence_projection_read" | "gateway_credential_write" | "gateway_check_write" | "install_health_read" | "install_proposal_shape_read" | "isolation_write" | "local_process_supervision" | "policy_decision_write" | "protected_path_posture_write" | "raw_record_read" | "receipt_export_write" | "recovery_write" | "runtime_evidence_write" | "runtime_ingress_proposal_write" | "surface_reconciliation_write" | "tool_call_draft_write";
    requiresAdapterGatewayCheck: true;
}[];
export declare function assertMutationRouteManifestParity(routes?: readonly TransitionRouteDefinition[]): void;
