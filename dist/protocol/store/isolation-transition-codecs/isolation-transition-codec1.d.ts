import type { CurrentIsolationTransitionAuthoritySourceMutation, HistoricalIsolationTransitionCodec1AuthoritySourceMutation } from "../authority-source";
type IsolationTransitionAuthoritySourceMutation = HistoricalIsolationTransitionCodec1AuthoritySourceMutation | CurrentIsolationTransitionAuthoritySourceMutation;
export declare function validateIsolationTransitionCodec1Envelope(mutation: HistoricalIsolationTransitionCodec1AuthoritySourceMutation): Promise<void>;
export declare function validateIsolationTransitionEnvelope(mutation: IsolationTransitionAuthoritySourceMutation, profile: Readonly<{
    additionRequestVersion: "isolation-transition-request-2" | "isolation-transition-request-3";
    clearanceRequestVersion: "isolation-clearance-request-1" | "isolation-clearance-request-2";
    includeTemporalFence: boolean;
    codecName: "codec-1" | "codec-2";
}>): Promise<void>;
export {};
