import { z } from "zod";
export declare const CreateIsolationInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    scopeType: z.ZodEnum<{
        gateway: "gateway";
        agent: "agent";
        tenant: "tenant";
        organization: "organization";
        run: "run";
        envelope: "envelope";
        action_class: "action_class";
        credential_ref: "credential_ref";
        authority_ref: "authority_ref";
        resource: "resource";
    }>;
    scopeId: z.ZodString;
    state: z.ZodEnum<{
        active: "active";
        revoked: "revoked";
        quarantined: "quarantined";
        review_only: "review_only";
        rate_limited: "rate_limited";
        halted: "halted";
        state_suspect: "state_suspect";
    }>;
    reasonCode: z.ZodString;
    reasonSummary: z.ZodString;
    sourceDecisionRef: z.ZodString;
    observedStreamOffsets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        partitionKey: z.ZodString;
        observedOffsetStart: z.ZodNumber;
        observedOffsetEnd: z.ZodNumber;
        observedEventDigest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>>>;
    expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type CreateIsolationInput = z.input<typeof CreateIsolationInputSchema>;
export declare const CreateBreakerDecisionInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    listenerId: z.ZodString;
    listenerVersion: z.ZodString;
    rulePackRef: z.ZodString;
    rulePackVersion: z.ZodString;
    observedStreamOffsets: z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        partitionKey: z.ZodString;
        observedOffsetStart: z.ZodNumber;
        observedOffsetEnd: z.ZodNumber;
        observedEventDigest: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>>;
    decision: z.ZodEnum<{
        revoked: "revoked";
        quarantined: "quarantined";
        review_only: "review_only";
        rate_limited: "rate_limited";
        halted: "halted";
        state_suspect: "state_suspect";
    }>;
    decisionReasonCode: z.ZodString;
    decisionReason: z.ZodString;
    targetScopeType: z.ZodEnum<{
        gateway: "gateway";
        agent: "agent";
        tenant: "tenant";
        organization: "organization";
        run: "run";
        envelope: "envelope";
        action_class: "action_class";
        credential_ref: "credential_ref";
        authority_ref: "authority_ref";
        resource: "resource";
    }>;
    targetScopeId: z.ZodString;
    agentId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    runId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gatewayId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    resourceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actionClass: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    matchedBreakerRuleIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    supportingEventRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    missingEventRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    decisionExpiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type CreateBreakerDecisionInput = z.input<typeof CreateBreakerDecisionInputSchema>;
