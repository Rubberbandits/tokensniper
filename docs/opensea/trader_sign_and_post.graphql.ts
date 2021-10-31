/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientSignatureStandard = "PERSONAL" | "TYPED_DATA_V1" | "TYPED_DATA_V3" | "TYPED_DATA_V4" | "%future added value";
export type trader_sign_and_post = {
    readonly signAndPost: {
        readonly orderData: string | null;
        readonly serverSignature: string | null;
        readonly clientMessage: string;
        readonly clientSignatureStandard: ClientSignatureStandard;
        readonly orderId: string | null;
    } | null;
    readonly " $refType": "trader_sign_and_post";
};
export type trader_sign_and_post$data = trader_sign_and_post;
export type trader_sign_and_post$key = {
    readonly " $data"?: trader_sign_and_post$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"trader_sign_and_post">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "trader_sign_and_post"
};
(node as any).hash = '386f4067ec5e1eead3c27e8f78cc4cad';
export default node;
