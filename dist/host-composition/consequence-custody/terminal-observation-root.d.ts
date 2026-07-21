import { type TerminalObservationToken } from "../../protocol/areas/consequence-custody/terminal-observation-source";
export type TerminalObservationHost = object;
export type TerminalObservationResult = Readonly<{
    observationKind: "provider_committed" | "observation_unavailable";
    observationRef: string;
    observationDigest: `sha256:${string}`;
}>;
export declare function createTerminalObservationHost(input: Readonly<{
    observerAuthorityRef: string;
    observerAuthorityDigest: `sha256:${string}`;
    observerVersion: string;
    observe(gatewayTransactionDigest: `sha256:${string}`): Promise<TerminalObservationResult>;
}>): TerminalObservationHost;
export declare function observeTerminalOutcome(host: unknown, sourceScope: Readonly<{
    tenantId: string;
    organizationId: string;
}>, gatewayTransactionDigest: `sha256:${string}`): Promise<TerminalObservationToken>;
