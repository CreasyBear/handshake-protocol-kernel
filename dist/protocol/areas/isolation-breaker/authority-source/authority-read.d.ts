import { type AuthorityPointerGuard, type AuthorityPointerIdentity, type AuthorityRecordWitness, type AuthoritySourceRecord, type AuthoritySourceScope } from "../../../store/authority-record-read";
import type { IsolationScopeRef, ProtocolStore } from "../../../store/port";
import { type IsolationCauseSemantics } from "./authority-state-schemas";
import type { IsolationState } from "../types";
import { type IsolationAuthorityReader } from "../source-read-capability";
export type IsolationAuthoritySnapshot = Readonly<{
    states: readonly IsolationState[];
    pointerGuards: readonly AuthorityPointerGuard[];
    snapshotDigest: `sha256:${string}`;
    sourceBound: boolean;
}>;
export type IsolationAuthorityCause = Readonly<IsolationCauseSemantics & {
    causeId: string;
    causeDigest: `sha256:${string}`;
    causeRecord: AuthorityRecordWitness;
    originalResult: IsolationState;
}>;
export type IsolationAuthorityHead = Readonly<{
    pointer: AuthorityPointerIdentity;
    current: AuthoritySourceRecord | null;
    state: IsolationState | null;
    causes: readonly IsolationAuthorityCause[];
    guard: AuthorityPointerGuard;
    usesIndependentChronology: boolean;
}>;
export declare function readIsolationAuthoritySnapshot(store: ProtocolStore, scopeRefs: readonly IsolationScopeRef[]): Promise<IsolationAuthoritySnapshot>;
export declare function readIsolationAuthoritySnapshotFromSource(source: IsolationAuthorityReader, scopeRefs: readonly IsolationScopeRef[]): Promise<IsolationAuthoritySnapshot>;
export declare function isolationAuthorityGuardSetDigest(pointerGuards: readonly AuthorityPointerGuard[]): Promise<`sha256:${string}`>;
export declare function readExactIsolationHead(source: IsolationAuthorityReader, scopeRef: IsolationScopeRef): Promise<IsolationAuthorityHead>;
export declare function readIsolationAuthorityHeads(source: IsolationAuthorityReader, scopeRefs: readonly IsolationScopeRef[]): Promise<readonly IsolationAuthorityHead[]>;
export declare function isolationAuthorityPointerForScope(scopeRef: IsolationScopeRef): Promise<AuthorityPointerIdentity>;
export declare function isolationScopeDigest(scopeRef: IsolationScopeRef): Promise<`sha256:${string}`>;
export declare function sourceScope(input: Pick<IsolationScopeRef, "tenantId" | "organizationId">): AuthoritySourceScope;
export declare function authorityWitness(record: AuthoritySourceRecord): AuthorityRecordWitness;
export declare function isolationCauseDigest(scopeRef: IsolationScopeRef, cause: Pick<IsolationCauseSemantics, "state" | "reasonCode" | "reasonSummary" | "sourceDecisionRef" | "expiresAt" | "observedStreamOffsets">): Promise<`sha256:${string}`>;
export declare function isolationCauseId(scopeRef: IsolationScopeRef, sourceDecisionRef: string): Promise<string>;
export declare function strongestCause<T extends IsolationCauseSemantics & Readonly<{
    causeId: string;
}>>(causes: readonly T[]): T;
