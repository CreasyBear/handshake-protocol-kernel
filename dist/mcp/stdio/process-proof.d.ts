import { type McpToolResult } from "../output";
import { type McpResourceRead } from "../resources";
export declare const MCP_STDIO_PROCESS_PROOF_VERSION: "handshake.mcp.stdio-process-proof.v0.1";
export type McpStdioProcessProofRow = {
    readonly id: "connect" | "tools_list" | "metadata_read" | "valid_proposal" | "contract_read";
    readonly outcome: string;
    readonly source: "official_mcp_client_sdk" | "official_mcp_server_sdk" | "handshake_mcp_resource" | "handshake_mcp_tool";
    readonly authorityCreated: false;
    readonly greenlightCreated: false;
    readonly gatewayCheckPerformed: false;
    readonly mutationAttempted: false;
    readonly rawInternalRecordIncluded: false;
    readonly credentialMaterialIncluded: false;
};
export type McpStdioProcessProof = {
    readonly schemaVersion: typeof MCP_STDIO_PROCESS_PROOF_VERSION;
    readonly transport: "stdio";
    readonly serverEntrypoint: string;
    readonly serverCommand: string;
    readonly serverArgs: readonly string[];
    readonly processTimeoutMs: number;
    readonly sdkPosture: {
        readonly clientPackage: "@modelcontextprotocol/client";
        readonly serverPackage: "@modelcontextprotocol/server";
        readonly releasePosture: "alpha_v2_sdk";
    };
    readonly toolNames: readonly string[];
    readonly metadataRead: McpResourceRead;
    readonly toolResult: McpToolResult;
    readonly contractRead: McpResourceRead;
    readonly rows: readonly McpStdioProcessProofRow[];
    readonly stderr: string;
    readonly nonClaims: readonly string[];
};
export type RunMcpStdioProcessProofOptions = {
    readonly cwd?: string;
    readonly command?: string;
    readonly args?: readonly string[];
    readonly timeoutMs?: number;
};
export declare class McpProcessTimeoutError extends Error {
    readonly phase: string;
    readonly timeoutMs: number;
    readonly code: "mcp_process_timeout";
    constructor(phase: string, timeoutMs: number);
}
export declare function runMcpStdioProcessProof(options?: RunMcpStdioProcessProofOptions): Promise<McpStdioProcessProof>;
export declare function withMcpProcessTimeout<T>(operation: Promise<T>, timeoutMs: number, phase: string): Promise<T>;
