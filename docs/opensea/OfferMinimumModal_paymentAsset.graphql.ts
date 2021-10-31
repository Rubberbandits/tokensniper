/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferMinimumModal_paymentAsset = {
    readonly " $fragmentRefs": FragmentRefs<"OfferMinimumInput_paymentAsset">;
    readonly " $refType": "OfferMinimumModal_paymentAsset";
};
export type OfferMinimumModal_paymentAsset$data = OfferMinimumModal_paymentAsset;
export type OfferMinimumModal_paymentAsset$key = {
    readonly " $data"?: OfferMinimumModal_paymentAsset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OfferMinimumModal_paymentAsset">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OfferMinimumModal_paymentAsset",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OfferMinimumInput_paymentAsset"
    }
  ],
  "type": "PaymentAssetType",
  "abstractKey": null
};
(node as any).hash = 'eb44442c09df663bf2a6e106d13d8198';
export default node;
