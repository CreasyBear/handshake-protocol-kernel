import type { IsolationClearanceTarget } from "../authority-source";
export type IsolationClearanceEvidenceToken = object;
export type IsolationClearanceResolverEvidence = Readonly<{
    target: IsolationClearanceTarget;
    resolverAuthorityRef: string;
    resolverAuthorityDigest: `sha256:${string}`;
    resolverVersion: string;
    evidenceRef: string;
    evidenceDigest: `sha256:${string}`;
    resolvedAt: string;
}>;
export declare function registerIsolationClearanceEvidenceRoot(root: object): void;
export declare function registerIsolationClearanceEvidence(root: object, evidence: IsolationClearanceResolverEvidence): IsolationClearanceEvidenceToken;
export declare function readIsolationClearanceEvidence(token: unknown): IsolationClearanceResolverEvidence | null;
