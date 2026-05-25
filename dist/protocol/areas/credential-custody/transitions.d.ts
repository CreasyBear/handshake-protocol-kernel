import type { ActionContract } from "../action-contract";
import type { ProtocolRecorder } from "../../events/records";
import type { ProtocolStore, StoredProtocolRecord } from "../../store/port";
import { type RecordCredentialResolutionEvidenceInput, type RecordGatewayCustodyProofPacketInput, type RegisterGatewayCredentialRefInput } from "./types";
import { type CredentialResolutionEvidence, type GatewayCredentialBinding, type GatewayCredentialRef, type GatewayCustodyProofPacket } from "./types";
export type GatewayCredentialBindingEvaluation = {
    records: StoredProtocolRecord<GatewayCredentialRef>[];
    policyInput: CredentialBindingPolicyInput[];
} & ({
    ok: true;
} | {
    ok: false;
    reasonCode: string;
    reason: string;
});
export type CredentialBindingPolicyInput = {
    credentialUseName: string;
    gatewayCredentialRefId: string;
    gatewayCredentialRefDigest: string;
    providerRegistryRef: string;
    providerRegistryDigest: string | null;
    custodyStatus: GatewayCredentialRef["custodyStatus"] | null;
    requiredCredentialCustodyStatus: GatewayCredentialBinding["requiredCredentialCustodyStatus"];
    freshness: "fresh" | "stale" | "missing" | "not_expiring";
};
export declare function registerGatewayCredentialRef(recorder: ProtocolRecorder, inputValue: RegisterGatewayCredentialRefInput): Promise<GatewayCredentialRef>;
export declare function recordCredentialResolutionEvidence(recorder: ProtocolRecorder, inputValue: RecordCredentialResolutionEvidenceInput): Promise<CredentialResolutionEvidence>;
export declare function recordGatewayCustodyProofPacket(recorder: ProtocolRecorder, inputValue: RecordGatewayCustodyProofPacketInput): Promise<GatewayCustodyProofPacket>;
export declare function evaluateGatewayCredentialBindings(store: ProtocolStore, contract: ActionContract, now: string): Promise<GatewayCredentialBindingEvaluation>;
