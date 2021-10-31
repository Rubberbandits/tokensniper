/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type OrderV2OrderType = "BASIC" | "DUTCH" | "ENGLISH" | "%future added value";
export type TradeStation_data = {
    readonly bestAsk: {
        readonly closedAt: string | null;
        readonly dutchAuctionFinalPrice: string | null;
        readonly openedAt: string;
        readonly orderType: OrderV2OrderType;
        readonly priceFnEndedAt: string | null;
        readonly englishAuctionReservePrice: string | null;
        readonly relayId: string;
        readonly maker: {
            readonly " $fragmentRefs": FragmentRefs<"wallet_accountKey">;
        };
        readonly makerAssetBundle: {
            readonly assetQuantities: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly asset: {
                            readonly relayId: string;
                            readonly assetContract: {
                                readonly chain: ChainIdentifier;
                            };
                            readonly collection: {
                                readonly slug: string;
                                readonly " $fragmentRefs": FragmentRefs<"verification_data">;
                            };
                            readonly " $fragmentRefs": FragmentRefs<"itemEvents_data">;
                        };
                        readonly " $fragmentRefs": FragmentRefs<"quantity_data">;
                    } | null;
                } | null>;
            };
        };
        readonly taker: {
            readonly " $fragmentRefs": FragmentRefs<"wallet_accountKey">;
        } | null;
        readonly takerAssetBundle: {
            readonly assetQuantities: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly quantity: string;
                        readonly asset: {
                            readonly symbol: string | null;
                            readonly decimals: number | null;
                            readonly relayId: string;
                            readonly usdSpotPrice: number | null;
                            readonly assetContract: {
                                readonly address: string;
                            };
                            readonly tokenId: string;
                        };
                        readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                    } | null;
                } | null>;
            };
        };
        readonly " $fragmentRefs": FragmentRefs<"AskPrice_data" | "orderLink_data" | "quantity_remaining">;
    } | null;
    readonly bestBid: {
        readonly makerAssetBundle: {
            readonly assetQuantities: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly quantity: string;
                        readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                    } | null;
                } | null>;
            };
        };
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"BidModalContent_trade">;
    readonly " $refType": "TradeStation_data";
};
export type TradeStation_data$data = TradeStation_data;
export type TradeStation_data$key = {
    readonly " $data"?: TradeStation_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TradeStation_data">;
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
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  {
    "kind": "InlineDataFragmentSpread",
    "name": "wallet_accountKey",
    "selections": (v2/*: any*/)
  }
],
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AssetType",
    "kind": "LinkedField",
    "name": "asset",
    "plural": false,
    "selections": [
      (v7/*: any*/)
    ],
    "storageKey": null
  },
  (v8/*: any*/)
],
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v11 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "AssetQuantity_data"
},
v12 = [
  {
    "alias": null,
    "args": (v10/*: any*/),
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
            "selections": (v9/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "assetQuantities(first:1)"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TradeStation_data",
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
          "name": "orderType",
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
          "kind": "ScalarField",
          "name": "englishAuctionReservePrice",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "AccountType",
          "kind": "LinkedField",
          "name": "maker",
          "plural": false,
          "selections": (v3/*: any*/),
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
              "args": (v4/*: any*/),
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
                            (v0/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "AssetContractType",
                              "kind": "LinkedField",
                              "name": "assetContract",
                              "plural": false,
                              "selections": [
                                (v5/*: any*/)
                              ],
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
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "slug",
                                  "storageKey": null
                                },
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
                            },
                            {
                              "kind": "InlineDataFragmentSpread",
                              "name": "itemEvents_data",
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "concreteType": "AssetContractType",
                                  "kind": "LinkedField",
                                  "name": "assetContract",
                                  "plural": false,
                                  "selections": [
                                    (v1/*: any*/),
                                    (v5/*: any*/)
                                  ],
                                  "storageKey": null
                                },
                                (v6/*: any*/)
                              ]
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "kind": "InlineDataFragmentSpread",
                          "name": "quantity_data",
                          "selections": (v9/*: any*/)
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
          "concreteType": "AccountType",
          "kind": "LinkedField",
          "name": "taker",
          "plural": false,
          "selections": (v3/*: any*/),
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
              "args": (v10/*: any*/),
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
                        (v8/*: any*/),
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
                              "name": "symbol",
                              "storageKey": null
                            },
                            (v7/*: any*/),
                            (v0/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "usdSpotPrice",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "AssetContractType",
                              "kind": "LinkedField",
                              "name": "assetContract",
                              "plural": false,
                              "selections": (v2/*: any*/),
                              "storageKey": null
                            },
                            (v6/*: any*/)
                          ],
                          "storageKey": null
                        },
                        (v11/*: any*/)
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AskPrice_data"
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "orderLink_data",
          "selections": [
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
                  "args": (v4/*: any*/),
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
                                  "kind": "ScalarField",
                                  "name": "externalLink",
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
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "externalUrl",
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
                      "storageKey": null
                    }
                  ],
                  "storageKey": "assetQuantities(first:30)"
                }
              ],
              "storageKey": null
            }
          ]
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "quantity_remaining",
          "selections": [
            {
              "alias": "makerAsset",
              "args": null,
              "concreteType": "AssetBundleType",
              "kind": "LinkedField",
              "name": "makerAssetBundle",
              "plural": false,
              "selections": (v12/*: any*/),
              "storageKey": null
            },
            {
              "alias": "takerAsset",
              "args": null,
              "concreteType": "AssetBundleType",
              "kind": "LinkedField",
              "name": "takerAssetBundle",
              "plural": false,
              "selections": (v12/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "remainingQuantity",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "side",
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
      "concreteType": "OrderV2Type",
      "kind": "LinkedField",
      "name": "bestBid",
      "plural": false,
      "selections": [
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
              "args": (v10/*: any*/),
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
                        (v8/*: any*/),
                        (v11/*: any*/)
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "BidModalContent_trade"
    }
  ],
  "type": "TradeSummaryType",
  "abstractKey": null
};
})();
(node as any).hash = 'c3bfe8ac8689c7b7bb2d63e78c59e02c';
export default node;
