/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type traderBridgingEventsQueryVariables = {
    identity: IdentityInputType;
};
export type traderBridgingEventsQueryResponse = {
    readonly blockchain: {
        readonly bridgeEvents: ReadonlyArray<{
            readonly quantity: string;
        }>;
    };
};
export type traderBridgingEventsQuery = {
    readonly response: traderBridgingEventsQueryResponse;
    readonly variables: traderBridgingEventsQueryVariables;
};



/*
query traderBridgingEventsQuery(
  $identity: IdentityInputType!
) {
  blockchain {
    bridgeEvents(account: $identity) {
      quantity
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "identity"
  }
],
v1 = [
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
        "args": [
          {
            "kind": "Variable",
            "name": "account",
            "variableName": "identity"
          }
        ],
        "concreteType": "BridgeEventType",
        "kind": "LinkedField",
        "name": "bridgeEvents",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quantity",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "traderBridgingEventsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "traderBridgingEventsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "47ca27e1c259f5ee0885aa562d89c9db",
    "id": null,
    "metadata": {},
    "name": "traderBridgingEventsQuery",
    "operationKind": "query",
    "text": "query traderBridgingEventsQuery(\n  $identity: IdentityInputType!\n) {\n  blockchain {\n    bridgeEvents(account: $identity) {\n      quantity\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6104748c7551c741233e97d9047f18f6';
export default node;
