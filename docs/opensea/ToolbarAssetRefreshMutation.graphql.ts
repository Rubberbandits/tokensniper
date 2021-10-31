/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ToolbarAssetRefreshMutationVariables = {
    asset: string;
};
export type ToolbarAssetRefreshMutationResponse = {
    readonly assets: {
        readonly refresh: boolean | null;
    };
};
export type ToolbarAssetRefreshMutation = {
    readonly response: ToolbarAssetRefreshMutationResponse;
    readonly variables: ToolbarAssetRefreshMutationVariables;
};



/*
mutation ToolbarAssetRefreshMutation(
  $asset: AssetRelayID!
) {
  assets {
    refresh(asset: $asset)
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
          }
        ],
        "kind": "ScalarField",
        "name": "refresh",
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
    "name": "ToolbarAssetRefreshMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ToolbarAssetRefreshMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9b2f3ee9b519ab338c28a3b3a6a4efaf",
    "id": null,
    "metadata": {},
    "name": "ToolbarAssetRefreshMutation",
    "operationKind": "mutation",
    "text": "mutation ToolbarAssetRefreshMutation(\n  $asset: AssetRelayID!\n) {\n  assets {\n    refresh(asset: $asset)\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e2bef20c11e547bcc39f2683b6a10193';
export default node;
