import type { ResolvedAuthorityContext } from "../../protocol/authority-context/resolver";
import type { ProtocolStore } from "../../protocol/store/port";
import { type CredentialSelectionRegistry, type CredentialSelectionRequest } from "./credential-dispatch-root";
export type X402FusedDispatchResult = Readonly<{
    status: "invoked";
    cutoffMarker: Readonly<{
        manifestVersion: "authority-source-manifest-11";
        manifestDigest: `sha256:${string}`;
    }>;
    evidenceDigest: `sha256:${string}`;
}> | Readonly<{
    status: "recovery_only" | "not_committed" | "invocation_unknown";
    cutoffMarker: Readonly<{
        manifestVersion: "authority-source-manifest-11";
        manifestDigest: `sha256:${string}`;
    }> | null;
    evidence: null;
}>;
export declare function createX402SelectedConsequenceHost(input: Readonly<{
    combinedStore: object;
    authorityCarrier?: ProtocolStore;
    authorityContext?: ResolvedAuthorityContext;
    credentialRegistry: CredentialSelectionRegistry;
    credentialSelectionRequest: CredentialSelectionRequest;
}>): Readonly<{
    dispatch(command: Readonly<{
        actionContractId: string;
    }>): Promise<X402FusedDispatchResult>;
}>;
