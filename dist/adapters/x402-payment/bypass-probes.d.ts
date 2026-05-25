import type { BypassProbeExecutor, BypassProbeExecutionScope } from "../protected-path-probes";
import { type X402PaymentConformancePosture } from "./conformance";
export type X402PaymentHostileProbeSurface = {
    readConformancePosture(scope: BypassProbeExecutionScope): Promise<X402PaymentConformancePosture>;
};
export declare function x402PaymentHostileBypassProbeExecutors(surface: X402PaymentHostileProbeSurface): BypassProbeExecutor[];
