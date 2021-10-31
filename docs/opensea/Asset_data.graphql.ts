/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Asset_data = {
    readonly asset: {
        readonly relayId: string;
        readonly isDelisted: boolean;
        readonly orderData: {
            readonly bestAsk: {
                readonly paymentAssetQuantity: {
                    readonly quantityInEth: string;
                } | null;
            } | null;
        };
        readonly " $fragmentRefs": FragmentRefs<"AssetCardContent_asset" | "AssetCardFooter_asset" | "AssetMedia_asset" | "asset_url" | "itemEvents_data">;
    } | null;
    readonly assetBundle: {
        readonly relayId: string;
        readonly orderData: {
            readonly bestAsk: {
                readonly paymentAssetQuantity: {
                    readonly quantityInEth: string;
                } | null;
            } | null;
        };
        readonly " $fragmentRefs": FragmentRefs<"bundle_url" | "AssetCardContent_assetBundle" | "AssetCardFooter_assetBundle">;
    } | null;
    readonly " $refType": "Asset_data";
};
export type Asset_data$data = Asset_data;
export type Asset_data$key = {
    readonly " $data"?: Asset_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Asset_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v1 = {
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
          "concreteType": "AssetQuantityType",
          "kind": "LinkedField",
          "name": "paymentAssetQuantity",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "quantityInEth",
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
v2 = [
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
    "kind": "ScalarField",
    "name": "tokenId",
    "storageKey": null
  }
];
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
  "name": "Asset_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetType",
      "kind": "LinkedField",
      "name": "asset",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDelisted",
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetCardContent_asset"
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
          "name": "AssetCardFooter_asset"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetMedia_asset"
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "asset_url",
          "selections": (v2/*: any*/)
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "itemEvents_data",
          "selections": (v2/*: any*/)
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetBundleType",
      "kind": "LinkedField",
      "name": "assetBundle",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "InlineDataFragmentSpread",
          "name": "bundle_url",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ]
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetCardContent_assetBundle"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetCardFooter_assetBundle"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchResultType",
  "abstractKey": null
};
})();
(node as any).hash = 'a7648b5dc64108a61417726b06248e3d';
export default node;
