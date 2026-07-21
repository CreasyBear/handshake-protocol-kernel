import type { X402WalletSigningSurface } from "../../../adapters/x402-payment/wallet-gateway";
import type { ExactConsequenceDescriptor } from "../../../protocol/areas/consequence-custody/exact-consequence-descriptor";
import { readCredentialDispatchHostPreparation, type CredentialDispatchHost } from "../credential-dispatch-root";
export type X402TrustedObservation = object;
export type X402InvocationCustody = object;
type ObservationState = Readonly<{
    surface: X402WalletSigningSurface;
    effectMethod: X402WalletSigningSurface["signPayment"];
    binding: NonNullable<ReturnType<typeof readCredentialDispatchHostPreparation>>;
    exactConsequence: Readonly<{
        descriptor: ExactConsequenceDescriptor;
        descriptorDigest: `sha256:${string}`;
    }> | null;
}>;
export declare function prepareX402TrustedObservation(input: Readonly<{
    credentialHost: CredentialDispatchHost;
    preparation: unknown;
    surface: X402WalletSigningSurface;
    exactConsequence?: ObservationState["exactConsequence"];
}>): X402TrustedObservation;
export declare function readX402InvocationCustody(observation: unknown): X402InvocationCustody | null;
export declare function readX402InvocationState(custody: unknown): ObservationState | null;
export declare function readX402TrustedObservation(observation: unknown): Readonly<{
    binding: ObservationState["binding"];
    effectMethodUnchanged: boolean;
    exactConsequence: ObservationState["exactConsequence"];
}> | null;
export {};
