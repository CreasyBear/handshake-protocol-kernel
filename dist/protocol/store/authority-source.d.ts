import type { JsonValue } from "../foundation/schema-core";
import { type AuthoritySourceWriteGrammar } from "./authority-grammar";
export { AUTHORITY_SOURCE_WRITE_GRAMMARS } from "./authority-grammar";
export type { AuthoritySourceWriteGrammar } from "./authority-grammar";
import { type AuthorityProjectionIdentity, type AuthorityProjectionIntent, type AuthorityProjectionKind } from "./authority-projection-intent";
export { AUTHORITY_PROJECTION_KINDS, authorityProjectionIdentity, buildAuthorityProjectionIntent, } from "./authority-projection-intent";
export type { AuthorityProjectionIdentity, AuthorityProjectionIntent, AuthorityProjectionKind, } from "./authority-projection-intent";
import { type AuthorityCurrentRecordReader, type AuthorityCommitIdentity, type AuthorityCommitMarker, type AuthorityDigest, type AuthorityManifestVersion, type AuthorityMutationKind, type AuthorityPointerCommitEvidence, type AuthorityPointerExpectation, type AuthorityPointerGuard, type AuthorityPointerIdentity, type AuthorityPointerTransition, type AuthorityRecordIdentity, type AuthorityRecordKind, type AuthorityRecordWitness, type AuthoritySourceRecord, type AuthoritySourceScope } from "./authority-record-read";
export { AUTHORITY_MANIFEST_VERSIONS, AUTHORITY_MUTATION_KINDS, AUTHORITY_POINTER_KINDS, AUTHORITY_RECORD_KINDS, authorityPointerIdentity, buildAuthoritySourceRecord, isCanonicalAuthoritySourceRecord, normalizeAuthorityCurrentRecordReadRequest, sameAuthorityWitness, } from "./authority-record-read";
export type { AuthorityCommitIdentity, AuthorityCommitMarker, AuthorityCurrentRecordRead, AuthorityCurrentRecordReader, AuthorityCurrentRecordReadResult, AuthorityDigest, AuthorityManifestVersion, AuthorityMutationKind, AuthorityPointerCommitEvidence, AuthorityPointerExpectation, AuthorityPointerGuard, AuthorityPointerIdentity, AuthorityPointerKind, AuthorityPointerTransition, AuthorityRecordIdentity, AuthorityRecordKind, AuthorityRecordReadStore, AuthorityRecordWitness, AuthoritySourceRecord, AuthoritySourceScope, NormalizedAuthorityCurrentRecordReadRequest, } from "./authority-record-read";
export declare const AUTHORITY_SOURCE_CLOCK_MIN_EPOCH_MS = 0;
export declare const AUTHORITY_SOURCE_CLOCK_MAX_EPOCH_MS = 253402300799999;
export declare const AUTHORITY_RECORD_REFERENCE_ROLES: readonly ["record_member", "record_predecessor", "pointer_expected", "pointer_successor", "projection_source"];
export declare const AUTHORITY_MUTATION_READBACK_AMBIGUITY_REASONS: readonly ["conflicting_duplicate_rows", "artifacts_without_marker", "marker_artifact_mismatch", "malformed_snapshot", "post_attempt_absence_unproven", "post_attempt_readback_unavailable"];
export type AuthorityRecordReferenceRole = (typeof AUTHORITY_RECORD_REFERENCE_ROLES)[number];
export type CanonicalUtcMillisecondInstant = `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;
export type AuthorityPointerMutation = Readonly<{
    pointer: AuthorityPointerIdentity;
    expected: AuthorityPointerExpectation;
    successor: AuthorityRecordWitness;
}>;
export type AuthorityCommitTemporalFence = Readonly<{
    kind: "store_time_strictly_before";
    notAfter: CanonicalUtcMillisecondInstant;
}> | Readonly<{
    kind: "store_time_in_half_open_interval";
    notBefore: CanonicalUtcMillisecondInstant;
    notAfter: CanonicalUtcMillisecondInstant;
}>;
export type AuthorityCommitTemporalRelation = "strictly_before_not_after" | "before_not_before" | "inside_half_open_interval" | "at_or_after_not_after";
export type AuthorityCommitTemporalEvidence = Readonly<{
    scope: AuthoritySourceScope;
    commit: AuthorityCommitIdentity;
    fence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
    clockProfile: "authority-source-utc-epoch-ms-1";
    observedAtEpochMs: number;
    observedAt: CanonicalUtcMillisecondInstant;
}>;
export type AuthorityLegacyCommitTemporalEvidence = Readonly<{
    scope: AuthoritySourceScope;
    commit: AuthorityCommitIdentity;
    fence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_strictly_before";
    }>;
    clockProfile: "authority-source-utc-epoch-ms-1";
    observedAtEpochMs: number;
    observedAt: CanonicalUtcMillisecondInstant;
}>;
export type AuthorityStoredCommitTemporalEvidence = AuthorityLegacyCommitTemporalEvidence | AuthorityCommitTemporalEvidence;
type AuthoritySourceMutationFields = Readonly<{
    scope: AuthoritySourceScope;
    identity: AuthorityCommitIdentity;
    requestDigest: AuthorityDigest;
    records: readonly AuthoritySourceRecord[];
    pointerGuards: readonly AuthorityPointerGuard[];
    pointerMutations: readonly AuthorityPointerMutation[];
    projectionIntents: readonly AuthorityProjectionIntent[];
}>;
export type HistoricalAuthoritySourceMutation = AuthoritySourceMutationFields;
export type TemporalAuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    temporalFence: AuthorityCommitTemporalFence;
}>;
export type CurrentPolicyAuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "policy-admission-codec-3";
    temporalFence?: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type HistoricalGatewayCodec1AuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "gateway-admission-codec-1";
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type CurrentGatewayAuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "gateway-admission-codec-2";
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type HistoricalConsequenceCutoffCodec1AuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "consequence-cutoff-codec-1";
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type CurrentConsequenceCutoffAuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "consequence-cutoff-codec-2";
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type HistoricalTerminalObservationCodec1AuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "terminal-observation-codec-1";
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type CurrentTerminalObservationAuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "terminal-observation-codec-2";
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type HistoricalIsolationTransitionCodec1AuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "isolation-transition-codec-1";
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type CurrentIsolationTransitionAuthoritySourceMutation = AuthoritySourceMutationFields & Readonly<{
    writerGrammar: "isolation-transition-codec-2";
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type AuthoritySourceMutation = HistoricalAuthoritySourceMutation | TemporalAuthoritySourceMutation | CurrentPolicyAuthoritySourceMutation | HistoricalGatewayCodec1AuthoritySourceMutation | CurrentGatewayAuthoritySourceMutation | HistoricalConsequenceCutoffCodec1AuthoritySourceMutation | CurrentConsequenceCutoffAuthoritySourceMutation | HistoricalTerminalObservationCodec1AuthoritySourceMutation | CurrentTerminalObservationAuthoritySourceMutation | HistoricalIsolationTransitionCodec1AuthoritySourceMutation | CurrentIsolationTransitionAuthoritySourceMutation;
export type CurrentPolicyAuthorityCommitCapability = Readonly<{
    readonly kind: "current-policy-authority-commit";
}>;
export type CurrentGatewayAuthorityCommitCapability = Readonly<{
    readonly kind: "current-gateway-authority-commit";
}>;
export declare function createCurrentGatewayAuthorityCommitCapability(): CurrentGatewayAuthorityCommitCapability;
export declare function isCurrentGatewayAuthorityCommitCapability(value: unknown): value is CurrentGatewayAuthorityCommitCapability;
export type CurrentConsequenceCutoffAuthorityCommitCapability = Readonly<{
    readonly kind: "current-consequence-cutoff-authority-commit";
}>;
export declare function createCurrentConsequenceCutoffAuthorityCommitCapability(): CurrentConsequenceCutoffAuthorityCommitCapability;
export declare function isCurrentConsequenceCutoffAuthorityCommitCapability(value: unknown): value is CurrentConsequenceCutoffAuthorityCommitCapability;
export type CurrentTerminalObservationAuthorityCommitCapability = Readonly<{
    readonly kind: "current-terminal-observation-authority-commit";
}>;
export declare function createCurrentTerminalObservationAuthorityCommitCapability(): CurrentTerminalObservationAuthorityCommitCapability;
export declare function isCurrentTerminalObservationAuthorityCommitCapability(value: unknown): value is CurrentTerminalObservationAuthorityCommitCapability;
export type CurrentIsolationTransitionAuthorityCommitCapability = Readonly<{
    readonly kind: "current-isolation-transition-authority-commit";
}>;
export declare function createCurrentIsolationTransitionAuthorityCommitCapability(): CurrentIsolationTransitionAuthorityCommitCapability;
export declare function isCurrentIsolationTransitionAuthorityCommitCapability(value: unknown): value is CurrentIsolationTransitionAuthorityCommitCapability;
export type AuthorityPointerGuardEvidence = Readonly<{
    scope: AuthoritySourceScope;
    commit: AuthorityCommitIdentity;
    pointer: AuthorityPointerIdentity;
    expected: AuthorityPointerExpectation;
}>;
export type AuthorityCommitRecordReference = Readonly<{
    role: AuthorityRecordReferenceRole;
    record: AuthorityRecordIdentity;
}>;
export type AuthorityMutationReadbackAmbiguityReason = (typeof AUTHORITY_MUTATION_READBACK_AMBIGUITY_REASONS)[number];
export type AuthoritySourceMutationResult = Readonly<{
    status: "committed";
    marker: AuthorityCommitMarker;
}> | Readonly<{
    status: "committed";
    marker: AuthorityCommitMarker;
    temporalEvidence: AuthorityCommitTemporalEvidence;
}> | Readonly<{
    status: "temporal_conflict";
    fence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
    relation: "before_not_before" | "at_or_after_not_after";
    clockProfile: "authority-source-utc-epoch-ms-1";
    observedAtEpochMs: number;
    observedAt: CanonicalUtcMillisecondInstant;
}> | Readonly<{
    status: "serialization_conflict";
    contentionKind: "temporal_realm";
}> | Readonly<{
    status: "cas_conflict";
    pointer: AuthorityPointerIdentity;
    current: AuthorityRecordWitness | null;
}> | Readonly<{
    status: "guard_conflict";
    pointer: AuthorityPointerIdentity;
    current: AuthorityRecordWitness | null;
}> | Readonly<{
    status: "binding_conflict";
    domain: "commit";
    identity: AuthorityCommitIdentity;
}> | Readonly<{
    status: "binding_conflict";
    domain: "record";
    identity: AuthorityRecordIdentity;
}> | Readonly<{
    status: "binding_conflict";
    domain: "projection";
    identity: AuthorityProjectionIdentity;
}> | Readonly<{
    status: "ambiguous_readback";
    reason: AuthorityMutationReadbackAmbiguityReason;
}> | Readonly<{
    status: "invalid_mutation";
    reason: string;
}> | Readonly<{
    status: "unavailable";
    reason: string;
}>;
export type AuthorityMutationReadbackResult = Readonly<{
    status: "committed";
    marker: AuthorityCommitMarker;
}> | Readonly<{
    status: "committed";
    marker: AuthorityCommitMarker;
    temporalEvidence: AuthorityCommitTemporalEvidence;
}> | Readonly<{
    status: "mutation_absent";
}> | Readonly<{
    status: "binding_conflict";
    domain: "commit";
    identity: AuthorityCommitIdentity;
}> | Readonly<{
    status: "binding_conflict";
    domain: "record";
    identity: AuthorityRecordIdentity;
}> | Readonly<{
    status: "binding_conflict";
    domain: "projection";
    identity: AuthorityProjectionIdentity;
}> | Readonly<{
    status: "ambiguous_readback";
    reason: AuthorityMutationReadbackAmbiguityReason;
}> | Readonly<{
    status: "unavailable";
    reason: "readback_unavailable";
}> | Readonly<{
    status: "invalid_mutation";
    reason: string;
}>;
export type AuthorityStoredProjectionIntent = Readonly<{
    commit: AuthorityCommitIdentity;
    intent: AuthorityProjectionIntent;
}>;
export type AuthorityProjectionOutboxItem = Readonly<{
    marker: AuthorityCommitMarker;
    sourceRecord: AuthoritySourceRecord;
    intent: AuthorityProjectionIntent;
}>;
export type AuthorityProjectionOutboxCandidate = Readonly<{
    sourceCommit: AuthorityCommitIdentity;
    projection: AuthorityProjectionIdentity;
}>;
export type AuthorityProjectionOutboxScanQuery = Readonly<{
    projectionKind: AuthorityProjectionKind;
    after: AuthorityProjectionIdentity | null;
    limit: number;
}>;
export type AuthorityProjectionOutboxScanResult = Readonly<{
    status: "available";
    candidates: readonly AuthorityProjectionOutboxCandidate[];
    nextAfter: AuthorityProjectionIdentity | null;
}> | Readonly<{
    status: "unavailable";
    reason: "invalid_query" | "incoherent_source" | "readback_unavailable";
}>;
export type AuthorityProjectionOutboxReadResult = Readonly<{
    status: "available";
    item: AuthorityProjectionOutboxItem;
}> | Readonly<{
    status: "absent";
}> | Readonly<{
    status: "unavailable";
    reason: "invalid_query" | "incoherent_source" | "readback_unavailable";
}>;
export type NormalizedAuthorityProjectionOutboxScanRequest = Readonly<{
    scope: AuthoritySourceScope;
    query: AuthorityProjectionOutboxScanQuery;
}>;
export type NormalizedAuthorityProjectionOutboxReadRequest = Readonly<{
    scope: AuthoritySourceScope;
    sourceCommit: AuthorityCommitIdentity;
    projection: AuthorityProjectionIdentity;
}>;
export type AuthorityMutationReadbackSnapshot = Readonly<{
    markers: readonly AuthorityCommitMarker[];
    records: readonly AuthoritySourceRecord[];
    recordRefs: readonly AuthorityCommitRecordReference[];
    pointerGuards: readonly AuthorityPointerGuardEvidence[];
    pointerTransitions: readonly AuthorityPointerTransition[];
    projectionIntents: readonly AuthorityStoredProjectionIntent[];
    temporalEvidence: readonly AuthorityStoredCommitTemporalEvidence[];
}>;
export type AuthorityCurrentPointerRead = Readonly<{
    pointer: AuthorityPointerIdentity;
    current: AuthorityRecordWitness | null;
}>;
export type AuthorityCurrentPointerReadResult = Readonly<{
    status: "available";
    pointers: readonly AuthorityCurrentPointerRead[];
}> | Readonly<{
    status: "unavailable";
    reason: "readback_unavailable";
}>;
export type AuthorityPointerTransitionReadResult = Readonly<{
    status: "available";
    evidence: AuthorityPointerCommitEvidence | null;
}> | Readonly<{
    status: "unavailable";
    reason: "invalid_query" | "incoherent_source" | "readback_unavailable";
}>;
export type NormalizedAuthorityPointerTransitionReadRequest = Readonly<{
    scope: AuthoritySourceScope;
    pointer: AuthorityPointerIdentity;
    successorVersion: number;
}>;
export interface AuthoritySourceStore extends AuthorityCurrentRecordReader {
    commitAuthorityMutation(mutation: AuthoritySourceMutation): Promise<AuthoritySourceMutationResult>;
    commitCurrentPolicyAuthorityMutation(capability: CurrentPolicyAuthorityCommitCapability, mutation: CurrentPolicyAuthoritySourceMutation): Promise<AuthoritySourceMutationResult>;
    commitCurrentGatewayAuthorityMutation(capability: CurrentGatewayAuthorityCommitCapability, mutation: CurrentGatewayAuthoritySourceMutation): Promise<AuthoritySourceMutationResult>;
    commitCurrentConsequenceCutoffAuthorityMutation(capability: CurrentConsequenceCutoffAuthorityCommitCapability, mutation: CurrentConsequenceCutoffAuthoritySourceMutation): Promise<AuthoritySourceMutationResult>;
    commitCurrentTerminalObservationAuthorityMutation(capability: CurrentTerminalObservationAuthorityCommitCapability, mutation: CurrentTerminalObservationAuthoritySourceMutation): Promise<AuthoritySourceMutationResult>;
    commitCurrentIsolationTransitionAuthorityMutation(capability: CurrentIsolationTransitionAuthorityCommitCapability, mutation: CurrentIsolationTransitionAuthoritySourceMutation): Promise<AuthoritySourceMutationResult>;
    readAuthorityMutation(mutation: AuthoritySourceMutation): Promise<AuthorityMutationReadbackResult>;
    readAuthorityCurrentPointers(scope: AuthoritySourceScope, pointers: readonly AuthorityPointerIdentity[]): Promise<AuthorityCurrentPointerReadResult>;
    readAuthorityPointerTransition(scope: AuthoritySourceScope, pointer: AuthorityPointerIdentity, successorVersion: number): Promise<AuthorityPointerTransitionReadResult>;
    getAuthorityCommit(scope: AuthoritySourceScope, identity: AuthorityCommitIdentity): Promise<AuthorityCommitMarker | null>;
    getAuthoritySourceRecord(scope: AuthoritySourceScope, identity: AuthorityRecordIdentity): Promise<AuthoritySourceRecord | null>;
    listAuthorityRecordCommitRefs(scope: AuthoritySourceScope, identity: AuthorityRecordIdentity): Promise<AuthorityCommitIdentity[]>;
    listAuthorityCommitRecordRefs(scope: AuthoritySourceScope, identity: AuthorityCommitIdentity): Promise<AuthorityCommitRecordReference[]>;
    getAuthorityCurrentPointer(scope: AuthoritySourceScope, identity: AuthorityPointerIdentity): Promise<AuthorityRecordWitness | null>;
    listAuthorityPointerTransitions(scope: AuthoritySourceScope, identity: AuthorityPointerIdentity): Promise<AuthorityPointerTransition[]>;
    listAuthorityProjectionIntents(scope: AuthoritySourceScope, identity: AuthorityCommitIdentity): Promise<AuthorityProjectionIntent[]>;
}
export interface AuthorityProjectionOutboxStore extends AuthoritySourceStore {
    readAuthorityProjectionOutboxItem(scope: AuthoritySourceScope, sourceCommit: AuthorityCommitIdentity, projection: AuthorityProjectionIdentity): Promise<AuthorityProjectionOutboxReadResult>;
    scanAuthorityProjectionOutbox(scope: AuthoritySourceScope, query: AuthorityProjectionOutboxScanQuery): Promise<AuthorityProjectionOutboxScanResult>;
}
export type NormalizedAuthoritySourceRecord = AuthoritySourceRecord & Readonly<{
    payloadCanonicalJson: string;
}>;
export type NormalizedAuthorityProjectionIntent = AuthorityProjectionIntent & Readonly<{
    descriptorCanonicalJson: string;
}>;
export type NormalizedAuthoritySourceMutation = Readonly<{
    scope: AuthoritySourceScope;
    identity: AuthorityCommitIdentity;
    requestDigest: AuthorityDigest;
    writerGrammar: AuthoritySourceWriteGrammar | null;
    temporalFence: AuthorityCommitTemporalFence | null;
    manifestVersion: AuthorityManifestVersion;
    manifestDigest: AuthorityDigest;
    records: readonly NormalizedAuthoritySourceRecord[];
    recordRefs: readonly AuthorityCommitRecordReference[];
    pointerGuards: readonly AuthorityPointerGuard[];
    pointerMutations: readonly AuthorityPointerMutation[];
    projectionIntents: readonly NormalizedAuthorityProjectionIntent[];
}>;
export type NormalizeAuthoritySourceMutationResult = Readonly<{
    ok: true;
    mutation: NormalizedAuthoritySourceMutation;
}> | Readonly<{
    ok: false;
    reason: string;
}>;
export declare function authorityCommitIdentity(mutationKind: AuthorityMutationKind, localId: string): AuthorityCommitIdentity;
export declare function authorityRecordIdentity(recordKind: AuthorityRecordKind, localId: string): AuthorityRecordIdentity;
export declare function authoritySourceRequestDigest(scope: AuthoritySourceScope, identity: AuthorityCommitIdentity, request: JsonValue, pointerGuards?: readonly AuthorityPointerGuard[]): Promise<AuthorityDigest>;
export declare function authoritySourceTemporalRequestDigest(scope: AuthoritySourceScope, identity: AuthorityCommitIdentity, request: JsonValue, pointerGuards: readonly AuthorityPointerGuard[], temporalFence: AuthorityCommitTemporalFence): Promise<AuthorityDigest>;
export declare function authorityCommitTemporalFenceAllows(fence: AuthorityCommitTemporalFence, observedAtEpochMs: number): boolean;
export declare function authorityCommitTemporalFenceRelation(fence: AuthorityCommitTemporalFence, observedAtEpochMs: number): AuthorityCommitTemporalRelation;
export declare function normalizeAuthoritySourceMutation(mutation: AuthoritySourceMutation): Promise<NormalizeAuthoritySourceMutationResult>;
export declare function isExactAuthorityCommittedResultForMutation(value: unknown, mutation: NormalizedAuthoritySourceMutation): value is Extract<AuthoritySourceMutationResult, {
    status: "committed";
}>;
export declare function isExactAuthorityNonCommittedResultForMutation(value: unknown, mutation: NormalizedAuthoritySourceMutation): value is Exclude<AuthoritySourceMutationResult, {
    status: "committed";
}>;
export declare function isExactAuthorityRecordWitness(value: unknown): value is AuthorityRecordWitness;
export declare function classifyAuthorityMutationReadback(mutation: NormalizedAuthoritySourceMutation, snapshot: AuthorityMutationReadbackSnapshot): AuthorityMutationReadbackResult;
export declare function authorityPointerSuccessorMatchesRecord(pointerMutation: AuthorityPointerMutation, record: AuthoritySourceRecord): boolean;
export declare function authorityScopeKey(scope: AuthoritySourceScope): string;
export declare function authorityCommitKey(scope: AuthoritySourceScope, identity: AuthorityCommitIdentity): string;
export declare function authorityRecordKey(scope: AuthoritySourceScope, identity: AuthorityRecordIdentity): string;
export declare function authorityPointerKey(scope: AuthoritySourceScope, identity: AuthorityPointerIdentity): string;
export declare function authorityProjectionKey(scope: AuthoritySourceScope, identity: AuthorityProjectionIdentity): string;
export declare function compareAuthorityIdentityText(left: string, right: string): number;
export declare function compareAuthorityProjectionScanIdentity(left: AuthorityProjectionIdentity, right: AuthorityProjectionIdentity): number;
export declare function normalizeAuthorityProjectionOutboxScanRequest(scope: unknown, query: unknown): Readonly<{
    ok: true;
    request: NormalizedAuthorityProjectionOutboxScanRequest;
}> | Readonly<{
    ok: false;
}>;
export declare function normalizeAuthorityProjectionOutboxReadRequest(scope: unknown, sourceCommit: unknown, projection: unknown): Readonly<{
    ok: true;
    request: NormalizedAuthorityProjectionOutboxReadRequest;
}> | Readonly<{
    ok: false;
}>;
export declare function normalizeAuthorityPointerTransitionReadRequest(scope: unknown, pointer: unknown, successorVersion: unknown): Readonly<{
    ok: true;
    request: NormalizedAuthorityPointerTransitionReadRequest;
}> | Readonly<{
    ok: false;
}>;
