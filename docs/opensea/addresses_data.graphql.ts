/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type addresses_data = {
    readonly address: string;
    readonly " $refType": "addresses_data";
};
export type addresses_data$data = addresses_data;
export type addresses_data$key = {
    readonly " $data"?: addresses_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"addresses_data">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "addresses_data"
};
(node as any).hash = 'ac3b1a183e14dfa33217613c9bd21cdc';
export default node;
