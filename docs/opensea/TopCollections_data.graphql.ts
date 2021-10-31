/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TopCollections_data = {
    readonly collections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string;
                readonly id: string;
                readonly name: string;
                readonly logo: string | null;
                readonly createdDate: string;
                readonly isVerified: boolean;
                readonly stats: {
                    readonly oneDayChange: number;
                    readonly oneDayVolume: number;
                    readonly sevenDayChange: number;
                    readonly sevenDayVolume: number;
                    readonly thirtyDayChange: number;
                    readonly thirtyDayVolume: number;
                };
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "TopCollections_data";
};
export type TopCollections_data$data = TopCollections_data;
export type TopCollections_data$key = {
    readonly " $data"?: TopCollections_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TopCollections_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 15,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "includeHidden"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "sortAscending"
    },
    {
      "defaultValue": "SEVEN_DAY_VOLUME",
      "kind": "LocalArgument",
      "name": "sortBy"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "TopCollections_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "count"
        },
        {
          "kind": "Variable",
          "name": "includeHidden",
          "variableName": "includeHidden"
        },
        {
          "kind": "Variable",
          "name": "sortAscending",
          "variableName": "sortAscending"
        },
        {
          "kind": "Variable",
          "name": "sortBy",
          "variableName": "sortBy"
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
                  "name": "id",
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
(node as any).hash = '8cbe5710781782282aa635e240326cf3';
export default node;
