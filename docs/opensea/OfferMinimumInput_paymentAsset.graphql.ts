/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferMinimumInput_paymentAsset = {
    readonly asset: {
        readonly decimals: number | null;
        readonly imageUrl: string | null;
        readonly symbol: string | null;
        readonly usdSpotPrice: number | null;
    };
    readonly " $refType": "OfferMinimumInput_paymentAsset";
};
export type OfferMinimumInput_paymentAsset$data = OfferMinimumInput_paymentAsset;
export type OfferMinimumInput_paymentAsset$key = {
    readonly " $data"?: OfferMinimumInput_paymentAsset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OfferMinimumInput_paymentAsset">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OfferMinimumInput_paymentAsset",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetType",
      "kind": "LinkedField",
      "name": "asset",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "decimals",
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
          "name": "symbol",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "usdSpotPrice",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PaymentAssetType",
  "abstractKey": null
};
(node as any).hash = 'a22f806f55a1e88ff9108266637847bb';
export default node;
