import { type AuthoritySourceRecord, type CurrentConsequenceCutoffAuthoritySourceMutation } from "../../../store/authority-source";
import { type ConsequenceCutoffSourceCommandV2 } from "./cutoff2-source-model";
export type BuiltConsequenceCutoffSourceMutationV2 = Readonly<{
    mutation: CurrentConsequenceCutoffAuthoritySourceMutation;
    cutoffRecord: AuthoritySourceRecord;
}>;
export declare function buildConsequenceCutoffSourceMutationV2(command: ConsequenceCutoffSourceCommandV2): Promise<BuiltConsequenceCutoffSourceMutationV2>;
