import { z } from "zod";
export declare const HostTrustedProposalBindingSchema: z.ZodObject<{
    trustedMaxAtomicAmountPerCall: z.ZodString;
    gatewayReadinessRef: z.ZodString;
    gatewayReadinessDigest: z.ZodString;
    policyVersionRef: z.ZodString;
    policyVersionDigest: z.ZodString;
}, z.core.$strict>;
export type HostTrustedProposalBinding = z.infer<typeof HostTrustedProposalBindingSchema>;
export type HostTrustedProposalBindingInput = {
    trustedMaxAtomicAmountPerCall?: `${number}` | string;
    maxAtomicAmountPerCall?: `${number}` | string;
    gatewayReadinessRef?: string;
    gatewayReadinessDigest?: `sha256:${string}` | string;
    policyVersionRef?: string;
    policyVersionDigest?: `sha256:${string}` | string;
};
export declare function classifyHostTrustedProposalBinding(input: HostTrustedProposalBindingInput): {
    binding: HostTrustedProposalBinding | null;
    reasonCodes: string[];
};
