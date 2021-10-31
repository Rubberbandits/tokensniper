/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type ArchetypeInputType = {
    assetContractAddress: string;
    tokenId: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type TransferModalContentQueryVariables = {
    archetype: ArchetypeInputType;
};
export type TransferModalContentQueryResponse = {
    readonly archetype: {
        readonly asset: {
            readonly assetContract: {
                readonly address: string;
            };
            readonly relayId: string;
            readonly decimals: number | null;
            readonly chain: {
                readonly identifier: ChainIdentifier;
            };
            readonly collection: {
                readonly slug: string;
            };
        } | null;
        readonly ownedQuantity: string | null;
        readonly quantity: string;
    } | null;
};
export type TransferModalContentQuery = {
    readonly response: TransferModalContentQueryResponse;
    readonly variables: TransferModalContentQueryVariables;
};



/*
query TransferModalContentQuery(
  $archetype: ArchetypeInputType!
) {
  archetype(archetype: $archetype) {
    asset {
      assetContract {
        address
        id
      }
      relayId
      decimals
      chain {
        identifier
        id
      }
      collection {
        slug
        id
      }
      id
    }
    ownedQuantity(identity: {})
    quantity
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "archetype"
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
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "identity",
      "value": {}
    }
  ],
  "kind": "ScalarField",
  "name": "ownedQuantity",
  "storageKey": "ownedQuantity(identity:{})"
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
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
    "name": "TransferModalContentQuery",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "assetContract",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ChainType",
                "kind": "LinkedField",
                "name": "chain",
                "plural": false,
                "selections": [
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v8/*: any*/)
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
    "name": "TransferModalContentQuery",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "assetContract",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ChainType",
                "kind": "LinkedField",
                "name": "chain",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6bfb7987abcc4d8bdc166cbb27563570",
    "id": null,
    "metadata": {},
    "name": "TransferModalContentQuery",
    "operationKind": "query",
    "text": "query TransferModalContentQuery(\n  $archetype: ArchetypeInputType!\n) {\n  archetype(archetype: $archetype) {\n    asset {\n      assetContract {\n        address\n        id\n      }\n      relayId\n      decimals\n      chain {\n        identifier\n        id\n      }\n      collection {\n        slug\n        id\n      }\n      id\n    }\n    ownedQuantity(identity: {})\n    quantity\n  }\n}\n"
  }
};
})();
(node as any).hash = '72c5261640070a4140b551ab1d944be7';
export default node;
