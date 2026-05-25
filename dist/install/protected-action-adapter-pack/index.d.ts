import { z } from "zod";
export declare const ProtectedActionAdapterPackSchema: z.ZodObject<{
    adapterPackId: z.ZodString;
    adapterPackVersion: z.ZodString;
    actionFamily: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    parameterSchemaRef: z.ZodString;
    endpointEvidenceSchemaRef: z.ZodString;
    installCompilerRef: z.ZodString;
    policyRulePackRef: z.ZodString;
    gatewayObservedParameterValidatorRef: z.ZodString;
    receiptEvidenceMapperRef: z.ZodString;
    bypassProbeKinds: z.ZodArray<z.ZodEnum<{
        credential_custody: "credential_custody";
        raw_sibling_blocking: "raw_sibling_blocking";
        mcp_direct_call_blocking: "mcp_direct_call_blocking";
        token_passthrough_blocking: "token_passthrough_blocking";
        wrapper_drift: "wrapper_drift";
        failure_closed: "failure_closed";
    }>>;
    hostileFixtureRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ProtectedActionAdapterPack = z.infer<typeof ProtectedActionAdapterPackSchema>;
