/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionSort = "ASSET_COUNT" | "AVERAGE_PRICE" | "CREATED_DATE" | "MARKET_CAP" | "NAME" | "NUM_OWNERS" | "NUM_REPORTS" | "ONE_DAY_VOLUME" | "SEVEN_DAY_AVERAGE_PRICE" | "SEVEN_DAY_CHANGE" | "SEVEN_DAY_SALES" | "SEVEN_DAY_VOLUME" | "THIRTY_DAY_VOLUME" | "TOTAL_SALES" | "TOTAL_SUPPLY" | "TOTAL_VOLUME" | "%future added value";
export type TopCollectionsLazyQueryVariables = {
    sortBy?: CollectionSort | null | undefined;
};
export type TopCollectionsLazyQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TopCollections_data">;
};
export type TopCollectionsLazyQuery = {
    readonly response: TopCollectionsLazyQueryResponse;
    readonly variables: TopCollectionsLazyQueryVariables;
};



/*
query TopCollectionsLazyQuery(
  $sortBy: CollectionSort
) {
  ...TopCollections_data_34jhwD
}

fragment TopCollections_data_34jhwD on Query {
  collections(first: 15, sortBy: $sortBy, sortAscending: false, includeHidden: true) {
    edges {
      node {
        slug
        id
        name
        logo
        createdDate
        isVerified
        stats {
          oneDayChange
          oneDayVolume
          sevenDayChange
          sevenDayVolume
          thirtyDayChange
          thirtyDayVolume
          id
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sortBy"
  }
],
v1 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
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
    "name": "TopCollectionsLazyQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "TopCollections_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TopCollectionsLazyQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 15
          },
          {
            "kind": "Literal",
            "name": "includeHidden",
            "value": true
          },
          {
            "kind": "Literal",
            "name": "sortAscending",
            "value": false
          },
          (v1/*: any*/)
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slug",
                    "storageKey": null
                  },
                  (v2/*: any*/),
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
                    "name": "logo",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isVerified",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionStatsType",
                    "kind": "LinkedField",
                    "name": "stats",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "oneDayChange",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "oneDayVolume",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "sevenDayChange",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "sevenDayVolume",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "thirtyDayChange",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "thirtyDayVolume",
                        "storageKey": null
                      },
                      (v2/*: any*/)
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5e5f8c491992a14df6af16447cc89f90",
    "id": null,
    "metadata": {},
    "name": "TopCollectionsLazyQuery",
    "operationKind": "query",
    "text": "query TopCollectionsLazyQuery(\n  $sortBy: CollectionSort\n) {\n  ...TopCollections_data_34jhwD\n}\n\nfragment TopCollections_data_34jhwD on Query {\n  collections(first: 15, sortBy: $sortBy, sortAscending: false, includeHidden: true) {\n    edges {\n      node {\n        slug\n        id\n        name\n        logo\n        createdDate\n        isVerified\n        stats {\n          oneDayChange\n          oneDayVolume\n          sevenDayChange\n          sevenDayVolume\n          thirtyDayChange\n          thirtyDayVolume\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '54074de55447e194b4a0d497071360dc';
export default node;
