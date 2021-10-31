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
export type OfferSearchQueryVariables = {
    categories?: Array<string> | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    collectionQuery?: string | null | undefined;
    collections?: Array<string> | null | undefined;
    collectionSortBy?: CollectionSort | null | undefined;
    identity?: IdentityInputType | null | undefined;
    includeHiddenCollections?: boolean | null | undefined;
};
export type OfferSearchQueryResponse = {
    readonly query: {
        readonly " $fragmentRefs": FragmentRefs<"OfferSearch_data">;
    };
};
export type OfferSearchQuery = {
    readonly response: OfferSearchQueryResponse;
    readonly variables: OfferSearchQueryVariables;
};



/*
query OfferSearchQuery(
  $categories: [CollectionSlug!]
  $chains: [ChainScalar!]
  $collectionQuery: String
  $collections: [CollectionSlug!]
  $collectionSortBy: CollectionSort
  $includeHiddenCollections: Boolean
) {
  query {
    ...OfferSearch_data_hZKT3
  }
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

fragment OfferSearchFilter_data_3mLsus on Query {
  ...CollectionFilter_data_3aeBqg
}

fragment OfferSearch_data_hZKT3 on Query {
  ...OfferSearchFilter_data_3mLsus
  ...SearchPills_data_2Kg4Sq
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
  "name": "collectionQuery"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collectionSortBy"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collections"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identity"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "includeHiddenCollections"
},
v7 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v8 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetCount",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
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
  "name": "id",
  "storageKey": null
},
v15 = [
  (v7/*: any*/),
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
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "OfferSearchQuery",
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
              (v7/*: any*/),
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
              (v8/*: any*/),
              {
                "kind": "Variable",
                "name": "identity",
                "variableName": "identity"
              },
              {
                "kind": "Variable",
                "name": "includeHiddenCollections",
                "variableName": "includeHiddenCollections"
              }
            ],
            "kind": "FragmentSpread",
            "name": "OfferSearch_data"
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
      (v2/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "OfferSearchQuery",
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
              (v8/*: any*/),
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
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
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
            "args": (v15/*: any*/),
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
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
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
            "args": (v15/*: any*/),
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
    "cacheID": "4b1b058b60721c384eff9e04216c39da",
    "id": null,
    "metadata": {},
    "name": "OfferSearchQuery",
    "operationKind": "query",
    "text": "query OfferSearchQuery(\n  $categories: [CollectionSlug!]\n  $chains: [ChainScalar!]\n  $collectionQuery: String\n  $collections: [CollectionSlug!]\n  $collectionSortBy: CollectionSort\n  $includeHiddenCollections: Boolean\n) {\n  query {\n    ...OfferSearch_data_hZKT3\n  }\n}\n\nfragment CollectionFilter_data_3aeBqg on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(chains: $chains, first: 100, includeHidden: $includeHiddenCollections, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionModalContent_data on CollectionType {\n  description\n  imageUrl\n  name\n  slug\n}\n\nfragment OfferSearchFilter_data_3mLsus on Query {\n  ...CollectionFilter_data_3aeBqg\n}\n\nfragment OfferSearch_data_hZKT3 on Query {\n  ...OfferSearchFilter_data_3mLsus\n  ...SearchPills_data_2Kg4Sq\n}\n\nfragment SearchPills_data_2Kg4Sq on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        imageUrl\n        name\n        slug\n        ...CollectionModalContent_data\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ebdb4b2d4b4f74a5f6ad11daf395cff7';
export default node;
