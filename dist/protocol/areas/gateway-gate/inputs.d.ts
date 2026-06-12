import { z } from "zod";
export declare const GatewayCheckInputSchema: z.ZodObject<{
    actionContractId: z.ZodString;
    greenlightId: z.ZodString;
    observedParameters: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
    observedTypedCommitmentRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    observedTypedCommitmentSetDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    observedTypedCommitments: z.ZodDefault<z.ZodArray<z.ZodObject<{
        typedActionCommitmentId: z.ZodString;
        commitmentDigest: z.ZodString;
        subjectDigest: z.ZodString;
        purpose: z.ZodEnum<{
            external_commitment_evidence: "external_commitment_evidence";
            policy_required_evidence: "policy_required_evidence";
            service_workflow_readback: "service_workflow_readback";
            post_gateway_payment_evidence: "post_gateway_payment_evidence";
            display_binding_evidence: "display_binding_evidence";
        }>;
        profile: z.ZodEnum<{
            handshake_jcs_typed: "handshake_jcs_typed";
            eip712: "eip712";
        }>;
        verificationStatus: z.ZodEnum<{
            unverified: "unverified";
            proof_gap: "proof_gap";
            verified: "verified";
            refused: "refused";
            unsupported: "unsupported";
        }>;
        replayStatus: z.ZodEnum<{
            stale: "stale";
            fresh: "fresh";
            replayed: "replayed";
            missing: "missing";
            not_applicable: "not_applicable";
        }>;
        verifierContextDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        safetyPosture: z.ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            display_bound: "display_bound";
            digest_bound: "digest_bound";
            verifier_bound: "verifier_bound";
            provider_observed: "provider_observed";
        }>;
    }, z.core.$strict>>>;
    surfaceOperationRef: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type GatewayCheckInput = z.input<typeof GatewayCheckInputSchema>;
