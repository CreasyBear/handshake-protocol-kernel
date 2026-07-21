import type { StoredProtocolRecord } from "./port";
export declare function isExactStoredProtocolRecordEnvelope(value: unknown): value is StoredProtocolRecord;
export declare function snapshotExactStoredProtocolRecordEnvelope(value: unknown): StoredProtocolRecord | null;
export declare function sameStoredProtocolRecordEnvelope(left: StoredProtocolRecord, right: StoredProtocolRecord): boolean;
