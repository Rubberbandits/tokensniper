/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionLink_collection = {
    readonly name: string;
    readonly " $fragmentRefs": FragmentRefs<"collection_url" | "verification_data">;
    readonly " $refType": "CollectionLink_collection";
};
export type CollectionLink_collection$data = CollectionLink_collection;
export type CollectionLink_collection$key = {
    readonly " $data"?: CollectionLink_collection$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionLink_collection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionLink_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "collection_url",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ]
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "verification_data",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isMintable",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isSafelisted",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isVerified",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "CollectionType",
  "abstractKey": null
};
(node as any).hash = 'e69a1514969c903875f30435639f88c8';
export default node;
