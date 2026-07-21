import { z } from "zod";
import { type AuthorityPointerIdentity, type AuthoritySourceMutation, type AuthoritySourceRecord, type AuthoritySourceScope } from "../store/authority-source";
export declare const AUTHORITY_CONTEXT_SOURCE_VERSION: "authority-context-source-1";
export declare const AUTHORITY_CONTEXT_SEMANTIC_STATE: "authority_context_binding";
export declare const AuthorityContextBindingInputSchema: z.ZodObject<{
    verifierAuthorityRef: z.ZodString;
    authProviderRef: z.ZodString;
    callerSubjectDigest: z.ZodString;
    claimsDigest: z.ZodString;
    revocationEpochRef: z.ZodString;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    tenantAuthorityRef: z.ZodString;
    organizationAuthorityRef: z.ZodString;
    principalId: z.ZodString;
    principalAuthorityRef: z.ZodString;
    operatingEnvelopeRef: z.ZodString;
    operatingEnvelopeDigest: z.ZodString;
    aggregateProfileAuthorityRef: z.ZodString;
    aggregateScopeAuthorityRef: z.ZodString;
    aggregateScopeDigest: z.ZodString;
    policyEvaluatorRef: z.ZodString;
    policyEvaluatorDigest: z.ZodString;
    policyVersion: z.ZodObject<{
        ref: z.ZodNullable<z.ZodString>;
        digest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    readiness: z.ZodObject<{
        ref: z.ZodNullable<z.ZodString>;
        digest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    effectiveAt: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strict>;
export type AuthorityContextBindingInput = z.infer<typeof AuthorityContextBindingInputSchema>;
export declare const AuthorityContextSourcePayloadSchema: z.ZodObject<{
    verifierAuthorityRef: z.ZodString;
    authProviderRef: z.ZodString;
    callerSubjectDigest: z.ZodString;
    claimsDigest: z.ZodString;
    revocationEpochRef: z.ZodString;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    tenantAuthorityRef: z.ZodString;
    organizationAuthorityRef: z.ZodString;
    principalId: z.ZodString;
    principalAuthorityRef: z.ZodString;
    operatingEnvelopeRef: z.ZodString;
    operatingEnvelopeDigest: z.ZodString;
    aggregateProfileAuthorityRef: z.ZodString;
    aggregateScopeAuthorityRef: z.ZodString;
    aggregateScopeDigest: z.ZodString;
    policyEvaluatorRef: z.ZodString;
    policyEvaluatorDigest: z.ZodString;
    policyVersion: z.ZodObject<{
        ref: z.ZodNullable<z.ZodString>;
        digest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    readiness: z.ZodObject<{
        ref: z.ZodNullable<z.ZodString>;
        digest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    effectiveAt: z.ZodString;
    expiresAt: z.ZodString;
    authorityContextSourceVersion: z.ZodLiteral<"authority-context-source-1">;
    bindingDigest: z.ZodString;
}, z.core.$strict>;
export type AuthorityContextSourcePayload = z.infer<typeof AuthorityContextSourcePayloadSchema>;
export type AuthorityContextMutationCandidate = Readonly<{
    pointer: AuthorityPointerIdentity;
    record: AuthoritySourceRecord;
    payload: AuthorityContextSourcePayload;
    mutation: AuthoritySourceMutation;
}>;
export declare function authorityContextPointerForSubject(input: {
    verifierAuthorityRef: string;
    authProviderRef: string;
    callerSubjectDigest: string;
}): Promise<AuthorityPointerIdentity>;
export declare function buildAuthorityContextSourcePayload(inputValue: AuthorityContextBindingInput): Promise<AuthorityContextSourcePayload>;
export declare function parseAuthorityContextSourceRecord(scope: AuthoritySourceScope, record: AuthoritySourceRecord): Promise<AuthorityContextSourcePayload>;
export declare function buildAuthorityContextMutationCandidate(input: {
    scope: AuthoritySourceScope;
    binding: AuthorityContextBindingInput;
    predecessor: AuthoritySourceRecord | null;
    mutationRef: string;
}): Promise<AuthorityContextMutationCandidate>;
