import type { MutationAttempt } from "../gateway-gate";
import { type TransitionGuardResult } from "../../foundation/transition-guards";
export declare function guardSurfaceOperationReconciliation(mutationAttempt: MutationAttempt, input: {
    mutationAttemptId: string;
    idempotencyKey: string;
    observedSurfaceOperationRef: string | null;
}): TransitionGuardResult;
