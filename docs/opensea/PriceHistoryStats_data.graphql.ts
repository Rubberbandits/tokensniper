/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PriceHistoryStats_data = {
    readonly results: ReadonlyArray<{
        readonly quantity: number;
        readonly volume: {
            readonly asset: {
                readonly decimals: number | null;
            };
            readonly quantity: string;
        };
    }>;
    readonly " $refType": "PriceHistoryStats_data";
};
export type PriceHistoryStats_data$data = PriceHistoryStats_data;
export type PriceHistoryStats_data$key = {
    readonly " $data"?: PriceHistoryStats_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PriceHistoryStats_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PriceHistoryStats_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TradeHistoryDataPoint",
      "kind": "LinkedField",
      "name": "results",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetQuantityType",
          "kind": "LinkedField",
          "name": "volume",
          "plural": false,
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
                }
              ],
              "storageKey": null
            },
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TradeHistoryType",
  "abstractKey": null
};
})();
(node as any).hash = '322e2c6fcb01977f2129ecbd46064e43';
export default node;
