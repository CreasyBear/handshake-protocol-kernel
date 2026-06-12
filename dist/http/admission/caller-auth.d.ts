import type { Context } from "hono";
import { type TransitionErrorContext } from "../errors/transition-error-envelope";
export type TransitionCallerRole = "control_plane" | "runtime_evidence" | "gateway_custody" | "review_custody";
export type CallerAuthTokens = Partial<Record<TransitionCallerRole, string>>;
export declare const LOCAL_CALLER_AUTH_POSTURE: {
    readonly authMode: "local";
    readonly custodyPosture: "role_scoped_bearer_fixture";
    readonly productionEligible: false;
    readonly requiredProductionPosture: "hosted_auth_or_external_policy_enforcement";
    readonly authorityBoundary: {
        readonly createsProductionOrgAuth: false;
        readonly createsHostedMutationAuthority: false;
        readonly createsPolicyDecision: false;
        readonly createsGreenlight: false;
        readonly performsGatewayCheck: false;
    };
    readonly nonClaims: readonly ["not_production_org_auth", "not_hosted_identity_verification", "not_rotation_or_revocation_proof", "not_external_policy_enforcement"];
};
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
