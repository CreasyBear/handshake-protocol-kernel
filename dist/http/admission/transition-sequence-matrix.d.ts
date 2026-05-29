import type { TransitionRouteId } from "../routes/transition-invokers";
export declare const transitionSequenceMatrix: Record<TransitionRouteId, readonly TransitionRouteId[]>;
/**
 * Returns the declared prerequisite transition routes for a route id.
 */
export declare function prerequisiteTransitionsFor(routeId: TransitionRouteId): readonly TransitionRouteId[];
/**
 * Construction-time structural guard (D4). Verifies the sequence matrix stays
 * consistent with the registered transition route set:
 * - every registered route has exactly one matrix entry (coverage),
 * - every prerequisite references a registered route (referential integrity),
 * - the prerequisite graph is acyclic (no transition depends on itself).
 *
 * This catches matrix/registry drift the moment a new transition route is added
 * without a declared prerequisite, exactly like the mutation-route manifest
 * parity check. It does not authorize or re-evaluate any request.
 */
export declare function assertTransitionSequenceMatrixCoverage(): void;
