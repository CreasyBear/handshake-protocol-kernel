import { z } from "zod";
export declare const ProofGapSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    proofGapId: z.ZodString;
    gapPhase: z.ZodEnum<{
        compilation: "compilation";
        policy: "policy";
        recovery: "recovery";
        receipt: "receipt";
        gate: "gate";
        mutation: "mutation";
        stream: "stream";
    }>;
    expectedEvidenceType: z.ZodString;
    missingOrInvalidEvidenceRef: z.ZodString;
    affectedObjectRefs: z.ZodArray<z.ZodString>;
    gateAttemptId: z.ZodNullable<z.ZodString>;
    mutationAttemptId: z.ZodNullable<z.ZodString>;
    receiptId: z.ZodNullable<z.ZodString>;
    reasonCode: z.ZodString;
    finalityImpact: z.ZodEnum<{
        unknown: "unknown";
        none: "none";
        suspect: "suspect";
        invalid: "invalid";
    }>;
    recoveryRequirement: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
    resolvedByRef: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type ProofGap = z.infer<typeof ProofGapSchema>;
