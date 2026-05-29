import { type ActionAttemptLifecycleEntry, type ActionAttemptLifecycleKey } from "../../protocol/areas/action-attempt-lifecycle";
export declare const serviceWorkflowCorrelationFieldNames: readonly ["passportPackageDigest", "passportPresentationId", "admissionId", "serviceWorkflowHandleId", "serviceWorkflowHandleDigest"];
export type ServiceWorkflowCorrelationFieldName = (typeof serviceWorkflowCorrelationFieldNames)[number];
export type ServiceWorkflowCorrelationFieldBoundary = {
    readonly fieldName: ServiceWorkflowCorrelationFieldName;
    readonly allowedUse: string;
    readonly forbiddenInterpretation: string;
    readonly createsAuthority: false;
};
export declare const serviceWorkflowCorrelationFieldBoundaries: readonly [{
    readonly fieldName: "passportPackageDigest";
    readonly allowedUse: "content-addressed correlation with the evidence bundle the agent presented";
    readonly forbiddenInterpretation: "identity, trust, permission, or reusable auth";
    readonly createsAuthority: false;
}, {
    readonly fieldName: "passportPresentationId";
    readonly allowedUse: "unique correlation for one service intake or presentation event";
    readonly forbiddenInterpretation: "principal approval, spend approval, or gateway admission";
    readonly createsAuthority: false;
}, {
    readonly fieldName: "admissionId";
    readonly allowedUse: "service-side readback reference for accepted, refused, stale, proof-gap, or quarantined intake";
    readonly forbiddenInterpretation: "policy decision, greenlight, gateway check, receipt, or mutation permission";
    readonly createsAuthority: false;
}, {
    readonly fieldName: "serviceWorkflowHandleId";
    readonly allowedUse: "workflow context correlation for later proposal/readback";
    readonly forbiddenInterpretation: "bearer token, tool permission, retry permission, credential, or payment approval";
    readonly createsAuthority: false;
}, {
    readonly fieldName: "serviceWorkflowHandleDigest";
    readonly allowedUse: "content-addressed reconstruction reference for the non-authority handle";
    readonly forbiddenInterpretation: "proof of authorization, proof of gateway acceptance, or proof of execution";
    readonly createsAuthority: false;
}];
export declare const serviceWorkflowProjectionKinds: readonly ["passport", "service_workflow_admission", "service_workflow_handle", "clearance", "outcome", "authority_certificate"];
export type ServiceWorkflowProjectionKind = (typeof serviceWorkflowProjectionKinds)[number];
export type ServiceWorkflowProjection = {
    readonly projectionKind: ServiceWorkflowProjectionKind;
    readonly productNoun: string;
    readonly sourceAuthorityStage: "pre_contract_evidence_context" | "fresh_protected_action_path" | "terminal_readback" | "terminal_evidence_projection";
    readonly allowedUse: string;
    readonly forbiddenInterpretations: readonly string[];
    readonly createsAuthority: false;
    readonly lifecycleKeys: readonly ActionAttemptLifecycleKey[];
    readonly preContractContextRefs: readonly string[];
};
export declare const serviceWorkflowLifecycleProjections: readonly [{
    readonly projectionKind: "passport";
    readonly productNoun: "Passport";
    readonly sourceAuthorityStage: "pre_contract_evidence_context";
    readonly allowedUse: "present an evidence package for service intake and reconstruction";
    readonly forbiddenInterpretations: readonly ["identity", "trust", "permission", "spend approval", "signer access", "reusable auth"];
    readonly createsAuthority: false;
    readonly lifecycleKeys: readonly [];
    readonly preContractContextRefs: readonly ["participant_identity_binding:evidence_only", "gateway_custody_packet:evidence_only", "protected_path_posture:evidence_only"];
}, {
    readonly projectionKind: "service_workflow_admission";
    readonly productNoun: "ServiceWorkflowAdmission";
    readonly sourceAuthorityStage: "pre_contract_evidence_context";
    readonly allowedUse: "record service-side accepted, refused, stale, proof-gap, or quarantined intake readback";
    readonly forbiddenInterpretations: readonly ["policy decision", "greenlight", "gateway check", "receipt", "certificate", "mutation permission"];
    readonly createsAuthority: false;
    readonly lifecycleKeys: readonly [];
    readonly preContractContextRefs: readonly ["passportPackageDigest", "passportPresentationId", "admissionId"];
}, {
    readonly projectionKind: "service_workflow_handle";
    readonly productNoun: "ServiceWorkflowHandle";
    readonly sourceAuthorityStage: "pre_contract_evidence_context";
    readonly allowedUse: "carry correlation and readback context into later fresh proposals";
    readonly forbiddenInterpretations: readonly ["badge-as-bearer-token", "tool permission", "retry permission", "x402 payment approval", "auth.md credential", "gateway pass"];
    readonly createsAuthority: false;
    readonly lifecycleKeys: readonly [];
    readonly preContractContextRefs: readonly ["serviceWorkflowHandleId", "serviceWorkflowHandleDigest"];
}, {
    readonly projectionKind: "clearance";
    readonly productNoun: "Clearance";
    readonly sourceAuthorityStage: "fresh_protected_action_path";
    readonly allowedUse: "name the fresh exact protected-action path for one event";
    readonly forbiddenInterpretations: readonly ["workflow-level permission", "reusable auth", "aggregate spend approval"];
    readonly createsAuthority: false;
    readonly lifecycleKeys: readonly ["proposeActionContract:recorded", "proposeActionContract:refusal", "proposeActionContract:conflict", "evaluatePolicy:greenlight", "evaluatePolicy:refusal", "evaluatePolicy:review_required", "evaluatePolicy:proof_gap", "evaluatePolicy:conflict", "gatewayCheck:recorded", "gatewayCheck:proof_gap", "gatewayCheck:replay_refusal", "gatewayCheck:conflict"];
    readonly preContractContextRefs: readonly [];
}, {
    readonly projectionKind: "outcome";
    readonly productNoun: "Outcome";
    readonly sourceAuthorityStage: "terminal_readback";
    readonly allowedUse: "read receipt, refusal, replay refusal, proof gap, downstream uncertainty, or recovery posture";
    readonly forbiddenInterpretations: readonly ["downstream business success", "future permission", "new greenlight", "receipt substitute"];
    readonly createsAuthority: false;
    readonly lifecycleKeys: readonly ["evaluatePolicy:refusal", "evaluatePolicy:proof_gap", "gatewayCheck:recorded", "gatewayCheck:proof_gap", "gatewayCheck:replay_refusal", "gatewayCheck:conflict", "reconcileSurfaceOperation:recorded", "reconcileSurfaceOperation:proof_gap", "reconcileSurfaceOperation:recovery", "createReceiptExport:exported", "createReceiptExport:refusal", "createRecoveryRecommendation:recovery", "createRecoveryRecommendation:refusal"];
    readonly preContractContextRefs: readonly [];
}, {
    readonly projectionKind: "authority_certificate";
    readonly productNoun: "AuthorityCertificate";
    readonly sourceAuthorityStage: "terminal_evidence_projection";
    readonly allowedUse: "sign existing terminal evidence for one event";
    readonly forbiddenInterpretations: readonly ["permission", "identity", "settlement", "hosted trust", "reusable auth"];
    readonly createsAuthority: false;
    readonly lifecycleKeys: readonly ["createAuthorityCertificate:exported"];
    readonly preContractContextRefs: readonly [];
}];
export declare const forbiddenServiceWorkflowAuthorityNouns: readonly ["Badge"];
export declare function serviceWorkflowProjectionByKind(projectionKind: ServiceWorkflowProjectionKind): ServiceWorkflowProjection;
export declare function serviceWorkflowLifecycleEntriesFor(projectionKind: ServiceWorkflowProjectionKind): ActionAttemptLifecycleEntry[];
