import type { AuthMdProtectedApiCallSurface } from "../../../adapters/auth-md/gateway";
import { readCredentialDispatchHostPreparation, type CredentialDispatchHost } from "../credential-dispatch-root";
export type AuthMdTrustedObservation = object;
type ObservationState = Readonly<{
    surface: AuthMdProtectedApiCallSurface;
    effectMethod: AuthMdProtectedApiCallSurface["executeProtectedApiCall"];
    binding: NonNullable<ReturnType<typeof readCredentialDispatchHostPreparation>>;
}>;
export declare function prepareAuthMdTrustedObservation(input: Readonly<{
    credentialHost: CredentialDispatchHost;
    preparation: unknown;
    surface: AuthMdProtectedApiCallSurface;
}>): AuthMdTrustedObservation;
export declare function readAuthMdTrustedObservation(observation: unknown): Readonly<{
    binding: ObservationState["binding"];
    effectMethodUnchanged: boolean;
}> | null;
export {};
