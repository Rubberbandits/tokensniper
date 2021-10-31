/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type WalletFundsQueryVariables = {
    address: string;
};
export type WalletFundsQueryResponse = {
    readonly wallet: {
        readonly funds: ReadonlyArray<{
            readonly name: string | null;
            readonly symbol: string;
            readonly image: string | null;
            readonly quantity: string;
            readonly usdPrice: string | null;
            readonly chain: ChainIdentifier;
            readonly supportedSwaps: ReadonlyArray<{
                readonly symbol: string;
                readonly chain: {
                    readonly identifier: ChainIdentifier;
                };
            }>;
        }>;
    };
};
export type WalletFundsQuery = {
    readonly response: WalletFundsQueryResponse;
    readonly variables: WalletFundsQueryVariables;
};



/*
query WalletFundsQuery(
  $address: AddressScalar!
) {
  wallet(address: $address) {
    funds {
      name
      symbol
      image
      quantity
      usdPrice
      chain
      supportedSwaps {
        symbol
        chain {
          identifier
          id
        }
        id
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
    "name": "address"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "address",
    "variableName": "address"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
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
  "name": "image",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "usdPrice",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v9 = {
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
    "name": "WalletFundsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "WalletType",
        "kind": "LinkedField",
        "name": "wallet",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "WalletFundsType",
            "kind": "LinkedField",
            "name": "funds",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "PaymentAssetType",
                "kind": "LinkedField",
                "name": "supportedSwaps",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ChainType",
                    "kind": "LinkedField",
                    "name": "chain",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/)
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WalletFundsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "WalletType",
        "kind": "LinkedField",
        "name": "wallet",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "WalletFundsType",
            "kind": "LinkedField",
            "name": "funds",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "PaymentAssetType",
                "kind": "LinkedField",
                "name": "supportedSwaps",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ChainType",
                    "kind": "LinkedField",
                    "name": "chain",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/)
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
    "cacheID": "3fa7eef2a196e6f13f6e4df7c9ec9a57",
    "id": null,
    "metadata": {},
    "name": "WalletFundsQuery",
    "operationKind": "query",
    "text": "query WalletFundsQuery(\n  $address: AddressScalar!\n) {\n  wallet(address: $address) {\n    funds {\n      name\n      symbol\n      image\n      quantity\n      usdPrice\n      chain\n      supportedSwaps {\n        symbol\n        chain {\n          identifier\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '97616c7f2271c10ab47c26ac047a26a9';
export default node;
