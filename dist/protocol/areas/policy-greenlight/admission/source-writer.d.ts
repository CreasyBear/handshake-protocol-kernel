import type { JsonValue } from "../../../foundation/schema-core";
import type { StoredProtocolRecord } from "../../../store/port";
import { type AuthorityCommitMarker, type AuthorityPointerGuard, type AuthoritySourceStore, type CanonicalUtcMillisecondInstant } from "../../../store/authority-source";
import { type ActionContract } from "../../action-contract";
import { type OperatingEnvelope } from "../../catalog-envelope";
import { type ProtocolRecord } from "../../object-registry";
import { type Greenlight, type PolicyDecision } from "../types";
import { type Refusal } from "../../refusal";
import { type ProofGap } from "../../proof-gap";
import { type AggregateAdmissionSnapshot } from "./snapshot";
import { type PolicyAdmissionConflictObservation, type PolicyAdmissionAttemptBinding } from "./source-schemas";
export type PolicyAdmissionSourceStore = Pick<AuthoritySourceStore, "commitAuthorityMutation" | "readAuthorityMutation" | "readAuthorityCurrentRecords">;
export type PolicyAdmissionCommittedOutcome = Readonly<{
    decision: PolicyDecision;
    greenlight: Greenlight | null;
    refusal: Refusal | null;
    proofGap: ProofGap | null;
}>;
type PolicyAdmissionSourceCommandBase = Readonly<{
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
export type PolicyAdmissionSourceResult = Readonly<{
    status: "committed";
    marker: AuthorityCommitMarker;
    outcome: PolicyAdmissionCommittedOutcome;
    replayed: boolean;
}> | Readonly<{
    status: "aggregate_conflict" | "guard_conflict";
    conflict: PolicyAdmissionConflictObservation;
}> | Readonly<{
    status: "issuance_conflict" | "idempotency_conflict";
}> | Readonly<{
    status: "temporal_conflict" | "ambiguous" | "invalid" | "unavailable";
    reason: string;
}>;
export declare function commitPolicyAdmissionSourceCommand(store: PolicyAdmissionSourceStore, command: PolicyAdmissionSourceCommand): Promise<PolicyAdmissionSourceResult>;
export type PolicyAdmissionLogicalOutcomeQuery = Readonly<{
    attemptDigest: `sha256:${string}`;
    contractRecord: StoredProtocolRecord<ActionContract>;
}>;
export type PolicyAdmissionLogicalOutcomeRead = Readonly<{
    status: "absent";
}> | Extract<PolicyAdmissionSourceResult, {
    status: "committed";
}> | Readonly<{
    status: "ambiguous" | "unavailable";
    reason: string;
}>;
export declare function readPolicyAdmissionLogicalOutcome(store: PolicyAdmissionSourceStore, query: PolicyAdmissionLogicalOutcomeQuery): Promise<PolicyAdmissionLogicalOutcomeRead>;
export {};
