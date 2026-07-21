import { type AuthorityCommitMarker, type AuthorityCurrentRecordRead, type AuthorityProjectionIntent, type AuthoritySourceRecord, type AuthoritySourceScope, type CurrentPolicyAuthoritySourceMutation } from "../../../../store/authority-source";
import type { StoredProtocolRecord } from "../../../../store/port";
import type { ActionContract } from "../../../action-contract";
import type { NormalizedPolicyAdmissionSourceCommand, PolicyAdmissionCommittedOutcome } from "./source-model";
export type BuiltPolicyAdmissionMutationV3 = Readonly<{
    mutation: CurrentPolicyAuthoritySourceMutation;
    transactionDigest: `sha256:${string}`;
}>;
export type PolicyAdmissionCodec3ReplayStore = Readonly<{
    listAuthorityProjectionIntents(scope: AuthoritySourceScope, sourceCommit: AuthorityCommitMarker["identity"]): Promise<readonly AuthorityProjectionIntent[]>;
}>;
export type PolicyAdmissionCodec3Recovered = Readonly<{
    marker: AuthorityCommitMarker;
    outcome: PolicyAdmissionCommittedOutcome;
}>;
export declare function buildPolicyAdmissionMutationV3(command: NormalizedPolicyAdmissionSourceCommand): Promise<BuiltPolicyAdmissionMutationV3>;
export declare function recoverPolicyAdmissionLogicalOutcomeV3(input: {
    store: PolicyAdmissionCodec3ReplayStore;
    contractRecord: StoredProtocolRecord<ActionContract>;
    attemptDigest: `sha256:${string}`;
    current: Extract<AuthorityCurrentRecordRead, {
        current: AuthoritySourceRecord;
    }>;
    isCanonicalSourceRecord(scope: AuthoritySourceScope, record: AuthoritySourceRecord): Promise<boolean>;
}): Promise<PolicyAdmissionCodec3Recovered>;
