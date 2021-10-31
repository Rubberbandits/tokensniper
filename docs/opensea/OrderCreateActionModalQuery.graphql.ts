/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type AssetQuantityInputType = {
    asset: string;
    quantity: string;
};
export type OrderCreateActionModalQueryVariables = {
    maker: IdentityInputType;
    makerAssetQuantities: Array<AssetQuantityInputType>;
    taker?: IdentityInputType | null | undefined;
    takerAssetQuantities: Array<AssetQuantityInputType>;
    expiration?: number | null | undefined;
    useMetaTransactions?: boolean | null | undefined;
    openedAt?: string | null | undefined;
};
export type OrderCreateActionModalQueryResponse = {
    readonly blockchain: {
        readonly orderCreateActions: {
            readonly " $fragmentRefs": FragmentRefs<"ActionPanelList_data">;
        } | null;
    };
};
export type OrderCreateActionModalQuery = {
    readonly response: OrderCreateActionModalQueryResponse;
    readonly variables: OrderCreateActionModalQueryVariables;
};



/*
query OrderCreateActionModalQuery(
  $maker: IdentityInputType!
  $makerAssetQuantities: [AssetQuantityInputType!]!
  $taker: IdentityInputType
  $takerAssetQuantities: [AssetQuantityInputType!]!
  $expiration: Int
  $useMetaTransactions: Boolean
  $openedAt: DateTime
) {
  blockchain {
    orderCreateActions(maker: $maker, makerAssets: $makerAssetQuantities, taker: $taker, takerAssets: $takerAssetQuantities, expiration: $expiration, useMetaTransactions: $useMetaTransactions, openedAt: $openedAt) {
      ...ActionPanelList_data
    }
  }
}

fragment ActionPanelList_data on ActionDataType {
  actions {
    ...ActionPanel_data
    actionType
  }
}

fragment ActionPanel_data on ActionType {
  actionType
  askForDeposit {
    asset {
      assetContract {
        chain
        id
      }
      decimals
      symbol
      usdSpotPrice
      id
    }
    minQuantity
  }
  askForSwap {
    fromAsset {
      assetContract {
        chain
        id
      }
      relayId
      decimals
      symbol
      id
    }
    minQuantity
    maxQuantity
    toAsset {
      assetContract {
        chain
        id
      }
      relayId
      symbol
      id
    }
  }
  transaction {
    chainIdentifier
    ...trader_transaction
  }
  ...trader_sign_and_post
  ...trader_meta_transaction
}

fragment trader_meta_transaction on ActionType {
  metaTransaction {
    clientMessage
    clientSignatureStandard
    functionSignature
    verifyingContract
  }
}

fragment trader_sign_and_post on ActionType {
  signAndPost {
    orderData
    serverSignature
    clientMessage
    clientSignatureStandard
    orderId
  }
}

fragment trader_transaction on TransactionSubmissionDataType {
  chainIdentifier
  source {
    value
  }
  destination {
    value
  }
  value
  data
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "expiration"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maker"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "makerAssetQuantities"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "openedAt"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "taker"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "takerAssetQuantities"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "useMetaTransactions"
},
v7 = [
  {
    "kind": "Variable",
    "name": "expiration",
    "variableName": "expiration"
  },
  {
    "kind": "Variable",
    "name": "maker",
    "variableName": "maker"
  },
  {
    "kind": "Variable",
    "name": "makerAssets",
    "variableName": "makerAssetQuantities"
  },
  {
    "kind": "Variable",
    "name": "openedAt",
    "variableName": "openedAt"
  },
  {
    "kind": "Variable",
    "name": "taker",
    "variableName": "taker"
  },
  {
    "kind": "Variable",
    "name": "takerAssets",
    "variableName": "takerAssetQuantities"
  },
  {
    "kind": "Variable",
    "name": "useMetaTransactions",
    "variableName": "useMetaTransactions"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
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
    },
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minQuantity",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v15 = [
  (v14/*: any*/)
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMessage",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientSignatureStandard",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderCreateActionModalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockchainType",
        "kind": "LinkedField",
        "name": "blockchain",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "ActionDataType",
            "kind": "LinkedField",
            "name": "orderCreateActions",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ActionPanelList_data"
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v0/*: any*/),
      (v6/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "OrderCreateActionModalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockchainType",
        "kind": "LinkedField",
        "name": "blockchain",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "ActionDataType",
            "kind": "LinkedField",
            "name": "orderCreateActions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ActionType",
                "kind": "LinkedField",
                "name": "actions",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "actionType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AskForDepositType",
                    "kind": "LinkedField",
                    "name": "askForDeposit",
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
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "usdSpotPrice",
                            "storageKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AskForSwapType",
                    "kind": "LinkedField",
                    "name": "askForSwap",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetType",
                        "kind": "LinkedField",
                        "name": "fromAsset",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v13/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "maxQuantity",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetType",
                        "kind": "LinkedField",
                        "name": "toAsset",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v13/*: any*/),
                          (v11/*: any*/),
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TransactionSubmissionDataType",
                    "kind": "LinkedField",
                    "name": "transaction",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "chainIdentifier",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AddressDataType",
                        "kind": "LinkedField",
                        "name": "source",
                        "plural": false,
                        "selections": (v15/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AddressDataType",
                        "kind": "LinkedField",
                        "name": "destination",
                        "plural": false,
                        "selections": (v15/*: any*/),
                        "storageKey": null
                      },
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "data",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SignAndPostType",
                    "kind": "LinkedField",
                    "name": "signAndPost",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "orderData",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "serverSignature",
                        "storageKey": null
                      },
                      (v16/*: any*/),
                      (v17/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "orderId",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MetaTransactionDataType",
                    "kind": "LinkedField",
                    "name": "metaTransaction",
                    "plural": false,
                    "selections": [
                      (v16/*: any*/),
                      (v17/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "functionSignature",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "verifyingContract",
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
    ]
  },
  "params": {
    "cacheID": "24c24e7474f50f559feaa2b3c37aed79",
    "id": null,
    "metadata": {},
    "name": "OrderCreateActionModalQuery",
    "operationKind": "query",
    "text": "query OrderCreateActionModalQuery(\n  $maker: IdentityInputType!\n  $makerAssetQuantities: [AssetQuantityInputType!]!\n  $taker: IdentityInputType\n  $takerAssetQuantities: [AssetQuantityInputType!]!\n  $expiration: Int\n  $useMetaTransactions: Boolean\n  $openedAt: DateTime\n) {\n  blockchain {\n    orderCreateActions(maker: $maker, makerAssets: $makerAssetQuantities, taker: $taker, takerAssets: $takerAssetQuantities, expiration: $expiration, useMetaTransactions: $useMetaTransactions, openedAt: $openedAt) {\n      ...ActionPanelList_data\n    }\n  }\n}\n\nfragment ActionPanelList_data on ActionDataType {\n  actions {\n    ...ActionPanel_data\n    actionType\n  }\n}\n\nfragment ActionPanel_data on ActionType {\n  actionType\n  askForDeposit {\n    asset {\n      assetContract {\n        chain\n        id\n      }\n      decimals\n      symbol\n      usdSpotPrice\n      id\n    }\n    minQuantity\n  }\n  askForSwap {\n    fromAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      decimals\n      symbol\n      id\n    }\n    minQuantity\n    maxQuantity\n    toAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      symbol\n      id\n    }\n  }\n  transaction {\n    chainIdentifier\n    ...trader_transaction\n  }\n  ...trader_sign_and_post\n  ...trader_meta_transaction\n}\n\nfragment trader_meta_transaction on ActionType {\n  metaTransaction {\n    clientMessage\n    clientSignatureStandard\n    functionSignature\n    verifyingContract\n  }\n}\n\nfragment trader_sign_and_post on ActionType {\n  signAndPost {\n    orderData\n    serverSignature\n    clientMessage\n    clientSignatureStandard\n    orderId\n  }\n}\n\nfragment trader_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
  }
};
})();
(node as any).hash = '1a016b54779649e036ce16e68fe7413e';
export default node;
