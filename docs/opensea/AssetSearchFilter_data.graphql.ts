/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetSearchFilter_data = {
    readonly collection: {
        readonly numericTraits: ReadonlyArray<{
            readonly key: string;
            readonly value: {
                readonly max: number;
                readonly min: number;
            };
            readonly " $fragmentRefs": FragmentRefs<"NumericTraitFilter_data">;
        }>;
        readonly stringTraits: ReadonlyArray<{
            readonly key: string;
            readonly " $fragmentRefs": FragmentRefs<"StringTraitFilter_data">;
        }>;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CollectionFilter_data" | "PaymentFilter_data">;
    readonly " $refType": "AssetSearchFilter_data";
};
export type AssetSearchFilter_data$data = AssetSearchFilter_data;
export type AssetSearchFilter_data$key = {
    readonly " $data"?: AssetSearchFilter_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetSearchFilter_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "collection",
    "variableName": "collection"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "assetCreator"
    },
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
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "onlyPrivateAssets"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetSearchFilter_data",
  "selections": [
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "CollectionType",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "NumericTraitTypePair",
          "kind": "LinkedField",
          "name": "numericTraits",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "NumericTraitType",
              "kind": "LinkedField",
              "name": "value",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "max",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "min",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "NumericTraitFilter_data"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "StringTraitType",
          "kind": "LinkedField",
          "name": "stringTraits",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "StringTraitFilter_data"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "condition": "includeCollectionFilter",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "args": [
            {
              "kind": "Variable",
              "name": "assetCreator",
              "variableName": "assetCreator"
            },
            {
              "kind": "Variable",
              "name": "assetOwner",
              "variableName": "assetOwner"
            },
            {
              "kind": "Variable",
              "name": "categories",
              "variableName": "categories"
            },
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
              "name": "includeHidden",
              "variableName": "includeHiddenCollections"
            },
            {
              "kind": "Variable",
              "name": "onlyPrivateAssets",
              "variableName": "onlyPrivateAssets"
            },
            {
              "kind": "Variable",
              "name": "query",
              "variableName": "collectionQuery"
            },
            {
              "kind": "Variable",
              "name": "sortBy",
              "variableName": "collectionSortBy"
            }
          ],
          "kind": "FragmentSpread",
          "name": "CollectionFilter_data"
        }
      ]
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "PaymentFilter_data"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '43f42515c43558787d11ca26dd6734dc';
export default node;
