/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type itemEvents_viewItem_data = {
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"verification_data">;
    };
    readonly isReportedSuspicious: boolean;
    readonly " $fragmentRefs": FragmentRefs<"itemEvents_data">;
    readonly " $refType": "itemEvents_viewItem_data";
};
export type itemEvents_viewItem_data$data = itemEvents_viewItem_data;
export type itemEvents_viewItem_data$key = {
    readonly " $data"?: itemEvents_viewItem_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"itemEvents_viewItem_data">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "itemEvents_viewItem_data"
};
(node as any).hash = '6f9eec6cf2bb2ac8ca512fd301b92b30';
export default node;
