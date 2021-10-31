/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OrderType = "BASIC" | "DUTCH" | "ENGLISH" | "%future added value";
export type AssetCardFooter_assetBundle = {
    readonly name: string | null;
    readonly assetCount: number | null;
    readonly assetQuantities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly asset: {
                    readonly collection: {
                        readonly name: string;
                        readonly relayId: string;
                        readonly isVerified: boolean;
                        readonly " $fragmentRefs": FragmentRefs<"collection_url">;
                    };
                };
            } | null;
        } | null>;
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
    readonly " $fragmentRefs": FragmentRefs<"AssetCardAnnotations_assetBundle">;
    readonly " $refType": "AssetCardFooter_assetBundle";
};
export type AssetCardFooter_assetBundle$data = AssetCardFooter_assetBundle;
export type AssetCardFooter_assetBundle$key = {
    readonly " $data"?: AssetCardFooter_assetBundle$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetCardFooter_assetBundle">;
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetCardFooter_assetBundle",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "assetCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 18
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
                        (v0/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "relayId",
                          "storageKey": null
                        },
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
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "assetQuantities(first:18)"
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "AssetCardAnnotations_assetBundle"
    }
  ],
  "type": "AssetBundleType",
  "abstractKey": null
};
})();
(node as any).hash = 'deafbc4e75bf26b9ceca60c6e8e8c5d0';
export default node;
