/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type AddFundsModalQueryVariables = {
    symbol: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type AddFundsModalQueryResponse = {
    readonly paymentAsset: {
        readonly asset: {
            readonly symbol: string | null;
            readonly assetContract: {
                readonly blockExplorerLink: string;
                readonly address: string;
                readonly chain: ChainIdentifier;
            };
        };
    };
};
export type AddFundsModalQuery = {
    readonly response: AddFundsModalQueryResponse;
    readonly variables: AddFundsModalQueryVariables;
};



/*
query AddFundsModalQuery(
  $symbol: String!
  $chain: ChainScalar
) {
  paymentAsset(symbol: $symbol, chain: $chain) {
    asset {
      symbol
      assetContract {
        blockExplorerLink
        address
        chain
        id
      }
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
  "name": "symbol",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blockExplorerLink",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v7 = {
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
    "name": "AddFundsModalQuery",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "assetContract",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
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
    "name": "AddFundsModalQuery",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "assetContract",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2ec97eeab089dce9ae4773293f792765",
    "id": null,
    "metadata": {},
    "name": "AddFundsModalQuery",
    "operationKind": "query",
    "text": "query AddFundsModalQuery(\n  $symbol: String!\n  $chain: ChainScalar\n) {\n  paymentAsset(symbol: $symbol, chain: $chain) {\n    asset {\n      symbol\n      assetContract {\n        blockExplorerLink\n        address\n        chain\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7fd303677811138fa1f5a4672261c248';
export default node;
