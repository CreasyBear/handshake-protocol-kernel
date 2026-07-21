import { type AuthorityMutationReadbackResult, type AuthoritySourceMutationResult, type AuthoritySourceStore } from "../../../store/authority-source";
import { type BuiltGatewayAdmissionSourceMutation, type GatewayAdmissionSourceCommand } from "./source-codec";
export type { GatewayAdmissionAggregateSnapshot, GatewayAdmissionCredentialBinding, GatewayAdmissionSourceCommand, } from "./source-codec";
export type GatewayAdmissionSourceStore = Pick<AuthoritySourceStore, "commitCurrentGatewayAuthorityMutation" | "readAuthorityMutation">;
export type GatewayAdmissionSourceResult = Readonly<{
    status: "committed";
    replayed: boolean;
    built: BuiltGatewayAdmissionSourceMutation;
    commit: Extract<AuthoritySourceMutationResult, {
        status: "committed";
    }>;
}> | Readonly<{
    status: "not_committed";
    built: BuiltGatewayAdmissionSourceMutation;
    result: Exclude<AuthoritySourceMutationResult, {
        status: "committed";
    }>;
}> | Readonly<{
    status: "ambiguous";
    built: BuiltGatewayAdmissionSourceMutation;
    readback: AuthorityMutationReadbackResult;
}>;
export declare function commitGatewayAdmissionSourceCommand(store: GatewayAdmissionSourceStore, command: GatewayAdmissionSourceCommand): Promise<GatewayAdmissionSourceResult>;
