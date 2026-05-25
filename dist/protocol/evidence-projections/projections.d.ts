import type { ActionContract } from "../areas/action-contract";
import type { GatewayRegistryEntry } from "../areas/catalog-envelope";
import type { CredentialResolutionEvidence } from "../areas/credential-custody";
import type { GatewayCheckAttempt, MutationAttempt } from "../areas/gateway-gate/schemas";
import { type IdempotencyLedgerEntry } from "../areas/idempotency-ledger";
import type { SurfaceOperationReconciliation } from "../areas/operation-lifecycle";
import type { ProtectedPathPosture } from "../areas/protected-path-posture";
import type { Greenlight, PolicyDecision } from "../areas/policy-greenlight/schemas";
import type { ProofGap } from "../areas/proof-gap";
import { type Refusal } from "../areas/refusal";
import type { Receipt } from "../areas/receipt-export/schemas";
import type { ContractStreamEvent } from "../events/schemas";
import type { StoredProtocolRecord } from "../store/port";
import { type AgentTransactionEnvelopeProjection, type ContractEvidenceProjection, type IdempotencyRecoveryProjection, type ProtectedPathInstallHealthProjection, type ReceiptTimelineProjection } from "./schemas";
export declare function projectContractEvidence(contract: ActionContract): ContractEvidenceProjection;
export type AgentTransactionEnvelopeInput = {
    contract: ActionContract;
    policyDecision: PolicyDecision;
    greenlight?: Greenlight | null;
    gateAttempt?: GatewayCheckAttempt | null;
    mutationAttempt?: MutationAttempt | null;
    receipt?: Receipt | null;
    proofGaps?: ProofGap[];
    refusals?: Refusal[];
    reconciliations?: SurfaceOperationReconciliation[];
    credentialResolutionEvidence?: CredentialResolutionEvidence[];
    ledger?: IdempotencyLedgerEntry | null;
    recoveryRefs?: string[];
    isolationRefs?: string[];
    authorityCertificates?: Array<{
        authorityCertificateId: string;
        terminal: {
            actionContractId: string;
        };
    }>;
    receiptExportRef?: string | null;
};
export declare function projectAgentTransactionEnvelope(input: AgentTransactionEnvelopeInput): Promise<AgentTransactionEnvelopeProjection>;
export declare function projectIdempotencyRecovery(input: {
    contract: ActionContract;
    ledger: IdempotencyLedgerEntry | null;
}): Promise<IdempotencyRecoveryProjection>;
export declare function projectReceiptTimeline(input: {
    receipt: Receipt;
    events: ContractStreamEvent[];
    missingEventCount: number;
    reconciliations: SurfaceOperationReconciliation[];
}): ReceiptTimelineProjection;
export declare function projectProtectedPathInstallHealth(input: {
    contract: ActionContract;
    gateway: GatewayRegistryEntry | null;
    posture: StoredProtocolRecord<ProtectedPathPosture> | null;
    now: string;
}): ProtectedPathInstallHealthProjection;
