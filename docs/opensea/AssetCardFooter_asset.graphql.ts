/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type OrderType = "BASIC" | "DUTCH" | "ENGLISH" | "%future added value";
export type AssetCardFooter_asset = {
    readonly name: string | null;
    readonly tokenId: string;
    readonly collection: {
        readonly name: string;
        readonly isVerified: boolean;
        readonly " $fragmentRefs": FragmentRefs<"collection_url">;
    };
    readonly isDelisted: boolean;
    readonly assetContract: {
        readonly address: string;
        readonly chain: ChainIdentifier;
        readonly openseaVersion: string | null;
    };
    readonly assetEventData: {
        readonly lastSale: {
            readonly unitPriceQuantity: {
                readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
            } | null;
        } | null;
    };
    readonly orderData: {
        readonly bestBid: {
            readonly orderType: OrderType;
            readonly paymentAssetQuantity: {
                readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
            } | null;
        } | null;
        readonly bestAsk: {
            readonly closedAt: string | null;
            readonly orderType: OrderType;
            readonly dutchAuctionFinalPrice: string | null;
            readonly openedAt: string;
            readonly priceFnEndedAt: string | null;
            readonly quantity: string | null;
            readonly decimals: string | null;
            readonly paymentAssetQuantity: {
                readonly quantity: string;
                readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
            } | null;
        } | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"AssetCardAnnotations_asset">;
    readonly " $refType": "AssetCardFooter_asset";
};
export type AssetCardFooter_asset$data = AssetCardFooter_asset;
export type AssetCardFooter_asset$key = {
    readonly " $data"?: AssetCardFooter_asset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetCardFooter_asset">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "AssetQuantity_data"
},
v2 = [
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
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
  "name": "AssetCardFooter_asset",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tokenId",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isVerified",
          "storageKey": null
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "collection_url",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ]
        }
      ],
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "openseaVersion",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ESAssetEventDataType",
      "kind": "LinkedField",
      "name": "assetEventData",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ESAssetEventType",
          "kind": "LinkedField",
          "name": "lastSale",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetQuantityType",
              "kind": "LinkedField",
              "name": "unitPriceQuantity",
              "plural": false,
              "selections": (v2/*: any*/),
              "storageKey": null
            }
          ],
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
          "name": "bestBid",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetQuantityType",
              "kind": "LinkedField",
              "name": "paymentAssetQuantity",
              "plural": false,
              "selections": (v2/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
              "name": "closedAt",
              "storageKey": null
            },
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "dutchAuctionFinalPrice",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "openedAt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "priceFnEndedAt",
              "storageKey": null
            },
            (v4/*: any*/),
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
              "concreteType": "AssetQuantityType",
              "kind": "LinkedField",
              "name": "paymentAssetQuantity",
              "plural": false,
              "selections": [
                (v4/*: any*/),
                (v1/*: any*/)
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
      "args": [
        {
          "kind": "Variable",
          "name": "identity",
          "variableName": "identity"
        },
        {
          "kind": "Variable",
          "name": "shouldShowQuantity",
          "variableName": "shouldShowQuantity"
        },
        {
          "kind": "Variable",
          "name": "showContextMenu",
          "variableName": "showContextMenu"
        }
      ],
      "kind": "FragmentSpread",
      "name": "AssetCardAnnotations_asset"
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
})();
(node as any).hash = 'b537be86f4468d5af311ce3a1c0683f0';
export default node;
