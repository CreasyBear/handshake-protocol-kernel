import { Hono } from "hono";
import type { AppOptions, WorkerBindings } from "./app-options";
export type { AppOptions, WorkerBindings } from "./app-options";
export declare function createApp(options?: AppOptions): Hono<{
    Bindings: WorkerBindings;
}, import("hono/types").BlankSchema, "/">;
