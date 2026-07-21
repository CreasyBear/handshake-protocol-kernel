import type { AuthoritySourceRecord, AuthoritySourceScope } from "../store/authority-source";
import { type AuthorityContextSourcePayload } from "./binding";
import type { AuthorityContextCapability } from "./capability";
export type ResolvedAuthorityContext = Readonly<{
    sourceScope: AuthoritySourceScope;
    record: AuthoritySourceRecord;
    binding: AuthorityContextSourcePayload;
}>;
export declare function resolveCurrentAuthorityContext(capability: AuthorityContextCapability, now: string): Promise<ResolvedAuthorityContext>;
