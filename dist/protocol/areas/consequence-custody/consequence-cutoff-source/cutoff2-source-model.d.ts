import { type AuthorityCommitMarker, type AuthorityCommitTemporalFence, type AuthoritySourceRecord, type AuthoritySourceScope } from "../../../store/authority-source";
export type ConsequenceCutoffSourceCommandV2 = Readonly<{
    commandVersion: "consequence-cutoff-command-2";
    sourceScope: AuthoritySourceScope;
    gatewayTransactionDigest: `sha256:${string}`;
    gatewayAdmissionRecord: AuthoritySourceRecord;
    gatewayAdmissionCommit: AuthorityCommitMarker;
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export declare function prepareConsequenceCutoffSourceMutationV2(command: ConsequenceCutoffSourceCommandV2): Promise<{
    identity: Readonly<{
        mutationKind: import("../../../store/authority-record-read").AuthorityMutationKind;
        localId: string;
    }>;
    cutoffRecord: AuthoritySourceRecord;
    pointerMutations: Readonly<{
        pointer: import("../../../store/authority-record-read").AuthorityPointerIdentity;
        expected: import("../../../store/authority-record-read").AuthorityPointerExpectation;
        successor: import("../../../store/authority-record-read").AuthorityRecordWitness;
    }>[];
    requestMaterial: {
        readonly consequenceCutoffRequestVersion: "consequence-cutoff-request-2";
        readonly gatewayTransactionDigest: `sha256:${string}`;
        readonly gatewayAdmissionDigest: `sha256:${string}`;
        readonly exactConsequenceDescriptorDigest: `sha256:${string}`;
        readonly cutoffDigest: `sha256:${string}`;
    };
}>;
