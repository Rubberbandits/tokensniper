/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type AccountFavoritesQueryVariables = {
    cursor?: string | null | undefined;
    count?: number | null | undefined;
    identity: IdentityInputType;
};
export type AccountFavoritesQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AccountFavorites_data">;
};
export type AccountFavoritesQuery = {
    readonly response: AccountFavoritesQueryResponse;
    readonly variables: AccountFavoritesQueryVariables;
};



/*
query AccountFavoritesQuery(
  $cursor: String
  $count: Int = 16
  $identity: IdentityInputType!
) {
  ...AccountFavorites_data_JfChB
}

fragment AccountFavorites_data_JfChB on Query {
  account(identity: $identity) {
    user {
      favoriteAssets(first: $count, after: $cursor) {
        edges {
          node {
            ...AssetCardAnnotations_asset
            ...AssetCardContent_asset
            ...AssetCardFooter_asset
            ...asset_url
            relayId
            tokenId
            description
            name
            imageUrl
            animationUrl
            backgroundColor
            collection {
              description
              displayData {
                cardDisplayStyle
              }
              imageUrl
              hidden
              name
              slug
              id
            }
            assetContract {
              address
              chain
              openseaVersion
              id
            }
            assetEventData {
              firstTransfer {
                timestamp
              }
              lastSale {
                unitPriceQuantity {
                  ...AssetQuantity_data
                  id
                }
              }
            }
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
      id
    }
    id
  }
}

fragment AssetCardAnnotations_asset on AssetType {
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

fragment AssetCardFooter_asset on AssetType {
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

fragment collection_url on CollectionType {
  slug
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": 16,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identity"
},
v3 = {
  "kind": "Variable",
  "name": "identity",
  "variableName": "identity"
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
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
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetType",
  "kind": "LinkedField",
  "name": "asset",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    (v12/*: any*/),
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
        (v5/*: any*/),
        (v6/*: any*/)
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v16 = [
  (v15/*: any*/),
  (v14/*: any*/),
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountFavoritesQuery",
    "selections": [
      {
        "args": [
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
          (v3/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "AccountFavorites_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "AccountFavoritesQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          (v3/*: any*/)
        ],
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
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
                "args": (v4/*: any*/),
                "concreteType": "AssetTypeConnection",
                "kind": "LinkedField",
                "name": "favoriteAssets",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetType",
                        "kind": "LinkedField",
                        "name": "node",
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
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/),
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
                          (v8/*: any*/),
                          (v9/*: any*/),
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
                            "name": "isDelisted",
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
                            "kind": "ScalarField",
                            "name": "tokenId",
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
                              (v6/*: any*/),
                              {
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
                              (v10/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "isVerified",
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              (v12/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "hidden",
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
                                "name": "bestAsk",
                                "plural": false,
                                "selections": [
                                  (v9/*: any*/),
                                  (v13/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ESAccountType",
                                    "kind": "LinkedField",
                                    "name": "maker",
                                    "plural": false,
                                    "selections": [
                                      (v7/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
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
                                    "name": "priceFnEndedAt",
                                    "storageKey": null
                                  },
                                  (v14/*: any*/),
                                  (v8/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AssetQuantityType",
                                    "kind": "LinkedField",
                                    "name": "paymentAssetQuantity",
                                    "plural": false,
                                    "selections": [
                                      (v14/*: any*/),
                                      (v15/*: any*/),
                                      (v6/*: any*/)
                                    ],
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
                                "name": "bestBid",
                                "plural": false,
                                "selections": [
                                  (v13/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AssetQuantityType",
                                    "kind": "LinkedField",
                                    "name": "paymentAssetQuantity",
                                    "plural": false,
                                    "selections": (v16/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "animationUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "backgroundColor",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayImageUrl",
                            "storageKey": null
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
                                    "selections": (v16/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ESAssetEventType",
                                "kind": "LinkedField",
                                "name": "firstTransfer",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "timestamp",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v6/*: any*/),
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
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "AccountFavorites_favoriteAssets",
                "kind": "LinkedHandle",
                "name": "favoriteAssets"
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5748f6e5bf2ce988619f40a53a274391",
    "id": null,
    "metadata": {},
    "name": "AccountFavoritesQuery",
    "operationKind": "query",
    "text": "query AccountFavoritesQuery(\n  $cursor: String\n  $count: Int = 16\n  $identity: IdentityInputType!\n) {\n  ...AccountFavorites_data_JfChB\n}\n\nfragment AccountFavorites_data_JfChB on Query {\n  account(identity: $identity) {\n    user {\n      favoriteAssets(first: $count, after: $cursor) {\n        edges {\n          node {\n            ...AssetCardAnnotations_asset\n            ...AssetCardContent_asset\n            ...AssetCardFooter_asset\n            ...asset_url\n            relayId\n            tokenId\n            description\n            name\n            imageUrl\n            animationUrl\n            backgroundColor\n            collection {\n              description\n              displayData {\n                cardDisplayStyle\n              }\n              imageUrl\n              hidden\n              name\n              slug\n              id\n            }\n            assetContract {\n              address\n              chain\n              openseaVersion\n              id\n            }\n            assetEventData {\n              firstTransfer {\n                timestamp\n              }\n              lastSale {\n                unitPriceQuantity {\n                  ...AssetQuantity_data\n                  id\n                }\n              }\n            }\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment AssetCardAnnotations_asset on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n}\n\nfragment AssetCardAnnotations_asset_2qdDhQ on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  collection {\n    slug\n    id\n  }\n  orderData {\n    bestAsk {\n      relayId\n    }\n  }\n}\n\nfragment AssetCardContent_asset on AssetType {\n  relayId\n  name\n  ...AssetMedia_asset\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n  isDelisted\n}\n\nfragment AssetCardFooter_asset on AssetType {\n  ...AssetCardAnnotations_asset_2qdDhQ\n  name\n  tokenId\n  collection {\n    name\n    isVerified\n    ...collection_url\n    id\n  }\n  isDelisted\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n"
  }
};
})();
(node as any).hash = '9f3a2149ac1a2d4412c9c2dfdcf209b2';
export default node;
