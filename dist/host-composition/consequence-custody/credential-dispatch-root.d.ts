import { type CredentialSelectionBinding, type CredentialSelectionPreparationResult, type CredentialSelectionRegistry, type CredentialSelectionRequest } from "../../protocol/areas/credential-custody/authority-selection";
export type { CredentialSelectionRegistry, CredentialSelectionRequest, } from "../../protocol/areas/credential-custody/authority-selection";
export type CredentialDispatchHost = Readonly<{
    prepareCredentialSelection(request: CredentialSelectionRequest): CredentialSelectionPreparationResult;
    readCredentialSelectionPreparation(preparation: unknown): CredentialSelectionBinding | null;
}>;
export declare function createCredentialDispatchHost(input: Readonly<{
    registry: CredentialSelectionRegistry;
}>): CredentialDispatchHost;
export declare function matchesCredentialDispatchHostPreparationAuthority(host: unknown, preparation: unknown, candidate: unknown): boolean;
export declare function readCredentialDispatchHostPreparation(host: unknown, preparation: unknown): CredentialSelectionBinding | null;
export declare function readCredentialDispatchHostPreparationAuthority(host: unknown, preparation: unknown): object | null;
