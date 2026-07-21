import { type AuthorityCurrentRecordRead, type AuthoritySourceRecord } from "../../../../store/authority-source";
import type { StoredProtocolRecord } from "../../../../store/port";
import type { ActionContract } from "../../../action-contract";
import { type PolicyAdmissionCommittedOutcome } from "./source-model";
export type PolicyAdmissionCodec2Recovered = Readonly<{
    marker: Extract<AuthorityCurrentRecordRead, {
        current: AuthoritySourceRecord;
    }>["commitEvidence"]["marker"];
    outcome: PolicyAdmissionCommittedOutcome;
}>;
/**
 * Historical codec-2 reconstruction only. This module cannot build a new
 * mutation and imports no v1 projection-intent builder.
 */
export declare function recoverPolicyAdmissionLogicalOutcomeV2(input: {
    contractRecord: StoredProtocolRecord<ActionContract>;
    attemptDigest: `sha256:${string}`;
    current: Extract<AuthorityCurrentRecordRead, {
        current: AuthoritySourceRecord;
    }>;
}): Promise<PolicyAdmissionCodec2Recovered>;
