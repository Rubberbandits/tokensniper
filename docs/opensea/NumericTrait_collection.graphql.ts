/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NumericTrait_collection = {
    readonly numericTraits: ReadonlyArray<{
        readonly key: string;
        readonly value: {
            readonly max: number;
            readonly min: number;
        };
    }>;
    readonly slug: string;
    readonly " $refType": "NumericTrait_collection";
};
export type NumericTrait_collection$data = NumericTrait_collection;
export type NumericTrait_collection$key = {
    readonly " $data"?: NumericTrait_collection$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NumericTrait_collection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NumericTrait_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "NumericTraitTypePair",
      "kind": "LinkedField",
      "name": "numericTraits",
      "plural": true,
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
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "CollectionType",
  "abstractKey": null
};
(node as any).hash = '762c8ef4fcca49b51a1be03e2b94993d';
export default node;
