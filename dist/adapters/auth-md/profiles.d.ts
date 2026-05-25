import { z } from "zod";
import { type GatewayCredentialRef, type RegisterGatewayCredentialRefInput } from "../../protocol/areas/credential-custody";
export declare const AUTH_MD_REGISTERED_CREDENTIAL_PROFILE = "auth_md_registered_credential.v0";
export declare const AUTH_MD_DISCOVERY_REDACTION_PROFILE = "auth-md-discovery:v0-redacted";
export declare const AUTH_MD_REGISTRATION_REDACTION_PROFILE = "auth-md-registration:v0-redacted";
export declare const AUTH_MD_IDENTITY_ASSERTION_REDACTION_PROFILE = "auth-md-identity-assertion:v0-redacted";
export declare const AUTH_MD_CLAIM_REDACTION_PROFILE = "auth-md-claim:v0-redacted";
export declare const AUTH_MD_REVOCATION_REDACTION_PROFILE = "auth-md-revocation:v0-redacted";
export declare const AuthMdCredentialTypeSchema: z.ZodEnum<{
    api_key: "api_key";
    access_token: "access_token";
}>;
export type AuthMdCredentialType = z.infer<typeof AuthMdCredentialTypeSchema>;
export declare const AuthMdAgentAuthIdentityTypeSchema: z.ZodEnum<{
    anonymous: "anonymous";
    identity_assertion: "identity_assertion";
}>;
export type AuthMdAgentAuthIdentityType = z.infer<typeof AuthMdAgentAuthIdentityTypeSchema>;
export declare const AuthMdIdentityAssertionTypeSchema: z.ZodEnum<{
    "urn:ietf:params:oauth:token-type:id-jag": "urn:ietf:params:oauth:token-type:id-jag";
    verified_email: "verified_email";
}>;
export type AuthMdIdentityAssertionType = z.infer<typeof AuthMdIdentityAssertionTypeSchema>;
export declare const AuthMdIdentityFlowSchema: z.ZodEnum<{
    anonymous: "anonymous";
    identity_assertion: "identity_assertion";
    user_claimed: "user_claimed";
}>;
export type AuthMdIdentityFlow = z.infer<typeof AuthMdIdentityFlowSchema>;
export declare const AuthMdClaimStateSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    not_applicable: "not_applicable";
    pre_claim: "pre_claim";
    pending_user_claim: "pending_user_claim";
    claimed: "claimed";
    claim_refused: "claim_refused";
}>;
export type AuthMdClaimState = z.infer<typeof AuthMdClaimStateSchema>;
export declare const AuthMdCredentialLifecycleStateSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    active: "active";
    revoked: "revoked";
    expired: "expired";
    quarantined: "quarantined";
}>;
export type AuthMdCredentialLifecycleState = z.infer<typeof AuthMdCredentialLifecycleStateSchema>;
export declare const AuthMdMetadataCachePostureSchema: z.ZodEnum<{
    unknown: "unknown";
    stale: "stale";
    fresh: "fresh";
    not_advertised: "not_advertised";
}>;
export type AuthMdMetadataCachePosture = z.infer<typeof AuthMdMetadataCachePostureSchema>;
export declare const AuthMdIdentityAssurancePostureSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    provider_asserted: "provider_asserted";
    jwks_verified: "jwks_verified";
    cimd_verified: "cimd_verified";
}>;
export type AuthMdIdentityAssurancePosture = z.infer<typeof AuthMdIdentityAssurancePostureSchema>;
export declare const AuthMdClaimScopeTransitionSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    claim_refused: "claim_refused";
    no_scope_change: "no_scope_change";
    rotated_credential_ref: "rotated_credential_ref";
    scope_widened_requires_rotation: "scope_widened_requires_rotation";
}>;
export type AuthMdClaimScopeTransition = z.infer<typeof AuthMdClaimScopeTransitionSchema>;
export declare const AuthMdRevocationEventKindSchema: z.ZodEnum<{
    ambiguous: "ambiguous";
    logout_jwt: "logout_jwt";
    explicit_revocation: "explicit_revocation";
    downstream_401: "downstream_401";
    credential_expired: "credential_expired";
    metadata_drift: "metadata_drift";
}>;
export type AuthMdRevocationEventKind = z.infer<typeof AuthMdRevocationEventKindSchema>;
export declare const AuthMdAgentAuthMetadataWireSchema: z.ZodObject<{
    skill: z.ZodOptional<z.ZodString>;
    register_uri: z.ZodString;
    claim_uri: z.ZodOptional<z.ZodString>;
    revocation_uri: z.ZodOptional<z.ZodString>;
    identity_types_supported: z.ZodArray<z.ZodEnum<{
        anonymous: "anonymous";
        identity_assertion: "identity_assertion";
    }>>;
    anonymous: z.ZodOptional<z.ZodObject<{
        credential_types_supported: z.ZodArray<z.ZodEnum<{
            api_key: "api_key";
            access_token: "access_token";
        }>>;
    }, z.core.$strict>>;
    identity_assertion: z.ZodOptional<z.ZodObject<{
        assertion_types_supported: z.ZodArray<z.ZodEnum<{
            "urn:ietf:params:oauth:token-type:id-jag": "urn:ietf:params:oauth:token-type:id-jag";
            verified_email: "verified_email";
        }>>;
        credential_types_supported: z.ZodArray<z.ZodEnum<{
            api_key: "api_key";
            access_token: "access_token";
        }>>;
    }, z.core.$strict>>;
    events_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type AuthMdAgentAuthMetadataWire = z.input<typeof AuthMdAgentAuthMetadataWireSchema>;
export declare const AuthMdProtectedResourceMetadataWireSchema: z.ZodObject<{
    resource: z.ZodString;
    resource_name: z.ZodOptional<z.ZodString>;
    resource_logo_uri: z.ZodOptional<z.ZodString>;
    authorization_servers: z.ZodArray<z.ZodString>;
    scopes_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
    bearer_methods_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type AuthMdProtectedResourceMetadataWire = z.input<typeof AuthMdProtectedResourceMetadataWireSchema>;
export declare const AuthMdAuthorizationServerMetadataWireSchema: z.ZodObject<{
    issuer: z.ZodOptional<z.ZodString>;
    resource: z.ZodOptional<z.ZodString>;
    authorization_servers: z.ZodDefault<z.ZodArray<z.ZodString>>;
    scopes_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
    bearer_methods_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
    jwks_uri: z.ZodOptional<z.ZodString>;
    authorization_endpoint: z.ZodOptional<z.ZodString>;
    token_endpoint: z.ZodOptional<z.ZodString>;
    claims_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
    agent_auth: z.ZodObject<{
        skill: z.ZodOptional<z.ZodString>;
        register_uri: z.ZodString;
        claim_uri: z.ZodOptional<z.ZodString>;
        revocation_uri: z.ZodOptional<z.ZodString>;
        identity_types_supported: z.ZodArray<z.ZodEnum<{
            anonymous: "anonymous";
            identity_assertion: "identity_assertion";
        }>>;
        anonymous: z.ZodOptional<z.ZodObject<{
            credential_types_supported: z.ZodArray<z.ZodEnum<{
                api_key: "api_key";
                access_token: "access_token";
            }>>;
        }, z.core.$strict>>;
        identity_assertion: z.ZodOptional<z.ZodObject<{
            assertion_types_supported: z.ZodArray<z.ZodEnum<{
                "urn:ietf:params:oauth:token-type:id-jag": "urn:ietf:params:oauth:token-type:id-jag";
                verified_email: "verified_email";
            }>>;
            credential_types_supported: z.ZodArray<z.ZodEnum<{
                api_key: "api_key";
                access_token: "access_token";
            }>>;
        }, z.core.$strict>>;
        events_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AuthMdAuthorizationServerMetadataWire = z.input<typeof AuthMdAuthorizationServerMetadataWireSchema>;
export declare const AuthMdAgentAuthMetadataSchema: z.ZodObject<{
    skill: z.ZodNullable<z.ZodString>;
    registerUri: z.ZodString;
    claimUri: z.ZodNullable<z.ZodString>;
    revocationUri: z.ZodNullable<z.ZodString>;
    identityTypes: z.ZodArray<z.ZodEnum<{
        anonymous: "anonymous";
        identity_assertion: "identity_assertion";
    }>>;
    credentialTypes: z.ZodArray<z.ZodEnum<{
        api_key: "api_key";
        access_token: "access_token";
    }>>;
    anonymousCredentialTypes: z.ZodArray<z.ZodEnum<{
        api_key: "api_key";
        access_token: "access_token";
    }>>;
    identityAssertionCredentialTypes: z.ZodArray<z.ZodEnum<{
        api_key: "api_key";
        access_token: "access_token";
    }>>;
    identityAssertionTypes: z.ZodArray<z.ZodEnum<{
        "urn:ietf:params:oauth:token-type:id-jag": "urn:ietf:params:oauth:token-type:id-jag";
        verified_email: "verified_email";
    }>>;
    eventsSupported: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AuthMdAgentAuthMetadata = z.infer<typeof AuthMdAgentAuthMetadataSchema>;
export declare const AuthMdProtectedResourceMetadataSchema: z.ZodObject<{
    resource: z.ZodString;
    resourceName: z.ZodNullable<z.ZodString>;
    resourceLogoUri: z.ZodNullable<z.ZodString>;
    authorizationServers: z.ZodArray<z.ZodString>;
    scopesSupported: z.ZodArray<z.ZodString>;
    bearerMethodsSupported: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AuthMdProtectedResourceMetadata = z.infer<typeof AuthMdProtectedResourceMetadataSchema>;
export declare const AuthMdAuthorizationServerMetadataSchema: z.ZodObject<{
    issuer: z.ZodNullable<z.ZodString>;
    resource: z.ZodNullable<z.ZodString>;
    authorizationServers: z.ZodArray<z.ZodString>;
    scopesSupported: z.ZodArray<z.ZodString>;
    bearerMethodsSupported: z.ZodArray<z.ZodString>;
    jwksUri: z.ZodNullable<z.ZodString>;
    authorizationEndpoint: z.ZodNullable<z.ZodString>;
    tokenEndpoint: z.ZodNullable<z.ZodString>;
    claimsSupported: z.ZodArray<z.ZodString>;
    agentAuth: z.ZodObject<{
        skill: z.ZodNullable<z.ZodString>;
        registerUri: z.ZodString;
        claimUri: z.ZodNullable<z.ZodString>;
        revocationUri: z.ZodNullable<z.ZodString>;
        identityTypes: z.ZodArray<z.ZodEnum<{
            anonymous: "anonymous";
            identity_assertion: "identity_assertion";
        }>>;
        credentialTypes: z.ZodArray<z.ZodEnum<{
            api_key: "api_key";
            access_token: "access_token";
        }>>;
        anonymousCredentialTypes: z.ZodArray<z.ZodEnum<{
            api_key: "api_key";
            access_token: "access_token";
        }>>;
        identityAssertionCredentialTypes: z.ZodArray<z.ZodEnum<{
            api_key: "api_key";
            access_token: "access_token";
        }>>;
        identityAssertionTypes: z.ZodArray<z.ZodEnum<{
            "urn:ietf:params:oauth:token-type:id-jag": "urn:ietf:params:oauth:token-type:id-jag";
            verified_email: "verified_email";
        }>>;
        eventsSupported: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AuthMdAuthorizationServerMetadata = z.infer<typeof AuthMdAuthorizationServerMetadataSchema>;
export declare const AuthMdDiscoveryEvidenceSchema: z.ZodObject<{
    evidenceKind: z.ZodLiteral<"auth_md_discovery">;
    profile: z.ZodLiteral<"auth_md_registered_credential.v0">;
    authorityCreated: z.ZodLiteral<false>;
    metadataSourceOfTruth: z.ZodLiteral<"oauth_protected_resource_metadata_chain">;
    agentAuthSourceOfTruth: z.ZodLiteral<"oauth_authorization_server_metadata">;
    protectedResourceMetadata: z.ZodObject<{
        resource: z.ZodString;
        resourceName: z.ZodNullable<z.ZodString>;
        resourceLogoUri: z.ZodNullable<z.ZodString>;
        authorizationServers: z.ZodArray<z.ZodString>;
        scopesSupported: z.ZodArray<z.ZodString>;
        bearerMethodsSupported: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    protectedResourceMetadataDigest: z.ZodString;
    protectedResourceMetadataSourceRef: z.ZodNullable<z.ZodString>;
    authorizationServerMetadata: z.ZodObject<{
        issuer: z.ZodNullable<z.ZodString>;
        resource: z.ZodNullable<z.ZodString>;
        authorizationServers: z.ZodArray<z.ZodString>;
        scopesSupported: z.ZodArray<z.ZodString>;
        bearerMethodsSupported: z.ZodArray<z.ZodString>;
        jwksUri: z.ZodNullable<z.ZodString>;
        authorizationEndpoint: z.ZodNullable<z.ZodString>;
        tokenEndpoint: z.ZodNullable<z.ZodString>;
        claimsSupported: z.ZodArray<z.ZodString>;
        agentAuth: z.ZodObject<{
            skill: z.ZodNullable<z.ZodString>;
            registerUri: z.ZodString;
            claimUri: z.ZodNullable<z.ZodString>;
            revocationUri: z.ZodNullable<z.ZodString>;
            identityTypes: z.ZodArray<z.ZodEnum<{
                anonymous: "anonymous";
                identity_assertion: "identity_assertion";
            }>>;
            credentialTypes: z.ZodArray<z.ZodEnum<{
                api_key: "api_key";
                access_token: "access_token";
            }>>;
            anonymousCredentialTypes: z.ZodArray<z.ZodEnum<{
                api_key: "api_key";
                access_token: "access_token";
            }>>;
            identityAssertionCredentialTypes: z.ZodArray<z.ZodEnum<{
                api_key: "api_key";
                access_token: "access_token";
            }>>;
            identityAssertionTypes: z.ZodArray<z.ZodEnum<{
                "urn:ietf:params:oauth:token-type:id-jag": "urn:ietf:params:oauth:token-type:id-jag";
                verified_email: "verified_email";
            }>>;
            eventsSupported: z.ZodArray<z.ZodString>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    authorizationServerMetadataDigest: z.ZodString;
    authorizationServerMetadataSourceRef: z.ZodNullable<z.ZodString>;
    cachePosture: z.ZodEnum<{
        unknown: "unknown";
        stale: "stale";
        fresh: "fresh";
        not_advertised: "not_advertised";
    }>;
    cacheObservedAt: z.ZodNullable<z.ZodString>;
    cacheMaxAgeSeconds: z.ZodNullable<z.ZodNumber>;
    authMdDocumentDigest: z.ZodNullable<z.ZodString>;
    discoveredAt: z.ZodString;
    redactionProfileRef: z.ZodLiteral<"auth-md-discovery:v0-redacted">;
    credentialMaterialIncluded: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AuthMdDiscoveryEvidence = z.infer<typeof AuthMdDiscoveryEvidenceSchema>;
export declare const BuildAuthMdDiscoveryEvidenceInputSchema: z.ZodObject<{
    protectedResourceMetadata: z.ZodObject<{
        resource: z.ZodString;
        resource_name: z.ZodOptional<z.ZodString>;
        resource_logo_uri: z.ZodOptional<z.ZodString>;
        authorization_servers: z.ZodArray<z.ZodString>;
        scopes_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
        bearer_methods_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
    protectedResourceMetadataSourceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    authorizationServerMetadata: z.ZodObject<{
        issuer: z.ZodOptional<z.ZodString>;
        resource: z.ZodOptional<z.ZodString>;
        authorization_servers: z.ZodDefault<z.ZodArray<z.ZodString>>;
        scopes_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
        bearer_methods_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
        jwks_uri: z.ZodOptional<z.ZodString>;
        authorization_endpoint: z.ZodOptional<z.ZodString>;
        token_endpoint: z.ZodOptional<z.ZodString>;
        claims_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
        agent_auth: z.ZodObject<{
            skill: z.ZodOptional<z.ZodString>;
            register_uri: z.ZodString;
            claim_uri: z.ZodOptional<z.ZodString>;
            revocation_uri: z.ZodOptional<z.ZodString>;
            identity_types_supported: z.ZodArray<z.ZodEnum<{
                anonymous: "anonymous";
                identity_assertion: "identity_assertion";
            }>>;
            anonymous: z.ZodOptional<z.ZodObject<{
                credential_types_supported: z.ZodArray<z.ZodEnum<{
                    api_key: "api_key";
                    access_token: "access_token";
                }>>;
            }, z.core.$strict>>;
            identity_assertion: z.ZodOptional<z.ZodObject<{
                assertion_types_supported: z.ZodArray<z.ZodEnum<{
                    "urn:ietf:params:oauth:token-type:id-jag": "urn:ietf:params:oauth:token-type:id-jag";
                    verified_email: "verified_email";
                }>>;
                credential_types_supported: z.ZodArray<z.ZodEnum<{
                    api_key: "api_key";
                    access_token: "access_token";
                }>>;
            }, z.core.$strict>>;
            events_supported: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    authorizationServerMetadataSourceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cachePosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        stale: "stale";
        fresh: "fresh";
        not_advertised: "not_advertised";
    }>>;
    cacheObservedAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cacheMaxAgeSeconds: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    authMdDocumentDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    discoveredAt: z.ZodString;
}, z.core.$strict>;
export type BuildAuthMdDiscoveryEvidenceInput = z.input<typeof BuildAuthMdDiscoveryEvidenceInputSchema>;
export declare const AuthMdRegistrationEvidenceSchema: z.ZodObject<{
    evidenceKind: z.ZodLiteral<"auth_md_registration">;
    profile: z.ZodLiteral<"auth_md_registered_credential.v0">;
    authorityCreated: z.ZodLiteral<false>;
    registrationId: z.ZodString;
    protectedResourceMetadataDigest: z.ZodString;
    authorizationServerMetadataDigest: z.ZodString;
    protectedResource: z.ZodString;
    authorizationServer: z.ZodString;
    identityFlow: z.ZodEnum<{
        anonymous: "anonymous";
        identity_assertion: "identity_assertion";
        user_claimed: "user_claimed";
    }>;
    credentialType: z.ZodEnum<{
        api_key: "api_key";
        access_token: "access_token";
    }>;
    scopes: z.ZodArray<z.ZodString>;
    credentialLifecycleState: z.ZodEnum<{
        proof_gap: "proof_gap";
        active: "active";
        revoked: "revoked";
        expired: "expired";
        quarantined: "quarantined";
    }>;
    claimState: z.ZodEnum<{
        proof_gap: "proof_gap";
        not_applicable: "not_applicable";
        pre_claim: "pre_claim";
        pending_user_claim: "pending_user_claim";
        claimed: "claimed";
        claim_refused: "claim_refused";
    }>;
    idJagIssuer: z.ZodNullable<z.ZodString>;
    idJagSubjectDigest: z.ZodNullable<z.ZodString>;
    idJagAudience: z.ZodNullable<z.ZodString>;
    idJagJtiDigest: z.ZodNullable<z.ZodString>;
    idJagAssurancePosture: z.ZodNullable<z.ZodEnum<{
        proof_gap: "proof_gap";
        provider_asserted: "provider_asserted";
        jwks_verified: "jwks_verified";
        cimd_verified: "cimd_verified";
    }>>;
    idJagJwksOrCimdRef: z.ZodNullable<z.ZodString>;
    providerRegistryDigest: z.ZodString;
    issuedAt: z.ZodString;
    expiresAt: z.ZodNullable<z.ZodString>;
    registeredAt: z.ZodString;
    redactionProfileRef: z.ZodLiteral<"auth-md-registration:v0-redacted">;
    credentialMaterialIncluded: z.ZodLiteral<false>;
    credentialMaterialPosture: z.ZodLiteral<"gateway_custody_intake_only">;
    registrationEvidenceDigest: z.ZodString;
}, z.core.$strict>;
export type AuthMdRegistrationEvidence = z.infer<typeof AuthMdRegistrationEvidenceSchema>;
export declare const AuthMdIdentityAssertionEvidenceSchema: z.ZodObject<{
    evidenceKind: z.ZodLiteral<"auth_md_identity_assertion">;
    profile: z.ZodLiteral<"auth_md_registered_credential.v0">;
    authorityCreated: z.ZodLiteral<false>;
    protectedResource: z.ZodString;
    authorizationServer: z.ZodNullable<z.ZodString>;
    issuer: z.ZodString;
    subjectDigest: z.ZodString;
    audience: z.ZodString;
    jtiDigest: z.ZodString;
    verifiedEmailDigest: z.ZodNullable<z.ZodString>;
    jwksOrCimdRef: z.ZodNullable<z.ZodString>;
    assurancePosture: z.ZodEnum<{
        proof_gap: "proof_gap";
        provider_asserted: "provider_asserted";
        jwks_verified: "jwks_verified";
        cimd_verified: "cimd_verified";
    }>;
    identityAssertionJwtDigest: z.ZodNullable<z.ZodString>;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
    redactionProfileRef: z.ZodLiteral<"auth-md-identity-assertion:v0-redacted">;
    rawJwtIncluded: z.ZodLiteral<false>;
    piiIncluded: z.ZodLiteral<false>;
    identityAssertionEvidenceDigest: z.ZodString;
}, z.core.$strict>;
export type AuthMdIdentityAssertionEvidence = z.infer<typeof AuthMdIdentityAssertionEvidenceSchema>;
export declare const BuildAuthMdIdentityAssertionEvidenceInputSchema: z.ZodObject<{
    protectedResource: z.ZodString;
    authorizationServer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodString;
    subject: z.ZodString;
    audience: z.ZodString;
    jti: z.ZodString;
    verifiedEmail: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    jwksOrCimdRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    assurancePosture: z.ZodDefault<z.ZodEnum<{
        proof_gap: "proof_gap";
        provider_asserted: "provider_asserted";
        jwks_verified: "jwks_verified";
        cimd_verified: "cimd_verified";
    }>>;
    identityAssertionJwt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strict>;
export type BuildAuthMdIdentityAssertionEvidenceInput = z.input<typeof BuildAuthMdIdentityAssertionEvidenceInputSchema>;
export declare const AuthMdClaimEvidenceSchema: z.ZodObject<{
    evidenceKind: z.ZodLiteral<"auth_md_claim">;
    profile: z.ZodLiteral<"auth_md_registered_credential.v0">;
    authorityCreated: z.ZodLiteral<false>;
    registrationId: z.ZodString;
    protectedResource: z.ZodString;
    claimState: z.ZodEnum<{
        proof_gap: "proof_gap";
        not_applicable: "not_applicable";
        pre_claim: "pre_claim";
        pending_user_claim: "pending_user_claim";
        claimed: "claimed";
        claim_refused: "claim_refused";
    }>;
    scopeTransition: z.ZodEnum<{
        proof_gap: "proof_gap";
        claim_refused: "claim_refused";
        no_scope_change: "no_scope_change";
        rotated_credential_ref: "rotated_credential_ref";
        scope_widened_requires_rotation: "scope_widened_requires_rotation";
    }>;
    preClaimCredentialRefId: z.ZodNullable<z.ZodString>;
    preClaimCredentialRefDigest: z.ZodNullable<z.ZodString>;
    postClaimCredentialRefId: z.ZodNullable<z.ZodString>;
    postClaimCredentialRefDigest: z.ZodNullable<z.ZodString>;
    claimTokenDigest: z.ZodNullable<z.ZodString>;
    claimedSubjectDigest: z.ZodNullable<z.ZodString>;
    verifiedEmailDigest: z.ZodNullable<z.ZodString>;
    rotateOnClaimRequired: z.ZodBoolean;
    evidenceRefs: z.ZodArray<z.ZodString>;
    claimedAt: z.ZodString;
    redactionProfileRef: z.ZodLiteral<"auth-md-claim:v0-redacted">;
    secretMaterialIncluded: z.ZodLiteral<false>;
    piiIncluded: z.ZodLiteral<false>;
    claimEvidenceDigest: z.ZodString;
}, z.core.$strict>;
export type AuthMdClaimEvidence = z.infer<typeof AuthMdClaimEvidenceSchema>;
export declare const BuildAuthMdClaimEvidenceInputSchema: z.ZodObject<{
    registrationId: z.ZodString;
    protectedResource: z.ZodString;
    claimState: z.ZodEnum<{
        proof_gap: "proof_gap";
        not_applicable: "not_applicable";
        pre_claim: "pre_claim";
        pending_user_claim: "pending_user_claim";
        claimed: "claimed";
        claim_refused: "claim_refused";
    }>;
    scopeTransition: z.ZodEnum<{
        proof_gap: "proof_gap";
        claim_refused: "claim_refused";
        no_scope_change: "no_scope_change";
        rotated_credential_ref: "rotated_credential_ref";
        scope_widened_requires_rotation: "scope_widened_requires_rotation";
    }>;
    preClaimCredentialRefId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    preClaimCredentialRefDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    postClaimCredentialRefId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    postClaimCredentialRefDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    claimToken: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    claimedSubject: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    verifiedEmail: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    rotateOnClaimRequired: z.ZodDefault<z.ZodBoolean>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    claimedAt: z.ZodString;
}, z.core.$strict>;
export type BuildAuthMdClaimEvidenceInput = z.input<typeof BuildAuthMdClaimEvidenceInputSchema>;
export declare const AuthMdRevocationEvidenceSchema: z.ZodObject<{
    evidenceKind: z.ZodLiteral<"auth_md_revocation">;
    profile: z.ZodLiteral<"auth_md_registered_credential.v0">;
    authorityCreated: z.ZodLiteral<false>;
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
    providerEventDigest: z.ZodNullable<z.ZodString>;
    logoutJwtDigest: z.ZodNullable<z.ZodString>;
    downstreamStatusDigest: z.ZodNullable<z.ZodString>;
    isolationRecommended: z.ZodLiteral<true>;
    futurePolicyAndGatewayUseAllowed: z.ZodLiteral<false>;
    evidenceRefs: z.ZodArray<z.ZodString>;
    observedAt: z.ZodString;
    redactionProfileRef: z.ZodLiteral<"auth-md-revocation:v0-redacted">;
    secretMaterialIncluded: z.ZodLiteral<false>;
    piiIncluded: z.ZodLiteral<false>;
    revocationEvidenceDigest: z.ZodString;
}, z.core.$strict>;
export type AuthMdRevocationEvidence = z.infer<typeof AuthMdRevocationEvidenceSchema>;
export declare const BuildAuthMdRevocationEvidenceInputSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type BuildAuthMdRevocationEvidenceInput = z.input<typeof BuildAuthMdRevocationEvidenceInputSchema>;
export declare const BuildAuthMdGatewayCredentialIntakeInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    principalId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayId: z.ZodString;
    gatewayRegistryEntryId: z.ZodString;
    registrationId: z.ZodString;
    protectedResourceMetadataDigest: z.ZodString;
    authorizationServerMetadataDigest: z.ZodString;
    protectedResource: z.ZodString;
    authorizationServer: z.ZodString;
    identityFlow: z.ZodEnum<{
        anonymous: "anonymous";
        identity_assertion: "identity_assertion";
        user_claimed: "user_claimed";
    }>;
    credentialType: z.ZodEnum<{
        api_key: "api_key";
        access_token: "access_token";
    }>;
    scopes: z.ZodArray<z.ZodString>;
    credentialMaterial: z.ZodString;
    credentialLifecycleState: z.ZodDefault<z.ZodEnum<{
        proof_gap: "proof_gap";
        active: "active";
        revoked: "revoked";
        expired: "expired";
        quarantined: "quarantined";
    }>>;
    claimState: z.ZodDefault<z.ZodEnum<{
        proof_gap: "proof_gap";
        not_applicable: "not_applicable";
        pre_claim: "pre_claim";
        pending_user_claim: "pending_user_claim";
        claimed: "claimed";
        claim_refused: "claim_refused";
    }>>;
    idJagIssuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    idJagSubject: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    idJagAudience: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    idJagJti: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    idJagAssurancePosture: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
        proof_gap: "proof_gap";
        provider_asserted: "provider_asserted";
        jwks_verified: "jwks_verified";
        cimd_verified: "cimd_verified";
    }>>>;
    idJagJwksOrCimdRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuedAt: z.ZodString;
    expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    registeredAt: z.ZodString;
    gatewayCredentialRefId: z.ZodOptional<z.ZodString>;
    protectedSurfaceKind: z.ZodDefault<z.ZodString>;
    actionClasses: z.ZodDefault<z.ZodArray<z.ZodString>>;
    resourceNamespaceRef: z.ZodOptional<z.ZodString>;
    custodyStatus: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        gateway_resolved_from_vault: "gateway_resolved_from_vault";
        provider_gateway_held: "provider_gateway_held";
        unsafe_agent_visible: "unsafe_agent_visible";
        unsafe_runtime_visible: "unsafe_runtime_visible";
        agent_has_raw_credential: "agent_has_raw_credential";
        shared_or_unknown: "shared_or_unknown";
        no_mutation_credential: "no_mutation_credential";
    }>>;
    resolverRef: z.ZodDefault<z.ZodString>;
    resolverVersion: z.ZodDefault<z.ZodString>;
}, z.core.$strict>;
export type BuildAuthMdGatewayCredentialIntakeInput = z.input<typeof BuildAuthMdGatewayCredentialIntakeInputSchema>;
export type AuthMdGatewayCredentialIntake = {
    registrationEvidence: AuthMdRegistrationEvidence;
    credentialRefInput: RegisterGatewayCredentialRefInput;
};
export declare function buildAuthMdDiscoveryEvidence(inputValue: BuildAuthMdDiscoveryEvidenceInput): Promise<AuthMdDiscoveryEvidence>;
export declare function buildAuthMdGatewayCredentialIntake(inputValue: BuildAuthMdGatewayCredentialIntakeInput): Promise<AuthMdGatewayCredentialIntake>;
export declare function buildAuthMdIdentityAssertionEvidence(inputValue: BuildAuthMdIdentityAssertionEvidenceInput): Promise<AuthMdIdentityAssertionEvidence>;
export declare function buildAuthMdClaimEvidence(inputValue: BuildAuthMdClaimEvidenceInput): Promise<AuthMdClaimEvidence>;
export declare function buildAuthMdRevocationEvidence(inputValue: BuildAuthMdRevocationEvidenceInput): Promise<AuthMdRevocationEvidence>;
export declare function authMdGatewayCredentialBindingFor(credentialRef: GatewayCredentialRef, credentialUseName?: string): {
    credentialUseName: string;
    gatewayCredentialRefId: string;
    gatewayCredentialRefDigest: string;
    providerRegistryRef: string;
    providerRegistryDigest: string | null;
    requiredCredentialCustodyStatus: "unknown" | "gateway_held" | "fixture_gateway_held" | "gateway_resolved_from_vault" | "provider_gateway_held" | "unsafe_agent_visible" | "unsafe_runtime_visible" | "agent_has_raw_credential" | "shared_or_unknown" | "no_mutation_credential";
    evidenceExpectationRefs: string[];
};
export declare function normalizeProtectedResourceMetadata(value: AuthMdProtectedResourceMetadataWire): AuthMdProtectedResourceMetadata;
export declare function normalizeAuthorizationServerMetadata(value: AuthMdAuthorizationServerMetadataWire): AuthMdAuthorizationServerMetadata;
export declare function normalizeAgentAuthMetadata(value: AuthMdAgentAuthMetadataWire): AuthMdAgentAuthMetadata;
export declare function assertNoLeakedAuthMdCredentialMaterial(value: unknown): void;
export declare function assertAuthMdDiscoveryChainMatches(protectedResourceMetadata: AuthMdProtectedResourceMetadata, authorizationServerMetadata: AuthMdAuthorizationServerMetadata): void;
export declare function assertAuthMdAudienceMatchesProtectedResource(audience: string, protectedResource: string, authorizationServer?: string | null): void;
export declare function authMdProtectedResourceRef(protectedResource: string): string;
export declare function authMdResourceNamespaceRef(protectedResource: string): string;
export declare function authMdProviderRegistryRef(protectedResource: string, registrationId: string): string;
export declare function authMdEvidenceRef(kind: "discovery" | "authorization-server" | "identity-assertion" | "registration" | "claim" | "revocation", digest: string): string;
