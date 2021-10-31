/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionSort = "ASSET_COUNT" | "AVERAGE_PRICE" | "CREATED_DATE" | "MARKET_CAP" | "NAME" | "NUM_OWNERS" | "NUM_REPORTS" | "ONE_DAY_VOLUME" | "SEVEN_DAY_AVERAGE_PRICE" | "SEVEN_DAY_CHANGE" | "SEVEN_DAY_SALES" | "SEVEN_DAY_VOLUME" | "THIRTY_DAY_VOLUME" | "TOTAL_SALES" | "TOTAL_SUPPLY" | "TOTAL_VOLUME" | "%future added value";
export type EventType = "ASSET_APPROVE" | "ASSET_TRANSFER" | "AUCTION_CANCELLED" | "AUCTION_CREATED" | "AUCTION_SUCCESSFUL" | "BID_ENTERED" | "BID_WITHDRAWN" | "CUSTOM" | "OFFER_ENTERED" | "PAYOUT" | "%future added value";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type ActivitySearchQueryVariables = {
    categories?: Array<string> | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    collectionQuery?: string | null | undefined;
    collection?: string | null | undefined;
    collections?: Array<string> | null | undefined;
    collectionSortBy?: CollectionSort | null | undefined;
    eventTypes?: Array<EventType> | null | undefined;
    identity?: IdentityInputType | null | undefined;
    includeHiddenCollections?: boolean | null | undefined;
    isSingleCollection: boolean;
};
export type ActivitySearchQueryResponse = {
    readonly query: {
        readonly " $fragmentRefs": FragmentRefs<"ActivitySearch_data">;
    };
};
export type ActivitySearchQuery = {
    readonly response: ActivitySearchQueryResponse;
    readonly variables: ActivitySearchQueryVariables;
};



/*
query ActivitySearchQuery(
  $categories: [CollectionSlug!]
  $chains: [ChainScalar!]
  $collectionQuery: String
  $collection: CollectionSlug
  $collections: [CollectionSlug!]
  $collectionSortBy: CollectionSort
  $includeHiddenCollections: Boolean
  $isSingleCollection: Boolean!
) {
  query {
    ...ActivitySearch_data_1Nzzg1
  }
}

fragment ActivitySearchFilter_data_3mLsus on Query {
  ...CollectionFilter_data_3aeBqg
}

fragment ActivitySearch_data_1Nzzg1 on Query {
  collection(collection: $collection) @include(if: $isSingleCollection) {
    includeTradingHistory
    id
  }
  ...ActivitySearchFilter_data_3mLsus
  ...SearchPills_data_2Kg4Sq
}

fragment CollectionFilter_data_3aeBqg on Query {
  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {
    edges {
      node {
        assetCount
        imageUrl
        name
        slug
        isVerified
        id
      }
    }
  }
  collections(chains: $chains, first: 100, includeHidden: $includeHiddenCollections, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {
    edges {
      node {
        assetCount
        imageUrl
        name
        slug
        isVerified
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

fragment CollectionModalContent_data on CollectionType {
  description
  imageUrl
  name
  slug
}

fragment SearchPills_data_2Kg4Sq on Query {
  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {
    edges {
      node {
        imageUrl
        name
        slug
        ...CollectionModalContent_data
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categories"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "chains"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collection"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collectionQuery"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collectionSortBy"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collections"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "eventTypes"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identity"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "includeHiddenCollections"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isSingleCollection"
},
v10 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v11 = {
  "kind": "Variable",
  "name": "collection",
  "variableName": "collection"
},
v12 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetCount",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v19 = [
  (v10/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  {
    "kind": "Variable",
    "name": "includeHidden",
    "variableName": "includeHiddenCollections"
  },
  {
    "kind": "Variable",
    "name": "parents",
    "variableName": "categories"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "collectionQuery"
  },
  {
    "kind": "Variable",
    "name": "sortBy",
    "variableName": "collectionSortBy"
  }
];
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
    "name": "ActivitySearchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "categories",
                "variableName": "categories"
              },
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "kind": "Variable",
                "name": "collectionQuery",
                "variableName": "collectionQuery"
              },
              {
                "kind": "Variable",
                "name": "collectionSortBy",
                "variableName": "collectionSortBy"
              },
              (v12/*: any*/),
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
                "kind": "Variable",
                "name": "includeHiddenCollections",
                "variableName": "includeHiddenCollections"
              },
              {
                "kind": "Variable",
                "name": "isSingleCollection",
                "variableName": "isSingleCollection"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ActivitySearch_data"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v5/*: any*/),
      (v4/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/)
    ],
    "kind": "Operation",
    "name": "ActivitySearchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": "selectedCollections",
            "args": [
              (v12/*: any*/),
              {
                "kind": "Literal",
                "name": "first",
                "value": 25
              },
              {
                "kind": "Literal",
                "name": "includeHidden",
                "value": true
              }
            ],
            "concreteType": "CollectionTypeConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionTypeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionType",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "description",
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
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
            "concreteType": "CollectionTypeConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionTypeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionType",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
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
            "args": (v19/*: any*/),
            "filters": [
              "assetOwner",
              "assetCreator",
              "onlyPrivateAssets",
              "chains",
              "includeHidden",
              "parents",
              "query",
              "sortBy"
            ],
            "handle": "connection",
            "key": "CollectionFilter_collections",
            "kind": "LinkedHandle",
            "name": "collections"
          },
          {
            "condition": "isSingleCollection",
            "kind": "Condition",
            "passingValue": true,
            "selections": [
              {
                "alias": null,
                "args": [
                  (v11/*: any*/)
                ],
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "includeTradingHistory",
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a78996a981fdcb32025873f3a5d77aac",
    "id": null,
    "metadata": {},
    "name": "ActivitySearchQuery",
    "operationKind": "query",
    "text": "query ActivitySearchQuery(\n  $categories: [CollectionSlug!]\n  $chains: [ChainScalar!]\n  $collectionQuery: String\n  $collection: CollectionSlug\n  $collections: [CollectionSlug!]\n  $collectionSortBy: CollectionSort\n  $includeHiddenCollections: Boolean\n  $isSingleCollection: Boolean!\n) {\n  query {\n    ...ActivitySearch_data_1Nzzg1\n  }\n}\n\nfragment ActivitySearchFilter_data_3mLsus on Query {\n  ...CollectionFilter_data_3aeBqg\n}\n\nfragment ActivitySearch_data_1Nzzg1 on Query {\n  collection(collection: $collection) @include(if: $isSingleCollection) {\n    includeTradingHistory\n    id\n  }\n  ...ActivitySearchFilter_data_3mLsus\n  ...SearchPills_data_2Kg4Sq\n}\n\nfragment CollectionFilter_data_3aeBqg on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(chains: $chains, first: 100, includeHidden: $includeHiddenCollections, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionModalContent_data on CollectionType {\n  description\n  imageUrl\n  name\n  slug\n}\n\nfragment SearchPills_data_2Kg4Sq on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        imageUrl\n        name\n        slug\n        ...CollectionModalContent_data\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '80b60932a88c57abed97ace1cd4071e7';
export default node;
