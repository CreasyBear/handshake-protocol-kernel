import { z } from "zod";
export declare const RefusalPhaseSchema: z.ZodEnum<{
    compilation: "compilation";
    policy: "policy";
    review: "review";
    gateway: "gateway";
    recovery: "recovery";
    receipt_export: "receipt_export";
    transition: "transition";
}>;
export type RefusalPhase = z.infer<typeof RefusalPhaseSchema>;
export declare const RefusalSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    refusalId: z.ZodString;
    phase: z.ZodEnum<{
        compilation: "compilation";
        policy: "policy";
        review: "review";
        gateway: "gateway";
        recovery: "recovery";
        receipt_export: "receipt_export";
        transition: "transition";
    }>;
    actionContractId: z.ZodNullable<z.ZodString>;
    policyDecisionId: z.ZodNullable<z.ZodString>;
    greenlightId: z.ZodNullable<z.ZodString>;
    gateAttemptId: z.ZodNullable<z.ZodString>;
    refusedObjectRef: z.ZodNullable<z.ZodString>;
    reasonCode: z.ZodString;
    reason: z.ZodString;
    mutationAttempted: z.ZodLiteral<false>;
    authorityCreated: z.ZodLiteral<false>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    refusedAt: z.ZodString;
}, z.core.$strict>;
export type Refusal = z.infer<typeof RefusalSchema>;
