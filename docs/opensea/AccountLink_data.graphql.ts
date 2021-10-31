/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Config = "AFFILIATE" | "AFFILIATE_BLACKLISTED" | "AFFILIATE_REQUESTED" | "MODERATOR" | "PARTNER" | "VERIFIED" | "%future added value";
export type AccountLink_data = {
    readonly address: string;
    readonly config: Config | null;
    readonly isCompromised: boolean;
    readonly user: {
        readonly publicUsername: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ProfileImage_data" | "wallet_accountKey" | "accounts_url">;
    readonly " $refType": "AccountLink_data";
};
export type AccountLink_data$data = AccountLink_data;
export type AccountLink_data$key = {
    readonly " $data"?: AccountLink_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v1 = {
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountLink_data",
  "selections": [
    (v0/*: any*/),
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
    (v1/*: any*/),
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProfileImage_data"
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "wallet_accountKey",
      "selections": [
        (v0/*: any*/)
      ]
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "accounts_url",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ]
    }
  ],
  "type": "AccountType",
  "abstractKey": null
};
})();
(node as any).hash = 'ea03457ddf754b5c017b15dd5bd18402';
export default node;
