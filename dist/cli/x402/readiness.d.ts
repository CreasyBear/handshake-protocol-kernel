import { z } from "zod";
import { type LocalX402GatewayReadinessRecord, type LocalX402InstallRecord, type LocalX402ProbeReport, type LocalX402ReadinessReport } from "./local-state";
export declare const X402GatewayReadinessRegistrationInputSchema: z.ZodObject<{
    gatewayId: z.ZodString;
    gatewayRegistrationRef: z.ZodString;
    gatewayCredentialRefDigest: z.ZodString;
    gatewayCredentialCustodyStatus: z.ZodEnum<{
        gateway_held: "gateway_held";
        fixture_gateway_held: "fixture_gateway_held";
    }>;
    gatewayCustodyProofPacketRef: z.ZodString;
    gatewayCustodyProofPacketDigest: z.ZodString;
    gatewayCustodyClaimLevel: z.ZodEnum<{
        local_fixture: "local_fixture";
        customer_gateway_evidence: "customer_gateway_evidence";
        provider_gateway_evidence: "provider_gateway_evidence";
    }>;
    gatewayCustodyExternalVerificationStatus: z.ZodEnum<{
        not_required: "not_required";
        required_before_live_claim: "required_before_live_claim";
        verified_by_official_source: "verified_by_official_source";
    }>;
    gatewayCustodyProofExpiresAt: z.ZodString;
    gatewayPosture: z.ZodEnum<{
        unknown: "unknown";
        offline: "offline";
        online: "online";
    }>;
    policyVersionRef: z.ZodString;
    policyVersionDigest: z.ZodString;
    expiresAt: z.ZodString;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type X402GatewayReadinessRegistrationInput = z.infer<typeof X402GatewayReadinessRegistrationInputSchema>;
export type LocalX402GatewayReadinessOutcome = {
    record: LocalX402GatewayReadinessRecord | null;
    reasonCodes: string[];
    nextAction: "fix_install" | "register_control_plane_install";
};
export type LocalX402ReadinessState = {
    projectConfigPresent: boolean;
    install: LocalX402InstallRecord | null;
    probes: LocalX402ProbeReport | null;
    gatewayReadiness: LocalX402GatewayReadinessRecord | null;
    reasonCodes: string[];
    readinessReport: LocalX402ReadinessReport;
};
export declare function buildLocalGatewayReadinessRecord(cwd: string, registration: X402GatewayReadinessRegistrationInput): Promise<LocalX402GatewayReadinessOutcome>;
export declare function readLocalX402ReadinessState(cwd: string): Promise<LocalX402ReadinessState>;
export declare function localGatewayReadinessRecordRef(project: {
    stateRootRef: string;
    projectId: string;
}): string;
