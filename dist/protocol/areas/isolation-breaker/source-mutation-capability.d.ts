import type { ProjectionOutboxSourceCommit } from "../../events/outbox";
import type { AuthoritySourceMutationResult, AuthoritySourceScope, AuthoritySourceStore, CurrentIsolationTransitionAuthoritySourceMutation } from "../../store/authority-source";
import type { ProtocolStore } from "../../store/port";
import type { IsolationState } from "./types";
import { type IsolationAuthorityReader } from "./source-read-capability";
export type IsolationProjectionCommand = Readonly<{
    scope: AuthoritySourceScope;
    sourceCommit: ProjectionOutboxSourceCommit;
    state: IsolationState;
}>;
export type IsolationProjectionReconciler = (command: IsolationProjectionCommand) => Promise<void>;
export type IsolationTransitionStore = Readonly<Pick<AuthoritySourceStore, "commitCurrentIsolationTransitionAuthorityMutation" | "readAuthorityMutation"> & IsolationAuthorityReader & {
    reconcileProjection: IsolationProjectionReconciler;
}>;
export type IsolationTransitionSource = Readonly<Omit<IsolationTransitionStore, "commitCurrentIsolationTransitionAuthorityMutation">>;
export type IsolationCauseAdditionCommit = object;
export type IsolationCauseClearanceCommit = object;
export type PreparedIsolationMutationSourceBinding = object;
export declare function registerIsolationClearanceRoot(root: object): void;
export declare function bindIsolationMutationSource(root: object, carrier: ProtocolStore, source: IsolationTransitionStore): void;
export declare function prepareIsolationMutationSourceBinding(root: object, carrier: ProtocolStore, source: IsolationTransitionStore): PreparedIsolationMutationSourceBinding;
export declare function commitIsolationMutationSourceBinding(prepared: PreparedIsolationMutationSourceBinding): void;
export declare function observeIsolationTransitionSource(store: ProtocolStore): IsolationTransitionSource | null;
export declare function prepareIsolationCauseAdditionCommit(mutation: CurrentIsolationTransitionAuthoritySourceMutation): IsolationCauseAdditionCommit;
export declare function commitIsolationCauseAddition(source: IsolationTransitionSource, candidate: IsolationCauseAdditionCommit): Promise<AuthoritySourceMutationResult>;
export declare function prepareIsolationCauseClearanceCommit(root: object, mutation: CurrentIsolationTransitionAuthoritySourceMutation): IsolationCauseClearanceCommit;
export declare function commitIsolationCauseClearance(source: IsolationTransitionSource, candidate: IsolationCauseClearanceCommit): Promise<AuthoritySourceMutationResult>;
