import { z } from "zod";
import type { TransitionCallerRole } from "./caller-auth";
import type { TransitionCallerIdentity } from "./hosted-caller-identity";
export declare const HostedDeploymentModeSchema: z.ZodEnum<{
    test: "test";
    preview: "preview";
    production: "production";
    "local-dev": "local-dev";
}>;
export type HostedDeploymentMode = z.infer<typeof HostedDeploymentModeSchema>;
export declare const HostedVerifierStrategySchema: z.ZodEnum<{
    local_test_verifier: "local_test_verifier";
    cloudflare_access_jwt: "cloudflare_access_jwt";
    pinned_jwks: "pinned_jwks";
    custom_server_verifier: "custom_server_verifier";
}>;
export type HostedVerifierStrategy = z.infer<typeof HostedVerifierStrategySchema>;
export declare const HostedReadRoleSchema: z.ZodEnum<{
    viewer: "viewer";
    auditor: "auditor";
    operator: "operator";
    rawEvidenceReader: "rawEvidenceReader";
}>;
export type HostedReadRole = z.infer<typeof HostedReadRoleSchema>;
export declare const HostedScopeSchema: z.ZodEnum<{
    "evidence:redacted:read": "evidence:redacted:read";
    "evidence:raw:request": "evidence:raw:request";
    "evidence:raw:read": "evidence:raw:read";
    "evidence:export:create": "evidence:export:create";
    "evidence:retention:admin": "evidence:retention:admin";
    "hosted:readiness:read": "hosted:readiness:read";
}>;
export type HostedScope = z.infer<typeof HostedScopeSchema>;
export declare const HostedTenantSourceSchema: z.ZodEnum<{
    verifier_claims: "verifier_claims";
    route_scope_match: "route_scope_match";
    static_test_scope: "static_test_scope";
}>;
export type HostedTenantSource = z.infer<typeof HostedTenantSourceSchema>;
export declare const HostedRawReadPostureSchema: z.ZodEnum<{
    unavailable: "unavailable";
    allowed: "allowed";
    disabled: "disabled";
    gated: "gated";
}>;
export type HostedRawReadPosture = z.infer<typeof HostedRawReadPostureSchema>;
export declare const HostedReadinessStateSchema: z.ZodEnum<{
    read_only: "read_only";
    active: "active";
    missing: "missing";
    disabled: "disabled";
    configured_but_unverified: "configured_but_unverified";
    not_promoted: "not_promoted";
}>;
export type HostedReadinessState = z.infer<typeof HostedReadinessStateSchema>;
export declare const HostedRolePolicySchema: z.ZodObject<{
    admittedTransitionRoles: z.ZodArray<z.ZodEnum<{
        control_plane: "control_plane";
        runtime_evidence: "runtime_evidence";
        gateway_custody: "gateway_custody";
        review_custody: "review_custody";
    }>>;
}, z.core.$strict>;
export declare const HostedReadEntitlementSchema: z.ZodObject<{
    allowedRoles: z.ZodArray<z.ZodEnum<{
        viewer: "viewer";
        auditor: "auditor";
        operator: "operator";
        rawEvidenceReader: "rawEvidenceReader";
    }>>;
    requiredScopes: z.ZodArray<z.ZodEnum<{
        "evidence:redacted:read": "evidence:redacted:read";
        "evidence:raw:request": "evidence:raw:request";
        "evidence:raw:read": "evidence:raw:read";
        "evidence:export:create": "evidence:export:create";
        "evidence:retention:admin": "evidence:retention:admin";
        "hosted:readiness:read": "hosted:readiness:read";
    }>>;
}, z.core.$strict>;
export declare const HostedStorageBindingPostureSchema: z.ZodObject<{
    bindingName: z.ZodString;
    required: z.ZodBoolean;
    authority: z.ZodEnum<{
        structured_evidence: "structured_evidence";
        non_authoritative_cache: "non_authoritative_cache";
    }>;
}, z.core.$strict>;
export declare const HostedAdmissionConfigSchema: z.ZodObject<{
    deploymentMode: z.ZodEnum<{
        test: "test";
        preview: "preview";
        production: "production";
        "local-dev": "local-dev";
    }>;
    verifierStrategy: z.ZodEnum<{
        local_test_verifier: "local_test_verifier";
        cloudflare_access_jwt: "cloudflare_access_jwt";
        pinned_jwks: "pinned_jwks";
        custom_server_verifier: "custom_server_verifier";
    }>;
    maxIdentityAgeSeconds: z.ZodNumber;
    rolePolicy: z.ZodObject<{
        admittedTransitionRoles: z.ZodArray<z.ZodEnum<{
            control_plane: "control_plane";
            runtime_evidence: "runtime_evidence";
            gateway_custody: "gateway_custody";
            review_custody: "review_custody";
        }>>;
    }, z.core.$strict>;
    readPolicy: z.ZodObject<{
        redactedEvidence: z.ZodObject<{
            allowedRoles: z.ZodArray<z.ZodEnum<{
                viewer: "viewer";
                auditor: "auditor";
                operator: "operator";
                rawEvidenceReader: "rawEvidenceReader";
            }>>;
            requiredScopes: z.ZodArray<z.ZodEnum<{
                "evidence:redacted:read": "evidence:redacted:read";
                "evidence:raw:request": "evidence:raw:request";
                "evidence:raw:read": "evidence:raw:read";
                "evidence:export:create": "evidence:export:create";
                "evidence:retention:admin": "evidence:retention:admin";
                "hosted:readiness:read": "hosted:readiness:read";
            }>>;
        }, z.core.$strict>;
        rawEvidence: z.ZodObject<{
            allowedRoles: z.ZodArray<z.ZodEnum<{
                viewer: "viewer";
                auditor: "auditor";
                operator: "operator";
                rawEvidenceReader: "rawEvidenceReader";
            }>>;
            requiredScopes: z.ZodArray<z.ZodEnum<{
                "evidence:redacted:read": "evidence:redacted:read";
                "evidence:raw:request": "evidence:raw:request";
                "evidence:raw:read": "evidence:raw:read";
                "evidence:export:create": "evidence:export:create";
                "evidence:retention:admin": "evidence:retention:admin";
                "hosted:readiness:read": "hosted:readiness:read";
            }>>;
        }, z.core.$strict>;
        readiness: z.ZodObject<{
            allowedRoles: z.ZodArray<z.ZodEnum<{
                viewer: "viewer";
                auditor: "auditor";
                operator: "operator";
                rawEvidenceReader: "rawEvidenceReader";
            }>>;
            requiredScopes: z.ZodArray<z.ZodEnum<{
                "evidence:redacted:read": "evidence:redacted:read";
                "evidence:raw:request": "evidence:raw:request";
                "evidence:raw:read": "evidence:raw:read";
                "evidence:export:create": "evidence:export:create";
                "evidence:retention:admin": "evidence:retention:admin";
                "hosted:readiness:read": "hosted:readiness:read";
            }>>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    tenantSource: z.ZodEnum<{
        verifier_claims: "verifier_claims";
        route_scope_match: "route_scope_match";
        static_test_scope: "static_test_scope";
    }>;
    storage: z.ZodObject<{
        d1: z.ZodObject<{
            bindingName: z.ZodString;
            required: z.ZodBoolean;
            authority: z.ZodEnum<{
                structured_evidence: "structured_evidence";
                non_authoritative_cache: "non_authoritative_cache";
            }>;
        }, z.core.$strict>;
        kv: z.ZodObject<{
            bindingName: z.ZodString;
            required: z.ZodBoolean;
            authority: z.ZodEnum<{
                structured_evidence: "structured_evidence";
                non_authoritative_cache: "non_authoritative_cache";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    secretNames: z.ZodArray<z.ZodString>;
    publicVarNames: z.ZodArray<z.ZodString>;
    rawReadPosture: z.ZodEnum<{
        unavailable: "unavailable";
        allowed: "allowed";
        disabled: "disabled";
        gated: "gated";
    }>;
    redactionProfileRefs: z.ZodArray<z.ZodString>;
    retentionPosture: z.ZodEnum<{
        disabled: "disabled";
        not_configured: "not_configured";
        declared_non_certified: "declared_non_certified";
    }>;
    exportPosture: z.ZodEnum<{
        disabled: "disabled";
        not_configured: "not_configured";
        redacted_only: "redacted_only";
    }>;
    readinessExpectations: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type HostedAdmissionConfig = z.infer<typeof HostedAdmissionConfigSchema>;
export type HostedAdmissionConfigInput = z.input<typeof HostedAdmissionConfigSchema>;
export declare const HostedReadinessReportSchema: z.ZodObject<{
    configured: z.ZodBoolean;
    deploymentMode: z.ZodNullable<z.ZodEnum<{
        test: "test";
        preview: "preview";
        production: "production";
        "local-dev": "local-dev";
    }>>;
    readinessState: z.ZodEnum<{
        read_only: "read_only";
        active: "active";
        missing: "missing";
        disabled: "disabled";
        configured_but_unverified: "configured_but_unverified";
        not_promoted: "not_promoted";
    }>;
    authorityClass: z.ZodLiteral<"hosted_admission_and_redacted_evidence_read_only">;
    hostedMutationAuthorityCreated: z.ZodLiteral<false>;
    paymentManagementCreated: z.ZodLiteral<false>;
    settlementAuthorityCreated: z.ZodLiteral<false>;
    providerCustodyCreated: z.ZodLiteral<false>;
    verifier: z.ZodObject<{
        strategy: z.ZodNullable<z.ZodEnum<{
            local_test_verifier: "local_test_verifier";
            cloudflare_access_jwt: "cloudflare_access_jwt";
            pinned_jwks: "pinned_jwks";
            custom_server_verifier: "custom_server_verifier";
        }>>;
        serverVerifierConfigured: z.ZodBoolean;
        maxIdentityAgeSeconds: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strict>;
    roles: z.ZodObject<{
        admittedTransitionRoles: z.ZodArray<z.ZodEnum<{
            control_plane: "control_plane";
            runtime_evidence: "runtime_evidence";
            gateway_custody: "gateway_custody";
            review_custody: "review_custody";
        }>>;
        redactedEvidenceRoles: z.ZodArray<z.ZodEnum<{
            viewer: "viewer";
            auditor: "auditor";
            operator: "operator";
            rawEvidenceReader: "rawEvidenceReader";
        }>>;
        rawEvidenceRoles: z.ZodArray<z.ZodEnum<{
            viewer: "viewer";
            auditor: "auditor";
            operator: "operator";
            rawEvidenceReader: "rawEvidenceReader";
        }>>;
        readinessRoles: z.ZodArray<z.ZodEnum<{
            viewer: "viewer";
            auditor: "auditor";
            operator: "operator";
            rawEvidenceReader: "rawEvidenceReader";
        }>>;
        redactedEvidenceScopes: z.ZodArray<z.ZodEnum<{
            "evidence:redacted:read": "evidence:redacted:read";
            "evidence:raw:request": "evidence:raw:request";
            "evidence:raw:read": "evidence:raw:read";
            "evidence:export:create": "evidence:export:create";
            "evidence:retention:admin": "evidence:retention:admin";
            "hosted:readiness:read": "hosted:readiness:read";
        }>>;
        rawEvidenceScopes: z.ZodArray<z.ZodEnum<{
            "evidence:redacted:read": "evidence:redacted:read";
            "evidence:raw:request": "evidence:raw:request";
            "evidence:raw:read": "evidence:raw:read";
            "evidence:export:create": "evidence:export:create";
            "evidence:retention:admin": "evidence:retention:admin";
            "hosted:readiness:read": "hosted:readiness:read";
        }>>;
        readinessScopes: z.ZodArray<z.ZodEnum<{
            "evidence:redacted:read": "evidence:redacted:read";
            "evidence:raw:request": "evidence:raw:request";
            "evidence:raw:read": "evidence:raw:read";
            "evidence:export:create": "evidence:export:create";
            "evidence:retention:admin": "evidence:retention:admin";
            "hosted:readiness:read": "hosted:readiness:read";
        }>>;
    }, z.core.$strict>;
    tenantSource: z.ZodNullable<z.ZodEnum<{
        verifier_claims: "verifier_claims";
        route_scope_match: "route_scope_match";
        static_test_scope: "static_test_scope";
    }>>;
    storage: z.ZodObject<{
        d1: z.ZodObject<{
            bindingName: z.ZodNullable<z.ZodString>;
            required: z.ZodBoolean;
            present: z.ZodBoolean;
            authority: z.ZodEnum<{
                missing: "missing";
                structured_evidence: "structured_evidence";
            }>;
            environmentPosture: z.ZodEnum<{
                unknown: "unknown";
                local_or_injected: "local_or_injected";
                remote_required: "remote_required";
            }>;
            schema: z.ZodObject<{
                checked: z.ZodBoolean;
                status: z.ZodEnum<{
                    error: "error";
                    present: "present";
                    missing: "missing";
                    not_checked: "not_checked";
                }>;
                requiredTableRefs: z.ZodArray<z.ZodString>;
                missingTableRefs: z.ZodArray<z.ZodString>;
            }, z.core.$strict>;
        }, z.core.$strict>;
        kv: z.ZodObject<{
            bindingName: z.ZodNullable<z.ZodString>;
            required: z.ZodBoolean;
            present: z.ZodBoolean;
            authority: z.ZodLiteral<"non_authoritative_cache">;
        }, z.core.$strict>;
    }, z.core.$strict>;
    secrets: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        present: z.ZodBoolean;
    }, z.core.$strict>>;
    publicVars: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        present: z.ZodBoolean;
    }, z.core.$strict>>;
    rawReadPosture: z.ZodNullable<z.ZodEnum<{
        unavailable: "unavailable";
        allowed: "allowed";
        disabled: "disabled";
        gated: "gated";
    }>>;
    redactionProfileRefs: z.ZodArray<z.ZodString>;
    retentionPosture: z.ZodNullable<z.ZodEnum<{
        disabled: "disabled";
        not_configured: "not_configured";
        declared_non_certified: "declared_non_certified";
    }>>;
    exportPosture: z.ZodNullable<z.ZodEnum<{
        disabled: "disabled";
        not_configured: "not_configured";
        redacted_only: "redacted_only";
    }>>;
    readinessExpectations: z.ZodArray<z.ZodString>;
    unsupportedCapabilities: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type HostedReadinessReport = z.infer<typeof HostedReadinessReportSchema>;
export declare function requireHostedAdmissionConfig(config: HostedAdmissionConfigInput | undefined): HostedAdmissionConfig;
export declare function parseOptionalHostedAdmissionConfig(config: HostedAdmissionConfigInput | undefined): HostedAdmissionConfig | null;
export declare function assertHostedTransitionRolesConfigured(config: HostedAdmissionConfig, requiredRoles: readonly TransitionCallerRole[]): void;
export declare function assertHostedRedactedEvidenceEntitlement(identity: TransitionCallerIdentity, config: HostedAdmissionConfig): void;
export declare function assertHostedReadinessEntitlement(identity: TransitionCallerIdentity, config: HostedAdmissionConfig): void;
export declare function assertHostedRawEvidenceEntitlement(identity: TransitionCallerIdentity, config: HostedAdmissionConfig, headers: Headers, now: string): void;
