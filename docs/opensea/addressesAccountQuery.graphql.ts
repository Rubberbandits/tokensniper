/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type addressesAccountQueryVariables = {
    identity: IdentityInputType;
};
export type addressesAccountQueryResponse = {
    readonly account: {
        readonly address: string;
        readonly user: {
            readonly publicUsername: string | null;
        } | null;
    } | null;
};
export type addressesAccountQuery = {
    readonly response: addressesAccountQueryResponse;
    readonly variables: addressesAccountQueryVariables;
};



/*
query addressesAccountQuery(
  $identity: IdentityInputType!
) {
  account(identity: $identity) {
    address
    user {
      publicUsername
      id
    }
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
  "name": "address",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publicUsername",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addressesAccountQuery",
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
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "user",
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addressesAccountQuery",
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
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5404aec01b5df73d7f07231ae96fe9a1",
    "id": null,
    "metadata": {},
    "name": "addressesAccountQuery",
    "operationKind": "query",
    "text": "query addressesAccountQuery(\n  $identity: IdentityInputType!\n) {\n  account(identity: $identity) {\n    address\n    user {\n      publicUsername\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8226864a9e5c9865c07d206f3f8b61a5';
export default node;
