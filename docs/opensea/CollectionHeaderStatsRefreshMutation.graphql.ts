/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CollectionHeaderStatsRefreshMutationVariables = {
    collectionId: string;
};
export type CollectionHeaderStatsRefreshMutationResponse = {
    readonly collections: {
        readonly refreshStats: boolean | null;
    };
};
export type CollectionHeaderStatsRefreshMutation = {
    readonly response: CollectionHeaderStatsRefreshMutationResponse;
    readonly variables: CollectionHeaderStatsRefreshMutationVariables;
};



/*
mutation CollectionHeaderStatsRefreshMutation(
  $collectionId: CollectionRelayID!
) {
  collections {
    refreshStats(collection: $collectionId)
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "collectionId"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CollectionMutationType",
    "kind": "LinkedField",
    "name": "collections",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "collection",
            "variableName": "collectionId"
          }
        ],
        "kind": "ScalarField",
        "name": "refreshStats",
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
    "name": "CollectionHeaderStatsRefreshMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionHeaderStatsRefreshMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9f1657ba14d3354a4cdb799b1b3df805",
    "id": null,
    "metadata": {},
    "name": "CollectionHeaderStatsRefreshMutation",
    "operationKind": "mutation",
    "text": "mutation CollectionHeaderStatsRefreshMutation(\n  $collectionId: CollectionRelayID!\n) {\n  collections {\n    refreshStats(collection: $collectionId)\n  }\n}\n"
  }
};
})();
(node as any).hash = '29e064ecc88d80a6c04ec73414cd81b7';
export default node;
