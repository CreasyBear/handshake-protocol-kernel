import type { TransitionCommitState, TransitionErrorRetryability } from "../../protocol/foundation/errors";
export type HttpErrorCodePhase = "auth" | "hosted_admission" | "request_context" | "request_body" | "scope_resolution" | "record_read" | "store_resolution" | "error_envelope" | "client";
export type HttpTransitionErrorCodeEntry = {
    code: string;
    phase: HttpErrorCodePhase;
    retryability: TransitionErrorRetryability;
    commitState: TransitionCommitState;
    publicSafe: boolean;
};
export declare const httpTransitionErrorCodes: readonly [HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry, HttpTransitionErrorCodeEntry];
export declare const httpTransitionErrorCodeValues: string[];
export declare function isRegisteredHttpTransitionErrorCode(candidate: string): boolean;
