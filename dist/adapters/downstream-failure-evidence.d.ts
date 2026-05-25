import type { ReconcileSurfaceOperationInput } from "../protocol/areas/operation-lifecycle";
type DownstreamFailureEvidence = Pick<ReconcileSurfaceOperationInput, "downstreamRetryability" | "providerRequestRef" | "providerOperationRef" | "redactedDiagnosticsDigest" | "traceRef" | "spanRef" | "diagnosticsRedactionPosture" | "evidenceRefs">;
export declare function downstreamFailureEvidence(input: {
    adapterId: string;
    surfaceOperationRef: string;
    error: unknown;
    evidenceRef: string;
}): Promise<DownstreamFailureEvidence>;
export {};
