import type { ZodType } from "zod";
import type { TransitionCallerRole } from "../admission/caller-auth";
import { type TransitionScopeResolver } from "./transition-scope-resolvers";
import type { TransitionRouteId } from "./transition-invokers";
export { transitionInvokers, type TransitionInvoker } from "./transition-invokers";
export type TransitionRouteDefinition = {
    routeId: TransitionRouteId;
    path: `/v0.2/${string}`;
    role: TransitionCallerRole;
    scopeResolver: TransitionScopeResolver;
    summary: string;
    requestSchema: ZodType;
    responseDescription: string;
    responseSchema: ZodType;
};
export type { TransitionScope, TransitionScopeResolver } from "./transition-scope-resolvers";
export declare const transitionRouteDefinitions: readonly [TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition, TransitionRouteDefinition];
