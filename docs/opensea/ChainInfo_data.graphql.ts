/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetContractTokenStandard = "CRYPTOPUNKS" | "CUSTOM" | "ENJIN_LEGACY" | "ERC1155" | "ERC20" | "ERC721" | "ETH_BRIDGE" | "UNKNOWN" | "WYVERN" | "ZERO_EX" | "%future added value";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type ChainInfo_data = {
    readonly assetContract: {
        readonly openseaVersion: string | null;
        readonly address: string;
        readonly chain: ChainIdentifier;
        readonly blockExplorerLink: string;
        readonly tokenStandard: AssetContractTokenStandard | null;
    };
    readonly isEditableByOwner: {
        readonly value: boolean;
    };
    readonly tokenId: string;
    readonly isFrozen: boolean;
    readonly frozenAt: string | null;
    readonly tokenMetadata: string | null;
    readonly " $refType": "ChainInfo_data";
};
export type ChainInfo_data$data = ChainInfo_data;
export type ChainInfo_data$key = {
    readonly " $data"?: ChainInfo_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ChainInfo_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChainInfo_data",
  "selections": [
    {
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
          "name": "openseaVersion",
          "storageKey": null
        },
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "blockExplorerLink",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "tokenStandard",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AbleToType",
      "kind": "LinkedField",
      "name": "isEditableByOwner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tokenId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFrozen",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "frozenAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tokenMetadata",
      "storageKey": null
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
(node as any).hash = '303d37934c6439beef9b18a3e770873d';
export default node;
