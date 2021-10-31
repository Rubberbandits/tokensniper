/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EventType = "ASSET_APPROVE" | "ASSET_TRANSFER" | "AUCTION_CANCELLED" | "AUCTION_CREATED" | "AUCTION_SUCCESSFUL" | "BID_ENTERED" | "BID_WITHDRAWN" | "CUSTOM" | "OFFER_ENTERED" | "PAYOUT" | "%future added value";
export type SearchResultModel = "ASSETS" | "BUNDLES" | "%future added value";
export type SearchSortBy = "BIRTH_DATE" | "CREATED_DATE" | "EXPIRATION_DATE" | "FAVORITE_COUNT" | "LAST_SALE_DATE" | "LAST_SALE_PRICE" | "LAST_TRANSFER_DATE" | "LISTING_DATE" | "PRICE" | "SALE_COUNT" | "STAFF_SORT_1" | "STAFF_SORT_2" | "STAFF_SORT_3" | "UNIT_PRICE" | "VIEWER_COUNT" | "%future added value";
export type SearchToggle = "BUY_NOW" | "HAS_OFFERS" | "IS_NEW" | "ON_AUCTION" | "%future added value";
export type IdentityInputType = {
    address?: string | null | undefined;
    name?: string | null | undefined;
    username?: string | null | undefined;
};
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
export type accountQueryVariables = {
    categories?: Array<string> | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    collection?: string | null | undefined;
    collectionQuery?: string | null | undefined;
    collections?: Array<string> | null | undefined;
    eventTypes?: Array<EventType> | null | undefined;
    identity?: IdentityInputType | null | undefined;
    creator?: IdentityInputType | null | undefined;
    isActivityTab: boolean;
    isAssetsTab: boolean;
    isOffersTab: boolean;
    isCreatedTab: boolean;
    isPrivateTab: boolean;
    isPrivate: boolean;
    isSingleCollection: boolean;
    numericTraits?: Array<TraitRangeType> | null | undefined;
    query?: string | null | undefined;
    resultModel?: SearchResultModel | null | undefined;
    sortAscending?: boolean | null | undefined;
    sortBy?: SearchSortBy | null | undefined;
    stringTraits?: Array<TraitInputType> | null | undefined;
    toggles?: Array<SearchToggle> | null | undefined;
    showContextMenu: boolean;
    includePrivateAssetCount: boolean;
};
export type accountQueryResponse = {
    readonly account: {
        readonly address: string;
        readonly imageUrl: string;
        readonly user: {
            readonly username: string;
            readonly publicUsername: string | null;
        } | null;
        readonly metadata: {
            readonly isBanned: boolean;
        } | null;
        readonly privateAssetCount: number;
        readonly " $fragmentRefs": FragmentRefs<"profilePageQueries_account" | "AccountHeader_data" | "wallet_accountKey">;
    } | null;
    readonly collection: {
        readonly description: string | null;
        readonly imageUrl: string | null;
        readonly name: string;
    } | null;
    readonly sidebarCollected: {
        readonly " $fragmentRefs": FragmentRefs<"profilePageQueries_collected">;
    };
    readonly sidebarCreated: {
        readonly " $fragmentRefs": FragmentRefs<"profilePageQueries_created">;
    };
    readonly assets?: {
        readonly " $fragmentRefs": FragmentRefs<"AssetSearch_data">;
    } | undefined;
    readonly activity?: {
        readonly " $fragmentRefs": FragmentRefs<"ActivitySearch_data">;
    } | undefined;
    readonly offers?: {
        readonly " $fragmentRefs": FragmentRefs<"OfferSearch_data">;
    } | undefined;
    readonly created?: {
        readonly " $fragmentRefs": FragmentRefs<"AssetSearch_data">;
    } | undefined;
    readonly private?: {
        readonly " $fragmentRefs": FragmentRefs<"AssetSearch_data">;
    } | undefined;
};
export type accountQuery = {
    readonly response: accountQueryResponse;
    readonly variables: accountQueryVariables;
};



/*
query accountQuery(
  $categories: [CollectionSlug!]
  $chains: [ChainScalar!]
  $collection: CollectionSlug
  $collectionQuery: String
  $collections: [CollectionSlug!]
  $identity: IdentityInputType
  $creator: IdentityInputType
  $isActivityTab: Boolean!
  $isAssetsTab: Boolean!
  $isOffersTab: Boolean!
  $isCreatedTab: Boolean!
  $isPrivateTab: Boolean!
  $isPrivate: Boolean!
  $isSingleCollection: Boolean!
  $numericTraits: [TraitRangeType!]
  $query: String
  $resultModel: SearchResultModel
  $sortAscending: Boolean
  $sortBy: SearchSortBy
  $stringTraits: [TraitInputType!]
  $toggles: [SearchToggle!]
  $showContextMenu: Boolean!
  $includePrivateAssetCount: Boolean!
) {
  account(identity: $identity) {
    address
    imageUrl
    user {
      username
      publicUsername
      id
    }
    metadata {
      isBanned
      id
    }
    ...profilePageQueries_account_8v4Bz
    ...AccountHeader_data
    ...wallet_accountKey
    privateAssetCount
    id
  }
  collection(collection: $collection) {
    description
    imageUrl
    name
    id
  }
  sidebarCollected: query {
    ...profilePageQueries_collected_3StDC7
  }
  sidebarCreated: query {
    ...profilePageQueries_created_3StDC7
  }
  assets: query @include(if: $isAssetsTab) {
    ...AssetSearch_data_2xDP4W
  }
  activity: query @include(if: $isActivityTab) {
    ...ActivitySearch_data_3v36wc
  }
  offers: query @include(if: $isOffersTab) {
    ...OfferSearch_data_3HWMrt
  }
  created: query @include(if: $isCreatedTab) {
    ...AssetSearch_data_1DuISp
  }
  private: query @include(if: $isPrivateTab) {
    ...AssetSearch_data_3erxyq
  }
}

fragment AccountHeader_data on AccountType {
  address
  bio
  bannerImageUrl
  config
  isCompromised
  metadata {
    twitterUsername
    instagramUsername
    id
  }
  relayId
  names {
    name
    type
  }
  displayName
  ...accounts_url
  ...ProfileImage_data
  ...AccountLinksBar_data
  createdDate
}

fragment AccountLinksBar_data on AccountType {
  relayId
  config
  metadata {
    instagramUsername
    twitterUsername
    websiteUrl
    id
  }
  ...accounts_url
  ...ProfileImage_data
}

fragment ActivitySearchFilter_data_23FYhq on Query {
  ...CollectionFilter_data_5wVB4
}

fragment ActivitySearch_data_3v36wc on Query {
  collection(collection: $collection) @include(if: $isSingleCollection) {
    includeTradingHistory
    id
  }
  ...ActivitySearchFilter_data_23FYhq
  ...SearchPills_data_2Kg4Sq
}

fragment AssetCardAnnotations_assetBundle on AssetBundleType {
  assetCount
}

fragment AssetCardAnnotations_asset_19CeED on AssetType {
  assetContract {
    chain
    id
  }
  decimals
  ownedQuantity(identity: $identity) @include(if: $isAssetsTab)
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

fragment AssetCardAnnotations_asset_4UtZc on AssetType {
  assetContract {
    chain
    id
  }
  decimals
  ownedQuantity(identity: $identity)
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

fragment AssetCardAnnotations_asset_tmliZ on AssetType {
  assetContract {
    chain
    id
  }
  decimals
  ownedQuantity(identity: {}) @include(if: $isAssetsTab)
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

fragment AssetCardFooter_asset_19CeED on AssetType {
  ...AssetCardAnnotations_asset_19CeED
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

fragment AssetCardFooter_asset_4UtZc on AssetType {
  ...AssetCardAnnotations_asset_4UtZc
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

fragment AssetCardFooter_asset_tmliZ on AssetType {
  ...AssetCardAnnotations_asset_tmliZ
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

fragment AssetSearchFilter_data_1ntCj4 on Query {
  ...CollectionFilter_data_SozeH
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

fragment AssetSearchFilter_data_1p1g0 on Query {
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

fragment AssetSearchFilter_data_1upvW6 on Query {
  ...CollectionFilter_data_1gjj44
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

fragment AssetSearchList_data_164hN9 on SearchResultType {
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
  ...Asset_data_164hN9
}

fragment AssetSearchList_data_19CeED on SearchResultType {
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
  ...Asset_data_19CeED
}

fragment AssetSearchList_data_4UtZc on SearchResultType {
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
  ...Asset_data_4UtZc
}

fragment AssetSearch_data_1DuISp on Query {
  ...AssetSearchFilter_data_1upvW6
  ...SearchPills_data_2Kg4Sq
  search(chains: $chains, categories: $categories, collections: $collections, first: 32, numericTraits: $numericTraits, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, creator: $creator) {
    edges {
      node {
        ...AssetSearchList_data_164hN9
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

fragment AssetSearch_data_2xDP4W on Query {
  ...AssetSearchFilter_data_1ntCj4
  ...SearchPills_data_2Kg4Sq
  search(chains: $chains, categories: $categories, collections: $collections, first: 32, identity: $identity, numericTraits: $numericTraits, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles) {
    edges {
      node {
        ...AssetSearchList_data_19CeED
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

fragment AssetSearch_data_3erxyq on Query {
  ...AssetSearchFilter_data_1p1g0
  ...SearchPills_data_2Kg4Sq
  search(chains: $chains, categories: $categories, collections: $collections, first: 32, identity: $identity, numericTraits: $numericTraits, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, isPrivate: $isPrivate) {
    edges {
      node {
        ...AssetSearchList_data_4UtZc
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

fragment Asset_data_164hN9 on SearchResultType {
  asset {
    relayId
    isDelisted
    ...AssetCardContent_asset
    ...AssetCardFooter_asset_tmliZ
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

fragment Asset_data_19CeED on SearchResultType {
  asset {
    relayId
    isDelisted
    ...AssetCardContent_asset
    ...AssetCardFooter_asset_19CeED
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

fragment Asset_data_4UtZc on SearchResultType {
  asset {
    relayId
    isDelisted
    ...AssetCardContent_asset
    ...AssetCardFooter_asset_4UtZc
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

fragment CollectionFilter_data_1gjj44 on Query {
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
  collections(assetCreator: $creator, chains: $chains, first: 100, parents: $categories, query: $collectionQuery, sortBy: NAME) {
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

fragment CollectionFilter_data_5wVB4 on Query {
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
  collections(chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: SEVEN_DAY_VOLUME) {
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

fragment CollectionFilter_data_SozeH on Query {
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
  collections(assetOwner: $identity, chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: ASSET_COUNT) {
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

fragment CollectionModalContent_data on CollectionType {
  description
  imageUrl
  name
  slug
}

fragment NumericTraitFilter_data on NumericTraitTypePair {
  key
  value {
    max
    min
  }
}

fragment OfferSearchFilter_data_23FYhq on Query {
  ...CollectionFilter_data_5wVB4
}

fragment OfferSearch_data_3HWMrt on Query {
  ...OfferSearchFilter_data_23FYhq
  ...SearchPills_data_2Kg4Sq
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

fragment StringTraitFilter_data on StringTraitType {
  counts {
    count
    value
  }
  key
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

fragment profilePageQueries_account_8v4Bz on AccountType {
  user {
    favoriteAssetCount
    id
  }
  privateAssetCount @include(if: $includePrivateAssetCount)
}

fragment profilePageQueries_collected_3StDC7 on Query {
  search(identity: $identity, first: 0) {
    totalCount
  }
}

fragment profilePageQueries_created_3StDC7 on Query {
  search(creator: $identity, first: 0, resultType: ASSETS) {
    totalCount
  }
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
  "name": "collections"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "creator"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "eventTypes"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identity"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "includePrivateAssetCount"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isActivityTab"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isAssetsTab"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isCreatedTab"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isOffersTab"
},
v13 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isPrivate"
},
v14 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isPrivateTab"
},
v15 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isSingleCollection"
},
v16 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "numericTraits"
},
v17 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v18 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resultModel"
},
v19 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "showContextMenu"
},
v20 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortAscending"
},
v21 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortBy"
},
v22 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stringTraits"
},
v23 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "toggles"
},
v24 = {
  "kind": "Variable",
  "name": "identity",
  "variableName": "identity"
},
v25 = [
  (v24/*: any*/)
],
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publicUsername",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isBanned",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "privateAssetCount",
  "storageKey": null
},
v32 = [
  (v26/*: any*/)
],
v33 = {
  "kind": "Variable",
  "name": "collection",
  "variableName": "collection"
},
v34 = [
  (v33/*: any*/)
],
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v37 = {
  "kind": "Variable",
  "name": "assetOwner",
  "variableName": "identity"
},
v38 = {
  "kind": "Variable",
  "name": "categories",
  "variableName": "categories"
},
v39 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v40 = {
  "kind": "Variable",
  "name": "collectionQuery",
  "variableName": "collectionQuery"
},
v41 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v42 = {
  "kind": "Literal",
  "name": "includeHiddenCollections",
  "value": false
},
v43 = {
  "kind": "Variable",
  "name": "numericTraits",
  "variableName": "numericTraits"
},
v44 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v45 = {
  "kind": "Variable",
  "name": "resultModel",
  "variableName": "resultModel"
},
v46 = {
  "kind": "Variable",
  "name": "shouldShowQuantity",
  "variableName": "isAssetsTab"
},
v47 = {
  "kind": "Variable",
  "name": "showContextMenu",
  "variableName": "showContextMenu"
},
v48 = {
  "kind": "Variable",
  "name": "sortAscending",
  "variableName": "sortAscending"
},
v49 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v50 = {
  "kind": "Variable",
  "name": "stringTraits",
  "variableName": "stringTraits"
},
v51 = {
  "kind": "Variable",
  "name": "toggles",
  "variableName": "toggles"
},
v52 = {
  "kind": "Literal",
  "name": "collectionSortBy",
  "value": "SEVEN_DAY_VOLUME"
},
v53 = {
  "kind": "Literal",
  "name": "collectionSortBy",
  "value": "NAME"
},
v54 = {
  "kind": "Variable",
  "name": "creator",
  "variableName": "creator"
},
v55 = {
  "kind": "Variable",
  "name": "isPrivate",
  "variableName": "isPrivate"
},
v56 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v57 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v58 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v59 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v60 = [
  (v59/*: any*/)
],
v61 = [
  (v41/*: any*/),
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
v62 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetCount",
  "storageKey": null
},
v63 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v64 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v65 = {
  "alias": "selectedCollections",
  "args": (v61/*: any*/),
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
            (v62/*: any*/),
            (v27/*: any*/),
            (v36/*: any*/),
            (v63/*: any*/),
            (v64/*: any*/),
            (v56/*: any*/),
            (v35/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v66 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v67 = {
  "kind": "Literal",
  "name": "includeHidden",
  "value": false
},
v68 = {
  "kind": "Variable",
  "name": "parents",
  "variableName": "categories"
},
v69 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "collectionQuery"
},
v70 = [
  (v37/*: any*/),
  (v39/*: any*/),
  (v66/*: any*/),
  (v67/*: any*/),
  (v68/*: any*/),
  (v69/*: any*/),
  {
    "kind": "Literal",
    "name": "sortBy",
    "value": "ASSET_COUNT"
  }
],
v71 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v72 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v73 = {
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
v74 = [
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
          (v62/*: any*/),
          (v27/*: any*/),
          (v36/*: any*/),
          (v63/*: any*/),
          (v64/*: any*/),
          (v56/*: any*/),
          (v71/*: any*/)
        ],
        "storageKey": null
      },
      (v72/*: any*/)
    ],
    "storageKey": null
  },
  (v73/*: any*/)
],
v75 = [
  "assetOwner",
  "assetCreator",
  "onlyPrivateAssets",
  "chains",
  "includeHidden",
  "parents",
  "query",
  "sortBy"
],
v76 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v77 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v78 = {
  "alias": null,
  "args": (v34/*: any*/),
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
        (v76/*: any*/),
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
        (v76/*: any*/),
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
            (v77/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v56/*: any*/)
  ],
  "storageKey": null
},
v79 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v80 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v81 = {
  "alias": null,
  "args": (v79/*: any*/),
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
            (v80/*: any*/),
            (v57/*: any*/),
            (v56/*: any*/),
            (v71/*: any*/)
          ],
          "storageKey": null
        },
        (v72/*: any*/)
      ],
      "storageKey": null
    },
    (v73/*: any*/)
  ],
  "storageKey": "paymentAssets(first:10)"
},
v82 = {
  "alias": null,
  "args": (v79/*: any*/),
  "filters": [
    "asset_Symbol_Icontains"
  ],
  "handle": "connection",
  "key": "PaymentFilter_paymentAssets",
  "kind": "LinkedHandle",
  "name": "paymentAssets"
},
v83 = {
  "alias": "PaymentFilter_collection",
  "args": (v34/*: any*/),
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
        (v80/*: any*/),
        (v57/*: any*/),
        (v56/*: any*/)
      ],
      "storageKey": null
    },
    (v56/*: any*/)
  ],
  "storageKey": null
},
v84 = {
  "kind": "Literal",
  "name": "first",
  "value": 32
},
v85 = {
  "kind": "Variable",
  "name": "querystring",
  "variableName": "query"
},
v86 = {
  "kind": "Variable",
  "name": "resultType",
  "variableName": "resultModel"
},
v87 = [
  (v38/*: any*/),
  (v39/*: any*/),
  (v41/*: any*/),
  (v84/*: any*/),
  (v24/*: any*/),
  (v43/*: any*/),
  (v85/*: any*/),
  (v86/*: any*/),
  (v48/*: any*/),
  (v49/*: any*/),
  (v50/*: any*/),
  (v51/*: any*/)
],
v88 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v89 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetContractType",
  "kind": "LinkedField",
  "name": "assetContract",
  "plural": false,
  "selections": [
    (v26/*: any*/),
    (v88/*: any*/),
    (v56/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "openseaVersion",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v90 = {
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
v91 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionType",
  "kind": "LinkedField",
  "name": "collection",
  "plural": false,
  "selections": [
    (v64/*: any*/),
    (v57/*: any*/),
    (v56/*: any*/),
    (v90/*: any*/),
    (v27/*: any*/),
    (v63/*: any*/),
    (v36/*: any*/)
  ],
  "storageKey": null
},
v92 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tokenId",
  "storageKey": null
},
v93 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backgroundColor",
  "storageKey": null
},
v94 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDelisted",
  "storageKey": null
},
v95 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "animationUrl",
  "storageKey": null
},
v96 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayImageUrl",
  "storageKey": null
},
v97 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v98 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "favoritesCount",
  "storageKey": null
},
v99 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isFavorite",
  "storageKey": null
},
v100 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isFrozen",
  "storageKey": null
},
v101 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasUnlockableContent",
  "storageKey": null
},
v102 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v103 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "closedAt",
  "storageKey": null
},
v104 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dutchAuctionFinalPrice",
  "storageKey": null
},
v105 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "openedAt",
  "storageKey": null
},
v106 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceFnEndedAt",
  "storageKey": null
},
v107 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v108 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetType",
  "kind": "LinkedField",
  "name": "asset",
  "plural": false,
  "selections": [
    (v97/*: any*/),
    (v27/*: any*/),
    (v80/*: any*/),
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
        (v88/*: any*/),
        (v56/*: any*/)
      ],
      "storageKey": null
    },
    (v56/*: any*/)
  ],
  "storageKey": null
},
v109 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetQuantityType",
  "kind": "LinkedField",
  "name": "paymentAssetQuantity",
  "plural": false,
  "selections": [
    (v107/*: any*/),
    (v108/*: any*/),
    (v56/*: any*/),
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
v110 = [
  (v108/*: any*/),
  (v107/*: any*/),
  (v56/*: any*/)
],
v111 = {
  "alias": null,
  "args": null,
  "concreteType": "ESOrderType",
  "kind": "LinkedField",
  "name": "bestBid",
  "plural": false,
  "selections": [
    (v102/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetQuantityType",
      "kind": "LinkedField",
      "name": "paymentAssetQuantity",
      "plural": false,
      "selections": (v110/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v112 = {
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
        (v57/*: any*/),
        (v102/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ESAccountType",
          "kind": "LinkedField",
          "name": "maker",
          "plural": false,
          "selections": (v32/*: any*/),
          "storageKey": null
        },
        (v103/*: any*/),
        (v104/*: any*/),
        (v105/*: any*/),
        (v106/*: any*/),
        (v107/*: any*/),
        (v97/*: any*/),
        (v109/*: any*/)
      ],
      "storageKey": null
    },
    (v111/*: any*/)
  ],
  "storageKey": null
},
v113 = {
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
          "selections": (v110/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v114 = {
  "alias": null,
  "args": (v25/*: any*/),
  "kind": "ScalarField",
  "name": "ownedQuantity",
  "storageKey": null
},
v115 = [
  {
    "kind": "Literal",
    "name": "identity",
    "value": {}
  }
],
v116 = {
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
        (v77/*: any*/),
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
      "args": (v115/*: any*/),
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
        (v107/*: any*/)
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
        (v26/*: any*/),
        (v56/*: any*/)
      ],
      "storageKey": null
    }
  ]
},
v117 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetBundleType",
  "kind": "LinkedField",
  "name": "assetBundle",
  "plural": false,
  "selections": [
    (v57/*: any*/),
    (v56/*: any*/),
    (v63/*: any*/),
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
                    (v57/*: any*/),
                    (v95/*: any*/),
                    (v93/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "CollectionType",
                      "kind": "LinkedField",
                      "name": "collection",
                      "plural": false,
                      "selections": [
                        (v90/*: any*/),
                        (v56/*: any*/),
                        (v36/*: any*/),
                        (v57/*: any*/),
                        (v64/*: any*/),
                        (v63/*: any*/)
                      ],
                      "storageKey": null
                    },
                    (v94/*: any*/),
                    (v96/*: any*/),
                    (v56/*: any*/)
                  ],
                  "storageKey": null
                },
                (v56/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "assetQuantities(first:18)"
    },
    (v62/*: any*/),
    (v36/*: any*/),
    (v113/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ESOrderDataType",
      "kind": "LinkedField",
      "name": "orderData",
      "plural": false,
      "selections": [
        (v111/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ESOrderType",
          "kind": "LinkedField",
          "name": "bestAsk",
          "plural": false,
          "selections": [
            (v103/*: any*/),
            (v102/*: any*/),
            (v104/*: any*/),
            (v105/*: any*/),
            (v106/*: any*/),
            (v107/*: any*/),
            (v97/*: any*/),
            (v109/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v118 = [
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
v119 = [
  (v39/*: any*/),
  (v66/*: any*/),
  (v67/*: any*/),
  (v68/*: any*/),
  (v69/*: any*/),
  {
    "kind": "Literal",
    "name": "sortBy",
    "value": "SEVEN_DAY_VOLUME"
  }
],
v120 = {
  "alias": null,
  "args": (v119/*: any*/),
  "concreteType": "CollectionTypeConnection",
  "kind": "LinkedField",
  "name": "collections",
  "plural": false,
  "selections": (v74/*: any*/),
  "storageKey": null
},
v121 = {
  "alias": null,
  "args": (v119/*: any*/),
  "filters": (v75/*: any*/),
  "handle": "connection",
  "key": "CollectionFilter_collections",
  "kind": "LinkedHandle",
  "name": "collections"
},
v122 = [
  {
    "kind": "Variable",
    "name": "assetCreator",
    "variableName": "creator"
  },
  (v39/*: any*/),
  (v66/*: any*/),
  (v68/*: any*/),
  (v69/*: any*/),
  {
    "kind": "Literal",
    "name": "sortBy",
    "value": "NAME"
  }
],
v123 = [
  (v38/*: any*/),
  (v39/*: any*/),
  (v41/*: any*/),
  (v54/*: any*/),
  (v84/*: any*/),
  (v43/*: any*/),
  (v85/*: any*/),
  (v86/*: any*/),
  (v48/*: any*/),
  (v49/*: any*/),
  (v50/*: any*/),
  (v51/*: any*/)
],
v124 = [
  (v38/*: any*/),
  (v39/*: any*/),
  (v41/*: any*/),
  (v84/*: any*/),
  (v24/*: any*/),
  (v55/*: any*/),
  (v43/*: any*/),
  (v85/*: any*/),
  (v86/*: any*/),
  (v48/*: any*/),
  (v49/*: any*/),
  (v50/*: any*/),
  (v51/*: any*/)
];
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
      (v16/*: any*/),
      (v17/*: any*/),
      (v18/*: any*/),
      (v19/*: any*/),
      (v20/*: any*/),
      (v21/*: any*/),
      (v22/*: any*/),
      (v23/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "accountQuery",
    "selections": [
      {
        "alias": null,
        "args": (v25/*: any*/),
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v26/*: any*/),
          (v27/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v28/*: any*/),
              (v29/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountMetadataType",
            "kind": "LinkedField",
            "name": "metadata",
            "plural": false,
            "selections": [
              (v30/*: any*/)
            ],
            "storageKey": null
          },
          (v31/*: any*/),
          {
            "args": [
              {
                "kind": "Variable",
                "name": "includePrivateAssetCount",
                "variableName": "includePrivateAssetCount"
              }
            ],
            "kind": "FragmentSpread",
            "name": "profilePageQueries_account"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AccountHeader_data"
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "wallet_accountKey",
            "selections": (v32/*: any*/)
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v34/*: any*/),
        "concreteType": "CollectionType",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v35/*: any*/),
          (v27/*: any*/),
          (v36/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "sidebarCollected",
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": (v25/*: any*/),
            "kind": "FragmentSpread",
            "name": "profilePageQueries_collected"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "sidebarCreated",
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": (v25/*: any*/),
            "kind": "FragmentSpread",
            "name": "profilePageQueries_created"
          }
        ],
        "storageKey": null
      },
      {
        "condition": "isAssetsTab",
        "kind": "Condition",
        "passingValue": true,
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
                  (v37/*: any*/),
                  (v38/*: any*/),
                  (v39/*: any*/),
                  (v33/*: any*/),
                  (v40/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "collectionSortBy",
                    "value": "ASSET_COUNT"
                  },
                  (v41/*: any*/),
                  (v24/*: any*/),
                  (v42/*: any*/),
                  (v43/*: any*/),
                  (v44/*: any*/),
                  (v45/*: any*/),
                  (v46/*: any*/),
                  (v47/*: any*/),
                  (v48/*: any*/),
                  (v49/*: any*/),
                  (v50/*: any*/),
                  (v51/*: any*/)
                ],
                "kind": "FragmentSpread",
                "name": "AssetSearch_data"
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isActivityTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
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
                  (v38/*: any*/),
                  (v39/*: any*/),
                  (v33/*: any*/),
                  (v40/*: any*/),
                  (v52/*: any*/),
                  (v41/*: any*/),
                  {
                    "kind": "Variable",
                    "name": "eventTypes",
                    "variableName": "eventTypes"
                  },
                  (v24/*: any*/),
                  (v42/*: any*/),
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
          }
        ]
      },
      {
        "condition": "isOffersTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "offers",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "args": [
                  (v38/*: any*/),
                  (v39/*: any*/),
                  (v40/*: any*/),
                  (v52/*: any*/),
                  (v41/*: any*/),
                  (v24/*: any*/),
                  (v42/*: any*/)
                ],
                "kind": "FragmentSpread",
                "name": "OfferSearch_data"
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isCreatedTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "created",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "args": [
                  (v38/*: any*/),
                  (v39/*: any*/),
                  (v33/*: any*/),
                  (v40/*: any*/),
                  (v53/*: any*/),
                  (v41/*: any*/),
                  (v54/*: any*/),
                  (v43/*: any*/),
                  (v44/*: any*/),
                  (v45/*: any*/),
                  (v46/*: any*/),
                  (v47/*: any*/),
                  (v48/*: any*/),
                  (v49/*: any*/),
                  (v50/*: any*/),
                  (v51/*: any*/)
                ],
                "kind": "FragmentSpread",
                "name": "AssetSearch_data"
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isPrivateTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "private",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "args": [
                  (v37/*: any*/),
                  (v38/*: any*/),
                  (v39/*: any*/),
                  (v33/*: any*/),
                  (v40/*: any*/),
                  (v53/*: any*/),
                  (v41/*: any*/),
                  (v24/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "includeCollectionFilter",
                    "value": false
                  },
                  {
                    "kind": "Literal",
                    "name": "includeHiddenCollections",
                    "value": true
                  },
                  (v55/*: any*/),
                  (v43/*: any*/),
                  (v44/*: any*/),
                  (v45/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "shouldShowQuantity",
                    "value": true
                  },
                  (v47/*: any*/),
                  (v48/*: any*/),
                  (v49/*: any*/),
                  (v50/*: any*/),
                  (v51/*: any*/)
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
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v5/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v12/*: any*/),
      (v11/*: any*/),
      (v14/*: any*/),
      (v13/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/),
      (v17/*: any*/),
      (v18/*: any*/),
      (v20/*: any*/),
      (v21/*: any*/),
      (v22/*: any*/),
      (v23/*: any*/),
      (v19/*: any*/),
      (v8/*: any*/)
    ],
    "kind": "Operation",
    "name": "accountQuery",
    "selections": [
      {
        "alias": null,
        "args": (v25/*: any*/),
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v26/*: any*/),
          (v27/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserType",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v28/*: any*/),
              (v29/*: any*/),
              (v56/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "favoriteAssetCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountMetadataType",
            "kind": "LinkedField",
            "name": "metadata",
            "plural": false,
            "selections": [
              (v30/*: any*/),
              (v56/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "twitterUsername",
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
                "name": "websiteUrl",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bio",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bannerImageUrl",
            "storageKey": null
          },
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
          (v57/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Name",
            "kind": "LinkedField",
            "name": "names",
            "plural": true,
            "selections": [
              (v36/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
            "kind": "ScalarField",
            "name": "createdDate",
            "storageKey": null
          },
          (v31/*: any*/),
          (v56/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v34/*: any*/),
        "concreteType": "CollectionType",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v35/*: any*/),
          (v27/*: any*/),
          (v36/*: any*/),
          (v56/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "sidebarCollected",
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              (v58/*: any*/),
              (v24/*: any*/)
            ],
            "concreteType": "SearchTypeConnection",
            "kind": "LinkedField",
            "name": "search",
            "plural": false,
            "selections": (v60/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "sidebarCreated",
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "creator",
                "variableName": "identity"
              },
              (v58/*: any*/),
              {
                "kind": "Literal",
                "name": "resultType",
                "value": "ASSETS"
              }
            ],
            "concreteType": "SearchTypeConnection",
            "kind": "LinkedField",
            "name": "search",
            "plural": false,
            "selections": (v60/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "condition": "isAssetsTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "assets",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              (v65/*: any*/),
              {
                "alias": null,
                "args": (v70/*: any*/),
                "concreteType": "CollectionTypeConnection",
                "kind": "LinkedField",
                "name": "collections",
                "plural": false,
                "selections": (v74/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v70/*: any*/),
                "filters": (v75/*: any*/),
                "handle": "connection",
                "key": "CollectionFilter_collections",
                "kind": "LinkedHandle",
                "name": "collections"
              },
              (v78/*: any*/),
              (v81/*: any*/),
              (v82/*: any*/),
              (v83/*: any*/),
              {
                "alias": null,
                "args": (v87/*: any*/),
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
                              (v89/*: any*/),
                              (v91/*: any*/),
                              (v57/*: any*/),
                              (v92/*: any*/),
                              (v93/*: any*/),
                              (v27/*: any*/),
                              (v36/*: any*/),
                              (v56/*: any*/),
                              (v94/*: any*/),
                              (v95/*: any*/),
                              (v96/*: any*/),
                              (v97/*: any*/),
                              (v98/*: any*/),
                              (v99/*: any*/),
                              (v100/*: any*/),
                              (v101/*: any*/),
                              (v112/*: any*/),
                              (v113/*: any*/),
                              {
                                "condition": "isAssetsTab",
                                "kind": "Condition",
                                "passingValue": true,
                                "selections": [
                                  (v114/*: any*/)
                                ]
                              },
                              (v116/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v117/*: any*/),
                          (v71/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v72/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v59/*: any*/),
                  (v73/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v87/*: any*/),
                "filters": (v118/*: any*/),
                "handle": "connection",
                "key": "AssetSearch_search",
                "kind": "LinkedHandle",
                "name": "search"
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isActivityTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "activity",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              (v65/*: any*/),
              (v120/*: any*/),
              (v121/*: any*/),
              {
                "condition": "isSingleCollection",
                "kind": "Condition",
                "passingValue": true,
                "selections": [
                  {
                    "alias": null,
                    "args": (v34/*: any*/),
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
                      (v56/*: any*/)
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isOffersTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "offers",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              (v65/*: any*/),
              (v120/*: any*/),
              (v121/*: any*/)
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isCreatedTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "created",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              (v65/*: any*/),
              {
                "alias": null,
                "args": (v122/*: any*/),
                "concreteType": "CollectionTypeConnection",
                "kind": "LinkedField",
                "name": "collections",
                "plural": false,
                "selections": (v74/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v122/*: any*/),
                "filters": (v75/*: any*/),
                "handle": "connection",
                "key": "CollectionFilter_collections",
                "kind": "LinkedHandle",
                "name": "collections"
              },
              (v78/*: any*/),
              (v81/*: any*/),
              (v82/*: any*/),
              (v83/*: any*/),
              {
                "alias": null,
                "args": (v123/*: any*/),
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
                              (v89/*: any*/),
                              (v91/*: any*/),
                              (v57/*: any*/),
                              (v92/*: any*/),
                              (v93/*: any*/),
                              (v27/*: any*/),
                              (v36/*: any*/),
                              (v56/*: any*/),
                              (v94/*: any*/),
                              (v95/*: any*/),
                              (v96/*: any*/),
                              (v97/*: any*/),
                              (v98/*: any*/),
                              (v99/*: any*/),
                              (v100/*: any*/),
                              (v101/*: any*/),
                              (v112/*: any*/),
                              (v113/*: any*/),
                              {
                                "condition": "isAssetsTab",
                                "kind": "Condition",
                                "passingValue": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": (v115/*: any*/),
                                    "kind": "ScalarField",
                                    "name": "ownedQuantity",
                                    "storageKey": "ownedQuantity(identity:{})"
                                  }
                                ]
                              },
                              (v116/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v117/*: any*/),
                          (v71/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v72/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v59/*: any*/),
                  (v73/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v123/*: any*/),
                "filters": (v118/*: any*/),
                "handle": "connection",
                "key": "AssetSearch_search",
                "kind": "LinkedHandle",
                "name": "search"
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "isPrivateTab",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "private",
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              (v78/*: any*/),
              (v81/*: any*/),
              (v82/*: any*/),
              (v83/*: any*/),
              {
                "alias": "selectedCollections",
                "args": (v61/*: any*/),
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
                          (v27/*: any*/),
                          (v36/*: any*/),
                          (v63/*: any*/),
                          (v35/*: any*/),
                          (v56/*: any*/)
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
                "args": (v124/*: any*/),
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
                              (v89/*: any*/),
                              (v91/*: any*/),
                              (v57/*: any*/),
                              (v92/*: any*/),
                              (v93/*: any*/),
                              (v27/*: any*/),
                              (v36/*: any*/),
                              (v56/*: any*/),
                              (v94/*: any*/),
                              (v95/*: any*/),
                              (v96/*: any*/),
                              (v97/*: any*/),
                              (v114/*: any*/),
                              (v98/*: any*/),
                              (v99/*: any*/),
                              (v100/*: any*/),
                              (v101/*: any*/),
                              (v112/*: any*/),
                              (v113/*: any*/),
                              (v116/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v117/*: any*/),
                          (v71/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v72/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v59/*: any*/),
                  (v73/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v124/*: any*/),
                "filters": (v118/*: any*/),
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
    "cacheID": "5b6671e39c96aadeae2c64d8635b6467",
    "id": null,
    "metadata": {},
    "name": "accountQuery",
    "operationKind": "query",
    "text": "query accountQuery(\n  $categories: [CollectionSlug!]\n  $chains: [ChainScalar!]\n  $collection: CollectionSlug\n  $collectionQuery: String\n  $collections: [CollectionSlug!]\n  $identity: IdentityInputType\n  $creator: IdentityInputType\n  $isActivityTab: Boolean!\n  $isAssetsTab: Boolean!\n  $isOffersTab: Boolean!\n  $isCreatedTab: Boolean!\n  $isPrivateTab: Boolean!\n  $isPrivate: Boolean!\n  $isSingleCollection: Boolean!\n  $numericTraits: [TraitRangeType!]\n  $query: String\n  $resultModel: SearchResultModel\n  $sortAscending: Boolean\n  $sortBy: SearchSortBy\n  $stringTraits: [TraitInputType!]\n  $toggles: [SearchToggle!]\n  $showContextMenu: Boolean!\n  $includePrivateAssetCount: Boolean!\n) {\n  account(identity: $identity) {\n    address\n    imageUrl\n    user {\n      username\n      publicUsername\n      id\n    }\n    metadata {\n      isBanned\n      id\n    }\n    ...profilePageQueries_account_8v4Bz\n    ...AccountHeader_data\n    ...wallet_accountKey\n    privateAssetCount\n    id\n  }\n  collection(collection: $collection) {\n    description\n    imageUrl\n    name\n    id\n  }\n  sidebarCollected: query {\n    ...profilePageQueries_collected_3StDC7\n  }\n  sidebarCreated: query {\n    ...profilePageQueries_created_3StDC7\n  }\n  assets: query @include(if: $isAssetsTab) {\n    ...AssetSearch_data_2xDP4W\n  }\n  activity: query @include(if: $isActivityTab) {\n    ...ActivitySearch_data_3v36wc\n  }\n  offers: query @include(if: $isOffersTab) {\n    ...OfferSearch_data_3HWMrt\n  }\n  created: query @include(if: $isCreatedTab) {\n    ...AssetSearch_data_1DuISp\n  }\n  private: query @include(if: $isPrivateTab) {\n    ...AssetSearch_data_3erxyq\n  }\n}\n\nfragment AccountHeader_data on AccountType {\n  address\n  bio\n  bannerImageUrl\n  config\n  isCompromised\n  metadata {\n    twitterUsername\n    instagramUsername\n    id\n  }\n  relayId\n  names {\n    name\n    type\n  }\n  displayName\n  ...accounts_url\n  ...ProfileImage_data\n  ...AccountLinksBar_data\n  createdDate\n}\n\nfragment AccountLinksBar_data on AccountType {\n  relayId\n  config\n  metadata {\n    instagramUsername\n    twitterUsername\n    websiteUrl\n    id\n  }\n  ...accounts_url\n  ...ProfileImage_data\n}\n\nfragment ActivitySearchFilter_data_23FYhq on Query {\n  ...CollectionFilter_data_5wVB4\n}\n\nfragment ActivitySearch_data_3v36wc on Query {\n  collection(collection: $collection) @include(if: $isSingleCollection) {\n    includeTradingHistory\n    id\n  }\n  ...ActivitySearchFilter_data_23FYhq\n  ...SearchPills_data_2Kg4Sq\n}\n\nfragment AssetCardAnnotations_assetBundle on AssetBundleType {\n  assetCount\n}\n\nfragment AssetCardAnnotations_asset_19CeED on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  ownedQuantity(identity: $identity) @include(if: $isAssetsTab)\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n  ...AssetContextMenu_data_3z4lq0 @include(if: $showContextMenu)\n}\n\nfragment AssetCardAnnotations_asset_4UtZc on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  ownedQuantity(identity: $identity)\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n  ...AssetContextMenu_data_3z4lq0 @include(if: $showContextMenu)\n}\n\nfragment AssetCardAnnotations_asset_tmliZ on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  ownedQuantity(identity: {}) @include(if: $isAssetsTab)\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n  ...AssetContextMenu_data_3z4lq0 @include(if: $showContextMenu)\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  collection {\n    slug\n    id\n  }\n  orderData {\n    bestAsk {\n      relayId\n    }\n  }\n}\n\nfragment AssetCardContent_asset on AssetType {\n  relayId\n  name\n  ...AssetMedia_asset\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n  isDelisted\n}\n\nfragment AssetCardContent_assetBundle on AssetBundleType {\n  assetQuantities(first: 18) {\n    edges {\n      node {\n        asset {\n          relayId\n          ...AssetMedia_asset\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_assetBundle on AssetBundleType {\n  ...AssetCardAnnotations_assetBundle\n  name\n  assetCount\n  assetQuantities(first: 18) {\n    edges {\n      node {\n        asset {\n          collection {\n            name\n            relayId\n            isVerified\n            ...collection_url\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_asset_19CeED on AssetType {\n  ...AssetCardAnnotations_asset_19CeED\n  name\n  tokenId\n  collection {\n    name\n    isVerified\n    ...collection_url\n    id\n  }\n  isDelisted\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_asset_4UtZc on AssetType {\n  ...AssetCardAnnotations_asset_4UtZc\n  name\n  tokenId\n  collection {\n    name\n    isVerified\n    ...collection_url\n    id\n  }\n  isDelisted\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_asset_tmliZ on AssetType {\n  ...AssetCardAnnotations_asset_tmliZ\n  name\n  tokenId\n  collection {\n    name\n    isVerified\n    ...collection_url\n    id\n  }\n  isDelisted\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetContextMenu_data_3z4lq0 on AssetType {\n  ...asset_edit_url\n  ...asset_url\n  ...itemEvents_data\n  isDelisted\n  isEditable {\n    value\n    reason\n  }\n  isListable\n  ownership(identity: {}) {\n    isPrivate\n    quantity\n  }\n  creator {\n    address\n    id\n  }\n  collection {\n    isAuthorizedEditor\n    id\n  }\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment AssetSearchFilter_data_1ntCj4 on Query {\n  ...CollectionFilter_data_SozeH\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment AssetSearchFilter_data_1p1g0 on Query {\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment AssetSearchFilter_data_1upvW6 on Query {\n  ...CollectionFilter_data_1gjj44\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment AssetSearchList_data_164hN9 on SearchResultType {\n  asset {\n    assetContract {\n      address\n      chain\n      id\n    }\n    collection {\n      isVerified\n      relayId\n      id\n    }\n    relayId\n    tokenId\n    ...AssetSelectionItem_data\n    ...asset_url\n    id\n  }\n  assetBundle {\n    relayId\n    id\n  }\n  ...Asset_data_164hN9\n}\n\nfragment AssetSearchList_data_19CeED on SearchResultType {\n  asset {\n    assetContract {\n      address\n      chain\n      id\n    }\n    collection {\n      isVerified\n      relayId\n      id\n    }\n    relayId\n    tokenId\n    ...AssetSelectionItem_data\n    ...asset_url\n    id\n  }\n  assetBundle {\n    relayId\n    id\n  }\n  ...Asset_data_19CeED\n}\n\nfragment AssetSearchList_data_4UtZc on SearchResultType {\n  asset {\n    assetContract {\n      address\n      chain\n      id\n    }\n    collection {\n      isVerified\n      relayId\n      id\n    }\n    relayId\n    tokenId\n    ...AssetSelectionItem_data\n    ...asset_url\n    id\n  }\n  assetBundle {\n    relayId\n    id\n  }\n  ...Asset_data_4UtZc\n}\n\nfragment AssetSearch_data_1DuISp on Query {\n  ...AssetSearchFilter_data_1upvW6\n  ...SearchPills_data_2Kg4Sq\n  search(chains: $chains, categories: $categories, collections: $collections, first: 32, numericTraits: $numericTraits, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, creator: $creator) {\n    edges {\n      node {\n        ...AssetSearchList_data_164hN9\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSearch_data_2xDP4W on Query {\n  ...AssetSearchFilter_data_1ntCj4\n  ...SearchPills_data_2Kg4Sq\n  search(chains: $chains, categories: $categories, collections: $collections, first: 32, identity: $identity, numericTraits: $numericTraits, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles) {\n    edges {\n      node {\n        ...AssetSearchList_data_19CeED\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSearch_data_3erxyq on Query {\n  ...AssetSearchFilter_data_1p1g0\n  ...SearchPills_data_2Kg4Sq\n  search(chains: $chains, categories: $categories, collections: $collections, first: 32, identity: $identity, numericTraits: $numericTraits, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, isPrivate: $isPrivate) {\n    edges {\n      node {\n        ...AssetSearchList_data_4UtZc\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSelectionItem_data on AssetType {\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    imageUrl\n    id\n  }\n  imageUrl\n  name\n  relayId\n}\n\nfragment Asset_data_164hN9 on SearchResultType {\n  asset {\n    relayId\n    isDelisted\n    ...AssetCardContent_asset\n    ...AssetCardFooter_asset_tmliZ\n    ...AssetMedia_asset\n    ...asset_url\n    ...itemEvents_data\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n  assetBundle {\n    relayId\n    ...bundle_url\n    ...AssetCardContent_assetBundle\n    ...AssetCardFooter_assetBundle\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Asset_data_19CeED on SearchResultType {\n  asset {\n    relayId\n    isDelisted\n    ...AssetCardContent_asset\n    ...AssetCardFooter_asset_19CeED\n    ...AssetMedia_asset\n    ...asset_url\n    ...itemEvents_data\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n  assetBundle {\n    relayId\n    ...bundle_url\n    ...AssetCardContent_assetBundle\n    ...AssetCardFooter_assetBundle\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Asset_data_4UtZc on SearchResultType {\n  asset {\n    relayId\n    isDelisted\n    ...AssetCardContent_asset\n    ...AssetCardFooter_asset_4UtZc\n    ...AssetMedia_asset\n    ...asset_url\n    ...itemEvents_data\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n  assetBundle {\n    relayId\n    ...bundle_url\n    ...AssetCardContent_assetBundle\n    ...AssetCardFooter_assetBundle\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment CollectionFilter_data_1gjj44 on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(assetCreator: $creator, chains: $chains, first: 100, parents: $categories, query: $collectionQuery, sortBy: NAME) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionFilter_data_5wVB4 on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: SEVEN_DAY_VOLUME) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionFilter_data_SozeH on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(assetOwner: $identity, chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: ASSET_COUNT) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionModalContent_data on CollectionType {\n  description\n  imageUrl\n  name\n  slug\n}\n\nfragment NumericTraitFilter_data on NumericTraitTypePair {\n  key\n  value {\n    max\n    min\n  }\n}\n\nfragment OfferSearchFilter_data_23FYhq on Query {\n  ...CollectionFilter_data_5wVB4\n}\n\nfragment OfferSearch_data_3HWMrt on Query {\n  ...OfferSearchFilter_data_23FYhq\n  ...SearchPills_data_2Kg4Sq\n}\n\nfragment PaymentFilter_data_2YoIWt on Query {\n  paymentAssets(first: 10) {\n    edges {\n      node {\n        symbol\n        relayId\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  PaymentFilter_collection: collection(collection: $collection) {\n    paymentAssets {\n      symbol\n      relayId\n      id\n    }\n    id\n  }\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  address\n}\n\nfragment SearchPills_data_2Kg4Sq on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        imageUrl\n        name\n        slug\n        ...CollectionModalContent_data\n        id\n      }\n    }\n  }\n}\n\nfragment StringTraitFilter_data on StringTraitType {\n  counts {\n    count\n    value\n  }\n  key\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_edit_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment itemEvents_data on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment profilePageQueries_account_8v4Bz on AccountType {\n  user {\n    favoriteAssetCount\n    id\n  }\n  privateAssetCount @include(if: $includePrivateAssetCount)\n}\n\nfragment profilePageQueries_collected_3StDC7 on Query {\n  search(identity: $identity, first: 0) {\n    totalCount\n  }\n}\n\nfragment profilePageQueries_created_3StDC7 on Query {\n  search(creator: $identity, first: 0, resultType: ASSETS) {\n    totalCount\n  }\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
  }
};
})();
(node as any).hash = 'a6fe1f8ecff6c592be57e023b51bccd7';
export default node;
