/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useAssetFavorite__data = {
    readonly isFavorite: boolean;
    readonly favoritesCount: number;
    readonly " $refType": "useAssetFavorite__data";
};
export type useAssetFavorite__data$data = useAssetFavorite__data;
export type useAssetFavorite__data$key = {
    readonly " $data"?: useAssetFavorite__data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useAssetFavorite__data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useAssetFavorite__data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFavorite",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "favoritesCount",
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
(node as any).hash = '82a101f6ee94e9283f37c5efc4403595';
export default node;
