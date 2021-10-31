/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type traderTransactionQueryVariables = {
    transactionHash: string;
    chain: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value";
};
export type traderTransactionQueryResponse = {
    readonly transaction: {
        readonly blockHash: string;
    } | null;
};
export type traderTransactionQuery = {
    readonly response: traderTransactionQueryResponse;
    readonly variables: traderTransactionQueryVariables;
};



/*
query traderTransactionQuery(
  $transactionHash: String!
  $chain: ChainScalar!
) {
  transaction(transactionHash: $transactionHash, chain: $chain) {
    blockHash
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
  "name": "transactionHash"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "chain",
        "variableName": "chain"
      },
      {
        "kind": "Variable",
        "name": "transactionHash",
        "variableName": "transactionHash"
      }
    ],
    "concreteType": "TransactionDetailsType",
    "kind": "LinkedField",
    "name": "transaction",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "blockHash",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "traderTransactionQuery",
    "selections": (v2/*: any*/),
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
    "name": "traderTransactionQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5eb9d594cbfb984f47060da1a96ba1e6",
    "id": null,
    "metadata": {},
    "name": "traderTransactionQuery",
    "operationKind": "query",
    "text": "query traderTransactionQuery(\n  $transactionHash: String!\n  $chain: ChainScalar!\n) {\n  transaction(transactionHash: $transactionHash, chain: $chain) {\n    blockHash\n  }\n}\n"
  }
};
})();
(node as any).hash = '8772d7162dcb247665ad4c23466a81da';
export default node;
