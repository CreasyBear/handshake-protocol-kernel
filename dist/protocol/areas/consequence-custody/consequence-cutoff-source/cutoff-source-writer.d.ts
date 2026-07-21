import { type AuthorityMutationReadbackResult, type AuthoritySourceMutationResult, type AuthoritySourceStore } from "../../../store/authority-source";
import { type BuiltConsequenceCutoffSourceMutationV2 } from "./cutoff2-source-codec";
import type { ConsequenceCutoffSourceCommandV2 } from "./cutoff2-source-model";
import { type AppliedConsequenceCutoffCapability } from "./applied-cutoff-capability";
export type ConsequenceCutoffSourceStore = Pick<AuthoritySourceStore, "commitCurrentConsequenceCutoffAuthorityMutation" | "readAuthorityMutation" | "readAuthorityCurrentRecords" | "getAuthorityCommit" | "getAuthoritySourceRecord">;
export type ConsequenceCutoffSourceInput = Omit<ConsequenceCutoffSourceCommandV2, "commandVersion" | "gatewayAdmissionRecord" | "gatewayAdmissionCommit">;
export type ConsequenceCutoffSourceResult = Readonly<{
    status: "committed";
    replayed: boolean;
    commitOrigin: "applied" | "reconstructed_after_attempt" | "preexisting";
    built: BuiltConsequenceCutoffSourceMutationV2;
    commit: Extract<AuthoritySourceMutationResult, {
        status: "committed";
    }>;
    invocationCapability: AppliedConsequenceCutoffCapability | null;
}> | Readonly<{
    status: "not_committed";
    built: BuiltConsequenceCutoffSourceMutationV2;
    result: Exclude<AuthoritySourceMutationResult, {
        status: "committed";
    }>;
}> | Readonly<{
    status: "ambiguous";
    built: BuiltConsequenceCutoffSourceMutationV2;
    readback: AuthorityMutationReadbackResult;
}>;
export declare function commitConsequenceCutoffSourceCommand(store: ConsequenceCutoffSourceStore, input: ConsequenceCutoffSourceInput): Promise<ConsequenceCutoffSourceResult>;
