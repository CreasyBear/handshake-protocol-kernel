import { type X402PaymentSignatureCommand, type X402PaymentSignatureEvidence } from "../../../adapters/x402-payment/wallet-gateway";
import { type AppliedConsequenceCutoffCapability } from "../../../protocol/areas/consequence-custody/consequence-cutoff-source/applied-cutoff-capability";
export declare function invokeX402AfterAppliedCutoff(custody: unknown, cutoffCapability: AppliedConsequenceCutoffCapability, command: X402PaymentSignatureCommand): Promise<X402PaymentSignatureEvidence | null>;
