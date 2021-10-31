/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemOwnersList_data = {
    readonly archetype: {
        readonly asset: {
            readonly assetOwners: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly relayId: string;
                        readonly quantity: string;
                        readonly owner: {
                            readonly " $fragmentRefs": FragmentRefs<"AccountItem_data">;
                        };
                    } | null;
                } | null>;
            } | null;
        } | null;
    } | null;
    readonly " $refType": "ItemOwnersList_data";
};
export type ItemOwnersList_data$data = ItemOwnersList_data;
export type ItemOwnersList_data$key = {
    readonly " $data"?: ItemOwnersList_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemOwnersList_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "archetype",
  "asset",
  "assetOwners"
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
      "operation": require('./ItemOwnersListQuery.graphql')
    }
  },
  "name": "ItemOwnersList_data",
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
              "alias": "assetOwners",
              "args": null,
              "concreteType": "AssetOwnershipTypeConnection",
              "kind": "LinkedField",
              "name": "__ItemOwnersList_assetOwners_connection",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetOwnershipTypeEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "AssetOwnershipType",
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
                          "name": "quantity",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "AccountType",
                          "kind": "LinkedField",
                          "name": "owner",
                          "plural": false,
                          "selections": [
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
(node as any).hash = '8209fd24122206ac93422e5ee7da2fb0';
export default node;
