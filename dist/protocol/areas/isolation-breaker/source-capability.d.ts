import type { ProtocolStore } from "../../store/port";
import { type IsolationTransitionStore } from "./source-mutation-capability";
export { registerIsolationSourceRoot } from "./source-read-capability";
export type { IsolationAuthorityReader } from "./source-read-capability";
export { commitIsolationCauseAddition, commitIsolationCauseClearance, observeIsolationTransitionSource, prepareIsolationCauseAdditionCommit, prepareIsolationCauseClearanceCommit, registerIsolationClearanceRoot, type IsolationCauseAdditionCommit, type IsolationCauseClearanceCommit, type IsolationProjectionCommand, type IsolationProjectionReconciler, type IsolationTransitionSource, type IsolationTransitionStore, } from "./source-mutation-capability";
export declare function bindIsolationTransitionSource(root: object, carrier: ProtocolStore, source: IsolationTransitionStore): void;
