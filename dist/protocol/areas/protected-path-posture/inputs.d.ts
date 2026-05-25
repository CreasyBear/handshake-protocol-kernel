import { z } from "zod";
export declare const CreateProtectedPathPostureInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
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
    observedAt: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodString;
}, z.core.$strict>;
export type CreateProtectedPathPostureInput = z.input<typeof CreateProtectedPathPostureInputSchema>;
