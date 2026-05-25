import type { Context } from "hono";
import type { ProtocolStore } from "../../protocol/store/port";
import type { AppOptions, WorkerBindings } from "../app-options";
export declare function handleInternalRecordRead(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions, fallbackStore: ProtocolStore | null): Promise<Response>;
