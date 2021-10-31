/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type PriceTag_paymentAsset = {
    readonly assetContract: {
        readonly chain: ChainIdentifier;
    };
    readonly symbol: string | null;
    readonly imageUrl: string | null;
    readonly " $refType": "PriceTag_paymentAsset";
};
export type PriceTag_paymentAsset$data = PriceTag_paymentAsset;
export type PriceTag_paymentAsset$key = {
    readonly " $data"?: PriceTag_paymentAsset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PriceTag_paymentAsset">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PriceTag_paymentAsset",
  "selections": [
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
          "name": "chain",
          "storageKey": null
        }
      ],
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
      "name": "imageUrl",
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
(node as any).hash = '03aedbb40b14597054c9490854823d34';
export default node;
