/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ActionTypes = "ASK_FOR_ASSET_SWAP" | "ASK_FOR_DEPOSIT" | "ASSET_APPROVAL" | "ASSET_FREEZE_METADATA" | "ASSET_SWAP" | "ASSET_TRANSFER" | "CANCEL_ORDER" | "CREATE_ORDER" | "FULFILL" | "MATIC_EXIT" | "PAYMENT_ASSET_APPROVAL" | "WAIT_FOR_BALANCE" | "%future added value";
export type ActionPanelList_data = {
    readonly actions: ReadonlyArray<{
        readonly actionType: ActionTypes;
        readonly " $fragmentRefs": FragmentRefs<"ActionPanel_data">;
    }>;
    readonly " $refType": "ActionPanelList_data";
};
export type ActionPanelList_data$data = ActionPanelList_data;
export type ActionPanelList_data$key = {
    readonly " $data"?: ActionPanelList_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ActionPanelList_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActionPanelList_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ActionType",
      "kind": "LinkedField",
      "name": "actions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "actionType",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ActionPanel_data"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ActionDataType",
  "abstractKey": null
};
(node as any).hash = '04940e187a6c0d3b014bcca8e027f9e4';
export default node;
