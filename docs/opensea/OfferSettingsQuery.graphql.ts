/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferSettingsQueryVariables = {
    count: number;
    cursor?: string | null | undefined;
};
export type OfferSettingsQueryResponse = {
    readonly ethPaymentAssets: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"OfferSettingsTable_ethPaymentAsset">;
            } | null;
        } | null>;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"OfferSettingsTable_account">;
};
export type OfferSettingsQuery = {
    readonly response: OfferSettingsQueryResponse;
    readonly variables: OfferSettingsQueryVariables;
};



/*
query OfferSettingsQuery(
  $count: Int!
  $cursor: String
) {
  ...OfferSettingsTable_account
  ethPaymentAssets: paymentAssets(asset_Symbol_Iexact: "ETH", first: 1) {
    edges {
      node {
        ...OfferSettingsTable_ethPaymentAsset
        id
      }
    }
  }
}

fragment OfferMinimumInput_paymentAsset on PaymentAssetType {
  asset {
    decimals
    imageUrl
    symbol
    usdSpotPrice
    id
  }
}

fragment OfferMinimumModal_paymentAsset on PaymentAssetType {
  ...OfferMinimumInput_paymentAsset
}

fragment OfferSettingsCollection_collection on CollectionType {
  assetCount
  imageUrl
  isVerified
  name
  floorPrice
  slug
  ...collection_url
}

fragment OfferSettingsTable_account on Query {
  account {
    assetOwnedCollections(after: $cursor, first: $count) {
      edges {
        node {
          relayId
          slug
          name
          floorPrice
          orderRule {
            offersEnabled
            offerMinimum
          }
          ...OfferSettingsCollection_collection
          id
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    id
  }
}

fragment OfferSettingsTable_ethPaymentAsset on PaymentAssetType {
  ...OfferMinimumInput_paymentAsset
  ...OfferMinimumModal_paymentAsset
}

fragment collection_url on CollectionType {
  slug
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
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
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v4 = {
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
    "name": "OfferSettingsQuery",
    "selections": [
      {
        "alias": "ethPaymentAssets",
        "args": (v1/*: any*/),
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
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "OfferSettingsTable_ethPaymentAsset"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "paymentAssets(asset_Symbol_Iexact:\"ETH\",first:1)"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "OfferSettingsTable_account"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OfferSettingsQuery",
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
            "args": (v2/*: any*/),
            "concreteType": "CollectionTypeConnection",
            "kind": "LinkedField",
            "name": "assetOwnedCollections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionTypeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionType",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "relayId",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "slug",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "floorPrice",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CollectionOrderRuleType",
                        "kind": "LinkedField",
                        "name": "orderRule",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "offersEnabled",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "offerMinimum",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "assetCount",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isVerified",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "OfferSettingsTable_assetOwnedCollections",
            "kind": "LinkedHandle",
            "name": "assetOwnedCollections"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "ethPaymentAssets",
        "args": (v1/*: any*/),
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "decimals",
                        "storageKey": null
                      },
                      (v3/*: any*/),
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
                        "name": "usdSpotPrice",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
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
    "cacheID": "19f9a6a8475e6a1b16dd669f175deb01",
    "id": null,
    "metadata": {},
    "name": "OfferSettingsQuery",
    "operationKind": "query",
    "text": "query OfferSettingsQuery(\n  $count: Int!\n  $cursor: String\n) {\n  ...OfferSettingsTable_account\n  ethPaymentAssets: paymentAssets(asset_Symbol_Iexact: \"ETH\", first: 1) {\n    edges {\n      node {\n        ...OfferSettingsTable_ethPaymentAsset\n        id\n      }\n    }\n  }\n}\n\nfragment OfferMinimumInput_paymentAsset on PaymentAssetType {\n  asset {\n    decimals\n    imageUrl\n    symbol\n    usdSpotPrice\n    id\n  }\n}\n\nfragment OfferMinimumModal_paymentAsset on PaymentAssetType {\n  ...OfferMinimumInput_paymentAsset\n}\n\nfragment OfferSettingsCollection_collection on CollectionType {\n  assetCount\n  imageUrl\n  isVerified\n  name\n  floorPrice\n  slug\n  ...collection_url\n}\n\nfragment OfferSettingsTable_account on Query {\n  account {\n    assetOwnedCollections(after: $cursor, first: $count) {\n      edges {\n        node {\n          relayId\n          slug\n          name\n          floorPrice\n          orderRule {\n            offersEnabled\n            offerMinimum\n          }\n          ...OfferSettingsCollection_collection\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    id\n  }\n}\n\nfragment OfferSettingsTable_ethPaymentAsset on PaymentAssetType {\n  ...OfferMinimumInput_paymentAsset\n  ...OfferMinimumModal_paymentAsset\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n"
  }
};
})();
(node as any).hash = 'bf414be2a49e839a0919a0d8edfe8bbb';
export default node;
