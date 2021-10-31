/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CardDisplayStyle = "CONTAIN" | "COVER" | "PADDED" | "%future added value";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type AccountFavorites_data = {
    readonly account: {
        readonly user: {
            readonly favoriteAssets: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly relayId: string;
                        readonly tokenId: string;
                        readonly description: string | null;
                        readonly name: string | null;
                        readonly imageUrl: string | null;
                        readonly animationUrl: string | null;
                        readonly backgroundColor: string | null;
                        readonly collection: {
                            readonly description: string | null;
                            readonly displayData: {
                                readonly cardDisplayStyle: CardDisplayStyle | null;
                            };
                            readonly imageUrl: string | null;
                            readonly hidden: boolean;
                            readonly name: string;
                            readonly slug: string;
                        };
                        readonly assetContract: {
                            readonly address: string;
                            readonly chain: ChainIdentifier;
                            readonly openseaVersion: string | null;
                        };
                        readonly assetEventData: {
                            readonly firstTransfer: {
                                readonly timestamp: string;
                            } | null;
                            readonly lastSale: {
                                readonly unitPriceQuantity: {
                                    readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                                } | null;
                            } | null;
                        };
                        readonly " $fragmentRefs": FragmentRefs<"AssetCardAnnotations_asset" | "AssetCardContent_asset" | "AssetCardFooter_asset" | "asset_url">;
                    } | null;
                } | null>;
            } | null;
        } | null;
    } | null;
    readonly " $refType": "AccountFavorites_data";
};
export type AccountFavorites_data$data = AccountFavorites_data;
export type AccountFavorites_data$key = {
    readonly " $data"?: AccountFavorites_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AccountFavorites_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "identity"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "account",
          "user",
          "favoriteAssets"
        ]
      }
    ]
  },
  "name": "AccountFavorites_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "identity",
          "variableName": "identity"
        }
      ],
      "concreteType": "AccountType",
      "kind": "LinkedField",
      "name": "account",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserType",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            {
              "alias": "favoriteAssets",
              "args": null,
              "concreteType": "AssetTypeConnection",
              "kind": "LinkedField",
              "name": "__AccountFavorites_favoriteAssets_connection",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetTypeEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "AssetType",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "relayId",
                          "storageKey": null
                        },
                        (v0/*: any*/),
                        (v1/*: any*/),
                        (v2/*: any*/),
                        (v3/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "animationUrl",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "backgroundColor",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "CollectionType",
                          "kind": "LinkedField",
                          "name": "collection",
                          "plural": false,
                          "selections": [
                            (v1/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "DisplayDataType",
                              "kind": "LinkedField",
                              "name": "displayData",
                              "plural": false,
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "cardDisplayStyle",
                                  "storageKey": null
                                }
                              ],
                              "storageKey": null
                            },
                            (v3/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "hidden",
                              "storageKey": null
                            },
                            (v2/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "slug",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "AssetContractType",
                          "kind": "LinkedField",
                          "name": "assetContract",
                          "plural": false,
                          "selections": [
                            (v4/*: any*/),
                            (v5/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "openseaVersion",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "ESAssetEventDataType",
                          "kind": "LinkedField",
                          "name": "assetEventData",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "ESAssetEventType",
                              "kind": "LinkedField",
                              "name": "firstTransfer",
                              "plural": false,
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "timestamp",
                                  "storageKey": null
                                }
                              ],
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "ESAssetEventType",
                              "kind": "LinkedField",
                              "name": "lastSale",
                              "plural": false,
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "concreteType": "AssetQuantityType",
                                  "kind": "LinkedField",
                                  "name": "unitPriceQuantity",
                                  "plural": false,
                                  "selections": [
                                    {
                                      "args": null,
                                      "kind": "FragmentSpread",
                                      "name": "AssetQuantity_data"
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
                          "name": "__typename",
                          "storageKey": null
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "AssetCardAnnotations_asset"
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "AssetCardContent_asset"
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "AssetCardFooter_asset"
                        },
                        {
                          "kind": "InlineDataFragmentSpread",
                          "name": "asset_url",
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "AssetContractType",
                              "kind": "LinkedField",
                              "name": "assetContract",
                              "plural": false,
                              "selections": [
                                (v4/*: any*/),
                                (v5/*: any*/)
                              ],
                              "storageKey": null
                            },
                            (v0/*: any*/)
                          ]
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "cursor",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "PageInfo",
                  "kind": "LinkedField",
                  "name": "pageInfo",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "endCursor",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "hasNextPage",
                      "storageKey": null
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'caeb66cd9aa991c02746657720aacc3c';
export default node;
