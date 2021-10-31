/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type profilePageQueries_created = {
    readonly search: {
        readonly totalCount: number;
    } | null;
    readonly " $refType": "profilePageQueries_created";
};
export type profilePageQueries_created$data = profilePageQueries_created;
export type profilePageQueries_created$key = {
    readonly " $data"?: profilePageQueries_created$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"profilePageQueries_created">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "identity"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "profilePageQueries_created",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "creator",
          "variableName": "identity"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 0
        },
        {
          "kind": "Literal",
          "name": "resultType",
          "value": "ASSETS"
        }
      ],
      "concreteType": "SearchTypeConnection",
      "kind": "LinkedField",
      "name": "search",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '32142837d2117f21a02113f58cdef1d1';
export default node;
