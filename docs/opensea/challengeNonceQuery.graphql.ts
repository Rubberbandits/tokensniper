/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type challengeNonceQueryVariables = {
    identity: IdentityInputType;
};
export type challengeNonceQueryResponse = {
    readonly account: {
        readonly nonce: number;
    } | null;
};
export type challengeNonceQuery = {
    readonly response: challengeNonceQueryResponse;
    readonly variables: challengeNonceQueryVariables;
};



/*
query challengeNonceQuery(
  $identity: IdentityInputType!
) {
  account(identity: $identity) {
    nonce
    id
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
    "kind": "Variable",
    "name": "identity",
    "variableName": "identity"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nonce",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "challengeNonceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "challengeNonceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "cacheID": "dff36869a0a3086a46e4cf5914591634",
    "id": null,
    "metadata": {},
    "name": "challengeNonceQuery",
    "operationKind": "query",
    "text": "query challengeNonceQuery(\n  $identity: IdentityInputType!\n) {\n  account(identity: $identity) {\n    nonce\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '070aeb53b9e003bac5def29236d75626';
export default node;
