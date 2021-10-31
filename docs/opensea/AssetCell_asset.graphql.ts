/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetCell_asset = {
    readonly collection: {
        readonly name: string;
    };
    readonly name: string | null;
    readonly " $fragmentRefs": FragmentRefs<"AssetMedia_asset" | "asset_url">;
    readonly " $refType": "AssetCell_asset";
};
export type AssetCell_asset$data = AssetCell_asset;
export type AssetCell_asset$key = {
    readonly " $data"?: AssetCell_asset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetCell_asset">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetCell_asset",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionType",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AssetMedia_asset"
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "asset_url",
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
      ]
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
})();
(node as any).hash = '7ac594b4fee31be50aa126c9e5da3ec5';
export default node;
