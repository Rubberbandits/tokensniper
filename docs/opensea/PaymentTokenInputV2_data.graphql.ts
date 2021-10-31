/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PaymentTokenInputV2_data = ReadonlyArray<{
    readonly relayId: string;
    readonly asset: {
        readonly decimals: number | null;
        readonly symbol: string | null;
        readonly usdSpotPrice: number | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"PaymentAsset_data">;
    readonly " $refType": "PaymentTokenInputV2_data";
}>;
export type PaymentTokenInputV2_data$data = PaymentTokenInputV2_data;
export type PaymentTokenInputV2_data$key = ReadonlyArray<{
    readonly " $data"?: PaymentTokenInputV2_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PaymentTokenInputV2_data">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "PaymentTokenInputV2_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "relayId",
      "storageKey": null
    },
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PaymentAsset_data"
    }
  ],
  "type": "PaymentAssetType",
  "abstractKey": null
};
(node as any).hash = 'c3451c847568e62b5b14792be081099c';
export default node;
