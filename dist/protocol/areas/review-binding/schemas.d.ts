import { z } from "zod";
export declare const ReviewHiddenActionPostureSchema: z.ZodEnum<{
    unknown: "unknown";
    no_hidden_actions_detected: "no_hidden_actions_detected";
    hidden_action_risk: "hidden_action_risk";
}>;
export declare const ReviewSecondaryActionPostureSchema: z.ZodEnum<{
    unknown: "unknown";
    no_secondary_actions_detected: "no_secondary_actions_detected";
    secondary_action_risk: "secondary_action_risk";
}>;
export declare const ReviewArtifactRecordSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    reviewArtifactId: z.ZodString;
    reviewArtifactRef: z.ZodString;
    reviewRenderSchemaVersion: z.ZodString;
    rendererRef: z.ZodString;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyDecisionId: z.ZodString;
    policyInputDigest: z.ZodString;
    gatewayPolicyVersion: z.ZodString;
    renderedContractDigest: z.ZodString;
    renderedPolicyInputDigest: z.ZodString;
    renderedUncertaintyDigest: z.ZodString;
    renderedArtifactDigest: z.ZodString;
    catalogDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    rendererDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actionBindingDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    hiddenActionPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        no_hidden_actions_detected: "no_hidden_actions_detected";
        hidden_action_risk: "hidden_action_risk";
    }>>;
    secondaryActionPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        no_secondary_actions_detected: "no_secondary_actions_detected";
        secondary_action_risk: "secondary_action_risk";
    }>>;
    uncertaintyMarkers: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    reviewArtifactDigest: z.ZodString;
}, z.core.$strict>;
export type ReviewArtifactRecord = z.infer<typeof ReviewArtifactRecordSchema>;
export declare const ReviewDecisionSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    reviewDecisionId: z.ZodString;
    reviewArtifactId: z.ZodString;
    reviewArtifactRef: z.ZodString;
    reviewArtifactDigest: z.ZodString;
    reviewRenderSchemaVersion: z.ZodString;
    reviewerPrincipalId: z.ZodString;
    actionContractId: z.ZodString;
    actionContractDigest: z.ZodString;
    policyInputDigest: z.ZodString;
    gatewayPolicyVersion: z.ZodString;
    decision: z.ZodEnum<{
        approve: "approve";
        reject: "reject";
        needs_changes: "needs_changes";
    }>;
    decisionReasonCode: z.ZodString;
    decisionExpiresAt: z.ZodString;
    signatureOrAttestationRef: z.ZodString;
}, z.core.$strict>;
export type ReviewDecision = z.infer<typeof ReviewDecisionSchema>;
