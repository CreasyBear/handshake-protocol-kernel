import { type ReconcileSurfaceOperationInput } from "./types";
import type { ProofGap } from "../proof-gap";
import type { ProtocolRecorder } from "../../events/records";
import { type SurfaceOperationReconciliation } from "./types";
import type { ProtocolStore } from "../../store/port";
export type SurfaceOperationReconciliationResult = {
    reconciliation: SurfaceOperationReconciliation;
    resolvedProofGaps: ProofGap[];
    createdProofGap: ProofGap | null;
};
export declare function reconcileSurfaceOperation(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: ReconcileSurfaceOperationInput): Promise<SurfaceOperationReconciliationResult>;
