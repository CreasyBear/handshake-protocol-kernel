import type { Context } from "hono";
import type { TransitionRequestCallerEvidence } from "../../protocol/context/request-contexts";
import type { AppOptions, WorkerBindings } from "../app-options";
import type { EvidenceReadRouteDefinition } from "../routes/evidence-read-route-registry";
import { type TransitionCallerIdentity } from "./hosted-caller-identity";
import type { TransitionErrorContext } from "../errors/transition-error-envelope";
import type { TransitionRouteDefinition } from "../routes/transition-route-registry";
export type AdmissionResult = {
    failure: Response | null;
    hostedIdentity: TransitionCallerIdentity | null;
    callerEvidence: TransitionRequestCallerEvidence | undefined;
};
export declare function authorizeTransitionAdmission(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions, route: TransitionRouteDefinition, context: TransitionErrorContext): Promise<AdmissionResult>;
export declare function authorizeEvidenceReadAdmission(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions, route: EvidenceReadRouteDefinition, context: TransitionErrorContext): Promise<AdmissionResult>;
export declare function authorizeHostedRawRecordReadAdmission(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions): Promise<AdmissionResult>;
export declare function authorizeHostedReadinessAdmission(c: Context<{
    Bindings: WorkerBindings;
}>, options: AppOptions): Promise<AdmissionResult>;
