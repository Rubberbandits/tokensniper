/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionLink_assetContract = {
    readonly address: string;
    readonly blockExplorerLink: string;
    readonly " $refType": "CollectionLink_assetContract";
};
export type CollectionLink_assetContract$data = CollectionLink_assetContract;
export type CollectionLink_assetContract$key = {
    readonly " $data"?: CollectionLink_assetContract$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionLink_assetContract">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionLink_assetContract",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "blockExplorerLink",
      "storageKey": null
    }
  ],
  "type": "AssetContractType",
  "abstractKey": null
};
(node as any).hash = '1f3463574af3c39de5d24f87ecbc4897';
export default node;
