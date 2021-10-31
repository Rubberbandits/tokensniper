/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type itemEvents_data = {
    readonly assetContract: {
        readonly address: string;
        readonly chain: ChainIdentifier;
    };
    readonly tokenId: string;
    readonly " $refType": "itemEvents_data";
};
export type itemEvents_data$data = itemEvents_data;
export type itemEvents_data$key = {
    readonly " $data"?: itemEvents_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"itemEvents_data">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "itemEvents_data"
};
(node as any).hash = 'c7656aaac218a7a0990df65ed53b1efa';
export default node;
