/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type StringTraitConfig = {
    name: string;
    value: string;
};
export type NumericTraitConfig = {
    name: string;
    value: number;
    max?: number | null | undefined;
};
export type collectionManagerAssetCreateMutationVariables = {
    assetContract?: string | null | undefined;
    collection?: string | null | undefined;
    description?: string | null | undefined;
    externalLink?: string | null | undefined;
    identity: IdentityInputType;
    imageFile?: unknown | null | undefined;
    maxSupply?: string | null | undefined;
    mediaFile?: unknown | null | undefined;
    name: string;
    tokenId?: string | null | undefined;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
    unlockableContent?: string | null | undefined;
    isNsfw: boolean;
    properties?: Array<StringTraitConfig> | null | undefined;
    levels?: Array<NumericTraitConfig> | null | undefined;
    stats?: Array<NumericTraitConfig> | null | undefined;
};
export type collectionManagerAssetCreateMutationResponse = {
    readonly assets: {
        readonly create: {
            readonly tokenId: string;
            readonly assetContract: {
                readonly address: string;
                readonly chain: ChainIdentifier;
            };
            readonly " $fragmentRefs": FragmentRefs<"asset_url" | "itemEvents_data">;
        };
    };
};
export type collectionManagerAssetCreateMutation = {
    readonly response: collectionManagerAssetCreateMutationResponse;
    readonly variables: collectionManagerAssetCreateMutationVariables;
};



/*
mutation collectionManagerAssetCreateMutation(
  $assetContract: AssetContractRelayID
  $collection: CollectionSlug
  $description: String
  $externalLink: URL
  $identity: IdentityInputType!
  $imageFile: Upload
  $maxSupply: String
  $mediaFile: Upload
  $name: String!
  $tokenId: String
  $chain: ChainScalar
  $unlockableContent: String
  $isNsfw: Boolean!
  $properties: [StringTraitConfig!]
  $levels: [NumericTraitConfig!]
  $stats: [NumericTraitConfig!]
) {
  assets {
    create(assetContract: $assetContract, collection: $collection, description: $description, externalLink: $externalLink, imageFile: $imageFile, maxSupply: $maxSupply, mediaFile: $mediaFile, name: $name, tokenId: $tokenId, chain: $chain, unlockableContent: $unlockableContent, isNsfw: $isNsfw, properties: $properties, levels: $levels, stats: $stats, identity: $identity) {
      tokenId
      assetContract {
        address
        chain
        id
      }
      ...asset_url
      ...itemEvents_data
      id
    }
  }
}

fragment asset_url on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}

fragment itemEvents_data on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "assetContract"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "chain"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collection"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "externalLink"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identity"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imageFile"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isNsfw"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "levels"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maxSupply"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "mediaFile"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "properties"
},
v13 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stats"
},
v14 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tokenId"
},
v15 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "unlockableContent"
},
v16 = [
  {
    "kind": "Variable",
    "name": "assetContract",
    "variableName": "assetContract"
  },
  {
    "kind": "Variable",
    "name": "chain",
    "variableName": "chain"
  },
  {
    "kind": "Variable",
    "name": "collection",
    "variableName": "collection"
  },
  {
    "kind": "Variable",
    "name": "description",
    "variableName": "description"
  },
  {
    "kind": "Variable",
    "name": "externalLink",
    "variableName": "externalLink"
  },
  {
    "kind": "Variable",
    "name": "identity",
    "variableName": "identity"
  },
  {
    "kind": "Variable",
    "name": "imageFile",
    "variableName": "imageFile"
  },
  {
    "kind": "Variable",
    "name": "isNsfw",
    "variableName": "isNsfw"
  },
  {
    "kind": "Variable",
    "name": "levels",
    "variableName": "levels"
  },
  {
    "kind": "Variable",
    "name": "maxSupply",
    "variableName": "maxSupply"
  },
  {
    "kind": "Variable",
    "name": "mediaFile",
    "variableName": "mediaFile"
  },
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "properties",
    "variableName": "properties"
  },
  {
    "kind": "Variable",
    "name": "stats",
    "variableName": "stats"
  },
  {
    "kind": "Variable",
    "name": "tokenId",
    "variableName": "tokenId"
  },
  {
    "kind": "Variable",
    "name": "unlockableContent",
    "variableName": "unlockableContent"
  }
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetContractType",
  "kind": "LinkedField",
  "name": "assetContract",
  "plural": false,
  "selections": [
    (v18/*: any*/),
    (v19/*: any*/)
  ],
  "storageKey": null
},
v21 = [
  (v20/*: any*/),
  (v17/*: any*/)
],
v22 = {
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/),
      (v14/*: any*/),
      (v15/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionManagerAssetCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AssetMutationType",
        "kind": "LinkedField",
        "name": "assets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v16/*: any*/),
            "concreteType": "AssetType",
            "kind": "LinkedField",
            "name": "create",
            "plural": false,
            "selections": [
              (v17/*: any*/),
              (v20/*: any*/),
              {
                "kind": "InlineDataFragmentSpread",
                "name": "asset_url",
                "selections": (v21/*: any*/)
              },
              {
                "kind": "InlineDataFragmentSpread",
                "name": "itemEvents_data",
                "selections": (v21/*: any*/)
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v14/*: any*/),
      (v1/*: any*/),
      (v15/*: any*/),
      (v7/*: any*/),
      (v12/*: any*/),
      (v8/*: any*/),
      (v13/*: any*/)
    ],
    "kind": "Operation",
    "name": "collectionManagerAssetCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AssetMutationType",
        "kind": "LinkedField",
        "name": "assets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v16/*: any*/),
            "concreteType": "AssetType",
            "kind": "LinkedField",
            "name": "create",
            "plural": false,
            "selections": [
              (v17/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "assetContract",
                "plural": false,
                "selections": [
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v22/*: any*/)
                ],
                "storageKey": null
              },
              (v22/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1fcffa5ebbee61448f7e400ce3f1e579",
    "id": null,
    "metadata": {},
    "name": "collectionManagerAssetCreateMutation",
    "operationKind": "mutation",
    "text": "mutation collectionManagerAssetCreateMutation(\n  $assetContract: AssetContractRelayID\n  $collection: CollectionSlug\n  $description: String\n  $externalLink: URL\n  $identity: IdentityInputType!\n  $imageFile: Upload\n  $maxSupply: String\n  $mediaFile: Upload\n  $name: String!\n  $tokenId: String\n  $chain: ChainScalar\n  $unlockableContent: String\n  $isNsfw: Boolean!\n  $properties: [StringTraitConfig!]\n  $levels: [NumericTraitConfig!]\n  $stats: [NumericTraitConfig!]\n) {\n  assets {\n    create(assetContract: $assetContract, collection: $collection, description: $description, externalLink: $externalLink, imageFile: $imageFile, maxSupply: $maxSupply, mediaFile: $mediaFile, name: $name, tokenId: $tokenId, chain: $chain, unlockableContent: $unlockableContent, isNsfw: $isNsfw, properties: $properties, levels: $levels, stats: $stats, identity: $identity) {\n      tokenId\n      assetContract {\n        address\n        chain\n        id\n      }\n      ...asset_url\n      ...itemEvents_data\n      id\n    }\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment itemEvents_data on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n"
  }
};
})();
(node as any).hash = '701cbe1dcd7e6f613cb495765c1a77cc';
export default node;
