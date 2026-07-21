import type { JsonValue } from "../../../../foundation/schema-core";
import { type AuthorityPointerGuard, type AuthorityPointerMutation, type AuthoritySourceRecord, type AuthoritySourceScope, type CanonicalUtcMillisecondInstant } from "../../../../store/authority-source";
import type { StoredProtocolRecord } from "../../../../store/port";
import { type ActionContract } from "../../../action-contract/schemas";
import { type OperatingEnvelope } from "../../../catalog-envelope";
import { type ProtocolRecord } from "../../../object-registry";
import { type ProofGap } from "../../../proof-gap";
import { type Refusal } from "../../../refusal";
import { type Greenlight, type PolicyDecision } from "../../types";
import { type PolicyAdmissionAttemptBinding } from "./source-schemas";
import { type AggregateAdmissionSnapshot } from "../snapshot";
export type PolicyAdmissionCommittedOutcome = Readonly<{
    decision: PolicyDecision;
    greenlight: Greenlight | null;
    refusal: Refusal | null;
    proofGap: ProofGap | null;
}>;
export type PolicyAdmissionSourceCommandBase = Readonly<{
    attemptBinding: PolicyAdmissionAttemptBinding;
    attemptDigest: `sha256:${string}`;
    aggregateSnapshot: AggregateAdmissionSnapshot;
    aggregateSnapshotDigest: `sha256:${string}`;
    contractRecord: StoredProtocolRecord<ActionContract>;
    envelopeRecord: StoredProtocolRecord<OperatingEnvelope>;
    policyInput: JsonValue;
    transitionRequestContextRecord: ProtocolRecord | null;
    isolationGuards: readonly AuthorityPointerGuard[];
    isolationSnapshotDigest: `sha256:${string}`;
    temporalNotBefore: CanonicalUtcMillisecondInstant;
    temporalNotAfter: CanonicalUtcMillisecondInstant;
}>;
export type PolicyAdmissionSourceOutcome = Readonly<{
    kind: "greenlight";
    decision: PolicyDecision;
    greenlight: Greenlight;
}> | Readonly<{
    kind: "refusal";
    decision: PolicyDecision;
    refusal: Refusal;
}> | Readonly<{
    kind: "proof_gap";
    decision: PolicyDecision;
    proofGap: ProofGap;
}> | Readonly<{
    kind: "review_required";
    decision: PolicyDecision;
}>;
export type PolicyAdmissionSourceCommand = PolicyAdmissionSourceCommandBase & Readonly<{
    outcome: PolicyAdmissionSourceOutcome;
}>;
export type NormalizedPolicyAdmissionSourceCommand = PolicyAdmissionSourceCommandBase & PolicyAdmissionCommittedOutcome;
export type RecoveredPolicyAdmissionOutcomeRecords = Readonly<{
    outcome: PolicyAdmissionCommittedOutcome;
    records: readonly StoredProtocolRecord[];
    transitionRequestContextRecord: ProtocolRecord | null;
}>;
export type PolicyAdmissionLogicalOutcomeQuery = Readonly<{
    attemptDigest: `sha256:${string}`;
    contractRecord: StoredProtocolRecord<ActionContract>;
}>;
export declare function normalizePolicyAdmissionLogicalOutcomeQuery(query: PolicyAdmissionLogicalOutcomeQuery): Promise<PolicyAdmissionLogicalOutcomeQuery>;
export declare function normalizePolicyAdmissionSourceCommand(command: PolicyAdmissionSourceCommand): Promise<NormalizedPolicyAdmissionSourceCommand>;
export declare function recoverPolicyAdmissionOutcomeRecords(contract: ActionContract, values: readonly JsonValue[], policyInput: JsonValue): Promise<RecoveredPolicyAdmissionOutcomeRecords>;
export declare function parsePolicyAdmissionStoredProtocolRecord(value: unknown): Promise<StoredProtocolRecord>;
export declare function buildPositivePolicyAdmissionAuthorityV3(scope: AuthoritySourceScope, command: NormalizedPolicyAdmissionSourceCommand, transactionDigest: `sha256:${string}`, transactionHex: string): Promise<Readonly<{
    records: readonly AuthoritySourceRecord[];
    pointerMutations: readonly AuthorityPointerMutation[];
}>>;
