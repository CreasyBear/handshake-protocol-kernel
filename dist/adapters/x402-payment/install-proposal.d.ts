import { z } from "zod";
import { type InstallProposalCompiledKernelRecords } from "../../install/install-proposal";
import type { DelegatedAuthorityBinding, DelegatedAuthorityRef, RegisterDelegatedAuthorityRefInput } from "../../protocol/areas/delegated-authority";
import type { GatewayCredentialBinding, GatewayCredentialRef, RegisterGatewayCredentialRefInput } from "../../protocol/areas/credential-custody";
export declare const x402PaymentExactAdapterPack: {
    adapterPackId: string;
    adapterPackVersion: string;
    actionFamily: string;
    protectedSurfaceKind: string;
    parameterSchemaRef: string;
    endpointEvidenceSchemaRef: string;
    installCompilerRef: string;
    policyRulePackRef: string;
    gatewayObservedParameterValidatorRef: string;
    receiptEvidenceMapperRef: string;
    bypassProbeKinds: ("credential_custody" | "raw_sibling_blocking" | "mcp_direct_call_blocking" | "token_passthrough_blocking" | "wrapper_drift" | "failure_closed")[];
    hostileFixtureRefs: string[];
};
export declare const X402EndpointEvidenceSchema: z.ZodObject<{
    endpointUrl: z.ZodString;
    payee: z.ZodString;
    network: z.ZodString;
    token: z.ZodString;
    maxAtomicAmount: z.ZodString;
    paymentRequirementsDigest: z.ZodString;
    facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type X402EndpointEvidence = z.infer<typeof X402EndpointEvidenceSchema>;
export declare const X402WalletGatewayProfileSchema: z.ZodObject<{
    walletGatewayId: z.ZodString;
    gatewayId: z.ZodString;
    gatewayAdapterId: z.ZodDefault<z.ZodString>;
    gatewayAdapterVersion: z.ZodDefault<z.ZodString>;
    signerCustodyStatus: z.ZodEnum<{
        unknown: "unknown";
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
        agent_exposed: "agent_exposed";
    }>;
    signerRef: z.ZodString;
    authorityHolderRef: z.ZodString;
    supportedNetworks: z.ZodArray<z.ZodString>;
    supportedTokens: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type X402WalletGatewayProfile = z.infer<typeof X402WalletGatewayProfileSchema>;
export declare const X402SpendBoundsSchema: z.ZodObject<{
    principalId: z.ZodString;
    agentId: z.ZodString;
    runtimeAdapterId: z.ZodString;
    objectiveRef: z.ZodString;
    allowedDomains: z.ZodArray<z.ZodString>;
    allowedPayees: z.ZodArray<z.ZodString>;
    allowedNetworks: z.ZodArray<z.ZodString>;
    allowedTokens: z.ZodArray<z.ZodString>;
    maxAtomicAmountPerCall: z.ZodString;
    maxAtomicAmountPerSession: z.ZodString;
    maxAtomicAmountPerDay: z.ZodString;
    reviewThresholdAtomicAmount: z.ZodString;
    spendWindowEnforcementStatus: z.ZodDefault<z.ZodLiteral<"not_enforced_local_metadata">>;
    issuedAt: z.ZodString;
    expiresAt: z.ZodString;
}, z.core.$strict>;
export type X402SpendBounds = z.infer<typeof X402SpendBoundsSchema>;
export declare const X402InstallProposalInputSchema: z.ZodObject<{
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    toolCatalogId: z.ZodDefault<z.ZodString>;
    toolCatalogVersion: z.ZodDefault<z.ZodString>;
    actionCatalogId: z.ZodDefault<z.ZodString>;
    actionCatalogVersion: z.ZodDefault<z.ZodString>;
    gatewayRegistryVersion: z.ZodDefault<z.ZodString>;
    endpointEvidence: z.ZodObject<{
        endpointUrl: z.ZodString;
        payee: z.ZodString;
        network: z.ZodString;
        token: z.ZodString;
        maxAtomicAmount: z.ZodString;
        paymentRequirementsDigest: z.ZodString;
        facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
    walletGatewayProfile: z.ZodObject<{
        walletGatewayId: z.ZodString;
        gatewayId: z.ZodString;
        gatewayAdapterId: z.ZodDefault<z.ZodString>;
        gatewayAdapterVersion: z.ZodDefault<z.ZodString>;
        signerCustodyStatus: z.ZodEnum<{
            unknown: "unknown";
            gateway_held: "gateway_held";
            fixture_gateway_held: "fixture_gateway_held";
            agent_exposed: "agent_exposed";
        }>;
        signerRef: z.ZodString;
        authorityHolderRef: z.ZodString;
        supportedNetworks: z.ZodArray<z.ZodString>;
        supportedTokens: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    spendBounds: z.ZodObject<{
        principalId: z.ZodString;
        agentId: z.ZodString;
        runtimeAdapterId: z.ZodString;
        objectiveRef: z.ZodString;
        allowedDomains: z.ZodArray<z.ZodString>;
        allowedPayees: z.ZodArray<z.ZodString>;
        allowedNetworks: z.ZodArray<z.ZodString>;
        allowedTokens: z.ZodArray<z.ZodString>;
        maxAtomicAmountPerCall: z.ZodString;
        maxAtomicAmountPerSession: z.ZodString;
        maxAtomicAmountPerDay: z.ZodString;
        reviewThresholdAtomicAmount: z.ZodString;
        spendWindowEnforcementStatus: z.ZodDefault<z.ZodLiteral<"not_enforced_local_metadata">>;
        issuedAt: z.ZodString;
        expiresAt: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type X402InstallProposalInput = z.input<typeof X402InstallProposalInputSchema>;
export declare const X402InstallProposalSchema: z.ZodObject<{
    installProposalId: z.ZodString;
    schemaVersion: z.ZodLiteral<"0.2.4">;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    createdAt: z.ZodString;
    adapterPackId: z.ZodString;
    adapterPackVersion: z.ZodString;
    resourceRef: z.ZodString;
    status: z.ZodEnum<{
        refused: "refused";
        ready_to_install: "ready_to_install";
    }>;
    humanSummary: z.ZodString;
    refusalReasonCodes: z.ZodArray<z.ZodString>;
    compiledRecords: z.ZodNullable<z.ZodObject<{
        toolCapability: z.ZodObject<{
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
        actionType: z.ZodObject<{
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
        gatewayRegistryEntry: z.ZodObject<{
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
        operatingEnvelope: z.ZodObject<{
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
    }, z.core.$strict>>;
    policyPackRef: z.ZodString;
    policyPackVersion: z.ZodString;
    bypassProbePlan: z.ZodArray<z.ZodObject<{
        probeKind: z.ZodEnum<{
            credential_custody: "credential_custody";
            raw_sibling_blocking: "raw_sibling_blocking";
            mcp_direct_call_blocking: "mcp_direct_call_blocking";
            token_passthrough_blocking: "token_passthrough_blocking";
            wrapper_drift: "wrapper_drift";
            failure_closed: "failure_closed";
        }>;
        requiredSourceAuthority: z.ZodEnum<{
            conformance_fixture: "conformance_fixture";
            runtime_probe: "runtime_probe";
            gateway_probe: "gateway_probe";
        }>;
        mustPassBeforeGatewayCheckedPosture: z.ZodLiteral<true>;
    }, z.core.$strict>>;
    receiptExpectationRefs: z.ZodArray<z.ZodString>;
    installDigest: z.ZodString;
    actionFamily: z.ZodLiteral<"x402_payment.exact">;
    protectedSurfaceKind: z.ZodLiteral<"x402_payment">;
    endpointDomain: z.ZodString;
    endpointEvidence: z.ZodObject<{
        endpointUrl: z.ZodString;
        payee: z.ZodString;
        network: z.ZodString;
        token: z.ZodString;
        maxAtomicAmount: z.ZodString;
        paymentRequirementsDigest: z.ZodString;
        facilitatorRef: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>;
    walletGatewayProfile: z.ZodObject<{
        walletGatewayId: z.ZodString;
        gatewayId: z.ZodString;
        gatewayAdapterId: z.ZodDefault<z.ZodString>;
        gatewayAdapterVersion: z.ZodDefault<z.ZodString>;
        signerCustodyStatus: z.ZodEnum<{
            unknown: "unknown";
            gateway_held: "gateway_held";
            fixture_gateway_held: "fixture_gateway_held";
            agent_exposed: "agent_exposed";
        }>;
        signerRef: z.ZodString;
        authorityHolderRef: z.ZodString;
        supportedNetworks: z.ZodArray<z.ZodString>;
        supportedTokens: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    spendBounds: z.ZodObject<{
        principalId: z.ZodString;
        agentId: z.ZodString;
        runtimeAdapterId: z.ZodString;
        objectiveRef: z.ZodString;
        allowedDomains: z.ZodArray<z.ZodString>;
        allowedPayees: z.ZodArray<z.ZodString>;
        allowedNetworks: z.ZodArray<z.ZodString>;
        allowedTokens: z.ZodArray<z.ZodString>;
        maxAtomicAmountPerCall: z.ZodString;
        maxAtomicAmountPerSession: z.ZodString;
        maxAtomicAmountPerDay: z.ZodString;
        reviewThresholdAtomicAmount: z.ZodString;
        spendWindowEnforcementStatus: z.ZodDefault<z.ZodLiteral<"not_enforced_local_metadata">>;
        issuedAt: z.ZodString;
        expiresAt: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type X402InstallProposal = z.infer<typeof X402InstallProposalSchema>;
export declare function compileX402InstallProposal(inputValue: X402InstallProposalInput): Promise<X402InstallProposal>;
export declare function buildX402WalletGatewayCredentialRefInput(proposal: X402InstallProposal, recordsValue?: InstallProposalCompiledKernelRecords | null): Promise<RegisterGatewayCredentialRefInput>;
export declare function x402WalletGatewayCredentialBindingFor(credentialRef: GatewayCredentialRef): GatewayCredentialBinding;
export declare function buildX402DelegatedSpendAuthorityRefInput(proposal: X402InstallProposal, recordsValue?: InstallProposalCompiledKernelRecords | null): Promise<RegisterDelegatedAuthorityRefInput>;
export declare function x402DelegatedSpendAuthorityBindingFor(delegatedAuthorityRef: DelegatedAuthorityRef): DelegatedAuthorityBinding;
export declare function x402PaymentResourceRef(input: {
    network: string;
    payee: string;
    endpointUrl: string;
}): string;
