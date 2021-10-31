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
export type AssetSearchFilterLazyQueryVariables = {
    assetOwner?: IdentityInputType | null | undefined;
    assetCreator?: IdentityInputType | null | undefined;
    collectionQuery?: string | null | undefined;
    collection?: string | null | undefined;
    collections?: Array<string | null> | null | undefined;
    categories?: Array<string | null> | null | undefined;
    includeHiddenCollections?: boolean | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null> | null | undefined;
    collectionSortBy?: CollectionSort | null | undefined;
};
export type AssetSearchFilterLazyQueryResponse = {
    readonly filter: {
        readonly " $fragmentRefs": FragmentRefs<"AssetSearchFilter_data">;
    };
};
export type AssetSearchFilterLazyQuery = {
    readonly response: AssetSearchFilterLazyQueryResponse;
    readonly variables: AssetSearchFilterLazyQueryVariables;
};



/*
query AssetSearchFilterLazyQuery(
  $assetOwner: IdentityInputType
  $assetCreator: IdentityInputType
  $collectionQuery: String
  $collection: CollectionSlug
  $collections: [CollectionSlug]
  $categories: [CollectionSlug]
  $includeHiddenCollections: Boolean
  $chains: [ChainScalar]
  $collectionSortBy: CollectionSort
) {
  filter: query {
    ...AssetSearchFilter_data_3iJcxz
  }
}

fragment AssetSearchFilter_data_3iJcxz on Query {
  ...CollectionFilter_data_33zOl3
  collection(collection: $collection) {
    numericTraits {
      key
      value {
        max
        min
      }
      ...NumericTraitFilter_data
    }
    stringTraits {
      key
      ...StringTraitFilter_data
    }
    id
  }
  ...PaymentFilter_data_2YoIWt
}

fragment CollectionFilter_data_33zOl3 on Query {
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
  collections(assetOwner: $assetOwner, assetCreator: $assetCreator, chains: $chains, first: 100, includeHidden: $includeHiddenCollections, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {
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

fragment NumericTraitFilter_data on NumericTraitTypePair {
  key
  value {
    max
    min
  }
}

fragment PaymentFilter_data_2YoIWt on Query {
  paymentAssets(first: 10) {
    edges {
      node {
        symbol
        relayId
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
  PaymentFilter_collection: collection(collection: $collection) {
    paymentAssets {
      symbol
      relayId
      id
    }
    id
  }
}

fragment StringTraitFilter_data on StringTraitType {
  counts {
    count
    value
  }
  key
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "assetCreator"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "assetOwner"
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
  "name": "collection"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collectionQuery"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collectionSortBy"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collections"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "includeHiddenCollections"
},
v9 = {
  "kind": "Variable",
  "name": "assetCreator",
  "variableName": "assetCreator"
},
v10 = {
  "kind": "Variable",
  "name": "assetOwner",
  "variableName": "assetOwner"
},
v11 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v12 = {
  "kind": "Variable",
  "name": "collection",
  "variableName": "collection"
},
v13 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetCount",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "name": "isVerified",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v20 = [
  (v9/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
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
],
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v23 = {
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
},
v24 = [
  (v12/*: any*/)
],
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v26 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
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
  "name": "relayId",
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
      (v8/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AssetSearchFilterLazyQuery",
    "selections": [
      {
        "alias": "filter",
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": [
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "kind": "Variable",
                "name": "categories",
                "variableName": "categories"
              },
              (v11/*: any*/),
              (v12/*: any*/),
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
              (v13/*: any*/),
              (v13/*: any*/),
              {
                "kind": "Variable",
                "name": "includeHiddenCollections",
                "variableName": "includeHiddenCollections"
              }
            ],
            "kind": "FragmentSpread",
            "name": "AssetSearchFilter_data"
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
      (v1/*: any*/),
      (v0/*: any*/),
      (v5/*: any*/),
      (v4/*: any*/),
      (v7/*: any*/),
      (v2/*: any*/),
      (v8/*: any*/),
      (v3/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "AssetSearchFilterLazyQuery",
    "selections": [
      {
        "alias": "filter",
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": "selectedCollections",
            "args": [
              (v13/*: any*/),
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
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/)
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
            "args": (v20/*: any*/),
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
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v21/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/)
                ],
                "storageKey": null
              },
              (v23/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v20/*: any*/),
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
            "alias": null,
            "args": (v24/*: any*/),
            "concreteType": "CollectionType",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "NumericTraitTypePair",
                "kind": "LinkedField",
                "name": "numericTraits",
                "plural": true,
                "selections": [
                  (v25/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NumericTraitType",
                    "kind": "LinkedField",
                    "name": "value",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "max",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "min",
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
                "concreteType": "StringTraitType",
                "kind": "LinkedField",
                "name": "stringTraits",
                "plural": true,
                "selections": [
                  (v25/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StringTraitCountType",
                    "kind": "LinkedField",
                    "name": "counts",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "count",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "value",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v26/*: any*/),
            "concreteType": "PaymentAssetTypeConnection",
            "kind": "LinkedField",
            "name": "paymentAssets",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PaymentAssetTypeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PaymentAssetType",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v27/*: any*/),
                      (v28/*: any*/),
                      (v19/*: any*/),
                      (v21/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/)
                ],
                "storageKey": null
              },
              (v23/*: any*/)
            ],
            "storageKey": "paymentAssets(first:10)"
          },
          {
            "alias": null,
            "args": (v26/*: any*/),
            "filters": [
              "asset_Symbol_Icontains"
            ],
            "handle": "connection",
            "key": "PaymentFilter_paymentAssets",
            "kind": "LinkedHandle",
            "name": "paymentAssets"
          },
          {
            "alias": "PaymentFilter_collection",
            "args": (v24/*: any*/),
            "concreteType": "CollectionType",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PaymentAssetType",
                "kind": "LinkedField",
                "name": "paymentAssets",
                "plural": true,
                "selections": [
                  (v27/*: any*/),
                  (v28/*: any*/),
                  (v19/*: any*/)
                ],
                "storageKey": null
              },
              (v19/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2d2f689c072dd44e92b853de4b53fd61",
    "id": null,
    "metadata": {},
    "name": "AssetSearchFilterLazyQuery",
    "operationKind": "query",
    "text": "query AssetSearchFilterLazyQuery(\n  $assetOwner: IdentityInputType\n  $assetCreator: IdentityInputType\n  $collectionQuery: String\n  $collection: CollectionSlug\n  $collections: [CollectionSlug]\n  $categories: [CollectionSlug]\n  $includeHiddenCollections: Boolean\n  $chains: [ChainScalar]\n  $collectionSortBy: CollectionSort\n) {\n  filter: query {\n    ...AssetSearchFilter_data_3iJcxz\n  }\n}\n\nfragment AssetSearchFilter_data_3iJcxz on Query {\n  ...CollectionFilter_data_33zOl3\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment CollectionFilter_data_33zOl3 on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(assetOwner: $assetOwner, assetCreator: $assetCreator, chains: $chains, first: 100, includeHidden: $includeHiddenCollections, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment NumericTraitFilter_data on NumericTraitTypePair {\n  key\n  value {\n    max\n    min\n  }\n}\n\nfragment PaymentFilter_data_2YoIWt on Query {\n  paymentAssets(first: 10) {\n    edges {\n      node {\n        symbol\n        relayId\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  PaymentFilter_collection: collection(collection: $collection) {\n    paymentAssets {\n      symbol\n      relayId\n      id\n    }\n    id\n  }\n}\n\nfragment StringTraitFilter_data on StringTraitType {\n  counts {\n    count\n    value\n  }\n  key\n}\n"
  }
};
})();
(node as any).hash = '7819c65d20eb507df03004b53f9f4057';
export default node;
