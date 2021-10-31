/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type bundle_url = {
    readonly slug: string | null;
    readonly " $refType": "bundle_url";
};
export type bundle_url$data = bundle_url;
export type bundle_url$key = {
    readonly " $data"?: bundle_url$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"bundle_url">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "bundle_url"
};
(node as any).hash = '17e8badcb16e0e46cc1fa5b747ba3378';
export default node;
