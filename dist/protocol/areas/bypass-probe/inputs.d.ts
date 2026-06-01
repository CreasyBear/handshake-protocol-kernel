import { z } from "zod";
export declare const CreateBypassProbeInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
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
        inconclusive: "inconclusive";
        passed: "passed";
        failed: "failed";
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
    observedAt: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodString;
}, z.core.$strict>;
export type CreateBypassProbeInput = z.input<typeof CreateBypassProbeInputSchema>;
