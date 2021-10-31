/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ActionTypes = "ASK_FOR_ASSET_SWAP" | "ASK_FOR_DEPOSIT" | "ASSET_APPROVAL" | "ASSET_FREEZE_METADATA" | "ASSET_SWAP" | "ASSET_TRANSFER" | "CANCEL_ORDER" | "CREATE_ORDER" | "FULFILL" | "MATIC_EXIT" | "PAYMENT_ASSET_APPROVAL" | "WAIT_FOR_BALANCE" | "%future added value";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type traderOrderFulfillmentActionsQueryVariables = {
    relayId: string;
    taker: IdentityInputType;
    takerAssetFillAmount: string;
};
export type traderOrderFulfillmentActionsQueryResponse = {
    readonly order: {
        readonly fulfillmentActions: {
            readonly actions: ReadonlyArray<{
                readonly actionType: ActionTypes;
                readonly transaction: {
                    readonly " $fragmentRefs": FragmentRefs<"trader_transaction">;
                } | null;
            }>;
        };
    };
};
export type traderOrderFulfillmentActionsQuery = {
    readonly response: traderOrderFulfillmentActionsQueryResponse;
    readonly variables: traderOrderFulfillmentActionsQueryVariables;
};



/*
query traderOrderFulfillmentActionsQuery(
  $relayId: OrderRelayID!
  $taker: IdentityInputType!
  $takerAssetFillAmount: String!
) {
  order(order: $relayId) {
    fulfillmentActions(taker: $taker, takerAssetFillAmount: $takerAssetFillAmount) {
      actions {
        actionType
        transaction {
          ...trader_transaction
        }
      }
    }
    id
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
    "name": "relayId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "taker"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "takerAssetFillAmount"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "relayId"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "taker",
    "variableName": "taker"
  },
  {
    "kind": "Variable",
    "name": "takerAssetFillAmount",
    "variableName": "takerAssetFillAmount"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "actionType",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "traderOrderFulfillmentActionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OrderV2Type",
        "kind": "LinkedField",
        "name": "order",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "ActionDataType",
            "kind": "LinkedField",
            "name": "fulfillmentActions",
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
                  (v3/*: any*/),
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "traderOrderFulfillmentActionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OrderV2Type",
        "kind": "LinkedField",
        "name": "order",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "ActionDataType",
            "kind": "LinkedField",
            "name": "fulfillmentActions",
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
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TransactionSubmissionDataType",
                    "kind": "LinkedField",
                    "name": "transaction",
                    "plural": false,
                    "selections": (v6/*: any*/),
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d4c7ccbde17faed7785e705a5e93b2ea",
    "id": null,
    "metadata": {},
    "name": "traderOrderFulfillmentActionsQuery",
    "operationKind": "query",
    "text": "query traderOrderFulfillmentActionsQuery(\n  $relayId: OrderRelayID!\n  $taker: IdentityInputType!\n  $takerAssetFillAmount: String!\n) {\n  order(order: $relayId) {\n    fulfillmentActions(taker: $taker, takerAssetFillAmount: $takerAssetFillAmount) {\n      actions {\n        actionType\n        transaction {\n          ...trader_transaction\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment trader_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
  }
};
})();
(node as any).hash = 'b3fe6b97ddb020445da2a56538cc6b9c';
export default node;
