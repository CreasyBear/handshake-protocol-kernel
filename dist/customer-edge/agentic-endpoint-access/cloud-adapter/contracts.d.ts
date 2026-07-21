import { z } from "zod";
import type { AgenticEndpointAccessProtectionOutcomeSchema } from "../contracts";
export declare const agenticEndpointAccessCloudSharedContractPinSchemaVersion: "handshake.agentic-endpoint-access.cloud-shared-contract-pin.v0.3.0";
export declare const AgenticEndpointAccessCloudSharedContractDigestMaterialSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.cloud-shared-contract-pin.v0.3.0">;
    contractVersion: z.ZodLiteral<"0.3.0">;
    cloudSharedPackage: z.ZodObject<{
        packageName: z.ZodLiteral<"@handshake-cloud/shared">;
        sourcePackageVersion: z.ZodLiteral<"0.0.0">;
        endpointAccessSchemaVersion: z.ZodLiteral<"0.3.0">;
        semverPinRequiredBeforePublicExport: z.ZodLiteral<true>;
        runtimeImportAllowedInKernel: z.ZodLiteral<false>;
        sourceOnlyReference: z.ZodLiteral<true>;
    }, z.core.$strict>;
    pinnedModules: z.ZodArray<z.ZodEnum<{
        "@handshake-cloud/shared/constants/agentic-endpoint-access": "@handshake-cloud/shared/constants/agentic-endpoint-access";
        "@handshake-cloud/shared/schemas/agentic-endpoint-access": "@handshake-cloud/shared/schemas/agentic-endpoint-access";
        "@handshake-cloud/shared/schemas/agentic-endpoint-access-config": "@handshake-cloud/shared/schemas/agentic-endpoint-access-config";
        "@handshake-cloud/shared/schemas/agentic-endpoint-access-events": "@handshake-cloud/shared/schemas/agentic-endpoint-access-events";
        "@handshake-cloud/shared/schemas/agentic-endpoint-access-capabilities": "@handshake-cloud/shared/schemas/agentic-endpoint-access-capabilities";
        "@handshake-cloud/shared/schemas/agentic-endpoint-access-readback": "@handshake-cloud/shared/schemas/agentic-endpoint-access-readback";
        "@handshake-cloud/shared/schemas/agentic-endpoint-public-api": "@handshake-cloud/shared/schemas/agentic-endpoint-public-api";
    }>>;
    sourceProvenance: z.ZodObject<{
        cloudRepoBoundary: z.ZodLiteral<"separate_cloud_repo">;
        repositoryName: z.ZodLiteral<"handshake-cloud">;
        packageName: z.ZodLiteral<"@handshake-cloud/shared">;
        packagePath: z.ZodLiteral<"packages/shared">;
        sourcePackageVersion: z.ZodLiteral<"0.0.0">;
        sourceProofKind: z.ZodLiteral<"customer_edge_cloud_source_contract_readback">;
        sourceProofDigestRequired: z.ZodLiteral<true>;
        sourcePathLabelsAllowedInKernelPin: z.ZodLiteral<false>;
    }, z.core.$strict>;
    constants: z.ZodObject<{
        states: z.ZodArray<z.ZodEnum<{
            proof_gap: "proof_gap";
            refused: "refused";
            revoked: "revoked";
            expired: "expired";
            attempted: "attempted";
            leased: "leased";
            exhausted: "exhausted";
            quarantined: "quarantined";
        }>>;
        capabilityStatuses: z.ZodArray<z.ZodEnum<{
            unknown: "unknown";
            proof_gap: "proof_gap";
            stale: "stale";
            unsupported: "unsupported";
            ready: "ready";
        }>>;
        failClosedReasons: z.ZodArray<z.ZodEnum<{
            raw_bypass_posture_unknown: "raw_bypass_posture_unknown";
            raw_bypass_posture_unblocked: "raw_bypass_posture_unblocked";
            schema_version_unsupported: "schema_version_unsupported";
            unsupported_agentic_endpoint_access_schema_version: "unsupported_agentic_endpoint_access_schema_version";
            middleware_version_unsupported: "middleware_version_unsupported";
            kernel_version_unsupported: "kernel_version_unsupported";
            missing_middleware_version: "missing_middleware_version";
            missing_kernel_id: "missing_kernel_id";
            missing_kernel_version: "missing_kernel_version";
            missing_local_kernel_sync: "missing_local_kernel_sync";
            stale_config: "stale_config";
            stale_capability_report: "stale_capability_report";
            missing_surface_binding: "missing_surface_binding";
            missing_required_capability: "missing_required_capability";
            unsupported_policy_feature: "unsupported_policy_feature";
            unsupported_delegation_evidence_kind: "unsupported_delegation_evidence_kind";
            missing_clearance_proof: "missing_clearance_proof";
            delegated_request_transcript_missing: "delegated_request_transcript_missing";
            delegated_request_transcript_mismatch: "delegated_request_transcript_mismatch";
            missing_bypass_posture_evidence: "missing_bypass_posture_evidence";
        }>>;
        authorityBoundary: z.ZodObject<{
            permitsEndpointAccess: z.ZodLiteral<true>;
            permitsMutation: z.ZodLiteral<false>;
            createsIndependentPolicyDecision: z.ZodLiteral<false>;
            createsIndependentGreenlight: z.ZodLiteral<false>;
            performsIndependentGatewayCheck: z.ZodLiteral<false>;
            exportsDownstreamReceipt: z.ZodLiteral<false>;
            mintsTerminalCertificate: z.ZodLiteral<false>;
            containsCredentialMaterial: z.ZodLiteral<false>;
            containsPaymentMaterial: z.ZodLiteral<false>;
            widensOperatingBounds: z.ZodLiteral<false>;
            freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    requiredConfigPullResponseFields: z.ZodArray<z.ZodEnum<{
        schemaVersion: "schemaVersion";
        bindingDigest: "bindingDigest";
        endpointId: "endpointId";
        surfaceBinding: "surfaceBinding";
        operatingBounds: "operatingBounds";
        agenticEndpointAccessPolicyRef: "agenticEndpointAccessPolicyRef";
        agenticEndpointAccessPolicy: "agenticEndpointAccessPolicy";
        requiredCapabilities: "requiredCapabilities";
        compatibility: "compatibility";
    }>>;
    requiredCompatibilityFields: z.ZodArray<z.ZodEnum<{
        failClosedReasons: "failClosedReasons";
        status: "status";
        requestedSchemaVersion: "requestedSchemaVersion";
        currentMiddlewareVersion: "currentMiddlewareVersion";
        localKernelSyncProofRef: "localKernelSyncProofRef";
    }>>;
    candidateEventTypes: z.ZodArray<z.ZodEnum<{
        agentic_endpoint_access_leased: "agentic_endpoint_access_leased";
        agentic_endpoint_access_attempted: "agentic_endpoint_access_attempted";
        agentic_endpoint_access_refused: "agentic_endpoint_access_refused";
        agentic_endpoint_access_usage_recorded: "agentic_endpoint_access_usage_recorded";
        agentic_endpoint_access_revoked: "agentic_endpoint_access_revoked";
        agentic_endpoint_access_proof_gap_recorded: "agentic_endpoint_access_proof_gap_recorded";
        agentic_endpoint_access_transcript_recorded: "agentic_endpoint_access_transcript_recorded";
    }>>;
    middlewareEnvelopeEventTypes: z.ZodArray<z.ZodEnum<{
        "agentic_endpoint_access.protection_outcome": "agentic_endpoint_access.protection_outcome";
        "agentic_endpoint_access.usage_recorded": "agentic_endpoint_access.usage_recorded";
        "agentic_endpoint_access.readback_forwarded": "agentic_endpoint_access.readback_forwarded";
    }>>;
    kernelRequestEvidenceForwarding: z.ZodObject<{
        owner: z.ZodLiteral<"kernel_protocol_attempt_and_readback">;
        forwardedThrough: z.ZodLiteral<"AgenticEndpointAccessForwardedEvent.readback">;
        cloudSharedAttemptReadbackShapeIsAuthority: z.ZodLiteral<false>;
        requiredFields: z.ZodArray<z.ZodEnum<{
            schemaVersion: "schemaVersion";
            requestMethod: "requestMethod";
            requestUrlDigest: "requestUrlDigest";
            requestHeaderDigest: "requestHeaderDigest";
            requestBodyDigest: "requestBodyDigest";
            redactionPolicyId: "redactionPolicyId";
            requestEvidenceDigest: "requestEvidenceDigest";
        }>>;
    }, z.core.$strict>;
    projectedReadbackBoundary: z.ZodObject<{
        cloudIssuedAuthority: z.ZodLiteral<false>;
        downstreamOutcomeAuthorized: z.ZodLiteral<false>;
        displayOnly: z.ZodLiteral<true>;
    }, z.core.$strict>;
    middlewareBoundary: z.ZodObject<{
        createsCloudAuthority: z.ZodLiteral<false>;
        createsAeAuthority: z.ZodLiteral<false>;
        treatsAuthSessionAsAuthority: z.ZodLiteral<false>;
        treatsRouteMatcherAsAuthority: z.ZodLiteral<false>;
        treatsCloudReadinessAsAuthority: z.ZodLiteral<false>;
        permitsEndpointAccess: z.ZodLiteral<true>;
        permitsMutation: z.ZodLiteral<false>;
        createsIndependentPolicyDecision: z.ZodLiteral<false>;
        createsIndependentGreenlight: z.ZodLiteral<false>;
        performsIndependentGatewayCheck: z.ZodLiteral<false>;
        exportsDownstreamReceipt: z.ZodLiteral<false>;
        mintsTerminalCertificate: z.ZodLiteral<false>;
        containsCredentialMaterial: z.ZodLiteral<false>;
        containsPaymentMaterial: z.ZodLiteral<false>;
        widensOperatingBounds: z.ZodLiteral<false>;
        freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
    }, z.core.$strict>;
    nonClaims: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type AgenticEndpointAccessCloudSharedContractDigestMaterial = z.infer<typeof AgenticEndpointAccessCloudSharedContractDigestMaterialSchema>;
export declare const AgenticEndpointAccessCloudSharedContractPinSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.cloud-shared-contract-pin.v0.3.0">;
    digestAlgorithm: z.ZodLiteral<"handshake-jcs-lite-sha256">;
    digestMaterial: z.ZodObject<{
        schemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.cloud-shared-contract-pin.v0.3.0">;
        contractVersion: z.ZodLiteral<"0.3.0">;
        cloudSharedPackage: z.ZodObject<{
            packageName: z.ZodLiteral<"@handshake-cloud/shared">;
            sourcePackageVersion: z.ZodLiteral<"0.0.0">;
            endpointAccessSchemaVersion: z.ZodLiteral<"0.3.0">;
            semverPinRequiredBeforePublicExport: z.ZodLiteral<true>;
            runtimeImportAllowedInKernel: z.ZodLiteral<false>;
            sourceOnlyReference: z.ZodLiteral<true>;
        }, z.core.$strict>;
        pinnedModules: z.ZodArray<z.ZodEnum<{
            "@handshake-cloud/shared/constants/agentic-endpoint-access": "@handshake-cloud/shared/constants/agentic-endpoint-access";
            "@handshake-cloud/shared/schemas/agentic-endpoint-access": "@handshake-cloud/shared/schemas/agentic-endpoint-access";
            "@handshake-cloud/shared/schemas/agentic-endpoint-access-config": "@handshake-cloud/shared/schemas/agentic-endpoint-access-config";
            "@handshake-cloud/shared/schemas/agentic-endpoint-access-events": "@handshake-cloud/shared/schemas/agentic-endpoint-access-events";
            "@handshake-cloud/shared/schemas/agentic-endpoint-access-capabilities": "@handshake-cloud/shared/schemas/agentic-endpoint-access-capabilities";
            "@handshake-cloud/shared/schemas/agentic-endpoint-access-readback": "@handshake-cloud/shared/schemas/agentic-endpoint-access-readback";
            "@handshake-cloud/shared/schemas/agentic-endpoint-public-api": "@handshake-cloud/shared/schemas/agentic-endpoint-public-api";
        }>>;
        sourceProvenance: z.ZodObject<{
            cloudRepoBoundary: z.ZodLiteral<"separate_cloud_repo">;
            repositoryName: z.ZodLiteral<"handshake-cloud">;
            packageName: z.ZodLiteral<"@handshake-cloud/shared">;
            packagePath: z.ZodLiteral<"packages/shared">;
            sourcePackageVersion: z.ZodLiteral<"0.0.0">;
            sourceProofKind: z.ZodLiteral<"customer_edge_cloud_source_contract_readback">;
            sourceProofDigestRequired: z.ZodLiteral<true>;
            sourcePathLabelsAllowedInKernelPin: z.ZodLiteral<false>;
        }, z.core.$strict>;
        constants: z.ZodObject<{
            states: z.ZodArray<z.ZodEnum<{
                proof_gap: "proof_gap";
                refused: "refused";
                revoked: "revoked";
                expired: "expired";
                attempted: "attempted";
                leased: "leased";
                exhausted: "exhausted";
                quarantined: "quarantined";
            }>>;
            capabilityStatuses: z.ZodArray<z.ZodEnum<{
                unknown: "unknown";
                proof_gap: "proof_gap";
                stale: "stale";
                unsupported: "unsupported";
                ready: "ready";
            }>>;
            failClosedReasons: z.ZodArray<z.ZodEnum<{
                raw_bypass_posture_unknown: "raw_bypass_posture_unknown";
                raw_bypass_posture_unblocked: "raw_bypass_posture_unblocked";
                schema_version_unsupported: "schema_version_unsupported";
                unsupported_agentic_endpoint_access_schema_version: "unsupported_agentic_endpoint_access_schema_version";
                middleware_version_unsupported: "middleware_version_unsupported";
                kernel_version_unsupported: "kernel_version_unsupported";
                missing_middleware_version: "missing_middleware_version";
                missing_kernel_id: "missing_kernel_id";
                missing_kernel_version: "missing_kernel_version";
                missing_local_kernel_sync: "missing_local_kernel_sync";
                stale_config: "stale_config";
                stale_capability_report: "stale_capability_report";
                missing_surface_binding: "missing_surface_binding";
                missing_required_capability: "missing_required_capability";
                unsupported_policy_feature: "unsupported_policy_feature";
                unsupported_delegation_evidence_kind: "unsupported_delegation_evidence_kind";
                missing_clearance_proof: "missing_clearance_proof";
                delegated_request_transcript_missing: "delegated_request_transcript_missing";
                delegated_request_transcript_mismatch: "delegated_request_transcript_mismatch";
                missing_bypass_posture_evidence: "missing_bypass_posture_evidence";
            }>>;
            authorityBoundary: z.ZodObject<{
                permitsEndpointAccess: z.ZodLiteral<true>;
                permitsMutation: z.ZodLiteral<false>;
                createsIndependentPolicyDecision: z.ZodLiteral<false>;
                createsIndependentGreenlight: z.ZodLiteral<false>;
                performsIndependentGatewayCheck: z.ZodLiteral<false>;
                exportsDownstreamReceipt: z.ZodLiteral<false>;
                mintsTerminalCertificate: z.ZodLiteral<false>;
                containsCredentialMaterial: z.ZodLiteral<false>;
                containsPaymentMaterial: z.ZodLiteral<false>;
                widensOperatingBounds: z.ZodLiteral<false>;
                freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
            }, z.core.$strict>;
        }, z.core.$strict>;
        requiredConfigPullResponseFields: z.ZodArray<z.ZodEnum<{
            schemaVersion: "schemaVersion";
            bindingDigest: "bindingDigest";
            endpointId: "endpointId";
            surfaceBinding: "surfaceBinding";
            operatingBounds: "operatingBounds";
            agenticEndpointAccessPolicyRef: "agenticEndpointAccessPolicyRef";
            agenticEndpointAccessPolicy: "agenticEndpointAccessPolicy";
            requiredCapabilities: "requiredCapabilities";
            compatibility: "compatibility";
        }>>;
        requiredCompatibilityFields: z.ZodArray<z.ZodEnum<{
            failClosedReasons: "failClosedReasons";
            status: "status";
            requestedSchemaVersion: "requestedSchemaVersion";
            currentMiddlewareVersion: "currentMiddlewareVersion";
            localKernelSyncProofRef: "localKernelSyncProofRef";
        }>>;
        candidateEventTypes: z.ZodArray<z.ZodEnum<{
            agentic_endpoint_access_leased: "agentic_endpoint_access_leased";
            agentic_endpoint_access_attempted: "agentic_endpoint_access_attempted";
            agentic_endpoint_access_refused: "agentic_endpoint_access_refused";
            agentic_endpoint_access_usage_recorded: "agentic_endpoint_access_usage_recorded";
            agentic_endpoint_access_revoked: "agentic_endpoint_access_revoked";
            agentic_endpoint_access_proof_gap_recorded: "agentic_endpoint_access_proof_gap_recorded";
            agentic_endpoint_access_transcript_recorded: "agentic_endpoint_access_transcript_recorded";
        }>>;
        middlewareEnvelopeEventTypes: z.ZodArray<z.ZodEnum<{
            "agentic_endpoint_access.protection_outcome": "agentic_endpoint_access.protection_outcome";
            "agentic_endpoint_access.usage_recorded": "agentic_endpoint_access.usage_recorded";
            "agentic_endpoint_access.readback_forwarded": "agentic_endpoint_access.readback_forwarded";
        }>>;
        kernelRequestEvidenceForwarding: z.ZodObject<{
            owner: z.ZodLiteral<"kernel_protocol_attempt_and_readback">;
            forwardedThrough: z.ZodLiteral<"AgenticEndpointAccessForwardedEvent.readback">;
            cloudSharedAttemptReadbackShapeIsAuthority: z.ZodLiteral<false>;
            requiredFields: z.ZodArray<z.ZodEnum<{
                schemaVersion: "schemaVersion";
                requestMethod: "requestMethod";
                requestUrlDigest: "requestUrlDigest";
                requestHeaderDigest: "requestHeaderDigest";
                requestBodyDigest: "requestBodyDigest";
                redactionPolicyId: "redactionPolicyId";
                requestEvidenceDigest: "requestEvidenceDigest";
            }>>;
        }, z.core.$strict>;
        projectedReadbackBoundary: z.ZodObject<{
            cloudIssuedAuthority: z.ZodLiteral<false>;
            downstreamOutcomeAuthorized: z.ZodLiteral<false>;
            displayOnly: z.ZodLiteral<true>;
        }, z.core.$strict>;
        middlewareBoundary: z.ZodObject<{
            createsCloudAuthority: z.ZodLiteral<false>;
            createsAeAuthority: z.ZodLiteral<false>;
            treatsAuthSessionAsAuthority: z.ZodLiteral<false>;
            treatsRouteMatcherAsAuthority: z.ZodLiteral<false>;
            treatsCloudReadinessAsAuthority: z.ZodLiteral<false>;
            permitsEndpointAccess: z.ZodLiteral<true>;
            permitsMutation: z.ZodLiteral<false>;
            createsIndependentPolicyDecision: z.ZodLiteral<false>;
            createsIndependentGreenlight: z.ZodLiteral<false>;
            performsIndependentGatewayCheck: z.ZodLiteral<false>;
            exportsDownstreamReceipt: z.ZodLiteral<false>;
            mintsTerminalCertificate: z.ZodLiteral<false>;
            containsCredentialMaterial: z.ZodLiteral<false>;
            containsPaymentMaterial: z.ZodLiteral<false>;
            widensOperatingBounds: z.ZodLiteral<false>;
            freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
        }, z.core.$strict>;
        nonClaims: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    contractDigest: z.ZodString;
    cloudRuntimeImportAllowed: z.ZodLiteral<false>;
    packageExportAllowed: z.ZodLiteral<false>;
    authorityCreated: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AgenticEndpointAccessCloudSharedContractPin = z.infer<typeof AgenticEndpointAccessCloudSharedContractPinSchema>;
export declare const agenticEndpointAccessCloudSharedContractPin: {
    schemaVersion: "handshake.agentic-endpoint-access.cloud-shared-contract-pin.v0.3.0";
    digestAlgorithm: "handshake-jcs-lite-sha256";
    digestMaterial: {
        schemaVersion: "handshake.agentic-endpoint-access.cloud-shared-contract-pin.v0.3.0";
        contractVersion: "0.3.0";
        cloudSharedPackage: {
            packageName: "@handshake-cloud/shared";
            sourcePackageVersion: "0.0.0";
            endpointAccessSchemaVersion: "0.3.0";
            semverPinRequiredBeforePublicExport: true;
            runtimeImportAllowedInKernel: false;
            sourceOnlyReference: true;
        };
        pinnedModules: ("@handshake-cloud/shared/constants/agentic-endpoint-access" | "@handshake-cloud/shared/schemas/agentic-endpoint-access" | "@handshake-cloud/shared/schemas/agentic-endpoint-access-config" | "@handshake-cloud/shared/schemas/agentic-endpoint-access-events" | "@handshake-cloud/shared/schemas/agentic-endpoint-access-capabilities" | "@handshake-cloud/shared/schemas/agentic-endpoint-access-readback" | "@handshake-cloud/shared/schemas/agentic-endpoint-public-api")[];
        sourceProvenance: {
            cloudRepoBoundary: "separate_cloud_repo";
            repositoryName: "handshake-cloud";
            packageName: "@handshake-cloud/shared";
            packagePath: "packages/shared";
            sourcePackageVersion: "0.0.0";
            sourceProofKind: "customer_edge_cloud_source_contract_readback";
            sourceProofDigestRequired: true;
            sourcePathLabelsAllowedInKernelPin: false;
        };
        constants: {
            states: ("proof_gap" | "refused" | "revoked" | "expired" | "attempted" | "leased" | "exhausted" | "quarantined")[];
            capabilityStatuses: ("unknown" | "proof_gap" | "stale" | "unsupported" | "ready")[];
            failClosedReasons: ("raw_bypass_posture_unknown" | "raw_bypass_posture_unblocked" | "schema_version_unsupported" | "unsupported_agentic_endpoint_access_schema_version" | "middleware_version_unsupported" | "kernel_version_unsupported" | "missing_middleware_version" | "missing_kernel_id" | "missing_kernel_version" | "missing_local_kernel_sync" | "stale_config" | "stale_capability_report" | "missing_surface_binding" | "missing_required_capability" | "unsupported_policy_feature" | "unsupported_delegation_evidence_kind" | "missing_clearance_proof" | "delegated_request_transcript_missing" | "delegated_request_transcript_mismatch" | "missing_bypass_posture_evidence")[];
            authorityBoundary: {
                permitsEndpointAccess: true;
                permitsMutation: false;
                createsIndependentPolicyDecision: false;
                createsIndependentGreenlight: false;
                performsIndependentGatewayCheck: false;
                exportsDownstreamReceipt: false;
                mintsTerminalCertificate: false;
                containsCredentialMaterial: false;
                containsPaymentMaterial: false;
                widensOperatingBounds: false;
                freshActionContractRequiredForDownstreamAction: true;
            };
        };
        requiredConfigPullResponseFields: ("schemaVersion" | "bindingDigest" | "endpointId" | "surfaceBinding" | "operatingBounds" | "agenticEndpointAccessPolicyRef" | "agenticEndpointAccessPolicy" | "requiredCapabilities" | "compatibility")[];
        requiredCompatibilityFields: ("failClosedReasons" | "status" | "requestedSchemaVersion" | "currentMiddlewareVersion" | "localKernelSyncProofRef")[];
        candidateEventTypes: ("agentic_endpoint_access_leased" | "agentic_endpoint_access_attempted" | "agentic_endpoint_access_refused" | "agentic_endpoint_access_usage_recorded" | "agentic_endpoint_access_revoked" | "agentic_endpoint_access_proof_gap_recorded" | "agentic_endpoint_access_transcript_recorded")[];
        middlewareEnvelopeEventTypes: ("agentic_endpoint_access.protection_outcome" | "agentic_endpoint_access.usage_recorded" | "agentic_endpoint_access.readback_forwarded")[];
        kernelRequestEvidenceForwarding: {
            owner: "kernel_protocol_attempt_and_readback";
            forwardedThrough: "AgenticEndpointAccessForwardedEvent.readback";
            cloudSharedAttemptReadbackShapeIsAuthority: false;
            requiredFields: ("schemaVersion" | "requestMethod" | "requestUrlDigest" | "requestHeaderDigest" | "requestBodyDigest" | "redactionPolicyId" | "requestEvidenceDigest")[];
        };
        projectedReadbackBoundary: {
            cloudIssuedAuthority: false;
            downstreamOutcomeAuthorized: false;
            displayOnly: true;
        };
        middlewareBoundary: {
            createsCloudAuthority: false;
            createsAeAuthority: false;
            treatsAuthSessionAsAuthority: false;
            treatsRouteMatcherAsAuthority: false;
            treatsCloudReadinessAsAuthority: false;
            permitsEndpointAccess: true;
            permitsMutation: false;
            createsIndependentPolicyDecision: false;
            createsIndependentGreenlight: false;
            performsIndependentGatewayCheck: false;
            exportsDownstreamReceipt: false;
            mintsTerminalCertificate: false;
            containsCredentialMaterial: false;
            containsPaymentMaterial: false;
            widensOperatingBounds: false;
            freshActionContractRequiredForDownstreamAction: true;
        };
        nonClaims: string[];
    };
    contractDigest: string;
    cloudRuntimeImportAllowed: false;
    packageExportAllowed: false;
    authorityCreated: false;
};
export declare const AgenticEndpointAccessCloudInteractionSchema: z.ZodEnum<{
    register_endpoint: "register_endpoint";
    pull_config: "pull_config";
    report_capability: "report_capability";
    ingest_event: "ingest_event";
    hitl_delivery_pull: "hitl_delivery_pull";
    hitl_delivery_ack: "hitl_delivery_ack";
    callback_push: "callback_push";
    readback_lookup: "readback_lookup";
}>;
export type AgenticEndpointAccessCloudInteraction = z.infer<typeof AgenticEndpointAccessCloudInteractionSchema>;
export declare const AgenticEndpointAccessCloudAuthModeSchema: z.ZodEnum<{
    install_token: "install_token";
    endpoint_hmac: "endpoint_hmac";
    callback_hmac: "callback_hmac";
    public_verify_url: "public_verify_url";
}>;
export type AgenticEndpointAccessCloudAuthMode = z.infer<typeof AgenticEndpointAccessCloudAuthModeSchema>;
export declare const AgenticEndpointAccessCloudContractRowSchema: z.ZodObject<{
    interaction: z.ZodEnum<{
        register_endpoint: "register_endpoint";
        pull_config: "pull_config";
        report_capability: "report_capability";
        ingest_event: "ingest_event";
        hitl_delivery_pull: "hitl_delivery_pull";
        hitl_delivery_ack: "hitl_delivery_ack";
        callback_push: "callback_push";
        readback_lookup: "readback_lookup";
    }>;
    authMode: z.ZodEnum<{
        install_token: "install_token";
        endpoint_hmac: "endpoint_hmac";
        callback_hmac: "callback_hmac";
        public_verify_url: "public_verify_url";
    }>;
    localKernelPrerequisite: z.ZodString;
    failurePosture: z.ZodString;
    requiredProof: z.ZodString;
    boundary: z.ZodObject<{
        createsCloudAuthority: z.ZodLiteral<false>;
        createsAeAuthority: z.ZodLiteral<false>;
        treatsAuthSessionAsAuthority: z.ZodLiteral<false>;
        treatsRouteMatcherAsAuthority: z.ZodLiteral<false>;
        treatsCloudReadinessAsAuthority: z.ZodLiteral<false>;
        permitsEndpointAccess: z.ZodLiteral<true>;
        permitsMutation: z.ZodLiteral<false>;
        createsIndependentPolicyDecision: z.ZodLiteral<false>;
        createsIndependentGreenlight: z.ZodLiteral<false>;
        performsIndependentGatewayCheck: z.ZodLiteral<false>;
        exportsDownstreamReceipt: z.ZodLiteral<false>;
        mintsTerminalCertificate: z.ZodLiteral<false>;
        containsCredentialMaterial: z.ZodLiteral<false>;
        containsPaymentMaterial: z.ZodLiteral<false>;
        widensOperatingBounds: z.ZodLiteral<false>;
        freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AgenticEndpointAccessCloudContractRow = z.infer<typeof AgenticEndpointAccessCloudContractRowSchema>;
export declare const agenticEndpointAccessCloudContractTable: readonly [{
    readonly interaction: "register_endpoint";
    readonly authMode: "install_token";
    readonly localKernelPrerequisite: "none for first call; durable secret refs after registration";
    readonly failurePosture: "unregistered/proof_gap";
    readonly requiredProof: "secrets stored as refs and not logged";
    readonly boundary: {
        readonly createsCloudAuthority: false;
        readonly createsAeAuthority: false;
        readonly treatsAuthSessionAsAuthority: false;
        readonly treatsRouteMatcherAsAuthority: false;
        readonly treatsCloudReadinessAsAuthority: false;
        readonly permitsEndpointAccess: true;
        readonly permitsMutation: false;
        readonly createsIndependentPolicyDecision: false;
        readonly createsIndependentGreenlight: false;
        readonly performsIndependentGatewayCheck: false;
        readonly exportsDownstreamReceipt: false;
        readonly mintsTerminalCertificate: false;
        readonly containsCredentialMaterial: false;
        readonly containsPaymentMaterial: false;
        readonly widensOperatingBounds: false;
        readonly freshActionContractRequiredForDownstreamAction: true;
    };
}, {
    readonly interaction: "pull_config";
    readonly authMode: "endpoint_hmac";
    readonly localKernelPrerequisite: "sync OperatingBounds, EndpointAccessSurfaceBinding, and policy before ready";
    readonly failurePosture: "stale/missing/unsupported proof_gap_or_refusal";
    readonly requiredProof: "Cloud GET alone cannot mark ready";
    readonly boundary: {
        readonly createsCloudAuthority: false;
        readonly createsAeAuthority: false;
        readonly treatsAuthSessionAsAuthority: false;
        readonly treatsRouteMatcherAsAuthority: false;
        readonly treatsCloudReadinessAsAuthority: false;
        readonly permitsEndpointAccess: true;
        readonly permitsMutation: false;
        readonly createsIndependentPolicyDecision: false;
        readonly createsIndependentGreenlight: false;
        readonly performsIndependentGatewayCheck: false;
        readonly exportsDownstreamReceipt: false;
        readonly mintsTerminalCertificate: false;
        readonly containsCredentialMaterial: false;
        readonly containsPaymentMaterial: false;
        readonly widensOperatingBounds: false;
        readonly freshActionContractRequiredForDownstreamAction: true;
    };
}, {
    readonly interaction: "report_capability";
    readonly authMode: "endpoint_hmac";
    readonly localKernelPrerequisite: "local capability and sync proof computed from state";
    readonly failurePosture: "unknown support unsupported_or_proof_gap";
    readonly requiredProof: "self-attested capability is rejected";
    readonly boundary: {
        readonly createsCloudAuthority: false;
        readonly createsAeAuthority: false;
        readonly treatsAuthSessionAsAuthority: false;
        readonly treatsRouteMatcherAsAuthority: false;
        readonly treatsCloudReadinessAsAuthority: false;
        readonly permitsEndpointAccess: true;
        readonly permitsMutation: false;
        readonly createsIndependentPolicyDecision: false;
        readonly createsIndependentGreenlight: false;
        readonly performsIndependentGatewayCheck: false;
        readonly exportsDownstreamReceipt: false;
        readonly mintsTerminalCertificate: false;
        readonly containsCredentialMaterial: false;
        readonly containsPaymentMaterial: false;
        readonly widensOperatingBounds: false;
        readonly freshActionContractRequiredForDownstreamAction: true;
    };
}, {
    readonly interaction: "ingest_event";
    readonly authMode: "endpoint_hmac";
    readonly localKernelPrerequisite: "local outcome/evidence already persisted";
    readonly failurePosture: "retry idempotently without authority replay";
    readonly requiredProof: "ingest outage after lease does not re-run authority";
    readonly boundary: {
        readonly createsCloudAuthority: false;
        readonly createsAeAuthority: false;
        readonly treatsAuthSessionAsAuthority: false;
        readonly treatsRouteMatcherAsAuthority: false;
        readonly treatsCloudReadinessAsAuthority: false;
        readonly permitsEndpointAccess: true;
        readonly permitsMutation: false;
        readonly createsIndependentPolicyDecision: false;
        readonly createsIndependentGreenlight: false;
        readonly performsIndependentGatewayCheck: false;
        readonly exportsDownstreamReceipt: false;
        readonly mintsTerminalCertificate: false;
        readonly containsCredentialMaterial: false;
        readonly containsPaymentMaterial: false;
        readonly widensOperatingBounds: false;
        readonly freshActionContractRequiredForDownstreamAction: true;
    };
}, {
    readonly interaction: "hitl_delivery_pull";
    readonly authMode: "endpoint_hmac";
    readonly localKernelPrerequisite: "local review/policy sequence when applicable";
    readonly failurePosture: "duplicate no-op and failure recorded";
    readonly requiredProof: "Cloud UI approval is not greenlight";
    readonly boundary: {
        readonly createsCloudAuthority: false;
        readonly createsAeAuthority: false;
        readonly treatsAuthSessionAsAuthority: false;
        readonly treatsRouteMatcherAsAuthority: false;
        readonly treatsCloudReadinessAsAuthority: false;
        readonly permitsEndpointAccess: true;
        readonly permitsMutation: false;
        readonly createsIndependentPolicyDecision: false;
        readonly createsIndependentGreenlight: false;
        readonly performsIndependentGatewayCheck: false;
        readonly exportsDownstreamReceipt: false;
        readonly mintsTerminalCertificate: false;
        readonly containsCredentialMaterial: false;
        readonly containsPaymentMaterial: false;
        readonly widensOperatingBounds: false;
        readonly freshActionContractRequiredForDownstreamAction: true;
    };
}, {
    readonly interaction: "hitl_delivery_ack";
    readonly authMode: "endpoint_hmac";
    readonly localKernelPrerequisite: "local review/policy sequence when applicable";
    readonly failurePosture: "duplicate no-op and failure recorded";
    readonly requiredProof: "ack does not create lease";
    readonly boundary: {
        readonly createsCloudAuthority: false;
        readonly createsAeAuthority: false;
        readonly treatsAuthSessionAsAuthority: false;
        readonly treatsRouteMatcherAsAuthority: false;
        readonly treatsCloudReadinessAsAuthority: false;
        readonly permitsEndpointAccess: true;
        readonly permitsMutation: false;
        readonly createsIndependentPolicyDecision: false;
        readonly createsIndependentGreenlight: false;
        readonly performsIndependentGatewayCheck: false;
        readonly exportsDownstreamReceipt: false;
        readonly mintsTerminalCertificate: false;
        readonly containsCredentialMaterial: false;
        readonly containsPaymentMaterial: false;
        readonly widensOperatingBounds: false;
        readonly freshActionContractRequiredForDownstreamAction: true;
    };
}, {
    readonly interaction: "callback_push";
    readonly authMode: "callback_hmac";
    readonly localKernelPrerequisite: "schema dispatch and local follow-up";
    readonly failurePosture: "unknown payload fail_closed";
    readonly requiredProof: "route-bound callback HMAC cannot mint lease";
    readonly boundary: {
        readonly createsCloudAuthority: false;
        readonly createsAeAuthority: false;
        readonly treatsAuthSessionAsAuthority: false;
        readonly treatsRouteMatcherAsAuthority: false;
        readonly treatsCloudReadinessAsAuthority: false;
        readonly permitsEndpointAccess: true;
        readonly permitsMutation: false;
        readonly createsIndependentPolicyDecision: false;
        readonly createsIndependentGreenlight: false;
        readonly performsIndependentGatewayCheck: false;
        readonly exportsDownstreamReceipt: false;
        readonly mintsTerminalCertificate: false;
        readonly containsCredentialMaterial: false;
        readonly containsPaymentMaterial: false;
        readonly widensOperatingBounds: false;
        readonly freshActionContractRequiredForDownstreamAction: true;
    };
}, {
    readonly interaction: "readback_lookup";
    readonly authMode: "public_verify_url";
    readonly localKernelPrerequisite: "local readback refs/digests exist";
    readonly failurePosture: "readback lag evidence_lag";
    readonly requiredProof: "readback lag does not affect local safety";
    readonly boundary: {
        readonly createsCloudAuthority: false;
        readonly createsAeAuthority: false;
        readonly treatsAuthSessionAsAuthority: false;
        readonly treatsRouteMatcherAsAuthority: false;
        readonly treatsCloudReadinessAsAuthority: false;
        readonly permitsEndpointAccess: true;
        readonly permitsMutation: false;
        readonly createsIndependentPolicyDecision: false;
        readonly createsIndependentGreenlight: false;
        readonly performsIndependentGatewayCheck: false;
        readonly exportsDownstreamReceipt: false;
        readonly mintsTerminalCertificate: false;
        readonly containsCredentialMaterial: false;
        readonly containsPaymentMaterial: false;
        readonly widensOperatingBounds: false;
        readonly freshActionContractRequiredForDownstreamAction: true;
    };
}];
export declare const AgenticEndpointAccessCloudEventEnvelopeSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<"handshake.cloud.event-envelope.v1">;
    eventId: z.ZodString;
    eventType: z.ZodEnum<{
        "agentic_endpoint_access.protection_outcome": "agentic_endpoint_access.protection_outcome";
        "agentic_endpoint_access.usage_recorded": "agentic_endpoint_access.usage_recorded";
        "agentic_endpoint_access.readback_forwarded": "agentic_endpoint_access.readback_forwarded";
    }>;
    tenantId: z.ZodString;
    organizationId: z.ZodString;
    idempotencyKey: z.ZodString;
    payloadDigest: z.ZodString;
    payload: z.ZodObject<{
        schemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.middleware-event.v0.3.0">;
        eventId: z.ZodString;
        eventType: z.ZodEnum<{
            protection_outcome: "protection_outcome";
            usage_recorded: "usage_recorded";
            readback_forwarded: "readback_forwarded";
            callback_received: "callback_received";
        }>;
        tenantId: z.ZodString;
        organizationId: z.ZodString;
        idempotencyKey: z.ZodString;
        requestId: z.ZodNullable<z.ZodString>;
        outcomeStatus: z.ZodOptional<z.ZodEnum<{
            proof_gap: "proof_gap";
            stale: "stale";
            refused: "refused";
            unsupported: "unsupported";
            revoked: "revoked";
            leased: "leased";
            exhausted: "exhausted";
            quarantined: "quarantined";
            replay: "replay";
            store_conflict: "store_conflict";
        }>>;
        outcomeRef: z.ZodOptional<z.ZodString>;
        readback: z.ZodOptional<z.ZodObject<{
            schemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.v0.3.0">;
            tenantId: z.ZodString;
            organizationId: z.ZodString;
            createdAt: z.ZodString;
            readbackId: z.ZodString;
            leaseId: z.ZodNullable<z.ZodString>;
            attemptId: z.ZodString;
            candidateActionId: z.ZodString;
            attemptDigest: z.ZodString;
            requestEvidence: z.ZodObject<{
                schemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.v0.3.0">;
                requestMethod: z.ZodString;
                requestUrlDigest: z.ZodString;
                requestHeaderDigest: z.ZodString;
                requestBodyDigest: z.ZodString;
                redactionPolicyId: z.ZodString;
                requestEvidenceDigest: z.ZodString;
            }, z.core.$strict>;
            protectedSurfaceBindingId: z.ZodString;
            protectedSurfaceBindingDigest: z.ZodString;
            protectedSurfaceRef: z.ZodString;
            protectedSurfaceKind: z.ZodString;
            resourceRef: z.ZodString;
            policyVersionId: z.ZodString;
            configRevision: z.ZodString;
            kernelVersion: z.ZodString;
            middlewareVersion: z.ZodString;
            runtimePostureRef: z.ZodString;
            gatewayRegistryEntryId: z.ZodString;
            gatewayId: z.ZodString;
            gatewayAuthorityHolderRef: z.ZodString;
            rawBypassPosture: z.ZodEnum<{
                unknown: "unknown";
                stale: "stale";
                blocked: "blocked";
                unblocked: "unblocked";
                inconclusive: "inconclusive";
            }>;
            siblingBypassPosture: z.ZodEnum<{
                unknown: "unknown";
                stale: "stale";
                blocked: "blocked";
                unblocked: "unblocked";
                inconclusive: "inconclusive";
            }>;
            capabilityReportRef: z.ZodString;
            healthReportRef: z.ZodString;
            usageSummary: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../..").JsonValue, unknown>>>>;
            linkedActionRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
            linkedReceiptRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
            linkedProofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
            publicVerifyUrl: z.ZodString;
            downstreamReceiptBoundary: z.ZodLiteral<"linked_receipts_are_not_endpoint_access_authorization">;
        }, z.core.$strict>>;
        usageEvents: z.ZodDefault<z.ZodArray<z.ZodObject<{
            schemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.v0.3.0">;
            tenantId: z.ZodString;
            organizationId: z.ZodString;
            createdAt: z.ZodString;
            usageEventId: z.ZodString;
            leaseId: z.ZodString;
            protectedSurfaceBindingId: z.ZodString;
            protectedSurfaceRef: z.ZodString;
            protectedSurfaceKind: z.ZodString;
            resourceRef: z.ZodString;
            usageKind: z.ZodEnum<{
                request: "request";
                token: "token";
                tool_call: "tool_call";
                cost_unit: "cost_unit";
            }>;
            amount: z.ZodNumber;
            counterAfter: z.ZodNumber;
            occurredAt: z.ZodString;
            proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strict>>>;
        reasonCodes: z.ZodDefault<z.ZodArray<z.ZodString>>;
        proofGapRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
        payloadDigest: z.ZodString;
        boundary: z.ZodObject<{
            createsCloudAuthority: z.ZodLiteral<false>;
            createsAeAuthority: z.ZodLiteral<false>;
            treatsAuthSessionAsAuthority: z.ZodLiteral<false>;
            treatsRouteMatcherAsAuthority: z.ZodLiteral<false>;
            treatsCloudReadinessAsAuthority: z.ZodLiteral<false>;
            permitsEndpointAccess: z.ZodLiteral<true>;
            permitsMutation: z.ZodLiteral<false>;
            createsIndependentPolicyDecision: z.ZodLiteral<false>;
            createsIndependentGreenlight: z.ZodLiteral<false>;
            performsIndependentGatewayCheck: z.ZodLiteral<false>;
            exportsDownstreamReceipt: z.ZodLiteral<false>;
            mintsTerminalCertificate: z.ZodLiteral<false>;
            containsCredentialMaterial: z.ZodLiteral<false>;
            containsPaymentMaterial: z.ZodLiteral<false>;
            widensOperatingBounds: z.ZodLiteral<false>;
            freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
        }, z.core.$strict>;
        occurredAt: z.ZodString;
    }, z.core.$strict>;
    boundary: z.ZodObject<{
        createsCloudAuthority: z.ZodLiteral<false>;
        createsAeAuthority: z.ZodLiteral<false>;
        treatsAuthSessionAsAuthority: z.ZodLiteral<false>;
        treatsRouteMatcherAsAuthority: z.ZodLiteral<false>;
        treatsCloudReadinessAsAuthority: z.ZodLiteral<false>;
        permitsEndpointAccess: z.ZodLiteral<true>;
        permitsMutation: z.ZodLiteral<false>;
        createsIndependentPolicyDecision: z.ZodLiteral<false>;
        createsIndependentGreenlight: z.ZodLiteral<false>;
        performsIndependentGatewayCheck: z.ZodLiteral<false>;
        exportsDownstreamReceipt: z.ZodLiteral<false>;
        mintsTerminalCertificate: z.ZodLiteral<false>;
        containsCredentialMaterial: z.ZodLiteral<false>;
        containsPaymentMaterial: z.ZodLiteral<false>;
        widensOperatingBounds: z.ZodLiteral<false>;
        freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
    }, z.core.$strict>;
    occurredAt: z.ZodString;
}, z.core.$strict>;
export type AgenticEndpointAccessCloudEventEnvelope = z.infer<typeof AgenticEndpointAccessCloudEventEnvelopeSchema>;
export declare const AgenticEndpointAccessCallbackPayloadSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"agent.suspended">;
    deliveryId: z.ZodString;
    agentRef: z.ZodString;
    reasonRef: z.ZodString;
    occurredAt: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"agent.unsuspended">;
    deliveryId: z.ZodString;
    agentRef: z.ZodString;
    occurredAt: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"config.invalidated">;
    deliveryId: z.ZodString;
    configRevision: z.ZodString;
    occurredAt: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"hitl.approved">;
    deliveryId: z.ZodString;
    reviewRef: z.ZodString;
    localFollowUpRequired: z.ZodLiteral<true>;
    occurredAt: z.ZodString;
}, z.core.$strict>], "type">;
export type AgenticEndpointAccessCallbackPayload = z.infer<typeof AgenticEndpointAccessCallbackPayloadSchema>;
export declare const AgenticEndpointAccessCallbackDispatchResultSchema: z.ZodObject<{
    status: z.ZodEnum<{
        rejected: "rejected";
        recorded: "recorded";
        duplicate: "duplicate";
    }>;
    deliveryId: z.ZodNullable<z.ZodString>;
    controlAction: z.ZodEnum<{
        none: "none";
        invalidate_config: "invalidate_config";
        suspend_agent: "suspend_agent";
        unsuspend_agent: "unsuspend_agent";
        local_follow_up_required: "local_follow_up_required";
    }>;
    localFollowUpRequired: z.ZodBoolean;
    reasonCodes: z.ZodArray<z.ZodString>;
    authorityCreated: z.ZodLiteral<false>;
    leaseCreated: z.ZodLiteral<false>;
    greenlightCreated: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    receiptCreated: z.ZodLiteral<false>;
    downstreamApproved: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AgenticEndpointAccessCallbackDispatchResult = z.infer<typeof AgenticEndpointAccessCallbackDispatchResultSchema>;
export declare const AgenticEndpointAccessCloudIngestResultSchema: z.ZodObject<{
    status: z.ZodEnum<{
        rejected: "rejected";
        duplicate: "duplicate";
        accepted: "accepted";
        queued: "queued";
    }>;
    eventId: z.ZodString;
    reasonCodes: z.ZodArray<z.ZodString>;
    authorityCreated: z.ZodLiteral<false>;
    policyReevaluated: z.ZodLiteral<false>;
    greenlightIssued: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AgenticEndpointAccessCloudIngestResult = z.infer<typeof AgenticEndpointAccessCloudIngestResultSchema>;
export declare const AgenticEndpointAccessConfigPullRequestSchema: z.ZodObject<{
    endpointId: z.ZodString;
    requestedKernelVersion: z.ZodLiteral<"0.3.0">;
    requestedEndpointAccessSchemaVersion: z.ZodLiteral<"handshake.agentic-endpoint-access.v0.3.0">;
}, z.core.$strict>;
export type AgenticEndpointAccessConfigPullRequest = z.infer<typeof AgenticEndpointAccessConfigPullRequestSchema>;
export declare const AgenticEndpointAccessCloudConfigResponseSchema: z.ZodObject<{
    status: z.ZodEnum<{
        proof_gap: "proof_gap";
        unsupported: "unsupported";
        ok: "ok";
        unregistered: "unregistered";
    }>;
    snapshot: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../..").JsonValue, unknown>>>>;
    localSyncProofRequired: z.ZodLiteral<true>;
    authorityCreated: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AgenticEndpointAccessCloudConfigResponse = z.infer<typeof AgenticEndpointAccessCloudConfigResponseSchema>;
export type AgenticEndpointAccessCloudEventIngest = {
    ingestEvent(envelope: AgenticEndpointAccessCloudEventEnvelope): Promise<AgenticEndpointAccessCloudIngestResult>;
};
export declare function protectionOutcomeEventType(_outcome: z.infer<typeof AgenticEndpointAccessProtectionOutcomeSchema>): AgenticEndpointAccessCloudEventEnvelope["eventType"];
