/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ArchetypeInputType = {
    assetContractAddress: string;
    tokenId: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type UnlockableContentModalQueryVariables = {
    archetype: ArchetypeInputType;
    isOwner: boolean;
};
export type UnlockableContentModalQueryResponse = {
    readonly archetype?: {
        readonly asset: {
            readonly unlockableContent: string | null;
        } | null;
    } | null | undefined;
};
export type UnlockableContentModalQuery = {
    readonly response: UnlockableContentModalQueryResponse;
    readonly variables: UnlockableContentModalQueryVariables;
};



/*
query UnlockableContentModalQuery(
  $archetype: ArchetypeInputType!
  $isOwner: Boolean!
) {
  archetype(archetype: $archetype) @include(if: $isOwner) {
    asset {
      unlockableContent(identity: {})
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
    "name": "archetype"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "isOwner"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "archetype",
    "variableName": "archetype"
  }
],
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "identity",
      "value": {}
    }
  ],
  "kind": "ScalarField",
  "name": "unlockableContent",
  "storageKey": "unlockableContent(identity:{})"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UnlockableContentModalQuery",
    "selections": [
      {
        "condition": "isOwner",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ArchetypeType",
            "kind": "LinkedField",
            "name": "archetype",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetType",
                "kind": "LinkedField",
                "name": "asset",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UnlockableContentModalQuery",
    "selections": [
      {
        "condition": "isOwner",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ArchetypeType",
            "kind": "LinkedField",
            "name": "archetype",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetType",
                "kind": "LinkedField",
                "name": "asset",
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
      }
    ]
  },
  "params": {
    "cacheID": "b234215744b8b0caeb55090a11960d76",
    "id": null,
    "metadata": {},
    "name": "UnlockableContentModalQuery",
    "operationKind": "query",
    "text": "query UnlockableContentModalQuery(\n  $archetype: ArchetypeInputType!\n  $isOwner: Boolean!\n) {\n  archetype(archetype: $archetype) @include(if: $isOwner) {\n    asset {\n      unlockableContent(identity: {})\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0ae1485cafc0112108efb105b8fa4305';
export default node;
