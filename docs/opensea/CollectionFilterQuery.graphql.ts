/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionSort = "ASSET_COUNT" | "AVERAGE_PRICE" | "CREATED_DATE" | "MARKET_CAP" | "NAME" | "NUM_OWNERS" | "NUM_REPORTS" | "ONE_DAY_VOLUME" | "SEVEN_DAY_AVERAGE_PRICE" | "SEVEN_DAY_CHANGE" | "SEVEN_DAY_SALES" | "SEVEN_DAY_VOLUME" | "THIRTY_DAY_VOLUME" | "TOTAL_SALES" | "TOTAL_SUPPLY" | "TOTAL_VOLUME" | "%future added value";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type CollectionFilterQueryVariables = {
    assetOwner?: IdentityInputType | null | undefined;
    categories?: Array<string> | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    collections?: Array<string> | null | undefined;
    count?: number | null | undefined;
    cursor?: string | null | undefined;
    includeHidden?: boolean | null | undefined;
    query?: string | null | undefined;
    sortBy?: CollectionSort | null | undefined;
};
export type CollectionFilterQueryResponse = {
    readonly query: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionFilter_data">;
    };
};
export type CollectionFilterQuery = {
    readonly response: CollectionFilterQueryResponse;
    readonly variables: CollectionFilterQueryVariables;
};



/*
query CollectionFilterQuery(
  $assetOwner: IdentityInputType
  $categories: [CollectionSlug!]
  $chains: [ChainScalar!]
  $collections: [CollectionSlug!]
  $count: Int
  $cursor: String
  $includeHidden: Boolean
  $query: String
  $sortBy: CollectionSort
) {
  query {
    ...CollectionFilter_data_421KmG
  }
}

fragment CollectionFilter_data_421KmG on Query {
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
  collections(after: $cursor, assetOwner: $assetOwner, chains: $chains, first: $count, includeHidden: $includeHidden, parents: $categories, query: $query, sortBy: $sortBy) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "assetOwner"
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
    "defaultValue": null,
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
    "name": "includeHidden"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sortBy"
  }
],
v1 = {
  "kind": "Variable",
  "name": "assetOwner",
  "variableName": "assetOwner"
},
v2 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v3 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v4 = {
  "kind": "Variable",
  "name": "includeHidden",
  "variableName": "includeHidden"
},
v5 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v6 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = [
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
  (v4/*: any*/),
  {
    "kind": "Variable",
    "name": "parents",
    "variableName": "categories"
  },
  (v5/*: any*/),
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionFilterQuery",
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
              (v1/*: any*/),
              {
                "kind": "Variable",
                "name": "categories",
                "variableName": "categories"
              },
              (v2/*: any*/),
              (v3/*: any*/),
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "CollectionFilter_data"
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
    "name": "CollectionFilterQuery",
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
              (v3/*: any*/),
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
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/)
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
            "args": (v13/*: any*/),
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
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
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
            "args": (v13/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b6d8603a9c393eb5416ea2f5dc4198d8",
    "id": null,
    "metadata": {},
    "name": "CollectionFilterQuery",
    "operationKind": "query",
    "text": "query CollectionFilterQuery(\n  $assetOwner: IdentityInputType\n  $categories: [CollectionSlug!]\n  $chains: [ChainScalar!]\n  $collections: [CollectionSlug!]\n  $count: Int\n  $cursor: String\n  $includeHidden: Boolean\n  $query: String\n  $sortBy: CollectionSort\n) {\n  query {\n    ...CollectionFilter_data_421KmG\n  }\n}\n\nfragment CollectionFilter_data_421KmG on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(after: $cursor, assetOwner: $assetOwner, chains: $chains, first: $count, includeHidden: $includeHidden, parents: $categories, query: $query, sortBy: $sortBy) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b146519cb2015b658d8c0838c8d82430';
export default node;
