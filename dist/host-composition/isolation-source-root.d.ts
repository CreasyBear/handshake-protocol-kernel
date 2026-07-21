import { type IsolationTransitionSource } from "../protocol/areas/isolation-breaker/source-capability";
import type { ProtocolStore } from "../protocol/store/port";
export declare function bindIsolationSourceCarrier(carrier: ProtocolStore, source: IsolationTransitionSource): void;
