/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type quantity_data = {
    readonly asset: {
        readonly decimals: number | null;
    };
    readonly quantity: string;
    readonly " $refType": "quantity_data";
};
export type quantity_data$data = quantity_data;
export type quantity_data$key = {
    readonly " $data"?: quantity_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"quantity_data">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "quantity_data"
};
(node as any).hash = 'b7e51a34e2fc58f40ab61c5a177ca0d5';
export default node;
