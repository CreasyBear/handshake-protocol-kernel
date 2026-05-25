import { z } from "zod";
export declare const ProductLaunchGateResolutionStatusSchema: z.ZodEnum<{
    resolved_selected: "resolved_selected";
    resolved_raised_bar: "resolved_raised_bar";
    resolved_blocked: "resolved_blocked";
    resolved_cut_line: "resolved_cut_line";
}>;
export type ProductLaunchGateResolutionStatus = z.infer<typeof ProductLaunchGateResolutionStatusSchema>;
export declare const ProductLaunchGateIdSchema: z.ZodEnum<{
    first_external_runtime_transcript: "first_external_runtime_transcript";
    external_product_custody_threshold: "external_product_custody_threshold";
    distribution_bar: "distribution_bar";
    first_buyer_segment: "first_buyer_segment";
    terminal_certificate_prominence: "terminal_certificate_prominence";
    auth_md_x402_expansion_trigger: "auth_md_x402_expansion_trigger";
    live_external_provider_x402_proof: "live_external_provider_x402_proof";
    package_provenance_npm_attestation: "package_provenance_npm_attestation";
}>;
export type ProductLaunchGateId = z.infer<typeof ProductLaunchGateIdSchema>;
export declare const ProductLaunchGateResolutionSchema: z.ZodObject<{
    gateId: z.ZodEnum<{
        first_external_runtime_transcript: "first_external_runtime_transcript";
        external_product_custody_threshold: "external_product_custody_threshold";
        distribution_bar: "distribution_bar";
        first_buyer_segment: "first_buyer_segment";
        terminal_certificate_prominence: "terminal_certificate_prominence";
        auth_md_x402_expansion_trigger: "auth_md_x402_expansion_trigger";
        live_external_provider_x402_proof: "live_external_provider_x402_proof";
        package_provenance_npm_attestation: "package_provenance_npm_attestation";
    }>;
    status: z.ZodEnum<{
        resolved_selected: "resolved_selected";
        resolved_raised_bar: "resolved_raised_bar";
        resolved_blocked: "resolved_blocked";
        resolved_cut_line: "resolved_cut_line";
    }>;
    decision: z.ZodString;
    launchLanguageBoundary: z.ZodString;
    requiredEvidence: z.ZodArray<z.ZodString>;
    currentEvidence: z.ZodArray<z.ZodString>;
    blockerReasonCodes: z.ZodArray<z.ZodString>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ProductLaunchGateResolution = z.infer<typeof ProductLaunchGateResolutionSchema>;
export declare const productLaunchGateResolutions: {
    gateId: "first_external_runtime_transcript" | "external_product_custody_threshold" | "distribution_bar" | "first_buyer_segment" | "terminal_certificate_prominence" | "auth_md_x402_expansion_trigger" | "live_external_provider_x402_proof" | "package_provenance_npm_attestation";
    status: "resolved_selected" | "resolved_raised_bar" | "resolved_blocked" | "resolved_cut_line";
    decision: string;
    launchLanguageBoundary: string;
    requiredEvidence: string[];
    currentEvidence: string[];
    blockerReasonCodes: string[];
    nonClaims: string[];
}[];
export declare function productLaunchGateResolutionFor(gateId: ProductLaunchGateId): ProductLaunchGateResolution;
