/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PriceHistoryGraph_data = {
    readonly results: ReadonlyArray<{
        readonly bucketStart: string;
        readonly bucketEnd: string;
        readonly quantity: number;
        readonly volume: {
            readonly asset: {
                readonly assetContract: {
                    readonly symbol: string;
                };
                readonly decimals: number | null;
            };
            readonly quantity: string;
        };
    }>;
    readonly " $refType": "PriceHistoryGraph_data";
};
export type PriceHistoryGraph_data$data = PriceHistoryGraph_data;
export type PriceHistoryGraph_data$key = {
    readonly " $data"?: PriceHistoryGraph_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PriceHistoryGraph_data">;
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
  "name": "PriceHistoryGraph_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TradeHistoryDataPoint",
      "kind": "LinkedField",
      "name": "results",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "bucketStart",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "bucketEnd",
          "storageKey": null
        },
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
                  "concreteType": "AssetContractType",
                  "kind": "LinkedField",
                  "name": "assetContract",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "symbol",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
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
(node as any).hash = '46ead625f78f5fd6c79dd3c362965b86';
export default node;
