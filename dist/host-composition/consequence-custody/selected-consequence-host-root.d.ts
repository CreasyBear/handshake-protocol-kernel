import type { ResolvedAuthorityContext } from "../../protocol/authority-context/resolver";
import type { JsonValue } from "../../protocol/foundation/schema-core";
import type { ProtocolStore } from "../../protocol/store/port";
import { type CredentialSelectionRegistry, type CredentialSelectionRequest } from "./credential-dispatch-root";
import { type ConsequenceDispatchResult } from "./consequence-dispatch-root";
export type SelectedConsequenceCommand = Readonly<{
    actionContractId: string;
}>;
export type SelectedConsequenceHost = Readonly<{
    dispatch(command: SelectedConsequenceCommand): Promise<ConsequenceDispatchResult>;
}>;
/**
 * Private provider-host composition root.
 *
 * Credential selection, the exact effect object, store authority, and adapter
 * identity are captured once. Per-attempt callers receive no parameter through
 * which they can replace those authority-bearing objects.
 */
export declare function createSelectedConsequenceHost(input: Readonly<{
    combinedStore: object;
    authorityCarrier?: ProtocolStore;
    authorityContext?: ResolvedAuthorityContext;
    credentialRegistry: CredentialSelectionRegistry;
    credentialSelectionRequest: CredentialSelectionRequest;
    adapterRef: string;
    adapterDigest: `sha256:${string}`;
    selectedConsequence: Readonly<{
        actionContractDigest: `sha256:${string}`;
        effectOperationRef: string;
        payload: JsonValue;
    }>;
}>): SelectedConsequenceHost;
