/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Config = "AFFILIATE" | "AFFILIATE_BLACKLISTED" | "AFFILIATE_REQUESTED" | "MODERATOR" | "PARTNER" | "VERIFIED" | "%future added value";
export type NavSearchQueryVariables = {
    query: string;
};
export type NavSearchQueryResponse = {
    readonly accounts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly address: string;
                readonly config: Config | null;
                readonly imageUrl: string;
                readonly relayId: string;
                readonly isCompromised: boolean;
                readonly user: {
                    readonly publicUsername: string | null;
                } | null;
                readonly " $fragmentRefs": FragmentRefs<"accounts_url">;
            } | null;
        } | null>;
    } | null;
    readonly searchCollections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly imageUrl: string | null;
                readonly name: string;
                readonly relayId: string;
                readonly stats: {
                    readonly totalSupply: number;
                };
                readonly " $fragmentRefs": FragmentRefs<"verification_data" | "collection_url">;
            } | null;
        } | null>;
    } | null;
};
export type NavSearchQuery = {
    readonly response: NavSearchQueryResponse;
    readonly variables: NavSearchQueryVariables;
};



/*
query NavSearchQuery(
  $query: String!
) {
  accounts(first: 4, query: $query) {
    edges {
      node {
        address
        config
        imageUrl
        relayId
        isCompromised
        user {
          publicUsername
          id
        }
        ...accounts_url
        id
      }
    }
  }
  searchCollections(first: 4, query: $query) {
    edges {
      node {
        imageUrl
        name
        relayId
        stats {
          totalSupply
          id
        }
        ...verification_data
        ...collection_url
        id
      }
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

fragment collection_url on CollectionType {
  slug
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
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
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
  "name": "config",
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
  "name": "relayId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isCompromised",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publicUsername",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "UserType",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v7/*: any*/)
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSafelisted",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v15 = {
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
    "name": "NavSearchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AccountTypeConnection",
        "kind": "LinkedField",
        "name": "accounts",
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "InlineDataFragmentSpread",
                    "name": "accounts_url",
                    "selections": [
                      (v2/*: any*/),
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
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CollectionTypeConnection",
        "kind": "LinkedField",
        "name": "searchCollections",
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
                  (v4/*: any*/),
                  (v9/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionStatsType",
                    "kind": "LinkedField",
                    "name": "stats",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "InlineDataFragmentSpread",
                    "name": "verification_data",
                    "selections": [
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ]
                  },
                  {
                    "kind": "InlineDataFragmentSpread",
                    "name": "collection_url",
                    "selections": [
                      (v14/*: any*/)
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NavSearchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AccountTypeConnection",
        "kind": "LinkedField",
        "name": "accounts",
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserType",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
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
        "args": (v1/*: any*/),
        "concreteType": "CollectionTypeConnection",
        "kind": "LinkedField",
        "name": "searchCollections",
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
                  (v4/*: any*/),
                  (v9/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionStatsType",
                    "kind": "LinkedField",
                    "name": "stats",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/)
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
    "cacheID": "0a07ad3d5e54fdc84e99c60f1e8621a8",
    "id": null,
    "metadata": {},
    "name": "NavSearchQuery",
    "operationKind": "query",
    "text": "query NavSearchQuery(\n  $query: String!\n) {\n  accounts(first: 4, query: $query) {\n    edges {\n      node {\n        address\n        config\n        imageUrl\n        relayId\n        isCompromised\n        user {\n          publicUsername\n          id\n        }\n        ...accounts_url\n        id\n      }\n    }\n  }\n  searchCollections(first: 4, query: $query) {\n    edges {\n      node {\n        imageUrl\n        name\n        relayId\n        stats {\n          totalSupply\n          id\n        }\n        ...verification_data\n        ...collection_url\n        id\n      }\n    }\n  }\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment verification_data on CollectionType {\n  isMintable\n  isSafelisted\n  isVerified\n}\n"
  }
};
})();
(node as any).hash = '4ee24e4b9402e9419362752487da447f';
export default node;
