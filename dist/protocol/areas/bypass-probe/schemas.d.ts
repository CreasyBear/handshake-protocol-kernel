import { z } from "zod";
export declare const BypassProbeKindSchema: z.ZodEnum<{
    credential_custody: "credential_custody";
    raw_sibling_blocking: "raw_sibling_blocking";
    mcp_direct_call_blocking: "mcp_direct_call_blocking";
    token_passthrough_blocking: "token_passthrough_blocking";
    wrapper_drift: "wrapper_drift";
    failure_closed: "failure_closed";
}>;
export type BypassProbeKind = z.infer<typeof BypassProbeKindSchema>;
export declare const BypassProbeOutcomeSchema: z.ZodEnum<{
    passed: "passed";
    failed: "failed";
    inconclusive: "inconclusive";
}>;
export type BypassProbeOutcome = z.infer<typeof BypassProbeOutcomeSchema>;
export declare const BypassProbeSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    bypassProbeId: z.ZodString;
    postureScopeKey: z.ZodString;
    runtimeAdapterId: z.ZodString;
    gatewayId: z.ZodString;
    actionClass: z.ZodString;
    resourceRef: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    probeKind: z.ZodEnum<{
        credential_custody: "credential_custody";
        raw_sibling_blocking: "raw_sibling_blocking";
        mcp_direct_call_blocking: "mcp_direct_call_blocking";
        token_passthrough_blocking: "token_passthrough_blocking";
        wrapper_drift: "wrapper_drift";
        failure_closed: "failure_closed";
    }>;
    probeOutcome: z.ZodEnum<{
        passed: "passed";
        failed: "failed";
        inconclusive: "inconclusive";
    }>;
    sourceAuthority: z.ZodEnum<{
        unknown: "unknown";
        conformance_fixture: "conformance_fixture";
        runtime_probe: "runtime_probe";
        gateway_probe: "gateway_probe";
        operator_attestation: "operator_attestation";
        hosted_monitor: "hosted_monitor";
    }>;
    reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    observedAt: z.ZodString;
    expiresAt: z.ZodString;
    probeDigest: z.ZodString;
}, z.core.$strict>;
export type BypassProbe = z.infer<typeof BypassProbeSchema>;
export declare const requiredGatewayCheckedBypassProbeKinds: ("credential_custody" | "raw_sibling_blocking" | "mcp_direct_call_blocking" | "token_passthrough_blocking" | "wrapper_drift" | "failure_closed")[];
