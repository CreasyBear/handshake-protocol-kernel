import type { JsonValue } from "../../../protocol/foundation/schema-core";
import type { AuthorityCommitMarker } from "../../../protocol/store/authority-source";
import type { ExactConsequenceDescriptor } from "../../../protocol/areas/consequence-custody";
export type SourceBoundConsequenceCommand = Readonly<{
    cutoffMarker: AuthorityCommitMarker;
    effectOperationRef: string;
    payload: JsonValue;
    payloadDigest: `sha256:${string}`;
}>;
export interface SourceBoundConsequenceSurface {
    invokeConsequence(command: SourceBoundConsequenceCommand): Promise<JsonValue>;
}
export type SourceBoundConsequenceObservation = object;
export type SourceBoundConsequenceInvocationCustody = object;
export type SourceBoundConsequenceBinding = Readonly<{
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
export type SourceBoundExactConsequence = Readonly<{
    descriptor: ExactConsequenceDescriptor;
    descriptorDigest: `sha256:${string}`;
}>;
