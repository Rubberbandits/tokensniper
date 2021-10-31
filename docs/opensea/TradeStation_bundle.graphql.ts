/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TradeStation_bundle = {
    readonly " $fragmentRefs": FragmentRefs<"BidModalContent_bundle">;
    readonly " $refType": "TradeStation_bundle";
};
export type TradeStation_bundle$data = TradeStation_bundle;
export type TradeStation_bundle$key = {
    readonly " $data"?: TradeStation_bundle$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TradeStation_bundle">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "chain"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "TradeStation_bundle",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "chain",
          "variableName": "chain"
        }
      ],
      "kind": "FragmentSpread",
      "name": "BidModalContent_bundle"
    }
  ],
  "type": "AssetBundleType",
  "abstractKey": null
};
(node as any).hash = '00ba532318f9c4452aceb021f3a96683';
export default node;
