/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BuyNowCheckoutModalContent_data = {
    readonly order: {
        readonly relayId: string;
        readonly item: {
            readonly collection?: {
                readonly " $fragmentRefs": FragmentRefs<"verification_data">;
            } | undefined;
            readonly relayId?: string | undefined;
        };
        readonly takerAssetBundle: {
            readonly assetQuantities: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly asset: {
                            readonly relayId: string;
                        };
                    } | null;
                } | null>;
            };
        };
    };
    readonly " $refType": "BuyNowCheckoutModalContent_data";
};
export type BuyNowCheckoutModalContent_data$data = BuyNowCheckoutModalContent_data;
export type BuyNowCheckoutModalContent_data$key = {
    readonly " $data"?: BuyNowCheckoutModalContent_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BuyNowCheckoutModalContent_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "orderId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "BuyNowCheckoutModalContent_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "order",
          "variableName": "orderId"
        }
      ],
      "concreteType": "OrderV2Type",
      "kind": "LinkedField",
      "name": "order",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CollectionType",
                  "kind": "LinkedField",
                  "name": "collection",
                  "plural": false,
                  "selections": [
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
                  "storageKey": null
                },
                (v0/*: any*/)
              ],
              "type": "AssetType",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetBundleType",
          "kind": "LinkedField",
          "name": "takerAssetBundle",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "first",
                  "value": 1
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
                            (v0/*: any*/)
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
              "storageKey": "assetQuantities(first:1)"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'a3b159a92638eba0681900c0a2d1c432';
export default node;
