import { z } from "zod";
import type { AggregateAdmissionHeadProof, AggregateConfigurationHeadProof, ResolvedAggregateConfiguration } from "../../aggregate-authority";
import { type AuthorityPointerGuard } from "../../../store/authority-source";
import type { CanonicalResourceMembership } from "./resource-membership";
export type AggregateAdmissionSnapshot = Readonly<{
    posture: "required";
    contextGuard: AuthorityPointerGuard;
    configurationGuard: AuthorityPointerGuard;
    bucketFence: AuthorityPointerGuard;
    checkpointFence: AuthorityPointerGuard;
    configuration: ResolvedAggregateConfiguration;
    configurationHeadProof: AggregateConfigurationHeadProof;
    admissionHeadProof: AggregateAdmissionHeadProof;
    resourceMembership: CanonicalResourceMembership;
}> | Readonly<{
    posture: "not_applicable";
    contextGuard: AuthorityPointerGuard;
    configurationGuard: AuthorityPointerGuard;
    bucketFence: AuthorityPointerGuard;
    checkpointFence: AuthorityPointerGuard;
    architectureDecision: Readonly<{
        ref: string;
        digest: `sha256:${string}`;
    }>;
    configurationHeadProof: AggregateConfigurationHeadProof;
    resourceMembership: CanonicalResourceMembership;
}> | Readonly<{
    posture: "missing";
    contextGuard: AuthorityPointerGuard;
    configurationGuard: AuthorityPointerGuard;
    bucketFence: AuthorityPointerGuard;
    checkpointFence: AuthorityPointerGuard;
    resourceMembership: CanonicalResourceMembership;
}>;
export declare const AggregateAdmissionSnapshotSchema: z.ZodType<AggregateAdmissionSnapshot>;
