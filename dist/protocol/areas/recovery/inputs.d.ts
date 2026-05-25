import { z } from "zod";
export declare const CreateRecoveryRecommendationInputSchema: z.ZodObject<{
    sourceReceiptId: z.ZodString;
    sourceRefusalOrGapRef: z.ZodOptional<z.ZodString>;
    recommendedPath: z.ZodEnum<{
        narrower_action_contract_required: "narrower_action_contract_required";
        gateway_reconciliation_required: "gateway_reconciliation_required";
        human_review_required: "human_review_required";
        compensating_action_contract_required: "compensating_action_contract_required";
        halt_without_retry: "halt_without_retry";
    }>;
    allowedNextActionClasses: z.ZodDefault<z.ZodArray<z.ZodString>>;
    requiredNewEvidence: z.ZodDefault<z.ZodArray<z.ZodString>>;
    requiresHumanReview: z.ZodDefault<z.ZodBoolean>;
    reasonCode: z.ZodString;
    reasonSummary: z.ZodString;
    reviewDecisionRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    policyChangeRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    recoveryExpiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reviewDueAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    retryNotBefore: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type CreateRecoveryRecommendationInput = z.input<typeof CreateRecoveryRecommendationInputSchema>;
export declare const TransitionRecoveryRecommendationStatusInputSchema: z.ZodObject<{
    recoveryRecommendationId: z.ZodString;
    nextStatus: z.ZodEnum<{
        expired: "expired";
        superseded: "superseded";
    }>;
    reasonCode: z.ZodString;
    reasonSummary: z.ZodString;
    changedByRef: z.ZodString;
    supersededByActionContractId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type TransitionRecoveryRecommendationStatusInput = z.input<typeof TransitionRecoveryRecommendationStatusInputSchema>;
export declare const ResolveRecoveryTerminalConflictInputSchema: z.ZodObject<{
    proofGapId: z.ZodString;
    recoveryRecommendationStatusTransitionId: z.ZodString;
    observedByRef: z.ZodString;
}, z.core.$strict>;
export type ResolveRecoveryTerminalConflictInput = z.input<typeof ResolveRecoveryTerminalConflictInputSchema>;
