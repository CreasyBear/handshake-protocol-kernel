import { z } from "zod";
import type { BypassProbeExecutor, BypassProbeExecutionScope } from "../protected-path-probes";
export declare const AuthMdProtectedApiCallBypassPostureSchema: z.ZodObject<{
    credentialCustodyStatus: z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        runtime_exposed: "runtime_exposed";
    }>;
    rawBearerPassthroughStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    directHttpCallStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    siblingMcpCallStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    browserToolCallStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    rawNetworkCallStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    tokenReplayStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    metadataFreshnessStatus: z.ZodEnum<{
        unknown: "unknown";
        stale: "stale";
        fresh: "fresh";
    }>;
    unsafeRetryLoopStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    gatewayWrapperDriftStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        present: "present";
    }>;
    failureClosedStatus: z.ZodEnum<{
        unknown: "unknown";
        passed: "passed";
        failed: "failed";
    }>;
}, z.core.$strict>;
export type AuthMdProtectedApiCallBypassPosture = z.infer<typeof AuthMdProtectedApiCallBypassPostureSchema>;
export type AuthMdProtectedApiCallBypassProbeSurface = {
    readBypassPosture(scope: BypassProbeExecutionScope): Promise<AuthMdProtectedApiCallBypassPosture>;
};
export type AuthMdBypassPostureLabel = "prevented" | "detected" | "proof_gap";
export declare function authMdProtectedApiCallBypassProbeExecutors(surface: AuthMdProtectedApiCallBypassProbeSurface): BypassProbeExecutor[];
export declare function bypassProbeOutcomeForPostureLabel(label: AuthMdBypassPostureLabel): "inconclusive" | "passed" | "failed";
export declare function reasonCodeForPostureLabel(label: AuthMdBypassPostureLabel): string;
