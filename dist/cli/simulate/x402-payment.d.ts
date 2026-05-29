export declare function simulateX402PaymentCommand(input: {
    cwd: string;
}): Promise<import("..").CliOutputEnvelope<{
    simulationKind: string;
    cwd: string;
    simulatedOutcome: string;
    clearanceChainPresent: boolean;
}>>;
