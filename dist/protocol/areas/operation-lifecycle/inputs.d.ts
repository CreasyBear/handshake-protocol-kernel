import { z } from "zod";
export declare const ReconcileSurfaceOperationInputSchema: z.ZodObject<{
    mutationAttemptId: z.ZodString;
    idempotencyKey: z.ZodString;
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
    observedSurfaceOperationRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    resolvedProofGapIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    orphanIsolationRequested: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strict>;
export type ReconcileSurfaceOperationInput = z.input<typeof ReconcileSurfaceOperationInputSchema>;
