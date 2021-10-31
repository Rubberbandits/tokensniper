/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type walletBalanceQueryVariables = {
    assetId: string;
    identity: IdentityInputType;
};
export type walletBalanceQueryResponse = {
    readonly blockchain: {
        readonly balance: string;
    };
};
export type walletBalanceQuery = {
    readonly response: walletBalanceQueryResponse;
    readonly variables: walletBalanceQueryVariables;
};



/*
query walletBalanceQuery(
  $assetId: AssetRelayID!
  $identity: IdentityInputType!
) {
  blockchain {
    balance(asset: $assetId, identity: $identity)
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "assetId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "identity"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BlockchainType",
    "kind": "LinkedField",
    "name": "blockchain",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "asset",
            "variableName": "assetId"
          },
          {
            "kind": "Variable",
            "name": "identity",
            "variableName": "identity"
          }
        ],
        "kind": "ScalarField",
        "name": "balance",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "walletBalanceQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "walletBalanceQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "29a1864fd6061ad9240ff6711b32b29c",
    "id": null,
    "metadata": {},
    "name": "walletBalanceQuery",
    "operationKind": "query",
    "text": "query walletBalanceQuery(\n  $assetId: AssetRelayID!\n  $identity: IdentityInputType!\n) {\n  blockchain {\n    balance(asset: $assetId, identity: $identity)\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd684900fa484afb84ac3d03b31a8c743';
export default node;
