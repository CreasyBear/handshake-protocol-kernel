import type { BypassProbe, BypassProbeKind, BypassProbeOutcome } from "../../protocol/public/schemas";
import type { CreateBypassProbeInput } from "../../protocol/public/inputs";
export type BypassProbeExecutionScope = {
    tenantId: string;
    organizationId: string;
    runtimeAdapterId: string;
    gatewayId: string;
    actionClass: string;
    resourceRef: string;
    protectedSurfaceKind: string;
    expiresAt: string;
};
export type BypassProbeExecutionResult = Omit<CreateBypassProbeInput, "tenantId" | "organizationId" | "runtimeAdapterId" | "gatewayId" | "actionClass" | "resourceRef" | "protectedSurfaceKind" | "probeKind" | "expiresAt">;
export type BypassProbeExecutor = {
    probeKind: BypassProbeKind;
    execute(scope: BypassProbeExecutionScope): Promise<BypassProbeExecutionResult>;
};
export type BypassProbeExecutionProtocol = {
    createBypassProbe(input: CreateBypassProbeInput): Promise<BypassProbe>;
};
export type FixtureBypassProbePosture = Partial<Record<BypassProbeKind, BypassProbeOutcome>>;
export declare function runBypassProbeExecutors(protocol: BypassProbeExecutionProtocol, scope: BypassProbeExecutionScope, executors: readonly BypassProbeExecutor[]): Promise<BypassProbe[]>;
export declare function fixtureGatewayCheckedBypassProbeExecutors(posture?: FixtureBypassProbePosture): BypassProbeExecutor[];
