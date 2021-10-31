/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OrderV2OrderType = "BASIC" | "DUTCH" | "ENGLISH" | "%future added value";
export type OrderV2Side = "ASK" | "BID" | "%future added value";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type CancelOrderActionModalQueryVariables = {
    orderId: string;
    maker: IdentityInputType;
};
export type CancelOrderActionModalQueryResponse = {
    readonly order: {
        readonly cancelActions: {
            readonly " $fragmentRefs": FragmentRefs<"ActionPanelList_data">;
        };
        readonly side: OrderV2Side | null;
        readonly orderType: OrderV2OrderType;
    };
};
export type CancelOrderActionModalQuery = {
    readonly response: CancelOrderActionModalQueryResponse;
    readonly variables: CancelOrderActionModalQueryVariables;
};



/*
query CancelOrderActionModalQuery(
  $orderId: OrderRelayID!
  $maker: IdentityInputType!
) {
  order(order: $orderId) {
    cancelActions(maker: $maker) {
      ...ActionPanelList_data
    }
    side
    orderType
    id
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
  "name": "maker"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "orderId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "orderId"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "maker",
    "variableName": "maker"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "side",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
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
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minQuantity",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v13 = [
  (v12/*: any*/)
],
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CancelOrderActionModalQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "OrderV2Type",
        "kind": "LinkedField",
        "name": "order",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "ActionDataType",
            "kind": "LinkedField",
            "name": "cancelActions",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ActionPanelList_data"
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/)
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
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CancelOrderActionModalQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "OrderV2Type",
        "kind": "LinkedField",
        "name": "order",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "ActionDataType",
            "kind": "LinkedField",
            "name": "cancelActions",
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
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "usdSpotPrice",
                            "storageKey": null
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v10/*: any*/)
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
                          (v7/*: any*/),
                          (v11/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v10/*: any*/),
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
                          (v7/*: any*/),
                          (v11/*: any*/),
                          (v9/*: any*/),
                          (v6/*: any*/)
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
                        "selections": (v13/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AddressDataType",
                        "kind": "LinkedField",
                        "name": "destination",
                        "plural": false,
                        "selections": (v13/*: any*/),
                        "storageKey": null
                      },
                      (v12/*: any*/),
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
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6d1fe925a9f951a96eb55a42b1110660",
    "id": null,
    "metadata": {},
    "name": "CancelOrderActionModalQuery",
    "operationKind": "query",
    "text": "query CancelOrderActionModalQuery(\n  $orderId: OrderRelayID!\n  $maker: IdentityInputType!\n) {\n  order(order: $orderId) {\n    cancelActions(maker: $maker) {\n      ...ActionPanelList_data\n    }\n    side\n    orderType\n    id\n  }\n}\n\nfragment ActionPanelList_data on ActionDataType {\n  actions {\n    ...ActionPanel_data\n    actionType\n  }\n}\n\nfragment ActionPanel_data on ActionType {\n  actionType\n  askForDeposit {\n    asset {\n      assetContract {\n        chain\n        id\n      }\n      decimals\n      symbol\n      usdSpotPrice\n      id\n    }\n    minQuantity\n  }\n  askForSwap {\n    fromAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      decimals\n      symbol\n      id\n    }\n    minQuantity\n    maxQuantity\n    toAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      symbol\n      id\n    }\n  }\n  transaction {\n    chainIdentifier\n    ...trader_transaction\n  }\n  ...trader_sign_and_post\n  ...trader_meta_transaction\n}\n\nfragment trader_meta_transaction on ActionType {\n  metaTransaction {\n    clientMessage\n    clientSignatureStandard\n    functionSignature\n    verifyingContract\n  }\n}\n\nfragment trader_sign_and_post on ActionType {\n  signAndPost {\n    orderData\n    serverSignature\n    clientMessage\n    clientSignatureStandard\n    orderId\n  }\n}\n\nfragment trader_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
  }
};
})();
(node as any).hash = '82db668fa4616493ca9203a2567ba33f';
export default node;
