/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AccountMutationInput = {
    accountSignature?: AccountSignature | null | undefined;
    bannerImage?: unknown | null | undefined;
    bio?: string | null | undefined;
    identity?: IdentityInputType | null | undefined;
    nickname?: string | null | undefined;
    profileImage?: unknown | null | undefined;
    defaultCollection?: string | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type AccountSignature = {
    address: string;
    message: string;
    signature: string;
};
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type ProfileImageMutationVariables = {
    input: AccountMutationInput;
};
export type ProfileImageMutationResponse = {
    readonly account: {
        readonly imageUrl: string;
    } | null;
};
export type ProfileImageMutation = {
    readonly response: ProfileImageMutationResponse;
    readonly variables: ProfileImageMutationVariables;
};



/*
mutation ProfileImageMutation(
  $input: AccountMutationInput!
) {
  account(input: $input) {
    imageUrl
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileImageMutation",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileImageMutation",
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
    "cacheID": "75fc44089a8f98943e046805a6fb2a2c",
    "id": null,
    "metadata": {},
    "name": "ProfileImageMutation",
    "operationKind": "mutation",
    "text": "mutation ProfileImageMutation(\n  $input: AccountMutationInput!\n) {\n  account(input: $input) {\n    imageUrl\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e9efa8b36e5861abcde9971f1426320e';
export default node;
