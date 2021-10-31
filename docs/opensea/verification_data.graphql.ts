/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type verification_data = {
    readonly isMintable: boolean;
    readonly isSafelisted: boolean;
    readonly isVerified: boolean;
    readonly " $refType": "verification_data";
};
export type verification_data$data = verification_data;
export type verification_data$key = {
    readonly " $data"?: verification_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"verification_data">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "verification_data"
};
(node as any).hash = '133f81dfcef28a0850b21ca744b22a9d';
export default node;
