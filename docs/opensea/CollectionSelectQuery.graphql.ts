/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
export type CollectionSelectQueryVariables = {
    query?: string | null | undefined;
    editor?: IdentityInputType | null | undefined;
};
export type CollectionSelectQueryResponse = {
    readonly collections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly name: string;
                readonly imageUrl: string | null;
                readonly slug: string;
                readonly defaultMintableAssetContract: {
                    readonly address: string;
                    readonly relayId: string;
                    readonly openseaVersion: string | null;
                } | null;
            } | null;
        } | null>;
    } | null;
};
export type CollectionSelectQuery = {
    readonly response: CollectionSelectQueryResponse;
    readonly variables: CollectionSelectQueryVariables;
};



/*
query CollectionSelectQuery(
  $query: String
  $editor: IdentityInputType
) {
  collections(editor: $editor, first: 25, sortBy: CREATED_DATE, query: $query) {
    edges {
      node {
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
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "editor"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v2 = [
  {
    "kind": "Variable",
    "name": "editor",
    "variableName": "editor"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 25
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Literal",
    "name": "sortBy",
    "value": "CREATED_DATE"
  }
],
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
v9 = {
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CollectionTypeConnection",
        "kind": "LinkedField",
        "name": "collections",
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
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CollectionSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CollectionTypeConnection",
        "kind": "LinkedField",
        "name": "collections",
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
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
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
    ]
  },
  "params": {
    "cacheID": "8659c87c061a7e696e0d7e8b7809e1d4",
    "id": null,
    "metadata": {},
    "name": "CollectionSelectQuery",
    "operationKind": "query",
    "text": "query CollectionSelectQuery(\n  $query: String\n  $editor: IdentityInputType\n) {\n  collections(editor: $editor, first: 25, sortBy: CREATED_DATE, query: $query) {\n    edges {\n      node {\n        name\n        imageUrl\n        slug\n        defaultMintableAssetContract {\n          address\n          relayId\n          openseaVersion\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3f573d9ddb999aa73901baa9e47ef82b';
export default node;
