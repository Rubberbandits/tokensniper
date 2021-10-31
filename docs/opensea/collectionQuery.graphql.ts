/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionSort = "ASSET_COUNT" | "AVERAGE_PRICE" | "CREATED_DATE" | "MARKET_CAP" | "NAME" | "NUM_OWNERS" | "NUM_REPORTS" | "ONE_DAY_VOLUME" | "SEVEN_DAY_AVERAGE_PRICE" | "SEVEN_DAY_CHANGE" | "SEVEN_DAY_SALES" | "SEVEN_DAY_VOLUME" | "THIRTY_DAY_VOLUME" | "TOTAL_SALES" | "TOTAL_SUPPLY" | "TOTAL_VOLUME" | "%future added value";
export type EventType = "ASSET_APPROVE" | "ASSET_TRANSFER" | "AUCTION_CANCELLED" | "AUCTION_CREATED" | "AUCTION_SUCCESSFUL" | "BID_ENTERED" | "BID_WITHDRAWN" | "CUSTOM" | "OFFER_ENTERED" | "PAYOUT" | "%future added value";
export type SearchSortBy = "BIRTH_DATE" | "CREATED_DATE" | "EXPIRATION_DATE" | "FAVORITE_COUNT" | "LAST_SALE_DATE" | "LAST_SALE_PRICE" | "LAST_TRANSFER_DATE" | "LISTING_DATE" | "PRICE" | "SALE_COUNT" | "STAFF_SORT_1" | "STAFF_SORT_2" | "STAFF_SORT_3" | "UNIT_PRICE" | "VIEWER_COUNT" | "%future added value";
export type SearchToggle = "BUY_NOW" | "HAS_OFFERS" | "IS_NEW" | "ON_AUCTION" | "%future added value";
export type TraitRangeType = {
    name: string;
    ranges: Array<RangeType>;
};
export type RangeType = {
    min: number;
    max: number;
};
export type TraitInputType = {
    name: string;
    values: Array<string>;
};
export type collectionQueryVariables = {
    collection: string;
    collections?: Array<string> | null | undefined;
    collectionQuery?: string | null | undefined;
    includeHiddenCollections?: boolean | null | undefined;
    numericTraits?: Array<TraitRangeType> | null | undefined;
    query?: string | null | undefined;
    sortAscending?: boolean | null | undefined;
    sortBy?: SearchSortBy | null | undefined;
    stringTraits?: Array<TraitInputType> | null | undefined;
    toggles?: Array<SearchToggle> | null | undefined;
    showContextMenu?: boolean | null | undefined;
    isCategory: boolean;
    categories?: Array<string> | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    collectionSortBy?: CollectionSort | null | undefined;
    eventTypes?: Array<EventType> | null | undefined;
    isSingleCollection: boolean;
};
export type collectionQueryResponse = {
    readonly collection: {
        readonly isEditable: boolean;
        readonly bannerImageUrl: string | null;
        readonly name: string;
        readonly description: string | null;
        readonly imageUrl: string | null;
        readonly relayId: string;
        readonly representativeAsset: {
            readonly assetContract: {
                readonly openseaVersion: string | null;
            };
        } | null;
        readonly slug: string;
        readonly " $fragmentRefs": FragmentRefs<"verification_data" | "collection_url" | "CollectionHeader_data">;
    } | null;
    readonly assets?: {
        readonly " $fragmentRefs": FragmentRefs<"AssetSearch_data">;
    } | undefined;
    readonly activity: {
        readonly " $fragmentRefs": FragmentRefs<"ActivitySearch_data">;
    };
    readonly " $fragmentRefs": FragmentRefs<"TrendingCollectionsList_data">;
};
export type collectionQuery = {
    readonly response: collectionQueryResponse;
    readonly variables: collectionQueryVariables;
};



/*
query collectionQuery(
  $collection: CollectionSlug!
  $collections: [CollectionSlug!]
  $collectionQuery: String
  $includeHiddenCollections: Boolean
  $numericTraits: [TraitRangeType!]
  $query: String
  $sortAscending: Boolean
  $sortBy: SearchSortBy
  $stringTraits: [TraitInputType!]
  $toggles: [SearchToggle!]
  $showContextMenu: Boolean
  $isCategory: Boolean!
  $categories: [CollectionSlug!]
  $chains: [ChainScalar!]
  $collectionSortBy: CollectionSort
  $isSingleCollection: Boolean!
) {
  collection(collection: $collection) {
    isEditable
    bannerImageUrl
    name
    description
    imageUrl
    relayId
    representativeAsset {
      assetContract {
        openseaVersion
        id
      }
      id
    }
    slug
    ...verification_data
    ...collection_url
    ...CollectionHeader_data
    id
  }
  ...TrendingCollectionsList_data_29bCDU @include(if: $isCategory)
  assets: query @skip(if: $isCategory) {
    ...AssetSearch_data_1bS60n
  }
  activity: query {
    ...ActivitySearch_data_2eDEPY
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

fragment ActivitySearchFilter_data_yLmsP on Query {
  ...CollectionFilter_data_rfWZ1
}

fragment ActivitySearch_data_2eDEPY on Query {
  collection(collection: $collection) @include(if: $isSingleCollection) {
    includeTradingHistory
    id
  }
  ...ActivitySearchFilter_data_yLmsP
  ...SearchPills_data_2Kg4Sq
}

fragment AssetCardAnnotations_assetBundle on AssetBundleType {
  assetCount
}

fragment AssetCardAnnotations_asset_1OrK6u on AssetType {
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
  ...AssetContextMenu_data_3z4lq0 @include(if: $showContextMenu)
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

fragment AssetCardContent_asset on AssetType {
  relayId
  name
  ...AssetMedia_asset
  assetContract {
    address
    chain
    openseaVersion
    id
  }
  tokenId
  collection {
    slug
    id
  }
  isDelisted
}

fragment AssetCardContent_assetBundle on AssetBundleType {
  assetQuantities(first: 18) {
    edges {
      node {
        asset {
          relayId
          ...AssetMedia_asset
          id
        }
        id
      }
    }
  }
}

fragment AssetCardFooter_assetBundle on AssetBundleType {
  ...AssetCardAnnotations_assetBundle
  name
  assetCount
  assetQuantities(first: 18) {
    edges {
      node {
        asset {
          collection {
            name
            relayId
            isVerified
            ...collection_url
            id
          }
          id
        }
        id
      }
    }
  }
  assetEventData {
    lastSale {
      unitPriceQuantity {
        ...AssetQuantity_data
        id
      }
    }
  }
  orderData {
    bestBid {
      orderType
      paymentAssetQuantity {
        ...AssetQuantity_data
        id
      }
    }
    bestAsk {
      closedAt
      orderType
      dutchAuctionFinalPrice
      openedAt
      priceFnEndedAt
      quantity
      decimals
      paymentAssetQuantity {
        quantity
        ...AssetQuantity_data
        id
      }
    }
  }
}

fragment AssetCardFooter_asset_1OrK6u on AssetType {
  ...AssetCardAnnotations_asset_1OrK6u
  name
  tokenId
  collection {
    name
    isVerified
    ...collection_url
    id
  }
  isDelisted
  assetContract {
    address
    chain
    openseaVersion
    id
  }
  assetEventData {
    lastSale {
      unitPriceQuantity {
        ...AssetQuantity_data
        id
      }
    }
  }
  orderData {
    bestBid {
      orderType
      paymentAssetQuantity {
        ...AssetQuantity_data
        id
      }
    }
    bestAsk {
      closedAt
      orderType
      dutchAuctionFinalPrice
      openedAt
      priceFnEndedAt
      quantity
      decimals
      paymentAssetQuantity {
        quantity
        ...AssetQuantity_data
        id
      }
    }
  }
}

fragment AssetContextMenu_data_3z4lq0 on AssetType {
  ...asset_edit_url
  ...asset_url
  ...itemEvents_data
  isDelisted
  isEditable {
    value
    reason
  }
  isListable
  ownership(identity: {}) {
    isPrivate
    quantity
  }
  creator {
    address
    id
  }
  collection {
    isAuthorizedEditor
    id
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

fragment AssetSearchFilter_data_1GloFv on Query {
  ...CollectionFilter_data_tXjHb
  collection(collection: $collection) {
    numericTraits {
      key
      value {
        max
        min
      }
      ...NumericTraitFilter_data
    }
    stringTraits {
      key
      ...StringTraitFilter_data
    }
    id
  }
  ...PaymentFilter_data_2YoIWt
}

fragment AssetSearchList_data_gVyhu on SearchResultType {
  asset {
    assetContract {
      address
      chain
      id
    }
    collection {
      isVerified
      relayId
      id
    }
    relayId
    tokenId
    ...AssetSelectionItem_data
    ...asset_url
    id
  }
  assetBundle {
    relayId
    id
  }
  ...Asset_data_gVyhu
}

fragment AssetSearch_data_1bS60n on Query {
  ...AssetSearchFilter_data_1GloFv
  ...SearchPills_data_2Kg4Sq
  search(collections: $collections, first: 32, numericTraits: $numericTraits, querystring: $query, resultType: ASSETS, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles) {
    edges {
      node {
        ...AssetSearchList_data_gVyhu
        __typename
      }
      cursor
    }
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment AssetSelectionItem_data on AssetType {
  backgroundColor
  collection {
    displayData {
      cardDisplayStyle
    }
    imageUrl
    id
  }
  imageUrl
  name
  relayId
}

fragment Asset_data_gVyhu on SearchResultType {
  asset {
    relayId
    isDelisted
    ...AssetCardContent_asset
    ...AssetCardFooter_asset_1OrK6u
    ...AssetMedia_asset
    ...asset_url
    ...itemEvents_data
    orderData {
      bestAsk {
        paymentAssetQuantity {
          quantityInEth
          id
        }
      }
    }
    id
  }
  assetBundle {
    relayId
    ...bundle_url
    ...AssetCardContent_assetBundle
    ...AssetCardFooter_assetBundle
    orderData {
      bestAsk {
        paymentAssetQuantity {
          quantityInEth
          id
        }
      }
    }
    id
  }
}

fragment CollectionCardContextMenu_data on CollectionType {
  ...collection_url
}

fragment CollectionCard_data on CollectionType {
  ...CollectionCardContextMenu_data
  ...collection_url
  description
  name
  shortDescription
  slug
  logo
  banner
  isVerified
  owner {
    displayName
    user {
      username
      id
    }
    id
  }
  stats {
    totalSupply
    id
  }
}

fragment CollectionFilter_data_rfWZ1 on Query {
  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {
    edges {
      node {
        assetCount
        imageUrl
        name
        slug
        isVerified
        id
      }
    }
  }
  collections(chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {
    edges {
      node {
        assetCount
        imageUrl
        name
        slug
        isVerified
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment CollectionFilter_data_tXjHb on Query {
  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {
    edges {
      node {
        assetCount
        imageUrl
        name
        slug
        isVerified
        id
      }
    }
  }
  collections(first: 100, includeHidden: $includeHiddenCollections, query: $collectionQuery, sortBy: SEVEN_DAY_VOLUME) {
    edges {
      node {
        assetCount
        imageUrl
        name
        slug
        isVerified
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment CollectionHeader_data on CollectionType {
  name
  description
  imageUrl
  bannerImageUrl
  relayId
  owner {
    ...AccountLink_data
    id
  }
  ...CollectionStatsBar_data
  ...SocialBar_data
  ...verification_data
}

fragment CollectionModalContent_data on CollectionType {
  description
  imageUrl
  name
  slug
}

fragment CollectionStatsBar_data on CollectionType {
  stats {
    numOwners
    totalSupply
    totalVolume
    id
  }
  slug
  floorPrice
}

fragment NumericTraitFilter_data on NumericTraitTypePair {
  key
  value {
    max
    min
  }
}

fragment PaymentFilter_data_2YoIWt on Query {
  paymentAssets(first: 10) {
    edges {
      node {
        symbol
        relayId
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  PaymentFilter_collection: collection(collection: $collection) {
    paymentAssets {
      symbol
      relayId
      id
    }
    id
  }
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

fragment SearchPills_data_2Kg4Sq on Query {
  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {
    edges {
      node {
        imageUrl
        name
        slug
        ...CollectionModalContent_data
        id
      }
    }
  }
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

fragment StringTraitFilter_data on StringTraitType {
  counts {
    count
    value
  }
  key
}

fragment TrendingCollectionsList_data_29bCDU on Query {
  trendingCollections(categories: $collections, first: 12) {
    edges {
      node {
        ...CollectionCard_data
        relayId
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment accounts_url on AccountType {
  address
  user {
    publicUsername
    id
  }
}

fragment asset_edit_url on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
  collection {
    slug
    id
  }
}

fragment asset_url on AssetType {
  assetContract {
    address
    chain
    id
  }
  tokenId
}

fragment bundle_url on AssetBundleType {
  slug
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categories"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "chains"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collection"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collectionQuery"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collectionSortBy"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collections"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "eventTypes"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "includeHiddenCollections"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isCategory"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isSingleCollection"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "numericTraits"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "showContextMenu"
},
v13 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortAscending"
},
v14 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortBy"
},
v15 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stringTraits"
},
v16 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "toggles"
},
v17 = {
  "kind": "Variable",
  "name": "collection",
  "variableName": "collection"
},
v18 = [
  (v17/*: any*/)
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEditable",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bannerImageUrl",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "openseaVersion",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMintable",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isSafelisted",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v30 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v31 = {
  "kind": "Variable",
  "name": "collectionQuery",
  "variableName": "collectionQuery"
},
v32 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v33 = {
  "kind": "Variable",
  "name": "categories",
  "variableName": "collections"
},
v34 = {
  "kind": "Variable",
  "name": "numericTraits",
  "variableName": "numericTraits"
},
v35 = {
  "kind": "Variable",
  "name": "sortAscending",
  "variableName": "sortAscending"
},
v36 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v37 = {
  "kind": "Variable",
  "name": "stringTraits",
  "variableName": "stringTraits"
},
v38 = {
  "kind": "Variable",
  "name": "toggles",
  "variableName": "toggles"
},
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v40 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalSupply",
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetCount",
  "storageKey": null
},
v43 = {
  "alias": "selectedCollections",
  "args": [
    (v32/*: any*/),
    {
      "kind": "Literal",
      "name": "first",
      "value": 25
    },
    {
      "kind": "Literal",
      "name": "includeHidden",
      "value": true
    }
  ],
  "concreteType": "CollectionTypeConnection",
  "kind": "LinkedField",
  "name": "collections",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionTypeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionType",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v42/*: any*/),
            (v23/*: any*/),
            (v21/*: any*/),
            (v26/*: any*/),
            (v29/*: any*/),
            (v39/*: any*/),
            (v22/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v44 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v45 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "collectionQuery"
},
v46 = [
  (v30/*: any*/),
  (v44/*: any*/),
  {
    "kind": "Literal",
    "name": "includeHidden",
    "value": false
  },
  {
    "kind": "Variable",
    "name": "parents",
    "variableName": "categories"
  },
  (v45/*: any*/),
  {
    "kind": "Variable",
    "name": "sortBy",
    "variableName": "collectionSortBy"
  }
],
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v49 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v50 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CollectionTypeEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CollectionType",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v42/*: any*/),
          (v23/*: any*/),
          (v21/*: any*/),
          (v26/*: any*/),
          (v29/*: any*/),
          (v39/*: any*/),
          (v47/*: any*/)
        ],
        "storageKey": null
      },
      (v48/*: any*/)
    ],
    "storageKey": null
  },
  (v49/*: any*/)
],
v51 = [
  "assetOwner",
  "assetCreator",
  "onlyPrivateAssets",
  "chains",
  "includeHidden",
  "parents",
  "query",
  "sortBy"
],
v52 = [
  (v33/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 12
  }
],
v53 = [
  (v44/*: any*/),
  {
    "kind": "Variable",
    "name": "includeHidden",
    "variableName": "includeHiddenCollections"
  },
  (v45/*: any*/),
  {
    "kind": "Literal",
    "name": "sortBy",
    "value": "SEVEN_DAY_VOLUME"
  }
],
v54 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v55 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v56 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v57 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v58 = [
  (v32/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 32
  },
  (v34/*: any*/),
  {
    "kind": "Variable",
    "name": "querystring",
    "variableName": "query"
  },
  {
    "kind": "Literal",
    "name": "resultType",
    "value": "ASSETS"
  },
  (v35/*: any*/),
  (v36/*: any*/),
  (v37/*: any*/),
  (v38/*: any*/)
],
v59 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v60 = {
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
v61 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backgroundColor",
  "storageKey": null
},
v62 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDelisted",
  "storageKey": null
},
v63 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "animationUrl",
  "storageKey": null
},
v64 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayImageUrl",
  "storageKey": null
},
v65 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v66 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v67 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "closedAt",
  "storageKey": null
},
v68 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dutchAuctionFinalPrice",
  "storageKey": null
},
v69 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "openedAt",
  "storageKey": null
},
v70 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceFnEndedAt",
  "storageKey": null
},
v71 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v72 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetType",
  "kind": "LinkedField",
  "name": "asset",
  "plural": false,
  "selections": [
    (v65/*: any*/),
    (v23/*: any*/),
    (v57/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "usdSpotPrice",
      "storageKey": null
    },
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
          "name": "blockExplorerLink",
          "storageKey": null
        },
        (v59/*: any*/),
        (v39/*: any*/)
      ],
      "storageKey": null
    },
    (v39/*: any*/)
  ],
  "storageKey": null
},
v73 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetQuantityType",
  "kind": "LinkedField",
  "name": "paymentAssetQuantity",
  "plural": false,
  "selections": [
    (v71/*: any*/),
    (v72/*: any*/),
    (v39/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "quantityInEth",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v74 = [
  (v72/*: any*/),
  (v71/*: any*/),
  (v39/*: any*/)
],
v75 = {
  "alias": null,
  "args": null,
  "concreteType": "ESOrderType",
  "kind": "LinkedField",
  "name": "bestBid",
  "plural": false,
  "selections": [
    (v66/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetQuantityType",
      "kind": "LinkedField",
      "name": "paymentAssetQuantity",
      "plural": false,
      "selections": (v74/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v76 = {
  "alias": null,
  "args": null,
  "concreteType": "ESAssetEventDataType",
  "kind": "LinkedField",
  "name": "assetEventData",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ESAssetEventType",
      "kind": "LinkedField",
      "name": "lastSale",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetQuantityType",
          "kind": "LinkedField",
          "name": "unitPriceQuantity",
          "plural": false,
          "selections": (v74/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/),
      (v14/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v18/*: any*/),
        "concreteType": "CollectionType",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          (v23/*: any*/),
          (v24/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetType",
            "kind": "LinkedField",
            "name": "representativeAsset",
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
                  (v25/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v26/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "verification_data",
            "selections": [
              (v27/*: any*/),
              (v28/*: any*/),
              (v29/*: any*/)
            ]
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "collection_url",
            "selections": [
              (v26/*: any*/)
            ]
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionHeader_data"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "activity",
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "categories",
                "variableName": "categories"
              },
              (v30/*: any*/),
              (v17/*: any*/),
              (v31/*: any*/),
              {
                "kind": "Variable",
                "name": "collectionSortBy",
                "variableName": "collectionSortBy"
              },
              (v32/*: any*/),
              {
                "kind": "Variable",
                "name": "eventTypes",
                "variableName": "eventTypes"
              },
              {
                "kind": "Literal",
                "name": "includeHiddenCollections",
                "value": false
              },
              {
                "kind": "Variable",
                "name": "isSingleCollection",
                "variableName": "isSingleCollection"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ActivitySearch_data"
          }
        ],
        "storageKey": null
      },
      {
        "condition": "isCategory",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "args": [
              (v33/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "TrendingCollectionsList_data"
          }
        ]
      },
      {
        "condition": "isCategory",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": "assets",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "args": [
                  (v17/*: any*/),
                  (v31/*: any*/),
                  (v32/*: any*/),
                  {
                    "kind": "Variable",
                    "name": "includeHiddenCollections",
                    "variableName": "includeHiddenCollections"
                  },
                  (v34/*: any*/),
                  {
                    "kind": "Variable",
                    "name": "query",
                    "variableName": "query"
                  },
                  {
                    "kind": "Literal",
                    "name": "resultModel",
                    "value": "ASSETS"
                  },
                  {
                    "kind": "Variable",
                    "name": "showContextMenu",
                    "variableName": "showContextMenu"
                  },
                  (v35/*: any*/),
                  (v36/*: any*/),
                  (v37/*: any*/),
                  (v38/*: any*/)
                ],
                "kind": "FragmentSpread",
                "name": "AssetSearch_data"
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/),
      (v7/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v13/*: any*/),
      (v14/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/),
      (v12/*: any*/),
      (v8/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v6/*: any*/),
      (v9/*: any*/)
    ],
    "kind": "Operation",
    "name": "collectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v18/*: any*/),
        "concreteType": "CollectionType",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          (v23/*: any*/),
          (v24/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetType",
            "kind": "LinkedField",
            "name": "representativeAsset",
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
                  (v25/*: any*/),
                  (v39/*: any*/)
                ],
                "storageKey": null
              },
              (v39/*: any*/)
            ],
            "storageKey": null
          },
          (v26/*: any*/),
          (v27/*: any*/),
          (v28/*: any*/),
          (v29/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountType",
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v40/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "config",
                "storageKey": null
              },
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
                  (v39/*: any*/)
                ],
                "storageKey": null
              },
              (v23/*: any*/),
              (v39/*: any*/)
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
                "name": "numOwners",
                "storageKey": null
              },
              (v41/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalVolume",
                "storageKey": null
              },
              (v39/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "floorPrice",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "discordUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "externalUrl",
            "storageKey": null
          },
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
          (v39/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "activity",
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          (v43/*: any*/),
          {
            "alias": null,
            "args": (v46/*: any*/),
            "concreteType": "CollectionTypeConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": (v50/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v46/*: any*/),
            "filters": (v51/*: any*/),
            "handle": "connection",
            "key": "CollectionFilter_collections",
            "kind": "LinkedHandle",
            "name": "collections"
          },
          {
            "condition": "isSingleCollection",
            "kind": "Condition",
            "passingValue": true,
            "selections": [
              {
                "alias": null,
                "args": (v18/*: any*/),
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "includeTradingHistory",
                    "storageKey": null
                  },
                  (v39/*: any*/)
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
      {
        "condition": "isCategory",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v52/*: any*/),
            "concreteType": "CollectionTypeConnection",
            "kind": "LinkedField",
            "name": "trendingCollections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionTypeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionType",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v26/*: any*/),
                      (v22/*: any*/),
                      (v21/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "shortDescription",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "logo",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "banner",
                        "storageKey": null
                      },
                      (v29/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AccountType",
                        "kind": "LinkedField",
                        "name": "owner",
                        "plural": false,
                        "selections": [
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
                            "concreteType": "UserType",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "username",
                                "storageKey": null
                              },
                              (v39/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v39/*: any*/)
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
                          (v41/*: any*/),
                          (v39/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/),
                      (v39/*: any*/),
                      (v47/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v48/*: any*/)
                ],
                "storageKey": null
              },
              (v49/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v52/*: any*/),
            "filters": [
              "categories"
            ],
            "handle": "connection",
            "key": "TrendingCollectionsList_trendingCollections",
            "kind": "LinkedHandle",
            "name": "trendingCollections"
          }
        ]
      },
      {
        "condition": "isCategory",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": "assets",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              (v43/*: any*/),
              {
                "alias": null,
                "args": (v53/*: any*/),
                "concreteType": "CollectionTypeConnection",
                "kind": "LinkedField",
                "name": "collections",
                "plural": false,
                "selections": (v50/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v53/*: any*/),
                "filters": (v51/*: any*/),
                "handle": "connection",
                "key": "CollectionFilter_collections",
                "kind": "LinkedHandle",
                "name": "collections"
              },
              {
                "alias": null,
                "args": (v18/*: any*/),
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NumericTraitTypePair",
                    "kind": "LinkedField",
                    "name": "numericTraits",
                    "plural": true,
                    "selections": [
                      (v54/*: any*/),
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
                    "concreteType": "StringTraitType",
                    "kind": "LinkedField",
                    "name": "stringTraits",
                    "plural": true,
                    "selections": [
                      (v54/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StringTraitCountType",
                        "kind": "LinkedField",
                        "name": "counts",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "count",
                            "storageKey": null
                          },
                          (v55/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v39/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v56/*: any*/),
                "concreteType": "PaymentAssetTypeConnection",
                "kind": "LinkedField",
                "name": "paymentAssets",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PaymentAssetTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PaymentAssetType",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v57/*: any*/),
                          (v24/*: any*/),
                          (v39/*: any*/),
                          (v47/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v48/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v49/*: any*/)
                ],
                "storageKey": "paymentAssets(first:10)"
              },
              {
                "alias": null,
                "args": (v56/*: any*/),
                "filters": [
                  "asset_Symbol_Icontains"
                ],
                "handle": "connection",
                "key": "PaymentFilter_paymentAssets",
                "kind": "LinkedHandle",
                "name": "paymentAssets"
              },
              {
                "alias": "PaymentFilter_collection",
                "args": (v18/*: any*/),
                "concreteType": "CollectionType",
                "kind": "LinkedField",
                "name": "collection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PaymentAssetType",
                    "kind": "LinkedField",
                    "name": "paymentAssets",
                    "plural": true,
                    "selections": [
                      (v57/*: any*/),
                      (v24/*: any*/),
                      (v39/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v39/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v58/*: any*/),
                "concreteType": "SearchTypeConnection",
                "kind": "LinkedField",
                "name": "search",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SearchTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SearchResultType",
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
                                "concreteType": "AssetContractType",
                                "kind": "LinkedField",
                                "name": "assetContract",
                                "plural": false,
                                "selections": [
                                  (v40/*: any*/),
                                  (v59/*: any*/),
                                  (v39/*: any*/),
                                  (v25/*: any*/)
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
                                  (v29/*: any*/),
                                  (v24/*: any*/),
                                  (v39/*: any*/),
                                  (v60/*: any*/),
                                  (v23/*: any*/),
                                  (v26/*: any*/),
                                  (v21/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v24/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "tokenId",
                                "storageKey": null
                              },
                              (v61/*: any*/),
                              (v23/*: any*/),
                              (v21/*: any*/),
                              (v39/*: any*/),
                              (v62/*: any*/),
                              (v63/*: any*/),
                              (v64/*: any*/),
                              (v65/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "favoritesCount",
                                "storageKey": null
                              },
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "hasUnlockableContent",
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
                                      (v24/*: any*/),
                                      (v66/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ESAccountType",
                                        "kind": "LinkedField",
                                        "name": "maker",
                                        "plural": false,
                                        "selections": [
                                          (v40/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v67/*: any*/),
                                      (v68/*: any*/),
                                      (v69/*: any*/),
                                      (v70/*: any*/),
                                      (v71/*: any*/),
                                      (v65/*: any*/),
                                      (v73/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v75/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v76/*: any*/),
                              {
                                "condition": "showContextMenu",
                                "kind": "Condition",
                                "passingValue": true,
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
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AbleToType",
                                    "kind": "LinkedField",
                                    "name": "isEditable",
                                    "plural": false,
                                    "selections": [
                                      (v55/*: any*/),
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
                                        "kind": "Literal",
                                        "name": "identity",
                                        "value": {}
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
                                      (v71/*: any*/)
                                    ],
                                    "storageKey": "ownership(identity:{})"
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AccountType",
                                    "kind": "LinkedField",
                                    "name": "creator",
                                    "plural": false,
                                    "selections": [
                                      (v40/*: any*/),
                                      (v39/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ]
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AssetBundleType",
                            "kind": "LinkedField",
                            "name": "assetBundle",
                            "plural": false,
                            "selections": [
                              (v24/*: any*/),
                              (v39/*: any*/),
                              (v26/*: any*/),
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "first",
                                    "value": 18
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
                                              (v24/*: any*/),
                                              (v63/*: any*/),
                                              (v61/*: any*/),
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "CollectionType",
                                                "kind": "LinkedField",
                                                "name": "collection",
                                                "plural": false,
                                                "selections": [
                                                  (v60/*: any*/),
                                                  (v39/*: any*/),
                                                  (v21/*: any*/),
                                                  (v24/*: any*/),
                                                  (v29/*: any*/),
                                                  (v26/*: any*/)
                                                ],
                                                "storageKey": null
                                              },
                                              (v62/*: any*/),
                                              (v64/*: any*/),
                                              (v39/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v39/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "assetQuantities(first:18)"
                              },
                              (v42/*: any*/),
                              (v21/*: any*/),
                              (v76/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ESOrderDataType",
                                "kind": "LinkedField",
                                "name": "orderData",
                                "plural": false,
                                "selections": [
                                  (v75/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ESOrderType",
                                    "kind": "LinkedField",
                                    "name": "bestAsk",
                                    "plural": false,
                                    "selections": [
                                      (v67/*: any*/),
                                      (v66/*: any*/),
                                      (v68/*: any*/),
                                      (v69/*: any*/),
                                      (v70/*: any*/),
                                      (v71/*: any*/),
                                      (v65/*: any*/),
                                      (v73/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v47/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v48/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  },
                  (v49/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v58/*: any*/),
                "filters": [
                  "chains",
                  "categories",
                  "collections",
                  "identity",
                  "numericTraits",
                  "paymentAssets",
                  "priceFilter",
                  "querystring",
                  "resultType",
                  "sortAscending",
                  "sortBy",
                  "stringTraits",
                  "toggles",
                  "creator",
                  "isPrivate",
                  "safelistRequestStatuses"
                ],
                "handle": "connection",
                "key": "AssetSearch_search",
                "kind": "LinkedHandle",
                "name": "search"
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "0ac4c100f0421b49693606a0b94be02e",
    "id": null,
    "metadata": {},
    "name": "collectionQuery",
    "operationKind": "query",
    "text": "query collectionQuery(\n  $collection: CollectionSlug!\n  $collections: [CollectionSlug!]\n  $collectionQuery: String\n  $includeHiddenCollections: Boolean\n  $numericTraits: [TraitRangeType!]\n  $query: String\n  $sortAscending: Boolean\n  $sortBy: SearchSortBy\n  $stringTraits: [TraitInputType!]\n  $toggles: [SearchToggle!]\n  $showContextMenu: Boolean\n  $isCategory: Boolean!\n  $categories: [CollectionSlug!]\n  $chains: [ChainScalar!]\n  $collectionSortBy: CollectionSort\n  $isSingleCollection: Boolean!\n) {\n  collection(collection: $collection) {\n    isEditable\n    bannerImageUrl\n    name\n    description\n    imageUrl\n    relayId\n    representativeAsset {\n      assetContract {\n        openseaVersion\n        id\n      }\n      id\n    }\n    slug\n    ...verification_data\n    ...collection_url\n    ...CollectionHeader_data\n    id\n  }\n  ...TrendingCollectionsList_data_29bCDU @include(if: $isCategory)\n  assets: query @skip(if: $isCategory) {\n    ...AssetSearch_data_1bS60n\n  }\n  activity: query {\n    ...ActivitySearch_data_2eDEPY\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment ActivitySearchFilter_data_yLmsP on Query {\n  ...CollectionFilter_data_rfWZ1\n}\n\nfragment ActivitySearch_data_2eDEPY on Query {\n  collection(collection: $collection) @include(if: $isSingleCollection) {\n    includeTradingHistory\n    id\n  }\n  ...ActivitySearchFilter_data_yLmsP\n  ...SearchPills_data_2Kg4Sq\n}\n\nfragment AssetCardAnnotations_assetBundle on AssetBundleType {\n  assetCount\n}\n\nfragment AssetCardAnnotations_asset_1OrK6u on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n  ...AssetContextMenu_data_3z4lq0 @include(if: $showContextMenu)\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  collection {\n    slug\n    id\n  }\n  orderData {\n    bestAsk {\n      relayId\n    }\n  }\n}\n\nfragment AssetCardContent_asset on AssetType {\n  relayId\n  name\n  ...AssetMedia_asset\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n  isDelisted\n}\n\nfragment AssetCardContent_assetBundle on AssetBundleType {\n  assetQuantities(first: 18) {\n    edges {\n      node {\n        asset {\n          relayId\n          ...AssetMedia_asset\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_assetBundle on AssetBundleType {\n  ...AssetCardAnnotations_assetBundle\n  name\n  assetCount\n  assetQuantities(first: 18) {\n    edges {\n      node {\n        asset {\n          collection {\n            name\n            relayId\n            isVerified\n            ...collection_url\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_asset_1OrK6u on AssetType {\n  ...AssetCardAnnotations_asset_1OrK6u\n  name\n  tokenId\n  collection {\n    name\n    isVerified\n    ...collection_url\n    id\n  }\n  isDelisted\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetContextMenu_data_3z4lq0 on AssetType {\n  ...asset_edit_url\n  ...asset_url\n  ...itemEvents_data\n  isDelisted\n  isEditable {\n    value\n    reason\n  }\n  isListable\n  ownership(identity: {}) {\n    isPrivate\n    quantity\n  }\n  creator {\n    address\n    id\n  }\n  collection {\n    isAuthorizedEditor\n    id\n  }\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment AssetSearchFilter_data_1GloFv on Query {\n  ...CollectionFilter_data_tXjHb\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment AssetSearchList_data_gVyhu on SearchResultType {\n  asset {\n    assetContract {\n      address\n      chain\n      id\n    }\n    collection {\n      isVerified\n      relayId\n      id\n    }\n    relayId\n    tokenId\n    ...AssetSelectionItem_data\n    ...asset_url\n    id\n  }\n  assetBundle {\n    relayId\n    id\n  }\n  ...Asset_data_gVyhu\n}\n\nfragment AssetSearch_data_1bS60n on Query {\n  ...AssetSearchFilter_data_1GloFv\n  ...SearchPills_data_2Kg4Sq\n  search(collections: $collections, first: 32, numericTraits: $numericTraits, querystring: $query, resultType: ASSETS, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles) {\n    edges {\n      node {\n        ...AssetSearchList_data_gVyhu\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSelectionItem_data on AssetType {\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    imageUrl\n    id\n  }\n  imageUrl\n  name\n  relayId\n}\n\nfragment Asset_data_gVyhu on SearchResultType {\n  asset {\n    relayId\n    isDelisted\n    ...AssetCardContent_asset\n    ...AssetCardFooter_asset_1OrK6u\n    ...AssetMedia_asset\n    ...asset_url\n    ...itemEvents_data\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n  assetBundle {\n    relayId\n    ...bundle_url\n    ...AssetCardContent_assetBundle\n    ...AssetCardFooter_assetBundle\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment CollectionCardContextMenu_data on CollectionType {\n  ...collection_url\n}\n\nfragment CollectionCard_data on CollectionType {\n  ...CollectionCardContextMenu_data\n  ...collection_url\n  description\n  name\n  shortDescription\n  slug\n  logo\n  banner\n  isVerified\n  owner {\n    displayName\n    user {\n      username\n      id\n    }\n    id\n  }\n  stats {\n    totalSupply\n    id\n  }\n}\n\nfragment CollectionFilter_data_rfWZ1 on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionFilter_data_tXjHb on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(first: 100, includeHidden: $includeHiddenCollections, query: $collectionQuery, sortBy: SEVEN_DAY_VOLUME) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionHeader_data on CollectionType {\n  name\n  description\n  imageUrl\n  bannerImageUrl\n  relayId\n  owner {\n    ...AccountLink_data\n    id\n  }\n  ...CollectionStatsBar_data\n  ...SocialBar_data\n  ...verification_data\n}\n\nfragment CollectionModalContent_data on CollectionType {\n  description\n  imageUrl\n  name\n  slug\n}\n\nfragment CollectionStatsBar_data on CollectionType {\n  stats {\n    numOwners\n    totalSupply\n    totalVolume\n    id\n  }\n  slug\n  floorPrice\n}\n\nfragment NumericTraitFilter_data on NumericTraitTypePair {\n  key\n  value {\n    max\n    min\n  }\n}\n\nfragment PaymentFilter_data_2YoIWt on Query {\n  paymentAssets(first: 10) {\n    edges {\n      node {\n        symbol\n        relayId\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  PaymentFilter_collection: collection(collection: $collection) {\n    paymentAssets {\n      symbol\n      relayId\n      id\n    }\n    id\n  }\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  address\n}\n\nfragment SearchPills_data_2Kg4Sq on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        imageUrl\n        name\n        slug\n        ...CollectionModalContent_data\n        id\n      }\n    }\n  }\n}\n\nfragment SocialBar_data on CollectionType {\n  relayId\n  discordUrl\n  externalUrl\n  instagramUsername\n  mediumUsername\n  slug\n  telegramUrl\n  twitterUsername\n  ...collection_url\n}\n\nfragment StringTraitFilter_data on StringTraitType {\n  counts {\n    count\n    value\n  }\n  key\n}\n\nfragment TrendingCollectionsList_data_29bCDU on Query {\n  trendingCollections(categories: $collections, first: 12) {\n    edges {\n      node {\n        ...CollectionCard_data\n        relayId\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_edit_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment itemEvents_data on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment verification_data on CollectionType {\n  isMintable\n  isSafelisted\n  isVerified\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
  }
};
})();
(node as any).hash = 'e5a4eabfec0e99bf000f481046181615';
export default node;
