/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RankingsPage_data = {
    readonly rankings: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly createdDate: string;
                readonly name: string;
                readonly slug: string;
                readonly logo: string | null;
                readonly isVerified: boolean;
                readonly floorPrice: string | null;
                readonly stats: {
                    readonly marketCap: number;
                    readonly numOwners: number;
                    readonly totalSupply: number;
                    readonly sevenDayChange: number;
                    readonly sevenDayVolume: number;
                    readonly oneDayChange: number;
                    readonly oneDayVolume: number;
                    readonly thirtyDayChange: number;
                    readonly thirtyDayVolume: number;
                    readonly totalVolume: number;
                };
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "RankingsPage_data";
};
export type RankingsPage_data$data = RankingsPage_data;
export type RankingsPage_data$key = {
    readonly " $data"?: RankingsPage_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RankingsPage_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "rankings"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "chain"
    },
    {
      "kind": "RootArgument",
      "name": "count"
    },
    {
      "kind": "RootArgument",
      "name": "createdAfter"
    },
    {
      "kind": "RootArgument",
      "name": "cursor"
    },
    {
      "kind": "RootArgument",
      "name": "parents"
    },
    {
      "kind": "RootArgument",
      "name": "sortBy"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./RankingsPagePaginationQuery.graphql')
    }
  },
  "name": "RankingsPage_data",
  "selections": [
    {
      "alias": "rankings",
      "args": [
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
          "name": "parents",
          "variableName": "parents"
        },
        {
          "kind": "Variable",
          "name": "sortBy",
          "variableName": "sortBy"
        }
      ],
      "concreteType": "CollectionTypeConnection",
      "kind": "LinkedField",
      "name": "__RankingsPage_rankings_connection",
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '1747aeb912fa5868a464dd282db2397d';
export default node;
