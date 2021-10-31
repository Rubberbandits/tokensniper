/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Config = "AFFILIATE" | "AFFILIATE_BLACKLISTED" | "AFFILIATE_REQUESTED" | "MODERATOR" | "PARTNER" | "VERIFIED" | "%future added value";
export type AccountLinksBar_data = {
    readonly relayId: string;
    readonly config: Config | null;
    readonly metadata: {
        readonly instagramUsername: string | null;
        readonly twitterUsername: string | null;
        readonly websiteUrl: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"accounts_url" | "ProfileImage_data">;
    readonly " $refType": "AccountLinksBar_data";
};
export type AccountLinksBar_data$data = AccountLinksBar_data;
export type AccountLinksBar_data$key = {
    readonly " $data"?: AccountLinksBar_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AccountLinksBar_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountLinksBar_data",
  "selections": [
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
      "kind": "ScalarField",
      "name": "config",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AccountMetadataType",
      "kind": "LinkedField",
      "name": "metadata",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "instagramUsername",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "twitterUsername",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "websiteUrl",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "accounts_url",
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
          "concreteType": "UserType",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "publicUsername",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProfileImage_data"
    }
  ],
  "type": "AccountType",
  "abstractKey": null
};
(node as any).hash = '51fb00094d83a34002d3638c2abfc36a';
export default node;
