/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionFilter_data = {
    readonly selectedCollections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly assetCount: number | null;
                readonly imageUrl: string | null;
                readonly name: string;
                readonly slug: string;
                readonly isVerified: boolean;
            } | null;
        } | null>;
    } | null;
    readonly collections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly assetCount: number | null;
                readonly imageUrl: string | null;
                readonly name: string;
                readonly slug: string;
                readonly isVerified: boolean;
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "CollectionFilter_data";
};
export type CollectionFilter_data$data = CollectionFilter_data;
export type CollectionFilter_data$key = {
    readonly " $data"?: CollectionFilter_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionFilter_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetCount",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "assetCreator"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "assetOwner"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "categories"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "chains"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collections"
    },
    {
      "defaultValue": 100,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "includeHidden"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "onlyPrivateAssets"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "query"
    },
    {
      "defaultValue": "SEVEN_DAY_VOLUME",
      "kind": "LocalArgument",
      "name": "sortBy"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "collections"
        ]
      }
    ]
  },
  "name": "CollectionFilter_data",
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
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "collections",
      "args": [
        {
          "kind": "Variable",
          "name": "assetCreator",
          "variableName": "assetCreator"
        },
        {
          "kind": "Variable",
          "name": "assetOwner",
          "variableName": "assetOwner"
        },
        {
          "kind": "Variable",
          "name": "chains",
          "variableName": "chains"
        },
        {
          "kind": "Variable",
          "name": "includeHidden",
          "variableName": "includeHidden"
        },
        {
          "kind": "Variable",
          "name": "onlyPrivateAssets",
          "variableName": "onlyPrivateAssets"
        },
        {
          "kind": "Variable",
          "name": "parents",
          "variableName": "categories"
        },
        {
          "kind": "Variable",
          "name": "query",
          "variableName": "query"
        },
        {
          "kind": "Variable",
          "name": "sortBy",
          "variableName": "sortBy"
        }
      ],
      "concreteType": "CollectionTypeConnection",
      "kind": "LinkedField",
      "name": "__CollectionFilter_collections_connection",
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
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
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
})();
(node as any).hash = 'becaff6fe04255cf6bb914b99aac5f34';
export default node;
