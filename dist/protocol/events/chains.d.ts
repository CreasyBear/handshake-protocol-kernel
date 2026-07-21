import type { ActionContract } from "../areas/action-contract";
import { type ContractStreamEvent } from "./schemas";
import type { ReceiptStreamReference } from "../areas/receipt-export";
import { type JsonValue } from "../foundation/schema-core";
import type { ProtocolStore } from "../store/port";
/** Persisted identifier grammar. Any uprev requires an explicit dual-read migration. */
export declare const EVENT_IDENTITY_VERSION = "handshake-event-identity-1";
export type ActionLifecycleStreamRefs = {
    actionContractId: string;
    runId: string;
    gatewayId: string;
    resourceRef: string;
};
export type EventDescriptor = {
    source: {
        tenantId: string;
        organizationId: string;
        createdAt: string;
    };
    eventType: ContractStreamEvent["eventType"];
    objectRefs: string[];
    payload: Record<string, JsonValue>;
    streamRefs?: ActionLifecycleStreamRefs;
};
export type EventStreamBinding = {
    streamId: string;
    streamScope: ContractStreamEvent["streamScope"];
    partitionKey: string;
};
export type EventStreamPosition = {
    offset: number;
    previousEventDigest: string | null;
};
export type EventMaterializationIdentity = {
    streamEventId: string;
    eventTime: string;
};
export declare function buildEventChain(store: ProtocolStore, descriptors: EventDescriptor[]): Promise<ContractStreamEvent[]>;
export declare function actionLifecycleStreamRefs(contract: Pick<ActionContract, "actionContractId" | "runId" | "gatewayId" | "resourceRef">): ActionLifecycleStreamRefs;
export declare function actionLifecycleStreamKey(source: {
    tenantId: string;
    organizationId: string;
}, actionContractId: string): {
    streamId: string;
    partitionKey: string;
};
export declare function organizationEventStreamId(source: {
    tenantId: string;
    organizationId: string;
}): string;
export declare function actionEventPartitionKey(actionContractId: string): string;
export declare function executionRunEventPartitionKey(runId: string): string;
export declare function protectedSurfaceResourceEventPartitionKey(gatewayId: string, resourceRef: string): string;
export declare function isolationEventPartitionKey(scopeRef: string, scopeId?: string): string;
export declare function intentEventPartitionKey(intentCompilationId: string): string;
export declare function objectEventPartitionKey(objectRef: string): string;
export declare function eventStreamBindingIdentity(binding: Pick<EventStreamBinding, "streamId" | "partitionKey">): string;
export declare function receiptStreamReferencesForEvents(events: ContractStreamEvent[]): ReceiptStreamReference[];
export declare function eventDescriptorStreamBindings(descriptor: EventDescriptor): EventStreamBinding[];
export declare function materializeEventAtStreamBinding(descriptor: EventDescriptor, binding: EventStreamBinding, position: EventStreamPosition, identity?: EventMaterializationIdentity): Promise<ContractStreamEvent>;
