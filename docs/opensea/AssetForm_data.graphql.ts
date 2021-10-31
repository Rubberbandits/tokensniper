/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type TraitDisplayType = "AUTHOR" | "BOOST_NUMBER" | "BOOST_PERCENTAGE" | "DATE" | "NONE" | "NUMBER" | "%future added value";
export type AssetForm_data = {
    readonly assetContract: {
        readonly chain: ChainIdentifier;
    };
    readonly isEditable: {
        readonly value: boolean;
        readonly reason: string | null;
    };
    readonly isFreezable: {
        readonly value: boolean;
        readonly reason: string | null;
    };
    readonly isFrozen: boolean;
    readonly frozenAt: string | null;
    readonly tokenMetadata: string | null;
    readonly name: string | null;
    readonly description: string | null;
    readonly externalLink: string | null;
    readonly imageUrl: string | null;
    readonly animationUrl: string | null;
    readonly unlockableContent: string | null;
    readonly relayId: string;
    readonly isNsfw: boolean;
    readonly collection: {
        readonly imageUrl: string | null;
        readonly name: string;
        readonly slug: string;
        readonly numericTraits: ReadonlyArray<{
            readonly key: string;
            readonly value: {
                readonly max: number;
                readonly min: number;
            };
        }>;
    };
    readonly traits: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly relayId: string;
                readonly displayType: TraitDisplayType | null;
                readonly floatValue: number | null;
                readonly intValue: string | null;
                readonly traitType: string;
                readonly maxValue: number | null;
                readonly value: string | null;
                readonly " $fragmentRefs": FragmentRefs<"Boost_trait" | "Property_trait" | "NumericTrait_trait" | "Date_trait">;
            } | null;
        } | null>;
    };
    readonly " $refType": "AssetForm_data";
};
export type AssetForm_data$data = AssetForm_data;
export type AssetForm_data$key = {
    readonly " $data"?: AssetForm_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetForm_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "reason",
    "storageKey": null
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetForm_data",
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
          "name": "chain",
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
      "name": "isEditable",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AbleToType",
      "kind": "LinkedField",
      "name": "isFreezable",
      "plural": false,
      "selections": (v1/*: any*/),
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
    },
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "externalLink",
      "storageKey": null
    },
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "animationUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "identity",
          "value": {}
        }
      ],
      "kind": "ScalarField",
      "name": "unlockableContent",
      "storageKey": "unlockableContent(identity:{})"
    },
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isNsfw",
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
        (v3/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "NumericTraitTypePair",
          "kind": "LinkedField",
          "name": "numericTraits",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "key",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "NumericTraitType",
              "kind": "LinkedField",
              "name": "value",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "max",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "min",
                  "storageKey": null
                }
              ],
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
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        }
      ],
      "concreteType": "TraitTypeConnection",
      "kind": "LinkedField",
      "name": "traits",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TraitTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TraitType",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v4/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "displayType",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "floatValue",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "intValue",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "traitType",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "maxValue",
                  "storageKey": null
                },
                (v0/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Boost_trait"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Property_trait"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "NumericTrait_trait"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Date_trait"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "traits(first:100)"
    }
  ],
  "type": "AssetType",
  "abstractKey": null
};
})();
(node as any).hash = 'd1ffd4679db6af1679c4ed1b826427ce';
export default node;
