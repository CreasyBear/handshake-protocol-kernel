import { z } from "zod";
export declare const CompileIntentInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    principalIntentRef: z.ZodString;
    principalId: z.ZodString;
    agentId: z.ZodString;
    runId: z.ZodString;
    runtimeAdapterId: z.ZodString;
    operatingEnvelopeId: z.ZodString;
    toolCatalogRef: z.ZodString;
    actionCatalogRef: z.ZodString;
    gatewayRegistryRef: z.ZodString;
    runtimeExecutionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionGraphId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedExecutionNodeId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    toolCallDraftId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    generatedCodeOrSpecRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    declaredAssumptions: z.ZodDefault<z.ZodArray<z.ZodString>>;
    requiredEvidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    delegationEvidenceRef: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        delegationEvidenceRefId: z.ZodString;
        evidenceBindingDigest: z.ZodString;
        a1ChainFingerprint: z.ZodString;
        storeRef: z.ZodString;
        verifyOutcome: z.ZodEnum<{
            valid: "valid";
            invalid: "invalid";
        }>;
        a1VerifierVersion: z.ZodString;
    }, z.core.$strict>>>;
    candidate: z.ZodObject<{
        toolCapabilityId: z.ZodString;
        actionTypeId: z.ZodString;
        gatewayRegistryEntryId: z.ZodString;
        actionClass: z.ZodString;
        gatewayId: z.ZodString;
        resourceRef: z.ZodString;
        sequenceNumber: z.ZodNumber;
        requiredPriorActionContractIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
        recoveryRecommendationId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        parameters: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
        nonSecretParamsSummary: z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>;
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
        purposeCode: z.ZodString;
        expectedSideEffectCodes: z.ZodArray<z.ZodString>;
        evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        clearingEvidenceRefs: z.ZodDefault<z.ZodObject<{
            correlationRef: z.ZodOptional<z.ZodString>;
            obligationRef: z.ZodOptional<z.ZodString>;
            counterpartyRef: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        bounds: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodType<import("./types").JsonValue, unknown, z.core.$ZodTypeInternals<import("./types").JsonValue, unknown>>>>;
        idempotencyKey: z.ZodString;
        rollbackHint: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        expiresAt: z.ZodString;
    }, z.core.$strict>;
    compilerVersion: z.ZodDefault<z.ZodString>;
}, z.core.$strict>;
export type CompileIntentInput = z.input<typeof CompileIntentInputSchema>;
