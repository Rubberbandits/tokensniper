/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchPills_data = {
    readonly selectedCollections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly imageUrl: string | null;
                readonly name: string;
                readonly slug: string;
                readonly " $fragmentRefs": FragmentRefs<"CollectionModalContent_data">;
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "SearchPills_data";
};
export type SearchPills_data$data = SearchPills_data;
export type SearchPills_data$key = {
    readonly " $data"?: SearchPills_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchPills_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collections"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchPills_data",
  "selections": [
    {
      "alias": "selectedCollections",
      "args": [
        {
          "kind": "Variable",
          "name": "collections",
          "variableName": "collections"
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 25
        },
        {
          "kind": "Literal",
          "name": "includeHidden",
          "value": true
        }
      ],
      "concreteType": "CollectionTypeConnection",
      "kind": "LinkedField",
      "name": "collections",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "CollectionType",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "imageUrl",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CollectionModalContent_data"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'd3eb2adf97d483be27586c7bb0a6e132';
export default node;
