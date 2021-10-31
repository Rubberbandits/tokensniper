/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Boost_collection = {
    readonly numericTraits: ReadonlyArray<{
        readonly key: string;
        readonly value: {
            readonly max: number;
            readonly min: number;
        };
    }>;
    readonly slug: string;
    readonly " $refType": "Boost_collection";
};
export type Boost_collection$data = Boost_collection;
export type Boost_collection$key = {
    readonly " $data"?: Boost_collection$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Boost_collection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Boost_collection",
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
(node as any).hash = '6568f30aa32e41c8e7712b163fa1a76c';
export default node;
