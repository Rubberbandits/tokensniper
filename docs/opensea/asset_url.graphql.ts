/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type asset_url = {
    readonly assetContract: {
        readonly address: string;
        readonly chain: ChainIdentifier;
    };
    readonly tokenId: string;
    readonly " $refType": "asset_url";
};
export type asset_url$data = asset_url;
export type asset_url$key = {
    readonly " $data"?: asset_url$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"asset_url">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "asset_url"
};
(node as any).hash = '8c738f855cc622b4ee186500973a6ec2';
export default node;
