import type { Context } from "hono";
import { type TransitionErrorContext } from "../errors/transition-error-envelope";
export type TransitionCallerRole = "control_plane" | "runtime_evidence" | "gateway_custody" | "review_custody";
export type CallerAuthTokens = Partial<Record<TransitionCallerRole, string>>;
export type CallerAuthWorkerBindings = {
    HANDSHAKE_CONTROL_PLANE_TOKEN?: string;
    HANDSHAKE_RUNTIME_EVIDENCE_TOKEN?: string;
    HANDSHAKE_GATEWAY_CUSTODY_TOKEN?: string;
    HANDSHAKE_REVIEW_CUSTODY_TOKEN?: string;
};
export declare function authorizeTransitionCaller(c: Context<{
    Bindings: CallerAuthWorkerBindings;
}>, configuredTokens: CallerAuthTokens | undefined, role: TransitionCallerRole, context?: TransitionErrorContext): Response | null;
export declare function authorizeTransitionCallerForAny(c: Context<{
    Bindings: CallerAuthWorkerBindings;
}>, configuredTokens: CallerAuthTokens | undefined, roles: readonly TransitionCallerRole[], context?: TransitionErrorContext): Response | null;
export declare function transitionCallerSecuritySchemeName(role: TransitionCallerRole): string;
