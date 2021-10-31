/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Property_collection = {
    readonly slug: string;
    readonly stats: {
        readonly totalSupply: number;
    };
    readonly " $refType": "Property_collection";
};
export type Property_collection$data = Property_collection;
export type Property_collection$key = {
    readonly " $data"?: Property_collection$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Property_collection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Property_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionStatsType",
      "kind": "LinkedField",
      "name": "stats",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalSupply",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CollectionType",
  "abstractKey": null
};
(node as any).hash = 'be2f8a61b0f6a271992517beb7bef416';
export default node;
