/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type assetInputType = {
    readonly tokenId: string;
    readonly assetContract: {
        readonly address: string;
        readonly chain: ChainIdentifier;
    };
    readonly " $refType": "assetInputType";
};
export type assetInputType$data = assetInputType;
export type assetInputType$key = {
    readonly " $data"?: assetInputType$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"assetInputType">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "assetInputType"
};
(node as any).hash = 'd8de97482e84f690b27e10a2bc9c9adb';
export default node;
