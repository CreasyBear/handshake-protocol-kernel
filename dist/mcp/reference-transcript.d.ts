import { mcpCatalogSnapshot, MCP_X402_PAYMENT_PROPOSE_TOOL } from "./catalog";
import { type McpToolResult } from "./output";
import { type McpResourceRead } from "./resources";
export declare const MCP_X402_REFERENCE_TRANSCRIPT_VERSION: "handshake.mcp.x402.reference-transcript.v0.1";
export declare const mcpX402ReferenceTranscriptCaseIds: readonly ["metadata_read", "valid_proposal", "digest_bound_proposal", "evidence_readback", "stale_metadata", "tools_list_changed", "install_not_ready", "gateway_offline", "amount_mismatch", "unsupported_body_posture", "live_provider_posture", "params_mismatch", "replay_refusal", "raw_sibling_bypass_shaped_input", "proof_gap_downstream_uncertainty"];
export type McpX402ReferenceTranscriptCaseId = (typeof mcpX402ReferenceTranscriptCaseIds)[number];
export type McpReferenceCliReadbackId = "schema" | "evidence.aps-report" | "evidence.contract-view" | "evidence.receipt-timeline" | "install.health";
export type McpReferenceSourceBinding = {
    readonly kind: "mcp_catalog";
    readonly source: "mcpCatalogSnapshot";
} | {
    readonly kind: "mcp_resource";
    readonly source: "readMcpResource";
    readonly uri: string;
} | {
    readonly kind: "mcp_tool";
    readonly source: "proposeMcpX402Payment";
    readonly toolName: typeof MCP_X402_PAYMENT_PROPOSE_TOOL;
} | {
    readonly kind: "shared_outcome";
    readonly source: "mcpNonContractOutcome";
} | {
    readonly kind: "cli_readback";
    readonly source: "cliCommandManifest";
    readonly commandId: McpReferenceCliReadbackId;
};
export type McpReferenceTranscriptRow = {
    readonly id: McpX402ReferenceTranscriptCaseId;
    readonly title: string;
    readonly generatedExecutionShape: "model_facing_mcp_resource_read" | "model_facing_mcp_tool_call";
    readonly protectedActionPath: "x402_payment.exact" | "none";
    readonly expectedOutcome: string;
    readonly expectedNextAction: string;
    readonly sourceBindings: readonly McpReferenceSourceBinding[];
    readonly cliReadbacks: readonly McpReferenceCliReadbackId[];
    readonly resourceReads: readonly McpResourceRead[];
    readonly toolResult: McpToolResult | null;
    readonly runtimeCallNames: readonly string[];
    readonly nonAuthorityPosture: typeof mcpReferenceNonAuthorityPosture;
};
export type McpReferenceTranscriptPack = {
    readonly schemaVersion: typeof MCP_X402_REFERENCE_TRANSCRIPT_VERSION;
    readonly targetDecision: typeof mcpX402ReferenceTranscriptTargetDecision;
    readonly transcriptContract: typeof mcpX402ReferenceTranscriptContract;
    readonly hostileMatrix: readonly {
        readonly caseId: McpX402ReferenceTranscriptCaseId;
        readonly hostileCondition: string;
        readonly requiredPosture: string;
    }[];
    readonly catalogSnapshot: ReturnType<typeof mcpCatalogSnapshot>;
    readonly rows: readonly McpReferenceTranscriptRow[];
};
export declare const mcpReferenceNonAuthorityPosture: {
    readonly policyDecisionCreated: false;
    readonly authorityCreated: false;
    readonly authorityCertificateMinted: false;
    readonly credentialMaterialIncluded: false;
    readonly gatewayCheckPerformed: false;
    readonly greenlightCreated: false;
    readonly mutationAttempted: false;
    readonly mutationCommandIncluded: false;
    readonly rawInternalRecordIncluded: false;
    readonly receiptExportCreated: false;
    readonly hostedOperationClaimed: false;
    readonly providerCustodyClaimed: false;
    readonly crossOrgTrustClaimed: false;
    readonly clearingHouseClaimed: false;
};
export declare const mcpX402ReferenceTranscriptTargetDecision: {
    readonly id: "mcp-x402-reference-transcript-target";
    readonly selectedTarget: "source_owned_typescript_reference_harness";
    readonly custodyRole: "runtime_evidence";
    readonly authorityPosture: "proposal_only";
    readonly externalHostClaimed: false;
    readonly controlPlaneCustody: false;
    readonly gatewayCustody: false;
    readonly rawStoreCustody: false;
    readonly evidenceExportCustody: false;
    readonly certificateMintCustody: false;
    readonly processLaunchCustody: false;
    readonly packageManagerCustody: false;
    readonly repoCustody: false;
    readonly cloudCustody: false;
    readonly browserCustody: false;
    readonly networkCustody: false;
    readonly fallbackIfExternalHostChosen: "keep this pack as source-owned reference evidence and add host-specific bypass proof before public quickstart claims";
};
export declare const mcpX402ReferenceTranscriptContract: {
    readonly actionClass: "x402_payment.exact";
    readonly requiredCaseIds: readonly ["metadata_read", "valid_proposal", "digest_bound_proposal", "evidence_readback", "stale_metadata", "tools_list_changed", "install_not_ready", "gateway_offline", "amount_mismatch", "unsupported_body_posture", "live_provider_posture", "params_mismatch", "replay_refusal", "raw_sibling_bypass_shaped_input", "proof_gap_downstream_uncertainty"];
    readonly requiredSourceBindings: readonly ["mcpCatalogSnapshot", "readMcpResource", "proposeMcpX402Payment", "mcpNonContractOutcome"];
    readonly requiredCliReadbacks: readonly ["schema", "evidence.aps-report", "evidence.contract-view", "evidence.receipt-timeline", "install.health"];
    readonly nonClaims: readonly ["no_policy_decision", "no_greenlight", "no_gateway_check", "no_mutation", "no_receipt_export", "no_credential_material", "no_certificate_mint", "no_hosted_operation", "no_provider_custody", "no_cross_org_trust", "no_clearing_house"];
    readonly validationGates: readonly ["every case binds to source-owned MCP catalog, resource, tool, or shared outcome behavior", "every case carries explicit non-authority posture", "CLI pairings reference existing evidence or local readiness commands only", "hostile cases refuse, reload, stop, or read evidence without authority escalation"];
};
export declare function buildMcpX402ReferenceTranscript(): Promise<McpReferenceTranscriptPack>;
export declare function buildMcpX402ReferenceTranscriptMarkdown(): Promise<string>;
