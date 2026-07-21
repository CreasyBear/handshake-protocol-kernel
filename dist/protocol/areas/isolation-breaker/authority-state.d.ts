import { type AuthorityPointerGuard, type AuthorityPointerIdentity } from "../../store/authority-source";
import type { IsolationScopeRef, ProtocolStore } from "../../store/port";
import { type CreateIsolationInput, type IsolationState } from "./types";
import { type IsolationProjectionCommand } from "./source-capability";
export type IsolationAuthoritySnapshot = Readonly<{
    states: readonly IsolationState[];
    pointerGuards: readonly AuthorityPointerGuard[];
    snapshotDigest: `sha256:${string}`;
    sourceBound: boolean;
}>;
export declare function readIsolationAuthoritySnapshot(store: ProtocolStore, scopeRefs: readonly IsolationScopeRef[]): Promise<IsolationAuthoritySnapshot>;
export declare function isolationAuthorityGuardSetDigest(pointerGuards: readonly AuthorityPointerGuard[]): Promise<`sha256:${string}`>;
export declare function commitIsolationAuthorityState(store: ProtocolStore, inputValue: CreateIsolationInput, now: string, isolationStateId?: string): Promise<Readonly<{
    state: IsolationState;
    replayed: boolean;
}> | null>;
export declare function isolationProjectionCommandFor(inputValue: CreateIsolationInput, state: IsolationState): Promise<IsolationProjectionCommand>;
export declare function commitPreparedIsolationAuthorityState(store: ProtocolStore, state: IsolationState): Promise<Readonly<{
    state: IsolationState;
    replayed: boolean;
}> | null>;
export declare function isolationAuthorityPointerForScope(scopeRef: IsolationScopeRef): Promise<AuthorityPointerIdentity>;
