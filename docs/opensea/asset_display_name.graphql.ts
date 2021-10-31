/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type asset_display_name = {
    readonly tokenId: string;
    readonly name: string | null;
    readonly " $refType": "asset_display_name";
};
export type asset_display_name$data = asset_display_name;
export type asset_display_name$key = {
    readonly " $data"?: asset_display_name$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"asset_display_name">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "asset_display_name"
};
(node as any).hash = '5cc61d648b55dff23226594285291284';
export default node;
