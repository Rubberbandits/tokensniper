const scrape = require('../../config/nightmare');

exports.test = function(req, res) {
	scrape.gqlRun("collectionQuery", JSON.parse("{\"collection\":\"lady-killaz\",\"collections\":[\"lady-killaz\"],\"collectionQuery\":null,\"includeHiddenCollections\":null,\"numericTraits\":null,\"query\":null,\"sortAscending\":true,\"sortBy\":\"PRICE\",\"stringTraits\":null,\"toggles\":null,\"showContextMenu\":true,\"isCategory\":false,\"categories\":null,\"chains\":null,\"collectionSortBy\":\"SEVEN_DAY_VOLUME\",\"eventTypes\":[\"AUCTION_SUCCESSFUL\"],\"isSingleCollection\":true}"), (data) => {
		res.status(200).send(data);
	});

	/*
    scrape.scrapeTest(function(data) {
        res.status(200).send(data);
    })*/
}