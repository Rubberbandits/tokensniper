/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EnsManualEntryModal_asset = {
    readonly assetContract: {
        readonly address: string;
    };
    readonly tokenId: string;
    readonly " $refType": "EnsManualEntryModal_asset";
};
export type EnsManualEntryModal_asset$data = EnsManualEntryModal_asset;
export type EnsManualEntryModal_asset$key = {
    readonly " $data"?: EnsManualEntryModal_asset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EnsManualEntryModal_asset">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EnsManualEntryModal_asset",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetContractType",
      "kind": "LinkedField",
      "name": "assetContract",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "address",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tokenId",
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
(node as any).hash = 'bc8ca378751cf7c3b8151bcd6cd317ad';
export default node;
