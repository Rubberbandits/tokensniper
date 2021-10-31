/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Config = "AFFILIATE" | "AFFILIATE_BLACKLISTED" | "AFFILIATE_REQUESTED" | "MODERATOR" | "PARTNER" | "VERIFIED" | "%future added value";
export type AccountItem_data = {
    readonly isCompromised: boolean;
    readonly imageUrl: string;
    readonly displayName: string | null;
    readonly config: Config | null;
    readonly address: string;
    readonly " $fragmentRefs": FragmentRefs<"accounts_url">;
    readonly " $refType": "AccountItem_data";
};
export type AccountItem_data$data = AccountItem_data;
export type AccountItem_data$key = {
    readonly " $data"?: AccountItem_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AccountItem_data">;
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
  "name": "AccountItem_data",
  "selections": [
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
      "kind": "ScalarField",
      "name": "imageUrl",
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
      "name": "config",
      "storageKey": null
    },
    (v0/*: any*/),
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
    }
  ],
  "type": "AccountType",
  "abstractKey": null
};
})();
(node as any).hash = '91c34d569cb3fd8df4b10fd11af5be45';
export default node;
