/**
 * Caller typed-payload material is comparison evidence only. Until host
 * composition supplies an identity-sealed trusted observation, its presence
 * cannot unlock signing.
 */
export declare function assertCallerTypedPayloadEvidenceIsNonAuthoritative(evidence: unknown | undefined): void;
