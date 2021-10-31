/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type walletBalanceBySymbolQueryVariables = {
    symbol: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type walletBalanceBySymbolQueryResponse = {
    readonly paymentAsset: {
        readonly asset: {
            readonly decimals: number | null;
            readonly relayId: string;
        };
    };
};
export type walletBalanceBySymbolQuery = {
    readonly response: walletBalanceBySymbolQueryResponse;
    readonly variables: walletBalanceBySymbolQueryVariables;
};



/*
query walletBalanceBySymbolQuery(
  $symbol: String!
  $chain: ChainScalar
) {
  paymentAsset(symbol: $symbol, chain: $chain) {
    asset {
      decimals
      relayId
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "chain"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "symbol"
},
v2 = [
  {
    "kind": "Variable",
    "name": "chain",
    "variableName": "chain"
  },
  {
    "kind": "Variable",
    "name": "symbol",
    "variableName": "symbol"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "walletBalanceBySymbolQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "PaymentAssetType",
        "kind": "LinkedField",
        "name": "paymentAsset",
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
              (v3/*: any*/),
              (v4/*: any*/)
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "walletBalanceBySymbolQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "PaymentAssetType",
        "kind": "LinkedField",
        "name": "paymentAsset",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5b79e8d9226951fd0cfc9e89566b2172",
    "id": null,
    "metadata": {},
    "name": "walletBalanceBySymbolQuery",
    "operationKind": "query",
    "text": "query walletBalanceBySymbolQuery(\n  $symbol: String!\n  $chain: ChainScalar\n) {\n  paymentAsset(symbol: $symbol, chain: $chain) {\n    asset {\n      decimals\n      relayId\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '1dca0d87fcb666c234236628a8de45df';
export default node;
