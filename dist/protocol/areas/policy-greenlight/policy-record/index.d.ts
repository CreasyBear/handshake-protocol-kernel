import type { ActionContract } from "../../action-contract";
import { type IdempotencyLedgerEntry } from "../../idempotency-ledger";
import type { OperatingEnvelope } from "../../catalog-envelope";
import type { EventDescriptor } from "../../../events/chains";
import type { ProtocolRecorder } from "../../../events/records";
import type { ProtectedPathPosture } from "../../protected-path-posture";
import { type ProofGap } from "../../proof-gap";
import { type Refusal } from "../../refusal";
import type { StoredProtocolRecord } from "../../../store/port";
import type { ProtocolRecord } from "../../object-registry";
import { type Greenlight, type PolicyDecision } from "../types";
import type { EvaluatePolicyInputSchema } from "../types";
import type { CanonicalUtcMillisecondInstant } from "../../../store/authority-source";
type ParsedEvaluatePolicyInput = ReturnType<typeof EvaluatePolicyInputSchema.parse>;
type PolicyDecisionValue = {
    decision: PolicyDecision["decision"];
    reasonCode: string;
    reason: string;
    matchedRuleIds: string[];
};
export type PolicyCommitPlan = {
    contract: ActionContract;
    decision: PolicyDecision;
    greenlight: Greenlight | null;
    idempotencyLedgerEntry: IdempotencyLedgerEntry | null;
    now: string;
};
export type PolicyCommitResult = {
    status: "committed";
    refusal: Refusal | null;
    proofGap: ProofGap | null;
} | {
    status: "greenlight_issuance_conflict";
    refusal: null;
    proofGap: null;
} | {
    status: "idempotency_ledger_conflict";
    refusal: null;
    proofGap: null;
};
export type PreparedPolicyEvaluationArtifacts = Readonly<{
    protocolRecords: readonly ProtocolRecord[];
    eventDescriptors: readonly EventDescriptor[];
    refusal: Refusal | null;
    proofGap: ProofGap | null;
}>;
export type PolicyEvaluationOutcomeArtifacts = Readonly<{
    contract: ActionContract;
    decision: PolicyDecision;
    greenlight: Greenlight | null;
    refusal: Refusal | null;
    proofGap: ProofGap | null;
    idempotencyLedgerEntry: IdempotencyLedgerEntry | null;
}>;
export declare function buildPolicyEvaluationEventDescriptors(artifacts: PolicyEvaluationOutcomeArtifacts): EventDescriptor[];
export declare function buildPolicyDecision(input: ParsedEvaluatePolicyInput, contract: ActionContract, envelope: OperatingEnvelope, decisionValue: PolicyDecisionValue, policyInputDigest: `sha256:${string}`, isolationSnapshot: string, now: string, policyDecisionId?: string, expiresAt?: string): Promise<PolicyDecision>;
export declare function buildGreenlight(contract: ActionContract, decision: PolicyDecision, now: string, protectedPathPosture: StoredProtocolRecord<ProtectedPathPosture> | null, idempotencyLedgerKeyDigest: `sha256:${string}`, idempotencyKey?: string, typedCommitmentBinding?: {
    requiredTypedCommitmentRefs: string[];
    requiredTypedCommitmentSetDigest: string | null;
}, greenlightId?: string, temporalFence?: Readonly<{
    notBefore: CanonicalUtcMillisecondInstant;
    notAfter: CanonicalUtcMillisecondInstant;
}>): Greenlight;
export declare function commitPolicyEvaluation(recorder: ProtocolRecorder, plan: PolicyCommitPlan): Promise<PolicyCommitResult>;
export declare function preparePolicyEvaluationArtifacts(plan: PolicyCommitPlan): Promise<PreparedPolicyEvaluationArtifacts>;
export declare function buildPolicyProofGap(contract: ActionContract, decision: PolicyDecision, now: string): Promise<ProofGap>;
export {};
