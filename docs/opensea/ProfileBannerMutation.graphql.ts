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
export type ProfileBannerMutationVariables = {
    input: AccountMutationInput;
};
export type ProfileBannerMutationResponse = {
    readonly account: {
        readonly bannerImageUrl: string | null;
    } | null;
};
export type ProfileBannerMutation = {
    readonly response: ProfileBannerMutationResponse;
    readonly variables: ProfileBannerMutationVariables;
};



/*
mutation ProfileBannerMutation(
  $input: AccountMutationInput!
) {
  account(input: $input) {
    bannerImageUrl
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
  "name": "bannerImageUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileBannerMutation",
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
    "name": "ProfileBannerMutation",
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
    "cacheID": "fe285ebbcb24894743148127fdcdfa2e",
    "id": null,
    "metadata": {},
    "name": "ProfileBannerMutation",
    "operationKind": "mutation",
    "text": "mutation ProfileBannerMutation(\n  $input: AccountMutationInput!\n) {\n  account(input: $input) {\n    bannerImageUrl\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '382616e53022cbbc4666d55d615d2ae3';
export default node;
