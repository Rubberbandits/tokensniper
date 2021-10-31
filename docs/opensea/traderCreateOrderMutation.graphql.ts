/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type traderCreateOrderMutationVariables = {
    orderData: string;
    clientSignature: string;
    serverSignature: string;
};
export type traderCreateOrderMutationResponse = {
    readonly orders: {
        readonly create: {
            readonly counterOrder: {
                readonly relayId: string;
            } | null;
            readonly order: {
                readonly relayId: string;
            };
            readonly transaction: {
                readonly blockExplorerLink: string;
                readonly transactionHash: string;
            } | null;
        } | null;
    };
};
export type traderCreateOrderMutation = {
    readonly response: traderCreateOrderMutationResponse;
    readonly variables: traderCreateOrderMutationVariables;
};



/*
mutation traderCreateOrderMutation(
  $orderData: JSONString!
  $clientSignature: String!
  $serverSignature: String!
) {
  orders {
    create(orderData: $orderData, clientSignature: $clientSignature, serverSignature: $serverSignature) {
      counterOrder {
        relayId
        id
      }
      order {
        relayId
        id
      }
      transaction {
        blockExplorerLink
        transactionHash
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "clientSignature"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "orderData"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "serverSignature"
},
v3 = [
  {
    "kind": "Variable",
    "name": "clientSignature",
    "variableName": "clientSignature"
  },
  {
    "kind": "Variable",
    "name": "orderData",
    "variableName": "orderData"
  },
  {
    "kind": "Variable",
    "name": "serverSignature",
    "variableName": "serverSignature"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blockExplorerLink",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "transactionHash",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = [
  (v4/*: any*/),
  (v8/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "traderCreateOrderMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrdersMutationType",
        "kind": "LinkedField",
        "name": "orders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "OrderMatchedType",
            "kind": "LinkedField",
            "name": "create",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderV2Type",
                "kind": "LinkedField",
                "name": "counterOrder",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderV2Type",
                "kind": "LinkedField",
                "name": "order",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "TransactionType",
                "kind": "LinkedField",
                "name": "transaction",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/)
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "traderCreateOrderMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrdersMutationType",
        "kind": "LinkedField",
        "name": "orders",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "OrderMatchedType",
            "kind": "LinkedField",
            "name": "create",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderV2Type",
                "kind": "LinkedField",
                "name": "counterOrder",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderV2Type",
                "kind": "LinkedField",
                "name": "order",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "TransactionType",
                "kind": "LinkedField",
                "name": "transaction",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
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
    "cacheID": "a3e9e44d6bb5025768374b88ed519790",
    "id": null,
    "metadata": {},
    "name": "traderCreateOrderMutation",
    "operationKind": "mutation",
    "text": "mutation traderCreateOrderMutation(\n  $orderData: JSONString!\n  $clientSignature: String!\n  $serverSignature: String!\n) {\n  orders {\n    create(orderData: $orderData, clientSignature: $clientSignature, serverSignature: $serverSignature) {\n      counterOrder {\n        relayId\n        id\n      }\n      order {\n        relayId\n        id\n      }\n      transaction {\n        blockExplorerLink\n        transactionHash\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '99b3374e9f1faffb95c635715deb28ee';
export default node;
