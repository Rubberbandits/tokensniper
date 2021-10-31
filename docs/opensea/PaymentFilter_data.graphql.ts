/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PaymentFilter_data = {
    readonly paymentAssets: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly symbol: string;
                readonly relayId: string;
            } | null;
        } | null>;
    } | null;
    readonly PaymentFilter_collection: {
        readonly paymentAssets: ReadonlyArray<{
            readonly symbol: string;
            readonly relayId: string;
        }>;
    } | null;
    readonly " $refType": "PaymentFilter_data";
};
export type PaymentFilter_data$data = PaymentFilter_data;
export type PaymentFilter_data$key = {
    readonly " $data"?: PaymentFilter_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PaymentFilter_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collection"
    },
    {
      "defaultValue": 10,
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
      "name": "symbolSubstring"
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
          "paymentAssets"
        ]
      }
    ]
  },
  "name": "PaymentFilter_data",
  "selections": [
    {
      "alias": "paymentAssets",
      "args": [
        {
          "kind": "Variable",
          "name": "asset_Symbol_Icontains",
          "variableName": "symbolSubstring"
        }
      ],
      "concreteType": "PaymentAssetTypeConnection",
      "kind": "LinkedField",
      "name": "__PaymentFilter_paymentAssets_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PaymentAssetTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PaymentAssetType",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
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
    },
    {
      "alias": "PaymentFilter_collection",
      "args": [
        {
          "kind": "Variable",
          "name": "collection",
          "variableName": "collection"
        }
      ],
      "concreteType": "CollectionType",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PaymentAssetType",
          "kind": "LinkedField",
          "name": "paymentAssets",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
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
(node as any).hash = 'c50d2e69679dd5eb7cc6fb16dfddbbdf';
export default node;
