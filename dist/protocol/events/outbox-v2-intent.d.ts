import type { JsonValue } from "../foundation/schema-core";
import { type AuthorityCommitIdentity, type AuthorityDigest, type AuthorityProjectionIntent, type AuthoritySourceScope } from "../store/authority-source";
import type { StoredProtocolRecord } from "../store/port";
export declare const EXACT_PROTOCOL_RECORD_PROJECTION_DESCRIPTOR_VERSION_V2: "authority-projection-outbox-protocol-record-descriptor-2";
export declare const EXACT_PROTOCOL_RECORD_PROJECTION_ROUTE_VERSION_V2: "authority-projection-outbox-protocol-record-route-2";
export declare const EXACT_PROTOCOL_RECORD_PROJECTION_DESCRIPTOR_MAX_BYTES_V2 = 65536;
export type ExactProtocolRecordProjectionSourceCommitV2 = Readonly<{
    identity: AuthorityCommitIdentity;
    requestDigest: AuthorityDigest;
}>;
export type ExactProtocolRecordProjectionRouteV2 = Readonly<{
    routeVersion: typeof EXACT_PROTOCOL_RECORD_PROJECTION_ROUTE_VERSION_V2;
    authoritySourceNamespace: string;
    destinationNamespace: string;
    configurationDigest: AuthorityDigest;
}>;
export type ExactProtocolRecordProjectionDescriptorV2 = Readonly<{
    descriptorVersion: typeof EXACT_PROTOCOL_RECORD_PROJECTION_DESCRIPTOR_VERSION_V2;
    sourceCommit: ExactProtocolRecordProjectionSourceCommitV2;
    source: AuthorityProjectionIntent["source"];
    route: ExactProtocolRecordProjectionRouteV2;
    destination: Readonly<{
        objectType: "refusal";
        objectId: string;
        tenantId: string;
        organizationId: string;
        schemaVersion: string;
        canonicalPayloadDigest: AuthorityDigest;
    }>;
    recordEnvelopeDigest: AuthorityDigest;
    record: StoredProtocolRecord<JsonValue> & Readonly<{
        objectType: "refusal";
    }>;
}>;
/**
 * Pure authority-intent construction. This module owns no outbox reader,
 * destination writer, delivery state, certificate consumer, or readback consumer.
 */
export declare function buildExactProtocolRecordProjectionIntentV2(input: {
    scope: AuthoritySourceScope;
    sourceCommit: ExactProtocolRecordProjectionSourceCommitV2;
    source: AuthorityProjectionIntent["source"];
    route: ExactProtocolRecordProjectionRouteV2;
    record: StoredProtocolRecord;
}): Promise<AuthorityProjectionIntent>;
