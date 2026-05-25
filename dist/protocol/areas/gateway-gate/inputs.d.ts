import { z } from "zod";
export declare const GatewayCheckInputSchema: z.ZodObject<{
    actionContractId: z.ZodString;
    greenlightId: z.ZodString;
    observedParameters: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
    surfaceOperationRef: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type GatewayCheckInput = z.input<typeof GatewayCheckInputSchema>;
