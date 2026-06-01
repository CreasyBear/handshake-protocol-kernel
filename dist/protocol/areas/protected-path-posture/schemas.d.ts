import { z } from "zod";
export declare const ProtectedPathStateSchema: z.ZodEnum<{
    gateway_checked: "gateway_checked";
    bypass_risk: "bypass_risk";
    advisory: "advisory";
    blind: "blind";
    fixture_only: "fixture_only";
}>;
export type ProtectedPathState = z.infer<typeof ProtectedPathStateSchema>;
export declare const RawSiblingToolStatusSchema: z.ZodEnum<{
    unknown: "unknown";
    absent: "absent";
    blocked: "blocked";
    present: "present";
}>;
export type RawSiblingToolStatus = z.infer<typeof RawSiblingToolStatusSchema>;
export declare const PostureSourceAuthoritySchema: z.ZodEnum<{
    unknown: "unknown";
    conformance_fixture: "conformance_fixture";
    runtime_probe: "runtime_probe";
    gateway_probe: "gateway_probe";
    operator_attestation: "operator_attestation";
    hosted_monitor: "hosted_monitor";
}>;
export type PostureSourceAuthority = z.infer<typeof PostureSourceAuthoritySchema>;
export declare const ProtectedPathBypassProbeCoverageSchema: z.ZodObject<{
    bypassProbeId: z.ZodString;
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
    probeDigest: z.ZodString;
}, z.core.$strict>;
export type ProtectedPathBypassProbeCoverage = z.infer<typeof ProtectedPathBypassProbeCoverageSchema>;
export declare const ProtectedPathPostureSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    protectedPathPostureId: z.ZodString;
    postureScopeKey: z.ZodString;
    runtimeAdapterId: z.ZodString;
    gatewayId: z.ZodString;
    actionClass: z.ZodString;
    resourceRef: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    postureState: z.ZodEnum<{
        gateway_checked: "gateway_checked";
        bypass_risk: "bypass_risk";
        advisory: "advisory";
        blind: "blind";
        fixture_only: "fixture_only";
    }>;
    credentialCustodyStatus: z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        gateway_resolved_from_vault: "gateway_resolved_from_vault";
        provider_gateway_held: "provider_gateway_held";
        unsafe_agent_visible: "unsafe_agent_visible";
        unsafe_runtime_visible: "unsafe_runtime_visible";
        agent_has_raw_credential: "agent_has_raw_credential";
        shared_or_unknown: "shared_or_unknown";
        no_mutation_credential: "no_mutation_credential";
    }>;
    rawSiblingToolStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
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
    bypassProbeIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    bypassProbeDigests: z.ZodDefault<z.ZodArray<z.ZodString>>;
    bypassProbeCoverage: z.ZodDefault<z.ZodArray<z.ZodObject<{
        bypassProbeId: z.ZodString;
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
        probeDigest: z.ZodString;
    }, z.core.$strict>>>;
    observedAt: z.ZodString;
    expiresAt: z.ZodString;
    postureDigest: z.ZodString;
}, z.core.$strict>;
export type ProtectedPathPosture = z.infer<typeof ProtectedPathPostureSchema>;
