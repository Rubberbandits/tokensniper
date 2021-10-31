/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Config = "AFFILIATE" | "AFFILIATE_BLACKLISTED" | "AFFILIATE_REQUESTED" | "MODERATOR" | "PARTNER" | "VERIFIED" | "%future added value";
export type AccountHeader_data = {
    readonly address: string;
    readonly bio: string | null;
    readonly bannerImageUrl: string | null;
    readonly config: Config | null;
    readonly isCompromised: boolean;
    readonly metadata: {
        readonly twitterUsername: string | null;
        readonly instagramUsername: string | null;
    } | null;
    readonly relayId: string;
    readonly names: ReadonlyArray<{
        readonly name: string;
        readonly type: string;
    }>;
    readonly displayName: string | null;
    readonly createdDate: string;
    readonly " $fragmentRefs": FragmentRefs<"accounts_url" | "ProfileImage_data" | "AccountLinksBar_data">;
    readonly " $refType": "AccountHeader_data";
};
export type AccountHeader_data$data = AccountHeader_data;
export type AccountHeader_data$key = {
    readonly " $data"?: AccountHeader_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AccountHeader_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountHeader_data",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
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
      "name": "config",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isCompromised",
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
          "name": "twitterUsername",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "instagramUsername",
          "storageKey": null
        }
      ],
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
      "concreteType": "Name",
      "kind": "LinkedField",
      "name": "names",
      "plural": true,
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
          "name": "type",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdDate",
      "storageKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "accounts_url",
      "selections": [
        (v0/*: any*/),
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AccountLinksBar_data"
    }
  ],
  "type": "AccountType",
  "abstractKey": null
};
})();
(node as any).hash = '1c158d3c71321715b02291a05b633686';
export default node;
