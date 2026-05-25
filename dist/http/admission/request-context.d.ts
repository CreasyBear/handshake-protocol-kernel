import type { Context } from "hono";
import { type TransitionRequestCallerEvidence, type TransitionRequestContextDraft } from "../../protocol/context/request-contexts";
import type { TransitionCallerRole } from "./caller-auth";
export declare const HANDSHAKE_PROTOCOL_VERSION_HEADER = "x-handshake-protocol-version";
export declare const HANDSHAKE_REQUEST_IDENTITY_HEADER = "x-handshake-request-identity";
export declare const HANDSHAKE_ORIGINATING_IDENTITY_HEADER = "x-handshake-originating-identity";
export type TransitionRequestHeaderContext = Omit<TransitionRequestContextDraft, "requestDigest"> & {
    method: "POST";
};
export declare function transitionRequestHeaderContextFor(c: Context, input: {
    callerCustodyRole: TransitionCallerRole;
    callerEvidence?: TransitionRequestCallerEvidence;
    transitionName: string;
    routePattern: string;
}): Promise<TransitionRequestHeaderContext>;
export declare function transitionRequestContextDraftFor(headerContext: TransitionRequestHeaderContext, parsedBody: unknown): Promise<TransitionRequestContextDraft>;
