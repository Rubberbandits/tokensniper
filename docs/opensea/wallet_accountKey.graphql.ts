/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type wallet_accountKey = {
    readonly address: string;
    readonly " $refType": "wallet_accountKey";
};
export type wallet_accountKey$data = wallet_accountKey;
export type wallet_accountKey$key = {
    readonly " $data"?: wallet_accountKey$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"wallet_accountKey">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "wallet_accountKey"
};
(node as any).hash = 'ddceb680adbe3538d0b888cced543367';
export default node;
