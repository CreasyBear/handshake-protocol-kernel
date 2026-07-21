import { type ProjectionEventStore, type ProtocolRecordProjectionStore } from "../protocol/events/outbox";
import type { IsolationProjectionReconciler } from "../protocol/areas/isolation-breaker/source-capability";
import { type AuthorityProjectionOutboxStore } from "../protocol/store/authority-source";
type IsolationProjectionDestinationStore = ProjectionEventStore & ProtocolRecordProjectionStore;
export declare function createIsolationProjectionReconciler(input: {
    authorityStore: AuthorityProjectionOutboxStore;
    destinationStore: IsolationProjectionDestinationStore;
}): IsolationProjectionReconciler;
export {};
