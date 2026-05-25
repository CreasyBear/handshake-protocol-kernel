import { type InitLocalProjectInput } from "./index";
export declare function initCommand(input: InitLocalProjectInput): Promise<import("..").CliOutputEnvelope<import("./index").InitLocalProjectResult>>;
export declare function doctorCommand(input: {
    cwd: string;
}): Promise<import("..").CliOutputEnvelope<import("./index").DoctorResult>>;
