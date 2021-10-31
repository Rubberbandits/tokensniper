/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Date_trait = {
    readonly traitType: string;
    readonly floatValue: number | null;
    readonly intValue: string | null;
    readonly " $refType": "Date_trait";
};
export type Date_trait$data = Date_trait;
export type Date_trait$key = {
    readonly " $data"?: Date_trait$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Date_trait">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Date_trait",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "traitType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "floatValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "intValue",
      "storageKey": null
    }
  ],
  "type": "TraitType",
  "abstractKey": null
};
(node as any).hash = 'aeadcb2268804ebd0ba7e73b54daec49';
export default node;
