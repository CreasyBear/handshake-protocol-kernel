import type { ProtocolRecorder } from "../../events/records";
import type { ProtocolStore } from "../../store/port";
import { type InstallSetupResult } from "./types";
export declare function registerInstallProposalCompiledRecords(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: unknown): Promise<InstallSetupResult>;
