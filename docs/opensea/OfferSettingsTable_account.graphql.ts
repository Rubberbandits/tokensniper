/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferSettingsTable_account = {
    readonly account: {
        readonly assetOwnedCollections: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly relayId: string;
                    readonly slug: string;
                    readonly name: string;
                    readonly floorPrice: string | null;
                    readonly orderRule: {
                        readonly offersEnabled: boolean;
                        readonly offerMinimum: string;
                    } | null;
                    readonly " $fragmentRefs": FragmentRefs<"OfferSettingsCollection_collection">;
                } | null;
            } | null>;
        } | null;
    } | null;
    readonly " $refType": "OfferSettingsTable_account";
};
export type OfferSettingsTable_account$data = OfferSettingsTable_account;
export type OfferSettingsTable_account$key = {
    readonly " $data"?: OfferSettingsTable_account$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OfferSettingsTable_account">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "account",
  "assetOwnedCollections"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count"
    },
    {
      "kind": "RootArgument",
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
      "operation": require('./OfferSettingsTableAccountPaginationQuery.graphql')
    }
  },
  "name": "OfferSettingsTable_account",
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
          "alias": "assetOwnedCollections",
          "args": null,
          "concreteType": "CollectionTypeConnection",
          "kind": "LinkedField",
          "name": "__OfferSettingsTable_assetOwnedCollections_connection",
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
                      "name": "__typename",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "OfferSettingsCollection_collection"
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
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '7201fa1ad4be9ed0229b4c1aa8719ef9';
export default node;
