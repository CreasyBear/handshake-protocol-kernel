import type { ReconcileSurfaceOperationInput } from "../protocol/areas/operation-lifecycle";
type DownstreamFailureEvidence = Pick<ReconcileSurfaceOperationInput, "downstreamRetryability" | "providerRequestRef" | "providerOperationRef" | "redactedDiagnosticsDigest" | "traceRef" | "spanRef" | "diagnosticsRedactionPosture" | "evidenceRefs">;
export type DownstreamEffectCommitState = "not_started" | "confirmed_not_committed" | "committed" | "unknown";
export type DownstreamFailureObservation = {
    observedDownstreamStatus: "failed" | "unknown";
    orphanIsolationRequested: boolean;
};
/**
 * A thrown adapter error is not proof that consequence did not happen.
 *
 * Before the mutation surface is invoked, failure is known to be pre-cutoff.
 * After invocation, the trusted gateway surface must explicitly attest that no
 * effect committed; otherwise Handshake records an unknown outcome and keeps
 * the protected surface blocked for recovery.
 */
export declare function downstreamFailureObservation(input: {
    error: unknown;
    effectInvocationStarted: boolean;
}): DownstreamFailureObservation;
export declare function withDownstreamEffectCommitState(error: unknown, effectCommitState: DownstreamEffectCommitState): Error;
export declare function downstreamFailureEvidence(input: {
    adapterId: string;
    surfaceOperationRef: string;
    error: unknown;
    evidenceRef: string;
}): Promise<DownstreamFailureEvidence>;
export {};
