/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type accounts_url = {
    readonly address: string;
    readonly user: {
        readonly publicUsername: string | null;
    } | null;
    readonly " $refType": "accounts_url";
};
export type accounts_url$data = accounts_url;
export type accounts_url$key = {
    readonly " $data"?: accounts_url$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"accounts_url">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "accounts_url"
};
(node as any).hash = 'ac3ec488cd644b2e8a18d5ed56269655';
export default node;
