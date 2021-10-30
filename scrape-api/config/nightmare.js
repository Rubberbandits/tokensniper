var Nightmare = require('nightmare');
var nightmare = Nightmare({
	images: false,
	webPreferences: {
		partition: 'persist: __cf_bm'
	}
});

/*
	Load GraphQL query maps
*/

var GRAPHQL_MAP = {};

const path = require("path");
const fs = require("fs");
var normalizedPath = path.join(__dirname, "gql");

fs.readdirSync(normalizedPath).forEach(function(file) {
	let {queryID, query, signature} = require("./gql/" + path.parse(file).name);

  	GRAPHQL_MAP[queryID] = {query: query, signature: signature};
});

exports.setup = function(cb) {
    nightmare
	.goto("https://opensea.io/collection/lady-killaz")
	.then(ob => {
		console.log("Nightmare setup complete")
        cb();
    });
};

exports.get = function() {
    return nightmare;
}; 

exports.gqlRun = function(queryID, variables, cb) {
	let {query, signature} = GRAPHQL_MAP[queryID];
	if (query === undefined) {
		cb(false);
		return;
	}

	let body = query("nautilus-nft");
	console.log(body)
	
	nightmare
	.evaluate(async (body, signature) => {
		let result = {};
		await fetch("https://api.opensea.io/graphql/", {
			"headers": {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9",
				"content-type": "application/json",
				"sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site",
				"x-api-key": "2f6f419a083c46de9d83ce3dbe7db601",
				"x-build-id": "q_vl0PijDKozXlx5SdghX",
				"x-signed-query": signature,
				"Referer": "https://opensea.io/",
			},
			"body": body,
			"method": "POST"
		}).then(res => res.json()).then(res => {result = res})
	
		return result;
	}, body, signature)
	.then(result => {
	  	cb(result);
	})
}

exports.scrapeTest = function(cb) {
    nightmare
	.evaluate(async () => {
		let result = ''
		await fetch("https://api.opensea.io/graphql/", {
			"headers": {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9",
				"content-type": "application/json",
				"sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site",
				"x-api-key": "2f6f419a083c46de9d83ce3dbe7db601",
				"x-build-id": "q_vl0PijDKozXlx5SdghX",
				"x-signed-query": "5abaaf9e000e594d1874e473da12dd3cb54766a88c6010631dd9d41254e84ab3",
				"Referer": "https://opensea.io/",
			},
			"body": "{\"id\":\"collectionQuery\",\"query\":\"query collectionQuery(\\n  $collection: CollectionSlug!\\n  $collections: [CollectionSlug!]\\n  $collectionQuery: String\\n  $includeHiddenCollections: Boolean\\n  $numericTraits: [TraitRangeType!]\\n  $query: String\\n  $sortAscending: Boolean\\n  $sortBy: SearchSortBy\\n  $stringTraits: [TraitInputType!]\\n  $toggles: [SearchToggle!]\\n  $showContextMenu: Boolean\\n  $isCategory: Boolean!\\n  $categories: [CollectionSlug!]\\n  $chains: [ChainScalar!]\\n  $collectionSortBy: CollectionSort\\n  $isSingleCollection: Boolean!\\n) {\\n  collection(collection: $collection) {\\n    isEditable\\n    bannerImageUrl\\n    name\\n    description\\n    imageUrl\\n    relayId\\n    representativeAsset {\\n      assetContract {\\n        openseaVersion\\n        id\\n      }\\n      id\\n    }\\n    slug\\n    ...verification_data\\n    ...collection_url\\n    ...CollectionHeader_data\\n    id\\n  }\\n  ...TrendingCollectionsList_data_29bCDU @include(if: $isCategory)\\n  assets: query @skip(if: $isCategory) {\\n    ...AssetSearch_data_1bS60n\\n  }\\n  activity: query {\\n    ...ActivitySearch_data_2eDEPY\\n  }\\n}\\n\\nfragment AccountLink_data on AccountType {\\n  address\\n  config\\n  isCompromised\\n  user {\\n    publicUsername\\n    id\\n  }\\n  ...ProfileImage_data\\n  ...wallet_accountKey\\n  ...accounts_url\\n}\\n\\nfragment ActivitySearchFilter_data_yLmsP on Query {\\n  ...CollectionFilter_data_rfWZ1\\n}\\n\\nfragment ActivitySearch_data_2eDEPY on Query {\\n  collection(collection: $collection) @include(if: $isSingleCollection) {\\n    includeTradingHistory\\n    id\\n  }\\n  ...ActivitySearchFilter_data_yLmsP\\n  ...SearchPills_data_2Kg4Sq\\n}\\n\\nfragment AssetCardAnnotations_assetBundle on AssetBundleType {\\n  assetCount\\n}\\n\\nfragment AssetCardAnnotations_asset_1OrK6u on AssetType {\\n  assetContract {\\n    chain\\n    id\\n  }\\n  decimals\\n  relayId\\n  favoritesCount\\n  isDelisted\\n  isFavorite\\n  isFrozen\\n  hasUnlockableContent\\n  ...AssetCardBuyNow_data\\n  orderData {\\n    bestAsk {\\n      orderType\\n      relayId\\n      maker {\\n        address\\n      }\\n    }\\n  }\\n  ...AssetContextMenu_data_3z4lq0 @include(if: $showContextMenu)\\n}\\n\\nfragment AssetCardBuyNow_data on AssetType {\\n  tokenId\\n  relayId\\n  assetContract {\\n    address\\n    chain\\n    id\\n  }\\n  collection {\\n    slug\\n    id\\n  }\\n  orderData {\\n    bestAsk {\\n      relayId\\n    }\\n  }\\n}\\n\\nfragment AssetCardContent_asset on AssetType {\\n  relayId\\n  name\\n  ...AssetMedia_asset\\n  assetContract {\\n    address\\n    chain\\n    openseaVersion\\n    id\\n  }\\n  tokenId\\n  collection {\\n    slug\\n    id\\n  }\\n  isDelisted\\n}\\n\\nfragment AssetCardContent_assetBundle on AssetBundleType {\\n  assetQuantities(first: 18) {\\n    edges {\\n      node {\\n        asset {\\n          relayId\\n          ...AssetMedia_asset\\n          id\\n        }\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment AssetCardFooter_assetBundle on AssetBundleType {\\n  ...AssetCardAnnotations_assetBundle\\n  name\\n  assetCount\\n  assetQuantities(first: 18) {\\n    edges {\\n      node {\\n        asset {\\n          collection {\\n            name\\n            relayId\\n            isVerified\\n            ...collection_url\\n            id\\n          }\\n          id\\n        }\\n        id\\n      }\\n    }\\n  }\\n  assetEventData {\\n    lastSale {\\n      unitPriceQuantity {\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n  }\\n  orderData {\\n    bestBid {\\n      orderType\\n      paymentAssetQuantity {\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n    bestAsk {\\n      closedAt\\n      orderType\\n      dutchAuctionFinalPrice\\n      openedAt\\n      priceFnEndedAt\\n      quantity\\n      decimals\\n      paymentAssetQuantity {\\n        quantity\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment AssetCardFooter_asset_1OrK6u on AssetType {\\n  ...AssetCardAnnotations_asset_1OrK6u\\n  name\\n  tokenId\\n  collection {\\n    name\\n    isVerified\\n    ...collection_url\\n    id\\n  }\\n  isDelisted\\n  assetContract {\\n    address\\n    chain\\n    openseaVersion\\n    id\\n  }\\n  assetEventData {\\n    lastSale {\\n      unitPriceQuantity {\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n  }\\n  orderData {\\n    bestBid {\\n      orderType\\n      paymentAssetQuantity {\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n    bestAsk {\\n      closedAt\\n      orderType\\n      dutchAuctionFinalPrice\\n      openedAt\\n      priceFnEndedAt\\n      quantity\\n      decimals\\n      paymentAssetQuantity {\\n        quantity\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment AssetContextMenu_data_3z4lq0 on AssetType {\\n  ...asset_edit_url\\n  ...asset_url\\n  ...itemEvents_data\\n  isDelisted\\n  isEditable {\\n    value\\n    reason\\n  }\\n  isListable\\n  ownership(identity: {}) {\\n    isPrivate\\n    quantity\\n  }\\n  creator {\\n    address\\n    id\\n  }\\n  collection {\\n    isAuthorizedEditor\\n    id\\n  }\\n}\\n\\nfragment AssetMedia_asset on AssetType {\\n  animationUrl\\n  backgroundColor\\n  collection {\\n    displayData {\\n      cardDisplayStyle\\n    }\\n    id\\n  }\\n  isDelisted\\n  displayImageUrl\\n}\\n\\nfragment AssetQuantity_data on AssetQuantityType {\\n  asset {\\n    ...Price_data\\n    id\\n  }\\n  quantity\\n}\\n\\nfragment AssetSearchFilter_data_1GloFv on Query {\\n  ...CollectionFilter_data_tXjHb\\n  collection(collection: $collection) {\\n    numericTraits {\\n      key\\n      value {\\n        max\\n        min\\n      }\\n      ...NumericTraitFilter_data\\n    }\\n    stringTraits {\\n      key\\n      ...StringTraitFilter_data\\n    }\\n    id\\n  }\\n  ...PaymentFilter_data_2YoIWt\\n}\\n\\nfragment AssetSearchList_data_gVyhu on SearchResultType {\\n  asset {\\n    assetContract {\\n      address\\n      chain\\n      id\\n    }\\n    collection {\\n      isVerified\\n      relayId\\n      id\\n    }\\n    relayId\\n    tokenId\\n    ...AssetSelectionItem_data\\n    ...asset_url\\n    id\\n  }\\n  assetBundle {\\n    relayId\\n    id\\n  }\\n  ...Asset_data_gVyhu\\n}\\n\\nfragment AssetSearch_data_1bS60n on Query {\\n  ...AssetSearchFilter_data_1GloFv\\n  ...SearchPills_data_2Kg4Sq\\n  search(collections: $collections, first: 32, numericTraits: $numericTraits, querystring: $query, resultType: ASSETS, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles) {\\n    edges {\\n      node {\\n        ...AssetSearchList_data_gVyhu\\n        __typename\\n      }\\n      cursor\\n    }\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n}\\n\\nfragment AssetSelectionItem_data on AssetType {\\n  backgroundColor\\n  collection {\\n    displayData {\\n      cardDisplayStyle\\n    }\\n    imageUrl\\n    id\\n  }\\n  imageUrl\\n  name\\n  relayId\\n}\\n\\nfragment Asset_data_gVyhu on SearchResultType {\\n  asset {\\n    relayId\\n    isDelisted\\n    ...AssetCardContent_asset\\n    ...AssetCardFooter_asset_1OrK6u\\n    ...AssetMedia_asset\\n    ...asset_url\\n    ...itemEvents_data\\n    orderData {\\n      bestAsk {\\n        paymentAssetQuantity {\\n          quantityInEth\\n          id\\n        }\\n      }\\n    }\\n    id\\n  }\\n  assetBundle {\\n    relayId\\n    ...bundle_url\\n    ...AssetCardContent_assetBundle\\n    ...AssetCardFooter_assetBundle\\n    orderData {\\n      bestAsk {\\n        paymentAssetQuantity {\\n          quantityInEth\\n          id\\n        }\\n      }\\n    }\\n    id\\n  }\\n}\\n\\nfragment CollectionCardContextMenu_data on CollectionType {\\n  ...collection_url\\n}\\n\\nfragment CollectionCard_data on CollectionType {\\n  ...CollectionCardContextMenu_data\\n  ...collection_url\\n  description\\n  name\\n  shortDescription\\n  slug\\n  logo\\n  banner\\n  isVerified\\n  owner {\\n    displayName\\n    user {\\n      username\\n      id\\n    }\\n    id\\n  }\\n  stats {\\n    totalSupply\\n    id\\n  }\\n}\\n\\nfragment CollectionFilter_data_rfWZ1 on Query {\\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\\n    edges {\\n      node {\\n        assetCount\\n        imageUrl\\n        name\\n        slug\\n        isVerified\\n        id\\n      }\\n    }\\n  }\\n  collections(chains: $chains, first: 100, includeHidden: false, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {\\n    edges {\\n      node {\\n        assetCount\\n        imageUrl\\n        name\\n        slug\\n        isVerified\\n        id\\n        __typename\\n      }\\n      cursor\\n    }\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n}\\n\\nfragment CollectionFilter_data_tXjHb on Query {\\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\\n    edges {\\n      node {\\n        assetCount\\n        imageUrl\\n        name\\n        slug\\n        isVerified\\n        id\\n      }\\n    }\\n  }\\n  collections(first: 100, includeHidden: $includeHiddenCollections, query: $collectionQuery, sortBy: SEVEN_DAY_VOLUME) {\\n    edges {\\n      node {\\n        assetCount\\n        imageUrl\\n        name\\n        slug\\n        isVerified\\n        id\\n        __typename\\n      }\\n      cursor\\n    }\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n}\\n\\nfragment CollectionHeader_data on CollectionType {\\n  name\\n  description\\n  imageUrl\\n  bannerImageUrl\\n  relayId\\n  owner {\\n    ...AccountLink_data\\n    id\\n  }\\n  ...CollectionStatsBar_data\\n  ...SocialBar_data\\n  ...verification_data\\n}\\n\\nfragment CollectionModalContent_data on CollectionType {\\n  description\\n  imageUrl\\n  name\\n  slug\\n}\\n\\nfragment CollectionStatsBar_data on CollectionType {\\n  stats {\\n    numOwners\\n    totalSupply\\n    totalVolume\\n    id\\n  }\\n  slug\\n  floorPrice\\n}\\n\\nfragment NumericTraitFilter_data on NumericTraitTypePair {\\n  key\\n  value {\\n    max\\n    min\\n  }\\n}\\n\\nfragment PaymentFilter_data_2YoIWt on Query {\\n  paymentAssets(first: 10) {\\n    edges {\\n      node {\\n        symbol\\n        relayId\\n        id\\n        __typename\\n      }\\n      cursor\\n    }\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n  PaymentFilter_collection: collection(collection: $collection) {\\n    paymentAssets {\\n      symbol\\n      relayId\\n      id\\n    }\\n    id\\n  }\\n}\\n\\nfragment Price_data on AssetType {\\n  decimals\\n  imageUrl\\n  symbol\\n  usdSpotPrice\\n  assetContract {\\n    blockExplorerLink\\n    chain\\n    id\\n  }\\n}\\n\\nfragment ProfileImage_data on AccountType {\\n  imageUrl\\n  address\\n}\\n\\nfragment SearchPills_data_2Kg4Sq on Query {\\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\\n    edges {\\n      node {\\n        imageUrl\\n        name\\n        slug\\n        ...CollectionModalContent_data\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment SocialBar_data on CollectionType {\\n  relayId\\n  discordUrl\\n  externalUrl\\n  instagramUsername\\n  mediumUsername\\n  slug\\n  telegramUrl\\n  twitterUsername\\n  ...collection_url\\n}\\n\\nfragment StringTraitFilter_data on StringTraitType {\\n  counts {\\n    count\\n    value\\n  }\\n  key\\n}\\n\\nfragment TrendingCollectionsList_data_29bCDU on Query {\\n  trendingCollections(categories: $collections, first: 12) {\\n    edges {\\n      node {\\n        ...CollectionCard_data\\n        relayId\\n        id\\n        __typename\\n      }\\n      cursor\\n    }\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n}\\n\\nfragment accounts_url on AccountType {\\n  address\\n  user {\\n    publicUsername\\n    id\\n  }\\n}\\n\\nfragment asset_edit_url on AssetType {\\n  assetContract {\\n    address\\n    chain\\n    id\\n  }\\n  tokenId\\n  collection {\\n    slug\\n    id\\n  }\\n}\\n\\nfragment asset_url on AssetType {\\n  assetContract {\\n    address\\n    chain\\n    id\\n  }\\n  tokenId\\n}\\n\\nfragment bundle_url on AssetBundleType {\\n  slug\\n}\\n\\nfragment collection_url on CollectionType {\\n  slug\\n}\\n\\nfragment itemEvents_data on AssetType {\\n  assetContract {\\n    address\\n    chain\\n    id\\n  }\\n  tokenId\\n}\\n\\nfragment verification_data on CollectionType {\\n  isMintable\\n  isSafelisted\\n  isVerified\\n}\\n\\nfragment wallet_accountKey on AccountType {\\n  address\\n}\\n\",\"variables\":{\"collection\":\"lady-killaz\",\"collections\":[\"lady-killaz\"],\"collectionQuery\":null,\"includeHiddenCollections\":null,\"numericTraits\":null,\"query\":null,\"sortAscending\":true,\"sortBy\":\"PRICE\",\"stringTraits\":null,\"toggles\":null,\"showContextMenu\":true,\"isCategory\":false,\"categories\":null,\"chains\":null,\"collectionSortBy\":\"SEVEN_DAY_VOLUME\",\"eventTypes\":[\"AUCTION_SUCCESSFUL\"],\"isSingleCollection\":true}}",
			"method": "POST"
		}).then(res => res.json()).then(res => {result = res})
	
		return result;
	})
	.then(text => {
	  cb(text);
	})
}