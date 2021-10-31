/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type authLoginMutationVariables = {
    address: string;
    identity: IdentityInputType;
    message: string;
    signature: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type authLoginMutationResponse = {
    readonly auth: {
        readonly login: {
            readonly token: string;
        } | null;
    };
};
export type authLoginMutation = {
    readonly response: authLoginMutationResponse;
    readonly variables: authLoginMutationVariables;
};



/*
mutation authLoginMutation(
  $address: AddressScalar!
  $identity: IdentityInputType!
  $message: String!
  $signature: String!
  $chain: ChainScalar
) {
  auth {
    login(address: $address, identity: $identity, message: $message, signature: $signature, chain: $chain) {
      token
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "address"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "chain"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identity"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "message"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "signature"
},
v5 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AuthType",
    "kind": "LinkedField",
    "name": "auth",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "address",
            "variableName": "address"
          },
          {
            "kind": "Variable",
            "name": "chain",
            "variableName": "chain"
          },
          {
            "kind": "Variable",
            "name": "identity",
            "variableName": "identity"
          },
          {
            "kind": "Variable",
            "name": "message",
            "variableName": "message"
          },
          {
            "kind": "Variable",
            "name": "signature",
            "variableName": "signature"
          }
        ],
        "concreteType": "JSONWebTokenType",
        "kind": "LinkedField",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "token",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "authLoginMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "authLoginMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "e44d02d84b81f01664c2d2bc4258cf7d",
    "id": null,
    "metadata": {},
    "name": "authLoginMutation",
    "operationKind": "mutation",
    "text": "mutation authLoginMutation(\n  $address: AddressScalar!\n  $identity: IdentityInputType!\n  $message: String!\n  $signature: String!\n  $chain: ChainScalar\n) {\n  auth {\n    login(address: $address, identity: $identity, message: $message, signature: $signature, chain: $chain) {\n      token\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f7368f1b9bda66a94a4a899c9ecec037';
export default node;
