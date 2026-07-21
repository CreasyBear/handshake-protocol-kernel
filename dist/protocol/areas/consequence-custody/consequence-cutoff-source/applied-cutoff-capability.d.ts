import type { AuthorityCommitMarker, AuthoritySourceRecord } from "../../../store/authority-source";
export type AppliedConsequenceCutoffCapability = object;
export type AppliedConsequenceCutoffBinding = Readonly<{
    marker: AuthorityCommitMarker;
    effectOperationRef: string;
    exactConsequenceDescriptorDigest: `sha256:${string}`;
    payloadDigest: `sha256:${string}`;
}>;
export declare function mintAppliedConsequenceCutoffCapability(marker: AuthorityCommitMarker, cutoffRecord: AuthoritySourceRecord): AppliedConsequenceCutoffCapability;
export declare function consumeAppliedConsequenceCutoffCapability(capability: unknown, expected: Readonly<{
    effectOperationRef: string;
    exactConsequenceDescriptorDigest: `sha256:${string}`;
    payloadDigest: `sha256:${string}`;
}>): AppliedConsequenceCutoffBinding | null;
