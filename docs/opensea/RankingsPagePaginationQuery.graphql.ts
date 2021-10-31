/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionSort = "ASSET_COUNT" | "AVERAGE_PRICE" | "CREATED_DATE" | "MARKET_CAP" | "NAME" | "NUM_OWNERS" | "NUM_REPORTS" | "ONE_DAY_VOLUME" | "SEVEN_DAY_AVERAGE_PRICE" | "SEVEN_DAY_CHANGE" | "SEVEN_DAY_SALES" | "SEVEN_DAY_VOLUME" | "THIRTY_DAY_VOLUME" | "TOTAL_SALES" | "TOTAL_SUPPLY" | "TOTAL_VOLUME" | "%future added value";
export type RankingsPagePaginationQueryVariables = {
    chain?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    count?: number | null | undefined;
    createdAfter?: string | null | undefined;
    cursor?: string | null | undefined;
    parents?: Array<string> | null | undefined;
    sortBy?: CollectionSort | null | undefined;
};
export type RankingsPagePaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RankingsPage_data">;
};
export type RankingsPagePaginationQuery = {
    readonly response: RankingsPagePaginationQueryResponse;
    readonly variables: RankingsPagePaginationQueryVariables;
};



/*
query RankingsPagePaginationQuery(
  $chain: [ChainScalar!]
  $count: Int
  $createdAfter: DateTime
  $cursor: String
  $parents: [CollectionSlug!]
  $sortBy: CollectionSort
) {
  ...RankingsPage_data
}

fragment RankingsPage_data on Query {
  rankings(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, parents: $parents, createdAfter: $createdAfter) {
    edges {
      node {
        createdDate
        name
        slug
        logo
        isVerified
        floorPrice
        stats {
          marketCap
          numOwners
          totalSupply
          sevenDayChange
          sevenDayVolume
          oneDayChange
          oneDayVolume
          thirtyDayChange
          thirtyDayVolume
          totalVolume
          id
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
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "chain"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "createdAfter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "parents"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sortBy"
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
    "name": "chains",
    "variableName": "chain"
  },
  {
    "kind": "Variable",
    "name": "createdAfter",
    "variableName": "createdAfter"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Variable",
    "name": "parents",
    "variableName": "parents"
  },
  {
    "kind": "Variable",
    "name": "sortBy",
    "variableName": "sortBy"
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
    "name": "RankingsPagePaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RankingsPage_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RankingsPagePaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CollectionTypeConnection",
        "kind": "LinkedField",
        "name": "rankings",
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
                    "name": "createdDate",
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
                    "name": "slug",
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
                    "name": "isVerified",
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
                    "concreteType": "CollectionStatsType",
                    "kind": "LinkedField",
                    "name": "stats",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "marketCap",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "numOwners",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "totalSupply",
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "totalVolume",
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
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
        "filters": [
          "chains",
          "sortBy",
          "parents",
          "createdAfter"
        ],
        "handle": "connection",
        "key": "RankingsPage_rankings",
        "kind": "LinkedHandle",
        "name": "rankings"
      }
    ]
  },
  "params": {
    "cacheID": "719287b6836daf0b2a4b7c312a530da7",
    "id": null,
    "metadata": {},
    "name": "RankingsPagePaginationQuery",
    "operationKind": "query",
    "text": "query RankingsPagePaginationQuery(\n  $chain: [ChainScalar!]\n  $count: Int\n  $createdAfter: DateTime\n  $cursor: String\n  $parents: [CollectionSlug!]\n  $sortBy: CollectionSort\n) {\n  ...RankingsPage_data\n}\n\nfragment RankingsPage_data on Query {\n  rankings(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, parents: $parents, createdAfter: $createdAfter) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        floorPrice\n        stats {\n          marketCap\n          numOwners\n          totalSupply\n          sevenDayChange\n          sevenDayVolume\n          oneDayChange\n          oneDayVolume\n          thirtyDayChange\n          thirtyDayVolume\n          totalVolume\n          id\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1747aeb912fa5868a464dd282db2397d';
export default node;
