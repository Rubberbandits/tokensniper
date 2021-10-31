/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReferralsModal_data = {
    readonly referrals: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly matchedSale: {
                    readonly price: {
                        readonly " $fragmentRefs": FragmentRefs<"AssetQuantity_data">;
                    } | null;
                    readonly assetBundle: {
                        readonly " $fragmentRefs": FragmentRefs<"AssetCell_assetBundle">;
                    } | null;
                    readonly assetQuantity: {
                        readonly asset: {
                            readonly " $fragmentRefs": FragmentRefs<"AssetCell_asset">;
                        };
                    } | null;
                } | null;
                readonly paymentTransaction: {
                    readonly blockExplorerLink: string;
                } | null;
                readonly createdDate: string;
                readonly relayId: string;
                readonly referredAccount: {
                    readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
                } | null;
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "ReferralsModal_data";
};
export type ReferralsModal_data$data = ReferralsModal_data;
export type ReferralsModal_data$key = {
    readonly " $data"?: ReferralsModal_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ReferralsModal_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
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
      "name": "referrer"
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
          "referrals"
        ]
      }
    ]
  },
  "name": "ReferralsModal_data",
  "selections": [
    {
      "alias": "referrals",
      "args": [
        {
          "kind": "Variable",
          "name": "referrer",
          "variableName": "referrer"
        }
      ],
      "concreteType": "ReferralTypeConnection",
      "kind": "LinkedField",
      "name": "__ReferralsModal_referrals_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ReferralTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ReferralType",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetEventType",
                  "kind": "LinkedField",
                  "name": "matchedSale",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "AssetQuantityType",
                      "kind": "LinkedField",
                      "name": "price",
                      "plural": false,
                      "selections": [
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "AssetQuantity_data"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "AssetBundleType",
                      "kind": "LinkedField",
                      "name": "assetBundle",
                      "plural": false,
                      "selections": [
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "AssetCell_assetBundle"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "AssetQuantityType",
                      "kind": "LinkedField",
                      "name": "assetQuantity",
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
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "AssetCell_asset"
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
                  "concreteType": "TransactionType",
                  "kind": "LinkedField",
                  "name": "paymentTransaction",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "blockExplorerLink",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "createdDate",
                  "storageKey": null
                },
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
                  "concreteType": "AccountType",
                  "kind": "LinkedField",
                  "name": "referredAccount",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "AccountLink_data"
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
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'feb2d27bcf10876457faa36e80faf03a';
export default node;
