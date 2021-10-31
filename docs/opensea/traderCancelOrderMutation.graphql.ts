/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type traderCancelOrderMutationVariables = {
    orderId: string;
    clientSignature: string;
};
export type traderCancelOrderMutationResponse = {
    readonly orders: {
        readonly cancel: {
            readonly relayId: string;
        } | null;
    };
};
export type traderCancelOrderMutation = {
    readonly response: traderCancelOrderMutationResponse;
    readonly variables: traderCancelOrderMutationVariables;
};



/*
mutation traderCancelOrderMutation(
  $orderId: OrderV2RelayID!
  $clientSignature: String!
) {
  orders {
    cancel(order: $orderId, clientSignature: $clientSignature) {
      relayId
      id
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
  "name": "orderId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "clientSignature",
    "variableName": "clientSignature"
  },
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "orderId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
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
    "name": "traderCancelOrderMutation",
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
            "args": (v2/*: any*/),
            "concreteType": "OrderV2Type",
            "kind": "LinkedField",
            "name": "cancel",
            "plural": false,
            "selections": [
              (v3/*: any*/)
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
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "traderCancelOrderMutation",
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
            "args": (v2/*: any*/),
            "concreteType": "OrderV2Type",
            "kind": "LinkedField",
            "name": "cancel",
            "plural": false,
            "selections": [
              (v3/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6afc33be5166c20af09338a0f81cb9da",
    "id": null,
    "metadata": {},
    "name": "traderCancelOrderMutation",
    "operationKind": "mutation",
    "text": "mutation traderCancelOrderMutation(\n  $orderId: OrderV2RelayID!\n  $clientSignature: String!\n) {\n  orders {\n    cancel(order: $orderId, clientSignature: $clientSignature) {\n      relayId\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4d3b9777e98a065b54736b05dc666fb6';
export default node;
