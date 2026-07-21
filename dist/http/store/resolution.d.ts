import type { Context } from "hono";
import { HandshakeKernel } from "../../protocol/kernel";
import type { ProtocolStore } from "../../protocol/store/port";
import type { TransitionRequestContextDraft } from "../../protocol/context/request-contexts";
import type { WorkerBindings } from "../app-options";
export declare function kernelFor(store: ProtocolStore, requestContext?: TransitionRequestContextDraft): HandshakeKernel;
export declare function storeFor(c: Context<{
    Bindings: WorkerBindings;
}>, fallbackStore: ProtocolStore | null): ProtocolStore;
