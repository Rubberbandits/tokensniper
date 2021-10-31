/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PaymentFilterQueryVariables = {
    collection?: string | null | undefined;
    count?: number | null | undefined;
    cursor?: string | null | undefined;
    symbolSubstring?: string | null | undefined;
};
export type PaymentFilterQueryResponse = {
    readonly query: {
        readonly " $fragmentRefs": FragmentRefs<"PaymentFilter_data">;
    };
};
export type PaymentFilterQuery = {
    readonly response: PaymentFilterQueryResponse;
    readonly variables: PaymentFilterQueryVariables;
};



/*
query PaymentFilterQuery(
  $collection: CollectionSlug
  $count: Int
  $cursor: String
  $symbolSubstring: String
) {
  query {
    ...PaymentFilter_data_1kdP05
  }
}

fragment PaymentFilter_data_1kdP05 on Query {
  paymentAssets(after: $cursor, asset_Symbol_Icontains: $symbolSubstring, first: $count) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "collection"
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
    "name": "symbolSubstring"
  }
],
v1 = {
  "kind": "Variable",
  "name": "collection",
  "variableName": "collection"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "asset_Symbol_Icontains",
    "variableName": "symbolSubstring"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v5 = {
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
    "name": "PaymentFilterQuery",
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
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              {
                "kind": "Variable",
                "name": "symbolSubstring",
                "variableName": "symbolSubstring"
              }
            ],
            "kind": "FragmentSpread",
            "name": "PaymentFilter_data"
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
    "name": "PaymentFilterQuery",
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
            "alias": null,
            "args": (v2/*: any*/),
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
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
            "args": (v2/*: any*/),
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
            "args": [
              (v1/*: any*/)
            ],
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "13249b6878d44ad7b0fea04b0649f8f4",
    "id": null,
    "metadata": {},
    "name": "PaymentFilterQuery",
    "operationKind": "query",
    "text": "query PaymentFilterQuery(\n  $collection: CollectionSlug\n  $count: Int\n  $cursor: String\n  $symbolSubstring: String\n) {\n  query {\n    ...PaymentFilter_data_1kdP05\n  }\n}\n\nfragment PaymentFilter_data_1kdP05 on Query {\n  paymentAssets(after: $cursor, asset_Symbol_Icontains: $symbolSubstring, first: $count) {\n    edges {\n      node {\n        symbol\n        relayId\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  PaymentFilter_collection: collection(collection: $collection) {\n    paymentAssets {\n      symbol\n      relayId\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '06313b170f03e7d41043d245d72f42e4';
export default node;
