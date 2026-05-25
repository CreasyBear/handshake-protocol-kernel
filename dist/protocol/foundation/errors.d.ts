export type TransitionErrorRetryability = "retryable" | "terminal" | "recoverable" | "review_required" | "ambiguous";
export type TransitionCommitState = "not_started" | "not_committed" | "committed" | "unknown" | "not_applicable";
export type HandshakeProtocolErrorMetadata = {
    retryability?: TransitionErrorRetryability;
    commitState?: TransitionCommitState;
    proofRef?: string | null;
    refusalRef?: string | null;
};
export declare class HandshakeProtocolError extends Error {
    readonly code: string;
    readonly status: number;
    readonly metadata: HandshakeProtocolErrorMetadata;
    constructor(code: string, message: string, status?: number, metadata?: HandshakeProtocolErrorMetadata);
}
export declare class HandshakeAmbiguousCommitError extends HandshakeProtocolError {
    constructor(message?: string);
}
