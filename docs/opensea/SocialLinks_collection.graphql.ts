/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SocialLinks_collection = {
    readonly discordUrl: string | null;
    readonly externalUrl: string | null;
    readonly instagramUsername: string | null;
    readonly mediumUsername: string | null;
    readonly telegramUrl: string | null;
    readonly twitterUsername: string | null;
    readonly " $refType": "SocialLinks_collection";
};
export type SocialLinks_collection$data = SocialLinks_collection;
export type SocialLinks_collection$key = {
    readonly " $data"?: SocialLinks_collection$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SocialLinks_collection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SocialLinks_collection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "discordUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "externalUrl",
      "storageKey": null
    },
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
      "name": "mediumUsername",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "telegramUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "twitterUsername",
      "storageKey": null
    }
  ],
  "type": "CollectionType",
  "abstractKey": null
};
(node as any).hash = 'fa6734c754c45367818034db8ab4623c';
export default node;
