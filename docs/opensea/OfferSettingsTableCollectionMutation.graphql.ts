/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CollectionOrderRuleMutationInput = {
    identity?: IdentityInputType | null | undefined;
    rules: Array<SingleCollectionOrderRuleMutationInput>;
    clientMutationId?: string | null | undefined;
};
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type SingleCollectionOrderRuleMutationInput = {
    collection: string;
    offersEnabled?: boolean | null | undefined;
    offerMinimum?: string | null | undefined;
};
export type OfferSettingsTableCollectionMutationVariables = {
    input: CollectionOrderRuleMutationInput;
};
export type OfferSettingsTableCollectionMutationResponse = {
    readonly accounts: {
        readonly setCollectionOrderRule: {
            readonly rules: ReadonlyArray<{
                readonly collection: {
                    readonly relayId: string;
                };
            }>;
        } | null;
    };
};
export type OfferSettingsTableCollectionMutation = {
    readonly response: OfferSettingsTableCollectionMutationResponse;
    readonly variables: OfferSettingsTableCollectionMutationVariables;
};



/*
mutation OfferSettingsTableCollectionMutation(
  $input: CollectionOrderRuleMutationInput!
) {
  accounts {
    setCollectionOrderRule(input: $input) {
      rules {
        collection {
          relayId
          id
        }
      }
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
    "name": "OfferSettingsTableCollectionMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountMutationType",
        "kind": "LinkedField",
        "name": "accounts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "CollectionOrderRuleMutationOutput",
            "kind": "LinkedField",
            "name": "setCollectionOrderRule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionOrderRuleType",
                "kind": "LinkedField",
                "name": "rules",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionType",
                    "kind": "LinkedField",
                    "name": "collection",
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
    "name": "OfferSettingsTableCollectionMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountMutationType",
        "kind": "LinkedField",
        "name": "accounts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "CollectionOrderRuleMutationOutput",
            "kind": "LinkedField",
            "name": "setCollectionOrderRule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionOrderRuleType",
                "kind": "LinkedField",
                "name": "rules",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionType",
                    "kind": "LinkedField",
                    "name": "collection",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a418cffa55dacd213021c5c70f77db55",
    "id": null,
    "metadata": {},
    "name": "OfferSettingsTableCollectionMutation",
    "operationKind": "mutation",
    "text": "mutation OfferSettingsTableCollectionMutation(\n  $input: CollectionOrderRuleMutationInput!\n) {\n  accounts {\n    setCollectionOrderRule(input: $input) {\n      rules {\n        collection {\n          relayId\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0d49d93e4baf69ac1dcc039682ea9cbe';
export default node;
