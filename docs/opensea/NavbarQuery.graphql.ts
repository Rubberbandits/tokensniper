/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NavbarQueryVariables = {};
export type NavbarQueryResponse = {
    readonly account: {
        readonly imageUrl: string;
        readonly user: {
            readonly publicUsername: string | null;
            readonly isStaff: boolean;
        } | null;
    } | null;
};
export type NavbarQuery = {
    readonly response: NavbarQueryResponse;
    readonly variables: NavbarQueryVariables;
};



/*
query NavbarQuery {
  account {
    imageUrl
    user {
      publicUsername
      isStaff
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publicUsername",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isStaff",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NavbarQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NavbarQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4e10b0b3059129bed873694d293dc845",
    "id": null,
    "metadata": {},
    "name": "NavbarQuery",
    "operationKind": "query",
    "text": "query NavbarQuery {\n  account {\n    imageUrl\n    user {\n      publicUsername\n      isStaff\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '4ce4d717000c0498d58bac3aa63c3989';
export default node;
