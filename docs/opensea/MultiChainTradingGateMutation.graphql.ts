/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Feature = "BSC_TRADING" | "ENS_SHORT_NAME_AUCTIONS" | "FUNGIBLE_TRADING" | "KLAYTN_TRADING" | "MATIC_TRADING" | "XDAI_TRADING" | "%future added value";
export type MultiChainTradingGateMutationVariables = {
    feature: Feature;
    email: string;
};
export type MultiChainTradingGateMutationResponse = {
    readonly waitlist: {
        readonly join: boolean;
    };
};
export type MultiChainTradingGateMutation = {
    readonly response: MultiChainTradingGateMutationResponse;
    readonly variables: MultiChainTradingGateMutationVariables;
};



/*
mutation MultiChainTradingGateMutation(
  $feature: Feature!
  $email: String!
) {
  waitlist {
    join(feature: $feature, email: $email)
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "feature"
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "WaitlistMutationType",
    "kind": "LinkedField",
    "name": "waitlist",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "feature",
            "variableName": "feature"
          }
        ],
        "kind": "ScalarField",
        "name": "join",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MultiChainTradingGateMutation",
    "selections": (v2/*: any*/),
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
    "name": "MultiChainTradingGateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "10c6c3aa43928cc33946472bc492aa3a",
    "id": null,
    "metadata": {},
    "name": "MultiChainTradingGateMutation",
    "operationKind": "mutation",
    "text": "mutation MultiChainTradingGateMutation(\n  $feature: Feature!\n  $email: String!\n) {\n  waitlist {\n    join(feature: $feature, email: $email)\n  }\n}\n"
  }
};
})();
(node as any).hash = '5e7e149b4e6e0d5f4fc6d677eac009bd';
export default node;
