import { type GatewayAdmissionSourceResult, type GatewayAdmissionSourceCommand } from "../../protocol/areas/gateway-gate/admission/source-writer";
import type { AuthorityCommitMarker, AuthorityCommitTemporalFence } from "../../protocol/store/authority-source";
import type { ResolvedAuthorityContext } from "../../protocol/authority-context/resolver";
import type { ProtocolStore } from "../../protocol/store/port";
export type GatewayAdmissionHostCommand = Omit<GatewayAdmissionSourceCommand, "actionContract" | "aggregateSnapshot" | "credentialSelectionBinding" | "exactConsequenceDescriptor" | "exactConsequenceDescriptorDigest" | "isolationGuards" | "isolationSnapshotDigest" | "policyGreenlightSource" | "temporalFence"> & Readonly<{
    actionContractId: string;
    observation: Readonly<{
        kind: "x402";
        token: unknown;
    }> | Readonly<{
        kind: "auth_md";
        token: unknown;
    }> | Readonly<{
        kind: "source_bound_consequence";
        token: unknown;
    }>;
}>;
export type GatewayAdmissionHostResult = GatewayAdmissionSourceResult | Readonly<{
    status: "committed";
    replayed: true;
    reconstructed: true;
    transactionDigest: `sha256:${string}`;
    temporalFence: Extract<AuthorityCommitTemporalFence, {
        kind: "store_time_in_half_open_interval";
    }>;
    commit: Readonly<{
        status: "committed";
        marker: AuthorityCommitMarker;
    }>;
}>;
export declare function commitObservedGatewayAdmission(input: Readonly<{
    combinedStore: object;
    authorityCarrier?: ProtocolStore;
    authorityContext?: ResolvedAuthorityContext;
    command: GatewayAdmissionHostCommand;
}>): Promise<GatewayAdmissionHostResult>;
