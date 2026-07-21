import { type ProjectionOutboxSourceCommit, type ProtocolRecordProjectionDeliveryPolicy, type ProtocolRecordProjectionRoute } from "../../events/outbox";
import type { EventDescriptor } from "../../events/chains";
import type { AuthorityProjectionIntent, AuthoritySourceScope } from "../../store/authority-source";
import type { IsolationStateIndexEntry, StoredProtocolRecord } from "../../store/port";
import type { ProtocolRecord } from "../object-registry";
import type { IsolationState } from "./types";
export type IsolationProjectionProfile = Readonly<{
    deliveryPolicy: ProtocolRecordProjectionDeliveryPolicy;
    route: ProtocolRecordProjectionRoute;
}>;
export declare function isolationProjectionProfile(): Promise<IsolationProjectionProfile>;
export declare function buildIsolationProjectionIntents(input: {
    scope: AuthoritySourceScope;
    sourceCommit: ProjectionOutboxSourceCommit;
    source: AuthorityProjectionIntent["source"];
    state: IsolationState;
}): Promise<AuthorityProjectionIntent[]>;
export declare function isolationStateProtocolRecords(state: IsolationState): ProtocolRecord[];
export declare function isolationStateStoredRecord(state: IsolationState): Promise<StoredProtocolRecord>;
export declare function isolationStateEventDescriptors(state: IsolationState): EventDescriptor[];
export declare function isolationStateProjectionIndexEntry(state: IsolationState): IsolationStateIndexEntry;
