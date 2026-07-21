type Digest = `sha256:${string}`;
export type CredentialSelectionRegistryEntry = Readonly<{
    actionAuthority: object;
    actionContractId: string;
    tenantId: string;
    organizationId: string;
    principalId: string;
    gatewayId: string;
    actionClass: string;
    resourceRef: string;
    credentialRefId: string;
    credentialRefDigest: Digest;
    providerRegistryRef: string;
    providerRegistryDigest: Digest;
    signerAuthorityRef: string;
    signerAuthorityDigest: Digest;
    custodyState: "current" | "stale" | "revoked";
    expiresAt: string;
    signerAuthority: object;
}>;
export type CredentialSelectionRegistry = Readonly<{
    registryRef: string;
    registryVersion: string;
    registryDigest: Digest;
    entries: readonly CredentialSelectionRegistryEntry[];
}>;
export type CredentialSelectionRequest = Readonly<{
    actionAuthority: object;
    observed: Readonly<{
        credentialRefId: string;
        credentialRefDigest: Digest;
        providerRegistryRef: string;
        providerRegistryDigest: Digest;
        signerAuthorityRef: string;
    }>;
}>;
export type CredentialSelectionPreparation = object;
export type CredentialSelectionBinding = Readonly<{
    tenantId: string;
    organizationId: string;
    principalId: string;
    gatewayId: string;
    actionClass: string;
    resourceRef: string;
    actionContractId: string;
    credentialRefId: string;
    credentialRefDigest: Digest;
    providerRegistryRef: string;
    providerRegistryDigest: Digest;
    signerAuthorityRef: string;
    signerAuthorityDigest: Digest;
    registryRef: string;
    registryVersion: string;
    registryDigest: Digest;
}>;
export type CredentialSelectionPreparationResult = Readonly<{
    status: "prepared";
    preparation: CredentialSelectionPreparation;
}> | Readonly<{
    status: "refused";
    reason: "credential_selection_request_invalid" | "credential_selection_not_unique" | "credential_selection_custody_unavailable" | "credential_selection_observation_mismatch";
}>;
export declare function bindCredentialSelectionHost(registry: CredentialSelectionRegistry): object;
export declare function prepareCredentialSelection(hostToken: object, request: CredentialSelectionRequest): CredentialSelectionPreparationResult;
export declare function matchesCredentialSelectionPreparationSignerAuthority(hostToken: object, preparation: unknown, candidate: unknown): boolean;
export declare function readCredentialSelectionPreparation(hostToken: object, preparation: unknown): CredentialSelectionBinding | null;
export declare function readCredentialSelectionPreparationSignerAuthority(hostToken: object, preparation: unknown): object | null;
export {};
