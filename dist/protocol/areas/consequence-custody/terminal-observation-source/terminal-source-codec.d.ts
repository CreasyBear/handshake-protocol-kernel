import { type AuthoritySourceRecord, type CurrentTerminalObservationAuthoritySourceMutation } from "../../../store/authority-source";
import { type TerminalSourceCommand } from "./terminal-source-model";
export type BuiltTerminalSourceMutation = Readonly<{
    mutation: CurrentTerminalObservationAuthoritySourceMutation;
    terminalRecord: AuthoritySourceRecord;
    reservationRecord: AuthoritySourceRecord;
    bucketRecord: AuthoritySourceRecord;
    checkpointRecord: AuthoritySourceRecord;
    isolationCauseRecord: AuthoritySourceRecord | null;
    isolationHeadRecord: AuthoritySourceRecord | null;
}>;
export declare function buildTerminalSourceMutation(command: TerminalSourceCommand): Promise<BuiltTerminalSourceMutation>;
