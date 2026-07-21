import type { CurrentGatewayAuthoritySourceMutation, HistoricalGatewayCodec1AuthoritySourceMutation } from "../authority-source";
export declare function validateGatewayAdmissionEnvelope(mutation: HistoricalGatewayCodec1AuthoritySourceMutation | CurrentGatewayAuthoritySourceMutation, codecVersion: 1 | 2): Promise<void>;
