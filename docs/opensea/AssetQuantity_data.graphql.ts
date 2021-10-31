/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetQuantity_data = {
    readonly asset: {
        readonly " $fragmentRefs": FragmentRefs<"Price_data">;
    };
    readonly quantity: string;
    readonly " $refType": "AssetQuantity_data";
};
export type AssetQuantity_data$data = AssetQuantity_data;
export type AssetQuantity_data$key = {
    readonly " $data"?: AssetQuantity_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetQuantity_data",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "Price_data"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "quantity",
      "storageKey": null
    }
  ],
  "type": "AssetQuantityType",
  "abstractKey": null
};
(node as any).hash = '22c9a6cee8eb08ce2cbd589c9b42d04b';
export default node;
