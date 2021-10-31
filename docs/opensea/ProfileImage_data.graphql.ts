/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProfileImage_data = {
    readonly imageUrl: string;
    readonly address: string;
    readonly " $refType": "ProfileImage_data";
};
export type ProfileImage_data$data = ProfileImage_data;
export type ProfileImage_data$key = {
    readonly " $data"?: ProfileImage_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ProfileImage_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileImage_data",
  "selections": [
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
      "name": "address",
      "storageKey": null
    }
  ],
  "type": "AccountType",
  "abstractKey": null
};
(node as any).hash = 'b447e1a790495d0c89bbf497c5e40a6b';
export default node;
