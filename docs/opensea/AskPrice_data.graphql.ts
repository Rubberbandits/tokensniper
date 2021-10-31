/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AskPrice_data = {
    readonly dutchAuctionFinalPrice: string | null;
    readonly openedAt: string;
    readonly priceFnEndedAt: string | null;
    readonly makerAssetBundle: {
        readonly assetQuantities: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly " $fragmentRefs": FragmentRefs<"quantity_data">;
                } | null;
            } | null>;
        };
    };
    readonly takerAssetBundle: {
        readonly assetQuantities: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                } | null;
            } | null>;
        };
    };
    readonly " $refType": "AskPrice_data";
};
export type AskPrice_data$data = AskPrice_data;
export type AskPrice_data$key = {
    readonly " $data"?: AskPrice_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AskPrice_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AskPrice_data",
  "selections": [
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
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetBundleType",
      "kind": "LinkedField",
      "name": "makerAssetBundle",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 30
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
                      "kind": "InlineDataFragmentSpread",
                      "name": "quantity_data",
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
                              "kind": "ScalarField",
                              "name": "decimals",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "quantity",
                          "storageKey": null
                        }
                      ]
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "assetQuantities(first:30)"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetBundleType",
      "kind": "LinkedField",
      "name": "takerAssetBundle",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 1
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
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "AssetQuantity_data"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "assetQuantities(first:1)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderV2Type",
  "abstractKey": null
};
(node as any).hash = 'acfd92c1b6b87ecf65faaaac5d5be60d';
export default node;
