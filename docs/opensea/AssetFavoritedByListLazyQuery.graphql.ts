/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArchetypeInputType = {
    assetContractAddress: string;
    tokenId: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type AssetFavoritedByListLazyQueryVariables = {
    archetype: ArchetypeInputType;
};
export type AssetFavoritedByListLazyQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AssetFavoritedByList_data">;
};
export type AssetFavoritedByListLazyQuery = {
    readonly response: AssetFavoritedByListLazyQueryResponse;
    readonly variables: AssetFavoritedByListLazyQueryVariables;
};



/*
query AssetFavoritedByListLazyQuery(
  $archetype: ArchetypeInputType!
) {
  ...AssetFavoritedByList_data_ttWlh
}

fragment AccountItem_data on AccountType {
  ...accounts_url
  isCompromised
  imageUrl
  displayName
  config
  address
}

fragment AssetFavoritedByList_data_ttWlh on Query {
  archetype(archetype: $archetype) {
    asset {
      favoritedBy(first: 20) {
        edges {
          node {
            relayId
            ...AccountItem_data
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
}

fragment accounts_url on AccountType {
  address
  user {
    publicUsername
    id
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v3 = {
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
    "name": "AssetFavoritedByListLazyQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "AssetFavoritedByList_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AssetFavoritedByListLazyQuery",
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
                "args": (v2/*: any*/),
                "concreteType": "AccountTypeConnection",
                "kind": "LinkedField",
                "name": "favoritedBy",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccountTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AccountType",
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
                            "name": "address",
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
                              (v3/*: any*/)
                            ],
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
                            "kind": "ScalarField",
                            "name": "imageUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayName",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "config",
                            "storageKey": null
                          },
                          (v3/*: any*/),
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
                "storageKey": "favoritedBy(first:20)"
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "AssetFavoritedByList_asset_favoritedBy",
                "kind": "LinkedHandle",
                "name": "favoritedBy"
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0f372a176fb6f2548e9835432fc51a90",
    "id": null,
    "metadata": {},
    "name": "AssetFavoritedByListLazyQuery",
    "operationKind": "query",
    "text": "query AssetFavoritedByListLazyQuery(\n  $archetype: ArchetypeInputType!\n) {\n  ...AssetFavoritedByList_data_ttWlh\n}\n\nfragment AccountItem_data on AccountType {\n  ...accounts_url\n  isCompromised\n  imageUrl\n  displayName\n  config\n  address\n}\n\nfragment AssetFavoritedByList_data_ttWlh on Query {\n  archetype(archetype: $archetype) {\n    asset {\n      favoritedBy(first: 20) {\n        edges {\n          node {\n            relayId\n            ...AccountItem_data\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '3d162b5d14ccd88a15817807c0d5e0c7';
export default node;
