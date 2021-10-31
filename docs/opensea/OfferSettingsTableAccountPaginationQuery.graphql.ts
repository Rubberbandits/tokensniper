/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferSettingsTableAccountPaginationQueryVariables = {
    count?: number | null | undefined;
    cursor?: string | null | undefined;
};
export type OfferSettingsTableAccountPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"OfferSettingsTable_account">;
};
export type OfferSettingsTableAccountPaginationQuery = {
    readonly response: OfferSettingsTableAccountPaginationQueryResponse;
    readonly variables: OfferSettingsTableAccountPaginationQueryVariables;
};



/*
query OfferSettingsTableAccountPaginationQuery(
  $count: Int
  $cursor: String
) {
  ...OfferSettingsTable_account
}

fragment OfferSettingsCollection_collection on CollectionType {
  assetCount
  imageUrl
  isVerified
  name
  floorPrice
  slug
  ...collection_url
}

fragment OfferSettingsTable_account on Query {
  account {
    assetOwnedCollections(after: $cursor, first: $count) {
      edges {
        node {
          relayId
          slug
          name
          floorPrice
          orderRule {
            offersEnabled
            offerMinimum
          }
          ...OfferSettingsCollection_collection
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
}

fragment collection_url on CollectionType {
  slug
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
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
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OfferSettingsTableAccountPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "OfferSettingsTable_account"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OfferSettingsTableAccountPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "CollectionTypeConnection",
            "kind": "LinkedField",
            "name": "assetOwnedCollections",
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "relayId",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "slug",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "floorPrice",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CollectionOrderRuleType",
                        "kind": "LinkedField",
                        "name": "orderRule",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "offersEnabled",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "offerMinimum",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "assetCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "imageUrl",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isVerified",
                        "storageKey": null
                      },
                      (v2/*: any*/),
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
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "OfferSettingsTable_assetOwnedCollections",
            "kind": "LinkedHandle",
            "name": "assetOwnedCollections"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3f4b935ff8ac08c19fd9b09dfa788c9d",
    "id": null,
    "metadata": {},
    "name": "OfferSettingsTableAccountPaginationQuery",
    "operationKind": "query",
    "text": "query OfferSettingsTableAccountPaginationQuery(\n  $count: Int\n  $cursor: String\n) {\n  ...OfferSettingsTable_account\n}\n\nfragment OfferSettingsCollection_collection on CollectionType {\n  assetCount\n  imageUrl\n  isVerified\n  name\n  floorPrice\n  slug\n  ...collection_url\n}\n\nfragment OfferSettingsTable_account on Query {\n  account {\n    assetOwnedCollections(after: $cursor, first: $count) {\n      edges {\n        node {\n          relayId\n          slug\n          name\n          floorPrice\n          orderRule {\n            offersEnabled\n            offerMinimum\n          }\n          ...OfferSettingsCollection_collection\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    id\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n"
  }
};
})();
(node as any).hash = '7201fa1ad4be9ed0229b4c1aa8719ef9';
export default node;
