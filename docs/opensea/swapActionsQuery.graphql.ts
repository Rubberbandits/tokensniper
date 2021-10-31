/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ActionTypes = "ASK_FOR_ASSET_SWAP" | "ASK_FOR_DEPOSIT" | "ASSET_APPROVAL" | "ASSET_FREEZE_METADATA" | "ASSET_SWAP" | "ASSET_TRANSFER" | "CANCEL_ORDER" | "CREATE_ORDER" | "FULFILL" | "MATIC_EXIT" | "PAYMENT_ASSET_APPROVAL" | "WAIT_FOR_BALANCE" | "%future added value";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type AssetQuantityInputType = {
    asset: string;
    quantity: string;
};
export type swapActionsQueryVariables = {
    fromAssetQuantity: AssetQuantityInputType;
    toAsset: string;
};
export type swapActionsQueryResponse = {
    readonly blockchain: {
        readonly swapActions: {
            readonly actions: ReadonlyArray<{
                readonly actionType: ActionTypes;
                readonly transaction: {
                    readonly " $fragmentRefs": FragmentRefs<"trader_transaction">;
                } | null;
                readonly maticExit: {
                    readonly rootChainManagerAddress: string;
                    readonly chainIdentifier: ChainIdentifier;
                } | null;
            }>;
            readonly " $fragmentRefs": FragmentRefs<"ActionPanelList_data">;
        };
    };
};
export type swapActionsQuery = {
    readonly response: swapActionsQueryResponse;
    readonly variables: swapActionsQueryVariables;
};



/*
query swapActionsQuery(
  $fromAssetQuantity: AssetQuantityInputType!
  $toAsset: AssetRelayID!
) {
  blockchain {
    swapActions(fromAssetQuantity: $fromAssetQuantity, toAsset: $toAsset) {
      actions {
        actionType
        transaction {
          ...trader_transaction
        }
        maticExit {
          rootChainManagerAddress
          chainIdentifier
        }
      }
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fromAssetQuantity"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "toAsset"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "fromAssetQuantity",
    "variableName": "fromAssetQuantity"
  },
  {
    "kind": "Variable",
    "name": "toAsset",
    "variableName": "toAsset"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "actionType",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chainIdentifier",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "AddressDataType",
    "kind": "LinkedField",
    "name": "source",
    "plural": false,
    "selections": (v5/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AddressDataType",
    "kind": "LinkedField",
    "name": "destination",
    "plural": false,
    "selections": (v5/*: any*/),
    "storageKey": null
  },
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "data",
    "storageKey": null
  }
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "MaticExitType",
  "kind": "LinkedField",
  "name": "maticExit",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rootChainManagerAddress",
      "storageKey": null
    },
    (v3/*: any*/)
  ],
  "storageKey": null
},
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
  "name": "clientMessage",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientSignatureStandard",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "swapActionsQuery",
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
            "args": (v1/*: any*/),
            "concreteType": "ActionDataType",
            "kind": "LinkedField",
            "name": "swapActions",
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TransactionSubmissionDataType",
                    "kind": "LinkedField",
                    "name": "transaction",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "trader_transaction",
                        "selections": (v6/*: any*/)
                      }
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "swapActionsQuery",
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
            "args": (v1/*: any*/),
            "concreteType": "ActionDataType",
            "kind": "LinkedField",
            "name": "swapActions",
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TransactionSubmissionDataType",
                    "kind": "LinkedField",
                    "name": "transaction",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  (v7/*: any*/),
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
                      (v14/*: any*/),
                      (v15/*: any*/),
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
                      (v14/*: any*/),
                      (v15/*: any*/),
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
    "cacheID": "e7970de8b93f5f7951f7bc08b88b70b7",
    "id": null,
    "metadata": {},
    "name": "swapActionsQuery",
    "operationKind": "query",
    "text": "query swapActionsQuery(\n  $fromAssetQuantity: AssetQuantityInputType!\n  $toAsset: AssetRelayID!\n) {\n  blockchain {\n    swapActions(fromAssetQuantity: $fromAssetQuantity, toAsset: $toAsset) {\n      actions {\n        actionType\n        transaction {\n          ...trader_transaction\n        }\n        maticExit {\n          rootChainManagerAddress\n          chainIdentifier\n        }\n      }\n      ...ActionPanelList_data\n    }\n  }\n}\n\nfragment ActionPanelList_data on ActionDataType {\n  actions {\n    ...ActionPanel_data\n    actionType\n  }\n}\n\nfragment ActionPanel_data on ActionType {\n  actionType\n  askForDeposit {\n    asset {\n      assetContract {\n        chain\n        id\n      }\n      decimals\n      symbol\n      usdSpotPrice\n      id\n    }\n    minQuantity\n  }\n  askForSwap {\n    fromAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      decimals\n      symbol\n      id\n    }\n    minQuantity\n    maxQuantity\n    toAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      symbol\n      id\n    }\n  }\n  transaction {\n    chainIdentifier\n    ...trader_transaction\n  }\n  ...trader_sign_and_post\n  ...trader_meta_transaction\n}\n\nfragment trader_meta_transaction on ActionType {\n  metaTransaction {\n    clientMessage\n    clientSignatureStandard\n    functionSignature\n    verifyingContract\n  }\n}\n\nfragment trader_sign_and_post on ActionType {\n  signAndPost {\n    orderData\n    serverSignature\n    clientMessage\n    clientSignatureStandard\n    orderId\n  }\n}\n\nfragment trader_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
  }
};
})();
(node as any).hash = '1a0d676b728eed2384dcb4f61a85182c';
export default node;
