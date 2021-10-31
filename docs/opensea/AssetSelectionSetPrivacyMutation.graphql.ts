/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AssetSelectionSetPrivacyMutationVariables = {
    assets: Array<string>;
    isPrivate: boolean;
};
export type AssetSelectionSetPrivacyMutationResponse = {
    readonly assetOwnerships: {
        readonly batchSetPrivacy: boolean;
    };
};
export type AssetSelectionSetPrivacyMutation = {
    readonly response: AssetSelectionSetPrivacyMutationResponse;
    readonly variables: AssetSelectionSetPrivacyMutationVariables;
};



/*
mutation AssetSelectionSetPrivacyMutation(
  $assets: [AssetRelayID!]!
  $isPrivate: Boolean!
) {
  assetOwnerships {
    batchSetPrivacy(assets: $assets, isPrivate: $isPrivate)
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
    "name": "isPrivate"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AssetOwnershipMutationType",
    "kind": "LinkedField",
    "name": "assetOwnerships",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "assets",
            "variableName": "assets"
          },
          {
            "kind": "Variable",
            "name": "isPrivate",
            "variableName": "isPrivate"
          }
        ],
        "kind": "ScalarField",
        "name": "batchSetPrivacy",
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
    "name": "AssetSelectionSetPrivacyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AssetSelectionSetPrivacyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6eb9d98e07a55cdbcb6313bc23b30b90",
    "id": null,
    "metadata": {},
    "name": "AssetSelectionSetPrivacyMutation",
    "operationKind": "mutation",
    "text": "mutation AssetSelectionSetPrivacyMutation(\n  $assets: [AssetRelayID!]!\n  $isPrivate: Boolean!\n) {\n  assetOwnerships {\n    batchSetPrivacy(assets: $assets, isPrivate: $isPrivate)\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e8961215a4f4abfdbc85a90306a5713e';
export default node;
