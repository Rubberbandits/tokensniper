/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TraitDisplayType = "AUTHOR" | "BOOST_NUMBER" | "BOOST_PERCENTAGE" | "DATE" | "NONE" | "NUMBER" | "%future added value";
export type NumericTrait_trait = {
    readonly displayType: TraitDisplayType | null;
    readonly floatValue: number | null;
    readonly intValue: string | null;
    readonly maxValue: number | null;
    readonly traitType: string;
    readonly " $refType": "NumericTrait_trait";
};
export type NumericTrait_trait$data = NumericTrait_trait;
export type NumericTrait_trait$key = {
    readonly " $data"?: NumericTrait_trait$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NumericTrait_trait">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NumericTrait_trait",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayType",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "maxValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "traitType",
      "storageKey": null
    }
  ],
  "type": "TraitType",
  "abstractKey": null
};
(node as any).hash = '3d9c3f10e7e584e927017b370f5e746d';
export default node;
