import type { ProtectedActionRecoveryGuidance } from "../surfaces/protected-action-recovery-guidance";
export declare const MCP_RECOVERY_GUIDANCE_READBACK_VERSION: "handshake.mcp.recovery-guidance-readback.v1";
export declare const MCP_RECENT_RECOVERY_GUIDANCE_READBACK_VERSION: "handshake.mcp.recent-recovery-guidance-readback.v1";
export declare const MCP_RECOVERY_DRAFT_DIFF_READBACK_VERSION: "handshake.mcp.recovery-draft-diff-readback.v1";
type McpReadOnlyNonAuthorityFields = {
    readOnly: true;
    authorityCreated: false;
    authorityCertificateMinted: false;
    credentialMaterialIncluded: false;
    gatewayCheckPerformed: false;
    greenlightCreated: false;
    mutationAttempted: false;
    mutationCommandIncluded: false;
    rawInternalRecordIncluded: false;
    receiptExportCreated: false;
};
export type McpRecoveryGuidanceReadback = McpReadOnlyNonAuthorityFields & {
    resourceVersion: typeof MCP_RECOVERY_GUIDANCE_READBACK_VERSION;
    guidanceId: string;
    guidance: ProtectedActionRecoveryGuidance;
    redactionProfile: "mcp_recovery_guidance_redacted_v1";
    nonClaims: readonly string[];
};
export type McpRecentRecoveryGuidanceReadback = McpReadOnlyNonAuthorityFields & {
    resourceVersion: typeof MCP_RECENT_RECOVERY_GUIDANCE_READBACK_VERSION;
    scopeRef: string;
    guidance: readonly ProtectedActionRecoveryGuidance[];
    redactionProfile: "mcp_recovery_guidance_redacted_v1";
    nonClaims: readonly string[];
};
export type McpRecoveryDraftDiffReadback = McpReadOnlyNonAuthorityFields & {
    resourceVersion: typeof MCP_RECOVERY_DRAFT_DIFF_READBACK_VERSION;
    guidanceId: string;
    diff: unknown;
    redactionProfile: "mcp_recovery_guidance_redacted_v1";
    nonClaims: readonly string[];
};
export declare function mcpRecoveryGuidanceReadbackPayload(guidance: ProtectedActionRecoveryGuidance): McpRecoveryGuidanceReadback;
export declare function mcpRecentRecoveryGuidanceReadbackPayload(scopeRef: string, guidance: readonly ProtectedActionRecoveryGuidance[]): McpRecentRecoveryGuidanceReadback;
export declare function mcpRecoveryDraftDiffReadbackPayload(guidanceId: string, diff: unknown): McpRecoveryDraftDiffReadback;
export {};
