import type { JsonValue } from "../../../foundation/schema-core";
import type { StoredProtocolRecord } from "../../../store/port";
import { type ActionContract } from "../types";
export declare function parseCanonicalStoredActionContract(value: unknown, expectedActionContractId: string): Promise<Readonly<{
    record: StoredProtocolRecord<ActionContract>;
    contract: ActionContract;
}>>;
export declare function actionContractBinding(contract: ActionContract): JsonValue;
