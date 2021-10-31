/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NumericTraitFilter_data = {
    readonly key: string;
    readonly value: {
        readonly max: number;
        readonly min: number;
    };
    readonly " $refType": "NumericTraitFilter_data";
};
export type NumericTraitFilter_data$data = NumericTraitFilter_data;
export type NumericTraitFilter_data$key = {
    readonly " $data"?: NumericTraitFilter_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NumericTraitFilter_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NumericTraitFilter_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "key",
      "storageKey": null
    },
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
    }
  ],
  "type": "NumericTraitTypePair",
  "abstractKey": null
};
(node as any).hash = '415a843e247528c0608c0a67dceb4e0b';
export default node;
