import { z } from "zod";
import type { ActionContract, ProposeActionContractInput } from "../../protocol/areas/action-contract";
import type { CompileIntentInput, IntentCompilationRecord } from "../../protocol/areas/intent-compilation";
export declare const X402PaymentAttemptSchema: z.ZodObject<{
    principalIntentRef: z.ZodString;
    generatedCodeOrSpecRef: z.ZodString;
    runtimeExecutionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionGraphId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionNodeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    toolCallDraftId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    endpointUrl: z.ZodString;
    payee: z.ZodString;
    network: z.ZodString;
    token: z.ZodString;
    atomicAmount: z.ZodString;
    paymentRequirementsDigest: z.ZodString;
    paymentRequiredEvidenceRef: z.ZodOptional<z.ZodString>;
    facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sequenceNumber: z.ZodDefault<z.ZodNumber>;
    requiredPriorActionContractIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type X402PaymentAttempt = z.input<typeof X402PaymentAttemptSchema>;
export type X402PaymentRuntimeConfig = {
    tenantId: string;
    organizationId: string;
    principalId: string;
    agentId: string;
    runId: string;
    runtimeAdapterId: string;
    operatingEnvelopeId: string;
    toolCatalogRef: string;
    actionCatalogRef: string;
    gatewayRegistryRef: string;
    toolCapabilityId: string;
    actionTypeId: string;
    gatewayRegistryEntryId: string;
    gatewayId: string;
    contractExpiresAt: string;
    signingSecret?: string;
};
export type X402PaymentRuntimeProtocol = {
    compileIntent(input: CompileIntentInput): Promise<IntentCompilationRecord>;
    proposeActionContract(input: ProposeActionContractInput): Promise<ActionContract>;
};
export type X402PaymentRuntimeResult = {
    outcome: "action_contract_proposed";
    intentCompilation: IntentCompilationRecord;
    actionContract: ActionContract;
} | {
    outcome: "intent_compilation_refused";
    intentCompilation: IntentCompilationRecord;
    actionContract: null;
    refusalReasonCodes: string[];
};
export declare function proposeX402PaymentActionContract(protocol: X402PaymentRuntimeProtocol, config: X402PaymentRuntimeConfig, attemptValue: X402PaymentAttempt): Promise<X402PaymentRuntimeResult>;
export declare function compileX402PaymentIntent(protocol: Pick<X402PaymentRuntimeProtocol, "compileIntent">, config: X402PaymentRuntimeConfig, attemptValue: X402PaymentAttempt): Promise<IntentCompilationRecord>;
export declare function buildX402PaymentCompileIntentInput(config: X402PaymentRuntimeConfig, attemptValue: X402PaymentAttempt): Promise<CompileIntentInput>;
export declare function refusalReasonCodesForCompilation(intentCompilation: IntentCompilationRecord): string[];
