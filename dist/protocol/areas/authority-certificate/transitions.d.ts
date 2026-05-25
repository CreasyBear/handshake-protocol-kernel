import type { ProtocolRecorder } from "../../events/records";
import type { ProtocolStore } from "../../store/port";
import { type AuthorityCertificate, type CreateAuthorityCertificateInput } from "./types";
export declare function createAuthorityCertificate(store: ProtocolStore, recorder: ProtocolRecorder, inputValue: CreateAuthorityCertificateInput): Promise<AuthorityCertificate>;
