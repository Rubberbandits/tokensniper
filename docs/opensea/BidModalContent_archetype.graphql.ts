/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type BidModalContent_archetype = {
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
            readonly " $fragmentRefs": FragmentRefs<"verification_data">;
        };
    } | null;
    readonly quantity: string;
    readonly ownedQuantity: string | null;
    readonly " $refType": "BidModalContent_archetype";
};
export type BidModalContent_archetype$data = BidModalContent_archetype;
export type BidModalContent_archetype$key = {
    readonly " $data"?: BidModalContent_archetype$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BidModalContent_archetype">;
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
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "chain"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "identity"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "BidModalContent_archetype",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            },
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
            },
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
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "identity",
          "variableName": "identity"
        }
      ],
      "kind": "ScalarField",
      "name": "ownedQuantity",
      "storageKey": null
    }
  ],
  "type": "ArchetypeType",
  "abstractKey": null
};
})();
(node as any).hash = 'dc8f8a487826d001c86e9a6cdb809572';
export default node;
