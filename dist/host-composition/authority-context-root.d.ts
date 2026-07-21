import { type HostedCallerVerifier, type HostedCallerVerifierInput, type TransitionCallerIdentity } from "../hosted-admission/hosted-caller-identity";
import { type AuthorityContextCapability, type AuthorityPolicyEvaluatorDescriptor as BoundAuthorityPolicyEvaluatorDescriptor } from "../protocol/authority-context/capability";
import type { AuthorityCurrentRecordReader } from "../protocol/store/authority-source";
import type { ProtocolStore } from "../protocol/store/port";
export type AuthorityPolicyEvaluatorDescriptor = BoundAuthorityPolicyEvaluatorDescriptor;
export type AuthorityContextHost = Readonly<{
    policyEvaluatorBinding: Readonly<{
        ref: string;
        digest: `sha256:${string}`;
    }>;
    verifyHostedCaller(input: HostedCallerVerifierInput): Promise<TransitionCallerIdentity>;
    createProtocolStoreCarrier(store: ProtocolStore): ProtocolStore;
    bindProtocolStoreCarrier(input: {
        carrier: ProtocolStore;
        authorityReader: AuthorityCurrentRecordReader;
        verifiedCaller: TransitionCallerIdentity;
    }): void;
    composeProtocolStore(input: {
        store: ProtocolStore;
        authorityReader: AuthorityCurrentRecordReader;
        verifiedCaller: TransitionCallerIdentity;
    }): ProtocolStore;
}>;
export declare function createAuthorityContextHost(options: {
    verifier: HostedCallerVerifier;
    verifierAuthorityRef: string;
    maxIdentityAgeSeconds?: number;
    policyEvaluator?: AuthorityPolicyEvaluatorDescriptor;
}): AuthorityContextHost;
export declare function attestAuthorityContextHostCarrier(host: AuthorityContextHost, carrier: ProtocolStore, rawStore: ProtocolStore & AuthorityCurrentRecordReader): AuthorityContextCapability;
export declare function assertAuthorityContextHostIdentity(host: AuthorityContextHost): void;
