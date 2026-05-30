import type { z } from "zod";
export declare const StoredDelegationEvidenceRecordSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    delegationEvidenceRecordId: z.ZodString;
    evidenceRecord: z.ZodObject<{
        schemaId: z.ZodLiteral<"delegation-evidence-record">;
        schemaVersion: z.ZodLiteral<1>;
        a1ChainFingerprint: z.ZodString;
        certFingerprints: z.ZodArray<z.ZodString>;
        chainDepth: z.ZodNumber;
        principalPkFingerprint: z.ZodString;
        terminalDelegatePkFingerprint: z.ZodString;
        a1VerifierVersion: z.ZodString;
        verifyPath: z.ZodEnum<{
            ts: "ts";
            sidecar: "sidecar";
        }>;
        verifyOutcome: z.ZodEnum<{
            valid: "valid";
            invalid: "invalid";
        }>;
        reasonCodes: z.ZodArray<z.ZodString>;
        evidenceBindingDigest: z.ZodNullable<z.ZodString>;
        presentedAtUnix: z.ZodNumber;
        mutationAuthorityCreated: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type StoredDelegationEvidenceRecord = z.infer<typeof StoredDelegationEvidenceRecordSchema>;
