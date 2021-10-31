/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ToolbarNsfwAssetMutationVariables = {
    asset: string;
};
export type ToolbarNsfwAssetMutationResponse = {
    readonly assets: {
        readonly configureVisibility: boolean | null;
    };
};
export type ToolbarNsfwAssetMutation = {
    readonly response: ToolbarNsfwAssetMutationResponse;
    readonly variables: ToolbarNsfwAssetMutationVariables;
};



/*
mutation ToolbarNsfwAssetMutation(
  $asset: AssetRelayID!
) {
  assets {
    configureVisibility(asset: $asset, isNsfw: true)
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
            "name": "isNsfw",
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
    "name": "ToolbarNsfwAssetMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ToolbarNsfwAssetMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5461644d5f8196c056a5b541b377ab61",
    "id": null,
    "metadata": {},
    "name": "ToolbarNsfwAssetMutation",
    "operationKind": "mutation",
    "text": "mutation ToolbarNsfwAssetMutation(\n  $asset: AssetRelayID!\n) {\n  assets {\n    configureVisibility(asset: $asset, isNsfw: true)\n  }\n}\n"
  }
};
})();
(node as any).hash = '74dfcb866a79f99d2396cb1200865e31';
export default node;
