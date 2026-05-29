import type { AgreementStatusTransition } from "../../protocol/areas/negotiation";
import { assembleAgentTransactionEnvelope } from "../../protocol/evidence-projections/assembly";
import type { ProtocolStore } from "../../protocol/store/port";
type TransactionEnvelopeResult = {
    status: "assembled";
    reasonCode: null;
    reason: null;
    transaction: Awaited<ReturnType<typeof assembleAgentTransactionEnvelope>>;
} | {
    status: "failed";
    reasonCode: string;
    reason: string;
    transaction: null;
};
export type A2ANegotiationSupportPacket = {
    packetKind: "a2a_negotiation_support_packet";
    actionContractId: string;
    actionContractDigest: string;
    paramsDigest: string;
    actionClass: string;
    resourceRef: string;
    agreement: {
        linkedAgreementId: string;
        agreementDigest: string;
        agreementStatus: AgreementStatusTransition["fromStatus"] | AgreementStatusTransition["toStatus"];
        obligationRef: string | null;
        counterpartyRef: string;
        evidencePosture: "local_evidence_only";
    } | null;
    obligationBinding: {
        agreementObligationBindingId: string;
        obligationRef: string;
        actionContractDigest: string;
        paramsDigest: string;
        counterpartyRef: string;
    } | null;
    negotiation: {
        negotiationSessionId: string;
        acceptedOfferVersionId: string;
        acceptedNegotiationDecisionId: string;
        acceptedOfferContentDigest: string;
        partyRefs: string[];
    } | null;
    lifecycle: {
        assemblyStatus: TransactionEnvelopeResult["status"];
        assemblyReasonCode: string | null;
        assemblyReason: string | null;
        policyDecisionId: string | null;
        policyDecision: string | null;
        greenlightId: string | null;
        gatewayCheckAttemptId: string | null;
        mutationAttemptId: string | null;
        receiptId: string | null;
        downstreamFinalityStatus: string | null;
        proofGapIds: string[];
        refusalIds: string[];
    };
    authorityBoundary: {
        agreementAcceptanceCreatedAuthority: false;
        obligationBindingCreatedAuthority: false;
        policyMayCreateOneUseGreenlight: boolean;
        gatewayCheckRemainsFinalEnforcementPoint: true;
        downstreamSuccessClaimedByAgreement: false;
    };
    redaction: {
        rawTranscriptIncluded: false;
        rawOfferTermsIncluded: false;
        paymentPayloadIncluded: false;
        paymentSignatureIncluded: false;
        credentialMaterialIncluded: false;
    };
};
export declare function buildA2ANegotiationSupportPacket(store: ProtocolStore, actionContractId: string): Promise<A2ANegotiationSupportPacket>;
export {};
