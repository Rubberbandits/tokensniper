/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type trader_transaction = {
    readonly chainIdentifier: ChainIdentifier;
    readonly source: {
        readonly value: string;
    } | null;
    readonly destination: {
        readonly value: string;
    } | null;
    readonly value: string | null;
    readonly data: string | null;
    readonly " $refType": "trader_transaction";
};
export type trader_transaction$data = trader_transaction;
export type trader_transaction$key = {
    readonly " $data"?: trader_transaction$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"trader_transaction">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "trader_transaction"
};
(node as any).hash = '74a6670d72bd09debac322dae217e50e';
export default node;
