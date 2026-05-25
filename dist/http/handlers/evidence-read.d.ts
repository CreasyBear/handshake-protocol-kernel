import type { Context } from "hono";
import type { ProtocolStore } from "../../protocol/store/port";
import type { AppOptions, WorkerBindings } from "../app-options";
import type { EvidenceReadRouteDefinition } from "../routes/evidence-read-route-registry";
export declare function handleEvidenceRead(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions, fallbackStore: ProtocolStore | null, route: EvidenceReadRouteDefinition): Promise<Response>;
