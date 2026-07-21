import type { JsonValue } from "../../../protocol/foundation/schema-core";
import type { SourceBoundConsequenceInvocationCustody, SourceBoundConsequenceSurface } from "./types";
import { type AppliedConsequenceCutoffCapability } from "../../../protocol/areas/consequence-custody/consequence-cutoff-source/applied-cutoff-capability";
type InvocationState = Readonly<{
    surface: SourceBoundConsequenceSurface;
    effectMethod: SourceBoundConsequenceSurface["invokeConsequence"];
    exactConsequenceDescriptorDigest: `sha256:${string}`;
    payloadDigest: `sha256:${string}`;
}>;
export declare function registerSourceBoundConsequenceInvocationCustody(custody: SourceBoundConsequenceInvocationCustody, state: InvocationState): void;
export declare function claimSourceBoundConsequenceInvocation(custody: unknown, cutoffCapability: AppliedConsequenceCutoffCapability, effectOperationRef: string): Readonly<{
    invoke(payload: JsonValue): Promise<JsonValue>;
}> | null;
export {};
