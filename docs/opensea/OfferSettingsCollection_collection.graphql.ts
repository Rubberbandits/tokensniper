/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OfferSettingsCollection_collection = {
    readonly assetCount: number | null;
    readonly imageUrl: string | null;
    readonly isVerified: boolean;
    readonly name: string;
    readonly floorPrice: string | null;
    readonly slug: string;
    readonly " $fragmentRefs": FragmentRefs<"collection_url">;
    readonly " $refType": "OfferSettingsCollection_collection";
};
export type OfferSettingsCollection_collection$data = OfferSettingsCollection_collection;
export type OfferSettingsCollection_collection$key = {
    readonly " $data"?: OfferSettingsCollection_collection$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OfferSettingsCollection_collection">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OfferSettingsCollection_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "assetCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isVerified",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "floorPrice",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "InlineDataFragmentSpread",
      "name": "collection_url",
      "selections": [
        (v0/*: any*/)
      ]
    }
  ],
  "type": "CollectionType",
  "abstractKey": null
};
})();
(node as any).hash = '3f990e254a35f42ace21b6be5387f1ab';
export default node;
