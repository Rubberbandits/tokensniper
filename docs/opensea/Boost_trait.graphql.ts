/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TraitDisplayType = "AUTHOR" | "BOOST_NUMBER" | "BOOST_PERCENTAGE" | "DATE" | "NONE" | "NUMBER" | "%future added value";
export type Boost_trait = {
    readonly displayType: TraitDisplayType | null;
    readonly floatValue: number | null;
    readonly intValue: string | null;
    readonly traitType: string;
    readonly " $refType": "Boost_trait";
};
export type Boost_trait$data = Boost_trait;
export type Boost_trait$key = {
    readonly " $data"?: Boost_trait$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Boost_trait">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Boost_trait",
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
      "name": "traitType",
      "storageKey": null
    }
  ],
  "type": "TraitType",
  "abstractKey": null
};
(node as any).hash = 'bf094a33c409475d734f9d027926e1ff';
export default node;
