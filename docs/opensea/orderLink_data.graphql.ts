/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type orderLink_data = {
    readonly makerAssetBundle: {
        readonly assetQuantities: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly asset: {
                        readonly externalLink: string | null;
                        readonly collection: {
                            readonly externalUrl: string | null;
                        };
                    };
                } | null;
            } | null>;
        };
    };
    readonly " $refType": "orderLink_data";
};
export type orderLink_data$data = orderLink_data;
export type orderLink_data$key = {
    readonly " $data"?: orderLink_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"orderLink_data">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "orderLink_data"
};
(node as any).hash = 'df370ccf9b9194889ec318f248dab31b';
export default node;
