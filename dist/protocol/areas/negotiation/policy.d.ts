import type { ActionContract } from "../action-contract";
import type { ProtocolStore } from "../../store/port";
import type { AgreementStatusTransition } from "./types";
export type AgreementObligationPolicyInput = {
    posture: "not_applicable" | "bound" | "proof_gap" | "refused";
    obligationRef: string | null;
    counterpartyRef: string | null;
    agreementObligationBindingId: string | null;
    linkedAgreementId: string | null;
    agreementStatus: AgreementStatusTransition["fromStatus"] | AgreementStatusTransition["toStatus"] | null;
    agreementExpiresAt: string | null;
    sessionExpiresAt: string | null;
    offerExpiresAt: string | null;
    actionContractDigest: string | null;
    paramsDigest: string | null;
};
export type AgreementObligationPolicyEvaluation = {
    ok: boolean;
    decision: "greenlight" | "refuse" | "proof_gap";
    reasonCode: string | null;
    reason: string | null;
    policyInput: AgreementObligationPolicyInput;
};
export declare function evaluateAgreementObligationPolicy(store: ProtocolStore, contract: ActionContract, now: string): Promise<AgreementObligationPolicyEvaluation>;
