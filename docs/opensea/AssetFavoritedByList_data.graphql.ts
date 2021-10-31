/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetFavoritedByList_data = {
    readonly archetype: {
        readonly asset: {
            readonly favoritedBy: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly relayId: string;
                        readonly " $fragmentRefs": FragmentRefs<"AccountItem_data">;
                    } | null;
                } | null>;
            } | null;
        } | null;
    } | null;
    readonly " $refType": "AssetFavoritedByList_data";
};
export type AssetFavoritedByList_data$data = AssetFavoritedByList_data;
export type AssetFavoritedByList_data$key = {
    readonly " $data"?: AssetFavoritedByList_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetFavoritedByList_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "archetype",
  "asset",
  "favoritedBy"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "archetype"
    },
    {
      "defaultValue": 20,
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
      "operation": require('./AssetFavoritedByListQuery.graphql')
    }
  },
  "name": "AssetFavoritedByList_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "archetype",
          "variableName": "archetype"
        }
      ],
      "concreteType": "ArchetypeType",
      "kind": "LinkedField",
      "name": "archetype",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetType",
          "kind": "LinkedField",
          "name": "asset",
          "plural": false,
          "selections": [
            {
              "alias": "favoritedBy",
              "args": null,
              "concreteType": "AccountTypeConnection",
              "kind": "LinkedField",
              "name": "__AssetFavoritedByList_asset_favoritedBy_connection",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AccountTypeEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "AccountType",
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
                          "name": "AccountItem_data"
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
(node as any).hash = '4d9d1968330512d34fa7ff84f72d3264';
export default node;
