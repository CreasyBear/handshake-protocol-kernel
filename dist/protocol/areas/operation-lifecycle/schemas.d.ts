import { z } from "zod";
export declare const ProtectedSurfaceOperationClaimStateSchema: z.ZodEnum<{
    terminal_unknown: "terminal_unknown";
    active: "active";
    isolated: "isolated";
    terminal_succeeded: "terminal_succeeded";
    terminal_failed: "terminal_failed";
    terminal_refused: "terminal_refused";
}>;
export type ProtectedSurfaceOperationClaimState = z.infer<typeof ProtectedSurfaceOperationClaimStateSchema>;
export declare const DownstreamRetryabilitySchema: z.ZodEnum<{
    unknown: "unknown";
    retryable: "retryable";
    non_retryable: "non_retryable";
}>;
export type DownstreamRetryability = z.infer<typeof DownstreamRetryabilitySchema>;
export declare const DownstreamDiagnosticsRedactionPostureSchema: z.ZodEnum<{
    unknown: "unknown";
    none: "none";
    redacted: "redacted";
    digest_only: "digest_only";
}>;
export type DownstreamDiagnosticsRedactionPosture = z.infer<typeof DownstreamDiagnosticsRedactionPostureSchema>;
export declare const ProtectedSurfaceOperationClaimSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    protectedSurfaceOperationClaimId: z.ZodString;
    claimKeyDigest: z.ZodString;
    gatewayId: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    actionClass: z.ZodString;
    resourceRef: z.ZodString;
    actionContractId: z.ZodString;
    greenlightId: z.ZodString;
    gateAttemptId: z.ZodString;
    mutationAttemptId: z.ZodNullable<z.ZodString>;
    claimState: z.ZodEnum<{
        terminal_unknown: "terminal_unknown";
        active: "active";
        isolated: "isolated";
        terminal_succeeded: "terminal_succeeded";
        terminal_failed: "terminal_failed";
        terminal_refused: "terminal_refused";
    }>;
    claimedAt: z.ZodString;
    terminalAt: z.ZodNullable<z.ZodString>;
    terminalReasonCode: z.ZodNullable<z.ZodString>;
    releasedByRef: z.ZodNullable<z.ZodString>;
    claimDigest: z.ZodString;
}, z.core.$strict>;
export type ProtectedSurfaceOperationClaim = z.infer<typeof ProtectedSurfaceOperationClaimSchema>;
export declare const SurfaceOperationReconciliationSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    reconciliationId: z.ZodString;
    mutationAttemptId: z.ZodString;
    gateAttemptId: z.ZodString;
    actionContractId: z.ZodString;
    greenlightId: z.ZodString;
    gatewayId: z.ZodString;
    idempotencyKey: z.ZodString;
    surfaceOperationRef: z.ZodNullable<z.ZodString>;
    previousMutationOutcome: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        not_attempted: "not_attempted";
        submitted: "submitted";
        succeeded: "succeeded";
        downstream_refused: "downstream_refused";
    }>;
    observedDownstreamStatus: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        refused: "refused";
        succeeded: "succeeded";
        pending: "pending";
    }>;
    downstreamRetryability: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        retryable: "retryable";
        non_retryable: "non_retryable";
    }>>;
    providerRequestRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    providerOperationRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    redactedDiagnosticsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    traceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    spanRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    diagnosticsRedactionPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        none: "none";
        redacted: "redacted";
        digest_only: "digest_only";
    }>>;
    observedAt: z.ZodString;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    resolvedProofGapIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    reconciliationStatus: z.ZodEnum<{
        failed: "failed";
        pending: "pending";
        resolved: "resolved";
        still_unknown: "still_unknown";
    }>;
    finalityStatus: z.ZodEnum<{
        unknown: "unknown";
        pending: "pending";
        final: "final";
        suspect: "suspect";
    }>;
}, z.core.$strict>;
export type SurfaceOperationReconciliation = z.infer<typeof SurfaceOperationReconciliationSchema>;
