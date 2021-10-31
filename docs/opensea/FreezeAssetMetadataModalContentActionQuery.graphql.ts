/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FreezeAssetMetadataModalContentActionQueryVariables = {
    assetId: string;
    jobId: string;
};
export type FreezeAssetMetadataModalContentActionQueryResponse = {
    readonly blockchain: {
        readonly freezeMetadataAction: {
            readonly uri: string | null;
            readonly action: {
                readonly " $fragmentRefs": FragmentRefs<"ActionPanel_data">;
            } | null;
        };
    };
};
export type FreezeAssetMetadataModalContentActionQuery = {
    readonly response: FreezeAssetMetadataModalContentActionQueryResponse;
    readonly variables: FreezeAssetMetadataModalContentActionQueryVariables;
};



/*
query FreezeAssetMetadataModalContentActionQuery(
  $assetId: AssetRelayID!
  $jobId: JobScalar!
) {
  blockchain {
    freezeMetadataAction(asset: $assetId, job: $jobId) {
      uri
      action {
        ...ActionPanel_data
      }
    }
  }
}

fragment ActionPanel_data on ActionType {
  actionType
  askForDeposit {
    asset {
      assetContract {
        chain
        id
      }
      decimals
      symbol
      usdSpotPrice
      id
    }
    minQuantity
  }
  askForSwap {
    fromAsset {
      assetContract {
        chain
        id
      }
      relayId
      decimals
      symbol
      id
    }
    minQuantity
    maxQuantity
    toAsset {
      assetContract {
        chain
        id
      }
      relayId
      symbol
      id
    }
  }
  transaction {
    chainIdentifier
    ...trader_transaction
  }
  ...trader_sign_and_post
  ...trader_meta_transaction
}

fragment trader_meta_transaction on ActionType {
  metaTransaction {
    clientMessage
    clientSignatureStandard
    functionSignature
    verifyingContract
  }
}

fragment trader_sign_and_post on ActionType {
  signAndPost {
    orderData
    serverSignature
    clientMessage
    clientSignatureStandard
    orderId
  }
}

fragment trader_transaction on TransactionSubmissionDataType {
  chainIdentifier
  source {
    value
  }
  destination {
    value
  }
  value
  data
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
    "name": "jobId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "asset",
    "variableName": "assetId"
  },
  {
    "kind": "Variable",
    "name": "job",
    "variableName": "jobId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uri",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetContractType",
  "kind": "LinkedField",
  "name": "assetContract",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chain",
      "storageKey": null
    },
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minQuantity",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v10 = [
  (v9/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMessage",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientSignatureStandard",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FreezeAssetMetadataModalContentActionQuery",
    "selections": [
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
            "args": (v1/*: any*/),
            "concreteType": "FreezeMetadataActionDataType",
            "kind": "LinkedField",
            "name": "freezeMetadataAction",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ActionType",
                "kind": "LinkedField",
                "name": "action",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ActionPanel_data"
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
    "name": "FreezeAssetMetadataModalContentActionQuery",
    "selections": [
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
            "args": (v1/*: any*/),
            "concreteType": "FreezeMetadataActionDataType",
            "kind": "LinkedField",
            "name": "freezeMetadataAction",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ActionType",
                "kind": "LinkedField",
                "name": "action",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "actionType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AskForDepositType",
                    "kind": "LinkedField",
                    "name": "askForDeposit",
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
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "usdSpotPrice",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AskForSwapType",
                    "kind": "LinkedField",
                    "name": "askForSwap",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetType",
                        "kind": "LinkedField",
                        "name": "fromAsset",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v8/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "maxQuantity",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetType",
                        "kind": "LinkedField",
                        "name": "toAsset",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v8/*: any*/),
                          (v6/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TransactionSubmissionDataType",
                    "kind": "LinkedField",
                    "name": "transaction",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "chainIdentifier",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AddressDataType",
                        "kind": "LinkedField",
                        "name": "source",
                        "plural": false,
                        "selections": (v10/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AddressDataType",
                        "kind": "LinkedField",
                        "name": "destination",
                        "plural": false,
                        "selections": (v10/*: any*/),
                        "storageKey": null
                      },
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "data",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SignAndPostType",
                    "kind": "LinkedField",
                    "name": "signAndPost",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "orderData",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "serverSignature",
                        "storageKey": null
                      },
                      (v11/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "orderId",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MetaTransactionDataType",
                    "kind": "LinkedField",
                    "name": "metaTransaction",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "functionSignature",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "verifyingContract",
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
    "cacheID": "c689f54b25fa19b8c3a3b3257e58076a",
    "id": null,
    "metadata": {},
    "name": "FreezeAssetMetadataModalContentActionQuery",
    "operationKind": "query",
    "text": "query FreezeAssetMetadataModalContentActionQuery(\n  $assetId: AssetRelayID!\n  $jobId: JobScalar!\n) {\n  blockchain {\n    freezeMetadataAction(asset: $assetId, job: $jobId) {\n      uri\n      action {\n        ...ActionPanel_data\n      }\n    }\n  }\n}\n\nfragment ActionPanel_data on ActionType {\n  actionType\n  askForDeposit {\n    asset {\n      assetContract {\n        chain\n        id\n      }\n      decimals\n      symbol\n      usdSpotPrice\n      id\n    }\n    minQuantity\n  }\n  askForSwap {\n    fromAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      decimals\n      symbol\n      id\n    }\n    minQuantity\n    maxQuantity\n    toAsset {\n      assetContract {\n        chain\n        id\n      }\n      relayId\n      symbol\n      id\n    }\n  }\n  transaction {\n    chainIdentifier\n    ...trader_transaction\n  }\n  ...trader_sign_and_post\n  ...trader_meta_transaction\n}\n\nfragment trader_meta_transaction on ActionType {\n  metaTransaction {\n    clientMessage\n    clientSignatureStandard\n    functionSignature\n    verifyingContract\n  }\n}\n\nfragment trader_sign_and_post on ActionType {\n  signAndPost {\n    orderData\n    serverSignature\n    clientMessage\n    clientSignatureStandard\n    orderId\n  }\n}\n\nfragment trader_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
  }
};
})();
(node as any).hash = '1d72e7616a26f9fc5bb31798b4adaeee';
export default node;
