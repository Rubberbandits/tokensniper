/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetContextMenu_data = {
    readonly isDelisted: boolean;
    readonly isEditable: {
        readonly value: boolean;
        readonly reason: string | null;
    };
    readonly isListable: boolean;
    readonly ownership: {
        readonly isPrivate: boolean;
        readonly quantity: string;
    } | null;
    readonly creator: {
        readonly address: string;
    } | null;
    readonly collection: {
        readonly isAuthorizedEditor: boolean;
    };
    readonly " $fragmentRefs": FragmentRefs<"asset_edit_url" | "asset_url" | "itemEvents_data">;
    readonly " $refType": "AssetContextMenu_data";
};
export type AssetContextMenu_data$data = AssetContextMenu_data;
export type AssetContextMenu_data$key = {
    readonly " $data"?: AssetContextMenu_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetContextMenu_data">;
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
  "concreteType": "AssetContractType",
  "kind": "LinkedField",
  "name": "assetContract",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chain",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "identity"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetContextMenu_data",
  "selections": [
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
      "concreteType": "AbleToType",
      "kind": "LinkedField",
      "name": "isEditable",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "reason",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isListable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "identity",
          "variableName": "identity"
        }
      ],
      "concreteType": "AssetOwnershipDataType",
      "kind": "LinkedField",
      "name": "ownership",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isPrivate",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "quantity",
          "storageKey": null
        }
      ],
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
        (v0/*: any*/)
      ],
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
          "kind": "ScalarField",
          "name": "isAuthorizedEditor",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "asset_edit_url",
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/),
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
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "asset_url",
      "selections": (v3/*: any*/)
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "itemEvents_data",
      "selections": (v3/*: any*/)
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
})();
(node as any).hash = '4346e79e1a474a236353b6577e02fdf7';
export default node;
