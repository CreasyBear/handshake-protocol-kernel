import type { IsolationScopeRef, IsolationState } from "../../protocol/store/port";
export interface IsolationCache {
    get(scopeRef: IsolationScopeRef): Promise<IsolationState | null>;
    put(state: IsolationState): Promise<void>;
}
export declare class NoopIsolationCache implements IsolationCache {
    get(): Promise<IsolationState | null>;
    put(): Promise<void>;
}
export declare class KvIsolationCache implements IsolationCache {
    private readonly kv;
    constructor(kv: KVNamespace);
    get(scopeRef: IsolationScopeRef): Promise<IsolationState | null>;
    put(state: IsolationState): Promise<void>;
}
export declare function isolationCacheKey(scopeRef: IsolationScopeRef): string;
