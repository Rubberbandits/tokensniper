/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type OrderType = "BASIC" | "DUTCH" | "ENGLISH" | "%future added value";
export type AssetCardAnnotations_asset = {
    readonly assetContract: {
        readonly chain: ChainIdentifier;
    };
    readonly decimals: number | null;
    readonly ownedQuantity?: string | null | undefined;
    readonly relayId: string;
    readonly favoritesCount: number;
    readonly isDelisted: boolean;
    readonly isFavorite: boolean;
    readonly isFrozen: boolean;
    readonly hasUnlockableContent: boolean;
    readonly orderData: {
        readonly bestAsk: {
            readonly orderType: OrderType;
            readonly relayId: string;
            readonly maker: {
                readonly address: string | null;
            } | null;
        } | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"AssetCardBuyNow_data" | "AssetContextMenu_data">;
    readonly " $refType": "AssetCardAnnotations_asset";
};
export type AssetCardAnnotations_asset$data = AssetCardAnnotations_asset;
export type AssetCardAnnotations_asset$key = {
    readonly " $data"?: AssetCardAnnotations_asset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetCardAnnotations_asset">;
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
  "argumentDefinitions": [
    {
      "defaultValue": {},
      "kind": "LocalArgument",
      "name": "identity"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "shouldShowQuantity"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "showContextMenu"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetCardAnnotations_asset",
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
      "name": "decimals",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "favoritesCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDelisted",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFavorite",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFrozen",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasUnlockableContent",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "orderType",
              "storageKey": null
            },
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ESAccountType",
              "kind": "LinkedField",
              "name": "maker",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "address",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "condition": "shouldShowQuantity",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Variable",
              "name": "identity",
              "variableName": "identity"
            }
          ],
          "kind": "ScalarField",
          "name": "ownedQuantity",
          "storageKey": null
        }
      ]
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AssetCardBuyNow_data"
    },
    {
      "condition": "showContextMenu",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "args": [
            {
              "kind": "Literal",
              "name": "identity",
              "value": {}
            }
          ],
          "kind": "FragmentSpread",
          "name": "AssetContextMenu_data"
        }
      ]
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
})();
(node as any).hash = '5a3d09ee27d5ea1ce13411c7987deac0';
export default node;
