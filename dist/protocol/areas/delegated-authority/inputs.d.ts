import { z } from "zod";
export declare const RegisterDelegatedAuthorityRefInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    delegatedAuthorityRefId: z.ZodOptional<z.ZodString>;
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
    grantStatus: z.ZodDefault<z.ZodEnum<{
        active: "active";
        revoked: "revoked";
        expired: "expired";
    }>>;
    policyPackRef: z.ZodString;
    policyPackVersion: z.ZodString;
    amountParameterName: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    maxAtomicAmountPerAction: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    issuedAt: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodString;
}, z.core.$strict>;
export type RegisterDelegatedAuthorityRefInput = z.input<typeof RegisterDelegatedAuthorityRefInputSchema>;
export declare const TransitionDelegatedAuthorityStatusInputSchema: z.ZodObject<{
    delegatedAuthorityRefId: z.ZodString;
    nextGrantStatus: z.ZodEnum<{
        revoked: "revoked";
        expired: "expired";
    }>;
    reasonCode: z.ZodString;
    reasonSummary: z.ZodString;
    changedByRef: z.ZodString;
    isolationExpiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type TransitionDelegatedAuthorityStatusInput = z.input<typeof TransitionDelegatedAuthorityStatusInputSchema>;
