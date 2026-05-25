import { z } from "zod";
export declare const AuthorityCertificateSignerInputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    signerRole: z.ZodEnum<{
        gateway: "gateway";
        operator_policy: "operator_policy";
    }>;
    keyIdentityRef: z.ZodString;
    algorithm: z.ZodLiteral<"ed25519">;
    privateKeyPkcs8: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    signerRole: z.ZodEnum<{
        gateway: "gateway";
        operator_policy: "operator_policy";
    }>;
    keyIdentityRef: z.ZodString;
    algorithm: z.ZodLiteral<"hmac-sha256">;
    hmacSecret: z.ZodString;
}, z.core.$strict>], "algorithm">;
export type AuthorityCertificateSignerInput = z.input<typeof AuthorityCertificateSignerInputSchema>;
export type ParsedAuthorityCertificateSignerInput = z.output<typeof AuthorityCertificateSignerInputSchema>;
export declare const CreateAuthorityCertificateInputSchema: z.ZodObject<{
    terminalObjectRef: z.ZodString;
    signers: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        signerRole: z.ZodEnum<{
            gateway: "gateway";
            operator_policy: "operator_policy";
        }>;
        keyIdentityRef: z.ZodString;
        algorithm: z.ZodLiteral<"ed25519">;
        privateKeyPkcs8: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        signerRole: z.ZodEnum<{
            gateway: "gateway";
            operator_policy: "operator_policy";
        }>;
        keyIdentityRef: z.ZodString;
        algorithm: z.ZodLiteral<"hmac-sha256">;
        hmacSecret: z.ZodString;
    }, z.core.$strict>], "algorithm">>;
    consumerBindings: z.ZodDefault<z.ZodArray<z.ZodObject<{
        bindingKind: z.ZodString;
        bindingRef: z.ZodString;
        digest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>>;
    extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>>;
}, z.core.$strict>;
export type CreateAuthorityCertificateInput = z.input<typeof CreateAuthorityCertificateInputSchema>;
