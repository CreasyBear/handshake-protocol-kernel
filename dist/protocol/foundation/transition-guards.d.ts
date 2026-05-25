export type TransitionGuardResult = {
    ok: true;
} | {
    ok: false;
    code: string;
    message: string;
    status: number;
};
export declare function ok(): TransitionGuardResult;
export declare function fail(code: string, message: string): TransitionGuardResult;
