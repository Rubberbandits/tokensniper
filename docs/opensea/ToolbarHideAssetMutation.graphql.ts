/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ToolbarHideAssetMutationVariables = {
    asset: string;
};
export type ToolbarHideAssetMutationResponse = {
    readonly assets: {
        readonly configureVisibility: boolean | null;
    };
};
export type ToolbarHideAssetMutation = {
    readonly response: ToolbarHideAssetMutationResponse;
    readonly variables: ToolbarHideAssetMutationVariables;
};



/*
mutation ToolbarHideAssetMutation(
  $asset: AssetRelayID!
) {
  assets {
    configureVisibility(asset: $asset, isDelisted: true)
  }
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
            "kind": "Literal",
            "name": "isDelisted",
            "value": true
          }
        ],
        "kind": "ScalarField",
        "name": "configureVisibility",
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
    "name": "ToolbarHideAssetMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ToolbarHideAssetMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6a652057c915ddaa6295deedd9f67dc3",
    "id": null,
    "metadata": {},
    "name": "ToolbarHideAssetMutation",
    "operationKind": "mutation",
    "text": "mutation ToolbarHideAssetMutation(\n  $asset: AssetRelayID!\n) {\n  assets {\n    configureVisibility(asset: $asset, isDelisted: true)\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a3c7ec83be8c781c33a7b350d24e162b';
export default node;
