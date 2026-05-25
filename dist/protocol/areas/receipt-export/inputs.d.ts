import { z } from "zod";
export declare const CreateReceiptExportInputSchema: z.ZodObject<{
    receiptId: z.ZodString;
    exportFormat: z.ZodDefault<z.ZodEnum<{
        json: "json";
        redacted_json: "redacted_json";
    }>>;
    redactionProfileRef: z.ZodDefault<z.ZodString>;
    exportPurposeCode: z.ZodDefault<z.ZodString>;
    requestedByRef: z.ZodString;
    evidenceRetentionUntil: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type CreateReceiptExportInput = z.input<typeof CreateReceiptExportInputSchema>;
