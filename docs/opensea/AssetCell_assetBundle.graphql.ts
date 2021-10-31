/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetCell_assetBundle = {
    readonly assetQuantities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly asset: {
                    readonly collection: {
                        readonly name: string;
                    };
                    readonly name: string | null;
                    readonly " $fragmentRefs": FragmentRefs<"AssetMedia_asset" | "asset_url">;
                };
                readonly relayId: string;
            } | null;
        } | null>;
    };
    readonly name: string | null;
    readonly slug: string | null;
    readonly " $refType": "AssetCell_assetBundle";
};
export type AssetCell_assetBundle$data = AssetCell_assetBundle;
export type AssetCell_assetBundle$key = {
    readonly " $data"?: AssetCell_assetBundle$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetCell_assetBundle">;
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
  "name": "AssetCell_assetBundle",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 2
        }
      ],
      "concreteType": "AssetQuantityTypeConnection",
      "kind": "LinkedField",
      "name": "assetQuantities",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetQuantityTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetQuantityType",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "relayId",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "assetQuantities(first:2)"
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "AssetBundleType",
  "abstractKey": null
};
})();
(node as any).hash = '4110c3f04cb5d049f17b8ecf4d3dc46a';
export default node;
