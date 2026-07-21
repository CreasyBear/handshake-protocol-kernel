import { type AuthorityPointerGuard, type AuthorityPointerIdentity, type AuthorityRecordWitness, type AuthoritySourceMutation, type AuthoritySourceRecord, type AuthoritySourceScope } from "../../../store/authority-source";
import type { ProjectionOutboxSourceCommit } from "../../../events/outbox";
import type { IsolationScopeRef, ProtocolStore } from "../../../store/port";
import { type CreateIsolationInput, type IsolationState } from "../types";
import { type IsolationProjectionCommand, type IsolationTransitionSource } from "../source-mutation-capability";
import type { IsolationAuthorityReader } from "../source-read-capability";
import { type IsolationAuthorityCause } from "./authority-read";
export type IsolationClearanceTarget = Readonly<{
    scope: AuthoritySourceScope;
    scopeRef: IsolationScopeRef;
    headRecord: AuthoritySourceRecord;
    headWitness: AuthorityRecordWitness;
    currentState: IsolationState;
    targetCause: IsolationAuthorityCause;
    causes: readonly IsolationAuthorityCause[];
}>;
export type PreparedIsolationCauseClearanceSuccessor = Readonly<{
    state: IsolationState;
    headRecord: AuthoritySourceRecord;
    survivingCauses: readonly IsolationAuthorityCause[];
}>;
export type PreparedIsolationCauseAddition = Readonly<{
    scope: AuthoritySourceScope;
    state: IsolationState;
    causeId: string;
    causeDigest: `sha256:${string}`;
    records: readonly [AuthoritySourceRecord, AuthoritySourceRecord];
    pointerMutation: Readonly<{
        pointer: AuthorityPointerIdentity;
        expected: AuthorityPointerGuard["expected"];
        successor: AuthorityRecordWitness;
    }>;
    projectionIntents: AuthoritySourceMutation["projectionIntents"];
}>;
export type PreparedIsolationCauseAdditionRecords = Omit<PreparedIsolationCauseAddition, "projectionIntents">;
export declare function commitIsolationAuthorityState(store: ProtocolStore, inputValue: CreateIsolationInput, now: string, isolationStateId?: string): Promise<Readonly<{
    state: IsolationState;
    replayed: boolean;
}> | null>;
export declare function prepareIsolationCauseAddition(input: Readonly<{
    source: IsolationTransitionSource;
    sourceCommit: ProjectionOutboxSourceCommit;
    isolation: CreateIsolationInput;
    effectiveAt: string;
    isolationStateId: string;
}>): Promise<PreparedIsolationCauseAddition>;
export declare function prepareIsolationCauseAdditionRecords(input: Readonly<{
    source: IsolationAuthorityReader;
    isolation: CreateIsolationInput;
    effectiveAt: string;
    isolationStateId: string;
}>): Promise<PreparedIsolationCauseAdditionRecords>;
export declare function isolationProjectionCommandFor(inputValue: CreateIsolationInput, state: IsolationState): Promise<IsolationProjectionCommand>;
export declare function readIsolationClearanceTarget(source: IsolationAuthorityReader, scopeRef: IsolationScopeRef, causeId: string): Promise<IsolationClearanceTarget>;
export declare function prepareIsolationCauseClearanceSuccessor(input: Readonly<{
    target: IsolationClearanceTarget;
    resolvedAt: string;
    isolationStateId: string;
}>): Promise<PreparedIsolationCauseClearanceSuccessor>;
export declare function commitPreparedIsolationAuthorityState(store: ProtocolStore, state: IsolationState): Promise<Readonly<{
    state: IsolationState;
    replayed: boolean;
}> | null>;
