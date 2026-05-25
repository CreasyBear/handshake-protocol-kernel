import { z } from "zod";
export declare const McpResourceReadSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.surface-outcome.v0.1">;
    uri: z.ZodString;
    readOnly: z.ZodLiteral<true>;
    authorityCreated: z.ZodLiteral<false>;
    authorityCertificateMinted: z.ZodLiteral<false>;
    credentialMaterialIncluded: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    greenlightCreated: z.ZodLiteral<false>;
    mutationAttempted: z.ZodLiteral<false>;
    mutationCommandIncluded: z.ZodLiteral<false>;
    rawInternalRecordIncluded: z.ZodLiteral<false>;
    receiptExportCreated: z.ZodLiteral<false>;
    payload: z.ZodUnknown;
}, z.core.$strict>;
export type McpResourceRead = z.infer<typeof McpResourceReadSchema>;
export type McpEvidenceResourceClient = {
    getContractEvidenceProjection(actionContractId: string): Promise<unknown>;
    getAgentTransactionEnvelopeProjection(actionContractId: string): Promise<unknown>;
    getReceiptTimelineProjection(receiptId: string): Promise<unknown>;
    getIdempotencyRecoveryProjection(actionContractId: string): Promise<unknown>;
    getProtectedPathInstallHealthProjection(actionContractId: string): Promise<unknown>;
};
export declare function readMcpResource(uri: string, evidenceClient: McpEvidenceResourceClient): Promise<McpResourceRead>;
type ParsedMcpResourceUri = {
    kind: "metadata";
    actionClass: string;
} | {
    kind: "challenge";
    challengeId: string;
} | {
    kind: "contract";
    actionContractId: string;
} | {
    kind: "envelope";
    actionContractId: string;
} | {
    kind: "receiptTimeline";
    receiptId: string;
} | {
    kind: "idempotency";
    actionContractId: string;
} | {
    kind: "installHealth";
    actionContractId: string;
} | {
    kind: "installHealthPreContract";
    requestId: string;
} | {
    kind: "certificateRef";
    authorityCertificateId: string;
};
export declare function parseMcpResourceUri(uri: string): ParsedMcpResourceUri;
export {};
