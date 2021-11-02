const { objectFilter } = require("../util/object_map");
const data = require("../util/data_post");

const EVENT_MAP = {
	eventTimestamp: true,
	eventType: true,
	
	price: {
		asset: {
			symbol: true,
			usdSpotPrice: true
		},
		quantity: true,
		quantityInEth: true
	},
	transaction: {
		blockExplorerLink: true
	},

	seller: {
		address: true
	},
	fromAccount: {
		address: true
	},

	winnerAccount: {
		address: true
	},
	toAccount: {
		address: true
	},

	assetQuantity: {
		quantity: true,
		asset: {
			name: true,
			tokenId: true,
			assetContract: {
				address: true
			}
		}
	}
}

exports.getEvents = function(req, res)
{
	const {query: {slug, events, count}} = req;
	
	if (!slug) {
		res.status(400).send("Bad request");
		return;
	}

	data.post("/api/data", {query: "EventHistoryQuery", variables: {collectionID: slug, eventTypes: events, count: count}})
		.catch(err => res.status(500).send(err))
		.then(query => {
			let edges = query.data.assetEvents.edges;
			let events = [];
			edges.forEach(event => {
				let eventData = event.node;

				events.push(objectFilter(eventData, EVENT_MAP));
			});

			res.status(200).send(events);
		});
}

const PRICE_MAP = {
	bucketEnd: true,
	bucketStart: true,
	quantity: true,
	volume: {
		quantity: true
	}
}

exports.getPrices = function(req, res)
{
	const {query: {slug, date}} = req;
	
	if (!slug) {
		res.status(400).send("Bad request");
		return;
	}

	data.post("/api/data", {query: "PriceHistoryQuery", variables: {collectionID: slug, cutoffDate: date}})
		.then(query => {
			let results = query.data.tradeHistory.results;
			let tradeHistory = [];
			
			results.forEach(bucket => {
				tradeHistory.push(objectFilter(bucket, PRICE_MAP));
			});

			res.status(200).send(tradeHistory);
		})
		.catch(err => res.status(500).send(err));
}