/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Promotions_promotions = ReadonlyArray<{
    readonly id: string;
    readonly promoCardImg: string | null;
    readonly promoCardLink: string | null;
    readonly promoHeader: string | null;
    readonly cardColor: string | null;
    readonly promoSubtitle: string | null;
    readonly saleStartTime: string | null;
    readonly saleEndTime: string | null;
    readonly " $refType": "Promotions_promotions";
}>;
export type Promotions_promotions$data = Promotions_promotions;
export type Promotions_promotions$key = ReadonlyArray<{
    readonly " $data"?: Promotions_promotions$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Promotions_promotions">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Promotions_promotions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "promoCardImg",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "promoCardLink",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "promoHeader",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cardColor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "promoSubtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "saleStartTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "saleEndTime",
      "storageKey": null
    }
  ],
  "type": "PromotionType",
  "abstractKey": null
};
(node as any).hash = '732ba31c4732a35904b9bc354a9b5b6a';
export default node;
