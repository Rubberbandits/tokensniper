/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useAssetFavoriteMutationVariables = {
    asset: string;
    isFavorite: boolean;
};
export type useAssetFavoriteMutationResponse = {
    readonly assets: {
        readonly updateFavorite: boolean | null;
    };
};
export type useAssetFavoriteMutation = {
    readonly response: useAssetFavoriteMutationResponse;
    readonly variables: useAssetFavoriteMutationVariables;
};



/*
mutation useAssetFavoriteMutation(
  $asset: AssetRelayID!
  $isFavorite: Boolean!
) {
  assets {
    updateFavorite(asset: $asset, isFavorite: $isFavorite)
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "asset"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "isFavorite"
  }
],
v1 = [
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
        "args": [
          {
            "kind": "Variable",
            "name": "asset",
            "variableName": "asset"
          },
          {
            "kind": "Variable",
            "name": "isFavorite",
            "variableName": "isFavorite"
          }
        ],
        "kind": "ScalarField",
        "name": "updateFavorite",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useAssetFavoriteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAssetFavoriteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "785e056172c3d151af7a8780505616a4",
    "id": null,
    "metadata": {},
    "name": "useAssetFavoriteMutation",
    "operationKind": "mutation",
    "text": "mutation useAssetFavoriteMutation(\n  $asset: AssetRelayID!\n  $isFavorite: Boolean!\n) {\n  assets {\n    updateFavorite(asset: $asset, isFavorite: $isFavorite)\n  }\n}\n"
  }
};
})();
(node as any).hash = '62fda4b3366582fa44800ff07750e0f0';
export default node;
