import { type CreateReceiptExportInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import { type ReceiptExport } from "./types";
export declare function createReceiptExport(recorder: ProtocolRecorder, inputValue: CreateReceiptExportInput): Promise<ReceiptExport>;
