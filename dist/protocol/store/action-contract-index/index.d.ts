import type { StoredProtocolRecord } from "../port";
export declare function actionContractIdsForRecord(record: StoredProtocolRecord): string[];
export declare function recordMatchesActionContract(record: StoredProtocolRecord, actionContractId: string): boolean;
