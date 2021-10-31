/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type OrderV2OrderType = "BASIC" | "DUTCH" | "ENGLISH" | "%future added value";
export type OrderV2Side = "ASK" | "BID" | "%future added value";
export type Orders_data = {
    readonly orders: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly closedAt: string | null;
                readonly isFulfillable: boolean;
                readonly isValid: boolean;
                readonly oldOrder: string | null;
                readonly openedAt: string;
                readonly orderType: OrderV2OrderType;
                readonly maker: {
                    readonly address: string;
                    readonly " $fragmentRefs": FragmentRefs<"AccountLink_data" | "wallet_accountKey">;
                };
                readonly makerAsset: {
                    readonly assetQuantities: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly asset: {
                                    readonly assetContract: {
                                        readonly address: string;
                                        readonly chain: ChainIdentifier;
                                    };
                                };
                            } | null;
                        } | null>;
                    };
                };
                readonly makerAssetBundle: {
                    readonly assetQuantities: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data" | "quantity_data">;
                            } | null;
                        } | null>;
                    };
                };
                readonly relayId: string;
                readonly side: OrderV2Side | null;
                readonly taker: {
                    readonly address: string;
                    readonly " $fragmentRefs": FragmentRefs<"AccountLink_data" | "wallet_accountKey">;
                } | null;
                readonly perUnitPrice: {
                    readonly eth: string;
                };
                readonly price: {
                    readonly usd: string;
                };
                readonly item?: {
                    readonly collection?: {
                        readonly floorPrice: string | null;
                    } | undefined;
                } | undefined;
                readonly takerAssetBundle: {
                    readonly slug: string | null;
                    readonly assetQuantities: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly asset: {
                                    readonly ownedQuantity: string | null;
                                    readonly decimals: number | null;
                                    readonly symbol: string | null;
                                    readonly relayId: string;
                                    readonly assetContract: {
                                        readonly address: string;
                                    };
                                    readonly " $fragmentRefs": FragmentRefs<"asset_url">;
                                };
                                readonly quantity: string;
                                readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data" | "quantity_data">;
                            } | null;
                        } | null>;
                    };
                    readonly " $fragmentRefs": FragmentRefs<"bundle_url">;
                };
                readonly makerAssetBundleDisplay?: {
                    readonly " $fragmentRefs": FragmentRefs<"AssetCell_assetBundle">;
                } | undefined;
                readonly takerAssetBundleDisplay?: {
                    readonly " $fragmentRefs": FragmentRefs<"AssetCell_assetBundle">;
                } | undefined;
                readonly " $fragmentRefs": FragmentRefs<"AskPrice_data" | "orderLink_data" | "quantity_remaining">;
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "Orders_data";
};
export type Orders_data$data = Orders_data;
export type Orders_data$key = {
    readonly " $data"?: Orders_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Orders_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = [
  (v0/*: any*/),
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "AccountLink_data"
  },
  {
    "kind": "InlineDataFragmentSpread",
    "name": "wallet_accountKey",
    "selections": (v1/*: any*/)
  }
],
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetContractType",
  "kind": "LinkedField",
  "name": "assetContract",
  "plural": false,
  "selections": [
    (v0/*: any*/),
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
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  }
],
v6 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "AssetQuantity_data"
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
v10 = {
  "kind": "InlineDataFragmentSpread",
  "name": "quantity_data",
  "selections": (v9/*: any*/)
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "side",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v14 = [
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
        "name": "floorPrice",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v15 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "AssetCell_assetBundle"
  }
],
v16 = [
  {
    "alias": null,
    "args": (v3/*: any*/),
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
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "excludeMaker"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "expandedMode"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "filterByOrderRules"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "isBid"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "isExpired"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "isValid"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "maker"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "makerArchetype"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "makerAssetBundle"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "makerAssetIsPayment"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "sortAscending"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "sortBy"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "takerArchetype"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "takerAssetBundle"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "takerAssetCategories"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "takerAssetCollections"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "takerAssetIsOwnedBy"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "takerAssetIsPayment"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "orders"
        ]
      }
    ]
  },
  "name": "Orders_data",
  "selections": [
    {
      "alias": "orders",
      "args": [
        {
          "kind": "Variable",
          "name": "excludeMaker",
          "variableName": "excludeMaker"
        },
        {
          "kind": "Variable",
          "name": "filterByOrderRules",
          "variableName": "filterByOrderRules"
        },
        {
          "kind": "Variable",
          "name": "isExpired",
          "variableName": "isExpired"
        },
        {
          "kind": "Variable",
          "name": "isValid",
          "variableName": "isValid"
        },
        {
          "kind": "Variable",
          "name": "maker",
          "variableName": "maker"
        },
        {
          "kind": "Variable",
          "name": "makerArchetype",
          "variableName": "makerArchetype"
        },
        {
          "kind": "Variable",
          "name": "makerAssetBundle",
          "variableName": "makerAssetBundle"
        },
        {
          "kind": "Variable",
          "name": "makerAssetIsPayment",
          "variableName": "makerAssetIsPayment"
        },
        {
          "kind": "Variable",
          "name": "sortAscending",
          "variableName": "sortAscending"
        },
        {
          "kind": "Variable",
          "name": "sortBy",
          "variableName": "sortBy"
        },
        {
          "kind": "Variable",
          "name": "takerArchetype",
          "variableName": "takerArchetype"
        },
        {
          "kind": "Variable",
          "name": "takerAssetBundle",
          "variableName": "takerAssetBundle"
        },
        {
          "kind": "Variable",
          "name": "takerAssetCategories",
          "variableName": "takerAssetCategories"
        },
        {
          "kind": "Variable",
          "name": "takerAssetCollections",
          "variableName": "takerAssetCollections"
        },
        {
          "kind": "Variable",
          "name": "takerAssetIsOwnedBy",
          "variableName": "takerAssetIsOwnedBy"
        },
        {
          "kind": "Variable",
          "name": "takerAssetIsPayment",
          "variableName": "takerAssetIsPayment"
        }
      ],
      "concreteType": "OrderV2TypeConnection",
      "kind": "LinkedField",
      "name": "__Orders_orders_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderV2TypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "OrderV2Type",
              "kind": "LinkedField",
              "name": "node",
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
                  "name": "isValid",
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
                  "concreteType": "AccountType",
                  "kind": "LinkedField",
                  "name": "maker",
                  "plural": false,
                  "selections": (v2/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": "makerAsset",
                  "args": null,
                  "concreteType": "AssetBundleType",
                  "kind": "LinkedField",
                  "name": "makerAssetBundle",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": (v3/*: any*/),
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
                                    (v4/*: any*/)
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
                      "args": (v5/*: any*/),
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
                                (v6/*: any*/),
                                (v10/*: any*/)
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
                (v11/*: any*/),
                (v12/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AccountType",
                  "kind": "LinkedField",
                  "name": "taker",
                  "plural": false,
                  "selections": (v2/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "PriceType",
                  "kind": "LinkedField",
                  "name": "perUnitPrice",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "eth",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "PriceType",
                  "kind": "LinkedField",
                  "name": "price",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "usd",
                      "storageKey": null
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
                    (v13/*: any*/),
                    {
                      "alias": null,
                      "args": (v3/*: any*/),
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
                                      "args": [
                                        {
                                          "kind": "Literal",
                                          "name": "identity",
                                          "value": {}
                                        }
                                      ],
                                      "kind": "ScalarField",
                                      "name": "ownedQuantity",
                                      "storageKey": "ownedQuantity(identity:{})"
                                    },
                                    (v7/*: any*/),
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "symbol",
                                      "storageKey": null
                                    },
                                    (v11/*: any*/),
                                    {
                                      "alias": null,
                                      "args": null,
                                      "concreteType": "AssetContractType",
                                      "kind": "LinkedField",
                                      "name": "assetContract",
                                      "plural": false,
                                      "selections": (v1/*: any*/),
                                      "storageKey": null
                                    },
                                    {
                                      "kind": "InlineDataFragmentSpread",
                                      "name": "asset_url",
                                      "selections": [
                                        (v4/*: any*/),
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
                                (v8/*: any*/),
                                (v6/*: any*/),
                                (v10/*: any*/)
                              ],
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": "assetQuantities(first:1)"
                    },
                    {
                      "kind": "InlineDataFragmentSpread",
                      "name": "bundle_url",
                      "selections": [
                        (v13/*: any*/)
                      ]
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "condition": "isBid",
                  "kind": "Condition",
                  "passingValue": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": null,
                      "kind": "LinkedField",
                      "name": "item",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "InlineFragment",
                          "selections": (v14/*: any*/),
                          "type": "AssetType",
                          "abstractKey": null
                        },
                        {
                          "kind": "InlineFragment",
                          "selections": (v14/*: any*/),
                          "type": "AssetBundleType",
                          "abstractKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ]
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
                          "args": (v5/*: any*/),
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
                  "condition": "expandedMode",
                  "kind": "Condition",
                  "passingValue": true,
                  "selections": [
                    {
                      "alias": "makerAssetBundleDisplay",
                      "args": null,
                      "concreteType": "AssetBundleType",
                      "kind": "LinkedField",
                      "name": "makerAssetBundle",
                      "plural": false,
                      "selections": (v15/*: any*/),
                      "storageKey": null
                    },
                    {
                      "alias": "takerAssetBundleDisplay",
                      "args": null,
                      "concreteType": "AssetBundleType",
                      "kind": "LinkedField",
                      "name": "takerAssetBundle",
                      "plural": false,
                      "selections": (v15/*: any*/),
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
                      "selections": (v16/*: any*/),
                      "storageKey": null
                    },
                    {
                      "alias": "takerAsset",
                      "args": null,
                      "concreteType": "AssetBundleType",
                      "kind": "LinkedField",
                      "name": "takerAssetBundle",
                      "plural": false,
                      "selections": (v16/*: any*/),
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "remainingQuantity",
                      "storageKey": null
                    },
                    (v12/*: any*/)
                  ]
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'fc576e60e98601ee915c5888b1043c96';
export default node;
