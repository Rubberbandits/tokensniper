/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type assetsVisitorUpdateMutationVariables = {
    asset: string;
};
export type assetsVisitorUpdateMutationResponse = {
    readonly assets: {
        readonly createAssetVisitor: boolean | null;
    };
};
export type assetsVisitorUpdateMutation = {
    readonly response: assetsVisitorUpdateMutationResponse;
    readonly variables: assetsVisitorUpdateMutationVariables;
};



/*
mutation assetsVisitorUpdateMutation(
  $asset: AssetRelayID!
) {
  assets {
    createAssetVisitor(asset: $asset)
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
        "name": "createAssetVisitor",
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
    "name": "assetsVisitorUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "assetsVisitorUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "929fcdfad4d6e1d4adaa0644a1bee12e",
    "id": null,
    "metadata": {},
    "name": "assetsVisitorUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation assetsVisitorUpdateMutation(\n  $asset: AssetRelayID!\n) {\n  assets {\n    createAssetVisitor(asset: $asset)\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fcd793472695d283dc4328dff4fa7f73';
export default node;
