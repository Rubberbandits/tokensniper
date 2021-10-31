/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type walletQueryVariables = {
    identity: IdentityInputType;
};
export type walletQueryResponse = {
    readonly account: {
        readonly address: string;
        readonly imageUrl: string;
        readonly nickname: string | null;
        readonly relayId: string;
        readonly isCompromised: boolean;
        readonly user: {
            readonly isStaff: boolean;
            readonly relayId: string;
            readonly username: string;
            readonly publicUsername: string | null;
            readonly hasAffirmativelyAcceptedOpenseaTerms: boolean | null;
            readonly email: string | null;
        } | null;
    } | null;
};
export type walletQuery = {
    readonly response: walletQueryResponse;
    readonly variables: walletQueryVariables;
};



/*
query walletQuery(
  $identity: IdentityInputType!
) {
  account(identity: $identity) {
    address
    imageUrl
    nickname
    relayId
    isCompromised
    user {
      isStaff
      relayId
      username
      publicUsername
      hasAffirmativelyAcceptedOpenseaTerms
      email
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
  "name": "imageUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nickname",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isCompromised",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isStaff",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publicUsername",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasAffirmativelyAcceptedOpenseaTerms",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v12 = {
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
    "name": "walletQuery",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v5/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
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
    "name": "walletQuery",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v5/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2dad795ee85e6d06bb1ef8a1572dd0b1",
    "id": null,
    "metadata": {},
    "name": "walletQuery",
    "operationKind": "query",
    "text": "query walletQuery(\n  $identity: IdentityInputType!\n) {\n  account(identity: $identity) {\n    address\n    imageUrl\n    nickname\n    relayId\n    isCompromised\n    user {\n      isStaff\n      relayId\n      username\n      publicUsername\n      hasAffirmativelyAcceptedOpenseaTerms\n      email\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '5a40f31b5727abd2b4751ccb215189b2';
export default node;
