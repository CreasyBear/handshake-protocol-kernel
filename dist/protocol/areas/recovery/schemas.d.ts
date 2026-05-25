import { z } from "zod";
export declare const RecoveryRecommendedPathSchema: z.ZodEnum<{
    narrower_action_contract_required: "narrower_action_contract_required";
    gateway_reconciliation_required: "gateway_reconciliation_required";
    human_review_required: "human_review_required";
    compensating_action_contract_required: "compensating_action_contract_required";
    halt_without_retry: "halt_without_retry";
}>;
export type RecoveryRecommendedPath = z.infer<typeof RecoveryRecommendedPathSchema>;
export declare const RecoveryRecommendationStatusSchema: z.ZodEnum<{
    open: "open";
    expired: "expired";
    superseded: "superseded";
}>;
export type RecoveryRecommendationStatus = z.infer<typeof RecoveryRecommendationStatusSchema>;
export declare const RecoveryRecommendationTerminalStatusSchema: z.ZodEnum<{
    expired: "expired";
    superseded: "superseded";
}>;
export type RecoveryRecommendationTerminalStatus = z.infer<typeof RecoveryRecommendationTerminalStatusSchema>;
export declare const RecoveryRecommendationSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    recoveryRecommendationId: z.ZodString;
    sourceReceiptId: z.ZodString;
    sourceActionContractId: z.ZodString;
    sourcePolicyDecisionId: z.ZodString;
    sourceGreenlightId: z.ZodNullable<z.ZodString>;
    sourceGateAttemptId: z.ZodNullable<z.ZodString>;
    sourceMutationAttemptId: z.ZodNullable<z.ZodString>;
    sourceRefusalOrGapRef: z.ZodString;
    sourceFinalityStatus: z.ZodEnum<{
        unknown: "unknown";
        pending: "pending";
        final: "final";
        suspect: "suspect";
    }>;
    sourceGatewayCheckStatus: z.ZodNullable<z.ZodEnum<{
        proof_gap: "proof_gap";
        passed: "passed";
        refused: "refused";
    }>>;
    sourceMutationAttemptStatus: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        not_attempted: "not_attempted";
        submitted: "submitted";
        succeeded: "succeeded";
        downstream_refused: "downstream_refused";
    }>;
    sourceDownstreamExecutionStatus: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        refused: "refused";
        succeeded: "succeeded";
        pending: "pending";
        not_started: "not_started";
    }>;
    recommendedPath: z.ZodEnum<{
        narrower_action_contract_required: "narrower_action_contract_required";
        gateway_reconciliation_required: "gateway_reconciliation_required";
        human_review_required: "human_review_required";
        compensating_action_contract_required: "compensating_action_contract_required";
        halt_without_retry: "halt_without_retry";
    }>;
    allowedNextActionClasses: z.ZodDefault<z.ZodArray<z.ZodString>>;
    requiredNewEvidence: z.ZodDefault<z.ZodArray<z.ZodString>>;
    requiresHumanReview: z.ZodBoolean;
    safeRetryAvailable: z.ZodBoolean;
    scopeNarrowingRequired: z.ZodBoolean;
    policyUpdateCandidate: z.ZodBoolean;
    agentInstructionUpdateCandidate: z.ZodBoolean;
    principalId: z.ZodString;
    agentId: z.ZodString;
    runId: z.ZodString;
    gatewayId: z.ZodString;
    resourceRef: z.ZodString;
    actionClass: z.ZodString;
    failureReceiptRef: z.ZodString;
    proofGapIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    missingEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    reviewDecisionRef: z.ZodNullable<z.ZodString>;
    policyChangeRef: z.ZodNullable<z.ZodString>;
    sourceReceiptDigest: z.ZodString;
    sourceAuditChainDigest: z.ZodString;
    sourceStreamOffsets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        streamId: z.ZodString;
        streamScope: z.ZodEnum<{
            tenant: "tenant";
            organization: "organization";
            run: "run";
            protected_surface_resource: "protected_surface_resource";
        }>;
        partitionKey: z.ZodString;
        offsetStart: z.ZodNumber;
        offsetEnd: z.ZodNumber;
        terminalEventDigest: z.ZodString;
    }, z.core.$strict>>>;
    reasonCode: z.ZodString;
    reasonSummary: z.ZodString;
    recommendedAt: z.ZodString;
    recoveryExpiresAt: z.ZodNullable<z.ZodString>;
    reviewDueAt: z.ZodNullable<z.ZodString>;
    retryNotBefore: z.ZodNullable<z.ZodString>;
    mustCreateNewActionContract: z.ZodLiteral<true>;
    mayReuseGreenlight: z.ZodLiteral<false>;
    mayMutateProtectedSurface: z.ZodLiteral<false>;
    recommendationStatus: z.ZodEnum<{
        open: "open";
        expired: "expired";
        superseded: "superseded";
    }>;
    statusChangedAt: z.ZodNullable<z.ZodString>;
    statusChangedByRef: z.ZodNullable<z.ZodString>;
    statusReasonCode: z.ZodNullable<z.ZodString>;
    statusReasonSummary: z.ZodNullable<z.ZodString>;
    supersededByActionContractId: z.ZodNullable<z.ZodString>;
    recommendationDigest: z.ZodString;
}, z.core.$strict>;
export type RecoveryRecommendation = z.infer<typeof RecoveryRecommendationSchema>;
export declare const RecoveryRecommendationStatusTransitionSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    recoveryRecommendationStatusTransitionId: z.ZodString;
    recoveryRecommendationId: z.ZodString;
    sourceReceiptId: z.ZodString;
    sourceActionContractId: z.ZodString;
    previousStatus: z.ZodEnum<{
        open: "open";
        expired: "expired";
        superseded: "superseded";
    }>;
    nextStatus: z.ZodEnum<{
        expired: "expired";
        superseded: "superseded";
    }>;
    recommendationDigest: z.ZodString;
    reasonCode: z.ZodString;
    reasonSummary: z.ZodString;
    changedByRef: z.ZodString;
    changedAt: z.ZodString;
    supersededByActionContractId: z.ZodNullable<z.ZodString>;
    transitionDigest: z.ZodString;
}, z.core.$strict>;
export type RecoveryRecommendationStatusTransition = z.infer<typeof RecoveryRecommendationStatusTransitionSchema>;
