import { z } from "zod";
import type { ActionContract, ProposeActionContractInput } from "../../protocol/areas/action-contract";
import type { CompileIntentInput, IntentCompilationRecord } from "../../protocol/areas/intent-compilation";
import type { X402PaymentRequiredEvidence } from "./upstream-evidence";
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
    x402EvidenceProfile: z.ZodDefault<z.ZodEnum<{
        official_payment_required: "official_payment_required";
        local_digest_profile: "local_digest_profile";
    }>>;
    paymentRequirementsDigest: z.ZodString;
    paymentRequiredEvidenceRef: z.ZodOptional<z.ZodString>;
    facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    intendedHttpMethod: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    intendedRequestUrl: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    intendedRequestBodyPosture: z.ZodDefault<z.ZodEnum<{
        unsupported: "unsupported";
        no_body: "no_body";
        digest_bound: "digest_bound";
        omitted: "omitted";
    }>>;
    intendedRequestBodyDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    selectedHeadersDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    providerEnvironmentPosture: z.ZodDefault<z.ZodEnum<{
        unknown: "unknown";
        local_reference_sandbox: "local_reference_sandbox";
        external_sandbox: "external_sandbox";
        live: "live";
    }>>;
    providerEnvironmentRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    x402Version: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    x402Scheme: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payTo: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    maxTimeoutSeconds: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selectedPaymentRequirementIndex: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selectedPaymentRequirementDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paymentIdentifier: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paymentIdentifierRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    paymentIdentifierPosture: z.ZodDefault<z.ZodEnum<{
        bound: "bound";
        not_advertised: "not_advertised";
        advertised_absent: "advertised_absent";
    }>>;
    sdkPackageVersions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    extensionKeys: z.ZodDefault<z.ZodArray<z.ZodString>>;
    sequenceNumber: z.ZodDefault<z.ZodNumber>;
    requiredPriorActionContractIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type X402PaymentAttempt = z.input<typeof X402PaymentAttemptSchema>;
export type BuildX402PaymentAttemptFromRequiredEvidenceInput = {
    evidence: X402PaymentRequiredEvidence;
    principalIntentRef: string;
    generatedCodeOrSpecRef: string;
    runtimeExecutionId?: string | null;
    generatedExecutionGraphId?: string | null;
    generatedExecutionNodeId?: string | null;
    toolCallDraftId?: string | null;
    facilitatorRef?: string | null;
    paymentIdentifier?: string | null;
    paymentIdentifierRef?: string | null;
    sequenceNumber?: number;
    requiredPriorActionContractIds?: string[];
};
export declare const X402PaymentRuntimeConfigSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    principalId: z.ZodString;
    agentId: z.ZodString;
    runId: z.ZodString;
    runtimeAdapterId: z.ZodString;
    operatingEnvelopeId: z.ZodString;
    toolCatalogRef: z.ZodString;
    actionCatalogRef: z.ZodString;
    gatewayRegistryRef: z.ZodString;
    gatewayReadinessRef: z.ZodString;
    gatewayReadinessDigest: z.ZodString;
    policyVersionRef: z.ZodString;
    policyVersionDigest: z.ZodString;
    toolCapabilityId: z.ZodString;
    actionTypeId: z.ZodString;
    gatewayRegistryEntryId: z.ZodString;
    gatewayId: z.ZodString;
    gatewayCredentialBinding: z.ZodObject<{
        credentialUseName: z.ZodString;
        gatewayCredentialRefId: z.ZodString;
        gatewayCredentialRefDigest: z.ZodString;
        providerRegistryRef: z.ZodString;
        providerRegistryDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        requiredCredentialCustodyStatus: z.ZodEnum<{
            unknown: "unknown";
            gateway_held: "gateway_held";
            fixture_gateway_held: "fixture_gateway_held";
            gateway_resolved_from_vault: "gateway_resolved_from_vault";
            provider_gateway_held: "provider_gateway_held";
            unsafe_agent_visible: "unsafe_agent_visible";
            unsafe_runtime_visible: "unsafe_runtime_visible";
            agent_has_raw_credential: "agent_has_raw_credential";
            shared_or_unknown: "shared_or_unknown";
            no_mutation_credential: "no_mutation_credential";
        }>;
        evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
    delegatedAuthorityBinding: z.ZodObject<{
        authorityUseName: z.ZodString;
        delegatedAuthorityRefId: z.ZodString;
        delegatedAuthorityRefDigest: z.ZodString;
        requiredGrantStatus: z.ZodDefault<z.ZodLiteral<"active">>;
        authorityKind: z.ZodEnum<{
            mutation: "mutation";
            spend: "spend";
            api_call: "api_call";
        }>;
        policyPackRef: z.ZodString;
        policyPackVersion: z.ZodString;
        evidenceExpectationRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
    maxAtomicAmountPerCall: z.ZodString;
    contractExpiresAt: z.ZodString;
    signingSecret: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type X402PaymentRuntimeConfig = z.input<typeof X402PaymentRuntimeConfigSchema>;
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
} | {
    outcome: "payment_attempt_refused";
    intentCompilation: null;
    actionContract: null;
    refusalReasonCodes: string[];
};
export declare function proposeX402PaymentActionContract(protocol: X402PaymentRuntimeProtocol, config: X402PaymentRuntimeConfig, attemptValue: X402PaymentAttempt): Promise<X402PaymentRuntimeResult>;
export declare function buildX402PaymentAttemptFromRequiredEvidence(input: BuildX402PaymentAttemptFromRequiredEvidenceInput): Promise<X402PaymentAttempt>;
export declare function compileX402PaymentIntent(protocol: Pick<X402PaymentRuntimeProtocol, "compileIntent">, config: X402PaymentRuntimeConfig, attemptValue: X402PaymentAttempt): Promise<IntentCompilationRecord>;
export declare function buildX402PaymentCompileIntentInput(config: X402PaymentRuntimeConfig, attemptValue: X402PaymentAttempt): Promise<CompileIntentInput>;
export declare function buildX402PaymentCompileIntentInputForRuntimeRefusal(config: X402PaymentRuntimeConfig, attemptValue: X402PaymentAttempt): Promise<CompileIntentInput>;
export declare function refusalReasonCodesForCompilation(intentCompilation: IntentCompilationRecord): string[];
export declare function x402PaymentAttemptRefusalReasonCodes(configValue: X402PaymentRuntimeConfig, attemptValue: X402PaymentAttempt): string[];
