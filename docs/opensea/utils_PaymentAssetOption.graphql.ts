/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type utils_PaymentAssetOption = {
    readonly relayId: string;
    readonly symbol: string | null;
    readonly displayImageUrl: string | null;
    readonly usdSpotPrice: number | null;
    readonly " $refType": "utils_PaymentAssetOption";
};
export type utils_PaymentAssetOption$data = utils_PaymentAssetOption;
export type utils_PaymentAssetOption$key = {
    readonly " $data"?: utils_PaymentAssetOption$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"utils_PaymentAssetOption">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "utils_PaymentAssetOption"
};
(node as any).hash = '88291269f33380a954fb09e2dd1309be';
export default node;
