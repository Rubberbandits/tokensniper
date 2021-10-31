/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferSearchFilter_data = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionFilter_data">;
    readonly " $refType": "OfferSearchFilter_data";
};
export type OfferSearchFilter_data$data = OfferSearchFilter_data;
export type OfferSearchFilter_data$key = {
    readonly " $data"?: OfferSearchFilter_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OfferSearchFilter_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
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
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "includeHiddenCollections"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "OfferSearchFilter_data",
  "selections": [
    {
      "args": [
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
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '703ca27f6119be19ec0f31701951c2be';
export default node;
