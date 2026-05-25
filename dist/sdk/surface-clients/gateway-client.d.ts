import type { BypassProbe, CredentialResolutionEvidence, GatewayCheckAttempt, GatewayCredentialRef, GatewayCustodyProofPacket, MutationAttempt, ProofGap, ProtectedPathPosture, Receipt, SurfaceOperationReconciliation } from "../../protocol/public/schemas";
import type { CreateBypassProbeInput, CreateProtectedPathPostureInput, GatewayCheckInput, ReconcileSurfaceOperationInput, RecordCredentialResolutionEvidenceInput, RecordGatewayCustodyProofPacketInput, RegisterGatewayCredentialRefInput } from "../../protocol/public/inputs";
import type { HandshakeFetch } from "../client";
import { type RoleScopedClientOptions } from "./transport";
export type GatewayClientOptions = RoleScopedClientOptions;
export type GatewayClientCheckResult = {
    gateAttempt: GatewayCheckAttempt;
    mutationAttempt: MutationAttempt | null;
    receipt: Receipt;
    proofGap: ProofGap | null;
};
export type GatewayClientReconciliationResult = {
    reconciliation: SurfaceOperationReconciliation;
    resolvedProofGaps: ProofGap[];
    createdProofGap: ProofGap | null;
};
export declare class GatewayClient {
    private readonly transport;
    constructor(baseUrl: string, options: GatewayClientOptions, fetchImpl?: HandshakeFetch);
    registerGatewayCredentialRef(input: RegisterGatewayCredentialRefInput): Promise<GatewayCredentialRef>;
    recordGatewayCustodyProofPacket(input: RecordGatewayCustodyProofPacketInput): Promise<GatewayCustodyProofPacket>;
    createBypassProbe(input: CreateBypassProbeInput): Promise<BypassProbe>;
    createProtectedPathPosture(input: CreateProtectedPathPostureInput): Promise<ProtectedPathPosture>;
    gatewayCheck(input: GatewayCheckInput): Promise<GatewayClientCheckResult>;
    recordCredentialResolutionEvidence(input: RecordCredentialResolutionEvidenceInput): Promise<CredentialResolutionEvidence>;
    reconcileSurfaceOperation(input: ReconcileSurfaceOperationInput): Promise<GatewayClientReconciliationResult>;
}
