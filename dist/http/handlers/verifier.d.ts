import type { Context } from "hono";
import type { AppOptions, WorkerBindings } from "../app-options";
export declare function handleVerifierMetadata(c: Context): Promise<Response>;
export declare function handleVerifierKeySet(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions): Promise<Response>;
export declare function handleVerifierJwks(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions): Promise<Response>;
export declare function handleVerifierStatus(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions): Promise<Response>;
export declare function handleHostedAuthorityCertificateVerify(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions): Promise<Response>;
