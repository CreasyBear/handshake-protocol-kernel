import { z } from "zod";
export declare const EvaluatePolicyInputSchema: z.ZodObject<{
    actionContractId: z.ZodString;
    envelopeId: z.ZodString;
    policyEvaluatorVersion: z.ZodDefault<z.ZodString>;
    signingSecret: z.ZodOptional<z.ZodString>;
    reviewDecisionId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type EvaluatePolicyInput = z.input<typeof EvaluatePolicyInputSchema>;
