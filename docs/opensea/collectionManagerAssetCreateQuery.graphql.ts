/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type collectionManagerAssetCreateQueryVariables = {
    collection?: string | null | undefined;
    isExistingCollection: boolean;
    useDefaultCollection: boolean;
};
export type collectionManagerAssetCreateQueryResponse = {
    readonly account?: {
        readonly defaultCollection: {
            readonly defaultChain: {
                readonly identifier: ChainIdentifier;
            } | null;
            readonly name: string;
            readonly imageUrl: string | null;
            readonly slug: string;
            readonly defaultMintableAssetContract: {
                readonly address: string;
                readonly relayId: string;
                readonly openseaVersion: string | null;
            } | null;
        } | null;
    } | null | undefined;
    readonly assetCollection?: {
        readonly defaultChain: {
            readonly identifier: ChainIdentifier;
        } | null;
        readonly defaultMintableAssetContract: {
            readonly relayId: string;
            readonly address: string;
            readonly openseaVersion: string | null;
        } | null;
        readonly name: string;
        readonly slug: string;
        readonly imageUrl: string | null;
    } | null | undefined;
};
export type collectionManagerAssetCreateQuery = {
    readonly response: collectionManagerAssetCreateQueryResponse;
    readonly variables: collectionManagerAssetCreateQueryVariables;
};



/*
query collectionManagerAssetCreateQuery(
  $collection: CollectionSlug
  $isExistingCollection: Boolean!
  $useDefaultCollection: Boolean!
) {
  account @include(if: $useDefaultCollection) {
    defaultCollection {
      defaultChain {
        identifier
        id
      }
      name
      imageUrl
      slug
      defaultMintableAssetContract {
        address
        relayId
        openseaVersion
        id
      }
      id
    }
    id
  }
  assetCollection: collection(collection: $collection) @include(if: $isExistingCollection) {
    defaultChain {
      identifier
      id
    }
    defaultMintableAssetContract {
      relayId
      address
      openseaVersion
      id
    }
    name
    slug
    imageUrl
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "collection"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "isExistingCollection"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "useDefaultCollection"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "ChainType",
  "kind": "LinkedField",
  "name": "defaultChain",
  "plural": false,
  "selections": [
    (v1/*: any*/)
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "openseaVersion",
  "storageKey": null
},
v9 = [
  {
    "kind": "Variable",
    "name": "collection",
    "variableName": "collection"
  }
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "ChainType",
  "kind": "LinkedField",
  "name": "defaultChain",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionManagerAssetCreateQuery",
    "selections": [
      {
        "condition": "useDefaultCollection",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountType",
            "kind": "LinkedField",
            "name": "account",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "defaultCollection",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetContractType",
                    "kind": "LinkedField",
                    "name": "defaultMintableAssetContract",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
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
        ]
      },
      {
        "condition": "isExistingCollection",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "assetCollection",
            "args": (v9/*: any*/),
            "concreteType": "CollectionType",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "defaultMintableAssetContract",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v6/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "collectionManagerAssetCreateQuery",
    "selections": [
      {
        "condition": "useDefaultCollection",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountType",
            "kind": "LinkedField",
            "name": "account",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "defaultCollection",
                "plural": false,
                "selections": [
                  (v11/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetContractType",
                    "kind": "LinkedField",
                    "name": "defaultMintableAssetContract",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isExistingCollection",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "assetCollection",
            "args": (v9/*: any*/),
            "concreteType": "CollectionType",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "defaultMintableAssetContract",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v6/*: any*/),
                  (v8/*: any*/),
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "f1e103a6599c5b713b746e7d392be4c3",
    "id": null,
    "metadata": {},
    "name": "collectionManagerAssetCreateQuery",
    "operationKind": "query",
    "text": "query collectionManagerAssetCreateQuery(\n  $collection: CollectionSlug\n  $isExistingCollection: Boolean!\n  $useDefaultCollection: Boolean!\n) {\n  account @include(if: $useDefaultCollection) {\n    defaultCollection {\n      defaultChain {\n        identifier\n        id\n      }\n      name\n      imageUrl\n      slug\n      defaultMintableAssetContract {\n        address\n        relayId\n        openseaVersion\n        id\n      }\n      id\n    }\n    id\n  }\n  assetCollection: collection(collection: $collection) @include(if: $isExistingCollection) {\n    defaultChain {\n      identifier\n      id\n    }\n    defaultMintableAssetContract {\n      relayId\n      address\n      openseaVersion\n      id\n    }\n    name\n    slug\n    imageUrl\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '90d6e4eb2a378bfd76a77570edc77ee6';
export default node;
