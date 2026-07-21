import type { JsonValue } from "../../protocol/foundation/schema-core";
import type { ResolvedAuthorityContext } from "../../protocol/authority-context/resolver";
import type { ProtocolStore } from "../../protocol/store/port";
import { type SourceBoundConsequenceSurface } from "./source-bound-consequence";
import type { CredentialDispatchHost } from "./credential-dispatch-root";
export type ConsequenceDispatchResult = Readonly<{
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
export declare function dispatchObservedConsequence(input: Readonly<{
    combinedStore: object;
    authorityCarrier?: ProtocolStore;
    authorityContext?: ResolvedAuthorityContext;
    actionContractId: string;
    actionContractDigest: `sha256:${string}`;
    credentialHost: CredentialDispatchHost;
    preparation: unknown;
    surface: SourceBoundConsequenceSurface;
    adapterRef: string;
    adapterDigest: `sha256:${string}`;
    effectOperationRef: string;
    payload: JsonValue;
}>): Promise<ConsequenceDispatchResult>;
