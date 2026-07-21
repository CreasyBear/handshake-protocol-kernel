import { type AuthoritySourceRecord } from "../../../store/authority-source";
import type { ConsequenceCutoffSourceCommand } from "../types";
export declare function prepareConsequenceCutoffSourceMutation(command: ConsequenceCutoffSourceCommand): Promise<{
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
        readonly consequenceCutoffRequestVersion: "consequence-cutoff-request-1";
        readonly gatewayTransactionDigest: `sha256:${string}`;
        readonly gatewayAdmissionDigest: `sha256:${string}`;
        readonly cutoffDigest: `sha256:${string}`;
    };
}>;
