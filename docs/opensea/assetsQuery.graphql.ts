/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionSort = "ASSET_COUNT" | "AVERAGE_PRICE" | "CREATED_DATE" | "MARKET_CAP" | "NAME" | "NUM_OWNERS" | "NUM_REPORTS" | "ONE_DAY_VOLUME" | "SEVEN_DAY_AVERAGE_PRICE" | "SEVEN_DAY_CHANGE" | "SEVEN_DAY_SALES" | "SEVEN_DAY_VOLUME" | "THIRTY_DAY_VOLUME" | "TOTAL_SALES" | "TOTAL_SUPPLY" | "TOTAL_VOLUME" | "%future added value";
export type EventType = "ASSET_APPROVE" | "ASSET_TRANSFER" | "AUCTION_CANCELLED" | "AUCTION_CREATED" | "AUCTION_SUCCESSFUL" | "BID_ENTERED" | "BID_WITHDRAWN" | "CUSTOM" | "OFFER_ENTERED" | "PAYOUT" | "%future added value";
export type PriceFilterSymbol = "ETH" | "USD" | "%future added value";
export type SafelistRequestStatus = "APPROVED" | "NOT_REQUESTED" | "REQUESTED" | "VERIFIED" | "%future added value";
export type SearchResultModel = "ASSETS" | "BUNDLES" | "%future added value";
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
export type PriceFilterType = {
    symbol: PriceFilterSymbol;
    min?: number | null | undefined;
    max?: number | null | undefined;
};
export type TraitInputType = {
    name: string;
    values: Array<string>;
};
export type assetsQueryVariables = {
    categories?: Array<string> | null | undefined;
    chains?: Array<| "ETHEREUM" | "MATIC" | "KLAYTN" | "XDAI" | "BSC" | "FLOW" | "LOCAL" | "RINKEBY" | "MUMBAI" | "BAOBAB" | "BSC_TESTNET" | "GOERLI" | "%future added value"> | null | undefined;
    collection?: string | null | undefined;
    collections?: Array<string> | null | undefined;
    collectionQuery?: string | null | undefined;
    collectionSortBy?: CollectionSort | null | undefined;
    count?: number | null | undefined;
    cursor?: string | null | undefined;
    eventTypes?: Array<EventType> | null | undefined;
    isListingsTab: boolean;
    isActivityTab: boolean;
    isSingleCollection: boolean;
    numericTraits?: Array<TraitRangeType> | null | undefined;
    paymentAssets?: Array<string> | null | undefined;
    priceFilter?: PriceFilterType | null | undefined;
    query?: string | null | undefined;
    resultModel?: SearchResultModel | null | undefined;
    sortAscending?: boolean | null | undefined;
    sortBy?: SearchSortBy | null | undefined;
    stringTraits?: Array<TraitInputType> | null | undefined;
    toggles?: Array<SearchToggle> | null | undefined;
    safelistRequestStatuses?: Array<SafelistRequestStatus> | null | undefined;
};
export type assetsQueryResponse = {
    readonly assets?: {
        readonly " $fragmentRefs": FragmentRefs<"AssetSearch_data">;
    } | undefined;
    readonly activity?: {
        readonly " $fragmentRefs": FragmentRefs<"ActivitySearch_data">;
    } | undefined;
};
export type assetsQuery = {
    readonly response: assetsQueryResponse;
    readonly variables: assetsQueryVariables;
};



/*
query assetsQuery(
  $categories: [CollectionSlug!]
  $chains: [ChainScalar!]
  $collection: CollectionSlug
  $collections: [CollectionSlug!]
  $collectionQuery: String
  $collectionSortBy: CollectionSort
  $count: Int
  $cursor: String
  $isListingsTab: Boolean!
  $isActivityTab: Boolean!
  $isSingleCollection: Boolean!
  $numericTraits: [TraitRangeType!]
  $paymentAssets: [PaymentAssetSymbol!]
  $priceFilter: PriceFilterType
  $query: String
  $resultModel: SearchResultModel
  $sortAscending: Boolean
  $sortBy: SearchSortBy
  $stringTraits: [TraitInputType!]
  $toggles: [SearchToggle!]
  $safelistRequestStatuses: [SafelistRequestStatus!]
) {
  assets: query @include(if: $isListingsTab) {
    ...AssetSearch_data_23HkA5
  }
  activity: query @include(if: $isActivityTab) {
    ...ActivitySearch_data_2eDEPY
  }
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

fragment AssetCardAnnotations_asset_2qdDhQ on AssetType {
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

fragment AssetCardFooter_asset_2qdDhQ on AssetType {
  ...AssetCardAnnotations_asset_2qdDhQ
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

fragment AssetSearchFilter_data_2Urq7C on Query {
  ...CollectionFilter_data_2UnRVu
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

fragment AssetSearchList_data_3JpaAE on SearchResultType {
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
  ...Asset_data_3JpaAE
}

fragment AssetSearch_data_23HkA5 on Query {
  ...AssetSearchFilter_data_2Urq7C
  ...SearchPills_data_2Kg4Sq
  search(after: $cursor, chains: $chains, categories: $categories, collections: $collections, first: $count, numericTraits: $numericTraits, paymentAssets: $paymentAssets, priceFilter: $priceFilter, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, safelistRequestStatuses: $safelistRequestStatuses) {
    edges {
      node {
        ...AssetSearchList_data_3JpaAE
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

fragment Asset_data_3JpaAE on SearchResultType {
  asset {
    relayId
    isDelisted
    ...AssetCardContent_asset
    ...AssetCardFooter_asset_2qdDhQ
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

fragment CollectionFilter_data_2UnRVu on Query {
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
  "name": "count"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "eventTypes"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isActivityTab"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isListingsTab"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isSingleCollection"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "numericTraits"
},
v13 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "paymentAssets"
},
v14 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "priceFilter"
},
v15 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v16 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resultModel"
},
v17 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "safelistRequestStatuses"
},
v18 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortAscending"
},
v19 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortBy"
},
v20 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stringTraits"
},
v21 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "toggles"
},
v22 = {
  "kind": "Variable",
  "name": "categories",
  "variableName": "categories"
},
v23 = {
  "kind": "Variable",
  "name": "chains",
  "variableName": "chains"
},
v24 = {
  "kind": "Variable",
  "name": "collection",
  "variableName": "collection"
},
v25 = {
  "kind": "Variable",
  "name": "collectionQuery",
  "variableName": "collectionQuery"
},
v26 = {
  "kind": "Variable",
  "name": "collectionSortBy",
  "variableName": "collectionSortBy"
},
v27 = {
  "kind": "Variable",
  "name": "collections",
  "variableName": "collections"
},
v28 = {
  "kind": "Literal",
  "name": "includeHiddenCollections",
  "value": false
},
v29 = {
  "kind": "Variable",
  "name": "numericTraits",
  "variableName": "numericTraits"
},
v30 = {
  "kind": "Variable",
  "name": "paymentAssets",
  "variableName": "paymentAssets"
},
v31 = {
  "kind": "Variable",
  "name": "priceFilter",
  "variableName": "priceFilter"
},
v32 = {
  "kind": "Variable",
  "name": "safelistRequestStatuses",
  "variableName": "safelistRequestStatuses"
},
v33 = {
  "kind": "Variable",
  "name": "sortAscending",
  "variableName": "sortAscending"
},
v34 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v35 = {
  "kind": "Variable",
  "name": "stringTraits",
  "variableName": "stringTraits"
},
v36 = {
  "kind": "Variable",
  "name": "toggles",
  "variableName": "toggles"
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetCount",
  "storageKey": null
},
v38 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v40 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isVerified",
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v43 = {
  "alias": "selectedCollections",
  "args": [
    (v27/*: any*/),
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
            (v37/*: any*/),
            (v38/*: any*/),
            (v39/*: any*/),
            (v40/*: any*/),
            (v41/*: any*/),
            (v42/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "description",
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
v44 = [
  (v23/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
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
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "collectionQuery"
  },
  {
    "kind": "Variable",
    "name": "sortBy",
    "variableName": "collectionSortBy"
  }
],
v45 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v47 = {
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
v48 = {
  "alias": null,
  "args": (v44/*: any*/),
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
            (v37/*: any*/),
            (v38/*: any*/),
            (v39/*: any*/),
            (v40/*: any*/),
            (v41/*: any*/),
            (v42/*: any*/),
            (v45/*: any*/)
          ],
          "storageKey": null
        },
        (v46/*: any*/)
      ],
      "storageKey": null
    },
    (v47/*: any*/)
  ],
  "storageKey": null
},
v49 = {
  "alias": null,
  "args": (v44/*: any*/),
  "filters": [
    "assetOwner",
    "assetCreator",
    "onlyPrivateAssets",
    "chains",
    "includeHidden",
    "parents",
    "query",
    "sortBy"
  ],
  "handle": "connection",
  "key": "CollectionFilter_collections",
  "kind": "LinkedHandle",
  "name": "collections"
},
v50 = [
  (v24/*: any*/)
],
v51 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v52 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v53 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v54 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "relayId",
  "storageKey": null
},
v55 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v22/*: any*/),
  (v23/*: any*/),
  (v27/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v29/*: any*/),
  (v30/*: any*/),
  (v31/*: any*/),
  {
    "kind": "Variable",
    "name": "querystring",
    "variableName": "query"
  },
  {
    "kind": "Variable",
    "name": "resultType",
    "variableName": "resultModel"
  },
  (v32/*: any*/),
  (v33/*: any*/),
  (v34/*: any*/),
  (v35/*: any*/),
  (v36/*: any*/)
],
v56 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v57 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v58 = {
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
v59 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "backgroundColor",
  "storageKey": null
},
v60 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDelisted",
  "storageKey": null
},
v61 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "animationUrl",
  "storageKey": null
},
v62 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayImageUrl",
  "storageKey": null
},
v63 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v64 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orderType",
  "storageKey": null
},
v65 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "closedAt",
  "storageKey": null
},
v66 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dutchAuctionFinalPrice",
  "storageKey": null
},
v67 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "openedAt",
  "storageKey": null
},
v68 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priceFnEndedAt",
  "storageKey": null
},
v69 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v70 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetType",
  "kind": "LinkedField",
  "name": "asset",
  "plural": false,
  "selections": [
    (v63/*: any*/),
    (v38/*: any*/),
    (v53/*: any*/),
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
        (v57/*: any*/),
        (v42/*: any*/)
      ],
      "storageKey": null
    },
    (v42/*: any*/)
  ],
  "storageKey": null
},
v71 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetQuantityType",
  "kind": "LinkedField",
  "name": "paymentAssetQuantity",
  "plural": false,
  "selections": [
    (v69/*: any*/),
    (v70/*: any*/),
    (v42/*: any*/),
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
v72 = [
  (v70/*: any*/),
  (v69/*: any*/),
  (v42/*: any*/)
],
v73 = {
  "alias": null,
  "args": null,
  "concreteType": "ESOrderType",
  "kind": "LinkedField",
  "name": "bestBid",
  "plural": false,
  "selections": [
    (v64/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetQuantityType",
      "kind": "LinkedField",
      "name": "paymentAssetQuantity",
      "plural": false,
      "selections": (v72/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v74 = {
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
          "selections": (v72/*: any*/),
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
      (v16/*: any*/),
      (v17/*: any*/),
      (v18/*: any*/),
      (v19/*: any*/),
      (v20/*: any*/),
      (v21/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "assetsQuery",
    "selections": [
      {
        "condition": "isListingsTab",
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
                  (v22/*: any*/),
                  (v23/*: any*/),
                  (v24/*: any*/),
                  (v25/*: any*/),
                  (v26/*: any*/),
                  (v27/*: any*/),
                  {
                    "kind": "Variable",
                    "name": "count",
                    "variableName": "count"
                  },
                  {
                    "kind": "Variable",
                    "name": "cursor",
                    "variableName": "cursor"
                  },
                  (v28/*: any*/),
                  (v29/*: any*/),
                  (v30/*: any*/),
                  (v31/*: any*/),
                  {
                    "kind": "Variable",
                    "name": "query",
                    "variableName": "query"
                  },
                  {
                    "kind": "Variable",
                    "name": "resultModel",
                    "variableName": "resultModel"
                  },
                  (v32/*: any*/),
                  (v33/*: any*/),
                  (v34/*: any*/),
                  (v35/*: any*/),
                  (v36/*: any*/)
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
                  (v22/*: any*/),
                  (v23/*: any*/),
                  (v24/*: any*/),
                  (v25/*: any*/),
                  (v26/*: any*/),
                  (v27/*: any*/),
                  {
                    "kind": "Variable",
                    "name": "eventTypes",
                    "variableName": "eventTypes"
                  },
                  (v28/*: any*/),
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
      (v5/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v10/*: any*/),
      (v9/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/),
      (v14/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/),
      (v18/*: any*/),
      (v19/*: any*/),
      (v20/*: any*/),
      (v21/*: any*/),
      (v17/*: any*/)
    ],
    "kind": "Operation",
    "name": "assetsQuery",
    "selections": [
      {
        "condition": "isListingsTab",
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
              (v43/*: any*/),
              (v48/*: any*/),
              (v49/*: any*/),
              {
                "alias": null,
                "args": (v50/*: any*/),
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
                      (v51/*: any*/),
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
                      (v51/*: any*/),
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "value",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v42/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v52/*: any*/),
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
                          (v53/*: any*/),
                          (v54/*: any*/),
                          (v42/*: any*/),
                          (v45/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v46/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v47/*: any*/)
                ],
                "storageKey": "paymentAssets(first:10)"
              },
              {
                "alias": null,
                "args": (v52/*: any*/),
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
                "args": (v50/*: any*/),
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
                      (v53/*: any*/),
                      (v54/*: any*/),
                      (v42/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v42/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v55/*: any*/),
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
                                  (v56/*: any*/),
                                  (v57/*: any*/),
                                  (v42/*: any*/),
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
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CollectionType",
                                "kind": "LinkedField",
                                "name": "collection",
                                "plural": false,
                                "selections": [
                                  (v41/*: any*/),
                                  (v54/*: any*/),
                                  (v42/*: any*/),
                                  (v58/*: any*/),
                                  (v38/*: any*/),
                                  (v40/*: any*/),
                                  (v39/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v54/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "tokenId",
                                "storageKey": null
                              },
                              (v59/*: any*/),
                              (v38/*: any*/),
                              (v39/*: any*/),
                              (v42/*: any*/),
                              (v60/*: any*/),
                              (v61/*: any*/),
                              (v62/*: any*/),
                              (v63/*: any*/),
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
                                      (v54/*: any*/),
                                      (v64/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ESAccountType",
                                        "kind": "LinkedField",
                                        "name": "maker",
                                        "plural": false,
                                        "selections": [
                                          (v56/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v65/*: any*/),
                                      (v66/*: any*/),
                                      (v67/*: any*/),
                                      (v68/*: any*/),
                                      (v69/*: any*/),
                                      (v63/*: any*/),
                                      (v71/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v73/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v74/*: any*/)
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
                              (v54/*: any*/),
                              (v42/*: any*/),
                              (v40/*: any*/),
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
                                              (v54/*: any*/),
                                              (v61/*: any*/),
                                              (v59/*: any*/),
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "CollectionType",
                                                "kind": "LinkedField",
                                                "name": "collection",
                                                "plural": false,
                                                "selections": [
                                                  (v58/*: any*/),
                                                  (v42/*: any*/),
                                                  (v39/*: any*/),
                                                  (v54/*: any*/),
                                                  (v41/*: any*/),
                                                  (v40/*: any*/)
                                                ],
                                                "storageKey": null
                                              },
                                              (v60/*: any*/),
                                              (v62/*: any*/),
                                              (v42/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v42/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "assetQuantities(first:18)"
                              },
                              (v37/*: any*/),
                              (v39/*: any*/),
                              (v74/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ESOrderDataType",
                                "kind": "LinkedField",
                                "name": "orderData",
                                "plural": false,
                                "selections": [
                                  (v73/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ESOrderType",
                                    "kind": "LinkedField",
                                    "name": "bestAsk",
                                    "plural": false,
                                    "selections": [
                                      (v65/*: any*/),
                                      (v64/*: any*/),
                                      (v66/*: any*/),
                                      (v67/*: any*/),
                                      (v68/*: any*/),
                                      (v69/*: any*/),
                                      (v63/*: any*/),
                                      (v71/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v45/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v46/*: any*/)
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
                  (v47/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v55/*: any*/),
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
              (v43/*: any*/),
              (v48/*: any*/),
              (v49/*: any*/),
              {
                "condition": "isSingleCollection",
                "kind": "Condition",
                "passingValue": true,
                "selections": [
                  {
                    "alias": null,
                    "args": (v50/*: any*/),
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
                      (v42/*: any*/)
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "804b53df0c89699202f06a67761003cd",
    "id": null,
    "metadata": {},
    "name": "assetsQuery",
    "operationKind": "query",
    "text": "query assetsQuery(\n  $categories: [CollectionSlug!]\n  $chains: [ChainScalar!]\n  $collection: CollectionSlug\n  $collections: [CollectionSlug!]\n  $collectionQuery: String\n  $collectionSortBy: CollectionSort\n  $count: Int\n  $cursor: String\n  $isListingsTab: Boolean!\n  $isActivityTab: Boolean!\n  $isSingleCollection: Boolean!\n  $numericTraits: [TraitRangeType!]\n  $paymentAssets: [PaymentAssetSymbol!]\n  $priceFilter: PriceFilterType\n  $query: String\n  $resultModel: SearchResultModel\n  $sortAscending: Boolean\n  $sortBy: SearchSortBy\n  $stringTraits: [TraitInputType!]\n  $toggles: [SearchToggle!]\n  $safelistRequestStatuses: [SafelistRequestStatus!]\n) {\n  assets: query @include(if: $isListingsTab) {\n    ...AssetSearch_data_23HkA5\n  }\n  activity: query @include(if: $isActivityTab) {\n    ...ActivitySearch_data_2eDEPY\n  }\n}\n\nfragment ActivitySearchFilter_data_yLmsP on Query {\n  ...CollectionFilter_data_rfWZ1\n}\n\nfragment ActivitySearch_data_2eDEPY on Query {\n  collection(collection: $collection) @include(if: $isSingleCollection) {\n    includeTradingHistory\n    id\n  }\n  ...ActivitySearchFilter_data_yLmsP\n  ...SearchPills_data_2Kg4Sq\n}\n\nfragment AssetCardAnnotations_assetBundle on AssetBundleType {\n  assetCount\n}\n\nfragment AssetCardAnnotations_asset_2qdDhQ on AssetType {\n  assetContract {\n    chain\n    id\n  }\n  decimals\n  relayId\n  favoritesCount\n  isDelisted\n  isFavorite\n  isFrozen\n  hasUnlockableContent\n  ...AssetCardBuyNow_data\n  orderData {\n    bestAsk {\n      orderType\n      relayId\n      maker {\n        address\n      }\n    }\n  }\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  collection {\n    slug\n    id\n  }\n  orderData {\n    bestAsk {\n      relayId\n    }\n  }\n}\n\nfragment AssetCardContent_asset on AssetType {\n  relayId\n  name\n  ...AssetMedia_asset\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n  isDelisted\n}\n\nfragment AssetCardContent_assetBundle on AssetBundleType {\n  assetQuantities(first: 18) {\n    edges {\n      node {\n        asset {\n          relayId\n          ...AssetMedia_asset\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_assetBundle on AssetBundleType {\n  ...AssetCardAnnotations_assetBundle\n  name\n  assetCount\n  assetQuantities(first: 18) {\n    edges {\n      node {\n        asset {\n          collection {\n            name\n            relayId\n            isVerified\n            ...collection_url\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetCardFooter_asset_2qdDhQ on AssetType {\n  ...AssetCardAnnotations_asset_2qdDhQ\n  name\n  tokenId\n  collection {\n    name\n    isVerified\n    ...collection_url\n    id\n  }\n  isDelisted\n  assetContract {\n    address\n    chain\n    openseaVersion\n    id\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n  orderData {\n    bestBid {\n      orderType\n      paymentAssetQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n    bestAsk {\n      closedAt\n      orderType\n      dutchAuctionFinalPrice\n      openedAt\n      priceFnEndedAt\n      quantity\n      decimals\n      paymentAssetQuantity {\n        quantity\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n  isDelisted\n  displayImageUrl\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment AssetSearchFilter_data_2Urq7C on Query {\n  ...CollectionFilter_data_2UnRVu\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment AssetSearchList_data_3JpaAE on SearchResultType {\n  asset {\n    assetContract {\n      address\n      chain\n      id\n    }\n    collection {\n      isVerified\n      relayId\n      id\n    }\n    relayId\n    tokenId\n    ...AssetSelectionItem_data\n    ...asset_url\n    id\n  }\n  assetBundle {\n    relayId\n    id\n  }\n  ...Asset_data_3JpaAE\n}\n\nfragment AssetSearch_data_23HkA5 on Query {\n  ...AssetSearchFilter_data_2Urq7C\n  ...SearchPills_data_2Kg4Sq\n  search(after: $cursor, chains: $chains, categories: $categories, collections: $collections, first: $count, numericTraits: $numericTraits, paymentAssets: $paymentAssets, priceFilter: $priceFilter, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, safelistRequestStatuses: $safelistRequestStatuses) {\n    edges {\n      node {\n        ...AssetSearchList_data_3JpaAE\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSelectionItem_data on AssetType {\n  backgroundColor\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    imageUrl\n    id\n  }\n  imageUrl\n  name\n  relayId\n}\n\nfragment Asset_data_3JpaAE on SearchResultType {\n  asset {\n    relayId\n    isDelisted\n    ...AssetCardContent_asset\n    ...AssetCardFooter_asset_2qdDhQ\n    ...AssetMedia_asset\n    ...asset_url\n    ...itemEvents_data\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n  assetBundle {\n    relayId\n    ...bundle_url\n    ...AssetCardContent_assetBundle\n    ...AssetCardFooter_assetBundle\n    orderData {\n      bestAsk {\n        paymentAssetQuantity {\n          quantityInEth\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment CollectionFilter_data_2UnRVu on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionFilter_data_rfWZ1 on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n      }\n    }\n  }\n  collections(chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {\n    edges {\n      node {\n        assetCount\n        imageUrl\n        name\n        slug\n        isVerified\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CollectionModalContent_data on CollectionType {\n  description\n  imageUrl\n  name\n  slug\n}\n\nfragment NumericTraitFilter_data on NumericTraitTypePair {\n  key\n  value {\n    max\n    min\n  }\n}\n\nfragment PaymentFilter_data_2YoIWt on Query {\n  paymentAssets(first: 10) {\n    edges {\n      node {\n        symbol\n        relayId\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  PaymentFilter_collection: collection(collection: $collection) {\n    paymentAssets {\n      symbol\n      relayId\n      id\n    }\n    id\n  }\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment SearchPills_data_2Kg4Sq on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        imageUrl\n        name\n        slug\n        ...CollectionModalContent_data\n        id\n      }\n    }\n  }\n}\n\nfragment StringTraitFilter_data on StringTraitType {\n  counts {\n    count\n    value\n  }\n  key\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment itemEvents_data on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n}\n"
  }
};
})();
(node as any).hash = '01d4e2a7f11fcb061c34ada608b7e5a7';
export default node;
