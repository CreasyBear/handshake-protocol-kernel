import { z } from "zod";
import type { TransitionCallerRole } from "../admission/caller-auth";
export declare const TransitionErrorRetryabilitySchema: z.ZodEnum<{
    terminal: "terminal";
    review_required: "review_required";
    ambiguous: "ambiguous";
    retryable: "retryable";
    recoverable: "recoverable";
}>;
export declare const TransitionCommitStateSchema: z.ZodEnum<{
    unknown: "unknown";
    not_started: "not_started";
    not_applicable: "not_applicable";
    not_committed: "not_committed";
    committed: "committed";
}>;
export declare const TransitionErrorEnvelopeSchema: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    transitionName: z.ZodNullable<z.ZodString>;
    callerCustodyRole: z.ZodNullable<z.ZodEnum<{
        control_plane: "control_plane";
        runtime_evidence: "runtime_evidence";
        gateway_custody: "gateway_custody";
        review_custody: "review_custody";
    }>>;
    retryability: z.ZodEnum<{
        terminal: "terminal";
        review_required: "review_required";
        ambiguous: "ambiguous";
        retryable: "retryable";
        recoverable: "recoverable";
    }>;
    commitState: z.ZodEnum<{
        unknown: "unknown";
        not_started: "not_started";
        not_applicable: "not_applicable";
        not_committed: "not_committed";
        committed: "committed";
    }>;
    requestIdentity: z.ZodNullable<z.ZodString>;
    proofRef: z.ZodNullable<z.ZodString>;
    refusalRef: z.ZodNullable<z.ZodString>;
    issues: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").JsonValue, unknown, z.core.$ZodTypeInternals<import("../..").JsonValue, unknown>>>>;
}, z.core.$strict>;
export declare const TransitionErrorResponseSchema: z.ZodObject<{
    error: z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        transitionName: z.ZodNullable<z.ZodString>;
        callerCustodyRole: z.ZodNullable<z.ZodEnum<{
            control_plane: "control_plane";
            runtime_evidence: "runtime_evidence";
            gateway_custody: "gateway_custody";
            review_custody: "review_custody";
        }>>;
        retryability: z.ZodEnum<{
            terminal: "terminal";
            review_required: "review_required";
            ambiguous: "ambiguous";
            retryable: "retryable";
            recoverable: "recoverable";
        }>;
        commitState: z.ZodEnum<{
            unknown: "unknown";
            not_started: "not_started";
            not_applicable: "not_applicable";
            not_committed: "not_committed";
            committed: "committed";
        }>;
        requestIdentity: z.ZodNullable<z.ZodString>;
        proofRef: z.ZodNullable<z.ZodString>;
        refusalRef: z.ZodNullable<z.ZodString>;
        issues: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").JsonValue, unknown, z.core.$ZodTypeInternals<import("../..").JsonValue, unknown>>>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TransitionErrorEnvelope = z.infer<typeof TransitionErrorEnvelopeSchema>;
export type TransitionErrorResponseBody = z.infer<typeof TransitionErrorResponseSchema>;
export type TransitionErrorContext = {
    transitionName?: string | null;
    callerCustodyRole?: TransitionCallerRole | null;
    requestIdentity?: string | null;
};
export type TransitionErrorResult = {
    body: TransitionErrorResponseBody;
    status: number;
};
export declare function transitionErrorResult(error: unknown, context?: TransitionErrorContext): TransitionErrorResult;
export declare function transitionErrorBody(error: unknown, context?: TransitionErrorContext): TransitionErrorResponseBody;
