import { type IsolationClearanceEvidenceToken } from "../../protocol/areas/isolation-breaker/clearance";
import type { IsolationClearanceTarget } from "../../protocol/areas/isolation-breaker/authority-source";
export type IsolationClearanceResolverHost = object;
export type IsolationClearanceResolution = Readonly<{
    status: "resolved";
    evidenceRef: string;
    evidenceDigest: `sha256:${string}`;
    resolvedAt: string;
}>;
type ResolverState = Readonly<{
    resolverAuthorityRef: string;
    resolverAuthorityDigest: `sha256:${string}`;
    resolverVersion: string;
    resolve(target: IsolationClearanceTarget): Promise<IsolationClearanceResolution>;
}>;
export declare function createIsolationClearanceResolverHost(input: ResolverState): IsolationClearanceResolverHost;
export declare function resolveIsolationClearanceEvidence(host: IsolationClearanceResolverHost, target: IsolationClearanceTarget): Promise<IsolationClearanceEvidenceToken>;
export {};
