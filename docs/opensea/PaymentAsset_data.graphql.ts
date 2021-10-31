/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type PaymentAsset_data = {
    readonly asset: {
        readonly assetContract: {
            readonly chain: ChainIdentifier;
        };
        readonly imageUrl: string | null;
        readonly symbol: string | null;
    };
    readonly " $refType": "PaymentAsset_data";
};
export type PaymentAsset_data$data = PaymentAsset_data;
export type PaymentAsset_data$key = {
    readonly " $data"?: PaymentAsset_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PaymentAsset_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PaymentAsset_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetType",
      "kind": "LinkedField",
      "name": "asset",
      "plural": false,
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
          "name": "imageUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "symbol",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PaymentAssetType",
  "abstractKey": null
};
(node as any).hash = '9693ea45cbc1276e29837dbd5d9d8a1e';
export default node;
