/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrendingCollectionsList_data = {
    readonly trendingCollections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly relayId: string;
                readonly " $fragmentRefs": FragmentRefs<"CollectionCard_data">;
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "TrendingCollectionsList_data";
};
export type TrendingCollectionsList_data$data = TrendingCollectionsList_data;
export type TrendingCollectionsList_data$key = {
    readonly " $data"?: TrendingCollectionsList_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TrendingCollectionsList_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "trendingCollections"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "categories"
    },
    {
      "defaultValue": 12,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
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
      "operation": require('./TrendingCollectionsListQuery.graphql')
    }
  },
  "name": "TrendingCollectionsList_data",
  "selections": [
    {
      "alias": "trendingCollections",
      "args": [
        {
          "kind": "Variable",
          "name": "categories",
          "variableName": "categories"
        }
      ],
      "concreteType": "CollectionTypeConnection",
      "kind": "LinkedField",
      "name": "__TrendingCollectionsList_trendingCollections_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CollectionCard_data"
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
(node as any).hash = '4a9a3007c0b7abf09a7ffe0bf67dc54e';
export default node;
