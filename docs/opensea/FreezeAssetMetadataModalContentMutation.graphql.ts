/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type FreezeAssetMetadataModalContentMutationVariables = {
    assetId: string;
};
export type FreezeAssetMetadataModalContentMutationResponse = {
    readonly assets: {
        readonly freezeMetadata: string;
    };
};
export type FreezeAssetMetadataModalContentMutation = {
    readonly response: FreezeAssetMetadataModalContentMutationResponse;
    readonly variables: FreezeAssetMetadataModalContentMutationVariables;
};



/*
mutation FreezeAssetMetadataModalContentMutation(
  $assetId: AssetRelayID!
) {
  assets {
    freezeMetadata(asset: $assetId)
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "assetId"
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
            "variableName": "assetId"
          }
        ],
        "kind": "ScalarField",
        "name": "freezeMetadata",
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
    "name": "FreezeAssetMetadataModalContentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FreezeAssetMetadataModalContentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c17e48a69cffadeaa077e211ce314443",
    "id": null,
    "metadata": {},
    "name": "FreezeAssetMetadataModalContentMutation",
    "operationKind": "mutation",
    "text": "mutation FreezeAssetMetadataModalContentMutation(\n  $assetId: AssetRelayID!\n) {\n  assets {\n    freezeMetadata(asset: $assetId)\n  }\n}\n"
  }
};
})();
(node as any).hash = '92fa2171b476eeff0e80da9f0b281712';
export default node;
