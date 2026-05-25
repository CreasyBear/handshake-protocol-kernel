import { z } from "zod";
export declare const PROTOCOL_VERSION = "0.2.4";
export type JsonValue = null | boolean | number | string | JsonValue[] | {
    [key: string]: JsonValue;
};
export declare const JsonValueSchema: z.ZodType<JsonValue>;
export declare const DigestSchema: z.ZodString;
export declare const SignatureSchema: z.ZodUnion<readonly [z.ZodString, z.ZodString]>;
export declare const SignaturePostureSchema: z.ZodEnum<{
    unsigned: "unsigned";
    local_hmac: "local_hmac";
    external_signature: "external_signature";
    unverified: "unverified";
}>;
export declare const IdSchema: z.ZodString;
export declare const IsoDateSchema: z.ZodString;
export declare const ReasonCodeSchema: z.ZodString;
export declare const ResourceRefSchema: z.ZodString;
export declare const ClearingEvidenceRefsSchema: z.ZodDefault<z.ZodObject<{
    correlationRef: z.ZodOptional<z.ZodString>;
    obligationRef: z.ZodOptional<z.ZodString>;
    counterpartyRef: z.ZodOptional<z.ZodString>;
}, z.core.$strict>>;
export type ClearingEvidenceRefs = z.infer<typeof ClearingEvidenceRefsSchema>;
export declare const ProtocolBaseSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
}, z.core.$strict>;
