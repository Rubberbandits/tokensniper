/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CardDisplayStyle = "CONTAIN" | "COVER" | "PADDED" | "%future added value";
export type AssetMedia_asset = {
    readonly animationUrl: string | null;
    readonly backgroundColor: string | null;
    readonly collection: {
        readonly displayData: {
            readonly cardDisplayStyle: CardDisplayStyle | null;
        };
    };
    readonly isDelisted: boolean;
    readonly displayImageUrl: string | null;
    readonly " $refType": "AssetMedia_asset";
};
export type AssetMedia_asset$data = AssetMedia_asset;
export type AssetMedia_asset$key = {
    readonly " $data"?: AssetMedia_asset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetMedia_asset">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetMedia_asset",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "animationUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "backgroundColor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionType",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DisplayDataType",
          "kind": "LinkedField",
          "name": "displayData",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cardDisplayStyle",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDelisted",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayImageUrl",
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
(node as any).hash = 'ebdc0f8999b8e82e7b257ac172bd7bbb';
export default node;
