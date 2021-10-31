/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionDetailsModalQueryVariables = {
    asset: string;
};
export type CollectionDetailsModalQueryResponse = {
    readonly asset: {
        readonly assetContract: {
            readonly address: string;
            readonly blockExplorerLink: string;
        };
        readonly collection: {
            readonly name: string;
            readonly createdDate: string;
            readonly slug: string;
            readonly owner: {
                readonly address: string;
                readonly createdDate: string;
                readonly displayName: string | null;
                readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
            } | null;
            readonly stats: {
                readonly totalVolume: number;
                readonly totalSales: number;
                readonly totalSupply: number;
            };
            readonly isMintable: boolean;
            readonly " $fragmentRefs": FragmentRefs<"SocialLinks_collection">;
        };
    };
    readonly ethPaymentAssets: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly asset: {
                    readonly usdSpotPrice: number | null;
                };
            } | null;
        } | null>;
    } | null;
};
export type CollectionDetailsModalQuery = {
    readonly response: CollectionDetailsModalQueryResponse;
    readonly variables: CollectionDetailsModalQueryVariables;
};



/*
query CollectionDetailsModalQuery(
  $asset: AssetRelayID!
) {
  asset(asset: $asset) {
    assetContract {
      address
      blockExplorerLink
      id
    }
    collection {
      name
      createdDate
      slug
      owner {
        address
        createdDate
        displayName
        ...AccountLink_data
        id
      }
      stats {
        totalVolume
        totalSales
        totalSupply
        id
      }
      isMintable
      ...SocialLinks_collection
      id
    }
    id
  }
  ethPaymentAssets: paymentAssets(asset_Symbol_Iexact: "ETH", first: 1) {
    edges {
      node {
        asset {
          usdSpotPrice
          id
        }
        id
      }
    }
  }
}

fragment AccountLink_data on AccountType {
  address
  config
  isCompromised
  user {
    publicUsername
    id
  }
  ...ProfileImage_data
  ...wallet_accountKey
  ...accounts_url
}

fragment ProfileImage_data on AccountType {
  imageUrl
  address
}

fragment SocialLinks_collection on CollectionType {
  discordUrl
  externalUrl
  instagramUsername
  mediumUsername
  telegramUrl
  twitterUsername
}

fragment accounts_url on AccountType {
  address
  user {
    publicUsername
    id
  }
}

fragment wallet_accountKey on AccountType {
  address
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "asset"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "asset",
    "variableName": "asset"
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
  "name": "blockExplorerLink",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdDate",
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
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalVolume",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalSales",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalSupply",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMintable",
  "storageKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "asset_Symbol_Iexact",
    "value": "ETH"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "usdSpotPrice",
  "storageKey": null
},
v14 = {
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
    "name": "CollectionDetailsModalQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v3/*: any*/)
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountType",
                "kind": "LinkedField",
                "name": "owner",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v5/*: any*/),
                  (v7/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "AccountLink_data"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionStatsType",
                "kind": "LinkedField",
                "name": "stats",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SocialLinks_collection"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "ethPaymentAssets",
        "args": (v12/*: any*/),
        "concreteType": "PaymentAssetTypeConnection",
        "kind": "LinkedField",
        "name": "paymentAssets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PaymentAssetTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PaymentAssetType",
                "kind": "LinkedField",
                "name": "node",
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
                      (v13/*: any*/)
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
        "storageKey": "paymentAssets(asset_Symbol_Iexact:\"ETH\",first:1)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionDetailsModalQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v3/*: any*/),
              (v14/*: any*/)
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountType",
                "kind": "LinkedField",
                "name": "owner",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v5/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "config",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isCompromised",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserType",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "publicUsername",
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "imageUrl",
                    "storageKey": null
                  },
                  (v14/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionStatsType",
                "kind": "LinkedField",
                "name": "stats",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v14/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "discordUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "externalUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "instagramUsername",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "mediumUsername",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "telegramUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "twitterUsername",
                "storageKey": null
              },
              (v14/*: any*/)
            ],
            "storageKey": null
          },
          (v14/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "ethPaymentAssets",
        "args": (v12/*: any*/),
        "concreteType": "PaymentAssetTypeConnection",
        "kind": "LinkedField",
        "name": "paymentAssets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PaymentAssetTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PaymentAssetType",
                "kind": "LinkedField",
                "name": "node",
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
                      (v13/*: any*/),
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "paymentAssets(asset_Symbol_Iexact:\"ETH\",first:1)"
      }
    ]
  },
  "params": {
    "cacheID": "aa92c8e251aa095f1792f20379c3a019",
    "id": null,
    "metadata": {},
    "name": "CollectionDetailsModalQuery",
    "operationKind": "query",
    "text": "query CollectionDetailsModalQuery(\n  $asset: AssetRelayID!\n) {\n  asset(asset: $asset) {\n    assetContract {\n      address\n      blockExplorerLink\n      id\n    }\n    collection {\n      name\n      createdDate\n      slug\n      owner {\n        address\n        createdDate\n        displayName\n        ...AccountLink_data\n        id\n      }\n      stats {\n        totalVolume\n        totalSales\n        totalSupply\n        id\n      }\n      isMintable\n      ...SocialLinks_collection\n      id\n    }\n    id\n  }\n  ethPaymentAssets: paymentAssets(asset_Symbol_Iexact: \"ETH\", first: 1) {\n    edges {\n      node {\n        asset {\n          usdSpotPrice\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  address\n}\n\nfragment SocialLinks_collection on CollectionType {\n  discordUrl\n  externalUrl\n  instagramUsername\n  mediumUsername\n  telegramUrl\n  twitterUsername\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
  }
};
})();
(node as any).hash = '01e678564ec63e5196263d4c2eee6a96';
export default node;
