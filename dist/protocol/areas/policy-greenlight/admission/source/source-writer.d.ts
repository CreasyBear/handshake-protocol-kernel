import { type AuthorityCommitMarker, type AuthoritySourceStore } from "../../../../store/authority-source";
import { type PolicyAdmissionConflictObservation } from "./source-schemas";
import type { PolicyAdmissionCommittedOutcome, PolicyAdmissionLogicalOutcomeQuery, PolicyAdmissionSourceCommand } from "./source-model";
export type PolicyAdmissionSourceStore = Pick<AuthoritySourceStore, "commitCurrentPolicyAuthorityMutation" | "readAuthorityMutation" | "readAuthorityCurrentRecords" | "listAuthorityProjectionIntents" | "getAuthorityCommit" | "getAuthoritySourceRecord" | "listAuthorityCommitRecordRefs">;
export type { PolicyAdmissionCommittedOutcome, PolicyAdmissionLogicalOutcomeQuery, PolicyAdmissionSourceCommand, } from "./source-model";
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
    status: "serialization_conflict";
}> | Readonly<{
    status: "temporal_conflict" | "ambiguous" | "invalid" | "unavailable";
    reason: string;
}>;
export declare function commitPolicyAdmissionSourceCommand(store: PolicyAdmissionSourceStore, command: PolicyAdmissionSourceCommand): Promise<PolicyAdmissionSourceResult>;
export type PolicyAdmissionLogicalOutcomeRead = Readonly<{
    status: "absent";
}> | Extract<PolicyAdmissionSourceResult, {
    status: "committed";
}> | Readonly<{
    status: "ambiguous" | "unavailable";
    reason: string;
}>;
export declare function readPolicyAdmissionLogicalOutcome(store: PolicyAdmissionSourceStore, query: PolicyAdmissionLogicalOutcomeQuery): Promise<PolicyAdmissionLogicalOutcomeRead>;
