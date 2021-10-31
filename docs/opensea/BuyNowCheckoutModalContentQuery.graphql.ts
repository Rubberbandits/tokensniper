/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BuyNowCheckoutModalContentQueryVariables = {
    orderId: string;
};
export type BuyNowCheckoutModalContentQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"BuyNowCheckoutModalContent_data">;
};
export type BuyNowCheckoutModalContentQuery = {
    readonly response: BuyNowCheckoutModalContentQueryResponse;
    readonly variables: BuyNowCheckoutModalContentQueryVariables;
};



/*
query BuyNowCheckoutModalContentQuery(
  $orderId: OrderRelayID!
) {
  ...BuyNowCheckoutModalContent_data_ZqgzG
}

fragment BuyNowCheckoutModalContent_data_ZqgzG on Query {
  order(order: $orderId) {
    relayId
    item {
      __typename
      ... on AssetType {
        collection {
          ...verification_data
          id
        }
        relayId
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    takerAssetBundle {
      assetQuantities(first: 1) {
        edges {
          node {
            asset {
              relayId
              id
            }
            id
          }
        }
      }
      id
    }
    id
  }
}

fragment verification_data on CollectionType {
  isMintable
  isSafelisted
  isVerified
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v2 = {
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
    "name": "BuyNowCheckoutModalContentQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "orderId",
            "variableName": "orderId"
          }
        ],
        "kind": "FragmentSpread",
        "name": "BuyNowCheckoutModalContent_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BuyNowCheckoutModalContentQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "order",
            "variableName": "orderId"
          }
        ],
        "concreteType": "OrderV2Type",
        "kind": "LinkedField",
        "name": "order",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionType",
                    "kind": "LinkedField",
                    "name": "collection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isMintable",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isSafelisted",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isVerified",
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "type": "AssetType",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetBundleType",
            "kind": "LinkedField",
            "name": "takerAssetBundle",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1
                  }
                ],
                "concreteType": "AssetQuantityTypeConnection",
                "kind": "LinkedField",
                "name": "assetQuantities",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetQuantityTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetQuantityType",
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
                              (v1/*: any*/),
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "assetQuantities(first:1)"
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "927ebf6bc06becdfad4de07593dedb38",
    "id": null,
    "metadata": {},
    "name": "BuyNowCheckoutModalContentQuery",
    "operationKind": "query",
    "text": "query BuyNowCheckoutModalContentQuery(\n  $orderId: OrderRelayID!\n) {\n  ...BuyNowCheckoutModalContent_data_ZqgzG\n}\n\nfragment BuyNowCheckoutModalContent_data_ZqgzG on Query {\n  order(order: $orderId) {\n    relayId\n    item {\n      __typename\n      ... on AssetType {\n        collection {\n          ...verification_data\n          id\n        }\n        relayId\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    takerAssetBundle {\n      assetQuantities(first: 1) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment verification_data on CollectionType {\n  isMintable\n  isSafelisted\n  isVerified\n}\n"
  }
};
})();
(node as any).hash = '16547cbd413957852b825ef3ccb67dd1';
export default node;
