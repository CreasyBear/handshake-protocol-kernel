import type { OperationReadbackProjection } from "../protocol/evidence-projections/schemas";
export declare const OPERATION_READBACK_VIEW_SCHEMA_VERSION: "handshake.cli.operation-readback-view.v1";
export type OperationReadbackCliView = {
    readonly schemaVersion: typeof OPERATION_READBACK_VIEW_SCHEMA_VERSION;
    readonly viewBoundary: "redacted_cli_projection_view";
    readonly title: string;
    readonly status: OperationReadbackProjection["operationStatus"];
    readonly stage: OperationReadbackProjection["latestAuthoritativeStage"];
    readonly supportSeverity: OperationReadbackProjection["supportContext"]["supportSeverity"];
    readonly greenlightUsePosture: OperationReadbackProjection["greenlightUsePosture"];
    readonly nextMechanism: OperationReadbackProjection["nextMechanism"];
    readonly nextCommand: string | null;
    readonly stageRows: readonly OperationReadbackStageRow[];
    readonly problemPosture: {
        readonly reasonCodes: readonly string[];
        readonly proofGapRefs: readonly string[];
        readonly refusalRefs: readonly string[];
        readonly requiresNewContract: boolean;
        readonly safeToReuseGreenlight: boolean;
    };
    readonly telemetry: {
        readonly traceRef: string | null;
        readonly spanRef: string | null;
        readonly traceId: string | null;
        readonly spanId: string | null;
        readonly source: string | null;
    };
    readonly support: {
        readonly supportContextRef: string;
        readonly docsUrl: string | null;
        readonly nextCommand: string | null;
    };
    readonly markdown: string;
    readonly htmlFragment: string;
    readonly authorityCreatedByView: false;
    readonly greenlightCreatedByView: false;
    readonly gatewayCheckPerformedByView: false;
    readonly mutationAttemptedByView: false;
    readonly receiptExportCreatedByView: false;
    readonly credentialMaterialIncluded: false;
    readonly paymentMaterialIncluded: false;
};
type OperationReadbackStageRow = {
    readonly label: string;
    readonly ref: string | null;
    readonly status: string;
};
export declare function operationReadbackCliView(projection: OperationReadbackProjection): OperationReadbackCliView;
export {};
