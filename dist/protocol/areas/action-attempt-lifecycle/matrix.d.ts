import type { ProtocolTransitionId, TransitionOutcomeClass } from "../../navigation";
import { type ActionAttemptLifecycleEntry, type ActionAttemptLifecycleState } from "./types";
export type ActionAttemptLifecycleKey = `${ProtocolTransitionId}:${TransitionOutcomeClass}`;
export type ActionAttemptLifecycleMatrixEntry = ActionAttemptLifecycleEntry & {
    transitionId: ProtocolTransitionId;
    outcomeClass: TransitionOutcomeClass;
};
export declare const actionAttemptHostileTraceClasses: readonly ["unknown_consequential_tool", "raw_sibling_mutation_path", "dynamic_tool_or_params", "stale_or_abandoned_draft", "hidden_lifecycle_side_effect", "changed_payment_requirements", "missing_downstream_response", "params_mismatch"];
export type ActionAttemptHostileTraceClass = (typeof actionAttemptHostileTraceClasses)[number];
export type ActionAttemptHostileTraceEntry = ActionAttemptLifecycleEntry & {
    traceClass: ActionAttemptHostileTraceClass;
    sourceDocRef: "doc08:4.4.1" | "doc08:4.10";
};
export declare const actionAttemptHostileTraceMatrix: Record<ActionAttemptHostileTraceClass, ActionAttemptLifecycleEntry>;
export declare const actionAttemptLifecycleMatrix: Partial<Record<ActionAttemptLifecycleKey, ActionAttemptLifecycleEntry>>;
export declare function actionAttemptLifecycleKey(transitionId: ProtocolTransitionId, outcomeClass: TransitionOutcomeClass): ActionAttemptLifecycleKey;
export declare function actionAttemptLifecycleEntry(transitionId: ProtocolTransitionId, outcomeClass: TransitionOutcomeClass): ActionAttemptLifecycleMatrixEntry;
export declare function actionAttemptLifecycleEntries(): ActionAttemptLifecycleMatrixEntry[];
export declare function actionAttemptHostileTraceEntry(traceClass: ActionAttemptHostileTraceClass): ActionAttemptHostileTraceEntry;
export declare function actionAttemptHostileTraceEntries(): ActionAttemptHostileTraceEntry[];
export declare function actionAttemptLifecycleStatesForTransition(transitionId: ProtocolTransitionId): ActionAttemptLifecycleState[];
