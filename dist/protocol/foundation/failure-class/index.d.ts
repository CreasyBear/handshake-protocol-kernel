import { z } from "zod";
import { HandshakeProtocolError } from "../errors";
export declare const FailureClassSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    replay_refusal: "replay_refusal";
    auth: "auth";
    hosted_admission: "hosted_admission";
    protected_action_refusal: "protected_action_refusal";
    stale_admission: "stale_admission";
    internal: "internal";
}>;
export type FailureClass = z.infer<typeof FailureClassSchema>;
export declare function failureClassFromHttpStatus(status: number): FailureClass;
export declare function classifyFailureClassFromProtocolError(error: HandshakeProtocolError): FailureClass;
export declare function classifyFailureClassFromReasonCodes(reasonCodes: readonly string[]): FailureClass;
export declare const MCP_FAILURE_CLASS_EVIDENCE_PREFIX: "taxonomy:failureClass/";
export declare function mcpFailureClassEvidenceRef(failureClass: FailureClass): string;
export declare function parseMcpFailureClassEvidenceRef(ref: string): FailureClass | null;
