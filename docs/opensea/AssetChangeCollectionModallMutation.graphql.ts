/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AssetChangeCollectionModallMutationVariables = {
    assets: Array<string | null>;
    collection: string;
};
export type AssetChangeCollectionModallMutationResponse = {
    readonly assets: {
        readonly changeCollection: ReadonlyArray<{
            readonly collection: {
                readonly slug: string;
            };
        } | null>;
    };
};
export type AssetChangeCollectionModallMutation = {
    readonly response: AssetChangeCollectionModallMutationResponse;
    readonly variables: AssetChangeCollectionModallMutationVariables;
};



/*
mutation AssetChangeCollectionModallMutation(
  $assets: [AssetRelayID]!
  $collection: CollectionSlug!
) {
  assets {
    changeCollection(assets: $assets, collection: $collection) {
      collection {
        slug
        id
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "assets"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "collection"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "assets",
    "variableName": "assets"
  },
  {
    "kind": "Variable",
    "name": "collection",
    "variableName": "collection"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
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
    "name": "AssetChangeCollectionModallMutation",
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
            "args": (v1/*: any*/),
            "concreteType": "AssetType",
            "kind": "LinkedField",
            "name": "changeCollection",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AssetChangeCollectionModallMutation",
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
            "args": (v1/*: any*/),
            "concreteType": "AssetType",
            "kind": "LinkedField",
            "name": "changeCollection",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
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
    "cacheID": "6fa2472aed90fd915a8f3c9d8302aebf",
    "id": null,
    "metadata": {},
    "name": "AssetChangeCollectionModallMutation",
    "operationKind": "mutation",
    "text": "mutation AssetChangeCollectionModallMutation(\n  $assets: [AssetRelayID]!\n  $collection: CollectionSlug!\n) {\n  assets {\n    changeCollection(assets: $assets, collection: $collection) {\n      collection {\n        slug\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '96fd3d111548b0d6a6116c749f8db276';
export default node;
