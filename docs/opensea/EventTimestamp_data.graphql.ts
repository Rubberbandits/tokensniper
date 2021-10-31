/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EventTimestamp_data = {
    readonly eventTimestamp: string;
    readonly transaction: {
        readonly blockExplorerLink: string;
    } | null;
    readonly " $refType": "EventTimestamp_data";
};
export type EventTimestamp_data$data = EventTimestamp_data;
export type EventTimestamp_data$key = {
    readonly " $data"?: EventTimestamp_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EventTimestamp_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EventTimestamp_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "eventTimestamp",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TransactionType",
      "kind": "LinkedField",
      "name": "transaction",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "blockExplorerLink",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetEventType",
  "abstractKey": null
};
(node as any).hash = '0fe67eb891265a708d5b4b07cbf3da10';
export default node;
