/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type traderRelayMetaTransactionMutationVariables = {
    clientSignature: string;
    functionSignature: string;
    verifyingContract: string;
};
export type traderRelayMetaTransactionMutationResponse = {
    readonly blockchain: {
        readonly metaTransactions: {
            readonly relay: {
                readonly transactionHash: string;
                readonly blockExplorerLink: string;
                readonly chain: {
                    readonly identifier: ChainIdentifier;
                };
            } | null;
        };
    };
};
export type traderRelayMetaTransactionMutation = {
    readonly response: traderRelayMetaTransactionMutationResponse;
    readonly variables: traderRelayMetaTransactionMutationVariables;
};



/*
mutation traderRelayMetaTransactionMutation(
  $clientSignature: String!
  $functionSignature: String!
  $verifyingContract: AccountRelayID!
) {
  blockchain {
    metaTransactions {
      relay(identity: {}, clientSignature: $clientSignature, functionSignature: $functionSignature, verifyingContract: $verifyingContract) {
        transactionHash
        blockExplorerLink
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
    "name": "clientSignature"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "functionSignature"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "verifyingContract"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "clientSignature",
    "variableName": "clientSignature"
  },
  {
    "kind": "Variable",
    "name": "functionSignature",
    "variableName": "functionSignature"
  },
  {
    "kind": "Literal",
    "name": "identity",
    "value": {}
  },
  {
    "kind": "Variable",
    "name": "verifyingContract",
    "variableName": "verifyingContract"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "transactionHash",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blockExplorerLink",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "traderRelayMetaTransactionMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockchainMutationType",
        "kind": "LinkedField",
        "name": "blockchain",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MetaTransactionMutationType",
            "kind": "LinkedField",
            "name": "metaTransactions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "TransactionType",
                "kind": "LinkedField",
                "name": "relay",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ChainType",
                    "kind": "LinkedField",
                    "name": "chain",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/)
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
    "name": "traderRelayMetaTransactionMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlockchainMutationType",
        "kind": "LinkedField",
        "name": "blockchain",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MetaTransactionMutationType",
            "kind": "LinkedField",
            "name": "metaTransactions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "TransactionType",
                "kind": "LinkedField",
                "name": "relay",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ChainType",
                    "kind": "LinkedField",
                    "name": "chain",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
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
    "cacheID": "f489ad8c1eca2751d0865d49abb0cfc4",
    "id": null,
    "metadata": {},
    "name": "traderRelayMetaTransactionMutation",
    "operationKind": "mutation",
    "text": "mutation traderRelayMetaTransactionMutation(\n  $clientSignature: String!\n  $functionSignature: String!\n  $verifyingContract: AccountRelayID!\n) {\n  blockchain {\n    metaTransactions {\n      relay(identity: {}, clientSignature: $clientSignature, functionSignature: $functionSignature, verifyingContract: $verifyingContract) {\n        transactionHash\n        blockExplorerLink\n        chain {\n          identifier\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'aed445de3d413106b38bb03fede686f3';
export default node;
