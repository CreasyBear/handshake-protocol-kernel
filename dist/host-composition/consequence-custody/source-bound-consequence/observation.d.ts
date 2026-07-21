import type { SourceBoundConsequenceBinding, SourceBoundConsequenceObservation, SourceBoundConsequenceSurface, SourceBoundExactConsequence } from "./types";
type ObservationState = Readonly<{
    surface: SourceBoundConsequenceSurface;
    effectMethod: SourceBoundConsequenceSurface["invokeConsequence"];
    binding: SourceBoundConsequenceBinding;
    exactConsequence: SourceBoundExactConsequence;
}>;
export declare function registerSourceBoundConsequenceObservation(observation: SourceBoundConsequenceObservation, state: ObservationState): void;
export declare function readSourceBoundConsequenceObservation(observation: unknown): Readonly<{
    binding: SourceBoundConsequenceBinding;
    exactConsequence: SourceBoundExactConsequence;
    effectMethodUnchanged: boolean;
}> | null;
export {};
