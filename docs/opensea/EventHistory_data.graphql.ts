/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetEventEventType = "APPROVE" | "BID_ENTERED" | "BID_WITHDRAWN" | "CANCELLED" | "CREATED" | "CUSTOM" | "OFFER_ENTERED" | "PAYOUT" | "SUCCESSFUL" | "TRANSFER" | "%future added value";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type EventHistory_data = {
    readonly assetEvents: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly assetBundle?: {
                    readonly relayId: string;
                    readonly " $fragmentRefs": FragmentRefs<"AssetCell_assetBundle" | "bundle_url">;
                } | null | undefined;
                readonly assetQuantity: {
                    readonly asset?: {
                        readonly relayId: string;
                        readonly assetContract: {
                            readonly " $fragmentRefs": FragmentRefs<"CollectionLink_assetContract">;
                        };
                        readonly collection: {
                            readonly " $fragmentRefs": FragmentRefs<"CollectionLink_collection">;
                        };
                        readonly " $fragmentRefs": FragmentRefs<"AssetCell_asset" | "asset_url">;
                    } | undefined;
                    readonly " $fragmentRefs": FragmentRefs<"quantity_data">;
                } | null;
                readonly relayId: string;
                readonly eventTimestamp: string;
                readonly eventType: AssetEventEventType | null;
                readonly offerExpired: boolean | null;
                readonly customEventName: string | null;
                readonly devFee: {
                    readonly asset: {
                        readonly assetContract: {
                            readonly chain: ChainIdentifier;
                        };
                    };
                    readonly quantity: string;
                    readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                } | null;
                readonly devFeePaymentEvent: {
                    readonly " $fragmentRefs": FragmentRefs<"EventTimestamp_data">;
                } | null;
                readonly fromAccount: {
                    readonly address: string;
                    readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
                } | null;
                readonly price: {
                    readonly quantity: string;
                    readonly quantityInEth: string;
                    readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                } | null;
                readonly endingPrice: {
                    readonly quantity: string;
                    readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                } | null;
                readonly seller: {
                    readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
                } | null;
                readonly toAccount: {
                    readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
                } | null;
                readonly winnerAccount: {
                    readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
                } | null;
                readonly " $fragmentRefs": FragmentRefs<"EventTimestamp_data">;
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "EventHistory_data";
};
export type EventHistory_data$data = EventHistory_data;
export type EventHistory_data$key = {
    readonly " $data"?: EventHistory_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EventHistory_data">;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v4 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "AssetQuantity_data"
},
v5 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EventTimestamp_data"
},
v6 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "AccountLink_data"
},
v7 = [
  (v6/*: any*/)
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "archetype"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "bundle"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "categories"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "chains"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collections"
    },
    {
      "defaultValue": 16,
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
      "name": "eventTypes"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "identity"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "showAll"
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
          "assetEvents"
        ]
      }
    ]
  },
  "name": "EventHistory_data",
  "selections": [
    {
      "alias": "assetEvents",
      "args": [
        {
          "kind": "Variable",
          "name": "archetype",
          "variableName": "archetype"
        },
        {
          "kind": "Variable",
          "name": "bundle",
          "variableName": "bundle"
        },
        {
          "kind": "Variable",
          "name": "categories",
          "variableName": "categories"
        },
        {
          "kind": "Variable",
          "name": "chains",
          "variableName": "chains"
        },
        {
          "kind": "Variable",
          "name": "collections",
          "variableName": "collections"
        },
        {
          "kind": "Variable",
          "name": "eventTypes",
          "variableName": "eventTypes"
        },
        {
          "kind": "Variable",
          "name": "identity",
          "variableName": "identity"
        },
        {
          "kind": "Literal",
          "name": "includeHidden",
          "value": true
        }
      ],
      "concreteType": "AssetEventTypeConnection",
      "kind": "LinkedField",
      "name": "__EventHistory_assetEvents_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetEventTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetEventType",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetQuantityType",
                  "kind": "LinkedField",
                  "name": "assetQuantity",
                  "plural": false,
                  "selections": [
                    {
                      "condition": "showAll",
                      "kind": "Condition",
                      "passingValue": true,
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
                                {
                                  "args": null,
                                  "kind": "FragmentSpread",
                                  "name": "CollectionLink_assetContract"
                                }
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
                                  "args": null,
                                  "kind": "FragmentSpread",
                                  "name": "CollectionLink_collection"
                                }
                              ],
                              "storageKey": null
                            },
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "AssetCell_asset"
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
                                    (v1/*: any*/),
                                    (v2/*: any*/)
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
                        }
                      ]
                    },
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
                        (v3/*: any*/)
                      ]
                    }
                  ],
                  "storageKey": null
                },
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "eventTimestamp",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "eventType",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "offerExpired",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "customEventName",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetQuantityType",
                  "kind": "LinkedField",
                  "name": "devFee",
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
                          "concreteType": "AssetContractType",
                          "kind": "LinkedField",
                          "name": "assetContract",
                          "plural": false,
                          "selections": [
                            (v2/*: any*/)
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    (v3/*: any*/),
                    (v4/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetEventType",
                  "kind": "LinkedField",
                  "name": "devFeePaymentEvent",
                  "plural": false,
                  "selections": [
                    (v5/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AccountType",
                  "kind": "LinkedField",
                  "name": "fromAccount",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v6/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetQuantityType",
                  "kind": "LinkedField",
                  "name": "price",
                  "plural": false,
                  "selections": [
                    (v3/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "quantityInEth",
                      "storageKey": null
                    },
                    (v4/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetQuantityType",
                  "kind": "LinkedField",
                  "name": "endingPrice",
                  "plural": false,
                  "selections": [
                    (v3/*: any*/),
                    (v4/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AccountType",
                  "kind": "LinkedField",
                  "name": "seller",
                  "plural": false,
                  "selections": (v7/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AccountType",
                  "kind": "LinkedField",
                  "name": "toAccount",
                  "plural": false,
                  "selections": (v7/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AccountType",
                  "kind": "LinkedField",
                  "name": "winnerAccount",
                  "plural": false,
                  "selections": (v7/*: any*/),
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
                  "condition": "showAll",
                  "kind": "Condition",
                  "passingValue": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "AssetBundleType",
                      "kind": "LinkedField",
                      "name": "assetBundle",
                      "plural": false,
                      "selections": [
                        (v0/*: any*/),
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "AssetCell_assetBundle"
                        },
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
                        }
                      ],
                      "storageKey": null
                    }
                  ]
                },
                (v5/*: any*/)
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
(node as any).hash = 'e8a37ea095d27971983ec6b1464b0ae9';
export default node;
