import { z } from "zod";
import { type AgenticEndpointAccessReadback } from "../../protocol/areas/agentic-endpoint-access/schemas";
export declare const AgenticEndpointAccessConsumerDisplayStateSchema: z.ZodEnum<{
    proof_gap: "proof_gap";
    stale: "stale";
    refused: "refused";
    unsupported: "unsupported";
    revoked: "revoked";
    expired: "expired";
    leased: "leased";
    exhausted: "exhausted";
    quarantined: "quarantined";
    ready: "ready";
}>;
export type AgenticEndpointAccessConsumerDisplayState = z.infer<typeof AgenticEndpointAccessConsumerDisplayStateSchema>;
export declare const AgenticEndpointAccessConsumerAuthorityBoundarySchema: z.ZodObject<{
    authorityCreated: z.ZodLiteral<false>;
    credentialMaterialIncluded: z.ZodLiteral<false>;
    gatewayCheckPerformed: z.ZodLiteral<false>;
    greenlightCreated: z.ZodLiteral<false>;
    mutationAttempted: z.ZodLiteral<false>;
    mutationCommandIncluded: z.ZodLiteral<false>;
    rawInternalRecordIncluded: z.ZodLiteral<false>;
    receiptExportCreated: z.ZodLiteral<false>;
    authorityCertificateMinted: z.ZodLiteral<false>;
    freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
}, z.core.$strict>;
export type AgenticEndpointAccessConsumerAuthorityBoundary = z.infer<typeof AgenticEndpointAccessConsumerAuthorityBoundarySchema>;
export declare const agenticEndpointAccessConsumerAuthorityBoundary: {
    readonly authorityCreated: false;
    readonly credentialMaterialIncluded: false;
    readonly gatewayCheckPerformed: false;
    readonly greenlightCreated: false;
    readonly mutationAttempted: false;
    readonly mutationCommandIncluded: false;
    readonly rawInternalRecordIncluded: false;
    readonly receiptExportCreated: false;
    readonly authorityCertificateMinted: false;
    readonly freshActionContractRequiredForDownstreamAction: true;
};
export declare const AgenticEndpointAccessConsumerReadbackSchema: z.ZodObject<{
    surfaceKind: z.ZodLiteral<"agentic_endpoint_access_consumer_readback">;
    schemaVersion: z.ZodLiteral<"agentic-economy.endpoint-access-readback.v0.3.0">;
    displayState: z.ZodEnum<{
        proof_gap: "proof_gap";
        stale: "stale";
        refused: "refused";
        unsupported: "unsupported";
        revoked: "revoked";
        expired: "expired";
        leased: "leased";
        exhausted: "exhausted";
        quarantined: "quarantined";
        ready: "ready";
    }>;
    displaySemantics: z.ZodEnum<{
        endpoint_entry_only: "endpoint_entry_only";
        capability_or_health_not_ready: "capability_or_health_not_ready";
        terminal_non_authority_evidence: "terminal_non_authority_evidence";
    }>;
    protectedSurfaceRef: z.ZodString;
    protectedSurfaceKind: z.ZodString;
    protectedSurfaceBindingRef: z.ZodString;
    protectedSurfaceBindingDigest: z.ZodString;
    endpointAccessAttemptRef: z.ZodString;
    endpointAccessLeaseRef: z.ZodNullable<z.ZodString>;
    endpointAccessReadbackRef: z.ZodString;
    publicVerifyUrl: z.ZodString;
    policyVersionId: z.ZodString;
    configRevision: z.ZodString;
    kernelVersion: z.ZodString;
    middlewareVersion: z.ZodString;
    capability: z.ZodObject<{
        capabilityReportRef: z.ZodString;
        status: z.ZodEnum<{
            unknown: "unknown";
            stale: "stale";
            unsupported: "unsupported";
            supported: "supported";
        }>;
        unsupportedReasonCodes: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    health: z.ZodObject<{
        healthReportRef: z.ZodString;
        readinessState: z.ZodEnum<{
            read_only: "read_only";
            missing: "missing";
            active: "active";
            disabled: "disabled";
            configured_but_unverified: "configured_but_unverified";
            not_promoted: "not_promoted";
        }>;
    }, z.core.$strict>;
    bypassPosture: z.ZodObject<{
        raw: z.ZodEnum<{
            unknown: "unknown";
            stale: "stale";
            blocked: "blocked";
            unblocked: "unblocked";
            inconclusive: "inconclusive";
        }>;
        sibling: z.ZodEnum<{
            unknown: "unknown";
            stale: "stale";
            blocked: "blocked";
            unblocked: "unblocked";
            inconclusive: "inconclusive";
        }>;
        status: z.ZodEnum<{
            unknown: "unknown";
            blocked: "blocked";
            unsafe: "unsafe";
        }>;
    }, z.core.$strict>;
    linkedActionRefs: z.ZodArray<z.ZodString>;
    linkedReceiptRefs: z.ZodArray<z.ZodString>;
    linkedProofGapRefs: z.ZodArray<z.ZodString>;
    authorityBoundary: z.ZodObject<{
        authorityCreated: z.ZodLiteral<false>;
        credentialMaterialIncluded: z.ZodLiteral<false>;
        gatewayCheckPerformed: z.ZodLiteral<false>;
        greenlightCreated: z.ZodLiteral<false>;
        mutationAttempted: z.ZodLiteral<false>;
        mutationCommandIncluded: z.ZodLiteral<false>;
        rawInternalRecordIncluded: z.ZodLiteral<false>;
        receiptExportCreated: z.ZodLiteral<false>;
        authorityCertificateMinted: z.ZodLiteral<false>;
        freshActionContractRequiredForDownstreamAction: z.ZodLiteral<true>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AgenticEndpointAccessConsumerReadback = z.infer<typeof AgenticEndpointAccessConsumerReadbackSchema>;
export type ProjectAgenticEndpointAccessConsumerReadbackInput = {
    readonly readback: AgenticEndpointAccessReadback;
    readonly capabilityStatus?: "supported" | "unsupported" | "stale" | "unknown";
    readonly unsupportedReasonCodes?: readonly string[];
    readonly readinessState?: "active" | "configured_but_unverified" | "missing" | "disabled" | "read_only" | "not_promoted";
};
export declare function projectAgenticEndpointAccessConsumerReadback(input: ProjectAgenticEndpointAccessConsumerReadbackInput): AgenticEndpointAccessConsumerReadback;
