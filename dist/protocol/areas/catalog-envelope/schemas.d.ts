import { z } from "zod";
export declare const RequiredProtectedPathStateSchema: z.ZodEnum<{
    not_required: "not_required";
    gateway_checked: "gateway_checked";
}>;
export type RequiredProtectedPathState = z.infer<typeof RequiredProtectedPathStateSchema>;
export declare const CredentialCustodyStatusSchema: z.ZodEnum<{
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
export type CredentialCustodyStatus = z.infer<typeof CredentialCustodyStatusSchema>;
export declare const GatewayEnforcementModeSchema: z.ZodEnum<{
    unknown: "unknown";
    reference_fixture: "reference_fixture";
    customer_gateway_adapter: "customer_gateway_adapter";
    provider_gateway: "provider_gateway";
    hosted_control_plane_only: "hosted_control_plane_only";
}>;
export type GatewayEnforcementMode = z.infer<typeof GatewayEnforcementModeSchema>;
export declare const ParticipantIdentityRoleSchema: z.ZodEnum<{
    principal: "principal";
    agent: "agent";
}>;
export type ParticipantIdentityRole = z.infer<typeof ParticipantIdentityRoleSchema>;
export declare const ParticipantIdentityBindingSchema: z.ZodObject<{
    participantRole: z.ZodEnum<{
        principal: "principal";
        agent: "agent";
    }>;
    participantRef: z.ZodString;
    identityProviderRef: z.ZodString;
    subjectRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    subjectDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    claimsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    verificationEvidenceRef: z.ZodString;
    bindingEvidenceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuedAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    authorityPosture: z.ZodDefault<z.ZodLiteral<"evidence_only">>;
}, z.core.$strict>;
export type ParticipantIdentityBinding = z.infer<typeof ParticipantIdentityBindingSchema>;
export declare const ToolCapabilitySchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    toolCapabilityId: z.ZodString;
    toolCatalogId: z.ZodString;
    toolCatalogVersion: z.ZodString;
    runtimeAdapterId: z.ZodString;
    toolName: z.ZodString;
    toolNamespace: z.ZodString;
    capabilityClass: z.ZodEnum<{
        unknown: "unknown";
        read: "read";
        write: "write";
        network: "network";
        filesystem: "filesystem";
        deploy: "deploy";
        package: "package";
        database: "database";
    }>;
    readWriteClassification: z.ZodEnum<{
        read_only: "read_only";
        consequential: "consequential";
        ambiguous: "ambiguous";
    }>;
    consequentialityDefault: z.ZodEnum<{
        consequential: "consequential";
        non_consequential: "non_consequential";
        requires_classification: "requires_classification";
    }>;
    wrapperStatus: z.ZodEnum<{
        unknown: "unknown";
        wrapped: "wrapped";
        unwrapped: "unwrapped";
    }>;
    rawBypassPossible: z.ZodBoolean;
    inputSchemaRef: z.ZodString;
    outputSchemaRef: z.ZodString;
    secretBearingFields: z.ZodDefault<z.ZodArray<z.ZodString>>;
    supersededAt: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type ToolCapability = z.infer<typeof ToolCapabilitySchema>;
export declare const ActionTypeSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    actionTypeId: z.ZodString;
    actionCatalogId: z.ZodString;
    actionCatalogVersion: z.ZodString;
    actionClass: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    requiredContractFields: z.ZodArray<z.ZodString>;
    canonicalParameterSchemaRef: z.ZodString;
    resourceRefSchemaRef: z.ZodString;
    requiredEvidenceTypes: z.ZodDefault<z.ZodArray<z.ZodString>>;
    allowedBoundsSchemaRef: z.ZodString;
    defaultReceiptRequirement: z.ZodEnum<{
        none: "none";
        gate: "gate";
        mutation: "mutation";
        downstream_finality: "downstream_finality";
    }>;
    defaultIdempotencyRequirement: z.ZodEnum<{
        optional: "optional";
        required: "required";
        forbidden: "forbidden";
    }>;
    supersededAt: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type ActionType = z.infer<typeof ActionTypeSchema>;
export declare const GatewayRegistryEntrySchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    gatewayRegistryEntryId: z.ZodString;
    gatewayRegistryVersion: z.ZodString;
    gatewayId: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    gatewayAdapterId: z.ZodString;
    gatewayAdapterVersion: z.ZodString;
    gateEndpointRef: z.ZodString;
    gatewayPolicyContractId: z.ZodString;
    gatewayPolicyVersion: z.ZodString;
    gatewayPolicyDriftMode: z.ZodEnum<{
        refuse_on_drift: "refuse_on_drift";
        allow_compatible_stricter: "allow_compatible_stricter";
    }>;
    compatiblePreviousGatewayPolicyVersions: z.ZodDefault<z.ZodArray<z.ZodString>>;
    acceptedActionCatalogVersions: z.ZodArray<z.ZodString>;
    resourceNamespaceRef: z.ZodString;
    canonicalizerVersion: z.ZodString;
    receiptCapabilityStatus: z.ZodEnum<{
        unknown: "unknown";
        available: "available";
        unavailable: "unavailable";
    }>;
    isolationCheckCapabilityStatus: z.ZodEnum<{
        unknown: "unknown";
        available: "available";
        unavailable: "unavailable";
    }>;
    credentialCustodyStatus: z.ZodEnum<{
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
    enforcementMode: z.ZodEnum<{
        unknown: "unknown";
        reference_fixture: "reference_fixture";
        customer_gateway_adapter: "customer_gateway_adapter";
        provider_gateway: "provider_gateway";
        hosted_control_plane_only: "hosted_control_plane_only";
    }>;
    mutationCredentialHolderRef: z.ZodString;
    gatewayAuthorityHolderRef: z.ZodString;
    supersededAt: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type GatewayRegistryEntry = z.infer<typeof GatewayRegistryEntrySchema>;
export declare const OperatingEnvelopeSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    envelopeId: z.ZodString;
    principalId: z.ZodString;
    agentId: z.ZodString;
    participantIdentityBindings: z.ZodDefault<z.ZodArray<z.ZodObject<{
        participantRole: z.ZodEnum<{
            principal: "principal";
            agent: "agent";
        }>;
        participantRef: z.ZodString;
        identityProviderRef: z.ZodString;
        subjectRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        subjectDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        claimsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        verificationEvidenceRef: z.ZodString;
        bindingEvidenceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        issuedAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        authorityPosture: z.ZodDefault<z.ZodLiteral<"evidence_only">>;
    }, z.core.$strict>>>;
    objectiveRef: z.ZodString;
    allowedActionClasses: z.ZodArray<z.ZodString>;
    allowedGateways: z.ZodArray<z.ZodString>;
    allowedResources: z.ZodArray<z.ZodString>;
    requiredProtectedPathState: z.ZodDefault<z.ZodEnum<{
        not_required: "not_required";
        gateway_checked: "gateway_checked";
    }>>;
    evidenceRequirements: z.ZodDefault<z.ZodArray<z.ZodString>>;
    policyPackRef: z.ZodString;
    policyPackVersion: z.ZodString;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
    revokedAt: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type OperatingEnvelope = z.infer<typeof OperatingEnvelopeSchema>;
export declare const OperatingBoundsSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    envelopeId: z.ZodString;
    principalId: z.ZodString;
    agentId: z.ZodString;
    participantIdentityBindings: z.ZodDefault<z.ZodArray<z.ZodObject<{
        participantRole: z.ZodEnum<{
            principal: "principal";
            agent: "agent";
        }>;
        participantRef: z.ZodString;
        identityProviderRef: z.ZodString;
        subjectRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        subjectDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        claimsDigest: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        verificationEvidenceRef: z.ZodString;
        bindingEvidenceRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        issuedAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        expiresAt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        authorityPosture: z.ZodDefault<z.ZodLiteral<"evidence_only">>;
    }, z.core.$strict>>>;
    objectiveRef: z.ZodString;
    allowedActionClasses: z.ZodArray<z.ZodString>;
    allowedGateways: z.ZodArray<z.ZodString>;
    allowedResources: z.ZodArray<z.ZodString>;
    requiredProtectedPathState: z.ZodDefault<z.ZodEnum<{
        not_required: "not_required";
        gateway_checked: "gateway_checked";
    }>>;
    evidenceRequirements: z.ZodDefault<z.ZodArray<z.ZodString>>;
    policyPackRef: z.ZodString;
    policyPackVersion: z.ZodString;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
    revokedAt: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type OperatingBounds = OperatingEnvelope;
