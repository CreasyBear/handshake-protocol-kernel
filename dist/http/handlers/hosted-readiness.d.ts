import type { Context } from "hono";
import { type HostedReadinessReport } from "../admission/hosted-admission-config";
import type { AppOptions, WorkerBindings } from "../app-options";
import type { ProtocolStore } from "../../protocol/store/port";
export declare function handleHostedReadiness(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions, fallbackStore: ProtocolStore | null): Promise<Response>;
export declare function buildHostedReadinessReport(env: WorkerBindings | undefined, options: AppOptions, fallbackStore: ProtocolStore | null): Promise<HostedReadinessReport>;
