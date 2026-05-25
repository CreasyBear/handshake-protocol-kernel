import type { McpToolResult } from "./output";
import type { McpEvidenceResourceClient, McpResourceRead } from "./resources";
import type { McpRuntimeProposalClient, McpX402PaymentProposalInput } from "./x402-proposal";
export declare const MCP_REFERENCE_METADATA_URI: "handshake://metadata/actions/x402_payment.exact";
export declare const MCP_REFERENCE_RECEIPT_TIMELINE_URI: "handshake://evidence/receipts/rcp_mcp_gap/timeline";
export declare const MCP_REFERENCE_TRUSTED_MAX_ATOMIC_AMOUNT: "2000";
export declare const MCP_REFERENCE_GATEWAY_READINESS_REF: "handshake://local/x402/gateway-readiness.json";
export declare const MCP_REFERENCE_GATEWAY_READINESS_DIGEST: `sha256:${string}`;
export declare const MCP_REFERENCE_POLICY_VERSION_REF: "policy:x402-payment-exact:mcp-reference@v1";
export declare const MCP_REFERENCE_POLICY_VERSION_DIGEST: `sha256:${string}`;
export type McpReferenceRuntimeCall = {
    readonly name: string;
    readonly input: unknown;
};
export declare function referenceProposalInput(metadataDigest: `sha256:${string}`, overrides?: Partial<McpX402PaymentProposalInput>): Promise<McpX402PaymentProposalInput>;
export declare function referenceRuntimeClient(options?: {
    readonly contractFailureCode?: string;
}): {
    readonly client: McpRuntimeProposalClient;
    readonly calls: McpReferenceRuntimeCall[];
};
export declare function referenceEvidenceClient(): McpEvidenceResourceClient;
export declare function metadataDigestFrom(read: McpResourceRead): `sha256:${string}`;
export declare function actionContractIdFrom(result: McpToolResult): string;
