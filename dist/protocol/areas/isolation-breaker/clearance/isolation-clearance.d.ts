import { prepareIsolationCauseClearanceSuccessor, type IsolationClearanceTarget } from "../authority-source";
import type { IsolationClearanceEvidenceToken } from "./isolation-clearance-evidence";
import type { IsolationTransitionSource } from "../source-mutation-capability";
import { type AuthoritySourceMutationResult, type CurrentIsolationTransitionAuthoritySourceMutation } from "../../../store/authority-source";
import type { IsolationScopeRef } from "../../../store/port";
type IsolationClearanceCommitter = (source: IsolationTransitionSource, mutation: CurrentIsolationTransitionAuthoritySourceMutation) => Promise<AuthoritySourceMutationResult>;
export declare function registerIsolationClearanceCommitter(root: object, committer: IsolationClearanceCommitter): void;
export declare function prepareIsolationClearanceRequest(source: IsolationTransitionSource, scopeRef: IsolationScopeRef, causeId: string): Promise<IsolationClearanceTarget>;
export declare function clearIsolationCause(source: IsolationTransitionSource, token: IsolationClearanceEvidenceToken): Promise<Readonly<{
    state: Awaited<ReturnType<typeof prepareIsolationCauseClearanceSuccessor>>["state"];
    replayed: boolean;
}>>;
export {};
