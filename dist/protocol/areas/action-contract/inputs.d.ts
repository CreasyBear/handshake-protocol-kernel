import { z } from "zod";
export declare const ProposeActionContractInputSchema: z.ZodObject<{
    intentCompilationId: z.ZodString;
    candidateActionId: z.ZodString;
    candidateDigest: z.ZodString;
    signingSecret: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type ProposeActionContractInput = z.input<typeof ProposeActionContractInputSchema>;
