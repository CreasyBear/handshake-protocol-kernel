import { type AuthorityCurrentPointerRead, type AuthorityPointerIdentity, type AuthoritySourceMutation, type AuthoritySourceMutationResult, type AuthoritySourceStore } from "./authority-source";
export declare const AUTHORITY_COMMIT_ATTEMPT_LIMIT: 3;
export type AuthorityCommitCoordinatorStore = Pick<AuthoritySourceStore, "commitAuthorityMutation" | "readAuthorityMutation" | "readAuthorityCurrentPointers">;
export type AuthorityCasConflict = Extract<AuthoritySourceMutationResult, {
    status: "cas_conflict";
}>;
export type AuthorityMutationRebuildContext = Readonly<{
    /**
     * The adapter attempt that conflicted. Attempts 1 and 2 can rebuild;
     * attempt 3 is terminal and never invokes caller code.
     */
    attempt: 1 | 2;
    conflict: AuthorityCasConflict;
    /**
     * One coherent read containing every pointer identity frozen from the
     * initial mutation, ordered by that normalized identity set.
     */
    currentPointers: readonly AuthorityCurrentPointerRead[];
}>;
export type AuthorityMutationRebuilder = (context: AuthorityMutationRebuildContext) => AuthoritySourceMutation | Promise<AuthoritySourceMutation>;
export type AuthorityBoundedCasConflict = Readonly<{
    status: "bounded_cas_conflict";
    attempts: typeof AUTHORITY_COMMIT_ATTEMPT_LIMIT;
    pointer: AuthorityPointerIdentity;
    current: AuthorityCasConflict["current"];
}>;
export type AuthorityCommitCoordinatorAmbiguity = Readonly<{
    status: "ambiguous_readback";
    reason: "post_attempt_absence_unproven" | "post_attempt_readback_unavailable" | "post_attempt_readback_invalid";
}>;
export type AuthorityCommitCoordinatorResult = Exclude<AuthoritySourceMutationResult, {
    status: "cas_conflict";
}> | AuthorityBoundedCasConflict | AuthorityCommitCoordinatorAmbiguity;
export declare function commitAuthorityMutationWithBoundedRebuild(input: {
    store: AuthorityCommitCoordinatorStore;
    mutation: AuthoritySourceMutation;
    rebuild: AuthorityMutationRebuilder;
}): Promise<AuthorityCommitCoordinatorResult>;
