/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Featured_data = {
    readonly name: string | null;
    readonly imagePreviewUrl: string | null;
    readonly imageUrl: string | null;
    readonly creator: {
        readonly imageUrl: string;
        readonly user: {
            readonly publicUsername: string | null;
        } | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"asset_url" | "AssetMedia_asset" | "itemEvents_data">;
    readonly " $refType": "Featured_data";
};
export type Featured_data$data = Featured_data;
export type Featured_data$key = {
    readonly " $data"?: Featured_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Featured_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v1 = [
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Featured_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imagePreviewUrl",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AccountType",
      "kind": "LinkedField",
      "name": "creator",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "UserType",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "publicUsername",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "asset_url",
      "selections": (v1/*: any*/)
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AssetMedia_asset"
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "itemEvents_data",
      "selections": (v1/*: any*/)
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
})();
(node as any).hash = 'ae43f6107aabc2c2064a6d9b29d8c9f4';
export default node;
