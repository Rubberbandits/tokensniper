/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StringTraitFilter_data = {
    readonly counts: ReadonlyArray<{
        readonly count: number;
        readonly value: string;
    }>;
    readonly key: string;
    readonly " $refType": "StringTraitFilter_data";
};
export type StringTraitFilter_data$data = StringTraitFilter_data;
export type StringTraitFilter_data$key = {
    readonly " $data"?: StringTraitFilter_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"StringTraitFilter_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StringTraitFilter_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "StringTraitCountType",
      "kind": "LinkedField",
      "name": "counts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "key",
      "storageKey": null
    }
  ],
  "type": "StringTraitType",
  "abstractKey": null
};
(node as any).hash = '4d4b3a478f1e61da62af05d70405b6d9';
export default node;
