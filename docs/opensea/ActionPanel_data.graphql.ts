/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ActionTypes = "ASK_FOR_ASSET_SWAP" | "ASK_FOR_DEPOSIT" | "ASSET_APPROVAL" | "ASSET_FREEZE_METADATA" | "ASSET_SWAP" | "ASSET_TRANSFER" | "CANCEL_ORDER" | "CREATE_ORDER" | "FULFILL" | "MATIC_EXIT" | "PAYMENT_ASSET_APPROVAL" | "WAIT_FOR_BALANCE" | "%future added value";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type ActionPanel_data = {
    readonly actionType: ActionTypes;
    readonly askForDeposit: {
        readonly asset: {
            readonly assetContract: {
                readonly chain: ChainIdentifier;
            };
            readonly decimals: number | null;
            readonly symbol: string | null;
            readonly usdSpotPrice: number | null;
        };
        readonly minQuantity: string;
    } | null;
    readonly askForSwap: {
        readonly fromAsset: {
            readonly assetContract: {
                readonly chain: ChainIdentifier;
            };
            readonly relayId: string;
            readonly decimals: number | null;
            readonly symbol: string | null;
        };
        readonly minQuantity: string;
        readonly maxQuantity: string | null;
        readonly toAsset: {
            readonly assetContract: {
                readonly chain: ChainIdentifier;
            };
            readonly relayId: string;
            readonly symbol: string | null;
        };
    } | null;
    readonly transaction: {
        readonly chainIdentifier: ChainIdentifier;
        readonly " $fragmentRefs": FragmentRefs<"trader_transaction">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"trader_sign_and_post" | "trader_meta_transaction">;
    readonly " $refType": "ActionPanel_data";
};
export type ActionPanel_data$data = ActionPanel_data;
export type ActionPanel_data$key = {
    readonly " $data"?: ActionPanel_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ActionPanel_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
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
    }
  ],
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minQuantity",
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
  "name": "chainIdentifier",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v7 = [
  (v6/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMessage",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientSignatureStandard",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActionPanel_data",
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
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "usdSpotPrice",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v3/*: any*/)
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
            (v0/*: any*/),
            (v4/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        },
        (v3/*: any*/),
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
            (v0/*: any*/),
            (v4/*: any*/),
            (v2/*: any*/)
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
        (v5/*: any*/),
        {
          "kind": "InlineDataFragmentSpread",
          "name": "trader_transaction",
          "selections": [
            (v5/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "AddressDataType",
              "kind": "LinkedField",
              "name": "source",
              "plural": false,
              "selections": (v7/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "AddressDataType",
              "kind": "LinkedField",
              "name": "destination",
              "plural": false,
              "selections": (v7/*: any*/),
              "storageKey": null
            },
            (v6/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "data",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "trader_sign_and_post",
      "selections": [
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
            (v8/*: any*/),
            (v9/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "orderId",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "trader_meta_transaction",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MetaTransactionDataType",
          "kind": "LinkedField",
          "name": "metaTransaction",
          "plural": false,
          "selections": [
            (v8/*: any*/),
            (v9/*: any*/),
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
      ]
    }
  ],
  "type": "ActionType",
  "abstractKey": null
};
})();
(node as any).hash = 'a6b0926d8e3be83b36827c17357e0eb6';
export default node;
