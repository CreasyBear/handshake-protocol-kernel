import type { FailureClass } from "../protocol/foundation/failure-class";
import { type ProtectedActionRecoveryGuidance } from "../surfaces/protected-action-recovery-guidance";
export type HandshakeErrorExplanation = {
    code: string;
    failureClass: FailureClass;
    failurePhase: string | null;
    status: number;
    requiresNewContract: boolean;
    nextAction: "refresh_credentials" | "recraft_contract" | "read_evidence" | "stop";
    summary: string;
};
export declare function explainHandshakeError(error: unknown): HandshakeErrorExplanation | null;
export declare function nextHandshakeCommand(error: unknown): string | null;
export declare function recoveryGuidanceFromHandshakeError(error: unknown): ProtectedActionRecoveryGuidance | null;
