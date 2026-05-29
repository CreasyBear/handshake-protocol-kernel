import { z } from "zod";
export declare const CreateReviewArtifactInputSchema: z.ZodObject<{
    actionContractId: z.ZodString;
    policyDecisionId: z.ZodString;
    reviewArtifactRef: z.ZodString;
    reviewRenderSchemaVersion: z.ZodString;
    rendererRef: z.ZodString;
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
}, z.core.$strict>;
export type CreateReviewArtifactInput = z.input<typeof CreateReviewArtifactInputSchema>;
export declare const CreateReviewDecisionInputSchema: z.ZodObject<{
    actionContractId: z.ZodString;
    policyDecisionId: z.ZodString;
    reviewArtifactId: z.ZodString;
    reviewArtifactDigest: z.ZodString;
    reviewerPrincipalId: z.ZodString;
    decision: z.ZodEnum<{
        reject: "reject";
        approve: "approve";
        needs_changes: "needs_changes";
    }>;
    decisionReasonCode: z.ZodString;
    decisionExpiresAt: z.ZodString;
    signatureOrAttestationRef: z.ZodString;
}, z.core.$strict>;
export type CreateReviewDecisionInput = z.input<typeof CreateReviewDecisionInputSchema>;
