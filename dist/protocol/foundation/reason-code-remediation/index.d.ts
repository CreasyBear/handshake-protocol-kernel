export type ReasonCodeRemediationEntry = {
    code: string;
    docsUrl: string;
    requiresNewContract?: boolean;
};
export declare function reasonCodeRemediationForCode(code: string): ReasonCodeRemediationEntry | null;
export declare function problemTypeUriForCode(code: string): string | null;
