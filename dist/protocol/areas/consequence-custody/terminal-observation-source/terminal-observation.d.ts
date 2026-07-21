export type TerminalObservationToken = object;
export type TerminalObservationState = Readonly<{
    sourceScope: Readonly<{
        tenantId: string;
        organizationId: string;
    }>;
    observerAuthorityRef: string;
    observerAuthorityDigest: `sha256:${string}`;
    observerVersion: string;
    gatewayTransactionDigest: `sha256:${string}`;
    observationKind: "provider_committed" | "observation_unavailable";
    observationRef: string;
    observationDigest: `sha256:${string}`;
}>;
export declare function registerTerminalObservation(token: object, state: TerminalObservationState): void;
export declare function readTerminalObservation(token: unknown): TerminalObservationState | null;
