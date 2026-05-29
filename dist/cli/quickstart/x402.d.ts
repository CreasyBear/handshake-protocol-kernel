export type QuickstartStepEnvelope = {
    stepId: string;
    command: string;
    ok: boolean;
    reasonCodes: readonly string[];
    evidenceRefs: readonly string[];
    authorityCreated: false;
    greenlightCreated: false;
    gatewayCheckPerformed: false;
    mutationAttempted: false;
};
export declare function runX402Quickstart(input: {
    cwd: string;
    installInputPath?: string | null;
}): Promise<import("..").CliOutputEnvelope<{
    steps: QuickstartStepEnvelope[];
}>>;
