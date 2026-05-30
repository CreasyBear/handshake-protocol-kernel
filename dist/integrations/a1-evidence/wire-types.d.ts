/** Wire schemas for delegation evidence chains (A1-shaped field names; Handshake domains). */
import { z } from "zod";
export declare const SubScopeProofNodeSchema: z.ZodObject<{
    hash: z.ZodString;
    is_left: z.ZodBoolean;
}, z.core.$strict>;
export declare const SubScopeProofSchema: z.ZodObject<{
    subset_intents: z.ZodArray<z.ZodString>;
    proofs: z.ZodArray<z.ZodArray<z.ZodObject<{
        hash: z.ZodString;
        is_left: z.ZodBoolean;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export declare const DelegationCertSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    delegator_pk: z.ZodString;
    delegate_pk: z.ZodString;
    scope_root: z.ZodString;
    scope_proof: z.ZodObject<{
        subset_intents: z.ZodArray<z.ZodString>;
        proofs: z.ZodArray<z.ZodArray<z.ZodObject<{
            hash: z.ZodString;
            is_left: z.ZodBoolean;
        }, z.core.$strict>>>;
    }, z.core.$strict>;
    nonce: z.ZodString;
    issued_at: z.ZodNumber;
    expiration_unix: z.ZodNumber;
    max_depth: z.ZodNumber;
    extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    signature: z.ZodString;
}, z.core.$strict>;
export declare const SignedChainSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    principal_pk: z.ZodString;
    principal_scope: z.ZodString;
    certs: z.ZodArray<z.ZodObject<{
        version: z.ZodLiteral<1>;
        delegator_pk: z.ZodString;
        delegate_pk: z.ZodString;
        scope_root: z.ZodString;
        scope_proof: z.ZodObject<{
            subset_intents: z.ZodArray<z.ZodString>;
            proofs: z.ZodArray<z.ZodArray<z.ZodObject<{
                hash: z.ZodString;
                is_left: z.ZodBoolean;
            }, z.core.$strict>>>;
        }, z.core.$strict>;
        nonce: z.ZodString;
        issued_at: z.ZodNumber;
        expiration_unix: z.ZodNumber;
        max_depth: z.ZodNumber;
        extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        signature: z.ZodString;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type SubScopeProofWire = z.infer<typeof SubScopeProofSchema>;
export type WireDelegationCert = z.infer<typeof DelegationCertSchema>;
export type SignedChainWire = z.infer<typeof SignedChainSchema>;
export declare function parseSignedChain(input: unknown): SignedChainWire;
