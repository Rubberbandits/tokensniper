/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetSearch_data = {
    readonly search: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"AssetSearchList_data">;
            } | null;
        } | null>;
        readonly totalCount: number;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"AssetSearchFilter_data" | "SearchPills_data">;
    readonly " $refType": "AssetSearch_data";
};
export type AssetSearch_data$data = AssetSearch_data;
export type AssetSearch_data$key = {
    readonly " $data"?: AssetSearch_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetSearch_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Variable",
  "name": "categories",
  "variableName": "categories"
},
v1 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v2 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v3 = {
  "kind": "Variable",
  "name": "identity",
  "variableName": "identity"
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "assetOwner"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "categories"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "chains"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collection"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collectionQuery"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collectionSortBy"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collections"
    },
    {
      "defaultValue": 32,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "creator"
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
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "includeCollectionFilter"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "includeHiddenCollections"
    },
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "includeSearchFilterData"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "isPrivate"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "numericTraits"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "paymentAssets"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "priceFilter"
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
      "name": "safelistRequestStatuses"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "shouldShowQuantity"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "showContextMenu"
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
  "name": "AssetSearch_data",
  "selections": [
    {
      "alias": "search",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "kind": "Variable",
          "name": "creator",
          "variableName": "creator"
        },
        (v3/*: any*/),
        {
          "kind": "Variable",
          "name": "isPrivate",
          "variableName": "isPrivate"
        },
        {
          "kind": "Variable",
          "name": "numericTraits",
          "variableName": "numericTraits"
        },
        {
          "kind": "Variable",
          "name": "paymentAssets",
          "variableName": "paymentAssets"
        },
        {
          "kind": "Variable",
          "name": "priceFilter",
          "variableName": "priceFilter"
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
          "name": "safelistRequestStatuses",
          "variableName": "safelistRequestStatuses"
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
      "name": "__AssetSearch_search_connection",
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
                  "args": [
                    (v3/*: any*/),
                    {
                      "kind": "Variable",
                      "name": "shouldShowQuantity",
                      "variableName": "shouldShowQuantity"
                    },
                    {
                      "kind": "Variable",
                      "name": "showContextMenu",
                      "variableName": "showContextMenu"
                    }
                  ],
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
    },
    {
      "condition": "includeSearchFilterData",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "args": [
            {
              "kind": "Variable",
              "name": "assetCreator",
              "variableName": "creator"
            },
            {
              "kind": "Variable",
              "name": "assetOwner",
              "variableName": "assetOwner"
            },
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "kind": "Variable",
              "name": "collection",
              "variableName": "collection"
            },
            {
              "kind": "Variable",
              "name": "collectionQuery",
              "variableName": "collectionQuery"
            },
            {
              "kind": "Variable",
              "name": "collectionSortBy",
              "variableName": "collectionSortBy"
            },
            (v2/*: any*/),
            {
              "kind": "Variable",
              "name": "includeCollectionFilter",
              "variableName": "includeCollectionFilter"
            },
            {
              "kind": "Variable",
              "name": "includeHiddenCollections",
              "variableName": "includeHiddenCollections"
            },
            {
              "kind": "Variable",
              "name": "onlyPrivateAssets",
              "variableName": "isPrivate"
            }
          ],
          "kind": "FragmentSpread",
          "name": "AssetSearchFilter_data"
        }
      ]
    },
    {
      "args": [
        (v2/*: any*/)
      ],
      "kind": "FragmentSpread",
      "name": "SearchPills_data"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'a205519a0b27b3b308214fa7899a889e';
export default node;
