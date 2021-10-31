/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type Price_data = {
    readonly decimals: number | null;
    readonly imageUrl: string | null;
    readonly symbol: string | null;
    readonly usdSpotPrice: number | null;
    readonly assetContract: {
        readonly blockExplorerLink: string;
        readonly chain: ChainIdentifier;
    };
    readonly " $refType": "Price_data";
};
export type Price_data$data = Price_data;
export type Price_data$key = {
    readonly " $data"?: Price_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Price_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Price_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "decimals",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "symbol",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "usdSpotPrice",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetContractType",
      "kind": "LinkedField",
      "name": "assetContract",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "blockExplorerLink",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "chain",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
(node as any).hash = '7bf5ece971f44afdb3e5e163122f5bb3';
export default node;
