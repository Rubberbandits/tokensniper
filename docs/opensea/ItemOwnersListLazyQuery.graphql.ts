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
export type ItemOwnersListLazyQueryVariables = {
    archetype: ArchetypeInputType;
};
export type ItemOwnersListLazyQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ItemOwnersList_data">;
};
export type ItemOwnersListLazyQuery = {
    readonly response: ItemOwnersListLazyQueryResponse;
    readonly variables: ItemOwnersListLazyQueryVariables;
};



/*
query ItemOwnersListLazyQuery(
  $archetype: ArchetypeInputType!
) {
  ...ItemOwnersList_data_ttWlh
}

fragment AccountItem_data on AccountType {
  ...accounts_url
  isCompromised
  imageUrl
  displayName
  config
  address
}

fragment ItemOwnersList_data_ttWlh on Query {
  archetype(archetype: $archetype) {
    asset {
      assetOwners(first: 20) {
        edges {
          node {
            relayId
            quantity
            owner {
              ...AccountItem_data
              id
            }
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
    "name": "ItemOwnersListLazyQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ItemOwnersList_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemOwnersListLazyQuery",
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
                "concreteType": "AssetOwnershipTypeConnection",
                "kind": "LinkedField",
                "name": "assetOwners",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetOwnershipTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetOwnershipType",
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
                            "name": "quantity",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AccountType",
                            "kind": "LinkedField",
                            "name": "owner",
                            "plural": false,
                            "selections": [
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
                              (v3/*: any*/)
                            ],
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
                "storageKey": "assetOwners(first:20)"
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ItemOwnersList_assetOwners",
                "kind": "LinkedHandle",
                "name": "assetOwners"
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
    "cacheID": "fcd0980dacc9d9cd90d7902a9002e5c9",
    "id": null,
    "metadata": {},
    "name": "ItemOwnersListLazyQuery",
    "operationKind": "query",
    "text": "query ItemOwnersListLazyQuery(\n  $archetype: ArchetypeInputType!\n) {\n  ...ItemOwnersList_data_ttWlh\n}\n\nfragment AccountItem_data on AccountType {\n  ...accounts_url\n  isCompromised\n  imageUrl\n  displayName\n  config\n  address\n}\n\nfragment ItemOwnersList_data_ttWlh on Query {\n  archetype(archetype: $archetype) {\n    asset {\n      assetOwners(first: 20) {\n        edges {\n          node {\n            relayId\n            quantity\n            owner {\n              ...AccountItem_data\n              id\n            }\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'db3f633778b1c4c89e84b7d73082e5d7';
export default node;
