/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SellFees_collection = {
    readonly devSellerFeeBasisPoints: number;
    readonly openseaSellerFeeBasisPoints: number;
    readonly " $refType": "SellFees_collection";
};
export type SellFees_collection$data = SellFees_collection;
export type SellFees_collection$key = {
    readonly " $data"?: SellFees_collection$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SellFees_collection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SellFees_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "devSellerFeeBasisPoints",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "openseaSellerFeeBasisPoints",
      "storageKey": null
    }
  ],
  "type": "CollectionType",
  "abstractKey": null
};
(node as any).hash = 'dac8dc95b89427f0b9a39feae81e6f3b';
export default node;
