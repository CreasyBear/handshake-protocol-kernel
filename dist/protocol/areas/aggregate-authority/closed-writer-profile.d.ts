import type { AuthorityMutationKind } from "../../store/authority-source";
import type { AuthorityManifestVersion } from "../../store/authority-source";
export type AggregateCheckpointRootKind = "genesis" | "audited_cutover" | "closed_writer_successor";
export declare function isClosedAggregateWriterForCheckpointRoot(mutationKind: AuthorityMutationKind, rootKind: AggregateCheckpointRootKind, manifestVersion: AuthorityManifestVersion): boolean;
