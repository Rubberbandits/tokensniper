/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type AssetCardBuyNow_data = {
    readonly tokenId: string;
    readonly relayId: string;
    readonly assetContract: {
        readonly address: string;
        readonly chain: ChainIdentifier;
    };
    readonly collection: {
        readonly slug: string;
    };
    readonly orderData: {
        readonly bestAsk: {
            readonly relayId: string;
        } | null;
    };
    readonly " $refType": "AssetCardBuyNow_data";
};
export type AssetCardBuyNow_data$data = AssetCardBuyNow_data;
export type AssetCardBuyNow_data$key = {
    readonly " $data"?: AssetCardBuyNow_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetCardBuyNow_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetCardBuyNow_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tokenId",
      "storageKey": null
    },
    (v0/*: any*/),
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
          "name": "address",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionType",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ESOrderDataType",
      "kind": "LinkedField",
      "name": "orderData",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ESOrderType",
          "kind": "LinkedField",
          "name": "bestAsk",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
})();
(node as any).hash = 'd7c18ab430143df520c84b446811d70a';
export default node;
