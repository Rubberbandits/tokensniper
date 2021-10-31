/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetCardAnnotations_assetBundle = {
    readonly assetCount: number | null;
    readonly " $refType": "AssetCardAnnotations_assetBundle";
};
export type AssetCardAnnotations_assetBundle$data = AssetCardAnnotations_assetBundle;
export type AssetCardAnnotations_assetBundle$key = {
    readonly " $data"?: AssetCardAnnotations_assetBundle$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetCardAnnotations_assetBundle">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetCardAnnotations_assetBundle",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "assetCount",
      "storageKey": null
    }
  ],
  "type": "AssetBundleType",
  "abstractKey": null
};
(node as any).hash = '2895ce97f99512dcb9823a1516361e9a';
export default node;
