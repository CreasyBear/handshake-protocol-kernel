import type { ActionContract } from "../action-contract";
import type { IntentCompilationRecord } from "../intent-compilation";
import type { StoredDelegationEvidenceRecord } from "../delegation-evidence-record";
import { z } from "zod";
export declare const ReceiptDelegationProvenanceSchema: z.ZodObject<{
    a1ChainFingerprint: z.ZodString;
    chainDepth: z.ZodNumber;
    principalPkFingerprint: z.ZodString;
    terminalDelegatePkFingerprint: z.ZodString;
    verifyOutcome: z.ZodEnum<{
        valid: "valid";
        invalid: "invalid";
    }>;
    reasonCodes: z.ZodArray<z.ZodString>;
    evidenceBindingDigest: z.ZodString;
    a1VerifierVersion: z.ZodString;
    mutationAuthorityCreated: z.ZodLiteral<false>;
    greenlightCreated: z.ZodLiteral<false>;
}, z.core.$strict>;
export type ReceiptDelegationProvenance = z.infer<typeof ReceiptDelegationProvenanceSchema>;
export declare function resolveReceiptDelegationProvenance(input: {
    contract: ActionContract;
    intentCompilation: IntentCompilationRecord;
    storedRecord: StoredDelegationEvidenceRecord | null;
}): Promise<{
    provenance: ReceiptDelegationProvenance;
    evidenceRefs: string[];
} | null>;
