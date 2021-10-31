/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetSearchListPagination_data = {
    readonly search: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"AssetSearchList_data">;
            } | null;
        } | null>;
        readonly totalCount: number;
    } | null;
    readonly " $refType": "AssetSearchListPagination_data";
};
export type AssetSearchListPagination_data$data = AssetSearchListPagination_data;
export type AssetSearchListPagination_data$key = {
    readonly " $data"?: AssetSearchListPagination_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetSearchListPagination_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "chains"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collections"
    },
    {
      "defaultValue": 8,
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
      "name": "identity"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "numericTraits"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "query"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "resultModel"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "sortAscending"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "sortBy"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "stringTraits"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "toggles"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "search"
        ]
      }
    ]
  },
  "name": "AssetSearchListPagination_data",
  "selections": [
    {
      "alias": "search",
      "args": [
        {
          "kind": "Variable",
          "name": "chains",
          "variableName": "chains"
        },
        {
          "kind": "Variable",
          "name": "collections",
          "variableName": "collections"
        },
        {
          "kind": "Variable",
          "name": "identity",
          "variableName": "identity"
        },
        {
          "kind": "Variable",
          "name": "numericTraits",
          "variableName": "numericTraits"
        },
        {
          "kind": "Variable",
          "name": "querystring",
          "variableName": "query"
        },
        {
          "kind": "Variable",
          "name": "resultType",
          "variableName": "resultModel"
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
        },
        {
          "kind": "Variable",
          "name": "stringTraits",
          "variableName": "stringTraits"
        },
        {
          "kind": "Variable",
          "name": "toggles",
          "variableName": "toggles"
        }
      ],
      "concreteType": "SearchTypeConnection",
      "kind": "LinkedField",
      "name": "__AssetSearchListPagination_search_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SearchTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SearchResultType",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
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
                  "name": "AssetSearchList_data"
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
          "kind": "ScalarField",
          "name": "totalCount",
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
(node as any).hash = '1dfc4fe7c16f60e2dc40d9a36cb65b77';
export default node;
