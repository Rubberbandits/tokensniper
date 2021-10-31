/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PriceHistory_data = {
    readonly tradeHistory: {
        readonly " $fragmentRefs": FragmentRefs<"PriceHistoryStats_data" | "PriceHistoryGraph_data">;
    };
    readonly " $refType": "PriceHistory_data";
};
export type PriceHistory_data$data = PriceHistory_data;
export type PriceHistory_data$key = {
    readonly " $data"?: PriceHistory_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PriceHistory_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "archetype"
    },
    {
      "defaultValue": "WEEK",
      "kind": "LocalArgument",
      "name": "bucketSize"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "collection"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cutoff"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "PriceHistory_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "archetype",
          "variableName": "archetype"
        },
        {
          "kind": "Variable",
          "name": "bucketSize",
          "variableName": "bucketSize"
        },
        {
          "kind": "Variable",
          "name": "collection",
          "variableName": "collection"
        },
        {
          "kind": "Variable",
          "name": "minTime",
          "variableName": "cutoff"
        }
      ],
      "concreteType": "TradeHistoryType",
      "kind": "LinkedField",
      "name": "tradeHistory",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PriceHistoryStats_data"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PriceHistoryGraph_data"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '5aba2f21fb8b7582a1940a62495551b5';
export default node;
