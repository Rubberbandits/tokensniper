/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetCardContent_assetBundle = {
    readonly assetQuantities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly asset: {
                    readonly relayId: string;
                    readonly " $fragmentRefs": FragmentRefs<"AssetMedia_asset">;
                };
            } | null;
        } | null>;
    };
    readonly " $refType": "AssetCardContent_assetBundle";
};
export type AssetCardContent_assetBundle$data = AssetCardContent_assetBundle;
export type AssetCardContent_assetBundle$key = {
    readonly " $data"?: AssetCardContent_assetBundle$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetCardContent_assetBundle">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetCardContent_assetBundle",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 18
        }
      ],
      "concreteType": "AssetQuantityTypeConnection",
      "kind": "LinkedField",
      "name": "assetQuantities",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetQuantityTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetQuantityType",
              "kind": "LinkedField",
              "name": "node",
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
                      "name": "relayId",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "AssetMedia_asset"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "assetQuantities(first:18)"
    }
  ],
  "type": "AssetBundleType",
  "abstractKey": null
};
(node as any).hash = '4024b265c8541eae9c58ebab5d0cafaf';
export default node;
