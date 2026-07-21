import { z } from "zod";
import type { ResolvedAuthorityContext } from "../../authority-context/resolver";
import { type AuthorityCommitMarker, type AuthorityPointerIdentity, type AuthorityPointerMutation, type AuthoritySourceRecord, type AuthoritySourceScope, type AuthoritySourceStore } from "../../store/authority-source";
import { type AggregateActionFamilyIdentity, type AggregateAuthorityDomainArtifact } from "./types";
import type { AggregateAuthorityObservationReader, AggregateConfigurationObservation, ResolvedAggregateConfiguration } from "./admission-observation";
declare const AggregatePostureDescriptorSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    posture: z.ZodLiteral<"required">;
    actionTypeRef: z.ZodString;
    actionTypeDigest: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    canonicalProtectedResourceScope: z.ZodString;
    allowedGateways: z.ZodArray<z.ZodObject<{
        gatewayAuthorityRef: z.ZodString;
        gatewayVersion: z.ZodString;
    }, z.core.$strict>>;
    limitQuantity: z.ZodString;
    window: z.ZodObject<{
        startsAt: z.ZodString;
        endsAt: z.ZodString;
    }, z.core.$strict>;
    handlerAuthorityRef: z.ZodString;
    handlerVersion: z.ZodString;
    canonicalizerAuthorityRef: z.ZodString;
    canonicalizerVersion: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    posture: z.ZodLiteral<"not_applicable">;
    actionTypeRef: z.ZodString;
    actionTypeDigest: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    architectureDecision: z.ZodObject<{
        ref: z.ZodString;
        digest: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>], "posture">;
type AggregatePostureDescriptor = z.infer<typeof AggregatePostureDescriptorSchema>;
export type ConfiguredAggregateConfiguration = ResolvedAggregateConfiguration & (Readonly<{
    writeStatus: "committed";
    snapshotBasis: "committed_mutation";
    writeMarker: AuthorityCommitMarker;
    configurationOwnerMarker: AuthorityCommitMarker;
    bucketOwnerMarker: AuthorityCommitMarker | null;
}> | Readonly<{
    writeStatus: "unchanged";
    snapshotBasis: "coherent_current_read";
    writeMarker: null;
    configurationOwnerMarker: AuthorityCommitMarker;
    bucketOwnerMarker: AuthorityCommitMarker | null;
}>);
export type AggregateInductionCheckpointCutover = ResolvedAggregateConfiguration & (Readonly<{
    writeStatus: "committed";
    writeMarker: AuthorityCommitMarker;
}> | Readonly<{
    writeStatus: "unchanged";
    writeMarker: null;
}>);
export type AggregateInductionCheckpointCandidate = Readonly<{
    checkpointPointer: AuthorityPointerIdentity;
    checkpointRecord: AuthoritySourceRecord;
    pointerMutation: AuthorityPointerMutation;
}>;
export declare function resolveAggregateConfiguration(input: {
    authorityStore: AggregateAuthorityObservationReader;
    authorityContext: ResolvedAuthorityContext;
    actionFamily: AggregateActionFamilyIdentity;
}): Promise<ResolvedAggregateConfiguration>;
export declare function observeAggregateAdmissionConfiguration(input: {
    authorityReader: AggregateAuthorityObservationReader;
    authorityContext: ResolvedAuthorityContext;
    actionFamily: AggregateActionFamilyIdentity;
}): Promise<AggregateConfigurationObservation>;
export declare function configureAggregatePosture(input: {
    authorityStore: AuthoritySourceStore;
    authorityContext: ResolvedAuthorityContext;
    descriptor: AggregatePostureDescriptor;
    mutationRef: string;
}): Promise<ConfiguredAggregateConfiguration>;
export declare function checkpointAggregateConfiguration(input: {
    authorityStore: AuthoritySourceStore;
    authorityContext: ResolvedAuthorityContext;
    actionFamily: AggregateActionFamilyIdentity;
    mutationRef: string;
}): Promise<AggregateInductionCheckpointCutover>;
export declare function buildAggregateInductionCheckpointCandidate(input: {
    sourceScope: AuthoritySourceScope;
    domainArtifact: AggregateAuthorityDomainArtifact;
    bucketRecord: AuthoritySourceRecord;
    predecessorCheckpointRecord: AuthoritySourceRecord | null;
    rootKind: "genesis" | "audited_cutover" | "closed_writer_successor";
}): Promise<AggregateInductionCheckpointCandidate>;
export declare function aggregateBucketPointer(domainDigest: string): AuthorityPointerIdentity;
export declare function aggregateInductionCheckpointPointer(domainDigest: string): AuthorityPointerIdentity;
export {};
