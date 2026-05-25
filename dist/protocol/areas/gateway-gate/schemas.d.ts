import { z } from "zod";
export declare const GateDecisionSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    passed: "passed";
    refused: "refused";
}>;
export type GateDecision = z.infer<typeof GateDecisionSchema>;
export declare const GatewayCheckAttemptSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    gateAttemptId: z.ZodString;
    gatewayId: z.ZodString;
    gatewayPolicyContractId: z.ZodString;
    gatewayPolicyVersion: z.ZodString;
    pinnedGatewayPolicyVersion: z.ZodString;
    currentGatewayPolicyVersion: z.ZodNullable<z.ZodString>;
    gatewayPolicyDriftStatus: z.ZodEnum<{
        unknown: "unknown";
        same_version: "same_version";
        compatible_stricter: "compatible_stricter";
        incompatible: "incompatible";
    }>;
    actionContractId: z.ZodString;
    greenlightId: z.ZodString;
    contractDigestSeen: z.ZodString;
    greenlightDigestSeen: z.ZodString;
    paramsDigestSeen: z.ZodString;
    idempotencyKeySeen: z.ZodString;
    isolationSnapshotRef: z.ZodString;
    protectedPathPostureIdSeen: z.ZodNullable<z.ZodString>;
    protectedPathPostureDigestSeen: z.ZodNullable<z.ZodString>;
    protectedPathPostureStateSeen: z.ZodNullable<z.ZodEnum<{
        gateway_checked: "gateway_checked";
        bypass_risk: "bypass_risk";
        advisory: "advisory";
        blind: "blind";
        fixture_only: "fixture_only";
    }>>;
    gateDecision: z.ZodEnum<{
        proof_gap: "proof_gap";
        passed: "passed";
        refused: "refused";
    }>;
    gateDecisionReasonCode: z.ZodString;
    consumedGreenlight: z.ZodBoolean;
    mutationAttemptId: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type GatewayCheckAttempt = z.infer<typeof GatewayCheckAttemptSchema>;
export declare const MutationAttemptSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    mutationAttemptId: z.ZodString;
    gateAttemptId: z.ZodString;
    actionContractId: z.ZodString;
    greenlightId: z.ZodString;
    gatewayId: z.ZodString;
    actionClass: z.ZodString;
    resourceRef: z.ZodString;
    idempotencyKey: z.ZodString;
    outcome: z.ZodEnum<{
        unknown: "unknown";
        failed: "failed";
        not_attempted: "not_attempted";
        submitted: "submitted";
        succeeded: "succeeded";
        downstream_refused: "downstream_refused";
    }>;
    outcomeReasonCode: z.ZodString;
    surfaceOperationRef: z.ZodNullable<z.ZodString>;
    startedAt: z.ZodString;
    finishedAt: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type MutationAttempt = z.infer<typeof MutationAttemptSchema>;
