/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CardDisplayStyle = "CONTAIN" | "COVER" | "PADDED" | "%future added value";
export type AssetSelectionItem_data = {
    readonly backgroundColor: string | null;
    readonly collection: {
        readonly displayData: {
            readonly cardDisplayStyle: CardDisplayStyle | null;
        };
        readonly imageUrl: string | null;
    };
    readonly imageUrl: string | null;
    readonly name: string | null;
    readonly relayId: string;
    readonly " $refType": "AssetSelectionItem_data";
};
export type AssetSelectionItem_data$data = AssetSelectionItem_data;
export type AssetSelectionItem_data$key = {
    readonly " $data"?: AssetSelectionItem_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetSelectionItem_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetSelectionItem_data",
  "selections": [
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
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    (v0/*: any*/),
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
      "name": "relayId",
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
})();
(node as any).hash = '7cf5c9a0e572f71600c9433545ccf193';
export default node;
