import { z } from "zod";
/**
 * Digest-only reference to verified A1 delegation evidence.
 * Distinct from `DelegatedAuthorityRef` in `src/protocol/areas/delegated-authority/`
 * (store-backed operating-envelope grants).
 */
export declare const DelegationEvidenceRefSchema: z.ZodObject<{
    delegationEvidenceRefId: z.ZodString;
    evidenceBindingDigest: z.ZodString;
    a1ChainFingerprint: z.ZodString;
    storeRef: z.ZodString;
    verifyOutcome: z.ZodEnum<{
        valid: "valid";
        invalid: "invalid";
    }>;
    a1VerifierVersion: z.ZodString;
}, z.core.$strict>;
export type DelegationEvidenceRef = z.infer<typeof DelegationEvidenceRefSchema>;
export declare function delegationEvidenceEvidenceRefUri(evidenceBindingDigest: string): string;
