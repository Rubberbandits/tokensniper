/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type collection_url = {
    readonly slug: string;
    readonly " $refType": "collection_url";
};
export type collection_url$data = collection_url;
export type collection_url$key = {
    readonly " $data"?: collection_url$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"collection_url">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "collection_url"
};
(node as any).hash = 'a7e0564e91c1c066e3ab422e58fcb5fb';
export default node;
