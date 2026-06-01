import { z } from "zod";
export declare const IssueAgenticEndpointAccessLeaseInputSchema: z.ZodObject<{
    attemptId: z.ZodString;
    policyId: z.ZodString;
    actionContractId: z.ZodString;
    policyDecisionId: z.ZodString;
    greenlightId: z.ZodString;
    gatewayCheckAttemptId: z.ZodString;
    leaseId: z.ZodOptional<z.ZodString>;
    evaluatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type IssueAgenticEndpointAccessLeaseInput = z.input<typeof IssueAgenticEndpointAccessLeaseInputSchema>;
export declare const RecordAgenticEndpointAccessUsageEventInputSchema: z.ZodObject<{
    leaseId: z.ZodString;
    usageKind: z.ZodEnum<{
        request: "request";
        token: "token";
        tool_call: "tool_call";
        cost_unit: "cost_unit";
    }>;
    amount: z.ZodNumber;
    usageEventId: z.ZodOptional<z.ZodString>;
    occurredAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type RecordAgenticEndpointAccessUsageEventInput = z.input<typeof RecordAgenticEndpointAccessUsageEventInputSchema>;
