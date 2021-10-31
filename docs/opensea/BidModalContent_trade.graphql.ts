/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OrderV2OrderType = "BASIC" | "DUTCH" | "ENGLISH" | "%future added value";
export type BidModalContent_trade = {
    readonly bestAsk: {
        readonly closedAt: string | null;
        readonly isFulfillable: boolean;
        readonly oldOrder: string | null;
        readonly orderType: OrderV2OrderType;
        readonly relayId: string;
        readonly makerAssetBundle: {
            readonly assetQuantities: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly asset: {
                            readonly collection: {
                                readonly " $fragmentRefs": FragmentRefs<"verification_data">;
                            };
                        };
                    } | null;
                } | null>;
            };
        };
        readonly takerAssetBundle: {
            readonly assetQuantities: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly quantity: string;
                        readonly asset: {
                            readonly decimals: number | null;
                            readonly relayId: string;
                        };
                    } | null;
                } | null>;
            };
        };
    } | null;
    readonly bestBid: {
        readonly relayId: string;
        readonly makerAssetBundle: {
            readonly assetQuantities: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly quantity: string;
                        readonly asset: {
                            readonly decimals: number | null;
                        };
                        readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                    } | null;
                } | null>;
            };
        };
    } | null;
    readonly " $refType": "BidModalContent_trade";
};
export type BidModalContent_trade$data = BidModalContent_trade;
export type BidModalContent_trade$key = {
    readonly " $data"?: BidModalContent_trade$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BidModalContent_trade">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BidModalContent_trade",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderV2Type",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isFulfillable",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "oldOrder",
          "storageKey": null
        },
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
                                {
                                  "kind": "InlineDataFragmentSpread",
                                  "name": "verification_data",
                                  "selections": [
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "isMintable",
                                      "storageKey": null
                                    },
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "isSafelisted",
                                      "storageKey": null
                                    },
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "isVerified",
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
              "args": (v1/*: any*/),
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
                        (v2/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "AssetType",
                          "kind": "LinkedField",
                          "name": "asset",
                          "plural": false,
                          "selections": [
                            (v3/*: any*/),
                            (v0/*: any*/)
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
              "storageKey": "assetQuantities(first:1)"
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
      "concreteType": "OrderV2Type",
      "kind": "LinkedField",
      "name": "bestBid",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
              "args": (v1/*: any*/),
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
                        (v2/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "AssetType",
                          "kind": "LinkedField",
                          "name": "asset",
                          "plural": false,
                          "selections": [
                            (v3/*: any*/)
                          ],
                          "storageKey": null
                        },
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
      "storageKey": null
    }
  ],
  "type": "TradeSummaryType",
  "abstractKey": null
};
})();
(node as any).hash = '1f90e5660f5f518a932319414598ec49';
export default node;
