/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientSignatureStandard = "PERSONAL" | "TYPED_DATA_V1" | "TYPED_DATA_V3" | "TYPED_DATA_V4" | "%future added value";
export type trader_meta_transaction = {
    readonly metaTransaction: {
        readonly clientMessage: string;
        readonly clientSignatureStandard: ClientSignatureStandard;
        readonly functionSignature: string;
        readonly verifyingContract: string;
    } | null;
    readonly " $refType": "trader_meta_transaction";
};
export type trader_meta_transaction$data = trader_meta_transaction;
export type trader_meta_transaction$key = {
    readonly " $data"?: trader_meta_transaction$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"trader_meta_transaction">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "trader_meta_transaction"
};
(node as any).hash = 'f3d671073e4a558c2367d25b072d9bc8';
export default node;
