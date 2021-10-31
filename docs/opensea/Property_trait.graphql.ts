/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TraitDisplayType = "AUTHOR" | "BOOST_NUMBER" | "BOOST_PERCENTAGE" | "DATE" | "NONE" | "NUMBER" | "%future added value";
export type Property_trait = {
    readonly displayType: TraitDisplayType | null;
    readonly traitCount: number | null;
    readonly traitType: string;
    readonly value: string | null;
    readonly " $refType": "Property_trait";
};
export type Property_trait$data = Property_trait;
export type Property_trait$key = {
    readonly " $data"?: Property_trait$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Property_trait">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Property_trait",
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
      "name": "traitCount",
      "storageKey": null
    },
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
      "name": "value",
      "storageKey": null
    }
  ],
  "type": "TraitType",
  "abstractKey": null
};
(node as any).hash = '3f71bc51df9a15f2e98e5512e05b5002';
export default node;
