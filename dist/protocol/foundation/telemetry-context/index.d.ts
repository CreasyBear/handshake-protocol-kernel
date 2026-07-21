import { z } from "zod";
export declare const TelemetryTraceIdSchema: z.ZodString;
export type TelemetryTraceId = z.infer<typeof TelemetryTraceIdSchema>;
export declare const TelemetrySpanIdSchema: z.ZodString;
export type TelemetrySpanId = z.infer<typeof TelemetrySpanIdSchema>;
export declare const TelemetryTraceFlagsSchema: z.ZodString;
export type TelemetryTraceFlags = z.infer<typeof TelemetryTraceFlagsSchema>;
export declare const TelemetryTraceparentSchema: z.ZodString;
export type TelemetryTraceparent = z.infer<typeof TelemetryTraceparentSchema>;
export declare const RedactedTelemetryContextSourceSchema: z.ZodEnum<{
    w3c_traceparent: "w3c_traceparent";
    explicit_log_correlation: "explicit_log_correlation";
}>;
export type RedactedTelemetryContextSource = z.infer<typeof RedactedTelemetryContextSourceSchema>;
export declare const RedactedTelemetryLogCorrelationFieldsSchema: z.ZodObject<{
    trace_id: z.ZodString;
    span_id: z.ZodString;
    trace_flags: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type RedactedTelemetryLogCorrelationFields = z.infer<typeof RedactedTelemetryLogCorrelationFieldsSchema>;
export declare const RedactedTelemetryContextSchema: z.ZodObject<{
    traceparent: z.ZodNullable<z.ZodString>;
    traceId: z.ZodString;
    spanId: z.ZodString;
    traceFlags: z.ZodNullable<z.ZodString>;
    source: z.ZodEnum<{
        w3c_traceparent: "w3c_traceparent";
        explicit_log_correlation: "explicit_log_correlation";
    }>;
    redactionPosture: z.ZodLiteral<"context_only">;
    logCorrelationFields: z.ZodObject<{
        trace_id: z.ZodString;
        span_id: z.ZodString;
        trace_flags: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
    authorityCreatedByTelemetry: z.ZodLiteral<false>;
    gatewayCheckPerformedByTelemetry: z.ZodLiteral<false>;
    mutationAttemptedByTelemetry: z.ZodLiteral<false>;
}, z.core.$strict>;
export type RedactedTelemetryContext = z.infer<typeof RedactedTelemetryContextSchema>;
export declare const RedactedTelemetryContextInputSchema: z.ZodObject<{
    traceparent: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    traceId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    spanId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    traceFlags: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type RedactedTelemetryContextInput = z.input<typeof RedactedTelemetryContextInputSchema>;
export declare function redactedTelemetryContextFromInput(input: RedactedTelemetryContextInput | null | undefined): RedactedTelemetryContext | null;
