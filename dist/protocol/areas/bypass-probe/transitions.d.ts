import type { ProtocolRecorder } from "../../events/records";
import { type BypassProbe, type CreateBypassProbeInput } from "./types";
export declare function createBypassProbe(recorder: ProtocolRecorder, inputValue: CreateBypassProbeInput): Promise<BypassProbe>;
