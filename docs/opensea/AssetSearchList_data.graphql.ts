/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type AssetSearchList_data = ReadonlyArray<{
    readonly asset: {
        readonly assetContract: {
            readonly address: string;
            readonly chain: ChainIdentifier;
        };
        readonly collection: {
            readonly isVerified: boolean;
            readonly relayId: string;
        };
        readonly relayId: string;
        readonly tokenId: string;
        readonly " $fragmentRefs": FragmentRefs<"AssetSelectionItem_data" | "asset_url">;
    } | null;
    readonly assetBundle: {
        readonly relayId: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"Asset_data">;
    readonly " $refType": "AssetSearchList_data";
}>;
export type AssetSearchList_data$data = AssetSearchList_data;
export type AssetSearchList_data$key = ReadonlyArray<{
    readonly " $data"?: AssetSearchList_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetSearchList_data">;
}>;



const node: ReaderFragment = (function(){
var v0 = {
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
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
  "metadata": {
    "plural": true
  },
  "name": "AssetSearchList_data",
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
          "concreteType": "CollectionType",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isVerified",
              "storageKey": null
            },
            (v1/*: any*/)
          ],
          "storageKey": null
        },
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetSelectionItem_data"
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "asset_url",
          "selections": [
            (v0/*: any*/),
            (v2/*: any*/)
          ]
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
        (v1/*: any*/)
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
      "name": "Asset_data"
    }
  ],
  "type": "SearchResultType",
  "abstractKey": null
};
})();
(node as any).hash = 'b3bef85f95908acf5313bc1577bb7dc0';
export default node;
