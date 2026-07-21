export declare const CLI_QUALITY_REPORT_SCHEMA_VERSION: "handshake.cli.quality-report.v1";
type QualityGate = {
    readonly id: string;
    readonly command: string;
    readonly coverage: readonly string[];
    readonly evidenceRefs: readonly string[];
};
export declare function qualityReportCommand(): import("..").CliOutputEnvelope<{
    schemaVersion: "handshake.cli.quality-report.v1";
    evidenceKind: "projection_readback";
    reportBoundary: string;
    generatedAt: string;
    gates: readonly QualityGate[];
    hostedReadinessEndpoint: string;
    executionStatus: string;
    nextCommands: string[];
    markdown: string;
    authorityCreatedByReport: boolean;
    greenlightCreatedByReport: boolean;
    gatewayCheckPerformedByReport: boolean;
    mutationAttemptedByReport: boolean;
    receiptExportCreatedByReport: boolean;
    rawInternalRecordIncluded: boolean;
    credentialMaterialIncluded: boolean;
    paymentMaterialIncluded: boolean;
    nonClaims: string[];
}>;
export {};
