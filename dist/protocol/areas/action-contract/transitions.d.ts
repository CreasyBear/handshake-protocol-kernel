import { type ProposeActionContractInput } from "./types";
import type { ProtocolRecorder } from "../../events/records";
import type { ActionContract } from "./types";
import type { ProtocolStore } from "../../store/port";
export declare function proposeActionContract(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: ProposeActionContractInput): Promise<ActionContract>;
