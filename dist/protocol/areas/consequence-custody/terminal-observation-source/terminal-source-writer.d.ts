import { type AuthorityMutationReadbackResult, type AuthoritySourceMutationResult, type AuthoritySourceStore, type HistoricalTerminalObservationCodec1AuthoritySourceMutation } from "../../../store/authority-source";
import { type BuiltTerminalSourceMutation } from "./terminal-source-codec";
export type TerminalSourceStore = Pick<AuthoritySourceStore, "commitCurrentTerminalObservationAuthorityMutation" | "readAuthorityMutation" | "readAuthorityCurrentRecords" | "getAuthorityCommit" | "getAuthoritySourceRecord" | "listAuthorityCommitRecordRefs" | "listAuthorityProjectionIntents">;
export type TerminalSourceResult = Readonly<{
    status: "committed";
    replayed: boolean;
    commitOrigin: "applied" | "reconstructed_after_attempt" | "preexisting";
    built: BuiltTerminalSourceMutation | ReconstructedTerminalSourceMutation;
    commit: Extract<AuthoritySourceMutationResult, {
        status: "committed";
    }>;
}> | Readonly<{
    status: "not_committed";
    built: BuiltTerminalSourceMutation;
    result: Exclude<AuthoritySourceMutationResult, {
        status: "committed";
    }>;
}> | Readonly<{
    status: "ambiguous";
    built: BuiltTerminalSourceMutation;
    readback: AuthorityMutationReadbackResult;
}>;
type ReconstructedTerminalSourceMutation = Omit<BuiltTerminalSourceMutation, "mutation"> & Readonly<{
    mutation: BuiltTerminalSourceMutation["mutation"] | HistoricalTerminalObservationCodec1AuthoritySourceMutation;
}>;
export declare function commitTerminalSourceObservation(store: TerminalSourceStore, observationToken: unknown): Promise<TerminalSourceResult>;
export {};
