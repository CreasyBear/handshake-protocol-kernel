import { z } from "zod";
import type { TransitionRequestCallerEvidence } from "../../protocol/context/request-contexts";
import type { TransitionCallerRole } from "./caller-auth";
export declare const TransitionCallerIdentitySchema: z.ZodObject<{
    callerIdentityRef: z.ZodString;
    callerSubjectDigest: z.ZodString;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    projectId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    custodyRoles: z.ZodArray<z.ZodEnum<{
        control_plane: "control_plane";
        runtime_evidence: "runtime_evidence";
        gateway_custody: "gateway_custody";
        review_custody: "review_custody";
    }>>;
    hostedRoles: z.ZodDefault<z.ZodArray<z.ZodEnum<{
        viewer: "viewer";
        auditor: "auditor";
        operator: "operator";
        rawEvidenceReader: "rawEvidenceReader";
    }>>>;
    hostedScopes: z.ZodDefault<z.ZodArray<z.ZodEnum<{
        "evidence:redacted:read": "evidence:redacted:read";
        "evidence:raw:request": "evidence:raw:request";
        "evidence:raw:read": "evidence:raw:read";
        "evidence:export:create": "evidence:export:create";
        "evidence:retention:admin": "evidence:retention:admin";
        "hosted:readiness:read": "hosted:readiness:read";
    }>>>;
    authProviderRef: z.ZodString;
    authSessionDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    serviceCredentialDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
    revocationEpochRef: z.ZodString;
    claimsDigest: z.ZodString;
}, z.core.$strict>;
export type TransitionCallerIdentity = z.infer<typeof TransitionCallerIdentitySchema>;
export type HostedCallerVerifierInput = {
    headers: Headers;
    method: string;
    url: string;
    requiredRole: TransitionCallerRole;
    requiredRoles: readonly TransitionCallerRole[];
    routeId: string;
    routePath: string;
    now: string;
};
export type HostedCallerVerifier = {
    verify(input: HostedCallerVerifierInput): Promise<TransitionCallerIdentity>;
};
export type TransitionScope = {
    tenantId: string;
    organizationId: string;
};
export declare function parseHostedCallerIdentity(value: unknown): TransitionCallerIdentity;
export declare function assertHostedCallerRole(identity: TransitionCallerIdentity, requiredRole: TransitionCallerRole): void;
export declare function assertHostedCallerAnyRole(identity: TransitionCallerIdentity, requiredRoles: readonly TransitionCallerRole[]): void;
export declare function assertHostedCallerFresh(identity: TransitionCallerIdentity, now: string, maxIdentityAgeSeconds?: number): void;
export declare function assertHostedCallerScope(identity: TransitionCallerIdentity, scope: TransitionScope): void;
export declare function transitionCallerEvidenceFromIdentity(identity: TransitionCallerIdentity): Promise<TransitionRequestCallerEvidence>;
