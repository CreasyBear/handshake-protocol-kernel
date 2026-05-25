import { z } from "zod";
export declare const CreateToolCallDraftInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    runtimeExecutionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionGraphId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionNodeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    toolCapabilityId: z.ZodString;
    actionTypeId: z.ZodString;
    gatewayRegistryEntryId: z.ZodString;
    actionClass: z.ZodString;
    gatewayId: z.ZodString;
    resourceRef: z.ZodString;
    draftState: z.ZodDefault<z.ZodLiteral<"opened">>;
    parameters: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>>;
    nonSecretParamsSummary: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>>;
    secretRefs: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    gatewayCredentialRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>>;
    delegatedAuthorityRefs: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>>;
    expiresAt: z.ZodString;
    invalidReasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type CreateToolCallDraftInput = z.input<typeof CreateToolCallDraftInputSchema>;
export declare const TransitionToolCallDraftInputSchema: z.ZodObject<{
    toolCallDraftId: z.ZodString;
    nextDraftState: z.ZodEnum<{
        streaming: "streaming";
        finalized: "finalized";
        invalid: "invalid";
        abandoned: "abandoned";
    }>;
    parameters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>>;
    nonSecretParamsSummary: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>>;
    secretRefs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    gatewayCredentialRefs: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>>;
    delegatedAuthorityRefs: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>>;
    finalizedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expiresAt: z.ZodOptional<z.ZodString>;
    invalidReasonCodes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type TransitionToolCallDraftInput = z.input<typeof TransitionToolCallDraftInputSchema>;
