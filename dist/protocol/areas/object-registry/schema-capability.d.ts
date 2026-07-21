import { type ProtocolObjectSchemaRegistration, type ProtocolObjectType } from "./index";
export type ProtocolObjectSchemaCapability = Readonly<{
    status: "supported";
    objectType: ProtocolObjectType;
    schemaVersion: string;
    registration: ProtocolObjectSchemaRegistration;
}> | Readonly<{
    status: "unsupported_object_type";
    objectType: string;
    schemaVersion: string;
}> | Readonly<{
    status: "unsupported_schema_version";
    objectType: ProtocolObjectType;
    schemaVersion: string;
    supportedSchemaVersions: readonly [string, ...string[]];
}> | Readonly<{
    status: "malformed";
}>;
/**
 * Capability negotiation is intentionally shallower than payload validation.
 * Unknown object kinds and future schema versions are non-authority: an older
 * worker leaves them pending instead of converting version skew into a durable
 * fault. Supported versions still pass through the exact schema parser.
 */
export declare function classifyProtocolObjectSchemaCapability(objectType: unknown, schemaVersion: unknown): ProtocolObjectSchemaCapability;
export declare function protocolObjectSchemaRegistrationForVersion(registrations: readonly [ProtocolObjectSchemaRegistration, ...ProtocolObjectSchemaRegistration[]], schemaVersion: string): ProtocolObjectSchemaRegistration | null;
