import { z } from "zod";
import { requiredGatewayCheckedBypassProbeKinds } from "../../protocol/areas/bypass-probe";
export declare const X402PaymentConformancePostureSchema: z.ZodObject<{
    signerCustodyStatus: z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        agent_exposed: "agent_exposed";
    }>;
    rawPrivateKeyEnvStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        present: "present";
    }>;
    siblingX402WrapperStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    mcpDirectPaymentStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    tokenPassthroughStatus: z.ZodEnum<{
        unknown: "unknown";
        absent: "absent";
        blocked: "blocked";
        present: "present";
    }>;
    wrapperDriftStatus: z.ZodEnum<{
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
export type X402PaymentConformancePosture = z.infer<typeof X402PaymentConformancePostureSchema>;
export type X402PaymentConformanceResult = {
    adapterPackId: "adapter_pack_x402_payment_exact";
    passed: boolean;
    requiredProbeKinds: typeof requiredGatewayCheckedBypassProbeKinds;
    reasonCodes: string[];
};
export declare function checkX402PaymentInstallConformance(postureValue: X402PaymentConformancePosture): X402PaymentConformanceResult;
export declare function assertX402PaymentInstallConformance(posture: X402PaymentConformancePosture): X402PaymentConformanceResult;
