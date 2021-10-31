/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
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
export type EventHistoryQueryVariables = {
    archetype?: ArchetypeInputType | null | undefined;
    bundle?: string | null | undefined;
    collections?: Array<string> | null | undefined;
    categories?: Array<string> | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    eventTypes?: Array<EventType> | null | undefined;
    cursor?: string | null | undefined;
    count?: number | null | undefined;
    showAll?: boolean | null | undefined;
    identity?: IdentityInputType | null | undefined;
};
export type EventHistoryQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"EventHistory_data">;
};
export type EventHistoryQuery = {
    readonly response: EventHistoryQueryResponse;
    readonly variables: EventHistoryQueryVariables;
};



/*
query EventHistoryQuery(
  $archetype: ArchetypeInputType
  $bundle: BundleSlug
  $collections: [CollectionSlug!]
  $categories: [CollectionSlug!]
  $chains: [ChainScalar!]
  $eventTypes: [EventType!]
  $cursor: String
  $count: Int = 16
  $showAll: Boolean = false
  $identity: IdentityInputType
) {
  ...EventHistory_data_L1XK6
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

fragment EventHistory_data_L1XK6 on Query {
  assetEvents(after: $cursor, bundle: $bundle, archetype: $archetype, first: $count, categories: $categories, collections: $collections, chains: $chains, eventTypes: $eventTypes, identity: $identity, includeHidden: true) {
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
        offerExpired
        customEventName
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
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "archetype"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bundle"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categories"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "chains"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collections"
},
v5 = {
  "defaultValue": 16,
  "kind": "LocalArgument",
  "name": "count"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "eventTypes"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identity"
},
v9 = {
  "defaultValue": false,
  "kind": "LocalArgument",
  "name": "showAll"
},
v10 = {
  "kind": "Variable",
  "name": "archetype",
  "variableName": "archetype"
},
v11 = {
  "kind": "Variable",
  "name": "bundle",
  "variableName": "bundle"
},
v12 = {
  "kind": "Variable",
  "name": "categories",
  "variableName": "categories"
},
v13 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v14 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v15 = {
  "kind": "Variable",
  "name": "eventTypes",
  "variableName": "eventTypes"
},
v16 = {
  "kind": "Variable",
  "name": "identity",
  "variableName": "identity"
},
v17 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v10/*: any*/),
  (v11/*: any*/),
  (v12/*: any*/),
  (v13/*: any*/),
  (v14/*: any*/),
  (v15/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v16/*: any*/),
  {
    "kind": "Literal",
    "name": "includeHidden",
    "value": true
  }
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blockExplorerLink",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v26 = {
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
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "animationUrl",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backgroundColor",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDelisted",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayImageUrl",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "eventTimestamp",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "usdSpotPrice",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "concreteType": "TransactionType",
  "kind": "LinkedField",
  "name": "transaction",
  "plural": false,
  "selections": [
    (v23/*: any*/),
    (v19/*: any*/)
  ],
  "storageKey": null
},
v38 = [
  (v22/*: any*/),
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
      (v19/*: any*/)
    ],
    "storageKey": null
  },
  (v34/*: any*/),
  (v19/*: any*/)
],
v39 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetType",
  "kind": "LinkedField",
  "name": "asset",
  "plural": false,
  "selections": [
    (v18/*: any*/),
    (v34/*: any*/),
    (v35/*: any*/),
    (v36/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetContractType",
      "kind": "LinkedField",
      "name": "assetContract",
      "plural": false,
      "selections": [
        (v23/*: any*/),
        (v24/*: any*/),
        (v19/*: any*/)
      ],
      "storageKey": null
    },
    (v19/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EventHistoryQuery",
    "selections": [
      {
        "args": [
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v15/*: any*/),
          (v16/*: any*/),
          {
            "kind": "Variable",
            "name": "showAll",
            "variableName": "showAll"
          }
        ],
        "kind": "FragmentSpread",
        "name": "EventHistory_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v7/*: any*/),
      (v6/*: any*/),
      (v5/*: any*/),
      (v9/*: any*/),
      (v8/*: any*/)
    ],
    "kind": "Operation",
    "name": "EventHistoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v17/*: any*/),
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
                          (v18/*: any*/),
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v20/*: any*/),
                      (v19/*: any*/),
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
                              (v21/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "AssetContractType",
                                "kind": "LinkedField",
                                "name": "assetContract",
                                "plural": false,
                                "selections": [
                                  (v22/*: any*/),
                                  (v23/*: any*/),
                                  (v19/*: any*/),
                                  (v24/*: any*/)
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
                                  (v25/*: any*/),
                                  (v19/*: any*/),
                                  (v26/*: any*/),
                                  (v27/*: any*/),
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
                              (v25/*: any*/),
                              (v28/*: any*/),
                              (v29/*: any*/),
                              (v30/*: any*/),
                              (v31/*: any*/),
                              (v32/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ]
                      }
                    ],
                    "storageKey": null
                  },
                  (v21/*: any*/),
                  (v33/*: any*/),
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
                              (v24/*: any*/),
                              (v19/*: any*/),
                              (v23/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v19/*: any*/),
                          (v18/*: any*/),
                          (v34/*: any*/),
                          (v35/*: any*/),
                          (v36/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v20/*: any*/),
                      (v19/*: any*/)
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
                      (v33/*: any*/),
                      (v37/*: any*/),
                      (v19/*: any*/)
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
                    "selections": (v38/*: any*/),
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
                      (v20/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "quantityInEth",
                        "storageKey": null
                      },
                      (v39/*: any*/),
                      (v19/*: any*/)
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
                      (v20/*: any*/),
                      (v39/*: any*/),
                      (v19/*: any*/)
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
                    "selections": (v38/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccountType",
                    "kind": "LinkedField",
                    "name": "toAccount",
                    "plural": false,
                    "selections": (v38/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccountType",
                    "kind": "LinkedField",
                    "name": "winnerAccount",
                    "plural": false,
                    "selections": (v38/*: any*/),
                    "storageKey": null
                  },
                  (v37/*: any*/),
                  (v19/*: any*/),
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
                          (v21/*: any*/),
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
                                              (v25/*: any*/),
                                              (v19/*: any*/),
                                              (v26/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v25/*: any*/),
                                          (v28/*: any*/),
                                          (v29/*: any*/),
                                          (v30/*: any*/),
                                          (v31/*: any*/),
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "AssetContractType",
                                            "kind": "LinkedField",
                                            "name": "assetContract",
                                            "plural": false,
                                            "selections": [
                                              (v22/*: any*/),
                                              (v24/*: any*/),
                                              (v19/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v32/*: any*/),
                                          (v19/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v21/*: any*/),
                                      (v19/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "assetQuantities(first:2)"
                          },
                          (v25/*: any*/),
                          (v27/*: any*/),
                          (v19/*: any*/)
                        ],
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
      },
      {
        "alias": null,
        "args": (v17/*: any*/),
        "filters": [
          "bundle",
          "archetype",
          "categories",
          "collections",
          "chains",
          "eventTypes",
          "identity",
          "includeHidden"
        ],
        "handle": "connection",
        "key": "EventHistory_assetEvents",
        "kind": "LinkedHandle",
        "name": "assetEvents"
      }
    ]
  },
  "params": {
    "cacheID": "461573bb9a35302dc557d80b86674c8d",
    "id": null,
    "metadata": {},
    "name": "EventHistoryQuery",
    "operationKind": "query",
    "text": "query EventHistoryQuery(\n  $archetype: ArchetypeInputType\n  $bundle: BundleSlug\n  $collections: [CollectionSlug!]\n  $categories: [CollectionSlug!]\n  $chains: [ChainScalar!]\n  $eventTypes: [EventType!]\n  $cursor: String\n  $count: Int = 16\n  $showAll: Boolean = false\n  $identity: IdentityInputType\n) {\n  ...EventHistory_data_L1XK6\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment AssetCell_asset on AssetType {\n  collection {\n    name\n    id\n  }\n  name\n  ...AssetMedia_asset\n  ...asset_url\n}\n\nfragment AssetCell_assetBundle on AssetBundleType {\n  assetQuantities(first: 2) {\n    edges {\n      node {\n        asset {\n          collection {\n            name\n            id\n          }\n          name\n          ...AssetMedia_asset\n          ...asset_url\n          id\n        }\n        relayId\n        id\n      }\n    }\n  }\n  name\n  slug\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment CollectionLink_assetContract on AssetContractType {\n  address\n  blockExplorerLink\n}\n\nfragment CollectionLink_collection on CollectionType {\n  name\n  ...collection_url\n  ...verification_data\n}\n\nfragment EventHistory_data_L1XK6 on Query {\n  assetEvents(after: $cursor, bundle: $bundle, archetype: $archetype, first: $count, categories: $categories, collections: $collections, chains: $chains, eventTypes: $eventTypes, identity: $identity, includeHidden: true) {\n    edges {\n      node {\n        assetBundle @include(if: $showAll) {\n          relayId\n          ...AssetCell_assetBundle\n          ...bundle_url\n          id\n        }\n        assetQuantity {\n          asset @include(if: $showAll) {\n            relayId\n            assetContract {\n              ...CollectionLink_assetContract\n              id\n            }\n            ...AssetCell_asset\n            ...asset_url\n            collection {\n              ...CollectionLink_collection\n              id\n            }\n            id\n          }\n          ...quantity_data\n          id\n        }\n        relayId\n        eventTimestamp\n        eventType\n        offerExpired\n        customEventName\n        devFee {\n          asset {\n            assetContract {\n              chain\n              id\n            }\n            id\n          }\n          quantity\n          ...AssetQuantity_data\n          id\n        }\n        devFeePaymentEvent {\n          ...EventTimestamp_data\n          id\n        }\n        fromAccount {\n          address\n          ...AccountLink_data\n          id\n        }\n        price {\n          quantity\n          quantityInEth\n          ...AssetQuantity_data\n          id\n        }\n        endingPrice {\n          quantity\n          ...AssetQuantity_data\n          id\n        }\n        seller {\n          ...AccountLink_data\n          id\n        }\n        toAccount {\n          ...AccountLink_data\n          id\n        }\n        winnerAccount {\n          ...AccountLink_data\n          id\n        }\n        ...EventTimestamp_data\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment EventTimestamp_data on AssetEventType {\n  eventTimestamp\n  transaction {\n    blockExplorerLink\n    id\n  }\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  address\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment quantity_data on AssetQuantityType {\n  asset {\n    decimals\n    id\n  }\n  quantity\n}\n\nfragment verification_data on CollectionType {\n  isMintable\n  isSafelisted\n  isVerified\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
  }
};
})();
(node as any).hash = 'fa4ff9d45afe0c169cb72f11443c6bbc';
export default node;
