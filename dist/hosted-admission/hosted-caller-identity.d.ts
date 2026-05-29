import { z } from "zod";
import { type JsonValue, type ParticipantIdentityBinding } from "../protocol/public/schemas";
import type { TransitionRequestCallerEvidence } from "../protocol/context/request-contexts";
import type { TransitionCallerRole } from "./roles";
export declare const HostedIdentityProviderKindSchema: z.ZodEnum<{
    other: "other";
    clerk: "clerk";
    oauth_oidc: "oauth_oidc";
    cloudflare_access: "cloudflare_access";
    custom_jwt: "custom_jwt";
    service_credential: "service_credential";
    test_fixture: "test_fixture";
}>;
export type HostedIdentityProviderKind = z.infer<typeof HostedIdentityProviderKindSchema>;
export declare const HostedIdentityEvidenceInputSchema: z.ZodObject<{
    providerKind: z.ZodEnum<{
        other: "other";
        clerk: "clerk";
        oauth_oidc: "oauth_oidc";
        cloudflare_access: "cloudflare_access";
        custom_jwt: "custom_jwt";
        service_credential: "service_credential";
        test_fixture: "test_fixture";
    }>;
    authProviderRef: z.ZodString;
    callerIdentityRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    subjectRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    subjectDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    projectId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    workspaceId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
    sessionRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sessionDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    serviceCredentialRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    serviceCredentialDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    claims: z.ZodDefault<z.ZodNullable<z.ZodType<JsonValue, unknown, z.core.$ZodTypeInternals<JsonValue, unknown>>>>;
    claimsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    membershipRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
    revocationEpochRef: z.ZodString;
}, z.core.$strict>;
export type HostedIdentityEvidenceInput = z.input<typeof HostedIdentityEvidenceInputSchema>;
export type HostedIdentityEvidence = z.infer<typeof HostedIdentityEvidenceInputSchema>;
export declare const TransitionCallerIdentitySchema: z.ZodObject<{
    callerIdentityRef: z.ZodString;
    callerSubjectDigest: z.ZodString;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    projectId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    workspaceId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
export declare const HostedParticipantIdentityBindingInputSchema: z.ZodObject<{
    participantRole: z.ZodEnum<{
        principal: "principal";
        agent: "agent";
    }>;
    participantRef: z.ZodString;
    verificationEvidenceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    bindingEvidenceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type HostedParticipantIdentityBindingInput = z.input<typeof HostedParticipantIdentityBindingInputSchema>;
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
    projectId?: string | null;
    workspaceId?: string | null;
};
export declare function transitionCallerIdentityFromHostedEvidence(value: HostedIdentityEvidenceInput): Promise<TransitionCallerIdentity>;
export declare function participantIdentityBindingFromHostedCallerIdentity(identityValue: TransitionCallerIdentity, inputValue: HostedParticipantIdentityBindingInput): ParticipantIdentityBinding;
export declare function parseHostedCallerIdentity(value: unknown): TransitionCallerIdentity;
export declare function assertHostedCallerRole(identity: TransitionCallerIdentity, requiredRole: TransitionCallerRole): void;
export declare function assertHostedCallerAnyRole(identity: TransitionCallerIdentity, requiredRoles: readonly TransitionCallerRole[]): void;
export declare function assertHostedCallerFresh(identity: TransitionCallerIdentity, now: string, maxIdentityAgeSeconds?: number): void;
export declare function assertHostedCallerScope(identity: TransitionCallerIdentity, scope: TransitionScope): void;
export declare function transitionCallerEvidenceFromIdentity(identity: TransitionCallerIdentity): Promise<TransitionRequestCallerEvidence>;
