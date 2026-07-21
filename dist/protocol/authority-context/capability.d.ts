import type { ActionContract } from "../areas/action-contract";
import type { OperatingEnvelope } from "../areas/catalog-envelope";
import type { IsolationState } from "../areas/isolation-breaker";
import type { PolicyEvaluationResult } from "../areas/policy-greenlight/policy";
import type { AuthorityCurrentRecordReader } from "../store/authority-source";
import type { ProtocolStore } from "../store/port";
export type VerifiedAuthorityCallerSnapshot = Readonly<{
    callerIdentityRef: string;
    callerSubjectDigest: `sha256:${string}`;
    tenantId: string;
    organizationId: string;
    authProviderRef: string;
    claimsDigest: `sha256:${string}`;
    revocationEpochRef: string;
    issuedAt: string;
    expiresAt: string;
}>;
export type AuthorityPolicyEvaluatorDescriptor = Readonly<{
    ref: string;
    digest: `sha256:${string}`;
    evaluate(contract: ActionContract, envelope: OperatingEnvelope, isolationStates: IsolationState[], now: string): PolicyEvaluationResult;
}>;
export type AuthorityContextCapability = Readonly<{
    authorityReader: AuthorityCurrentRecordReader;
    verifierAuthorityRef: string;
    verifiedCaller: VerifiedAuthorityCallerSnapshot;
    policyEvaluator: AuthorityPolicyEvaluatorDescriptor;
}>;
export declare function registerAuthorityContextRoot(root: object): void;
export declare function createAuthorityContextStoreCarrier(root: object, hostIdentity: object, store: ProtocolStore): ProtocolStore;
export declare function bindAuthorityContextStoreCarrier(root: object, hostIdentity: object, carrier: ProtocolStore, input: {
    authorityReader: AuthorityCurrentRecordReader;
    authorityReaderCapture?: AuthorityCurrentRecordReader;
    verifierAuthorityRef: string;
    verifiedCallerObject: object;
    verifiedCaller: VerifiedAuthorityCallerSnapshot;
    policyEvaluator: AuthorityPolicyEvaluatorDescriptor;
}): void;
export declare function requireAuthorityContextCapability(store: ProtocolStore): AuthorityContextCapability;
export declare function attestAuthorityContextStoreCarrier(root: object, hostIdentity: object, carrier: ProtocolStore, rawStore: ProtocolStore & AuthorityCurrentRecordReader): AuthorityContextCapability;
