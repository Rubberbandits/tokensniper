/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferSettingsTable_ethPaymentAsset = {
    readonly " $fragmentRefs": FragmentRefs<"OfferMinimumInput_paymentAsset" | "OfferMinimumModal_paymentAsset">;
    readonly " $refType": "OfferSettingsTable_ethPaymentAsset";
};
export type OfferSettingsTable_ethPaymentAsset$data = OfferSettingsTable_ethPaymentAsset;
export type OfferSettingsTable_ethPaymentAsset$key = {
    readonly " $data"?: OfferSettingsTable_ethPaymentAsset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OfferSettingsTable_ethPaymentAsset">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OfferSettingsTable_ethPaymentAsset",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OfferMinimumInput_paymentAsset"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OfferMinimumModal_paymentAsset"
    }
  ],
  "type": "PaymentAssetType",
  "abstractKey": null
};
(node as any).hash = '23cf283051b23c8fd5cafd73299aa4ef';
export default node;
