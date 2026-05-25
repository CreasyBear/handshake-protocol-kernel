import { z } from "zod";
export declare const DelegatedAuthorityKindSchema: z.ZodEnum<{
    mutation: "mutation";
    spend: "spend";
    api_call: "api_call";
}>;
export type DelegatedAuthorityKind = z.infer<typeof DelegatedAuthorityKindSchema>;
export declare const DelegatedAuthorityGrantStatusSchema: z.ZodEnum<{
    active: "active";
    revoked: "revoked";
    expired: "expired";
}>;
export type DelegatedAuthorityGrantStatus = z.infer<typeof DelegatedAuthorityGrantStatusSchema>;
export declare const DelegatedAuthorityTerminalGrantStatusSchema: z.ZodEnum<{
    revoked: "revoked";
    expired: "expired";
}>;
export type DelegatedAuthorityTerminalGrantStatus = z.infer<typeof DelegatedAuthorityTerminalGrantStatusSchema>;
export declare const DelegatedAuthorityBindingSchema: z.ZodObject<{
    authorityUseName: z.ZodString;
    delegatedAuthorityRefId: z.ZodString;
    delegatedAuthorityRefDigest: z.ZodString;
    requiredGrantStatus: z.ZodDefault<z.ZodLiteral<"active">>;
    authorityKind: z.ZodEnum<{
        mutation: "mutation";
        spend: "spend";
        api_call: "api_call";
    }>;
    policyPackRef: z.ZodString;
    policyPackVersion: z.ZodString;
    evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type DelegatedAuthorityBinding = z.infer<typeof DelegatedAuthorityBindingSchema>;
export declare const DelegatedAuthorityRefSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    delegatedAuthorityRefId: z.ZodString;
    delegatedAuthorityRefDigest: z.ZodString;
    principalId: z.ZodString;
    agentId: z.ZodString;
    runtimeAdapterId: z.ZodString;
    operatingEnvelopeId: z.ZodString;
    gatewayId: z.ZodString;
    gatewayRegistryEntryId: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    actionClasses: z.ZodArray<z.ZodString>;
    resourceRefs: z.ZodArray<z.ZodString>;
    authorityKind: z.ZodEnum<{
        mutation: "mutation";
        spend: "spend";
        api_call: "api_call";
    }>;
    grantStatus: z.ZodEnum<{
        active: "active";
        revoked: "revoked";
        expired: "expired";
    }>;
    policyPackRef: z.ZodString;
    policyPackVersion: z.ZodString;
    amountParameterName: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    maxAtomicAmountPerAction: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    redactionProfileRef: z.ZodLiteral<"delegated-authority-ref:v0.2-redacted">;
    secretMaterialIncluded: z.ZodLiteral<false>;
    mutationAuthorityCreated: z.ZodLiteral<false>;
    greenlightCreated: z.ZodLiteral<false>;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strict>;
export type DelegatedAuthorityRef = z.infer<typeof DelegatedAuthorityRefSchema>;
export declare const DelegatedAuthorityStatusTransitionSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    delegatedAuthorityStatusTransitionId: z.ZodString;
    delegatedAuthorityRefId: z.ZodString;
    delegatedAuthorityRefDigest: z.ZodString;
    previousGrantStatus: z.ZodEnum<{
        active: "active";
        revoked: "revoked";
        expired: "expired";
    }>;
    nextGrantStatus: z.ZodEnum<{
        revoked: "revoked";
        expired: "expired";
    }>;
    reasonCode: z.ZodString;
    reasonSummary: z.ZodString;
    changedByRef: z.ZodString;
    changedAt: z.ZodString;
    isolationStateId: z.ZodString;
    transitionDigest: z.ZodString;
}, z.core.$strict>;
export type DelegatedAuthorityStatusTransition = z.infer<typeof DelegatedAuthorityStatusTransitionSchema>;
