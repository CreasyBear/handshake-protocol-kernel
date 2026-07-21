import type { JsonValue } from "../../../foundation/schema-core";
import { type AggregateAuthorityBindingArtifact, type AggregateAuthorityDomainArtifact, type AggregateExposureBucketState } from "../../aggregate-authority";
import { type AuthorityCommitMarker, type AuthorityRecordWitness, type AuthoritySourceRecord, type AuthoritySourceScope } from "../../../store/authority-source";
import type { TerminalObservationState } from "./terminal-observation";
import { type IsolationTransitionSource, type PreparedIsolationCauseAdditionRecords } from "../../isolation-breaker/index";
export type TerminalSourceCommand = Readonly<{
    sourceScope: AuthoritySourceScope;
    gatewayTransactionDigest: `sha256:${string}`;
    cutoffRecord: AuthoritySourceRecord;
    cutoffCommit: AuthorityCommitMarker;
    observation: TerminalObservationState;
    aggregateDomainArtifact: AggregateAuthorityDomainArtifact;
    aggregateBindingArtifact: AggregateAuthorityBindingArtifact;
    aggregateBucketRecord: AuthoritySourceRecord;
    aggregateCheckpointRecord: AuthoritySourceRecord;
    aggregateBucketState: AggregateExposureBucketState;
    isolationSource: Pick<IsolationTransitionSource, "readAuthorityCurrentRecords" | "getAuthoritySourceRecord">;
}>;
export declare function prepareTerminalSourceMutation(command: TerminalSourceCommand): Promise<{
    identity: Readonly<{
        mutationKind: import("../../../store/authority-record-read").AuthorityMutationKind;
        localId: string;
    }>;
    terminalRecord: AuthoritySourceRecord;
    reservationRecord: AuthoritySourceRecord;
    bucketRecord: AuthoritySourceRecord;
    checkpointRecord: AuthoritySourceRecord;
    isolation: PreparedIsolationCauseAdditionRecords | null;
    pointerMutations: Readonly<{
        pointer: import("../../../store/authority-record-read").AuthorityPointerIdentity;
        expected: import("../../../store/authority-record-read").AuthorityPointerExpectation;
        successor: AuthorityRecordWitness;
    }>[];
    temporalFence: JsonValue | undefined;
    requestMaterial: {
        readonly terminalObservationRequestVersion: "terminal-observation-request-2";
        readonly gatewayTransactionDigest: `sha256:${string}`;
        readonly cutoffDigest: `sha256:${string}`;
        readonly terminalDigest: `sha256:${string}`;
        readonly reservationSuccessorDigest: `sha256:${string}`;
        readonly bucketSuccessorDigest: `sha256:${string}`;
        readonly checkpointSuccessorDigest: `sha256:${string}`;
        readonly observationDigest: `sha256:${string}`;
        readonly exactConsequenceDescriptorDigest: `sha256:${string}`;
        readonly isolationCauseDigest: `sha256:${string}` | null;
        readonly isolationHeadDigest: `sha256:${string}` | null;
    };
}>;
