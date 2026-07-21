import { type CredentialDispatchHost } from "../credential-dispatch-root";
import type { SourceBoundConsequenceInvocationCustody, SourceBoundConsequenceObservation, SourceBoundConsequenceSurface, SourceBoundExactConsequence } from "./types";
export declare function prepareSourceBoundConsequenceCustody(input: Readonly<{
    credentialHost: CredentialDispatchHost;
    preparation: unknown;
    surface: SourceBoundConsequenceSurface;
    exactConsequence: SourceBoundExactConsequence;
}>): Readonly<{
    observation: SourceBoundConsequenceObservation;
    invocationCustody: SourceBoundConsequenceInvocationCustody;
}>;
