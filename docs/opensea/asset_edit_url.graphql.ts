/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type asset_edit_url = {
    readonly assetContract: {
        readonly address: string;
        readonly chain: ChainIdentifier;
    };
    readonly tokenId: string;
    readonly collection: {
        readonly slug: string;
    };
    readonly " $refType": "asset_edit_url";
};
export type asset_edit_url$data = asset_edit_url;
export type asset_edit_url$key = {
    readonly " $data"?: asset_edit_url$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"asset_edit_url">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "asset_edit_url"
};
(node as any).hash = '11a9a52e8fdbfcdf0ea16a76c5b99cac';
export default node;
