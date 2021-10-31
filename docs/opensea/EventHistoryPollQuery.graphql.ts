/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetEventEventType = "APPROVE" | "BID_ENTERED" | "BID_WITHDRAWN" | "CANCELLED" | "CREATED" | "CUSTOM" | "OFFER_ENTERED" | "PAYOUT" | "SUCCESSFUL" | "TRANSFER" | "%future added value";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type EventType = "ASSET_APPROVE" | "ASSET_TRANSFER" | "AUCTION_CANCELLED" | "AUCTION_CREATED" | "AUCTION_SUCCESSFUL" | "BID_ENTERED" | "BID_WITHDRAWN" | "CUSTOM" | "OFFER_ENTERED" | "PAYOUT" | "%future added value";
export type ArchetypeInputType = {
    assetContractAddress: string;
    tokenId: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type EventHistoryPollQueryVariables = {
    archetype?: ArchetypeInputType | null | undefined;
    categories?: Array<string> | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    collections?: Array<string> | null | undefined;
    count?: number | null | undefined;
    cursor?: string | null | undefined;
    eventTimestamp_Gt?: string | null | undefined;
    eventTypes?: Array<EventType> | null | undefined;
    identity?: IdentityInputType | null | undefined;
    showAll?: boolean | null | undefined;
};
export type EventHistoryPollQueryResponse = {
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
                readonly customEventName: string | null;
                readonly offerExpired: boolean | null;
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
};
export type EventHistoryPollQuery = {
    readonly response: EventHistoryPollQueryResponse;
    readonly variables: EventHistoryPollQueryVariables;
};



/*
query EventHistoryPollQuery(
  $archetype: ArchetypeInputType
  $categories: [CollectionSlug!]
  $chains: [ChainScalar!]
  $collections: [CollectionSlug!]
  $count: Int = 10
  $cursor: String
  $eventTimestamp_Gt: DateTime
  $eventTypes: [EventType!]
  $identity: IdentityInputType
  $showAll: Boolean = false
) {
  assetEvents(after: $cursor, archetype: $archetype, categories: $categories, chains: $chains, collections: $collections, eventTimestamp_Gt: $eventTimestamp_Gt, eventTypes: $eventTypes, first: $count, identity: $identity, includeHidden: true) {
    edges {
      node {
        assetBundle @include(if: $showAll) {
          relayId
          ...AssetCell_assetBundle
          ...bundle_url
          id
        }
        assetQuantity {
          asset @include(if: $showAll) {
            relayId
            assetContract {
              ...CollectionLink_assetContract
              id
            }
            ...AssetCell_asset
            ...asset_url
            collection {
              ...CollectionLink_collection
              id
            }
            id
          }
          ...quantity_data
          id
        }
        relayId
        eventTimestamp
        eventType
        customEventName
        offerExpired
        devFee {
          asset {
            assetContract {
              chain
              id
            }
            id
          }
          quantity
          ...AssetQuantity_data
          id
        }
        devFeePaymentEvent {
          ...EventTimestamp_data
          id
        }
        fromAccount {
          address
          ...AccountLink_data
          id
        }
        price {
          quantity
          quantityInEth
          ...AssetQuantity_data
          id
        }
        endingPrice {
          quantity
          ...AssetQuantity_data
          id
        }
        seller {
          ...AccountLink_data
          id
        }
        toAccount {
          ...AccountLink_data
          id
        }
        winnerAccount {
          ...AccountLink_data
          id
        }
        ...EventTimestamp_data
        id
      }
    }
  }
}

fragment AccountLink_data on AccountType {
  address
  config
  isCompromised
  user {
    publicUsername
    id
  }
  ...ProfileImage_data
  ...wallet_accountKey
  ...accounts_url
}

fragment AssetCell_asset on AssetType {
  collection {
    name
    id
  }
  name
  ...AssetMedia_asset
  ...asset_url
}

fragment AssetCell_assetBundle on AssetBundleType {
  assetQuantities(first: 2) {
    edges {
      node {
        asset {
          collection {
            name
            id
          }
          name
          ...AssetMedia_asset
          ...asset_url
          id
        }
        relayId
        id
      }
    }
  }
  name
  slug
}

fragment AssetMedia_asset on AssetType {
  animationUrl
  backgroundColor
  collection {
    displayData {
      cardDisplayStyle
    }
    id
  }
  isDelisted
  displayImageUrl
}

fragment AssetQuantity_data on AssetQuantityType {
  asset {
    ...Price_data
    id
  }
  quantity
}

fragment CollectionLink_assetContract on AssetContractType {
  address
  blockExplorerLink
}

fragment CollectionLink_collection on CollectionType {
  name
  ...collection_url
  ...verification_data
}

fragment EventTimestamp_data on AssetEventType {
  eventTimestamp
  transaction {
    blockExplorerLink
    id
  }
}

fragment Price_data on AssetType {
  decimals
  imageUrl
  symbol
  usdSpotPrice
  assetContract {
    blockExplorerLink
    chain
    id
  }
}

fragment ProfileImage_data on AccountType {
  imageUrl
  address
}

fragment accounts_url on AccountType {
  address
  user {
    publicUsername
    id
  }
}

fragment asset_url on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}

fragment bundle_url on AssetBundleType {
  slug
}

fragment collection_url on CollectionType {
  slug
}

fragment quantity_data on AssetQuantityType {
  asset {
    decimals
    id
  }
  quantity
}

fragment verification_data on CollectionType {
  isMintable
  isSafelisted
  isVerified
}

fragment wallet_accountKey on AccountType {
  address
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "archetype"
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
    "name": "eventTimestamp_Gt"
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
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "archetype",
    "variableName": "archetype"
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
    "name": "eventTimestamp_Gt",
    "variableName": "eventTimestamp_Gt"
  },
  {
    "kind": "Variable",
    "name": "eventTypes",
    "variableName": "eventTypes"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "eventTimestamp",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "eventType",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "customEventName",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "offerExpired",
  "storageKey": null
},
v12 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "AssetQuantity_data"
},
v13 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EventTimestamp_data"
},
v14 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "AccountLink_data"
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantityInEth",
  "storageKey": null
},
v16 = [
  (v14/*: any*/)
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blockExplorerLink",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "DisplayDataType",
  "kind": "LinkedField",
  "name": "displayData",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cardDisplayStyle",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "animationUrl",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backgroundColor",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDelisted",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayImageUrl",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "usdSpotPrice",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "concreteType": "TransactionType",
  "kind": "LinkedField",
  "name": "transaction",
  "plural": false,
  "selections": [
    (v19/*: any*/),
    (v18/*: any*/)
  ],
  "storageKey": null
},
v30 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "config",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "isCompromised",
    "storageKey": null
  },
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
      },
      (v18/*: any*/)
    ],
    "storageKey": null
  },
  (v26/*: any*/),
  (v18/*: any*/)
],
v31 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetType",
  "kind": "LinkedField",
  "name": "asset",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v26/*: any*/),
    (v27/*: any*/),
    (v28/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetContractType",
      "kind": "LinkedField",
      "name": "assetContract",
      "plural": false,
      "selections": [
        (v19/*: any*/),
        (v4/*: any*/),
        (v18/*: any*/)
      ],
      "storageKey": null
    },
    (v18/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EventHistoryPollQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AssetEventTypeConnection",
        "kind": "LinkedField",
        "name": "assetEvents",
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
                              (v2/*: any*/),
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
                                      (v3/*: any*/),
                                      (v4/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v5/*: any*/)
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
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ]
                      }
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
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
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v12/*: any*/)
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
                      (v13/*: any*/)
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
                      (v3/*: any*/),
                      (v14/*: any*/)
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
                      (v7/*: any*/),
                      (v15/*: any*/),
                      (v12/*: any*/)
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
                      (v7/*: any*/),
                      (v12/*: any*/)
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
                    "selections": (v16/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccountType",
                    "kind": "LinkedField",
                    "name": "toAccount",
                    "plural": false,
                    "selections": (v16/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccountType",
                    "kind": "LinkedField",
                    "name": "winnerAccount",
                    "plural": false,
                    "selections": (v16/*: any*/),
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
                          (v2/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "AssetCell_assetBundle"
                          },
                          {
                            "kind": "InlineDataFragmentSpread",
                            "name": "bundle_url",
                            "selections": [
                              (v17/*: any*/)
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ]
                  },
                  (v13/*: any*/)
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EventHistoryPollQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AssetEventTypeConnection",
        "kind": "LinkedField",
        "name": "assetEvents",
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
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetType",
                        "kind": "LinkedField",
                        "name": "asset",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v18/*: any*/),
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
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "AssetContractType",
                                "kind": "LinkedField",
                                "name": "assetContract",
                                "plural": false,
                                "selections": [
                                  (v3/*: any*/),
                                  (v19/*: any*/),
                                  (v18/*: any*/),
                                  (v4/*: any*/)
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
                                  (v20/*: any*/),
                                  (v18/*: any*/),
                                  (v21/*: any*/),
                                  (v17/*: any*/),
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
                                ],
                                "storageKey": null
                              },
                              (v20/*: any*/),
                              (v22/*: any*/),
                              (v23/*: any*/),
                              (v24/*: any*/),
                              (v25/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ]
                      }
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
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
                              (v4/*: any*/),
                              (v18/*: any*/),
                              (v19/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v18/*: any*/),
                          (v6/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v28/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v18/*: any*/)
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
                      (v8/*: any*/),
                      (v29/*: any*/),
                      (v18/*: any*/)
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
                    "selections": (v30/*: any*/),
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
                      (v7/*: any*/),
                      (v15/*: any*/),
                      (v31/*: any*/),
                      (v18/*: any*/)
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
                      (v7/*: any*/),
                      (v31/*: any*/),
                      (v18/*: any*/)
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
                    "selections": (v30/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccountType",
                    "kind": "LinkedField",
                    "name": "toAccount",
                    "plural": false,
                    "selections": (v30/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccountType",
                    "kind": "LinkedField",
                    "name": "winnerAccount",
                    "plural": false,
                    "selections": (v30/*: any*/),
                    "storageKey": null
                  },
                  (v29/*: any*/),
                  (v18/*: any*/),
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
                          (v2/*: any*/),
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
                                              (v20/*: any*/),
                                              (v18/*: any*/),
                                              (v21/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v20/*: any*/),
                                          (v22/*: any*/),
                                          (v23/*: any*/),
                                          (v24/*: any*/),
                                          (v25/*: any*/),
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "AssetContractType",
                                            "kind": "LinkedField",
                                            "name": "assetContract",
                                            "plural": false,
                                            "selections": [
                                              (v3/*: any*/),
                                              (v4/*: any*/),
                                              (v18/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v5/*: any*/),
                                          (v18/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v2/*: any*/),
                                      (v18/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "assetQuantities(first:2)"
                          },
                          (v20/*: any*/),
                          (v17/*: any*/),
                          (v18/*: any*/)
                        ],
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
    ]
  },
  "params": {
    "cacheID": "7037dddc3d20916b7d8e3dc17899e85c",
    "id": null,
    "metadata": {},
    "name": "EventHistoryPollQuery",
    "operationKind": "query",
    "text": "query EventHistoryPollQuery(\n  $archetype: ArchetypeInputType\n  $categories: [CollectionSlug!]\n  $chains: [ChainScalar!]\n  $collections: [CollectionSlug!]\n  $count: Int = 10\n  $cursor: String\n  $eventTimestamp_Gt: DateTime\n  $eventTypes: [EventType!]\n  $identity: IdentityInputType\n  $showAll: Boolean = false\n) {\n  assetEvents(after: $cursor, archetype: $archetype, categories: $categories, chains: $chains, collections: $collections, eventTimestamp_Gt: $eventTimestamp_Gt, eventTypes: $eventTypes, first: $count, identity: $identity, includeHidden: true) {\n    edges {\n      node {\n        assetBundle @include(if: $showAll) {\n          relayId\n          ...AssetCell_assetBundle\n          ...bundle_url\n          id\n        }\n        assetQuantity {\n          asset @include(if: $showAll) {\n            relayId\n            assetContract {\n              ...CollectionLink_assetContract\n              id\n            }\n            ...AssetCell_asset\n            ...asset_url\n            collection {\n              ...CollectionLink_collection\n              id\n            }\n            id\n          }\n          ...quantity_data\n          id\n        }\n        relayId\n        eventTimestamp\n        eventType\n        customEventName\n        offerExpired\n        devFee {\n          asset {\n            assetContract {\n              chain\n              id\n            }\n            id\n          }\n          quantity\n          ...AssetQuantity_data\n          id\n        }\n        devFeePaymentEvent {\n          ...EventTimestamp_data\n          id\n        }\n        fromAccount {\n          address\n          ...AccountLink_data\n          id\n        }\n        price {\n          quantity\n          quantityInEth\n          ...AssetQuantity_data\n          id\n        }\n        endingPrice {\n          quantity\n          ...AssetQuantity_data\n          id\n        }\n        seller {\n          ...AccountLink_data\n          id\n        }\n        toAccount {\n          ...AccountLink_data\n          id\n        }\n        winnerAccount {\n          ...AccountLink_data\n          id\n        }\n        ...EventTimestamp_data\n        id\n      }\n    }\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment AssetCell_asset on AssetType {\n  collection {\n    name\n    id\n  }\n  name\n  ...AssetMedia_asset\n  ...asset_url\n}\n\nfragment AssetCell_assetBundle on AssetBundleType {\n  assetQuantities(first: 2) {\n    edges {\n      node {\n        asset {\n          collection {\n            name\n            id\n          }\n          name\n          ...AssetMedia_asset\n          ...asset_url\n          id\n        }\n        relayId\n        id\n      }\n    }\n  }\n  name\n  slug\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment CollectionLink_assetContract on AssetContractType {\n  address\n  blockExplorerLink\n}\n\nfragment CollectionLink_collection on CollectionType {\n  name\n  ...collection_url\n  ...verification_data\n}\n\nfragment EventTimestamp_data on AssetEventType {\n  eventTimestamp\n  transaction {\n    blockExplorerLink\n    id\n  }\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  address\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment quantity_data on AssetQuantityType {\n  asset {\n    decimals\n    id\n  }\n  quantity\n}\n\nfragment verification_data on CollectionType {\n  isMintable\n  isSafelisted\n  isVerified\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
  }
};
})();
(node as any).hash = '1283ad02acc7efedb2b35f421aae76b2';
export default node;
