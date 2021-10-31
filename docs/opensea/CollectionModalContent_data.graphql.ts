/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionModalContent_data = {
    readonly description: string | null;
    readonly imageUrl: string | null;
    readonly name: string;
    readonly slug: string;
    readonly " $refType": "CollectionModalContent_data";
};
export type CollectionModalContent_data$data = CollectionModalContent_data;
export type CollectionModalContent_data$key = {
    readonly " $data"?: CollectionModalContent_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionModalContent_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionModalContent_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
(node as any).hash = '5ce4211cfe2eece9d90d835bf7b1f70d';
export default node;
