/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type BidModalContent_bundle = {
    readonly assetQuantities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly asset: {
                    readonly assetContract: {
                        readonly address: string;
                        readonly chain: ChainIdentifier;
                    };
                    readonly decimals: number | null;
                    readonly relayId: string;
                    readonly collection: {
                        readonly slug: string;
                        readonly paymentAssets: ReadonlyArray<{
                            readonly relayId: string;
                            readonly asset: {
                                readonly assetContract: {
                                    readonly address: string;
                                    readonly chain: ChainIdentifier;
                                };
                                readonly decimals: number | null;
                                readonly symbol: string | null;
                                readonly usdSpotPrice: number | null;
                                readonly relayId: string;
                            };
                            readonly " $fragmentRefs": FragmentRefs<"PaymentTokenInputV2_data">;
                        }>;
                    };
                };
                readonly quantity: string;
            } | null;
        } | null>;
    };
    readonly slug: string | null;
    readonly " $refType": "BidModalContent_bundle";
};
export type BidModalContent_bundle$data = BidModalContent_bundle;
export type BidModalContent_bundle$key = {
    readonly " $data"?: BidModalContent_bundle$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BidModalContent_bundle">;
};



const node: ReaderFragment = (function(){
var v0 = {
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
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chain",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "chain"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "BidModalContent_bundle",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 30
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
                    (v0/*: any*/),
                    (v1/*: any*/),
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "CollectionType",
                      "kind": "LinkedField",
                      "name": "collection",
                      "plural": false,
                      "selections": [
                        (v3/*: any*/),
                        {
                          "alias": null,
                          "args": [
                            {
                              "kind": "Variable",
                              "name": "chain",
                              "variableName": "chain"
                            }
                          ],
                          "concreteType": "PaymentAssetType",
                          "kind": "LinkedField",
                          "name": "paymentAssets",
                          "plural": true,
                          "selections": [
                            (v2/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "AssetType",
                              "kind": "LinkedField",
                              "name": "asset",
                              "plural": false,
                              "selections": [
                                (v0/*: any*/),
                                (v1/*: any*/),
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
                                },
                                (v2/*: any*/)
                              ],
                              "storageKey": null
                            },
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "PaymentTokenInputV2_data"
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "quantity",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "assetQuantities(first:30)"
    },
    (v3/*: any*/)
  ],
  "type": "AssetBundleType",
  "abstractKey": null
};
})();
(node as any).hash = '4bc87bb580ed8b2e4352552c73d01ff0';
export default node;
