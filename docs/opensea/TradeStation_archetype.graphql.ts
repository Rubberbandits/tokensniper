/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type TradeStation_archetype = {
    readonly asset: {
        readonly assetContract: {
            readonly chain: ChainIdentifier;
        };
        readonly assetOwners: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly owner: {
                        readonly " $fragmentRefs": FragmentRefs<"wallet_accountKey">;
                    };
                } | null;
            } | null>;
        } | null;
        readonly collection: {
            readonly " $fragmentRefs": FragmentRefs<"verification_data">;
        };
        readonly isListable: boolean;
        readonly relayId: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"BidModalContent_archetype">;
    readonly " $refType": "TradeStation_archetype";
};
export type TradeStation_archetype$data = TradeStation_archetype;
export type TradeStation_archetype$key = {
    readonly " $data"?: TradeStation_archetype$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TradeStation_archetype">;
};



const node: ReaderFragment = {
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
  "name": "TradeStation_archetype",
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
              "name": "chain",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 1
            }
          ],
          "concreteType": "AssetOwnershipTypeConnection",
          "kind": "LinkedField",
          "name": "assetOwners",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetOwnershipTypeEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetOwnershipType",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "AccountType",
                      "kind": "LinkedField",
                      "name": "owner",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "InlineDataFragmentSpread",
                          "name": "wallet_accountKey",
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "address",
                              "storageKey": null
                            }
                          ]
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
          "storageKey": "assetOwners(first:1)"
        },
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isListable",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "relayId",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": [
        {
          "kind": "Variable",
          "name": "chain",
          "variableName": "chain"
        },
        {
          "kind": "Variable",
          "name": "identity",
          "variableName": "identity"
        }
      ],
      "kind": "FragmentSpread",
      "name": "BidModalContent_archetype"
    }
  ],
  "type": "ArchetypeType",
  "abstractKey": null
};
(node as any).hash = 'c58dca3d60f3e0b6833b8141e753d171';
export default node;
