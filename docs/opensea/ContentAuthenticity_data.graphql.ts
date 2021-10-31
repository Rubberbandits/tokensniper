/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContentAuthenticity_data = {
    readonly authenticityMetadata: {
        readonly signedOn: string | null;
        readonly signedBy: string | null;
        readonly producedWith: string | null;
        readonly walletAddress: string | null;
    } | null;
    readonly imageUrl: string | null;
    readonly creator: {
        readonly address: string;
    } | null;
    readonly " $refType": "ContentAuthenticity_data";
};
export type ContentAuthenticity_data$data = ContentAuthenticity_data;
export type ContentAuthenticity_data$key = {
    readonly " $data"?: ContentAuthenticity_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContentAuthenticity_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContentAuthenticity_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AuthenticityMetadataType",
      "kind": "LinkedField",
      "name": "authenticityMetadata",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "signedOn",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "signedBy",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "producedWith",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "walletAddress",
          "storageKey": null
        }
      ],
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
      "concreteType": "AccountType",
      "kind": "LinkedField",
      "name": "creator",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "address",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
(node as any).hash = '2a51e92d41058ff405a7e485b2044a57';
export default node;
