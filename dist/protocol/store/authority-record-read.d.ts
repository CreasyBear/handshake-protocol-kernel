import type { JsonValue } from "../foundation/schema-core";
export declare const AUTHORITY_RECORD_KINDS: readonly ["authority_binding", "authority_state", "authority_evidence", "projection_state"];
export declare const AUTHORITY_POINTER_KINDS: readonly ["authority_context", "configuration_state", "aggregate_authority", "idempotency_claim", "operation_claim", "effect_lineage", "effect_observation", "isolation_state", "access_lease", "access_usage", "projection_delivery"];
export declare const AUTHORITY_MUTATION_KINDS: readonly ["configuration_write", "policy_admission", "gateway_admission", "lifecycle_transition", "isolation_transition", "projection_delivery", "effect_observation"];
export declare const AUTHORITY_MANIFEST_VERSIONS: readonly ["authority-source-manifest-1", "authority-source-manifest-2", "authority-source-manifest-3", "authority-source-manifest-4", "authority-source-manifest-5", "authority-source-manifest-6", "authority-source-manifest-7", "authority-source-manifest-8", "authority-source-manifest-9", "authority-source-manifest-10", "authority-source-manifest-11", "authority-source-manifest-12", "authority-source-manifest-13"];
export type AuthorityMutationKind = (typeof AUTHORITY_MUTATION_KINDS)[number];
export type AuthorityManifestVersion = (typeof AUTHORITY_MANIFEST_VERSIONS)[number];
export type AuthorityRecordKind = (typeof AUTHORITY_RECORD_KINDS)[number];
export type AuthorityPointerKind = (typeof AUTHORITY_POINTER_KINDS)[number];
export type AuthorityDigest = `sha256:${string}`;
export type AuthoritySourceScope = Readonly<{
    tenantId: string;
    organizationId: string;
}>;
export type AuthorityCommitIdentity = Readonly<{
    mutationKind: AuthorityMutationKind;
    localId: string;
}>;
export type AuthorityRecordIdentity = Readonly<{
    recordKind: AuthorityRecordKind;
    localId: string;
}>;
export type AuthorityPointerIdentity = Readonly<{
    pointerKind: AuthorityPointerKind;
    localId: string;
}>;
export type AuthorityRecordWitness = Readonly<{
    record: AuthorityRecordIdentity;
    semanticState: string;
    version: number;
    digest: AuthorityDigest;
}>;
export type AuthoritySourceRecord = AuthorityRecordWitness & Readonly<{
    payload: JsonValue;
    predecessor: AuthorityRecordWitness | null;
}>;
export type AuthorityPointerExpectation = Readonly<{
    kind: "absent";
}> | Readonly<{
    kind: "exact";
    witness: AuthorityRecordWitness;
}>;
export type AuthorityPointerGuard = Readonly<{
    pointer: AuthorityPointerIdentity;
    expected: AuthorityPointerExpectation;
}>;
export type AuthorityCommitMarker = Readonly<{
    scope: AuthoritySourceScope;
    identity: AuthorityCommitIdentity;
    manifestVersion: AuthorityManifestVersion;
    requestDigest: AuthorityDigest;
    manifestDigest: AuthorityDigest;
}>;
export type AuthorityPointerTransition = Readonly<{
    scope: AuthoritySourceScope;
    commit: AuthorityCommitIdentity;
    pointer: AuthorityPointerIdentity;
    expected: AuthorityPointerExpectation;
    successor: AuthorityRecordWitness;
}>;
export type AuthorityPointerCommitEvidence = Readonly<{
    marker: AuthorityCommitMarker;
    transition: AuthorityPointerTransition;
}>;
export type AuthorityCurrentRecordRead = Readonly<{
    pointer: AuthorityPointerIdentity;
    current: null;
    commitEvidence: null;
}> | Readonly<{
    pointer: AuthorityPointerIdentity;
    current: AuthoritySourceRecord;
    commitEvidence: AuthorityPointerCommitEvidence;
}>;
export type AuthorityCurrentRecordReadResult = Readonly<{
    status: "available";
    records: readonly AuthorityCurrentRecordRead[];
}> | Readonly<{
    status: "unavailable";
    reason: "invalid_query" | "incoherent_source" | "readback_unavailable";
}>;
export type NormalizedAuthorityCurrentRecordReadRequest = Readonly<{
    scope: AuthoritySourceScope;
    pointers: readonly AuthorityPointerIdentity[];
}>;
export interface AuthorityCurrentRecordReader {
    readAuthorityCurrentRecords(scope: AuthoritySourceScope, pointers: readonly AuthorityPointerIdentity[]): Promise<AuthorityCurrentRecordReadResult>;
}
export interface AuthorityRecordReadStore extends AuthorityCurrentRecordReader {
    getAuthoritySourceRecord(scope: AuthoritySourceScope, record: AuthorityRecordIdentity): Promise<AuthoritySourceRecord | null>;
}
export declare function authorityPointerIdentity(pointerKind: AuthorityPointerKind, localId: string): AuthorityPointerIdentity;
export declare function buildAuthoritySourceRecord(input: {
    scope: AuthoritySourceScope;
    record: AuthorityRecordIdentity;
    semanticState: string;
    version: number;
    payload: JsonValue;
    predecessor: AuthorityRecordWitness | null;
}): Promise<AuthoritySourceRecord>;
export declare function isCanonicalAuthoritySourceRecord(scope: unknown, sourceRecord: unknown): Promise<boolean>;
export declare function sameAuthorityWitness(left: AuthorityRecordWitness | null, right: AuthorityRecordWitness | null): boolean;
export declare function normalizeAuthorityCurrentRecordReadRequest(scope: unknown, pointers: unknown): Readonly<{
    ok: true;
    request: NormalizedAuthorityCurrentRecordReadRequest;
}> | Readonly<{
    ok: false;
}>;
export declare function validateScope(scope: AuthoritySourceScope): void;
export declare function validateRecord(record: AuthoritySourceRecord): void;
export declare function validateRecordIdentity(identity: AuthorityRecordIdentity): void;
export declare function validatePointerIdentity(identity: AuthorityPointerIdentity): void;
export declare function validatePointerGuard(pointerGuard: AuthorityPointerGuard): void;
export declare function validatePointerExpectation(expectation: AuthorityPointerExpectation): void;
export declare function validateWitness(witness: AuthorityRecordWitness, field: string): void;
export declare function validateNullableWitness(witness: unknown, field: string): asserts witness is AuthorityRecordWitness | null;
export declare function validateSemanticState(value: unknown): asserts value is string;
export declare function validateVersion(value: unknown, field: string): asserts value is number;
export declare function validateRecordLineage(version: number, predecessor: AuthorityRecordWitness | null): void;
export declare function validateDigest(value: unknown, field: string): asserts value is AuthorityDigest;
export declare function validateJsonValue(value: unknown, field: string): asserts value is JsonValue;
export declare function canonicalJsonValue(value: JsonValue): JsonValue;
export declare function requireClosedKind<T extends string>(label: string, value: unknown, allowed: readonly T[]): asserts value is T;
export declare function requireLocalId(label: string, value: unknown): asserts value is string;
export declare function isWellFormedUnicode(value: string): boolean;
export declare function requireExactObject(value: unknown, field: string, expectedKeys: readonly string[]): asserts value is Record<string, unknown>;
export declare function requirePlainDataObject(value: unknown, field: string): Record<string, PropertyDescriptor & {
    value: unknown;
}>;
export declare function validateDenseArray(value: unknown, field: string): asserts value is readonly unknown[];
export declare function appendArrayValue<T>(target: T[], value: T): void;
export declare function authoritySourceRecordDigest(input: {
    scope: AuthoritySourceScope;
    record: AuthorityRecordIdentity;
    semanticState: string;
    version: number;
    payload: JsonValue;
    predecessor: AuthorityRecordWitness | null;
}): Promise<AuthorityDigest>;
