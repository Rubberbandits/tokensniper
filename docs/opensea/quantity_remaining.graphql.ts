/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OrderV2Side = "ASK" | "BID" | "%future added value";
export type quantity_remaining = {
    readonly makerAsset: {
        readonly assetQuantities: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly asset: {
                        readonly decimals: number | null;
                    };
                    readonly quantity: string;
                } | null;
            } | null>;
        };
    };
    readonly takerAsset: {
        readonly assetQuantities: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly asset: {
                        readonly decimals: number | null;
                    };
                    readonly quantity: string;
                } | null;
            } | null>;
        };
    };
    readonly remainingQuantity: string | null;
    readonly side: OrderV2Side | null;
    readonly " $refType": "quantity_remaining";
};
export type quantity_remaining$data = quantity_remaining;
export type quantity_remaining$key = {
    readonly " $data"?: quantity_remaining$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"quantity_remaining">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "quantity_remaining"
};
(node as any).hash = '73860ae45992abba30e386335aeafb8e';
export default node;
