import { z } from "zod";
import type { CreateIsolationInput, IsolationState } from "../../protocol/areas/isolation-breaker";
import type { AuthMdRevocationEvidence, AuthMdRevocationEventKind } from "./profiles";
export declare const ApplyAuthMdCredentialLifecycleIsolationInputSchema: z.ZodObject<{
    registrationId: z.ZodString;
    protectedResource: z.ZodString;
    gatewayCredentialRefId: z.ZodString;
    gatewayCredentialRefDigest: z.ZodString;
    revocationEventKind: z.ZodEnum<{
        ambiguous: "ambiguous";
        logout_jwt: "logout_jwt";
        explicit_revocation: "explicit_revocation";
        downstream_401: "downstream_401";
        credential_expired: "credential_expired";
        metadata_drift: "metadata_drift";
    }>;
    revocationReasonCode: z.ZodString;
    providerEvent: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    logoutJwt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    downstreamStatus: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    observedAt: z.ZodString;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    isolationExpiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type ApplyAuthMdCredentialLifecycleIsolationInput = z.input<typeof ApplyAuthMdCredentialLifecycleIsolationInputSchema>;
export type AuthMdCredentialLifecycleIsolationProtocol = {
    createIsolationState(input: CreateIsolationInput): Promise<IsolationState>;
};
export type AuthMdCredentialLifecycleIsolationResult = {
    revocationEvidence: AuthMdRevocationEvidence;
    revocationEvidenceRef: string;
    isolationState: IsolationState;
    authorityCreated: false;
    futurePolicyAndGatewayUseAllowed: false;
};
export declare function applyAuthMdCredentialLifecycleIsolation(protocol: AuthMdCredentialLifecycleIsolationProtocol, inputValue: ApplyAuthMdCredentialLifecycleIsolationInput): Promise<AuthMdCredentialLifecycleIsolationResult>;
export declare function authMdIsolationStateForRevocationEvent(eventKind: AuthMdRevocationEventKind): CreateIsolationInput["state"];
