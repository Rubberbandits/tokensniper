/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SocialBar_data = {
    readonly relayId: string;
    readonly discordUrl: string | null;
    readonly externalUrl: string | null;
    readonly instagramUsername: string | null;
    readonly mediumUsername: string | null;
    readonly slug: string;
    readonly telegramUrl: string | null;
    readonly twitterUsername: string | null;
    readonly " $fragmentRefs": FragmentRefs<"collection_url">;
    readonly " $refType": "SocialBar_data";
};
export type SocialBar_data$data = SocialBar_data;
export type SocialBar_data$key = {
    readonly " $data"?: SocialBar_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SocialBar_data">;
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
  "name": "SocialBar_data",
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
    (v0/*: any*/),
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
    },
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
(node as any).hash = 'cf4c5ce81f60bfa6bc08c43ceb321a10';
export default node;
