/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type NavSearchAssetsQueryVariables = {
    query: string;
};
export type NavSearchAssetsQueryResponse = {
    readonly search: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly asset: {
                    readonly assetContract: {
                        readonly address: string;
                        readonly chain: ChainIdentifier;
                    };
                    readonly imageUrl: string | null;
                    readonly name: string | null;
                    readonly relayId: string;
                    readonly tokenId: string;
                    readonly " $fragmentRefs": FragmentRefs<"asset_url">;
                } | null;
            } | null;
        } | null>;
    } | null;
};
export type NavSearchAssetsQuery = {
    readonly response: NavSearchAssetsQueryResponse;
    readonly variables: NavSearchAssetsQueryVariables;
};



/*
query NavSearchAssetsQuery(
  $query: String!
) {
  search(first: 4, querystring: $query, resultType: ASSETS, excludeHiddenCollections: true) {
    edges {
      node {
        asset {
          ...asset_url
          assetContract {
            address
            chain
            id
          }
          imageUrl
          name
          relayId
          tokenId
          id
        }
      }
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "excludeHiddenCollections",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  },
  {
    "kind": "Variable",
    "name": "querystring",
    "variableName": "query"
  },
  {
    "kind": "Literal",
    "name": "resultType",
    "value": "ASSETS"
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
  "name": "chain",
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
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "name": "tokenId",
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
    "name": "NavSearchAssetsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchTypeConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchResultType",
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
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "asset_url",
                        "selections": [
                          (v4/*: any*/),
                          (v8/*: any*/)
                        ]
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NavSearchAssetsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchTypeConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchResultType",
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
                        "concreteType": "AssetContractType",
                        "kind": "LinkedField",
                        "name": "assetContract",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v9/*: any*/)
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
    "cacheID": "8f4cf06abe1811cd54d6cf643520f986",
    "id": null,
    "metadata": {},
    "name": "NavSearchAssetsQuery",
    "operationKind": "query",
    "text": "query NavSearchAssetsQuery(\n  $query: String!\n) {\n  search(first: 4, querystring: $query, resultType: ASSETS, excludeHiddenCollections: true) {\n    edges {\n      node {\n        asset {\n          ...asset_url\n          assetContract {\n            address\n            chain\n            id\n          }\n          imageUrl\n          name\n          relayId\n          tokenId\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n"
  }
};
})();
(node as any).hash = 'b355166b2eed61fe5eb81b323eee2843';
export default node;
