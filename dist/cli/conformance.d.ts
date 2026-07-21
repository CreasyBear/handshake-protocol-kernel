export declare function x402PaymentConformanceCommand(): import("./output").CliOutputEnvelope<{
    profile: string;
    adapterPackId: "adapter_pack_x402_payment_exact";
    passed: boolean;
    requiredProbeKinds: ("credential_custody" | "raw_sibling_blocking" | "mcp_direct_call_blocking" | "token_passthrough_blocking" | "wrapper_drift" | "failure_closed")[];
    reasonCodes: string[];
}>;
