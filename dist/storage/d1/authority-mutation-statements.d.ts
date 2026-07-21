import type { AuthorityCommitRecordReference, AuthorityPointerGuard, AuthorityPointerMutation, NormalizedAuthorityProjectionIntent, NormalizedAuthoritySourceMutation, NormalizedAuthoritySourceRecord } from "../../protocol/store/authority-source";
export interface D1AuthorityMutationStatementFactory {
    authoritySourceRecordStatement(mutation: NormalizedAuthoritySourceMutation, record: NormalizedAuthoritySourceRecord): D1PreparedStatement;
    authoritySourceRecordPredecessorAssertionStatement(mutation: NormalizedAuthoritySourceMutation, record: NormalizedAuthoritySourceRecord): D1PreparedStatement;
    authorityCommitRecordRefStatement(mutation: NormalizedAuthoritySourceMutation, recordRef: AuthorityCommitRecordReference): D1PreparedStatement;
    authorityPointerGenesisStatement(mutation: NormalizedAuthoritySourceMutation, pointerMutation: AuthorityPointerMutation): D1PreparedStatement;
    authorityPointerExactUpdateStatement(mutation: NormalizedAuthoritySourceMutation, pointerMutation: AuthorityPointerMutation): D1PreparedStatement;
    authorityPointerTransitionStatement(mutation: NormalizedAuthoritySourceMutation, pointerMutation: AuthorityPointerMutation): D1PreparedStatement;
    authorityProjectionIntentStatement(mutation: NormalizedAuthoritySourceMutation, projectionIntent: NormalizedAuthorityProjectionIntent): D1PreparedStatement;
    authorityPointerGuardStatement(mutation: NormalizedAuthoritySourceMutation, pointerGuard: AuthorityPointerGuard): D1PreparedStatement;
    authorityCommitTemporalEvidenceStatement(mutation: NormalizedAuthoritySourceMutation): D1PreparedStatement;
    authoritySourceCommitStatement(mutation: NormalizedAuthoritySourceMutation): D1PreparedStatement;
    authoritySourceTemporalRealmBarrierReleaseStatement(mutation: NormalizedAuthoritySourceMutation): D1PreparedStatement;
}
export declare class D1AuthorityMutationStatements {
    private readonly statements;
    constructor(statements: D1AuthorityMutationStatementFactory);
    build(mutation: NormalizedAuthoritySourceMutation): D1PreparedStatement[];
}
