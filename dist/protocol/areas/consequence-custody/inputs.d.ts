import type { AuthorityCommitMarker, AuthorityCommitTemporalFence, AuthoritySourceRecord, AuthoritySourceScope } from "../../store/authority-source";
export type ConsequenceCutoffEffectBinding = Readonly<{
    adapterRef: string;
    adapterDigest: `sha256:${string}`;
    effectOperationRef: string;
    payloadDigest: `sha256:${string}`;
}>;
export type ConsequenceCutoffSourceCommand = Readonly<{
    commandVersion: "consequence-cutoff-command-1";
    sourceScope: AuthoritySourceScope;
    gatewayTransactionDigest: `sha256:${string}`;
    gatewayAdmissionRecord: AuthoritySourceRecord;
    gatewayAdmissionCommit: AuthorityCommitMarker;
    effectBinding: ConsequenceCutoffEffectBinding;
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
