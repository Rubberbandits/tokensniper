/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type Toolbar_asset = {
    readonly assetContract: {
        readonly address: string;
        readonly chain: ChainIdentifier;
    };
    readonly collection: {
        readonly externalUrl: string | null;
        readonly name: string;
        readonly slug: string;
    };
    readonly externalLink: string | null;
    readonly name: string | null;
    readonly relayId: string;
    readonly tokenId: string;
    readonly " $fragmentRefs": FragmentRefs<"asset_url" | "itemEvents_data">;
    readonly " $refType": "Toolbar_asset";
};
export type Toolbar_asset$data = Toolbar_asset;
export type Toolbar_asset$key = {
    readonly " $data"?: Toolbar_asset$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Toolbar_asset">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetContractType",
  "kind": "LinkedField",
  "name": "assetContract",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  (v0/*: any*/),
  (v2/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Toolbar_asset",
  "selections": [
    (v0/*: any*/),
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
          "name": "externalUrl",
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "externalLink",
      "storageKey": null
    },
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "relayId",
      "storageKey": null
    },
    (v2/*: any*/),
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
(node as any).hash = '37fa84b22aea85621818fe7cff6af1cd';
export default node;
