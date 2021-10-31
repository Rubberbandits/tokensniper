/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type profilePageQueries_collected = {
    readonly search: {
        readonly totalCount: number;
    } | null;
    readonly " $refType": "profilePageQueries_collected";
};
export type profilePageQueries_collected$data = profilePageQueries_collected;
export type profilePageQueries_collected$key = {
    readonly " $data"?: profilePageQueries_collected$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"profilePageQueries_collected">;
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
  "name": "profilePageQueries_collected",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 0
        },
        {
          "kind": "Variable",
          "name": "identity",
          "variableName": "identity"
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
(node as any).hash = '244470e1fb0674a3c40bb3185b866d45';
export default node;
