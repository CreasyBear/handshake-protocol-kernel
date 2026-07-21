import type { IsolationTransitionStore } from "../../protocol/areas/isolation-breaker/source-capability";
export type AttestedIsolationTransitionSource = IsolationTransitionStore;
export declare function captureIsolationStoreAttestationIfComplete(value: object): AttestedIsolationTransitionSource | null;
export declare function requireAttestedIsolationTransitionSource(value: object): AttestedIsolationTransitionSource;
