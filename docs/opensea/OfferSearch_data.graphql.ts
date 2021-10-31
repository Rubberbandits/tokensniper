/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferSearch_data = {
    readonly " $fragmentRefs": FragmentRefs<"OfferSearchFilter_data" | "SearchPills_data">;
    readonly " $refType": "OfferSearch_data";
};
export type OfferSearch_data$data = OfferSearch_data;
export type OfferSearch_data$key = {
    readonly " $data"?: OfferSearch_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OfferSearch_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
};
return {
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
      "name": "identity"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "includeHiddenCollections"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "OfferSearch_data",
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
          "name": "collectionQuery",
          "variableName": "collectionQuery"
        },
        {
          "kind": "Variable",
          "name": "collectionSortBy",
          "variableName": "collectionSortBy"
        },
        (v0/*: any*/),
        {
          "kind": "Variable",
          "name": "includeHiddenCollections",
          "variableName": "includeHiddenCollections"
        }
      ],
      "kind": "FragmentSpread",
      "name": "OfferSearchFilter_data"
    },
    {
      "args": [
        (v0/*: any*/)
      ],
      "kind": "FragmentSpread",
      "name": "SearchPills_data"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '1dd3879827365ce6481c6f34529ec4df';
export default node;
