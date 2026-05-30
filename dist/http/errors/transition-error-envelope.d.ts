import { z } from "zod";
import { HandshakeProtocolError } from "../../protocol/foundation/errors";
import { type FailureClass } from "../../protocol/foundation/failure-class";
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
    not_committed: "not_committed";
    committed: "committed";
    not_applicable: "not_applicable";
}>;
export declare const TransitionFailureClassSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    replay_refusal: "replay_refusal";
    auth: "auth";
    hosted_admission: "hosted_admission";
    protected_action_refusal: "protected_action_refusal";
    stale_admission: "stale_admission";
    internal: "internal";
}>;
export declare const TransitionFailurePhaseSchema: z.ZodNullable<z.ZodEnum<{
    transition: "transition";
    admission: "admission";
    readback: "readback";
}>>;
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
        not_committed: "not_committed";
        committed: "committed";
        not_applicable: "not_applicable";
    }>;
    requestIdentity: z.ZodNullable<z.ZodString>;
    proofRef: z.ZodNullable<z.ZodString>;
    refusalRef: z.ZodNullable<z.ZodString>;
    failureClass: z.ZodEnum<{
        proof_gap: "proof_gap";
        replay_refusal: "replay_refusal";
        auth: "auth";
        hosted_admission: "hosted_admission";
        protected_action_refusal: "protected_action_refusal";
        stale_admission: "stale_admission";
        internal: "internal";
    }>;
    failurePhase: z.ZodNullable<z.ZodEnum<{
        transition: "transition";
        admission: "admission";
        readback: "readback";
    }>>;
    problemType: z.ZodNullable<z.ZodString>;
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
            not_committed: "not_committed";
            committed: "committed";
            not_applicable: "not_applicable";
        }>;
        requestIdentity: z.ZodNullable<z.ZodString>;
        proofRef: z.ZodNullable<z.ZodString>;
        refusalRef: z.ZodNullable<z.ZodString>;
        failureClass: z.ZodEnum<{
            proof_gap: "proof_gap";
            replay_refusal: "replay_refusal";
            auth: "auth";
            hosted_admission: "hosted_admission";
            protected_action_refusal: "protected_action_refusal";
            stale_admission: "stale_admission";
            internal: "internal";
        }>;
        failurePhase: z.ZodNullable<z.ZodEnum<{
            transition: "transition";
            admission: "admission";
            readback: "readback";
        }>>;
        problemType: z.ZodNullable<z.ZodString>;
        issues: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").JsonValue, unknown, z.core.$ZodTypeInternals<import("../..").JsonValue, unknown>>>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TransitionFailureClass = FailureClass;
export type TransitionFailurePhase = z.infer<typeof TransitionFailurePhaseSchema>;
export type TransitionErrorEnvelope = z.infer<typeof TransitionErrorEnvelopeSchema>;
export type TransitionErrorResponseBody = z.infer<typeof TransitionErrorResponseSchema>;
export type TransitionErrorContext = {
    transitionName?: string | null;
    callerCustodyRole?: TransitionCallerRole | null;
    requestIdentity?: string | null;
    failurePhase?: TransitionFailurePhase;
};
export type TransitionErrorResult = {
    body: TransitionErrorResponseBody;
    status: number;
};
export declare function transitionErrorResult(error: unknown, context?: TransitionErrorContext): TransitionErrorResult;
export declare function transitionErrorBody(error: unknown, context?: TransitionErrorContext): TransitionErrorResponseBody;
export declare function httpStatusForFailureClass(failureClass: TransitionFailureClass, preferredStatus?: number): number;
export declare function failureClassForProtocolError(error: HandshakeProtocolError): TransitionFailureClass;
export declare function failurePhaseForError(code: string, context: TransitionErrorContext): TransitionFailurePhase;
