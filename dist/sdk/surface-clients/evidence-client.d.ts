import type { AgentTransactionEnvelopeProjection, ContractEvidenceProjection, GeneratedGraphEvidenceProjection, IdempotencyRecoveryProjection, ProtectedPathInstallHealthProjection, ReceiptTimelineProjection } from "../../protocol/public/schemas";
import { type VerifyAuthorityCertificateResult } from "../../protocol/areas/authority-certificate/verify";
import type { TransitionCallerRole } from "../../http/admission/caller-auth";
import type { HandshakeFetch } from "../client";
import { type RoleScopedClientOptions } from "./transport";
export type EvidenceClientRole = Extract<TransitionCallerRole, "review_custody" | "runtime_evidence">;
export type EvidenceClientOptions = RoleScopedClientOptions & {
    readRole?: EvidenceClientRole;
};
export declare class EvidenceClient {
    private readonly transport;
    constructor(baseUrl: string, options: EvidenceClientOptions, fetchImpl?: HandshakeFetch);
    getGeneratedGraphEvidenceProjection(generatedExecutionGraphId: string): Promise<GeneratedGraphEvidenceProjection>;
    getContractEvidenceProjection(actionContractId: string): Promise<ContractEvidenceProjection>;
    getAgentTransactionEnvelopeProjection(actionContractId: string): Promise<AgentTransactionEnvelopeProjection>;
    getIdempotencyRecoveryProjection(actionContractId: string): Promise<IdempotencyRecoveryProjection>;
    getReceiptTimelineProjection(receiptId: string): Promise<ReceiptTimelineProjection>;
    getProtectedPathInstallHealthProjection(actionContractId: string): Promise<ProtectedPathInstallHealthProjection>;
    verifyAuthorityCertificate(certificate: unknown, trustMaterial: unknown): Promise<VerifyAuthorityCertificateResult>;
}
