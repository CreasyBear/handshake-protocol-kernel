import { z } from "zod";
import { type HostedCallerVerifier, type HostedCallerVerifierInput, type HostedIdentityProviderKind, type TransitionCallerIdentity } from "./hosted-caller-identity";
export declare const HostedProviderVerificationPostureSchema: z.ZodEnum<{
    provider_sdk_verified: "provider_sdk_verified";
    provider_jwks_verified: "provider_jwks_verified";
    provider_webhook_verified: "provider_webhook_verified";
    service_credential_verified: "service_credential_verified";
    fixture_verified: "fixture_verified";
    custom_verified: "custom_verified";
}>;
export type HostedProviderVerificationPosture = z.infer<typeof HostedProviderVerificationPostureSchema>;
export declare const HostedProviderMembershipPostureSchema: z.ZodEnum<{
    unknown: "unknown";
    current: "current";
    stale: "stale";
    revoked: "revoked";
    missing: "missing";
}>;
export type HostedProviderMembershipPosture = z.infer<typeof HostedProviderMembershipPostureSchema>;
export declare const HostedVerifierAdapterClaimsSchema: z.ZodObject<{
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
    claims: z.ZodDefault<z.ZodNullable<z.ZodType<import("..").JsonValue, unknown, z.core.$ZodTypeInternals<import("..").JsonValue, unknown>>>>;
    claimsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    membershipRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
    revocationEpochRef: z.ZodString;
    providerVerificationPosture: z.ZodEnum<{
        provider_sdk_verified: "provider_sdk_verified";
        provider_jwks_verified: "provider_jwks_verified";
        provider_webhook_verified: "provider_webhook_verified";
        service_credential_verified: "service_credential_verified";
        fixture_verified: "fixture_verified";
        custom_verified: "custom_verified";
    }>;
    verificationEvidenceRefs: z.ZodArray<z.ZodString>;
    revocationEpochEvidenceRefs: z.ZodArray<z.ZodString>;
    activeOrganizationId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    requestedOrganizationId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    membershipPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        current: "current";
        stale: "stale";
        revoked: "revoked";
        missing: "missing";
    }>>;
    rawIdentityMaterialPersisted: z.ZodLiteral<false>;
    identityProviderLockInCreated: z.ZodLiteral<false>;
}, z.core.$strict>;
export type HostedVerifierAdapterClaims = z.infer<typeof HostedVerifierAdapterClaimsSchema>;
export type HostedVerifierAdapterClaimsInput = z.input<typeof HostedVerifierAdapterClaimsSchema>;
export type HostedVerifierAdapter = {
    readonly providerKind: HostedIdentityProviderKind;
    verify(input: HostedCallerVerifierInput): Promise<HostedVerifierAdapterClaimsInput>;
};
export type HostedVerifierAdapterOptions = {
    readonly allowedProviderKinds?: readonly HostedIdentityProviderKind[];
    readonly requireActiveOrganization?: boolean;
};
export declare function createHostedCallerVerifierFromAdapter(adapter: HostedVerifierAdapter, options?: HostedVerifierAdapterOptions): HostedCallerVerifier;
export declare function isHostedIdentityProviderKind(value: string): value is HostedIdentityProviderKind;
export type HostedVerifierAdapterResult = Promise<TransitionCallerIdentity>;
