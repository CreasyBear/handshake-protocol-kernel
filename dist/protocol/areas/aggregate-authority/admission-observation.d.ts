import type { ResolvedAuthorityContext } from "../../authority-context/resolver";
import type { AuthorityCommitMarker, AuthorityPointerGuard, AuthorityPointerIdentity, AuthorityPointerTransition, AuthorityRecordWitness, AuthoritySourceRecord, AuthoritySourceScope, AuthoritySourceStore } from "../../store/authority-source";
import type { AggregateActionFamilyIdentity, AggregateAuthorityBindingArtifact, AggregateAuthorityLocator, AggregateExposureBucketState } from "./types";
export type AggregateArchitectureDecision = Readonly<{
    ref: string;
    digest: `sha256:${string}`;
}>;
export type AggregateAuthorityObservationReader = Pick<AuthoritySourceStore, "getAuthorityCommit" | "getAuthorityCurrentPointer" | "getAuthoritySourceRecord" | "listAuthorityCommitRecordRefs" | "listAuthorityRecordCommitRefs" | "readAuthorityPointerTransition" | "readAuthorityCurrentRecords">;
export type ResolvedAggregateConfiguration = Readonly<{
    posture: "required" | "not_applicable";
    sourceScope: AuthoritySourceScope;
    actionFamily: AggregateActionFamilyIdentity;
    familyDigest: string;
    domainDigest: string;
    actionTypeDigest: string;
    locator: AggregateAuthorityLocator;
    locatorDigest: string;
    configurationPointer: AuthorityPointerIdentity;
    bucketPointer: AuthorityPointerIdentity;
    checkpointPointer: AuthorityPointerIdentity;
    configurationRecord: AuthoritySourceRecord;
    bucketRecord: AuthoritySourceRecord | null;
    checkpointRecord: AuthoritySourceRecord | null;
    bindingArtifact: AggregateAuthorityBindingArtifact | null;
    bucketState: AggregateExposureBucketState | null;
    architectureDecision: AggregateArchitectureDecision | null;
}>;
export type AggregateConfigurationHeadProof = Readonly<{
    proofFormat: "aggregate-configuration-head-proof-1";
    validationBasis: "exact-configuration-writer-transition";
    recordWitness: AuthorityRecordWitness;
    pointerTransition: AuthorityPointerTransition;
    commitMarker: AuthorityCommitMarker;
}>;
export type AggregateBucketCheckpointCommitProof = Readonly<{
    marker: AuthorityCommitMarker;
    bucketTransition: AuthorityPointerTransition;
    checkpointTransition: AuthorityPointerTransition;
}>;
export type AggregateAdmissionHeadProof = Readonly<{
    proofFormat: "aggregate-admission-head-proof-2";
    validationBasis: "constant-size-two-generation-induction-under-closed-writer-tcb";
    writerProfile: "aggregate-bucket-writer-profile-1";
    headRecordWitness: AuthorityRecordWitness;
    predecessorRecordWitness: AuthorityRecordWitness | null;
    headBindingRecordWitness: AuthorityRecordWitness;
    predecessorBindingRecordWitness: AuthorityRecordWitness | null;
    checkpointRecordWitness: AuthorityRecordWitness;
    predecessorCheckpointRecordWitness: AuthorityRecordWitness | null;
    headCommit: AggregateBucketCheckpointCommitProof;
    predecessorCommit: AggregateBucketCheckpointCommitProof | null;
}>;
export type AggregateConfigurationObservation = Readonly<{
    contextGuard: AuthorityPointerGuard;
    configurationGuard: AuthorityPointerGuard;
    bucketFence: AuthorityPointerGuard;
    checkpointFence: AuthorityPointerGuard;
    configuration: ResolvedAggregateConfiguration | null;
    configurationHeadProof: AggregateConfigurationHeadProof | null;
    admissionHeadProof: AggregateAdmissionHeadProof | null;
}>;
export type AggregateAdmissionConfigurationObserver = (input: {
    authorityReader: AggregateAuthorityObservationReader;
    authorityContext: ResolvedAuthorityContext;
    actionFamily: AggregateActionFamilyIdentity;
}) => Promise<AggregateConfigurationObservation>;
