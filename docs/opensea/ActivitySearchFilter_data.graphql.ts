/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ActivitySearchFilter_data = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionFilter_data">;
    readonly " $refType": "ActivitySearchFilter_data";
};
export type ActivitySearchFilter_data$data = ActivitySearchFilter_data;
export type ActivitySearchFilter_data$key = {
    readonly " $data"?: ActivitySearchFilter_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ActivitySearchFilter_data">;
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
  "name": "ActivitySearchFilter_data",
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
(node as any).hash = '8659620ba56be69cb1f199dca6960748';
export default node;
