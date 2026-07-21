import type { JsonValue } from "../foundation/schema-core";
import { type AuthorityDigest, type AuthorityRecordIdentity, type AuthoritySourceScope } from "./authority-record-read";
export declare const AUTHORITY_PROJECTION_KINDS: readonly ["protocol_record", "contract_stream_event"];
export type AuthorityProjectionKind = (typeof AUTHORITY_PROJECTION_KINDS)[number];
export type AuthorityProjectionIdentity = Readonly<{
    projectionKind: AuthorityProjectionKind;
    localId: string;
}>;
export type AuthorityProjectionIntent = Readonly<{
    projection: AuthorityProjectionIdentity;
    source: Readonly<{
        record: AuthorityRecordIdentity;
        digest: AuthorityDigest;
    }>;
    descriptor: JsonValue;
    descriptorDigest: AuthorityDigest;
}>;
export declare function authorityProjectionIdentity(projectionKind: AuthorityProjectionKind, localId: string): AuthorityProjectionIdentity;
export declare function authorityProjectionDescriptorDigest(input: {
    scope: AuthoritySourceScope;
    projection: AuthorityProjectionIdentity;
    source: AuthorityProjectionIntent["source"];
    descriptor: JsonValue;
}): Promise<AuthorityDigest>;
export declare function buildAuthorityProjectionIntent(input: {
    scope: AuthoritySourceScope;
    projection: AuthorityProjectionIdentity;
    source: AuthorityProjectionIntent["source"];
    descriptor: JsonValue;
}): Promise<AuthorityProjectionIntent>;
