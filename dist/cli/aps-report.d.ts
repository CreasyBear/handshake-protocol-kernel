export declare function renderApsReportCommand(reportValue: unknown): import("./output").CliOutputEnvelope<{
    schemaVersion: string;
    proofBoundary: string;
    protectedAction: {
        [x: string]: unknown;
        actionClass: string;
        x402EvidenceProfile?: string | undefined;
        selectedPaymentRequirementIndex?: number | null | undefined;
        selectedPaymentRequirementDigest?: string | null | undefined;
    };
    authorityPath: Record<string, unknown>;
    evidencePosture: Record<string, unknown>;
    terminalPosture: Record<string, unknown>;
    phases: {
        phase: string;
        verdict: string;
    }[];
    missingProofObjects: Record<string, unknown>[];
}>;
