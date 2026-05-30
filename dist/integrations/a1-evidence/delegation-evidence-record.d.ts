import { z } from "zod";
export declare const DelegationEvidenceRecordSchema: z.ZodObject<{
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
export type DelegationEvidenceRecord = z.infer<typeof DelegationEvidenceRecordSchema>;
export declare function buildDelegationEvidenceRecord(input: {
    verifyOutcome: A1VerifyOutcomeForRecord;
    evidenceBindingDigest: string | null;
    presentedAtUnix: number;
}): DelegationEvidenceRecord;
export type A1VerifyOutcomeForRecord = {
    valid: boolean;
    a1ChainFingerprintHex: string;
    certFingerprintsHex: string[];
    chainDepth: number;
    principalPkFingerprintHex: string;
    terminalDelegatePkFingerprintHex: string;
    a1VerifierVersion: string;
    verifyPath: "ts" | "sidecar";
    reasonCodes: string[];
};
