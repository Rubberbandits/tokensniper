/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type WalletSidebarHeaderRefreshFundsMutationVariables = {};
export type WalletSidebarHeaderRefreshFundsMutationResponse = {
    readonly wallet: {
        readonly refreshFunds: ReadonlyArray<{
            readonly symbol: string;
            readonly chain: ChainIdentifier;
            readonly quantity: string;
        }>;
    };
};
export type WalletSidebarHeaderRefreshFundsMutation = {
    readonly response: WalletSidebarHeaderRefreshFundsMutationResponse;
    readonly variables: WalletSidebarHeaderRefreshFundsMutationVariables;
};



/*
mutation WalletSidebarHeaderRefreshFundsMutation {
  wallet {
    refreshFunds {
      symbol
      chain
      quantity
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "WalletMutationType",
    "kind": "LinkedField",
    "name": "wallet",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "WalletFundsType",
        "kind": "LinkedField",
        "name": "refreshFunds",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "symbol",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "chain",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quantity",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "WalletSidebarHeaderRefreshFundsMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "WalletSidebarHeaderRefreshFundsMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1b0dfd87414c89f1b3af8ced008af321",
    "id": null,
    "metadata": {},
    "name": "WalletSidebarHeaderRefreshFundsMutation",
    "operationKind": "mutation",
    "text": "mutation WalletSidebarHeaderRefreshFundsMutation {\n  wallet {\n    refreshFunds {\n      symbol\n      chain\n      quantity\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '50b55adae10cb854f757fcb080621367';
export default node;
