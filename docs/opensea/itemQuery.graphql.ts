/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CardDisplayStyle = "CONTAIN" | "COVER" | "PADDED" | "%future added value";
export type ChainIdentifier = "BAOBAB" | "BSC" | "BSC_TESTNET" | "ETHEREUM" | "FLOW" | "GOERLI" | "KLAYTN" | "LOCAL" | "MATIC" | "MUMBAI" | "RINKEBY" | "XDAI" | "%future added value";
export type OrderV2OrderType = "BASIC" | "DUTCH" | "ENGLISH" | "%future added value";
export type TraitDisplayType = "AUTHOR" | "BOOST_NUMBER" | "BOOST_PERCENTAGE" | "DATE" | "NONE" | "NUMBER" | "%future added value";
export type ArchetypeInputType = {
    assetContractAddress: string;
    tokenId: string;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type itemQueryVariables = {
    archetype: ArchetypeInputType;
    chain?: | "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value" | null | undefined;
};
export type itemQueryResponse = {
    readonly archetype: {
        readonly asset: {
            readonly assetContract: {
                readonly address: string;
                readonly chain: ChainIdentifier;
                readonly " $fragmentRefs": FragmentRefs<"CollectionLink_assetContract">;
            };
            readonly assetOwners: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly quantity: string;
                        readonly owner: {
                            readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
                        };
                    } | null;
                } | null>;
            } | null;
            readonly creator: {
                readonly " $fragmentRefs": FragmentRefs<"AccountLink_data">;
            } | null;
            readonly animationUrl: string | null;
            readonly backgroundColor: string | null;
            readonly collection: {
                readonly description: string | null;
                readonly displayData: {
                    readonly cardDisplayStyle: CardDisplayStyle | null;
                };
                readonly hidden: boolean;
                readonly imageUrl: string | null;
                readonly name: string;
                readonly slug: string;
                readonly " $fragmentRefs": FragmentRefs<"CollectionLink_collection" | "Boost_collection" | "Property_collection" | "NumericTrait_collection" | "SocialBar_data">;
            };
            readonly decimals: number | null;
            readonly description: string | null;
            readonly imageUrl: string | null;
            readonly name: string | null;
            readonly numVisitors: number;
            readonly isDelisted: boolean;
            readonly isListable: boolean;
            readonly isReportedSuspicious: boolean;
            readonly relayId: string;
            readonly tokenId: string;
            readonly hasUnlockableContent: boolean;
            readonly favoritesCount: number;
            readonly traits: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly relayId: string;
                        readonly displayType: TraitDisplayType | null;
                        readonly floatValue: number | null;
                        readonly intValue: string | null;
                        readonly traitType: string;
                        readonly value: string | null;
                        readonly " $fragmentRefs": FragmentRefs<"Boost_trait" | "Property_trait" | "NumericTrait_trait" | "Date_trait">;
                    } | null;
                } | null>;
            };
            readonly " $fragmentRefs": FragmentRefs<"AssetCardAnnotations_asset" | "assetInputType" | "asset_display_name" | "ContentAuthenticity_data" | "AssetMedia_asset" | "EnsManualEntryModal_asset" | "Toolbar_asset" | "asset_url" | "itemEvents_data" | "itemEvents_viewItem_data" | "ChainInfo_data">;
        } | null;
        readonly ownedQuantity: string | null;
        readonly ownershipCount: number;
        readonly quantity: string;
        readonly " $fragmentRefs": FragmentRefs<"TradeStation_archetype" | "BidModalContent_archetype">;
    } | null;
    readonly tradeSummary: {
        readonly bestAsk: {
            readonly closedAt: string | null;
            readonly orderType: OrderV2OrderType;
            readonly maker: {
                readonly " $fragmentRefs": FragmentRefs<"wallet_accountKey">;
            };
            readonly relayId: string;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"BidModalContent_trade" | "TradeStation_data">;
    };
    readonly assetEvents: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly relayId: string;
            } | null;
        } | null>;
    } | null;
};
export type itemQuery = {
    readonly response: itemQueryResponse;
    readonly variables: itemQueryVariables;
};



/*
query itemQuery(
  $archetype: ArchetypeInputType!
  $chain: ChainScalar
) {
  archetype(archetype: $archetype) {
    asset {
      ...AssetCardAnnotations_asset
      ...assetInputType
      ...asset_display_name
      ...ContentAuthenticity_data
      assetContract {
        address
        chain
        ...CollectionLink_assetContract
        id
      }
      assetOwners(first: 1) {
        edges {
          node {
            quantity
            owner {
              ...AccountLink_data
              id
            }
            id
          }
        }
      }
      creator {
        ...AccountLink_data
        id
      }
      animationUrl
      backgroundColor
      collection {
        description
        displayData {
          cardDisplayStyle
        }
        hidden
        imageUrl
        name
        slug
        ...CollectionLink_collection
        ...Boost_collection
        ...Property_collection
        ...NumericTrait_collection
        ...SocialBar_data
        id
      }
      decimals
      description
      imageUrl
      name
      numVisitors
      isDelisted
      isListable
      isReportedSuspicious
      relayId
      tokenId
      hasUnlockableContent
      favoritesCount
      traits(first: 100) {
        edges {
          node {
            relayId
            displayType
            floatValue
            intValue
            traitType
            value
            ...Boost_trait
            ...Property_trait
            ...NumericTrait_trait
            ...Date_trait
            id
          }
        }
      }
      ...AssetMedia_asset
      ...EnsManualEntryModal_asset
      ...Toolbar_asset
      ...asset_url
      ...itemEvents_data
      ...itemEvents_viewItem_data
      ...ChainInfo_data
      id
    }
    ownedQuantity(identity: {})
    ownershipCount
    quantity
    ...TradeStation_archetype_3wquQ2
    ...BidModalContent_archetype_3wquQ2
  }
  tradeSummary(archetype: $archetype) {
    bestAsk {
      closedAt
      orderType
      maker {
        ...wallet_accountKey
        id
      }
      relayId
      id
    }
    ...BidModalContent_trade
    ...TradeStation_data
  }
  assetEvents(archetype: $archetype, first: 11) {
    edges {
      node {
        relayId
        id
      }
    }
  }
}

fragment AccountLink_data on AccountType {
  address
  config
  isCompromised
  user {
    publicUsername
    id
  }
  ...ProfileImage_data
  ...wallet_accountKey
  ...accounts_url
}

fragment AskPrice_data on OrderV2Type {
  dutchAuctionFinalPrice
  openedAt
  priceFnEndedAt
  makerAssetBundle {
    assetQuantities(first: 30) {
      edges {
        node {
          ...quantity_data
          id
        }
      }
    }
    id
  }
  takerAssetBundle {
    assetQuantities(first: 1) {
      edges {
        node {
          ...AssetQuantity_data
          id
        }
      }
    }
    id
  }
}

fragment AssetCardAnnotations_asset on AssetType {
  assetContract {
    chain
    id
  }
  decimals
  relayId
  favoritesCount
  isDelisted
  isFavorite
  isFrozen
  hasUnlockableContent
  ...AssetCardBuyNow_data
  orderData {
    bestAsk {
      orderType
      relayId
      maker {
        address
      }
    }
  }
}

fragment AssetCardBuyNow_data on AssetType {
  tokenId
  relayId
  assetContract {
    address
    chain
    id
  }
  collection {
    slug
    id
  }
  orderData {
    bestAsk {
      relayId
    }
  }
}

fragment AssetMedia_asset on AssetType {
  animationUrl
  backgroundColor
  collection {
    displayData {
      cardDisplayStyle
    }
    id
  }
  isDelisted
  displayImageUrl
}

fragment AssetQuantity_data on AssetQuantityType {
  asset {
    ...Price_data
    id
  }
  quantity
}

fragment BidModalContent_archetype_3wquQ2 on ArchetypeType {
  asset {
    assetContract {
      address
      chain
      id
    }
    decimals
    relayId
    collection {
      slug
      paymentAssets(chain: $chain) {
        relayId
        asset {
          assetContract {
            address
            chain
            id
          }
          decimals
          symbol
          usdSpotPrice
          relayId
          id
        }
        ...PaymentTokenInputV2_data
        id
      }
      ...verification_data
      id
    }
    id
  }
  quantity
  ownedQuantity(identity: {})
}

fragment BidModalContent_trade on TradeSummaryType {
  bestAsk {
    closedAt
    isFulfillable
    oldOrder
    orderType
    relayId
    makerAssetBundle {
      assetQuantities(first: 30) {
        edges {
          node {
            asset {
              collection {
                ...verification_data
                id
              }
              id
            }
            id
          }
        }
      }
      id
    }
    takerAssetBundle {
      assetQuantities(first: 1) {
        edges {
          node {
            quantity
            asset {
              decimals
              relayId
              id
            }
            id
          }
        }
      }
      id
    }
    id
  }
  bestBid {
    relayId
    makerAssetBundle {
      assetQuantities(first: 1) {
        edges {
          node {
            quantity
            asset {
              decimals
              id
            }
            ...AssetQuantity_data
            id
          }
        }
      }
      id
    }
    id
  }
}

fragment Boost_collection on CollectionType {
  numericTraits {
    key
    value {
      max
      min
    }
  }
  slug
}

fragment Boost_trait on TraitType {
  displayType
  floatValue
  intValue
  traitType
}

fragment ChainInfo_data on AssetType {
  assetContract {
    openseaVersion
    address
    chain
    blockExplorerLink
    tokenStandard
    id
  }
  isEditableByOwner {
    value
  }
  tokenId
  isFrozen
  frozenAt
  tokenMetadata
}

fragment CollectionLink_assetContract on AssetContractType {
  address
  blockExplorerLink
}

fragment CollectionLink_collection on CollectionType {
  name
  ...collection_url
  ...verification_data
}

fragment ContentAuthenticity_data on AssetType {
  authenticityMetadata {
    signedOn
    signedBy
    producedWith
    walletAddress
    id
  }
  imageUrl
  creator {
    address
    id
  }
}

fragment Date_trait on TraitType {
  traitType
  floatValue
  intValue
}

fragment EnsManualEntryModal_asset on AssetType {
  assetContract {
    address
    id
  }
  tokenId
}

fragment NumericTrait_collection on CollectionType {
  numericTraits {
    key
    value {
      max
      min
    }
  }
  slug
}

fragment NumericTrait_trait on TraitType {
  displayType
  floatValue
  intValue
  maxValue
  traitType
}

fragment PaymentAsset_data on PaymentAssetType {
  asset {
    assetContract {
      chain
      id
    }
    imageUrl
    symbol
    id
  }
}

fragment PaymentTokenInputV2_data on PaymentAssetType {
  relayId
  asset {
    decimals
    symbol
    usdSpotPrice
    id
  }
  ...PaymentAsset_data
}

fragment Price_data on AssetType {
  decimals
  imageUrl
  symbol
  usdSpotPrice
  assetContract {
    blockExplorerLink
    chain
    id
  }
}

fragment ProfileImage_data on AccountType {
  imageUrl
  address
}

fragment Property_collection on CollectionType {
  slug
  stats {
    totalSupply
    id
  }
}

fragment Property_trait on TraitType {
  displayType
  traitCount
  traitType
  value
}

fragment SocialBar_data on CollectionType {
  relayId
  discordUrl
  externalUrl
  instagramUsername
  mediumUsername
  slug
  telegramUrl
  twitterUsername
  ...collection_url
}

fragment Toolbar_asset on AssetType {
  ...asset_url
  ...itemEvents_data
  assetContract {
    address
    chain
    id
  }
  collection {
    externalUrl
    name
    slug
    id
  }
  externalLink
  name
  relayId
  tokenId
}

fragment TradeStation_archetype_3wquQ2 on ArchetypeType {
  asset {
    assetContract {
      chain
      id
    }
    assetOwners(first: 1) {
      edges {
        node {
          owner {
            ...wallet_accountKey
            id
          }
          id
        }
      }
    }
    collection {
      ...verification_data
      id
    }
    isListable
    relayId
    id
  }
  ...BidModalContent_archetype_3wquQ2
}

fragment TradeStation_data on TradeSummaryType {
  bestAsk {
    closedAt
    dutchAuctionFinalPrice
    openedAt
    orderType
    priceFnEndedAt
    englishAuctionReservePrice
    relayId
    maker {
      ...wallet_accountKey
      id
    }
    makerAssetBundle {
      assetQuantities(first: 30) {
        edges {
          node {
            asset {
              relayId
              assetContract {
                chain
                id
              }
              collection {
                slug
                ...verification_data
                id
              }
              ...itemEvents_data
              id
            }
            ...quantity_data
            id
          }
        }
      }
      id
    }
    taker {
      ...wallet_accountKey
      id
    }
    takerAssetBundle {
      assetQuantities(first: 1) {
        edges {
          node {
            quantity
            asset {
              symbol
              decimals
              relayId
              usdSpotPrice
              assetContract {
                address
                id
              }
              tokenId
              id
            }
            ...AssetQuantity_data
            id
          }
        }
      }
      id
    }
    ...AskPrice_data
    ...orderLink_data
    ...quantity_remaining
    id
  }
  bestBid {
    makerAssetBundle {
      assetQuantities(first: 1) {
        edges {
          node {
            quantity
            ...AssetQuantity_data
            id
          }
        }
      }
      id
    }
    id
  }
  ...BidModalContent_trade
}

fragment accounts_url on AccountType {
  address
  user {
    publicUsername
    id
  }
}

fragment assetInputType on AssetType {
  tokenId
  assetContract {
    address
    chain
    id
  }
}

fragment asset_display_name on AssetType {
  tokenId
  name
}

fragment asset_url on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}

fragment collection_url on CollectionType {
  slug
}

fragment itemEvents_data on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}

fragment itemEvents_viewItem_data on AssetType {
  ...itemEvents_data
  collection {
    ...verification_data
    id
  }
  isReportedSuspicious
}

fragment orderLink_data on OrderV2Type {
  makerAssetBundle {
    assetQuantities(first: 30) {
      edges {
        node {
          asset {
            externalLink
            collection {
              externalUrl
              id
            }
            id
          }
          id
        }
      }
    }
    id
  }
}

fragment quantity_data on AssetQuantityType {
  asset {
    decimals
    id
  }
  quantity
}

fragment quantity_remaining on OrderV2Type {
  makerAsset: makerAssetBundle {
    assetQuantities(first: 1) {
      edges {
        node {
          asset {
            decimals
            id
          }
          quantity
          id
        }
      }
    }
    id
  }
  takerAsset: takerAssetBundle {
    assetQuantities(first: 1) {
      edges {
        node {
          asset {
            decimals
            id
          }
          quantity
          id
        }
      }
    }
    id
  }
  remainingQuantity
  side
}

fragment verification_data on CollectionType {
  isMintable
  isSafelisted
  isVerified
}

fragment wallet_accountKey on AccountType {
  address
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "archetype"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "chain"
  }
],
v1 = {
  "kind": "Variable",
  "name": "archetype",
  "variableName": "archetype"
},
v2 = [
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v7 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "AccountLink_data"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "animationUrl",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backgroundColor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v11 = {
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
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hidden",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "numVisitors",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDelisted",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isListable",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isReportedSuspicious",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasUnlockableContent",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "favoritesCount",
  "storageKey": null
},
v25 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayType",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "floatValue",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "intValue",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "traitType",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetContractType",
  "kind": "LinkedField",
  "name": "assetContract",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v32 = [
  (v31/*: any*/),
  (v22/*: any*/)
],
v33 = {
  "kind": "InlineDataFragmentSpread",
  "name": "itemEvents_data",
  "selections": (v32/*: any*/)
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMintable",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSafelisted",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v37 = {
  "kind": "Literal",
  "name": "identity",
  "value": {}
},
v38 = {
  "alias": null,
  "args": [
    (v37/*: any*/)
  ],
  "kind": "ScalarField",
  "name": "ownedQuantity",
  "storageKey": "ownedQuantity(identity:{})"
},
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ownershipCount",
  "storageKey": null
},
v40 = {
  "kind": "Variable",
  "name": "chain",
  "variableName": "chain"
},
v41 = [
  (v40/*: any*/),
  (v37/*: any*/)
],
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "closedAt",
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v44 = [
  (v3/*: any*/)
],
v45 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 11
  }
],
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blockExplorerLink",
  "storageKey": null
},
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "externalUrl",
  "storageKey": null
},
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v50 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "usdSpotPrice",
  "storageKey": null
},
v51 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "config",
  "storageKey": null
},
v52 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isCompromised",
  "storageKey": null
},
v53 = {
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
    },
    (v46/*: any*/)
  ],
  "storageKey": null
},
v54 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "externalLink",
  "storageKey": null
},
v55 = [
  (v3/*: any*/),
  (v46/*: any*/)
],
v56 = [
  {
    "alias": null,
    "args": (v5/*: any*/),
    "concreteType": "AssetQuantityTypeConnection",
    "kind": "LinkedField",
    "name": "assetQuantities",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AssetQuantityTypeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetQuantityType",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetType",
                "kind": "LinkedField",
                "name": "asset",
                "plural": false,
                "selections": [
                  (v16/*: any*/),
                  (v46/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/),
              (v46/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "assetQuantities(first:1)"
  },
  (v46/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "itemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ArchetypeType",
        "kind": "LinkedField",
        "name": "archetype",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetType",
            "kind": "LinkedField",
            "name": "asset",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "assetContract",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CollectionLink_assetContract"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "AssetOwnershipTypeConnection",
                "kind": "LinkedField",
                "name": "assetOwners",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetOwnershipTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetOwnershipType",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AccountType",
                            "kind": "LinkedField",
                            "name": "owner",
                            "plural": false,
                            "selections": (v7/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "assetOwners(first:1)"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountType",
                "kind": "LinkedField",
                "name": "creator",
                "plural": false,
                "selections": (v7/*: any*/),
                "storageKey": null
              },
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CollectionLink_collection"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Boost_collection"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Property_collection"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "NumericTrait_collection"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SocialBar_data"
                  }
                ],
                "storageKey": null
              },
              (v16/*: any*/),
              (v10/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              {
                "alias": null,
                "args": (v25/*: any*/),
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
                          (v21/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v28/*: any*/),
                          (v29/*: any*/),
                          (v30/*: any*/),
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
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AssetCardAnnotations_asset"
              },
              {
                "kind": "InlineDataFragmentSpread",
                "name": "assetInputType",
                "selections": [
                  (v22/*: any*/),
                  (v31/*: any*/)
                ]
              },
              {
                "kind": "InlineDataFragmentSpread",
                "name": "asset_display_name",
                "selections": [
                  (v22/*: any*/),
                  (v14/*: any*/)
                ]
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ContentAuthenticity_data"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AssetMedia_asset"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "EnsManualEntryModal_asset"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Toolbar_asset"
              },
              {
                "kind": "InlineDataFragmentSpread",
                "name": "asset_url",
                "selections": (v32/*: any*/)
              },
              (v33/*: any*/),
              {
                "kind": "InlineDataFragmentSpread",
                "name": "itemEvents_viewItem_data",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionType",
                    "kind": "LinkedField",
                    "name": "collection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "verification_data",
                        "selections": [
                          (v34/*: any*/),
                          (v35/*: any*/),
                          (v36/*: any*/)
                        ]
                      }
                    ],
                    "storageKey": null
                  },
                  (v20/*: any*/),
                  (v33/*: any*/)
                ]
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ChainInfo_data"
              }
            ],
            "storageKey": null
          },
          (v38/*: any*/),
          (v39/*: any*/),
          (v6/*: any*/),
          {
            "args": (v41/*: any*/),
            "kind": "FragmentSpread",
            "name": "TradeStation_archetype"
          },
          {
            "args": (v41/*: any*/),
            "kind": "FragmentSpread",
            "name": "BidModalContent_archetype"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "TradeSummaryType",
        "kind": "LinkedField",
        "name": "tradeSummary",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderV2Type",
            "kind": "LinkedField",
            "name": "bestAsk",
            "plural": false,
            "selections": [
              (v42/*: any*/),
              (v43/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountType",
                "kind": "LinkedField",
                "name": "maker",
                "plural": false,
                "selections": [
                  {
                    "kind": "InlineDataFragmentSpread",
                    "name": "wallet_accountKey",
                    "selections": (v44/*: any*/)
                  }
                ],
                "storageKey": null
              },
              (v21/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BidModalContent_trade"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TradeStation_data"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v45/*: any*/),
        "concreteType": "AssetEventTypeConnection",
        "kind": "LinkedField",
        "name": "assetEvents",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetEventTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetEventType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v21/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "itemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ArchetypeType",
        "kind": "LinkedField",
        "name": "archetype",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetType",
            "kind": "LinkedField",
            "name": "asset",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetContractType",
                "kind": "LinkedField",
                "name": "assetContract",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v46/*: any*/),
                  (v3/*: any*/),
                  (v47/*: any*/),
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
                    "name": "tokenStandard",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v16/*: any*/),
              (v21/*: any*/),
              (v24/*: any*/),
              (v18/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFavorite",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFrozen",
                "storageKey": null
              },
              (v23/*: any*/),
              (v22/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  (v15/*: any*/),
                  (v46/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v34/*: any*/),
                  (v35/*: any*/),
                  (v36/*: any*/),
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionStatsType",
                    "kind": "LinkedField",
                    "name": "stats",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "totalSupply",
                        "storageKey": null
                      },
                      (v46/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v21/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "discordUrl",
                    "storageKey": null
                  },
                  (v48/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "instagramUsername",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mediumUsername",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "telegramUrl",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "twitterUsername",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      (v40/*: any*/)
                    ],
                    "concreteType": "PaymentAssetType",
                    "kind": "LinkedField",
                    "name": "paymentAssets",
                    "plural": true,
                    "selections": [
                      (v21/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetType",
                        "kind": "LinkedField",
                        "name": "asset",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AssetContractType",
                            "kind": "LinkedField",
                            "name": "assetContract",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v46/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v16/*: any*/),
                          (v49/*: any*/),
                          (v50/*: any*/),
                          (v21/*: any*/),
                          (v46/*: any*/),
                          (v13/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v46/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ESOrderDataType",
                "kind": "LinkedField",
                "name": "orderData",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ESOrderType",
                    "kind": "LinkedField",
                    "name": "bestAsk",
                    "plural": false,
                    "selections": [
                      (v21/*: any*/),
                      (v43/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ESAccountType",
                        "kind": "LinkedField",
                        "name": "maker",
                        "plural": false,
                        "selections": (v44/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v14/*: any*/),
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
                  },
                  (v46/*: any*/)
                ],
                "storageKey": null
              },
              (v13/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountType",
                "kind": "LinkedField",
                "name": "creator",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v46/*: any*/),
                  (v51/*: any*/),
                  (v52/*: any*/),
                  (v53/*: any*/),
                  (v13/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "AssetOwnershipTypeConnection",
                "kind": "LinkedField",
                "name": "assetOwners",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetOwnershipTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetOwnershipType",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AccountType",
                            "kind": "LinkedField",
                            "name": "owner",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v51/*: any*/),
                              (v52/*: any*/),
                              (v53/*: any*/),
                              (v13/*: any*/),
                              (v46/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v46/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "assetOwners(first:1)"
              },
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v17/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              {
                "alias": null,
                "args": (v25/*: any*/),
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
                          (v21/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v28/*: any*/),
                          (v29/*: any*/),
                          (v30/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "traitCount",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "maxValue",
                            "storageKey": null
                          },
                          (v46/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "traits(first:100)"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "displayImageUrl",
                "storageKey": null
              },
              (v54/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AbleToType",
                "kind": "LinkedField",
                "name": "isEditableByOwner",
                "plural": false,
                "selections": [
                  (v30/*: any*/)
                ],
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
              (v46/*: any*/)
            ],
            "storageKey": null
          },
          (v38/*: any*/),
          (v39/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "TradeSummaryType",
        "kind": "LinkedField",
        "name": "tradeSummary",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderV2Type",
            "kind": "LinkedField",
            "name": "bestAsk",
            "plural": false,
            "selections": [
              (v42/*: any*/),
              (v43/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountType",
                "kind": "LinkedField",
                "name": "maker",
                "plural": false,
                "selections": (v55/*: any*/),
                "storageKey": null
              },
              (v21/*: any*/),
              (v46/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFulfillable",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "oldOrder",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetBundleType",
                "kind": "LinkedField",
                "name": "makerAssetBundle",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 30
                      }
                    ],
                    "concreteType": "AssetQuantityTypeConnection",
                    "kind": "LinkedField",
                    "name": "assetQuantities",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetQuantityTypeEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AssetQuantityType",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "AssetType",
                                "kind": "LinkedField",
                                "name": "asset",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CollectionType",
                                    "kind": "LinkedField",
                                    "name": "collection",
                                    "plural": false,
                                    "selections": [
                                      (v34/*: any*/),
                                      (v35/*: any*/),
                                      (v36/*: any*/),
                                      (v46/*: any*/),
                                      (v15/*: any*/),
                                      (v48/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v46/*: any*/),
                                  (v21/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AssetContractType",
                                    "kind": "LinkedField",
                                    "name": "assetContract",
                                    "plural": false,
                                    "selections": [
                                      (v4/*: any*/),
                                      (v46/*: any*/),
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v22/*: any*/),
                                  (v16/*: any*/),
                                  (v54/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v46/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "assetQuantities(first:30)"
                  },
                  (v46/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetBundleType",
                "kind": "LinkedField",
                "name": "takerAssetBundle",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "concreteType": "AssetQuantityTypeConnection",
                    "kind": "LinkedField",
                    "name": "assetQuantities",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetQuantityTypeEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AssetQuantityType",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "AssetType",
                                "kind": "LinkedField",
                                "name": "asset",
                                "plural": false,
                                "selections": [
                                  (v16/*: any*/),
                                  (v21/*: any*/),
                                  (v46/*: any*/),
                                  (v49/*: any*/),
                                  (v50/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AssetContractType",
                                    "kind": "LinkedField",
                                    "name": "assetContract",
                                    "plural": false,
                                    "selections": [
                                      (v3/*: any*/),
                                      (v46/*: any*/),
                                      (v47/*: any*/),
                                      (v4/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v22/*: any*/),
                                  (v13/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v46/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "assetQuantities(first:1)"
                  },
                  (v46/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dutchAuctionFinalPrice",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "openedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "priceFnEndedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "englishAuctionReservePrice",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AccountType",
                "kind": "LinkedField",
                "name": "taker",
                "plural": false,
                "selections": (v55/*: any*/),
                "storageKey": null
              },
              {
                "alias": "makerAsset",
                "args": null,
                "concreteType": "AssetBundleType",
                "kind": "LinkedField",
                "name": "makerAssetBundle",
                "plural": false,
                "selections": (v56/*: any*/),
                "storageKey": null
              },
              {
                "alias": "takerAsset",
                "args": null,
                "concreteType": "AssetBundleType",
                "kind": "LinkedField",
                "name": "takerAssetBundle",
                "plural": false,
                "selections": (v56/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "remainingQuantity",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "side",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderV2Type",
            "kind": "LinkedField",
            "name": "bestBid",
            "plural": false,
            "selections": [
              (v21/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetBundleType",
                "kind": "LinkedField",
                "name": "makerAssetBundle",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "concreteType": "AssetQuantityTypeConnection",
                    "kind": "LinkedField",
                    "name": "assetQuantities",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetQuantityTypeEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AssetQuantityType",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "AssetType",
                                "kind": "LinkedField",
                                "name": "asset",
                                "plural": false,
                                "selections": [
                                  (v16/*: any*/),
                                  (v46/*: any*/),
                                  (v13/*: any*/),
                                  (v49/*: any*/),
                                  (v50/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AssetContractType",
                                    "kind": "LinkedField",
                                    "name": "assetContract",
                                    "plural": false,
                                    "selections": [
                                      (v47/*: any*/),
                                      (v4/*: any*/),
                                      (v46/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v46/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "assetQuantities(first:1)"
                  },
                  (v46/*: any*/)
                ],
                "storageKey": null
              },
              (v46/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v45/*: any*/),
        "concreteType": "AssetEventTypeConnection",
        "kind": "LinkedField",
        "name": "assetEvents",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetEventTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetEventType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v21/*: any*/),
                  (v46/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "09fa5c77d8c73d448a8f1c388925591d",
    "id": null,
    "metadata": {},
    "name": "itemQuery",
    "operationKind": "query",
    "text": "query itemQuery(\n  $archetype: ArchetypeInputType!\n  $chain: ChainScalar\n) {\n  archetype(archetype: $archetype) {\n    asset {\n      ...AssetCardAnnotations_asset\n      ...assetInputType\n      ...asset_display_name\n      ...ContentAuthenticity_data\n      assetContract {\n        address\n        chain\n        ...CollectionLink_assetContract\n        id\n      }\n      assetOwners(first: 1) {\n        edges {\n          node {\n            quantity\n            owner {\n              ...AccountLink_data\n              id\n            }\n            id\n          }\n        }\n      }\n      creator {\n        ...AccountLink_data\n        id\n      }\n      animationUrl\n      backgroundColor\n      collection {\n        description\n        displayData {\n          cardDisplayStyle\n        }\n        hidden\n        imageUrl\n        name\n        slug\n        ...CollectionLink_collection\n        ...Boost_collection\n        ...Property_collection\n        ...NumericTrait_collection\n        ...SocialBar_data\n        id\n      }\n      decimals\n      description\n      imageUrl\n      name\n      numVisitors\n      isDelisted\n      isListable\n      isReportedSuspicious\n      relayId\n      tokenId\n      hasUnlockableContent\n      favoritesCount\n      traits(first: 100) {\n        edges {\n          node {\n            relayId\n            displayType\n            floatValue\n            intValue\n            traitType\n            value\n            ...Boost_trait\n            ...Property_trait\n            ...NumericTrait_trait\n            ...Date_trait\n            id\n          }\n        }\n      }\n      ...AssetMedia_asset\n      ...EnsManualEntryModal_asset\n      ...Toolbar_asset\n      ...asset_url\n      ...itemEvents_data\n      ...itemEvents_viewItem_data\n      ...ChainInfo_data\n      id\n    }\n    ownedQuantity(identity: {})\n    ownershipCount\n    quantity\n    ...TradeStation_archetype_3wquQ2\n    ...BidModalContent_archetype_3wquQ2\n  }\n  tradeSummary(archetype: $archetype) {\n    bestAsk {\n      closedAt\n      orderType\n      maker {\n        ...wallet_accountKey\n        id\n      }\n      relayId\n      id\n    }\n    ...BidModalContent_trade\n    ...TradeStation_data\n  }\n  assetEvents(archetype: $archetype, first: 11) {\n    edges {\n      node {\n        relayId\n        id\n      }\n    }\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment AskPrice_data on OrderV2Type {\n  dutchAuctionFinalPrice\n  openedAt\n  priceFnEndedAt\n  makerAssetBundle {\n    assetQuantities(first: 30) {\n      edges {\n        node {\n          ...quantity_data\n          id\n        }\n      }\n    }\n    id\n  }\n  takerAssetBundle {\n    assetQuantities(first: 1) {\n      edges {\n        node {\n          ...AssetQuantity_data\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment AssetCardAnnotations_asset on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  collection {\n    slug\n    id\n  }\n  orderData {\n    bestAsk {\n      relayId\n    }\n  }\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment BidModalContent_archetype_3wquQ2 on ArchetypeType {\n  asset {\n    assetContract {\n      address\n      chain\n      id\n    }\n    decimals\n    relayId\n    collection {\n      slug\n      paymentAssets(chain: $chain) {\n        relayId\n        asset {\n          assetContract {\n            address\n            chain\n            id\n          }\n          decimals\n          symbol\n          usdSpotPrice\n          relayId\n          id\n        }\n        ...PaymentTokenInputV2_data\n        id\n      }\n      ...verification_data\n      id\n    }\n    id\n  }\n  quantity\n  ownedQuantity(identity: {})\n}\n\nfragment BidModalContent_trade on TradeSummaryType {\n  bestAsk {\n    closedAt\n    isFulfillable\n    oldOrder\n    orderType\n    relayId\n    makerAssetBundle {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              collection {\n                ...verification_data\n                id\n              }\n              id\n            }\n            id\n          }\n        }\n      }\n      id\n    }\n    takerAssetBundle {\n      assetQuantities(first: 1) {\n        edges {\n          node {\n            quantity\n            asset {\n              decimals\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n  bestBid {\n    relayId\n    makerAssetBundle {\n      assetQuantities(first: 1) {\n        edges {\n          node {\n            quantity\n            asset {\n              decimals\n              id\n            }\n            ...AssetQuantity_data\n            id\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment Boost_collection on CollectionType {\n  numericTraits {\n    key\n    value {\n      max\n      min\n    }\n  }\n  slug\n}\n\nfragment Boost_trait on TraitType {\n  displayType\n  floatValue\n  intValue\n  traitType\n}\n\nfragment ChainInfo_data on AssetType {\n  assetContract {\n    openseaVersion\n    address\n    chain\n    blockExplorerLink\n    tokenStandard\n    id\n  }\n  isEditableByOwner {\n    value\n  }\n  tokenId\n  isFrozen\n  frozenAt\n  tokenMetadata\n}\n\nfragment CollectionLink_assetContract on AssetContractType {\n  address\n  blockExplorerLink\n}\n\nfragment CollectionLink_collection on CollectionType {\n  name\n  ...collection_url\n  ...verification_data\n}\n\nfragment ContentAuthenticity_data on AssetType {\n  authenticityMetadata {\n    signedOn\n    signedBy\n    producedWith\n    walletAddress\n    id\n  }\n  imageUrl\n  creator {\n    address\n    id\n  }\n}\n\nfragment Date_trait on TraitType {\n  traitType\n  floatValue\n  intValue\n}\n\nfragment EnsManualEntryModal_asset on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n}\n\nfragment NumericTrait_collection on CollectionType {\n  numericTraits {\n    key\n    value {\n      max\n      min\n    }\n  }\n  slug\n}\n\nfragment NumericTrait_trait on TraitType {\n  displayType\n  floatValue\n  intValue\n  maxValue\n  traitType\n}\n\nfragment PaymentAsset_data on PaymentAssetType {\n  asset {\n    assetContract {\n      chain\n      id\n    }\n    imageUrl\n    symbol\n    id\n  }\n}\n\nfragment PaymentTokenInputV2_data on PaymentAssetType {\n  relayId\n  asset {\n    decimals\n    symbol\n    usdSpotPrice\n    id\n  }\n  ...PaymentAsset_data\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  address\n}\n\nfragment Property_collection on CollectionType {\n  slug\n  stats {\n    totalSupply\n    id\n  }\n}\n\nfragment Property_trait on TraitType {\n  displayType\n  traitCount\n  traitType\n  value\n}\n\nfragment SocialBar_data on CollectionType {\n  relayId\n  discordUrl\n  externalUrl\n  instagramUsername\n  mediumUsername\n  slug\n  telegramUrl\n  twitterUsername\n  ...collection_url\n}\n\nfragment Toolbar_asset on AssetType {\n  ...asset_url\n  ...itemEvents_data\n  assetContract {\n    address\n    chain\n    id\n  }\n  collection {\n    externalUrl\n    name\n    slug\n    id\n  }\n  externalLink\n  name\n  relayId\n  tokenId\n}\n\nfragment TradeStation_archetype_3wquQ2 on ArchetypeType {\n  asset {\n    assetContract {\n      chain\n      id\n    }\n    assetOwners(first: 1) {\n      edges {\n        node {\n          owner {\n            ...wallet_accountKey\n            id\n          }\n          id\n        }\n      }\n    }\n    collection {\n      ...verification_data\n      id\n    }\n    isListable\n    relayId\n    id\n  }\n  ...BidModalContent_archetype_3wquQ2\n}\n\nfragment TradeStation_data on TradeSummaryType {\n  bestAsk {\n    closedAt\n    dutchAuctionFinalPrice\n    openedAt\n    orderType\n    priceFnEndedAt\n    englishAuctionReservePrice\n    relayId\n    maker {\n      ...wallet_accountKey\n      id\n    }\n    makerAssetBundle {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              assetContract {\n                chain\n                id\n              }\n              collection {\n                slug\n                ...verification_data\n                id\n              }\n              ...itemEvents_data\n              id\n            }\n            ...quantity_data\n            id\n          }\n        }\n      }\n      id\n    }\n    taker {\n      ...wallet_accountKey\n      id\n    }\n    takerAssetBundle {\n      assetQuantities(first: 1) {\n        edges {\n          node {\n            quantity\n            asset {\n              symbol\n              decimals\n              relayId\n              usdSpotPrice\n              assetContract {\n                address\n                id\n              }\n              tokenId\n              id\n            }\n            ...AssetQuantity_data\n            id\n          }\n        }\n      }\n      id\n    }\n    ...AskPrice_data\n    ...orderLink_data\n    ...quantity_remaining\n    id\n  }\n  bestBid {\n    makerAssetBundle {\n      assetQuantities(first: 1) {\n        edges {\n          node {\n            quantity\n            ...AssetQuantity_data\n            id\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n  ...BidModalContent_trade\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment assetInputType on AssetType {\n  tokenId\n  assetContract {\n    address\n    chain\n    id\n  }\n}\n\nfragment asset_display_name on AssetType {\n  tokenId\n  name\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment itemEvents_data on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment itemEvents_viewItem_data on AssetType {\n  ...itemEvents_data\n  collection {\n    ...verification_data\n    id\n  }\n  isReportedSuspicious\n}\n\nfragment orderLink_data on OrderV2Type {\n  makerAssetBundle {\n    assetQuantities(first: 30) {\n      edges {\n        node {\n          asset {\n            externalLink\n            collection {\n              externalUrl\n              id\n            }\n            id\n          }\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment quantity_data on AssetQuantityType {\n  asset {\n    decimals\n    id\n  }\n  quantity\n}\n\nfragment quantity_remaining on OrderV2Type {\n  makerAsset: makerAssetBundle {\n    assetQuantities(first: 1) {\n      edges {\n        node {\n          asset {\n            decimals\n            id\n          }\n          quantity\n          id\n        }\n      }\n    }\n    id\n  }\n  takerAsset: takerAssetBundle {\n    assetQuantities(first: 1) {\n      edges {\n        node {\n          asset {\n            decimals\n            id\n          }\n          quantity\n          id\n        }\n      }\n    }\n    id\n  }\n  remainingQuantity\n  side\n}\n\nfragment verification_data on CollectionType {\n  isMintable\n  isSafelisted\n  isVerified\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
  }
};
})();
(node as any).hash = 'c2c1755915b4996567307f9895f9fe06';
export default node;
