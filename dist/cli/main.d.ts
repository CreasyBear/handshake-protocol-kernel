type CliCommandErrorCode = "cli_command_unsupported" | "cli_required_argument_missing" | "cli_input_file_unreadable" | "cli_input_json_invalid" | "cli_input_schema_invalid" | "cli_command_failed";
export declare function runCliCommand(argv: readonly string[]): Promise<unknown>;
export declare function cliCommandErrorOutput(input: {
    argv: readonly string[];
    errorCode: CliCommandErrorCode;
    message: string;
    nextAction: "run_schema" | "fix_arguments" | "fix_input_json" | "fix_input_schema";
}): import("./output").CliOutputEnvelope<{
    errorCode: CliCommandErrorCode;
    message: string;
    activeCommands: ("schema" | "evidence aps-report" | "cert verify" | "init" | "doctor" | "evidence fetch" | "evidence contract-view" | "evidence receipt-timeline" | "support bundle" | "install x402-payment" | "probes x402-payment" | "register x402-gateway-readiness" | "install health" | "host doctor" | "quickstart x402" | "quickstart agent-spine" | "simulate x402-payment" | "conformance x402-payment" | "service bootstrap")[];
    nextAction: "run_schema" | "fix_arguments" | "fix_input_json" | "fix_input_schema";
}>;
export {};
