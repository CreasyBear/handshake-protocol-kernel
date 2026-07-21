import { type AuthoritySourceRecord, type HistoricalConsequenceCutoffCodec1AuthoritySourceMutation } from "../../../store/authority-source";
import type { ConsequenceCutoffSourceCommand } from "../types";
export type BuiltConsequenceCutoffSourceMutation = Readonly<{
    mutation: HistoricalConsequenceCutoffCodec1AuthoritySourceMutation;
    cutoffRecord: AuthoritySourceRecord;
}>;
export declare function buildConsequenceCutoffSourceMutation(command: ConsequenceCutoffSourceCommand): Promise<BuiltConsequenceCutoffSourceMutation>;
