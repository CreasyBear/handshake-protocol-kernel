import { z } from "zod";
import { type McpToolResult } from "../output.js";
export declare const MCP_DELEGATION_VERIFY_TOOL: "handshake.evidence.delegation.verify";
export declare const McpDelegationVerifyInputSchema: z.ZodObject<{
    signedChain: z.ZodUnknown;
    executorPk: z.ZodString;
    intentHash: z.ZodString;
    merkleProof: z.ZodObject<{
        siblings: z.ZodArray<z.ZodObject<{
            hash: z.ZodString;
            isLeft: z.ZodBoolean;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    nowUnix: z.ZodOptional<z.ZodNumber>;
    driftToleranceSecs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export type McpDelegationVerifyInput = z.infer<typeof McpDelegationVerifyInputSchema>;
export declare function verifyMcpDelegationEvidence(inputValue: McpDelegationVerifyInput): McpToolResult;
