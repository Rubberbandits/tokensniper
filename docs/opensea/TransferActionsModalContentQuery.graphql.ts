/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TransferAssetInputType = {
    assetQuantity?: AssetQuantityInputType | null | undefined;
    recipient: string;
};
export type AssetQuantityInputType = {
    asset: string;
    quantity: string;
};
export type TransferActionsModalContentQueryVariables = {
    sender: string;
    transferAssetInputs: Array<TransferAssetInputType>;
    useMetaTransactions?: boolean | null | undefined;
};
export type TransferActionsModalContentQueryResponse = {
    readonly blockchain: {
        readonly transferActions: {
            readonly " $fragmentRefs": FragmentRefs<"ActionPanelList_data">;
        };
    };
};
export type TransferActionsModalContentQuery = {
    readonly response: TransferActionsModalContentQueryResponse;
    readonly variables: TransferActionsModalContentQueryVariables;
};



/*
query TransferActionsModalContentQuery(
  $sender: AddressScalar!
  $transferAssetInputs: [TransferAssetInputType!]!
  $useMetaTransactions: Boolean
) {
  blockchain {
    transferActions(sender: $sender, transferAssetInputs: $transferAssetInputs, useMetaTransactions: $useMetaTransactions) {
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
    "name": "sender"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "transferAssetInputs"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "useMetaTransactions"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "sender",
    "variableName": "sender"
  },
  {
    "kind": "Variable",
    "name": "transferAssetInputs",
    "variableName": "transferAssetInputs"
  },
  {
    "kind": "Variable",
    "name": "useMetaTransactions",
    "variableName": "useMetaTransactions"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
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
    (v2/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minQuantity",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v9 = [
  (v8/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMessage",
  "storageKey": null
},
v11 = {
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
    "name": "TransferActionsModalContentQuery",
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
            "name": "transferActions",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TransferActionsModalContentQuery",
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
            "name": "transferActions",
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
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
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
                      (v6/*: any*/)
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
                          (v3/*: any*/),
                          (v7/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
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
                          (v3/*: any*/),
                          (v7/*: any*/),
                          (v5/*: any*/),
                          (v2/*: any*/)
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
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AddressDataType",
                        "kind": "LinkedField",
                        "name": "destination",
                        "plural": false,
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      },
                      (v8/*: any*/),
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
                      (v10/*: any*/),
                      (v11/*: any*/),
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
                      (v10/*: any*/),
                      (v11/*: any*/),
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
    "cacheID": "4e86d20fbd363b15e46906d3ade81317",
    "id": null,
    "metadata": {},
    "name": "TransferActionsModalContentQuery",
    "operationKind": "query",
    "text": "query TransferActionsModalContentQuery(\n  $sender: AddressScalar!\n  $transferAssetInputs: [TransferAssetInputType!]!\n  $useMetaTransactions: Boolean\n) {\n  blockchain {\n    transferActions(sender: $sender, transferAssetInputs: $transferAssetInputs, useMetaTransactions: $useMetaTransactions) {\n      ...ActionPanelList_data\n    }\n  }\n}\n\nfragment ActionPanelList_data on ActionDataType {\n  actions {\n    ...ActionPanel_data\n    actionType\n  }\n}\n\nfragment ActionPanel_data on ActionType {\n  actionType\n  askForDeposit {\n    asset {\n      assetContract {\n        chain\n        id\n      }\n      decimals\n      symbol\n      usdSpotPrice\n      id\n    }\n    minQuantity\n  }\n  askForSwap {\n    fromAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      decimals\n      symbol\n      id\n    }\n    minQuantity\n    maxQuantity\n    toAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      symbol\n      id\n    }\n  }\n  transaction {\n    chainIdentifier\n    ...trader_transaction\n  }\n  ...trader_sign_and_post\n  ...trader_meta_transaction\n}\n\nfragment trader_meta_transaction on ActionType {\n  metaTransaction {\n    clientMessage\n    clientSignatureStandard\n    functionSignature\n    verifyingContract\n  }\n}\n\nfragment trader_sign_and_post on ActionType {\n  signAndPost {\n    orderData\n    serverSignature\n    clientMessage\n    clientSignatureStandard\n    orderId\n  }\n}\n\nfragment trader_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
  }
};
})();
(node as any).hash = '5b18f02df9eaba3895cdb4fb3e373fcc';
export default node;
