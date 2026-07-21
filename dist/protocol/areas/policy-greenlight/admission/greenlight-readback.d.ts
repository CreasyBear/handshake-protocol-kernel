import { type AuthorityCurrentRecordRead, type AuthorityPointerMutation, type AuthorityPointerCommitEvidence, type AuthoritySourceRecord, type AuthoritySourceScope, type AuthoritySourceStore } from "../../../store/authority-source";
import type { StoredProtocolRecord } from "../../../store/port";
import type { ActionContract } from "../../action-contract";
import { GreenlightIssuanceSourcePayloadSchema, PolicyIdempotencyClaimSourcePayloadSchema } from "./source/source-schemas";
import type { PolicyAdmissionCommittedOutcome } from "./source/source-model";
export type CurrentPolicyGreenlightSource = Readonly<{
    issuance: Extract<AuthorityCurrentRecordRead, {
        current: AuthoritySourceRecord;
    }>;
    issuancePayload: ReturnType<typeof GreenlightIssuanceSourcePayloadSchema.parse>;
    policyIdempotency: Extract<AuthorityCurrentRecordRead, {
        current: AuthoritySourceRecord;
    }>;
    policyIdempotencyPayload: ReturnType<typeof PolicyIdempotencyClaimSourcePayloadSchema.parse>;
    contractRecord: StoredProtocolRecord<ActionContract>;
    decision: PolicyAdmissionCommittedOutcome;
}>;
export type PolicyGreenlightSourceReader = Pick<AuthoritySourceStore, "readAuthorityCurrentRecords" | "readAuthorityMutation" | "listAuthorityProjectionIntents" | "getAuthorityCommit" | "getAuthoritySourceRecord" | "listAuthorityCommitRecordRefs">;
export type ConsumedPolicyGreenlightReplay = Readonly<{
    status: "consumed";
    posture: "consumed_replay_only";
    gatewayTransactionDigest: `sha256:${string}`;
    commit: AuthorityPointerCommitEvidence["marker"];
    greenlightId: string;
    replayBinding: Readonly<{
        greenlightId: string;
        actionContractId: string;
        contractDigest: `sha256:${string}`;
        paramsDigest: `sha256:${string}`;
        idempotencyKey: string;
        issuedAt: string;
        maxUses: 1;
    }>;
}>;
export declare function resolvePolicyGreenlightSourceState(input: Readonly<{
    source: PolicyGreenlightSourceReader;
    contractRecord: StoredProtocolRecord<ActionContract>;
}>): Promise<CurrentPolicyGreenlightSource | ConsumedPolicyGreenlightReplay>;
export declare function resolveCurrentPolicyGreenlightSource(input: Readonly<{
    source: PolicyGreenlightSourceReader;
    contractRecord: StoredProtocolRecord<ActionContract>;
}>): Promise<CurrentPolicyGreenlightSource>;
export declare function buildPolicyGreenlightConsumptionArtifacts(input: Readonly<{
    sourceScope: AuthoritySourceScope;
    source: CurrentPolicyGreenlightSource;
    gatewayTransactionDigest: `sha256:${string}`;
}>): Promise<Readonly<{
    records: readonly AuthoritySourceRecord[];
    pointerMutations: readonly AuthorityPointerMutation[];
}>>;
