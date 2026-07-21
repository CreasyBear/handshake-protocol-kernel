import { type AuthoritySourceRecord, type CurrentGatewayAuthoritySourceMutation } from "../../../store/authority-source";
import { type GatewayAdmissionSourceCommand } from "./source-model";
export type { GatewayAdmissionAggregateSnapshot, GatewayAdmissionCredentialBinding, GatewayAdmissionSourceCommand, } from "./source-model";
export type BuiltGatewayAdmissionSourceMutation = Readonly<{
    mutation: CurrentGatewayAuthoritySourceMutation;
    transactionDigest: `sha256:${string}`;
    reservationRecord: AuthoritySourceRecord;
    bucketRecord: AuthoritySourceRecord;
    checkpointRecord: AuthoritySourceRecord;
    outcomeRecord: AuthoritySourceRecord;
}>;
export declare function buildGatewayAdmissionSourceMutation(command: GatewayAdmissionSourceCommand): Promise<BuiltGatewayAdmissionSourceMutation>;
