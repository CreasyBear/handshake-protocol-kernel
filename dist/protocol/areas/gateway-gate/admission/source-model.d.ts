import type { JsonValue } from "../../../foundation/schema-core";
import { type ResolvedAggregateConfiguration } from "../../aggregate-authority";
import type { ActionContract } from "../../action-contract";
import type { ExactConsequenceDescriptor } from "../../consequence-custody";
import { type CurrentPolicyGreenlightSource } from "../../policy-greenlight/admission/greenlight-readback";
import { type AuthorityCommitIdentity, type AuthorityCommitTemporalFence, type AuthorityPointerGuard, type AuthorityPointerMutation, type AuthoritySourceRecord, type AuthoritySourceScope } from "../../../store/authority-source";
export type GatewayAdmissionAggregateSnapshot = Readonly<{
    configuration: ResolvedAggregateConfiguration;
    contextGuard: AuthorityPointerGuard;
    configurationGuard: AuthorityPointerGuard;
    bucketFence: AuthorityPointerGuard;
    checkpointFence: AuthorityPointerGuard;
    actionContractId: string;
    actionContractDigest: `sha256:${string}`;
}>;
export type GatewayAdmissionCredentialBinding = Readonly<{
    tenantId: string;
    organizationId: string;
    principalId: string;
    gatewayId: string;
    actionClass: string;
    resourceRef: string;
    actionContractId: string;
    credentialRefId: string;
    credentialRefDigest: `sha256:${string}`;
    providerRegistryRef: string;
    providerRegistryDigest: `sha256:${string}`;
    signerAuthorityRef: string;
    signerAuthorityDigest: `sha256:${string}`;
    registryRef: string;
    registryVersion: string;
    registryDigest: `sha256:${string}`;
}>;
export type GatewayAdmissionSourceCommand = Readonly<{
    commandVersion: "gateway-admission-command-1";
    aggregateSnapshot: GatewayAdmissionAggregateSnapshot;
    actionContract: ActionContract;
    policyGreenlightSource: CurrentPolicyGreenlightSource;
    credentialSelectionBinding: GatewayAdmissionCredentialBinding;
    exactConsequenceDescriptor: ExactConsequenceDescriptor;
    exactConsequenceDescriptorDigest: `sha256:${string}`;
    isolationGuards: readonly AuthorityPointerGuard[];
    isolationSnapshotDigest: `sha256:${string}`;
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
}>;
export type PreparedGatewayAdmissionSourceTransaction = Readonly<{
    sourceScope: AuthoritySourceScope;
    identity: AuthorityCommitIdentity;
    requestMaterial: JsonValue;
    records: readonly AuthoritySourceRecord[];
    pointerGuards: readonly AuthorityPointerGuard[];
    pointerMutations: readonly AuthorityPointerMutation[];
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
    transactionDigest: `sha256:${string}`;
    reservationRecord: AuthoritySourceRecord;
    bucketRecord: AuthoritySourceRecord;
    checkpointRecord: AuthoritySourceRecord;
    outcomeRecord: AuthoritySourceRecord;
}>;
export declare function prepareGatewayAdmissionSourceTransaction(input: GatewayAdmissionSourceCommand): Promise<PreparedGatewayAdmissionSourceTransaction>;
