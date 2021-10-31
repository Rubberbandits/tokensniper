/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionHeader_data = {
    readonly name: string;
    readonly description: string | null;
    readonly imageUrl: string | null;
    readonly bannerImageUrl: string | null;
    readonly relayId: string;
    readonly owner: {
        readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CollectionStatsBar_data" | "SocialBar_data" | "verification_data">;
    readonly " $refType": "CollectionHeader_data";
};
export type CollectionHeader_data$data = CollectionHeader_data;
export type CollectionHeader_data$key = {
    readonly " $data"?: CollectionHeader_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionHeader_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionHeader_data",
  "selections": [
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
      "name": "description",
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
      "name": "bannerImageUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "relayId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AccountType",
      "kind": "LinkedField",
      "name": "owner",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AccountLink_data"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionStatsBar_data"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SocialBar_data"
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "verification_data",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isMintable",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isSafelisted",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isVerified",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "CollectionType",
  "abstractKey": null
};
(node as any).hash = 'e9039785d518b21d577eef4e7921bbae';
export default node;
