/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchResultModel = "ASSETS" | "BUNDLES" | "%future added value";
export type SearchSortBy = "BIRTH_DATE" | "CREATED_DATE" | "EXPIRATION_DATE" | "FAVORITE_COUNT" | "LAST_SALE_DATE" | "LAST_SALE_PRICE" | "LAST_TRANSFER_DATE" | "LISTING_DATE" | "PRICE" | "SALE_COUNT" | "STAFF_SORT_1" | "STAFF_SORT_2" | "STAFF_SORT_3" | "UNIT_PRICE" | "VIEWER_COUNT" | "%future added value";
export type SearchToggle = "BUY_NOW" | "HAS_OFFERS" | "IS_NEW" | "ON_AUCTION" | "%future added value";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type TraitRangeType = {
    name: string;
    ranges: Array<RangeType>;
};
export type RangeType = {
    min: number;
    max: number;
};
export type TraitInputType = {
    name: string;
    values: Array<string>;
};
export type AssetSearchListPaginationQueryVariables = {
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    collections?: Array<string> | null | undefined;
    count?: number | null | undefined;
    cursor?: string | null | undefined;
    identity?: IdentityInputType | null | undefined;
    numericTraits?: Array<TraitRangeType> | null | undefined;
    query?: string | null | undefined;
    resultModel?: SearchResultModel | null | undefined;
    sortAscending?: boolean | null | undefined;
    sortBy?: SearchSortBy | null | undefined;
    stringTraits?: Array<TraitInputType> | null | undefined;
    toggles?: Array<SearchToggle> | null | undefined;
};
export type AssetSearchListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AssetSearchListPagination_data">;
};
export type AssetSearchListPaginationQuery = {
    readonly response: AssetSearchListPaginationQueryResponse;
    readonly variables: AssetSearchListPaginationQueryVariables;
};



/*
query AssetSearchListPaginationQuery(
  $chains: [ChainScalar!]
  $collections: [CollectionSlug!]
  $count: Int = 10
  $cursor: String
  $identity: IdentityInputType
  $numericTraits: [TraitRangeType!]
  $query: String
  $resultModel: SearchResultModel
  $sortAscending: Boolean
  $sortBy: SearchSortBy
  $stringTraits: [TraitInputType!]
  $toggles: [SearchToggle!]
) {
  ...AssetSearchListPagination_data_31q0et
}

fragment AssetCardAnnotations_assetBundle on AssetBundleType {
  assetCount
}

fragment AssetCardAnnotations_asset_2qdDhQ on AssetType {
  assetContract {
    chain
    id
  }
  decimals
  relayId
  favoritesCount
  isDelisted
  isFavorite
  isFrozen
  hasUnlockableContent
  ...AssetCardBuyNow_data
  orderData {
    bestAsk {
      orderType
      relayId
      maker {
        address
      }
    }
  }
}

fragment AssetCardBuyNow_data on AssetType {
  tokenId
  relayId
  assetContract {
    address
    chain
    id
  }
  collection {
    slug
    id
  }
  orderData {
    bestAsk {
      relayId
    }
  }
}

fragment AssetCardContent_asset on AssetType {
  relayId
  name
  ...AssetMedia_asset
  assetContract {
    address
    chain
    openseaVersion
    id
  }
  tokenId
  collection {
    slug
    id
  }
  isDelisted
}

fragment AssetCardContent_assetBundle on AssetBundleType {
  assetQuantities(first: 18) {
    edges {
      node {
        asset {
          relayId
          ...AssetMedia_asset
          id
        }
        id
      }
    }
  }
}

fragment AssetCardFooter_assetBundle on AssetBundleType {
  ...AssetCardAnnotations_assetBundle
  name
  assetCount
  assetQuantities(first: 18) {
    edges {
      node {
        asset {
          collection {
            name
            relayId
            isVerified
            ...collection_url
            id
          }
          id
        }
        id
      }
    }
  }
  assetEventData {
    lastSale {
      unitPriceQuantity {
        ...AssetQuantity_data
        id
      }
    }
  }
  orderData {
    bestBid {
      orderType
      paymentAssetQuantity {
        ...AssetQuantity_data
        id
      }
    }
    bestAsk {
      closedAt
      orderType
      dutchAuctionFinalPrice
      openedAt
      priceFnEndedAt
      quantity
      decimals
      paymentAssetQuantity {
        quantity
        ...AssetQuantity_data
        id
      }
    }
  }
}

fragment AssetCardFooter_asset_2qdDhQ on AssetType {
  ...AssetCardAnnotations_asset_2qdDhQ
  name
  tokenId
  collection {
    name
    isVerified
    ...collection_url
    id
  }
  isDelisted
  assetContract {
    address
    chain
    openseaVersion
    id
  }
  assetEventData {
    lastSale {
      unitPriceQuantity {
        ...AssetQuantity_data
        id
      }
    }
  }
  orderData {
    bestBid {
      orderType
      paymentAssetQuantity {
        ...AssetQuantity_data
        id
      }
    }
    bestAsk {
      closedAt
      orderType
      dutchAuctionFinalPrice
      openedAt
      priceFnEndedAt
      quantity
      decimals
      paymentAssetQuantity {
        quantity
        ...AssetQuantity_data
        id
      }
    }
  }
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

fragment AssetSearchListPagination_data_31q0et on Query {
  search(after: $cursor, chains: $chains, collections: $collections, first: $count, identity: $identity, numericTraits: $numericTraits, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles) {
    edges {
      node {
        ...AssetSearchList_data
        __typename
      }
      cursor
    }
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment AssetSearchList_data on SearchResultType {
  asset {
    assetContract {
      address
      chain
      id
    }
    collection {
      isVerified
      relayId
      id
    }
    relayId
    tokenId
    ...AssetSelectionItem_data
    ...asset_url
    id
  }
  assetBundle {
    relayId
    id
  }
  ...Asset_data_3JpaAE
}

fragment AssetSelectionItem_data on AssetType {
  backgroundColor
  collection {
    displayData {
      cardDisplayStyle
    }
    imageUrl
    id
  }
  imageUrl
  name
  relayId
}

fragment Asset_data_3JpaAE on SearchResultType {
  asset {
    relayId
    isDelisted
    ...AssetCardContent_asset
    ...AssetCardFooter_asset_2qdDhQ
    ...AssetMedia_asset
    ...asset_url
    ...itemEvents_data
    orderData {
      bestAsk {
        paymentAssetQuantity {
          quantityInEth
          id
        }
      }
    }
    id
  }
  assetBundle {
    relayId
    ...bundle_url
    ...AssetCardContent_assetBundle
    ...AssetCardFooter_assetBundle
    orderData {
      bestAsk {
        paymentAssetQuantity {
          quantityInEth
          id
        }
      }
    }
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

fragment itemEvents_data on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
    "name": "identity"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "numericTraits"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "resultModel"
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
    "name": "stringTraits"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "toggles"
  }
],
v1 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v2 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v3 = {
  "kind": "Variable",
  "name": "identity",
  "variableName": "identity"
},
v4 = {
  "kind": "Variable",
  "name": "numericTraits",
  "variableName": "numericTraits"
},
v5 = {
  "kind": "Variable",
  "name": "sortAscending",
  "variableName": "sortAscending"
},
v6 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v7 = {
  "kind": "Variable",
  "name": "stringTraits",
  "variableName": "stringTraits"
},
v8 = {
  "kind": "Variable",
  "name": "toggles",
  "variableName": "toggles"
},
v9 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v1/*: any*/),
  (v2/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "kind": "Variable",
    "name": "querystring",
    "variableName": "query"
  },
  {
    "kind": "Variable",
    "name": "resultType",
    "variableName": "resultModel"
  },
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v15 = {
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
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
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
  "name": "name",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backgroundColor",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDelisted",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "animationUrl",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayImageUrl",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "closedAt",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dutchAuctionFinalPrice",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "openedAt",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceFnEndedAt",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetType",
  "kind": "LinkedField",
  "name": "asset",
  "plural": false,
  "selections": [
    (v23/*: any*/),
    (v16/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "symbol",
      "storageKey": null
    },
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
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "blockExplorerLink",
          "storageKey": null
        },
        (v11/*: any*/),
        (v12/*: any*/)
      ],
      "storageKey": null
    },
    (v12/*: any*/)
  ],
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetQuantityType",
  "kind": "LinkedField",
  "name": "paymentAssetQuantity",
  "plural": false,
  "selections": [
    (v29/*: any*/),
    (v30/*: any*/),
    (v12/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "quantityInEth",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = [
  (v30/*: any*/),
  (v29/*: any*/),
  (v12/*: any*/)
],
v33 = {
  "alias": null,
  "args": null,
  "concreteType": "ESOrderType",
  "kind": "LinkedField",
  "name": "bestBid",
  "plural": false,
  "selections": [
    (v24/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetQuantityType",
      "kind": "LinkedField",
      "name": "paymentAssetQuantity",
      "plural": false,
      "selections": (v32/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v34 = {
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
          "selections": (v32/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AssetSearchListPaginationQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          (v2/*: any*/),
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
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "query"
          },
          {
            "kind": "Variable",
            "name": "resultModel",
            "variableName": "resultModel"
          },
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "AssetSearchListPagination_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AssetSearchListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v9/*: any*/),
        "concreteType": "SearchTypeConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchResultType",
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
                        "concreteType": "AssetContractType",
                        "kind": "LinkedField",
                        "name": "assetContract",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "openseaVersion",
                            "storageKey": null
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
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v12/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/),
                          (v17/*: any*/),
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "tokenId",
                        "storageKey": null
                      },
                      (v19/*: any*/),
                      (v16/*: any*/),
                      (v18/*: any*/),
                      (v12/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "favoritesCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFavorite",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFrozen",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasUnlockableContent",
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
                            "name": "bestAsk",
                            "plural": false,
                            "selections": [
                              (v14/*: any*/),
                              (v24/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ESAccountType",
                                "kind": "LinkedField",
                                "name": "maker",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v25/*: any*/),
                              (v26/*: any*/),
                              (v27/*: any*/),
                              (v28/*: any*/),
                              (v29/*: any*/),
                              (v23/*: any*/),
                              (v31/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v33/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v34/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetBundleType",
                    "kind": "LinkedField",
                    "name": "assetBundle",
                    "plural": false,
                    "selections": [
                      (v14/*: any*/),
                      (v12/*: any*/),
                      (v17/*: any*/),
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
                                      (v14/*: any*/),
                                      (v21/*: any*/),
                                      (v19/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CollectionType",
                                        "kind": "LinkedField",
                                        "name": "collection",
                                        "plural": false,
                                        "selections": [
                                          (v15/*: any*/),
                                          (v12/*: any*/),
                                          (v18/*: any*/),
                                          (v14/*: any*/),
                                          (v13/*: any*/),
                                          (v17/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v20/*: any*/),
                                      (v22/*: any*/),
                                      (v12/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v12/*: any*/)
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
                        "kind": "ScalarField",
                        "name": "assetCount",
                        "storageKey": null
                      },
                      (v18/*: any*/),
                      (v34/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ESOrderDataType",
                        "kind": "LinkedField",
                        "name": "orderData",
                        "plural": false,
                        "selections": [
                          (v33/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ESOrderType",
                            "kind": "LinkedField",
                            "name": "bestAsk",
                            "plural": false,
                            "selections": [
                              (v25/*: any*/),
                              (v24/*: any*/),
                              (v26/*: any*/),
                              (v27/*: any*/),
                              (v28/*: any*/),
                              (v29/*: any*/),
                              (v23/*: any*/),
                              (v31/*: any*/)
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
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
            "kind": "ScalarField",
            "name": "totalCount",
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
        "args": (v9/*: any*/),
        "filters": [
          "chains",
          "collections",
          "identity",
          "numericTraits",
          "querystring",
          "resultType",
          "sortAscending",
          "sortBy",
          "stringTraits",
          "toggles"
        ],
        "handle": "connection",
        "key": "AssetSearchListPagination_search",
        "kind": "LinkedHandle",
        "name": "search"
      }
    ]
  },
  "params": {
    "cacheID": "2b30c75ae0e98393b80ec104af9ccd26",
    "id": null,
    "metadata": {},
    "name": "AssetSearchListPaginationQuery",
    "operationKind": "query",
    "text": "query AssetSearchListPaginationQuery(\n  $chains: [ChainScalar!]\n  $collections: [CollectionSlug!]\n  $count: Int = 10\n  $cursor: String\n  $identity: IdentityInputType\n  $numericTraits: [TraitRangeType!]\n  $query: String\n  $resultModel: SearchResultModel\n  $sortAscending: Boolean\n  $sortBy: SearchSortBy\n  $stringTraits: [TraitInputType!]\n  $toggles: [SearchToggle!]\n) {\n  ...AssetSearchListPagination_data_31q0et\n}\n\nfragment AssetCardAnnotations_assetBundle on AssetBundleType {\n  assetCount\n}\n\nfragment AssetCardAnnotations_asset_2qdDhQ on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  collection {\n    slug\n    id\n  }\n  orderData {\n    bestAsk {\n      relayId\n    }\n  }\n}\n\nfragment AssetCardContent_asset on AssetType {\n  relayId\n  name\n  ...AssetMedia_asset\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n  isDelisted\n}\n\nfragment AssetCardContent_assetBundle on AssetBundleType {\n  assetQuantities(first: 18) {\n    edges {\n      node {\n        asset {\n          relayId\n          ...AssetMedia_asset\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_assetBundle on AssetBundleType {\n  ...AssetCardAnnotations_assetBundle\n  name\n  assetCount\n  assetQuantities(first: 18) {\n    edges {\n      node {\n        asset {\n          collection {\n            name\n            relayId\n            isVerified\n            ...collection_url\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_asset_2qdDhQ on AssetType {\n  ...AssetCardAnnotations_asset_2qdDhQ\n  name\n  tokenId\n  collection {\n    name\n    isVerified\n    ...collection_url\n    id\n  }\n  isDelisted\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment AssetSearchListPagination_data_31q0et on Query {\n  search(after: $cursor, chains: $chains, collections: $collections, first: $count, identity: $identity, numericTraits: $numericTraits, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles) {\n    edges {\n      node {\n        ...AssetSearchList_data\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSearchList_data on SearchResultType {\n  asset {\n    assetContract {\n      address\n      chain\n      id\n    }\n    collection {\n      isVerified\n      relayId\n      id\n    }\n    relayId\n    tokenId\n    ...AssetSelectionItem_data\n    ...asset_url\n    id\n  }\n  assetBundle {\n    relayId\n    id\n  }\n  ...Asset_data_3JpaAE\n}\n\nfragment AssetSelectionItem_data on AssetType {\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    imageUrl\n    id\n  }\n  imageUrl\n  name\n  relayId\n}\n\nfragment Asset_data_3JpaAE on SearchResultType {\n  asset {\n    relayId\n    isDelisted\n    ...AssetCardContent_asset\n    ...AssetCardFooter_asset_2qdDhQ\n    ...AssetMedia_asset\n    ...asset_url\n    ...itemEvents_data\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n  assetBundle {\n    relayId\n    ...bundle_url\n    ...AssetCardContent_assetBundle\n    ...AssetCardFooter_assetBundle\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment itemEvents_data on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n"
  }
};
})();
(node as any).hash = '62c43dd6b25aaaada4f245405609b9ad';
export default node;
