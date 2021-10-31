/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NSFWPreference = "CENSOR" | "HIDE" | "SHOW" | "%future added value";
export type UserModifyMutationInput = {
    email?: string | null | undefined;
    username?: string | null | undefined;
    bidReceivedEmailsPriceThreshold?: string | null | undefined;
    bio?: string | null | undefined;
    twitterUsername?: string | null | undefined;
    instagramUsername?: string | null | undefined;
    websiteUrl?: string | null | undefined;
    hasAffirmativelyAcceptedOpenseaTerms?: boolean | null | undefined;
    receiveItemSoldEmails?: boolean | null | undefined;
    receiveBidReceivedEmails?: boolean | null | undefined;
    receiveBidItemPriceChangeEmails?: boolean | null | undefined;
    receiveNewAssetReceivedEmails?: boolean | null | undefined;
    receiveOutbidEmails?: boolean | null | undefined;
    receiveReferralEmails?: boolean | null | undefined;
    receiveAuctionCreationEmails?: boolean | null | undefined;
    receiveAuctionExpirationEmails?: boolean | null | undefined;
    receiveBidInvalidEmails?: boolean | null | undefined;
    receiveBundleInvalidEmails?: boolean | null | undefined;
    receivePurchaseEmails?: boolean | null | undefined;
    receiveCancellationEmails?: boolean | null | undefined;
    receiveNewsletter?: boolean | null | undefined;
    receiveOwnedAssetUpdateEmails?: boolean | null | undefined;
    receiveStorefrontWhitelistedEmails?: boolean | null | undefined;
    nsfwPreference?: NSFWPreference | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type ordersTermsAcceptanceMutationVariables = {
    input: UserModifyMutationInput;
};
export type ordersTermsAcceptanceMutationResponse = {
    readonly users: {
        readonly modify: {
            readonly relayId: string;
        };
    };
};
export type ordersTermsAcceptanceMutation = {
    readonly response: ordersTermsAcceptanceMutationResponse;
    readonly variables: ordersTermsAcceptanceMutationVariables;
};



/*
mutation ordersTermsAcceptanceMutation(
  $input: UserModifyMutationInput!
) {
  users {
    modify(input: $input) {
      relayId
      id
    }
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
  "name": "relayId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ordersTermsAcceptanceMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserMutationType",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "modify",
            "plural": false,
            "selections": [
              (v2/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ordersTermsAcceptanceMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserMutationType",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "modify",
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6d3496aa31dbe423fa0bd2e92079868a",
    "id": null,
    "metadata": {},
    "name": "ordersTermsAcceptanceMutation",
    "operationKind": "mutation",
    "text": "mutation ordersTermsAcceptanceMutation(\n  $input: UserModifyMutationInput!\n) {\n  users {\n    modify(input: $input) {\n      relayId\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '56de9920c569fe785e113840e1181ebf';
export default node;
